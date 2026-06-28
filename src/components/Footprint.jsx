import React from 'react'
import { phThumb } from '../data/phModels.js'

// Top-down vector drawing of a furniture piece, centred at (0,0),
// sized wpx × dpx. Used by both the catalog thumbnails and the 2D editor,
// so a piece looks identical wherever it appears.

function shade(hex, amt) {
  let h = hex.replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h, 16)
  let r = (n >> 16) & 255
  let g = (n >> 8) & 255
  let b = n & 255
  const f = (v) => Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)
  r = f(r); g = f(g); b = f(b)
  return `rgb(${r},${g},${b})`
}

const DARK = 'rgba(0,0,0,0.22)'
const LINE = 'rgba(0,0,0,0.28)'

export default function Footprint({ item, wpx, dpx }) {
  const { color, shape } = item
  const w = wpx
  const d = dpx
  const x = -w / 2
  const y = -d / 2
  const r = Math.min(w, d) * 0.13
  const sw = Math.max(0.8, Math.min(w, d) * 0.025)
  const top = shade(color, 0.16)
  const dark = shade(color, -0.22)

  const rect = (px, py, pw, ph, fill, rad = r, extra = {}) => (
    <rect x={px} y={py} width={pw} height={ph} rx={rad} ry={rad} fill={fill} {...extra} />
  )

  let body = null

  switch (shape) {
    case 'seat': {
      const back = d * 0.26
      const arm = w * 0.12
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x, y, w, back, dark, r)} {/* backrest along top */}
          {rect(x, y + back * 0.5, arm, d - back * 0.5, dark, r * 0.6)}
          {rect(x + w - arm, y + back * 0.5, arm, d - back * 0.5, dark, r * 0.6)}
          {rect(x + arm + sw, y + back, w - 2 * (arm + sw), d - back - sw, top, r * 0.5)}
        </>
      )
      break
    }
    case 'chair': {
      const back = d * 0.22
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x, y, w, back, dark, r)}
          {rect(x + sw, y + back, w - 2 * sw, d - back - sw, top, r * 0.5)}
        </>
      )
      break
    }
    case 'bench': {
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x + w * 0.05, y + d * 0.18, w * 0.9, d * 0.64, top, r * 0.4)}
        </>
      )
      break
    }
    case 'round':
      body = (
        <>
          <circle cx={0} cy={0} r={w / 2} fill={color} />
          <circle cx={0} cy={0} r={w * 0.3} fill={top} />
        </>
      )
      break
    case 'table':
      body = (
        <>
          {rect(x, y, w, d, dark)}
          {rect(x + sw * 1.5, y + sw * 1.5, w - 3 * sw, d - 3 * sw, color, r * 0.8)}
          {rect(x + w * 0.12, y + d * 0.12, w * 0.76, d * 0.76, top, r * 0.5)}
        </>
      )
      break
    case 'desk':
      body = (
        <>
          {rect(x, y, w, d, dark)}
          {rect(x + sw, y + sw, w - 2 * sw, d - 2 * sw, color, r * 0.7)}
          {rect(x + w * 0.62, y + sw * 2, w * 0.34, d - sw * 4, top, r * 0.4)}
        </>
      )
      break
    case 'round-table':
      body = (
        <>
          <circle cx={0} cy={0} r={w / 2} fill={dark} />
          <circle cx={0} cy={0} r={w / 2 - sw * 1.5} fill={color} />
          <circle cx={0} cy={0} r={w * 0.34} fill={top} />
        </>
      )
      break
    case 'bed': {
      const head = d * 0.16
      const pw = w * 0.4
      const ph = d * 0.18
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x, y, w, head, dark, r)} {/* headboard */}
          {rect(x + w * 0.05, y + head + d * 0.04, pw, ph, top, r * 0.4)}
          {rect(x + w * 0.55, y + head + d * 0.04, pw, ph, top, r * 0.4)}
          {rect(x + w * 0.05, y + head + ph + d * 0.08, w * 0.9, d - head - ph - d * 0.12, shade(color, 0.07), r * 0.3)}
        </>
      )
      break
    }
    case 'cabinet':
      body = (
        <>
          {rect(x, y, w, d, color)}
          <line x1={0} y1={y + d * 0.2} x2={0} y2={y + d * 0.8} stroke={LINE} strokeWidth={sw} />
          <circle cx={-w * 0.06} cy={0} r={sw * 1.2} fill={DARK} />
          <circle cx={w * 0.06} cy={0} r={sw * 1.2} fill={DARK} />
        </>
      )
      break
    case 'wardrobe':
      body = (
        <>
          {rect(x, y, w, d, color)}
          <line x1={0} y1={y} x2={0} y2={y + d} stroke={LINE} strokeWidth={sw} />
          <line x1={x + w * 0.25} y1={y + d * 0.3} x2={x + w * 0.25} y2={y + d * 0.7} stroke={DARK} strokeWidth={sw * 1.6} />
          <line x1={x + w * 0.75} y1={y + d * 0.3} x2={x + w * 0.75} y2={y + d * 0.7} stroke={DARK} strokeWidth={sw * 1.6} />
        </>
      )
      break
    case 'drawers':
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x + sw, y + sw, w - 2 * sw, d - 2 * sw, top, r * 0.5)}
          <line x1={x + w * 0.35} y1={y + d * 0.5} x2={x + w * 0.65} y2={y + d * 0.5} stroke={DARK} strokeWidth={sw * 1.6} strokeLinecap="round" />
        </>
      )
      break
    case 'shelf':
      body = (
        <>
          {rect(x, y, w, d, dark)}
          {rect(x + sw, y + sw, w - 2 * sw, d - 2 * sw, color, r * 0.4)}
          {[0.3, 0.5, 0.7].map((f, i) => (
            <line key={i} x1={x + w * 0.12} y1={y + d * f} x2={x + w * 0.88} y2={y + d * f} stroke={DARK} strokeWidth={sw} />
          ))}
        </>
      )
      break
    case 'tv':
      body = (
        <>
          {rect(x, y, w, d, '#0c0d10', r * 0.4)}
          {rect(x + sw, y, w - 2 * sw, d * 0.55, '#22303f', r * 0.2)}
        </>
      )
      break
    case 'rug':
      body = (
        <>
          {rect(x, y, w, d, color, r * 0.3)}
          {rect(x + w * 0.06, y + d * 0.09, w * 0.88, d * 0.82, 'none', r * 0.2, {
            stroke: shade(color, 0.25),
            strokeWidth: sw * 1.4,
            strokeDasharray: `${sw * 3} ${sw * 3}`,
          })}
        </>
      )
      break
    case 'round-rug':
      body = (
        <>
          <circle cx={0} cy={0} r={w / 2} fill={color} />
          <circle cx={0} cy={0} r={w * 0.36} fill="none" stroke={shade(color, 0.25)} strokeWidth={sw * 1.4} />
        </>
      )
      break
    case 'plant':
      body = (
        <>
          {rect(x + w * 0.28, y + d * 0.28, w * 0.44, d * 0.44, shade('#8a6a4a', -0.1), r * 0.4)}
          <circle cx={-w * 0.18} cy={-d * 0.1} r={w * 0.26} fill={shade(color, 0.1)} />
          <circle cx={w * 0.2} cy={-d * 0.16} r={w * 0.22} fill={color} />
          <circle cx={w * 0.06} cy={d * 0.2} r={w * 0.27} fill={shade(color, -0.12)} />
          <circle cx={-w * 0.08} cy={d * 0.02} r={w * 0.2} fill={shade(color, 0.18)} />
        </>
      )
      break
    case 'lamp':
      body = (
        <>
          <circle cx={0} cy={0} r={w / 2} fill={shade(color, -0.05)} />
          <circle cx={0} cy={0} r={w * 0.22} fill={shade(color, 0.3)} />
        </>
      )
      break
    case 'fridge':
      body = (
        <>
          {rect(x, y, w, d, color)}
          {rect(x + sw, y + sw, w - 2 * sw, d - 2 * sw, top, r * 0.4)}
          <line x1={x + w * 0.78} y1={y + d * 0.2} x2={x + w * 0.78} y2={y + d * 0.8} stroke={DARK} strokeWidth={sw * 1.8} strokeLinecap="round" />
        </>
      )
      break
    case 'counter':
      body = (
        <>
          {rect(x, y, w, d, dark)}
          {rect(x + sw, y + sw, w - 2 * sw, d - 2 * sw, color, r * 0.4)}
          {rect(x + w * 0.58, y + d * 0.22, w * 0.32, d * 0.56, shade(color, -0.18), r * 0.3)}
        </>
      )
      break
    case 'range':
      body = (
        <>
          {rect(x, y, w, d, color)}
          {[[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]].map(([fx, fy], i) => (
            <circle key={i} cx={w * fx} cy={d * fy} r={w * 0.13} fill="none" stroke={shade(color, 0.3)} strokeWidth={sw} />
          ))}
        </>
      )
      break
    case 'model':
      body = (
        <>
          {rect(x, y, w, d, '#e9ecf0', r * 0.5, { stroke: '#b9c0c9', strokeWidth: sw })}
          {item.model && (
            <image href={phThumb(item.model)} x={x + sw} y={y + sw} width={w - 2 * sw} height={d - 2 * sw}
              preserveAspectRatio="xMidYMid slice" opacity={0.95} />
          )}
        </>
      )
      break
    default:
      body = rect(x, y, w, d, color)
  }

  return <g>{body}</g>
}
