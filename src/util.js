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
  const total = Math.round(m * 39.3701) // whole inches
  if (total < 12) return `${total}″`
  const ft = Math.floor(total / 12)
  const inch = total - ft * 12
  return inch ? `${ft}′ (${inch}″)` : `${ft}′`
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
