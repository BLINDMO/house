// Resolve the geometry of a wall (a room side or a free-standing wall) into a
// flat coordinate frame used by the elevation editor and 3D built-ins.
//
// Returns { ox, oz, dirx, dirz, nx, nz, length, height } where:
//   (ox,oz)        world start point of the wall (u = 0)
//   (dirx,dirz)    unit vector along the wall (increasing u)
//   (nx,nz)        unit inward normal (the depth direction, into the room)
//   length, height extents of the wall face

const SIDE_NAME = { n: 'Top', e: 'Right', s: 'Bottom', w: 'Left' }

export function wallGeometry(ref, rooms, walls) {
  if (!ref) return null
  if (ref.kind === 'room') {
    const r = rooms.find((o) => o.uid === ref.uid)
    if (!r) return null
    const base = { height: r.height }
    switch (ref.side) {
      case 'n': return { ox: r.x, oz: r.z, dirx: 1, dirz: 0, nx: 0, nz: 1, length: r.w, ...base }
      case 's': return { ox: r.x, oz: r.z + r.d, dirx: 1, dirz: 0, nx: 0, nz: -1, length: r.w, ...base }
      case 'e': return { ox: r.x + r.w, oz: r.z, dirx: 0, dirz: 1, nx: -1, nz: 0, length: r.d, ...base }
      default: return { ox: r.x, oz: r.z, dirx: 0, dirz: 1, nx: 1, nz: 0, length: r.d, ...base }
    }
  }
  const w = walls.find((o) => o.uid === ref.uid)
  if (!w) return null
  const dx = w.x2 - w.x1
  const dz = w.z2 - w.z1
  const len = Math.hypot(dx, dz) || 1e-6
  return { ox: w.x1, oz: w.z1, dirx: dx / len, dirz: dz / len, nx: dz / len, nz: -dx / len, length: len, height: w.height }
}

export function listWalls(rooms, walls) {
  const out = []
  rooms.forEach((r, i) => {
    for (const side of ['n', 'e', 's', 'w']) {
      out.push({ ref: { kind: 'room', uid: r.uid, side }, label: `Room ${i + 1} · ${SIDE_NAME[side]}` })
    }
  })
  walls.forEach((w, i) => out.push({ ref: { kind: 'wall', uid: w.uid }, label: `Wall ${i + 1}` }))
  return out
}

export function refEq(a, b) {
  if (!a || !b || a.kind !== b.kind || a.uid !== b.uid) return false
  return a.kind === 'room' ? a.side === b.side : true
}
