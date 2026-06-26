// Snap a furniture centre to a fine grid and flush against nearby walls.
export function snapPosition(x, z, halfX, halfZ, room, grid = 0.05, wall = 0.12) {
  let sx = Math.round(x / grid) * grid
  let sz = Math.round(z / grid) * grid
  if (sx - halfX < wall) sx = halfX
  else if (room.width - (sx + halfX) < wall) sx = room.width - halfX
  if (sz - halfZ < wall) sz = halfZ
  else if (room.depth - (sz + halfZ) < wall) sz = room.depth - halfZ
  return { x: sx, z: sz }
}

// ---- units / formatting ----
export function feetInches(m) {
  const totalIn = m * 39.3701
  let ft = Math.floor(totalIn / 12)
  let inch = Math.round(totalIn - ft * 12)
  if (inch === 12) {
    ft += 1
    inch = 0
  }
  return `${ft}′${inch}″`
}

export function formatLen(m, units) {
  return units === 'm' ? `${m.toFixed(2)} m` : feetInches(m)
}

export function formatArea(m2, units) {
  return units === 'm' ? `${m2.toFixed(1)} m²` : `${Math.round(m2 * 10.7639)} ft²`
}

// Effective (scaled) dimensions of a placed item, in metres.
export function effDims(c, item) {
  const s = (item && item.scale) || {}
  return { w: c.w * (s.x ?? 1), d: c.d * (s.z ?? 1), h: c.h * (s.y ?? 1) }
}

// Light haptic feedback where supported (no-op elsewhere).
export function haptic(ms = 8) {
  try {
    if (navigator.vibrate) navigator.vibrate(ms)
  } catch {
    /* unsupported */
  }
}
