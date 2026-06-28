import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js'
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js'
import { useStore } from '../store.jsx'
import { useAssets } from '../assets.jsx'
import { defFor } from '../data/catalog.js'
import { isModelType, phId } from '../data/phModels.js'
import { loadModel, instanceModel } from '../three/modelLoader.js'
import { haptic, effDims } from '../util.js'
import { wallGeometry } from '../wall.js'
import { buildItem, disposeGroup } from '../three/furniture.js'
import { MATERIAL_BY_ID, matUrl, HDRI_URL } from '../data/materials.js'
import { IconCenter } from './Icons.jsx'

const AMBIANCE = {
  day: { bg: '#0e1014', exposure: 1.05, env: 1.0, key: ['#fff4e0', 2.0], fill: ['#cdddff', 0.5], hemi: 0.55, amb: 0.25 },
  dusk: { bg: '#171009', exposure: 1.12, env: 0.5, key: ['#ffb877', 1.9], fill: ['#8a78d0', 0.45], hemi: 0.35, amb: 0.16 },
  night: { bg: '#080a0f', exposure: 1.18, env: 0.18, key: ['#9fb6ff', 0.5], fill: ['#4a5fb0', 0.3], hemi: 0.14, amb: 0.08 },
}
const snap = (v, g) => Math.round(v / g) * g
const clamp8 = (v) => Math.max(0, Math.min(255, Math.round(v)))
const WOOD_BASE = { oak: '#c79a6b', walnut: '#6e4a30', birch: '#d8c7a3', grey: '#9a9a92' }

function woodTexture(baseHex = '#b08a5e') {
  const col = new THREE.Color(baseHex)
  const br = col.r * 255
  const bg = col.g * 255
  const bb = col.b * 255
  const c = document.createElement('canvas')
  c.width = 512; c.height = 512
  const g = c.getContext('2d')
  g.fillStyle = baseHex; g.fillRect(0, 0, 512, 512)
  const planks = 6; const ph = 512 / planks
  for (let i = 0; i < planks; i++) {
    const d = (Math.random() - 0.5) * 36
    g.fillStyle = `rgb(${clamp8(br + d)},${clamp8(bg + d)},${clamp8(bb + d)})`
    g.fillRect(0, i * ph, 512, ph)
    for (let k = 0; k < 60; k++) {
      g.strokeStyle = `rgba(${clamp8(br * 0.45)},${clamp8(bg * 0.4)},${clamp8(bb * 0.35)},${0.04 + Math.random() * 0.06})`
      g.lineWidth = 1
      g.beginPath(); const y = i * ph + Math.random() * ph
      g.moveTo(0, y); g.bezierCurveTo(170, y + (Math.random() - 0.5) * 6, 340, y + (Math.random() - 0.5) * 6, 512, y); g.stroke()
    }
    g.fillStyle = 'rgba(28,16,8,0.45)'; g.fillRect(0, i * ph, 512, 2)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export default function Scene3D({ onOpenInspector }) {
  const { state, dispatch } = useStore()
  const { rooms, walls, items, builtins, selected, ambiance } = state
  const { map: assetMap } = useAssets()
  const mountRef = useRef(null)
  const menuRef = useRef(null)
  const refs = useRef({})
  const live = useRef({})
  live.current = { rooms, walls, items, selected, dispatch, onOpenInspector }

  // resolve a finish "tex" string to a cached base texture, or null for solid colour
  function finishBase(tex) {
    const r = refs.current
    if (!tex || typeof tex !== 'string') return null
    if (tex.startsWith('wood:')) {
      const v = tex.slice(5)
      if (!r.woodCache.has(v)) r.woodCache.set(v, woodTexture(WOOD_BASE[v] || '#c79a6b'))
      return r.woodCache.get(v)
    }
    if (tex.startsWith('img:')) {
      const id = tex.slice(4)
      if (!r.imgCache.has(id)) {
        const d = assetMap[id]
        if (!d) return null
        const t = new THREE.TextureLoader().load(d)
        t.colorSpace = THREE.SRGBColorSpace
        t.wrapS = t.wrapT = THREE.RepeatWrapping
        r.imgCache.set(id, t)
      }
      return r.imgCache.get(id)
    }
    if (tex.startsWith('mat:')) {
      const id = tex.slice(4)
      if (!MATERIAL_BY_ID[id]) return null
      const key = `mat:${id}`
      if (!r.imgCache.has(key)) {
        const t = new THREE.TextureLoader().load(matUrl(id))
        t.colorSpace = THREE.SRGBColorSpace
        t.wrapS = t.wrapT = THREE.RepeatWrapping
        r.imgCache.set(key, t)
      }
      return r.imgCache.get(key)
    }
    return null
  }
  // the matching normal-map texture for a finish, or null
  function finishNormal(tex) {
    const r = refs.current
    if (typeof tex !== 'string' || !tex.startsWith('mat:')) return null
    const id = tex.slice(4)
    const m = MATERIAL_BY_ID[id]
    if (!m || !m.normal) return null
    const key = `nrm:${id}`
    if (!r.imgCache.has(key)) {
      const t = new THREE.TextureLoader().load(matUrl(id, true))
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      r.imgCache.set(key, t)
    }
    return r.imgCache.get(key)
  }
  // real-world tile size (m) for a bundled material, else null (use caller's repeat)
  function matRepeat(tex) {
    if (typeof tex !== 'string' || !tex.startsWith('mat:')) return null
    return MATERIAL_BY_ID[tex.slice(4)]?.repeat || null
  }
  // build a material for a finish {tex, color}. sizeU/sizeV are the surface
  // dimensions in metres; defTile is the fallback tile size for non-material
  // textures. Real Poly Haven materials tile at their declared real-world size.
  function finishMaterial(tex, color, fallback, sizeU, sizeV, defTile = 1.5, extra = {}) {
    const base = finishBase(tex)
    if (base) {
      const tile = matRepeat(tex) || defTile
      const repU = Math.max(1, sizeU / tile)
      const repV = Math.max(1, sizeV / tile)
      // Always clone: cached textures are shared, so per-surface repeat must be
      // set on an independent copy (the underlying image is still shared).
      const t = base.clone()
      t.needsUpdate = true
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      t.colorSpace = THREE.SRGBColorSpace
      refs.current.roomTexList.push(t)
      t.repeat.set(repU, repV)
      const mat = new THREE.MeshStandardMaterial({ map: t, ...extra })
      const nrm = finishNormal(tex)
      if (nrm) {
        const n = nrm.clone()
        n.needsUpdate = true
        n.wrapS = n.wrapT = THREE.RepeatWrapping
        n.repeat.set(repU, repV)
        refs.current.roomTexList.push(n)
        mat.normalMap = n
        mat.normalScale = new THREE.Vector2(0.6, 0.6)
      }
      return mat
    }
    return new THREE.MeshStandardMaterial({ color: new THREE.Color(color || fallback), ...extra })
  }

  // ---- init ----
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
    renderer.toneMappingExposure = 1.05
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0e1014')
    const pmrem = new THREE.PMREMGenerator(renderer)
    try { scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture } catch { /* optional */ }
    // Upgrade to a real Poly Haven CC0 interior HDRI for image-based lighting
    // and reflections (async; the synthetic RoomEnvironment is the fallback).
    new RGBELoader().load(HDRI_URL, (hdr) => {
      try {
        hdr.mapping = THREE.EquirectangularReflectionMapping
        const env = pmrem.fromEquirectangular(hdr).texture
        if (refs.current.scene) { refs.current.scene.environment = env; refs.current.envMap = env }
      } catch { /* keep fallback */ }
      hdr.dispose()
    }, undefined, () => { /* offline / load failed: keep RoomEnvironment */ })

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 200)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 1.2
    controls.maxDistance = 60
    controls.maxPolarAngle = Math.PI / 2 - 0.04
    controls.minPolarAngle = 0.16
    controls.enablePan = true
    controls.rotateSpeed = 0.7

    const hemi = new THREE.HemisphereLight('#dfe6f0', '#2a2620', 0.55); scene.add(hemi)
    const ambient = new THREE.AmbientLight('#ffffff', 0.25); scene.add(ambient)
    const key = new THREE.DirectionalLight('#fff4e0', 2.0)
    key.position.set(8, 14, 6)
    key.castShadow = true
    key.shadow.mapSize.set(4096, 4096)
    key.shadow.camera.near = 1; key.shadow.camera.far = 80
    key.shadow.bias = -0.0003; key.shadow.normalBias = 0.02
    key.shadow.radius = 4
    const sc = key.shadow.camera
    sc.left = -20; sc.right = 20; sc.top = 20; sc.bottom = -20
    scene.add(key)
    const fill = new THREE.DirectionalLight('#cdddff', 0.5); fill.position.set(-9, 7, -5); scene.add(fill)

    // post-processing for richer renders (ambient occlusion + crisp AA)
    let composer = null
    let gtao = null
    try {
      composer = new EffectComposer(renderer)
      composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      composer.setSize(W, H)
      composer.addPass(new RenderPass(scene, camera))
      gtao = new GTAOPass(scene, camera, W, H)
      gtao.output = GTAOPass.OUTPUT.Default
      gtao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1, thickness: 1, scale: 1.1, samples: 16, screenSpaceRadius: false })
      gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 4, radiusExponent: 1, rings: 2, samples: 16 })
      composer.addPass(gtao)
      composer.addPass(new SMAAPass(W, H))
      composer.addPass(new OutputPass())
    } catch {
      composer = null
    }

    // ground + grid
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(160, 160),
      new THREE.MeshStandardMaterial({ color: '#0c0d11', roughness: 1 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.04
    ground.receiveShadow = true
    scene.add(ground)
    const grid = new THREE.GridHelper(160, 160, 0x2c323c, 0x191d23)
    grid.position.y = -0.02
    scene.add(grid)

    const roomGroup = new THREE.Group()
    const furnitureGroup = new THREE.Group()
    const builtinGroup = new THREE.Group()
    scene.add(roomGroup, furnitureGroup, builtinGroup)

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.46, 0.5, 48),
      new THREE.MeshBasicMaterial({ color: '#d9b779', transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide })
    )
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; ring.visible = false; ring.renderOrder = 2
    scene.add(ring)

    // rotation gizmo (torus + notches)
    const gizmo = new THREE.Group()
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.035, 12, 48),
      new THREE.MeshStandardMaterial({ color: '#d9b779', emissive: '#7a5a1e', emissiveIntensity: 0.5, roughness: 0.4, metalness: 0.3 })
    )
    torus.rotation.x = -Math.PI / 2
    torus.userData.gizmo = true
    gizmo.add(torus)
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16),
        new THREE.MeshStandardMaterial({ color: '#fff3d6', emissive: '#d9b779', emissiveIntensity: 0.4, roughness: 0.3 }))
      knob.position.set(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5)
      knob.userData.gizmo = true
      gizmo.add(knob)
    }
    gizmo.visible = false
    gizmo.renderOrder = 3
    scene.add(gizmo)

    Object.assign(refs.current, {
      renderer, scene, camera, controls, roomGroup, furnitureGroup,
      key, fill, ambient, hemi, pmrem, ring, gizmo, builtinGroup, composer, gtao,
      woodCache: new Map(), imgCache: new Map(), roomTexList: [], walls: [], itemMap: new Map(), framed: false,
      raycaster: new THREE.Raycaster(), drag: null, rotate: null, pending: null,
    })

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
    const ancestorUid = (o) => { while (o && o.userData.uid === undefined) o = o.parent; return o }
    const isGizmo = (o) => { while (o) { if (o.userData.gizmo) return true; o = o.parent } return false }

    const onDown = (e) => {
      setNDC(e)
      const rc = refs.current.raycaster
      rc.setFromCamera(ndc, camera)
      const { items: its, selected: selNow, dispatch: dsp } = live.current

      // rotation gizmo
      if (refs.current.gizmo.visible) {
        const gh = rc.intersectObject(refs.current.gizmo, true)
        if (gh.length && isGizmo(gh[0].object)) {
          const sel = its.find((i) => i.uid === selNow?.uid)
          const p = floorHit()
          if (sel && p) {
            controls.enabled = false
            refs.current.rotate = { uid: sel.uid, cx: sel.x, cz: sel.z, startAng: Math.atan2(p.z - sel.z, p.x - sel.x), startRot: sel.rot || 0 }
            dom.setPointerCapture?.(e.pointerId)
            return
          }
        }
      }
      // furniture
      const hits = rc.intersectObjects(refs.current.furnitureGroup.children, true)
      let grp = null
      for (const h of hits) { const a = ancestorUid(h.object); if (a) { grp = a; break } }
      if (grp) {
        controls.enabled = false
        const it = its.find((i) => i.uid === grp.userData.uid)
        dsp({ type: 'select', sel: { type: 'item', uid: grp.userData.uid } })
        haptic(8)
        const p = floorHit()
        refs.current.drag = { uid: grp.userData.uid, grp, offX: p ? p.x - grp.position.x : 0, offZ: p ? p.z - grp.position.z : 0 }
        dom.setPointerCapture?.(e.pointerId)
      } else {
        refs.current.pending = { x: e.clientX, y: e.clientY }
      }
    }
    const onMove = (e) => {
      setNDC(e)
      const r = refs.current
      if (r.rotate) {
        const p = floorHit()
        if (!p) return
        const ang = Math.atan2(p.z - r.rotate.cz, p.x - r.rotate.cx)
        let deg = r.rotate.startRot + ((ang - r.rotate.startAng) * 180) / Math.PI
        deg = ((Math.round(deg) % 360) + 360) % 360
        live.current.dispatch({ type: 'update', sel: { type: 'item', uid: r.rotate.uid }, patch: { rot: deg }, mergeKey: `rot3d:${r.rotate.uid}` })
        return
      }
      if (r.drag) {
        const p = floorHit()
        if (!p) return
        live.current.dispatch({ type: 'update', sel: { type: 'item', uid: r.drag.uid }, patch: { x: snap(p.x - r.drag.offX, 0.05), z: snap(p.z - r.drag.offZ, 0.05) }, mergeKey: `mv3d:${r.drag.uid}` })
      }
    }
    const onUp = (e) => {
      const r = refs.current
      if (r.drag || r.rotate) { r.drag = null; r.rotate = null; controls.enabled = true }
      else if (r.pending) {
        if (Math.hypot(e.clientX - r.pending.x, e.clientY - r.pending.y) < 5) live.current.dispatch({ type: 'select', sel: null })
        r.pending = null
      }
      try { dom.releasePointerCapture?.(e.pointerId) } catch { /* noop */ }
    }
    dom.addEventListener('pointerdown', onDown, true)
    dom.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    let raf
    const tick = () => {
      controls.update()
      const cp = camera.position
      for (const w of refs.current.walls) {
        const d = (cp.x - w.center.x) * w.normal.x + (cp.z - w.center.z) * w.normal.z
        if (!w.hidden && d > 0.1) w.hidden = true
        else if (w.hidden && d < -0.1) w.hidden = false
        w.mesh.visible = !w.hidden
      }
      // position the floating ⋯ button just above the selected item
      const btn = menuRef.current
      if (btn) {
        const { items: its2, selected: sel2 } = live.current
        const it = sel2?.type === 'item' ? its2.find((i) => i.uid === sel2.uid) : null
        if (it && !refs.current.drag && !refs.current.rotate) {
          const c = defFor(it.type)
          const dd = effDims(c, it)
          const v = new THREE.Vector3(it.x, dd.h + 0.35, it.z).project(camera)
          const rect = renderer.domElement
          const sx = (v.x * 0.5 + 0.5) * rect.clientWidth
          const sy = (-v.y * 0.5 + 0.5) * rect.clientHeight
          if (v.z < 1) {
            btn.style.display = 'flex'
            btn.style.left = `${sx}px`
            btn.style.top = `${sy}px`
          } else btn.style.display = 'none'
        } else btn.style.display = 'none'
      }
      if (composer) composer.render()
      else renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth; const h = mount.clientHeight
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
      composer?.setSize(w, h)
    })
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      dom.removeEventListener('pointerdown', onDown, true)
      dom.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      controls.dispose()
      disposeGroup(roomGroup); disposeGroup(furnitureGroup); disposeGroup(builtinGroup)
      ring.geometry.dispose(); ring.material.dispose()
      refs.current.woodCache.forEach((t) => t.dispose())
      refs.current.imgCache.forEach((t) => t.dispose())
      refs.current.roomTexList.forEach((t) => t.dispose())
      refs.current.envMap?.dispose?.()
      composer?.dispose?.()
      pmrem.dispose(); renderer.dispose()
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

  // ---- rooms + walls shell ----
  useEffect(() => {
    const r = refs.current
    if (!r.roomGroup) return
    disposeGroup(r.roomGroup); r.roomGroup.clear(); r.walls = []
    r.roomTexList.forEach((tx) => tx.dispose()); r.roomTexList = []
    const skirtMat = new THREE.MeshStandardMaterial({ color: '#cfc7ba', roughness: 0.8 })
    const freeWallMat = new THREE.MeshStandardMaterial({ color: '#e8e3da', roughness: 0.95, side: THREE.DoubleSide })
    const t = 0.1

    const addWallBox = (mat, w, h, d, cx, cy, cz, nx, nz, hideable) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      m.position.set(cx, cy, cz)
      m.castShadow = true; m.receiveShadow = true
      r.roomGroup.add(m)
      if (hideable) r.walls.push({ mesh: m, normal: new THREE.Vector3(nx, 0, nz), center: new THREE.Vector3(cx, 0, cz), hidden: false })
    }

    for (const room of rooms) {
      const { x, z, w, d, height } = room
      const cx = x + w / 2
      const cz = z + d / 2
      const ftex = room.floorTex || (room.floorColor ? undefined : 'wood:oak')
      const floorMat = finishMaterial(ftex, room.floorColor, '#b08a5e', w, d, 1.5, { roughness: 0.65, metalness: 0.02 })
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorMat)
      floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0, cz); floor.receiveShadow = true
      r.roomGroup.add(floor)
      const wallMat = finishMaterial(room.wallTex, room.wallColor, '#e8e3da', w, height, 1.2, { roughness: 0.95, side: THREE.DoubleSide })
      const on = (s) => !room.wallsOn || room.wallsOn[s] !== false
      const skirt = (geo, px, pz) => { const m = new THREE.Mesh(geo, skirtMat); m.position.set(px, 0.045, pz); r.roomGroup.add(m) }
      // Walls are centred on the room edges so neighbouring rooms share the
      // same wall line (clean joins) instead of leaving a double-wall gap.
      if (on('n')) { addWallBox(wallMat, w + t, height, t, cx, height / 2, z, 0, -1, true); skirt(new THREE.BoxGeometry(w - t, 0.09, 0.04), cx, z + t / 2 + 0.02) }
      if (on('s')) { addWallBox(wallMat, w + t, height, t, cx, height / 2, z + d, 0, 1, true); skirt(new THREE.BoxGeometry(w - t, 0.09, 0.04), cx, z + d - t / 2 - 0.02) }
      if (on('w')) { addWallBox(wallMat, t, height, d + t, x, height / 2, cz, -1, 0, true); skirt(new THREE.BoxGeometry(0.04, 0.09, d - t), x + t / 2 + 0.02, cz) }
      if (on('e')) { addWallBox(wallMat, t, height, d + t, x + w, height / 2, cz, 1, 0, true); skirt(new THREE.BoxGeometry(0.04, 0.09, d - t), x + w - t / 2 - 0.02, cz) }
    }

    // free walls (always visible)
    for (const wl of walls) {
      const len = Math.hypot(wl.x2 - wl.x1, wl.z2 - wl.z1)
      if (len < 1e-3) continue
      const m = new THREE.Mesh(new THREE.BoxGeometry(len, wl.height, wl.thickness), freeWallMat)
      m.position.set((wl.x1 + wl.x2) / 2, wl.height / 2, (wl.z1 + wl.z2) / 2)
      m.rotation.y = -Math.atan2(wl.z2 - wl.z1, wl.x2 - wl.x1)
      m.castShadow = true; m.receiveShadow = true
      r.roomGroup.add(m)
    }

    if (!r.framed && (rooms.length || walls.length || items.length)) {
      reframe(); r.framed = true
    }
  }, [rooms, walls, assetMap])

  // ---- furniture diff + selection ring/gizmo ----
  useEffect(() => {
    const r = refs.current
    if (!r.furnitureGroup) return
    const map = r.itemMap
    // Model instances share cached geometry/materials with the prototype, so we
    // must NOT dispose them (that would corrupt the cache) — only procedural
    // builds own unique resources.
    const removeEntry = (entry) => { r.furnitureGroup.remove(entry.group); if (!entry.model) disposeGroup(entry.group) }
    const seen = new Set()
    for (const it of items) {
      seen.add(it.uid)
      const model = isModelType(it.type)
      let entry = map.get(it.uid)
      if (!entry || entry.type !== it.type || (!model && entry.color !== it.color)) {
        if (entry) removeEntry(entry)
        if (model) {
          const group = new THREE.Group()
          r.furnitureGroup.add(group)
          entry = { group, type: it.type, model: true, loaded: false }
          map.set(it.uid, entry)
          loadModel(phId(it.type)).then((res) => {
            const cur = map.get(it.uid)
            if (!cur || cur.type !== it.type || cur.loaded) return
            cur.group.add(instanceModel(res))
            cur.loaded = true
            const liveIt = live.current.items.find((i) => i.uid === it.uid)
            if (liveIt && !liveIt.dim) live.current.dispatch({ type: 'itemDim', uid: it.uid, dim: res.dim })
          }).catch(() => { /* offline / load failed */ })
        } else {
          const group = buildItem(it)
          r.furnitureGroup.add(group)
          entry = { group, type: it.type, color: it.color }
          map.set(it.uid, entry)
        }
      }
      entry.group.position.set(it.x, 0, it.z)
      entry.group.rotation.y = -((it.rot || 0) * Math.PI) / 180
      const s = it.scale || {}
      entry.group.scale.set(s.x ?? 1, s.y ?? 1, s.z ?? 1)
    }
    for (const [id, entry] of map) {
      if (!seen.has(id)) { removeEntry(entry); map.delete(id) }
    }

    const sel = selected?.type === 'item' ? items.find((i) => i.uid === selected.uid) : null
    if (sel) {
      const c = defFor(sel.type)
      const dd = effDims(c, sel)
      const radius = (Math.max(dd.w, dd.d) / 2) * 1.18 + 0.12
      r.ring.scale.setScalar(radius / 0.5); r.ring.position.set(sel.x, 0.03, sel.z); r.ring.visible = true
      r.gizmo.scale.setScalar(radius / 0.5); r.gizmo.position.set(sel.x, 0.04, sel.z); r.gizmo.visible = true
    } else {
      r.ring.visible = false; r.gizmo.visible = false
    }
  }, [items, selected])

  // ---- built-ins (elevation modules) ----
  useEffect(() => {
    const r = refs.current
    if (!r.builtinGroup) return
    disposeGroup(r.builtinGroup)
    r.builtinGroup.clear()
    const thk = 0.03
    for (const b of builtins) {
      const geom = wallGeometry(b.wall, rooms, walls)
      if (!geom) continue
      const base = finishBase(b.tex)
      const nMap = finishNormal(b.tex)
      const mat = base
        ? new THREE.MeshStandardMaterial({ map: base, normalMap: nMap || null, roughness: 0.6, metalness: 0.04 })
        : new THREE.MeshStandardMaterial({ color: new THREE.Color(b.color || '#c7ad84'), roughness: 0.62, metalness: 0.04 })

      // board / slat: a thin beam between two points in the wall plane
      if (b.kind === 'board') {
        const um = (b.u1 + b.u2) / 2
        const vm = (b.v1 + b.v2) / 2
        const du = b.u2 - b.u1
        const dv = b.v2 - b.v1
        const len = Math.hypot(du, dv) || 1e-6
        const cos = du / len
        const sin = dv / len
        const longA = new THREE.Vector3(geom.dirx * cos, sin, geom.dirz * cos)
        const thickA = new THREE.Vector3(-geom.dirx * sin, cos, -geom.dirz * sin)
        const depthA = new THREE.Vector3(geom.nx, 0, geom.nz)
        const MB = new THREE.Matrix4().makeBasis(longA, thickA, depthA)
        MB.setPosition(geom.ox + geom.dirx * um + geom.nx * (b.depth / 2), vm, geom.oz + geom.dirz * um + geom.nz * (b.depth / 2))
        const beam = new THREE.Mesh(new THREE.BoxGeometry(len, b.thickness || 0.05, b.depth || 0.04), mat)
        beam.castShadow = true
        beam.receiveShadow = true
        beam.matrixAutoUpdate = false
        beam.matrix.copy(MB)
        r.builtinGroup.add(beam)
        continue
      }

      const M = new THREE.Matrix4()
      const dir = new THREE.Vector3(geom.dirx, 0, geom.dirz)
      const up = new THREE.Vector3(0, 1, 0)
      const nrm = new THREE.Vector3(geom.nx, 0, geom.nz)
      M.makeBasis(dir, up, nrm)
      const along = b.u + b.w / 2
      M.setPosition(
        geom.ox + geom.dirx * along + geom.nx * (b.depth / 2),
        b.v + b.h / 2,
        geom.oz + geom.dirz * along + geom.nz * (b.depth / 2)
      )
      const node = new THREE.Group()
      node.matrixAutoUpdate = false
      node.matrix.copy(M)
      const addBox = (w, h, d, x, y, z) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
        m.position.set(x, y, z)
        m.castShadow = true
        m.receiveShadow = true
        node.add(m)
      }
      if (b.kind === 'cubby') {
        addBox(b.w, b.h, thk, 0, 0, -b.depth / 2 + thk / 2) // back
        addBox(b.w, thk, b.depth, 0, b.h / 2 - thk / 2, 0) // top
        addBox(b.w, thk, b.depth, 0, -b.h / 2 + thk / 2, 0) // bottom
        addBox(thk, b.h, b.depth, -b.w / 2 + thk / 2, 0, 0) // left
        addBox(thk, b.h, b.depth, b.w / 2 - thk / 2, 0, 0) // right
      } else {
        addBox(b.w, b.h, b.depth, 0, 0, 0)
      }
      r.builtinGroup.add(node)
    }
  }, [builtins, rooms, walls, assetMap])

  function reframe() {
    const r = refs.current
    if (!r.camera) return
    const { rooms: rs, walls: ws, items: its } = live.current
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, maxH = 2.7
    const acc = (x, z) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z) }
    for (const rm of rs) { acc(rm.x, rm.z); acc(rm.x + rm.w, rm.z + rm.d); maxH = Math.max(maxH, rm.height) }
    for (const w of ws) { acc(w.x1, w.z1); acc(w.x2, w.z2); maxH = Math.max(maxH, w.height) }
    for (const it of its) acc(it.x, it.z)
    if (!isFinite(minX)) { minX = -2; maxX = 2; minZ = -2; maxZ = 2 }
    const cx = (minX + maxX) / 2
    const cz = (minZ + maxZ) / 2
    const ext = Math.max(maxX - minX, maxZ - minZ, 2)
    const dist = ext * 1.1 + 4
    r.camera.position.set(cx + ext * 0.45, ext * 0.8 + 3, cz + dist)
    r.controls.target.set(cx, maxH * 0.3, cz)
    r.controls.update()
  }

  return (
    <div className="scene3d" ref={mountRef}>
      <button className="recenter" onClick={reframe} aria-label="Recenter view"><IconCenter size={20} /></button>
      <button
        ref={menuRef}
        className="piece-menu"
        style={{ display: 'none' }}
        aria-label="Edit piece"
        title="Edit this piece"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); live.current.onOpenInspector?.() }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" /></svg>
      </button>
    </div>
  )
}
