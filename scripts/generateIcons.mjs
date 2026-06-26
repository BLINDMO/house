// Generates premium app icons (PNG) with no external dependencies.
import zlib from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, '..', 'public')
mkdirSync(outDir, { recursive: true })

function lerp(a, b, t) { return a + (b - a) * t }
function mix(c1, c2, t) {
  return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)]
}

const BG_TOP = [22, 25, 32]
const BG_BOT = [12, 14, 18]
const GOLD_HI = [233, 209, 160]
const GOLD = [217, 183, 121]
const GLOW = [217, 183, 121]

function inTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy)
  const a = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) / d
  const b = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) / d
  const c = 1 - a - b
  return a >= 0 && b >= 0 && c >= 0
}

// coverage for the house silhouette at normalized point (x,y) in [0,1]
function houseCoverage(x, y) {
  // roof
  if (inTriangle(x, y, 0.5, 0.27, 0.20, 0.50, 0.80, 0.50)) {
    return 'roof'
  }
  // body
  if (x >= 0.27 && x <= 0.73 && y >= 0.48 && y <= 0.74) {
    // door cut-out
    if (x >= 0.445 && x <= 0.555 && y >= 0.57 && y <= 0.74) return 'door'
    return 'body'
  }
  return null
}

function renderPixel(x, y) {
  // background gradient + soft glow
  let col = mix(BG_TOP, BG_BOT, y)
  const gx = x - 0.5
  const gy = y - 0.28
  const dist = Math.sqrt(gx * gx + gy * gy)
  const glow = Math.max(0, 1 - dist / 0.55) * 0.16
  col = mix(col, GLOW, glow)

  const h = houseCoverage(x, y)
  if (h === 'roof' || h === 'body') {
    const g = mix(GOLD_HI, GOLD, Math.min(1, (y - 0.27) / 0.47))
    col = g
  } else if (h === 'door') {
    col = mix(BG_TOP, BG_BOT, y + 0.1)
  }
  return col
}

function makePNG(size) {
  const ss = 2 // supersample for anti-aliasing
  const data = Buffer.alloc(size * size * 4)
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0, g = 0, b = 0
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const nx = (px + (sx + 0.5) / ss) / size
          const ny = (py + (sy + 0.5) / ss) / size
          const c = renderPixel(nx, ny)
          r += c[0]; g += c[1]; b += c[2]
        }
      }
      const n = ss * ss
      const i = (py * size + px) * 4
      data[i] = Math.round(r / n)
      data[i + 1] = Math.round(g / n)
      data[i + 2] = Math.round(b / n)
      data[i + 3] = 255
    }
  }
  return encodePNG(size, size, data)
}

// --- minimal PNG encoder ---
const CRC = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const body = Buffer.concat([typeBuf, data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body), 0)
  return Buffer.concat([len, body, crc])
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type RGBA
  const raw = Buffer.alloc((w * 4 + 1) * h)
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4)
  }
  const idat = zlib.deflateSync(raw, { level: 9 })
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  writeFileSync(join(outDir, name), makePNG(size))
  console.log('wrote', name)
}
