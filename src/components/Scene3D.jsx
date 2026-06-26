import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { useStore, footHalf } from '../store.jsx'
import { CATALOG_BY_TYPE } from '../data/catalog.js'
import { snapPosition, haptic, effDims } from '../util.js'
import { buildItem, disposeGroup } from '../three/furniture.js'
import { IconCenter } from './Icons.jsx'

const AMBIANCE = {
  day: { bg: '#0e1014', exposure: 1.05, env: 1.0, key: ['#fff4e0', 2.0], fill: ['#cdddff', 0.5], hemi: 0.55, amb: 0.25 },
  dusk: { bg: '#171009', exposure: 1.12, env: 0.5, key: ['#ffb877', 1.9], fill: ['#8a78d0', 0.45], hemi: 0.35, amb: 0.16 },
  night: { bg: '#080a0f', exposure: 1.18, env: 0.18, key: ['#9fb6ff', 0.5], fill: ['#4a5fb0', 0.3], hemi: 0.14, amb: 0.08 },
}

function woodTexture() {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 512
  const g = c.getContext('2d')
  g.fillStyle = '#b08a5e'
  g.fillRect(0, 0, 512, 512)
  const planks = 6
  const ph = 512 / planks
  for (let i = 0; i < planks; i++) {
    const base = 150 + Math.floor(Math.random() * 30)
    g.fillStyle = `rgb(${base + 20},${base - 10},${base - 50})`
    g.fillRect(0, i * ph, 512, ph)
    for (let k = 0; k < 60; k++) {
      g.strokeStyle = `rgba(90,60,35,${0.04 + Math.random() * 0.06})`
      g.lineWidth = 1
      g.beginPath()
      const y = i * ph + Math.random() * ph
      g.moveTo(0, y)
      g.bezierCurveTo(170, y + (Math.random() - 0.5) * 6, 340, y + (Math.random() - 0.5) * 6, 512, y)
      g.stroke()
    }
    g.fillStyle = 'rgba(40,25,15,0.5)'
    g.fillRect(0, i * ph, 512, 2)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export default function Scene3D() {
  const { state, dispatch } = useStore()
  const { room, items, selected, ambiance } = state
  const mountRef = useRef(null)
  const refs = useRef({})
  const live = useRef({})
  live.current = { room, items, selected, dispatch }

  // ---- one-time init ----
  useEffect(() => {
    const mount = mountRef.current
    const W = mount.clientWidth
    const H = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0e1014')

    const pmrem = new THREE.PMREMGenerator(renderer)
    try {
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    } catch {
      /* environment optional */
    }

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 1.5
    controls.maxDistance = 26
    controls.maxPolarAngle = Math.PI / 2 - 0.04
    controls.minPolarAngle = 0.18
    controls.enablePan = false
    controls.rotateSpeed = 0.7
    controls.zoomSpeed = 0.9

    const hemi = new THREE.HemisphereLight('#dfe6f0', '#2a2620', 0.55)
    scene.add(hemi)
    const ambient = new THREE.AmbientLight('#ffffff', 0.25)
    scene.add(ambient)
    const key = new THREE.DirectionalLight('#fff4e0', 2.0)
    key.position.set(6, 11, 5)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)
    key.shadow.camera.near = 1
    key.shadow.camera.far = 50
    key.shadow.bias = -0.0004
    key.shadow.normalBias = 0.02
    const scam = key.shadow.camera
    scam.left = -12; scam.right = 12; scam.top = 12; scam.bottom = -12
    scene.add(key)
    const fill = new THREE.DirectionalLight('#cdddff', 0.5)
    fill.position.set(-7, 6, -4)
    scene.add(fill)

    const roomGroup = new THREE.Group()
    const furnitureGroup = new THREE.Group()
    scene.add(roomGroup, furnitureGroup)

    // selection ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.46, 0.5, 48),
      new THREE.MeshBasicMaterial({ color: '#d9b779', transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide })
    )
    ring.rotation.x = -Math.PI / 2
    ring.position.y = 0.03
    ring.visible = false
    ring.renderOrder = 2
    scene.add(ring)

    Object.assign(refs.current, {
      renderer, scene, camera, controls, roomGroup, furnitureGroup,
      key, fill, hemi, ambient, pmrem, ring,
      wood: woodTexture(), walls: [], framed: false, itemMap: new Map(),
      raycaster: new THREE.Raycaster(), drag: null,
    })

    // ---- pointer interaction (select + drag) ----
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    const dom = renderer.domElement
    const ndc = new THREE.Vector2()

    const setNDC = (e) => {
      const r = dom.getBoundingClientRect()
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    }
    const floorHit = () => {
      const p = new THREE.Vector3()
      refs.current.raycaster.setFromCamera(ndc, camera)
      return refs.current.raycaster.ray.intersectPlane(floorPlane, p) ? p : null
    }
    const pickItem = () => {
      refs.current.raycaster.setFromCamera(ndc, camera)
      const hits = refs.current.raycaster.intersectObjects(furnitureGroup.children, true)
      for (const h of hits) {
        let o = h.object
        while (o && o.userData.uid === undefined) o = o.parent
        if (o) return o
      }
      return null
    }

    const onDown = (e) => {
      setNDC(e)
      const grp = pickItem()
      if (grp) {
        controls.enabled = false
        const { items: its, dispatch: dsp } = live.current
        const it = its.find((i) => i.uid === grp.userData.uid)
        dsp({ type: 'select', uid: grp.userData.uid })
        haptic(8)
        const p = floorHit()
        refs.current.drag = {
          uid: grp.userData.uid,
          grp,
          offX: p ? p.x - grp.position.x : 0,
          offZ: p ? p.z - grp.position.z : 0,
          rot: it?.rot || 0,
          type: it?.type,
          scale: it?.scale,
          moved: false,
          sx: e.clientX, sy: e.clientY,
        }
        dom.setPointerCapture?.(e.pointerId)
      } else {
        refs.current.pending = { x: e.clientX, y: e.clientY }
      }
    }
    const onMove = (e) => {
      const d = refs.current.drag
      if (!d) return
      setNDC(e)
      const p = floorHit()
      if (!p) return
      if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 3) d.moved = true
      const { room: rm, dispatch: dsp } = live.current
      const hw = rm.width / 2
      const hd = rm.depth / 2
      const c = CATALOG_BY_TYPE[d.type]
      const half = footHalf(c, d.rot, d.scale)
      const targetX = p.x - d.offX + hw
      const targetZ = p.z - d.offZ + hd
      const snapped = snapPosition(targetX, targetZ, half.x, half.z, rm)
      dsp({ type: 'update', uid: d.uid, patch: snapped, mergeKey: `move3d:${d.uid}` })
    }
    const onUp = (e) => {
      if (refs.current.drag) {
        refs.current.drag = null
        controls.enabled = true
      } else if (refs.current.pending) {
        const pp = refs.current.pending
        if (Math.hypot(e.clientX - pp.x, e.clientY - pp.y) < 5) {
          live.current.dispatch({ type: 'select', uid: null })
        }
        refs.current.pending = null
      }
      try { dom.releasePointerCapture?.(e.pointerId) } catch { /* noop */ }
    }
    dom.addEventListener('pointerdown', onDown, true)
    dom.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    let raf
    const tick = () => {
      controls.update()
      const camDir = new THREE.Vector3().copy(camera.position).sub(controls.target)
      for (const w of refs.current.walls) w.mesh.visible = camDir.dot(w.normal) < 0.05
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      dom.removeEventListener('pointerdown', onDown, true)
      dom.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      controls.dispose()
      disposeGroup(roomGroup)
      disposeGroup(furnitureGroup)
      ring.geometry.dispose()
      ring.material.dispose()
      refs.current.wood?.dispose()
      pmrem.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  // ---- ambiance ----
  useEffect(() => {
    const r = refs.current
    if (!r.renderer) return
    const a = AMBIANCE[ambiance] || AMBIANCE.day
    r.scene.background.set(a.bg)
    r.scene.environmentIntensity = a.env
    r.renderer.toneMappingExposure = a.exposure
    r.key.color.set(a.key[0]); r.key.intensity = a.key[1]
    r.fill.color.set(a.fill[0]); r.fill.intensity = a.fill[1]
    r.hemi.intensity = a.hemi
    r.ambient.intensity = a.amb
  }, [ambiance])

  // ---- rebuild room shell ----
  useEffect(() => {
    const r = refs.current
    if (!r.roomGroup) return
    const { width, depth, height } = room
    disposeGroup(r.roomGroup)
    r.roomGroup.clear()
    r.walls = []

    const wood = r.wood
    wood.repeat.set(Math.max(1, width / 1.5), Math.max(1, depth / 1.5))
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshStandardMaterial({ map: wood, roughness: 0.65, metalness: 0.02 })
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    r.roomGroup.add(floor)

    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(width + 0.06, depth + 0.06),
      new THREE.MeshStandardMaterial({ color: '#0c0d10', roughness: 1 })
    )
    plate.rotation.x = -Math.PI / 2
    plate.position.y = -0.01
    r.roomGroup.add(plate)

    const wallMat = new THREE.MeshStandardMaterial({ color: '#e8e3da', roughness: 0.95, side: THREE.DoubleSide })
    const t = 0.08
    const mkWall = (w, h, d, pos, normal) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
      m.position.copy(pos)
      m.receiveShadow = true
      r.roomGroup.add(m)
      r.walls.push({ mesh: m, normal: normal.clone() })
      const sk = new THREE.Mesh(
        new THREE.BoxGeometry(w === t ? t + 0.02 : w, 0.09, d === t ? t + 0.02 : d),
        new THREE.MeshStandardMaterial({ color: '#cfc7ba', roughness: 0.8 })
      )
      sk.position.set(pos.x, 0.045, pos.z)
      r.roomGroup.add(sk)
    }
    const hw = width / 2
    const hd = depth / 2
    mkWall(width + t, height, t, new THREE.Vector3(0, height / 2, -hd - t / 2), new THREE.Vector3(0, 0, -1))
    mkWall(width + t, height, t, new THREE.Vector3(0, height / 2, hd + t / 2), new THREE.Vector3(0, 0, 1))
    mkWall(t, height, depth + t, new THREE.Vector3(-hw - t / 2, height / 2, 0), new THREE.Vector3(-1, 0, 0))
    mkWall(t, height, depth + t, new THREE.Vector3(hw + t / 2, height / 2, 0), new THREE.Vector3(1, 0, 0))

    r.controls.target.set(0, height * 0.35, 0)
    if (!r.framed) {
      reframe()
      r.framed = true
    }
  }, [room.width, room.depth, room.height])

  // ---- diff furniture + selection ring ----
  useEffect(() => {
    const r = refs.current
    if (!r.furnitureGroup) return
    const map = r.itemMap
    const hw = room.width / 2
    const hd = room.depth / 2
    const seen = new Set()

    for (const it of items) {
      seen.add(it.uid)
      let entry = map.get(it.uid)
      if (!entry || entry.type !== it.type || entry.color !== it.color) {
        if (entry) { r.furnitureGroup.remove(entry.group); disposeGroup(entry.group) }
        const group = buildItem(it)
        r.furnitureGroup.add(group)
        entry = { group, type: it.type, color: it.color }
        map.set(it.uid, entry)
      }
      entry.group.position.set(it.x - hw, 0, it.z - hd)
      entry.group.rotation.y = -((it.rot || 0) * Math.PI) / 180
      const s = it.scale || {}
      entry.group.scale.set(s.x ?? 1, s.y ?? 1, s.z ?? 1)
    }
    for (const [uid, entry] of map) {
      if (!seen.has(uid)) {
        r.furnitureGroup.remove(entry.group)
        disposeGroup(entry.group)
        map.delete(uid)
      }
    }

    // selection ring
    const sel = items.find((i) => i.uid === selected)
    if (sel) {
      const c = CATALOG_BY_TYPE[sel.type]
      const d = effDims(c, sel)
      const radius = (Math.max(d.w, d.d) / 2) * 1.12 + 0.06
      r.ring.scale.setScalar(radius / 0.5)
      r.ring.position.set(sel.x - hw, 0.03, sel.z - hd)
      r.ring.visible = true
    } else {
      r.ring.visible = false
    }
  }, [items, room.width, room.depth, selected])

  const reframe = () => {
    const r = refs.current
    if (!r.camera) return
    const { width, depth, height } = live.current.room || room
    const dist = Math.max(width, depth) * 1.15 + 2
    r.camera.position.set(width * 0.55, Math.max(width, depth) * 0.85 + 1.5, depth * 0.9 + dist * 0.3)
    r.controls.target.set(0, height * 0.35, 0)
    r.controls.update()
  }

  return (
    <div className="scene3d" ref={mountRef}>
      <div className="ambiance">
        {['day', 'dusk', 'night'].map((a) => (
          <button key={a} className={ambiance === a ? 'active' : ''} onClick={() => dispatch({ type: 'ambiance', value: a })}>
            {a[0].toUpperCase() + a.slice(1)}
          </button>
        ))}
      </div>
      <button className="recenter" onClick={reframe} aria-label="Recenter view">
        <IconCenter size={20} />
      </button>
    </div>
  )
}
