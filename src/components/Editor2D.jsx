import React, { useLayoutEffect, useRef, useState } from 'react'
import { useStore, footHalf } from '../store.jsx'
import { CATALOG_BY_TYPE } from '../data/catalog.js'
import { snapPosition, effDims, formatLen } from '../util.js'
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

export default function Editor2D({ onSelect }) {
  const { state, dispatch } = useStore()
  const { room, items, selected, units } = state
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ W: 360, H: 540 })
  const [gesture, setGesture] = useState(null)
  const gestureRef = useRef(null)
  gestureRef.current = gesture

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setSize({ W: el.clientWidth, H: el.clientHeight }))
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

  // ---- item resize (drag a corner of the selected piece) ----
  const onItemResizeDown = (e, it) => {
    e.stopPropagation()
    onSelect(it.uid)
    setGesture({ kind: 'resizeItem', uid: it.uid, cxw: it.x, czw: it.z, rot: it.rot || 0, c: CATALOG_BY_TYPE[it.type] })
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
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 4) setGesture((s) => ({ ...s, moved: true }))
      const it = items.find((i) => i.uid === g.uid)
      const c = it && CATALOG_BY_TYPE[it.type]
      const half = footHalf(c, it?.rot || 0, it?.scale)
      const snapped = snapPosition(wx - g.ox, wz - g.oz, half.x, half.z, room)
      dispatch({ type: 'update', uid: g.uid, patch: snapped, mergeKey: `move:${g.uid}` })
    } else if (g.kind === 'resizeItem') {
      const [wx, wz] = toWorld(px, py)
      const vx = wx - g.cxw
      const vz = wz - g.czw
      const th = (g.rot * Math.PI) / 180
      const cos = Math.cos(th)
      const sin = Math.sin(th)
      const lx = vx * cos + vz * sin
      const lz = -vx * sin + vz * cos
      const halfW = Math.max(0.12, Math.abs(lx))
      const halfD = Math.max(0.12, Math.abs(lz))
      const sx = clampVal((2 * halfW) / g.c.w, 0.4, 2.5)
      const sz = clampVal((2 * halfD) / g.c.d, 0.4, 2.5)
      const sy = clampVal(Math.sqrt(sx * sz), 0.4, 2.5)
      dispatch({ type: 'update', uid: g.uid, patch: { scale: { x: sx, y: sy, z: sz } }, mergeKey: `size:${g.uid}` })
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
      dispatch({ type: 'resize', width: c.right - c.left, depth: c.bottom - c.top, shiftX: c.left, shiftZ: c.top })
    }
    setGesture(null)
    try { svgRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }

  // grid lines
  const gridLines = []
  {
    const step = 0.5
    for (let x = Math.ceil(edges.left / step) * step; x <= edges.right + 1e-6; x += step) {
      const [gx] = toScreen(x, 0)
      const major = Math.abs(x % 1) < 1e-6
      gridLines.push(
        <line key={`v${x.toFixed(2)}`} x1={gx} y1={toScreen(0, edges.top)[1]} x2={gx} y2={toScreen(0, edges.bottom)[1]}
          stroke="#ffffff" strokeOpacity={major ? 0.07 : 0.035} strokeWidth={1} />
      )
    }
    for (let z = Math.ceil(edges.top / step) * step; z <= edges.bottom + 1e-6; z += step) {
      const [, gy] = toScreen(0, z)
      const major = Math.abs(z % 1) < 1e-6
      gridLines.push(
        <line key={`h${z.toFixed(2)}`} x1={toScreen(edges.left, 0)[0]} y1={gy} x2={toScreen(edges.right, 0)[0]} y2={gy}
          stroke="#ffffff" strokeOpacity={major ? 0.07 : 0.035} strokeWidth={1} />
      )
    }
  }

  const [rx, ry] = toScreen(edges.left, edges.top)
  const rw = (edges.right - edges.left) * scale
  const rh = (edges.bottom - edges.top) * scale

  const cx = rx + rw / 2
  const cy = ry + rh / 2
  const handleDefs = [
    ['nw', rx, ry], ['n', cx, ry], ['ne', rx + rw, ry],
    ['e', rx + rw, cy], ['se', rx + rw, ry + rh], ['s', cx, ry + rh],
    ['sw', rx, ry + rh], ['w', rx, cy],
  ]
  const cursorFor = { n: 'ns', s: 'ns', e: 'ew', w: 'ew', ne: 'nesw', sw: 'nesw', nw: 'nwse', se: 'nwse' }

  const selItem = items.find((i) => i.uid === selected) || null
  const selCat = selItem && CATALOG_BY_TYPE[selItem.type]

  return (
    <div className="editor2d" ref={wrapRef}>
      <svg ref={svgRef} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
        <defs>
          <filter id="softshadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        <rect x={0} y={0} width={W} height={H} fill="transparent" onPointerDown={() => onSelect(null)} />

        {/* floor */}
        <rect x={rx} y={ry} width={rw} height={rh} rx={6} fill="#20242c"
          stroke="rgba(255,255,255,0.04)" onPointerDown={() => onSelect(null)} />
        <g pointerEvents="none">{gridLines}</g>
        <rect x={rx} y={ry} width={rw} height={rh} rx={6} fill="none"
          stroke={ACCENT} strokeOpacity={0.85} strokeWidth={3} pointerEvents="none" />

        {/* room dimension labels */}
        <g pointerEvents="none" fontSize={12} fontWeight={600} fill="#aab2bf"
          fontFamily="-apple-system, system-ui, sans-serif">
          <rect x={cx - 38} y={ry - 26} width={76} height={18} rx={9} fill="#181c23" stroke="rgba(255,255,255,0.08)" />
          <text x={cx} y={ry - 13} textAnchor="middle">{formatLen(edges.right - edges.left, units)}</text>
          <g transform={`translate(${rx - 17} ${cy}) rotate(-90)`}>
            <rect x={-38} y={-9} width={76} height={18} rx={9} fill="#181c23" stroke="rgba(255,255,255,0.08)" />
            <text x={0} y={4} textAnchor="middle">{formatLen(edges.bottom - edges.top, units)}</text>
          </g>
        </g>

        {/* items */}
        {items.map((it) => {
          const c = CATALOG_BY_TYPE[it.type]
          if (!c) return null
          const [ix, iy] = toScreen(it.x, it.z)
          const dim = effDims(c, it)
          const wpx = dim.w * scale
          const dpx = dim.d * scale
          const isSel = it.uid === selected
          return (
            <g key={it.uid} transform={`translate(${ix} ${iy}) rotate(${it.rot || 0})`}
              onPointerDown={(e) => onItemDown(e, it)} style={{ cursor: 'grab' }}>
              <g filter="url(#softshadow)" opacity={c.shape === 'rug' || c.shape === 'round-rug' ? 0.96 : 1}>
                <Footprint item={{ ...c, color: it.color || c.color }} wpx={wpx} dpx={dpx} />
              </g>
              <rect x={-wpx / 2 - 4} y={-dpx / 2 - 4} width={wpx + 8} height={dpx + 8} fill="transparent" />
              {isSel && (
                <rect x={-wpx / 2 - 5} y={-dpx / 2 - 5} width={wpx + 10} height={dpx + 10} rx={7}
                  fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" pointerEvents="none" />
              )}
            </g>
          )
        })}

        {/* selected item: corner resize handles + size readout */}
        {selItem && selCat && (() => {
          const [ix, iy] = toScreen(selItem.x, selItem.z)
          const dim = effDims(selCat, selItem)
          const wpx = dim.w * scale
          const dpx = dim.d * scale
          const corners = [['nwse', -1, -1], ['nesw', 1, -1], ['nwse', 1, 1], ['nesw', -1, 1]]
          const radius = Math.hypot(wpx, dpx) / 2
          return (
            <>
              <g transform={`translate(${ix} ${iy}) rotate(${selItem.rot || 0})`}>
                {corners.map(([cur, mx, mz], i) => (
                  <g key={i} onPointerDown={(e) => onItemResizeDown(e, selItem)} style={{ cursor: `${cur}-resize` }}>
                    <circle cx={(mx * wpx) / 2} cy={(mz * dpx) / 2} r={15} fill="transparent" />
                    <circle cx={(mx * wpx) / 2} cy={(mz * dpx) / 2} r={6.5} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
                  </g>
                ))}
              </g>
              <g pointerEvents="none" fontSize={12.5} fontWeight={700}
                fontFamily="-apple-system, system-ui, sans-serif">
                <rect x={ix - 58} y={iy - radius - 30} width={116} height={22} rx={11} fill={ACCENT} stroke="#20160a" strokeWidth={1} />
                <text x={ix} y={iy - radius - 15} textAnchor="middle" fill="#20160a">
                  {formatLen(dim.w, units)} × {formatLen(dim.d, units)}
                </text>
              </g>
            </>
          )
        })()}

        {/* room resize handles */}
        {handleDefs.map(([h, hx, hy]) => (
          <g key={h} onPointerDown={(e) => onHandleDown(e, h)} style={{ cursor: `${cursorFor[h]}-resize` }}>
            <circle cx={hx} cy={hy} r={16} fill="transparent" />
            <circle cx={hx} cy={hy} r={h.length === 2 ? 7 : 5.5} fill={ACCENT}
              stroke="#20160a" strokeWidth={2} filter="url(#softshadow)" />
          </g>
        ))}
      </svg>

      <div className="hint">
        {selected ? 'Drag to move · drag white corners to resize' : 'Tap a piece to select · drag gold dots to resize the room'}
      </div>
    </div>
  )
}
