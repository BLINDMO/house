import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { useStore } from '../store.jsx'
import { buildItem, disposeGroup } from '../three/furniture.js'

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
    // grain
    for (let k = 0; k < 60; k++) {
      g.strokeStyle = `rgba(90,60,35,${0.04 + Math.random() * 0.06})`
      g.lineWidth = 1
      g.beginPath()
      const y = i * ph + Math.random() * ph
      g.moveTo(0, y)
      g.bezierCurveTo(170, y + (Math.random() - 0.5) * 6, 340, y + (Math.random() - 0.5) * 6, 512, y)
      g.stroke()
    }
    // plank seam
    g.fillStyle = 'rgba(40,25,15,0.5)'
    g.fillRect(0, i * ph, 512, 2)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export default function Scene3D() {
  const { state } = useStore()
  const { room, items } = state
  const mountRef = useRef(null)
  const refs = useRef({})

  // ---- one-time init ----
  useEffect(() => {
    const mount = mountRef.current
    const W = mount.clientWidth
    const H = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    // gradient background
    const bg = new THREE.Color('#0e1014')
    scene.background = bg

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

    // lights
    scene.add(new THREE.HemisphereLight('#dfe6f0', '#2a2620', 0.55))
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
    const sc = key.shadow.camera
    sc.left = -12; sc.right = 12; sc.top = 12; sc.bottom = -12
    scene.add(key)
    const fill = new THREE.DirectionalLight('#cdddff', 0.5)
    fill.position.set(-7, 6, -4)
    scene.add(fill)

    const roomGroup = new THREE.Group()
    const furnitureGroup = new THREE.Group()
    scene.add(roomGroup, furnitureGroup)

    Object.assign(refs.current, {
      renderer, scene, camera, controls, roomGroup, furnitureGroup, key, pmrem,
      wood: woodTexture(), walls: [], framed: false,
    })

    let raf
    const tick = () => {
      controls.update()
      // hide walls between camera and room centre
      const camDir = new THREE.Vector3().copy(camera.position).sub(controls.target)
      for (const w of refs.current.walls) {
        w.mesh.visible = camDir.dot(w.normal) < 0.05
      }
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
      controls.dispose()
      disposeGroup(roomGroup)
      disposeGroup(furnitureGroup)
      refs.current.wood?.dispose()
      pmrem.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  // ---- rebuild room shell ----
  useEffect(() => {
    const r = refs.current
    if (!r.roomGroup) return
    const { width, depth, height } = room
    disposeGroup(r.roomGroup)
    r.roomGroup.clear()
    r.walls = []

    // floor
    const wood = r.wood
    wood.repeat.set(Math.max(1, width / 1.5), Math.max(1, depth / 1.5))
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshStandardMaterial({ map: wood, roughness: 0.65, metalness: 0.02 })
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    r.roomGroup.add(floor)

    // base plate (slightly larger, darker) for depth
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(width + 0.06, depth + 0.06),
      new THREE.MeshStandardMaterial({ color: '#0c0d10', roughness: 1 })
    )
    plate.rotation.x = -Math.PI / 2
    plate.position.y = -0.01
    r.roomGroup.add(plate)

    // walls
    const wallMat = new THREE.MeshStandardMaterial({ color: '#e8e3da', roughness: 0.95, side: THREE.DoubleSide })
    const t = 0.08
    const mkWall = (w, h, d, pos, normal) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
      m.position.copy(pos)
      m.receiveShadow = true
      m.castShadow = false
      r.roomGroup.add(m)
      r.walls.push({ mesh: m, normal: normal.clone() })
      // skirting
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

    // frame the camera once / when room size changes a lot
    if (!r.framed) {
      const dist = Math.max(width, depth) * 1.15 + 2
      r.camera.position.set(width * 0.55, Math.max(width, depth) * 0.85 + 1.5, depth * 0.9 + dist * 0.3)
      r.controls.target.set(0, height * 0.35, 0)
      r.controls.update()
      r.framed = true
    } else {
      r.controls.target.set(0, height * 0.35, 0)
    }
  }, [room.width, room.depth, room.height])

  // ---- rebuild furniture ----
  useEffect(() => {
    const r = refs.current
    if (!r.furnitureGroup) return
    disposeGroup(r.furnitureGroup)
    r.furnitureGroup.clear()
    const hw = room.width / 2
    const hd = room.depth / 2
    for (const it of items) {
      const g = buildItem(it)
      g.position.set(it.x - hw, 0, it.z - hd)
      r.furnitureGroup.add(g)
    }
  }, [items, room.width, room.depth])

  return <div className="scene3d" ref={mountRef} />
}
