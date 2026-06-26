import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useStore } from '../store.jsx'
import { CATALOG_BY_TYPE } from '../data/catalog.js'
import Footprint from './Footprint.jsx'

const PAD = 52
const MIN = 2
const MAX = 14
const ACCENT = '#d9b779'

function clampVal(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v))
}

function computeLayout(width, depth, W, H) {
  const scale = Math.min((W - 2 * PAD) / width, (H - 2 * PAD) / depth)
  const wpx = width * scale
  const hpx = depth * scale
  return { scale, ox: (W - wpx) / 2, oy: (H - hpx) / 2, wpx, hpx }
}

export default function Editor2D({ onSelect, onEdit }) {
  const { state, dispatch } = useStore()
  const { room, items, selected } = state
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ W: 360, H: 540 })
  const [gesture, setGesture] = useState(null)
  const gestureRef = useRef(null)
  gestureRef.current = gesture

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setSize({ W: el.clientWidth, H: el.clientHeight })
    })
    ro.observe(el)
    setSize({ W: el.clientWidth, H: el.clientHeight })
    return () => ro.disconnect()
  }, [])

  const { W, H } = size
  const resizing = gesture?.kind === 'resize'
  const layout = resizing ? gesture.layout : computeLayout(room.width, room.depth, W, H)
  const edges = resizing && gesture.cur
    ? gesture.cur
    : { left: 0, top: 0, right: room.width, bottom: room.depth }

  const { scale, ox, oy } = layout
  const toScreen = (x, z) => [ox + x * scale, oy + z * scale]
  const toWorld = (px, py) => [(px - ox) / scale, (py - oy) / scale]

  const ptr = (e) => {
    const r = svgRef.current.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }

  // ---- item drag ----
  const onItemDown = (e, it) => {
    e.stopPropagation()
    onSelect(it.uid)
    const [px, py] = ptr(e)
    const [wx, wz] = toWorld(px, py)
    setGesture({ kind: 'move', uid: it.uid, ox: wx - it.x, oz: wz - it.z, sx: px, sy: py, moved: false })
    svgRef.current.setPointerCapture(e.pointerId)
  }

  // ---- room resize ----
  const onHandleDown = (e, handle) => {
    e.stopPropagation()
    onSelect(null)
    setGesture({
      kind: 'resize',
      handle,
      layout: computeLayout(room.width, room.depth, W, H),
      edges0: { left: 0, top: 0, right: room.width, bottom: room.depth },
      cur: { left: 0, top: 0, right: room.width, bottom: room.depth },
    })
    svgRef.current.setPointerCapture(e.pointerId)
  }

  const onMove = (e) => {
    const g = gestureRef.current
    if (!g) return
    const [px, py] = ptr(e)
    if (g.kind === 'move') {
      const [wx, wz] = toWorld(px, py)
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 4) {
        setGesture((s) => ({ ...s, moved: true }))
      }
      dispatch({ type: 'update', uid: g.uid, patch: { x: wx - g.ox, z: wz - g.oz } })
    } else if (g.kind === 'resize') {
      const L = g.layout
      const wx = (px - L.ox) / L.scale
      const wz = (py - L.oy) / L.scale
      let { left, top, right, bottom } = g.edges0
      const h = g.handle
      if (h.includes('e')) right = clampVal(wx, left + MIN, left + MAX)
      if (h.includes('w')) left = clampVal(wx, right - MAX, right - MIN)
      if (h.includes('s')) bottom = clampVal(wz, top + MIN, top + MAX)
      if (h.includes('n')) top = clampVal(wz, bottom - MAX, bottom - MIN)
      setGesture((s) => ({ ...s, cur: { left, top, right, bottom } }))
    }
  }

  const onUp = (e) => {
    const g = gestureRef.current
    if (g?.kind === 'resize' && g.cur) {
      const c = g.cur
      dispatch({
        type: 'resize',
        width: c.right - c.left,
        depth: c.bottom - c.top,
        shiftX: c.left,
        shiftZ: c.top,
      })
    }
    setGesture(null)
    try { svgRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }

  // grid lines
  const gridLines = []
  {
    const step = 0.5
    for (let x = Math.ceil(edges.left / step) * step; x <= edges.right + 1e-6; x += step) {
      const [sx] = toScreen(x, 0)
      const major = Math.abs(x % 1) < 1e-6
      gridLines.push(
        <line key={`v${x.toFixed(2)}`} x1={sx} y1={toScreen(0, edges.top)[1]} x2={sx} y2={toScreen(0, edges.bottom)[1]}
          stroke="#ffffff" strokeOpacity={major ? 0.07 : 0.035} strokeWidth={1} />
      )
    }
    for (let z = Math.ceil(edges.top / step) * step; z <= edges.bottom + 1e-6; z += step) {
      const [, sy] = toScreen(0, z)
      const major = Math.abs(z % 1) < 1e-6
      gridLines.push(
        <line key={`h${z.toFixed(2)}`} x1={toScreen(edges.left, 0)[0]} y1={sy} x2={toScreen(edges.right, 0)[0]} y2={sy}
          stroke="#ffffff" strokeOpacity={major ? 0.07 : 0.035} strokeWidth={1} />
      )
    }
  }

  const [rx, ry] = toScreen(edges.left, edges.top)
  const rw = (edges.right - edges.left) * scale
  const rh = (edges.bottom - edges.top) * scale
  const widthM = (edges.right - edges.left).toFixed(2)
  const depthM = (edges.bottom - edges.top).toFixed(2)

  // resize handles
  const cx = rx + rw / 2
  const cy = ry + rh / 2
  const handleDefs = [
    ['nw', rx, ry], ['n', cx, ry], ['ne', rx + rw, ry],
    ['e', rx + rw, cy], ['se', rx + rw, ry + rh], ['s', cx, ry + rh],
    ['sw', rx, ry + rh], ['w', rx, cy],
  ]
  const cursorFor = { n: 'ns', s: 'ns', e: 'ew', w: 'ew', ne: 'nesw', sw: 'nesw', nw: 'nwse', se: 'nwse' }

  return (
    <div className="editor2d" ref={wrapRef}>
      <svg ref={svgRef} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
        <defs>
          <filter id="softshadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* deselect when tapping empty space */}
        <rect x={0} y={0} width={W} height={H} fill="transparent" onPointerDown={() => onSelect(null)} />

        {/* floor */}
        <rect x={rx} y={ry} width={rw} height={rh} rx={6} fill="#20242c"
          stroke="rgba(255,255,255,0.04)" onPointerDown={() => onSelect(null)} />
        <g pointerEvents="none">{gridLines}</g>
        {/* walls */}
        <rect x={rx} y={ry} width={rw} height={rh} rx={6} fill="none"
          stroke={ACCENT} strokeOpacity={0.85} strokeWidth={3} pointerEvents="none" />

        {/* dimension labels */}
        <g pointerEvents="none" fontSize={12} fontWeight={600} fill="#aab2bf"
          fontFamily="-apple-system, system-ui, sans-serif">
          <rect x={cx - 34} y={ry - 26} width={68} height={18} rx={9} fill="#181c23" stroke="rgba(255,255,255,0.08)" />
          <text x={cx} y={ry - 13} textAnchor="middle">{widthM} m</text>
          <g transform={`translate(${rx - 17} ${cy}) rotate(-90)`}>
            <rect x={-34} y={-9} width={68} height={18} rx={9} fill="#181c23" stroke="rgba(255,255,255,0.08)" />
            <text x={0} y={4} textAnchor="middle">{depthM} m</text>
          </g>
        </g>

        {/* items */}
        {items.map((it) => {
          const c = CATALOG_BY_TYPE[it.type]
          if (!c) return null
          const [sx, sy] = toScreen(it.x, it.z)
          const wpx = c.w * scale
          const dpx = c.d * scale
          const isSel = it.uid === selected
          return (
            <g key={it.uid} transform={`translate(${sx} ${sy}) rotate(${it.rot || 0})`}
              onPointerDown={(e) => onItemDown(e, it)} style={{ cursor: 'grab' }}>
              <g filter="url(#softshadow)" opacity={c.shape === 'rug' || c.shape === 'round-rug' ? 0.96 : 1}>
                <Footprint item={{ ...c, color: it.color || c.color }} wpx={wpx} dpx={dpx} />
              </g>
              {/* hit area */}
              <rect x={-wpx / 2 - 4} y={-dpx / 2 - 4} width={wpx + 8} height={dpx + 8} fill="transparent" />
              {isSel && (
                <rect x={-wpx / 2 - 5} y={-dpx / 2 - 5} width={wpx + 10} height={dpx + 10} rx={7}
                  fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" pointerEvents="none" />
              )}
            </g>
          )
        })}

        {/* resize handles */}
        {handleDefs.map(([h, hx, hy]) => (
          <g key={h} onPointerDown={(e) => onHandleDown(e, h)} style={{ cursor: `${cursorFor[h]}-resize` }}>
            <circle cx={hx} cy={hy} r={16} fill="transparent" />
            <circle cx={hx} cy={hy} r={h.length === 2 ? 7 : 5.5} fill={ACCENT}
              stroke="#20160a" strokeWidth={2} filter="url(#softshadow)" />
          </g>
        ))}
      </svg>

      <div className="hint">
        {selected ? 'Drag to move · use the side buttons to edit' : 'Drag furniture to move · drag dots to resize the room'}
      </div>
    </div>
  )
}
