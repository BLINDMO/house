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

// Light haptic feedback where supported (no-op elsewhere).
export function haptic(ms = 8) {
  try {
    if (navigator.vibrate) navigator.vibrate(ms)
  } catch {
    /* unsupported */
  }
}
