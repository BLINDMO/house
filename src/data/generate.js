// Procedural house layout generator. Produces a set of room specs (no uids —
// the store assigns those) packed into rows so neighbouring rooms share walls.

const SIZE_SCALE = { cozy: 0.85, standard: 1, spacious: 1.18 }

export function generateHouse({ bedrooms = 2, bathrooms = 1, size = 'standard' } = {}) {
  const scale = SIZE_SCALE[size] || 1
  const specs = [
    { name: 'Living Room', w: 5.0, d: 4.2, tex: 'wood:oak' },
    { name: 'Kitchen', w: 3.6, d: 3.4, tex: 'wood:birch' },
  ]
  for (let i = 0; i < bedrooms; i++) {
    specs.push({ name: bedrooms > 1 ? `Bedroom ${i + 1}` : 'Bedroom', w: 3.6, d: 3.4, tex: 'wood:oak' })
  }
  for (let i = 0; i < bathrooms; i++) {
    specs.push({ name: bathrooms > 1 ? `Bath ${i + 1}` : 'Bathroom', w: 2.4, d: 2.2, color: '#d4d8dd' })
  }
  specs.forEach((s) => { s.w = +(s.w * scale).toFixed(2); s.d = +(s.d * scale).toFixed(2) })

  // Greedy row packing: rooms sit flush so adjacent ones share a wall line.
  const totalArea = specs.reduce((a, s) => a + s.w * s.d, 0)
  const targetRowW = Math.sqrt(totalArea) * 1.6
  const rooms = []
  let x = 0
  let z = 0
  let rowH = 0
  for (const s of specs) {
    if (x > 0 && x + s.w > targetRowW) { z = +(z + rowH).toFixed(2); x = 0; rowH = 0 }
    rooms.push({ name: s.name, x: +x.toFixed(2), z, w: s.w, d: s.d, height: 2.7, floorTex: s.tex, floorColor: s.color })
    x = +(x + s.w).toFixed(2)
    rowH = Math.max(rowH, s.d)
  }
  return rooms
}
