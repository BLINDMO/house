import * as THREE from 'three'
import { CATALOG_BY_TYPE } from '../data/catalog.js'

// Procedural 3D furniture. Each builder returns a THREE.Group whose base sits
// on the floor (y = 0) and is centred on (x, z) = (0, 0), facing +z (front),
// matching the 2D top-down convention (back wall at -z).

function shade(hex, amt) {
  const c = new THREE.Color(hex)
  if (amt >= 0) c.lerp(new THREE.Color('#ffffff'), amt)
  else c.lerp(new THREE.Color('#000000'), -amt)
  return c
}

function mat(color, rough = 0.75, metal = 0.04, opts = {}) {
  return new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: rough, metalness: metal, ...opts })
}

function box(w, h, d, material) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function cyl(rt, rb, h, material, seg = 28) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function at(mesh, x, y, z) {
  mesh.position.set(x, y, z)
  return mesh
}

function legs(g, w, d, h, inset, thick, material) {
  const positions = [
    [w / 2 - inset, d / 2 - inset],
    [-w / 2 + inset, d / 2 - inset],
    [w / 2 - inset, -d / 2 + inset],
    [-w / 2 + inset, -d / 2 + inset],
  ]
  for (const [lx, lz] of positions) {
    g.add(at(box(thick, h, thick, material), lx, h / 2, lz))
  }
}

const builders = {
  seat(g, c) {
    const { w, d, h, color } = c
    const body = mat(color, 0.85)
    const cushion = mat(shade(color, 0.08), 0.9)
    const leg = mat('#2b2b2e', 0.5, 0.3)
    const baseH = h * 0.42
    const armW = Math.min(0.16, w * 0.12)
    const backH = h
    // base
    g.add(at(box(w, baseH, d, body), 0, baseH / 2 + 0.08, 0))
    // back
    g.add(at(box(w, backH - 0.1, 0.16, body), 0, (backH - 0.1) / 2 + 0.08, -d / 2 + 0.08))
    // arms
    g.add(at(box(armW, baseH + 0.16, d, body), w / 2 - armW / 2, (baseH + 0.16) / 2 + 0.08, 0))
    g.add(at(box(armW, baseH + 0.16, d, body), -w / 2 + armW / 2, (baseH + 0.16) / 2 + 0.08, 0))
    // seat cushions
    const innerW = w - armW * 2 - 0.04
    const seats = w > 1.3 ? Math.round(w / 0.9) : 1
    const cw = innerW / seats
    for (let i = 0; i < seats; i++) {
      const cx = -innerW / 2 + cw / 2 + i * cw
      g.add(at(box(cw - 0.04, 0.16, d - 0.28, cushion), cx, baseH + 0.16, 0.04))
      g.add(at(box(cw - 0.06, 0.2, 0.16, cushion), cx, baseH + 0.24, -d / 2 + 0.24))
    }
    // feet
    legs(g, w - 0.1, d - 0.1, 0.08, 0.06, 0.05, leg)
  },

  chair(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.7, 0.05)
    const seatH = h * 0.5
    g.add(at(box(w, 0.06, d, m), 0, seatH, 0))
    g.add(at(box(w, h - seatH, 0.06, m), 0, seatH + (h - seatH) / 2, -d / 2 + 0.04))
    legs(g, w - 0.08, d - 0.08, seatH, 0.05, 0.045, m)
  },

  bench(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.7)
    g.add(at(box(w, 0.1, d, m), 0, h - 0.05, 0))
    legs(g, w - 0.12, d - 0.08, h - 0.1, 0.07, 0.06, m)
  },

  round(g, c) {
    const { w, h, color } = c
    const m = mat(color, 0.6, 0.1)
    g.add(at(cyl(w / 2, w / 2, 0.08, m), 0, h - 0.04, 0))
    g.add(at(cyl(0.03, 0.04, h - 0.08, mat('#2b2b2e', 0.5, 0.3)), 0, (h - 0.08) / 2, 0))
    g.add(at(cyl(w * 0.34, w * 0.34, 0.02, mat('#2b2b2e', 0.5, 0.3)), 0, 0.01, 0))
  },

  table(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.45, 0.05)
    g.add(at(box(w, 0.06, d, m), 0, h - 0.03, 0))
    legs(g, w - 0.12, d - 0.12, h - 0.06, 0.08, 0.06, m)
  },

  'round-table'(g, c) {
    const { w, h, color } = c
    const m = mat(color, 0.45, 0.05)
    g.add(at(cyl(w / 2, w / 2, 0.06, m), 0, h - 0.03, 0))
    g.add(at(cyl(0.05, 0.07, h - 0.06, m), 0, (h - 0.06) / 2, 0))
    g.add(at(cyl(w * 0.28, w * 0.28, 0.03, m), 0, 0.015, 0))
  },

  desk(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.5, 0.06)
    g.add(at(box(w, 0.05, d, m), 0, h - 0.025, 0))
    g.add(at(box(0.05, h - 0.1, d - 0.06, m), -w / 2 + 0.06, (h - 0.1) / 2, 0))
    g.add(at(box(0.05, h - 0.1, d - 0.06, m), w / 2 - 0.06, (h - 0.1) / 2, 0))
    g.add(at(box(w * 0.4, h - 0.2, 0.04, m), w * 0.22, (h - 0.2) / 2, -d / 2 + 0.06))
  },

  bed(g, c) {
    const { w, d, h, color } = c
    const frame = mat('#5b4a3a', 0.6)
    const sheet = mat(color, 0.9)
    const pillow = mat(shade(color, 0.12), 0.95)
    const frameH = h * 0.5
    g.add(at(box(w, frameH, d, frame), 0, frameH / 2, 0))
    // headboard
    g.add(at(box(w, h * 0.85, 0.1, frame), 0, (h * 0.85) / 2, -d / 2 + 0.05))
    // mattress
    g.add(at(box(w - 0.1, 0.22, d - 0.12, sheet), 0, frameH + 0.11, 0.02))
    // duvet
    g.add(at(box(w - 0.12, 0.1, d * 0.62, mat(shade(color, -0.05), 0.9)), 0, frameH + 0.2, d * 0.12))
    // pillows
    const pw = (w - 0.2) / 2
    g.add(at(box(pw - 0.04, 0.12, 0.34, pillow), -pw / 2, frameH + 0.24, -d / 2 + 0.32))
    g.add(at(box(pw - 0.04, 0.12, 0.34, pillow), pw / 2, frameH + 0.24, -d / 2 + 0.32))
  },

  cabinet(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.55)
    const handle = mat('#caa86a', 0.3, 0.7)
    g.add(at(box(w, h - 0.06, d, m), 0, (h - 0.06) / 2 + 0.06, 0))
    g.add(at(cyl(0.012, 0.012, 0.08, handle), -0.04, h * 0.5, d / 2 + 0.005).rotateZ(Math.PI / 2))
    g.add(at(cyl(0.012, 0.012, 0.08, handle), 0.04, h * 0.5, d / 2 + 0.005).rotateZ(Math.PI / 2))
    legs(g, w - 0.08, d - 0.08, 0.06, 0.05, 0.04, mat('#2b2b2e', 0.5, 0.3))
  },

  wardrobe(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.55)
    const handle = mat('#caa86a', 0.3, 0.7)
    g.add(at(box(w, h, d, m), 0, h / 2, 0))
    // door split
    g.add(at(box(0.012, h - 0.1, 0.01, mat(shade(color, -0.3), 0.6)), 0, h / 2, d / 2 + 0.002))
    g.add(at(cyl(0.014, 0.014, 0.16, handle), -0.06, h * 0.5, d / 2 + 0.006))
    g.add(at(cyl(0.014, 0.014, 0.16, handle), 0.06, h * 0.5, d / 2 + 0.006))
  },

  drawers(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.55)
    const front = mat(shade(color, 0.06), 0.6)
    const handle = mat('#caa86a', 0.3, 0.7)
    g.add(at(box(w, h, d, m), 0, h / 2, 0))
    const rows = h > 0.6 ? 3 : 1
    const dh = (h - 0.08) / rows
    for (let i = 0; i < rows; i++) {
      const cy = 0.04 + dh / 2 + i * dh
      g.add(at(box(w - 0.06, dh - 0.03, 0.02, front), 0, cy, d / 2 + 0.005))
      g.add(at(cyl(0.01, 0.01, 0.12, handle), 0, cy, d / 2 + 0.018).rotateZ(Math.PI / 2))
    }
  },

  shelf(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.6)
    const t = 0.04
    g.add(at(box(t, h, d, m), -w / 2 + t / 2, h / 2, 0))
    g.add(at(box(t, h, d, m), w / 2 - t / 2, h / 2, 0))
    g.add(at(box(w, t, d, m), 0, t / 2, 0))
    g.add(at(box(w, t, d, m), 0, h - t / 2, 0))
    g.add(at(box(w - t, t, d - 0.02, m), 0, h * 0.04 + 0.02, -0.01))
    const shelves = 3
    for (let i = 1; i <= shelves; i++) {
      const cy = (h / (shelves + 1)) * i
      g.add(at(box(w - t * 2, t * 0.7, d - 0.04, m), 0, cy, 0))
      // a few books
      const colors = ['#8a5a4a', '#4a6a7a', '#7a7048', '#5a5a6a']
      let bx = -w / 2 + t + 0.04
      while (bx < w / 2 - t - 0.06) {
        const bw = 0.03 + Math.random() * 0.03
        const bh = 0.12 + Math.random() * 0.08
        g.add(at(box(bw, bh, d * 0.6, mat(colors[Math.floor(Math.random() * colors.length)], 0.8)), bx + bw / 2, cy + t * 0.35 + bh / 2, 0))
        bx += bw + 0.006
      }
    }
  },

  tv(g, c) {
    const { w, h, color } = c
    const stand = mat('#2b2b2e', 0.4, 0.4)
    const frame = mat(color, 0.4, 0.3)
    const screen = new THREE.MeshStandardMaterial({ color: '#10141c', roughness: 0.2, metalness: 0.1, emissive: new THREE.Color('#1b2a3a'), emissiveIntensity: 0.4 })
    const baseY = 0.5
    g.add(at(box(w, h, 0.05, frame), 0, baseY + h / 2, 0))
    const s = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.06, h - 0.06), screen)
    s.position.set(0, baseY + h / 2, 0.028)
    g.add(s)
    g.add(at(cyl(0.03, 0.04, baseY, stand), 0, baseY / 2, 0))
    g.add(at(box(w * 0.35, 0.03, 0.18, stand), 0, 0.015, 0))
  },

  rug(g, c) {
    const { w, d, color } = c
    const m = mat(color, 1, 0)
    const r = box(w, 0.02, d, m)
    r.position.y = 0.011
    r.castShadow = false
    g.add(r)
    const inner = box(w * 0.86, 0.022, d * 0.78, mat(shade(color, 0.16), 1, 0))
    inner.position.y = 0.012
    inner.castShadow = false
    g.add(inner)
  },

  'round-rug'(g, c) {
    const { w, color } = c
    const r = cyl(w / 2, w / 2, 0.02, mat(color, 1, 0), 40)
    r.position.y = 0.011
    r.castShadow = false
    g.add(r)
    const inner = cyl(w * 0.36, w * 0.36, 0.022, mat(shade(color, 0.18), 1, 0), 40)
    inner.position.y = 0.012
    inner.castShadow = false
    g.add(inner)
  },

  plant(g, c) {
    const { w, h, color } = c
    const pot = mat('#9a7a55', 0.7)
    const potH = h * 0.28
    g.add(at(cyl(w * 0.36, w * 0.28, potH, pot), 0, potH / 2, 0))
    g.add(at(cyl(0.03, 0.03, h * 0.45, mat('#5a4030', 0.8)), 0, potH + h * 0.2, 0))
    const foliage = (col, s, x, y, z) => {
      const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), mat(col, 0.9))
      ico.castShadow = true
      g.add(at(ico, x, y, z))
    }
    const top = potH + h * 0.4
    foliage(shade(color, 0.05), w * 0.42, 0, top + w * 0.2, 0)
    foliage(shade(color, -0.1), w * 0.34, w * 0.22, top + w * 0.45, 0.04)
    foliage(shade(color, 0.16), w * 0.3, -w * 0.24, top + w * 0.4, -0.05)
    foliage(shade(color, -0.04), w * 0.28, 0.04, top + w * 0.62, 0.05)
  },

  lamp(g, c) {
    const { w, h, color } = c
    const metalM = mat('#3a3a3e', 0.4, 0.6)
    g.add(at(cyl(w * 0.32, w * 0.36, 0.04, metalM), 0, 0.02, 0))
    g.add(at(cyl(0.018, 0.018, h * 0.78, metalM), 0, h * 0.4, 0))
    const shade3 = new THREE.Mesh(
      new THREE.ConeGeometry(w * 0.42, h * 0.22, 24, 1, true),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.6, emissive: new THREE.Color(color), emissiveIntensity: 0.5, side: THREE.DoubleSide })
    )
    shade3.position.set(0, h * 0.86, 0)
    shade3.rotation.x = Math.PI
    g.add(shade3)
    const bulb = new THREE.PointLight(0xffe8c0, 6, 4, 2)
    bulb.position.set(0, h * 0.82, 0)
    g.add(bulb)
  },

  fridge(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.35, 0.5)
    const handle = mat('#888', 0.3, 0.8)
    g.add(at(box(w, h, d, m), 0, h / 2, 0))
    g.add(at(box(w, 0.015, 0.005, mat(shade(color, -0.3), 0.4)), 0, h * 0.62, d / 2 + 0.003))
    g.add(at(cyl(0.012, 0.012, h * 0.3, handle), w / 2 - 0.08, h * 0.78, d / 2 + 0.01))
    g.add(at(cyl(0.012, 0.012, h * 0.4, handle), w / 2 - 0.08, h * 0.3, d / 2 + 0.01))
  },

  counter(g, c) {
    const { w, d, h, color } = c
    const cab = mat('#d8d2c8', 0.6)
    const tops = mat(color, 0.3, 0.2)
    g.add(at(box(w, h - 0.05, d, cab), 0, (h - 0.05) / 2, 0))
    g.add(at(box(w, 0.05, d, tops), 0, h - 0.025, 0))
    g.add(at(box(w * 0.3, 0.02, d * 0.5, mat('#9aa0a6', 0.3, 0.4)), w * 0.18, h - 0.02, 0))
  },

  range(g, c) {
    const { w, d, h, color } = c
    const m = mat(color, 0.35, 0.4)
    g.add(at(box(w, h, d, m), 0, h / 2, 0))
    const cooktop = mat('#1a1a1d', 0.3, 0.2)
    g.add(at(box(w - 0.04, 0.02, d - 0.04, cooktop), 0, h + 0.01, 0))
    for (const [fx, fz] of [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]]) {
      g.add(at(cyl(w * 0.11, w * 0.11, 0.01, mat('#333', 0.5)), w * fx, h + 0.02, d * fz))
    }
  },
}

export function buildItem(item) {
  const c = CATALOG_BY_TYPE[item.type]
  if (!c) return new THREE.Group()
  const g = new THREE.Group()
  const def = { ...c, color: item.color || c.color }
  const build = builders[c.shape] || builders.table
  build(g, def)
  g.rotation.y = -((item.rot || 0) * Math.PI) / 180
  g.userData.uid = item.uid
  return g
}

export function disposeGroup(g) {
  g.traverse((o) => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) {
      if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose())
      else o.material.dispose()
    }
  })
}
