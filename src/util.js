// On touch phones we present the studio in landscape by CSS-rotating the app
// 90° when the device is held in portrait. This media query is the single
// source of truth; pointer handlers read it to remap screen → app coordinates.
export const ROTATED_MQ = (typeof window !== 'undefined' && window.matchMedia)
  ? window.matchMedia('(orientation: portrait) and (pointer: coarse)')
  : { matches: false, addEventListener() {}, removeEventListener() {} }

// Screen → app-local coordinates for an element's bounding rect. When the app
// is rotated 90° clockwise, the element's local origin is the rect's top-right
// corner with axes swapped. Returns [localX, localY, localW, localH].
export function appLocal(clientX, clientY, rect) {
  if (ROTATED_MQ.matches) {
    return [clientY - rect.top, rect.right - clientX, rect.height, rect.width]
  }
  return [clientX - rect.left, clientY - rect.top, rect.width, rect.height]
}

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
  const base = inch ? `${ft}′${inch}″` : `${ft}′`
  return `${base} (${total}″)`
}

export function formatLen(m, units) {
  return units === 'm' ? `${m.toFixed(2)} m` : feetInches(m)
}

export function formatArea(m2, units) {
  return units === 'm' ? `${m2.toFixed(1)} m²` : `${Math.round(m2 * 10.7639)} ft²`
}

// Effective (scaled) dimensions of a placed item, in metres. Real Poly Haven
// models store their measured size on `item.dim` (set on first 3D load); that
// takes precedence over the catalog/placeholder def.
export function effDims(c, item) {
  const s = (item && item.scale) || {}
  const b = (item && item.dim) || c || { w: 0.5, d: 0.5, h: 0.5 }
  return { w: b.w * (s.x ?? 1), d: b.d * (s.z ?? 1), h: b.h * (s.y ?? 1) }
}

// Light haptic feedback where supported (no-op elsewhere).
export function haptic(ms = 8) {
  try {
    if (navigator.vibrate) navigator.vibrate(ms)
  } catch {
    /* unsupported */
  }
}
