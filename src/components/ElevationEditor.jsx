import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useStore } from '../store.jsx'
import { formatLen } from '../util.js'
import { wallGeometry, listWalls, refEq } from '../wall.js'
import { IconCursor, IconSquare, IconCenter } from './Icons.jsx'

const ACCENT = '#d9b779'
const GRID = 0.05
const HANDLE_HIT = 18
const snap = (v, g) => Math.round(v / g) * g
const clampV = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

export default function ElevationEditor() {
  const { state, dispatch } = useStore()
  const { rooms, walls, builtins, selected, units } = state
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ W: 360, H: 540 })
  const [xf, setXf] = useState({ scale: 64, panX: 60, panY: 460, init: false })
  const [eTool, setETool] = useState('box')
  const [wallIdx, setWallIdx] = useState(0)
  const [gesture, setGesture] = useState(null)
  const gestureRef = useRef(null)
  gestureRef.current = gesture
  const pointers = useRef(new Map())
  const pinch = useRef(null)
  const xfRef = useRef(xf)
  xfRef.current = xf

  const list = listWalls(rooms, walls)
  const idx = Math.min(wallIdx, Math.max(0, list.length - 1))
  const current = list[idx]
  const geom = current ? wallGeometry(current.ref, rooms, walls) : null

  // sync to a wall selected in plan view, once
  const synced = useRef(false)
  useEffect(() => {
    if (synced.current || !list.length) return
    synced.current = true
    if (selected && (selected.type === 'wall' || selected.type === 'roomwall')) {
      const ref = selected.type === 'wall' ? { kind: 'wall', uid: selected.uid } : { kind: 'room', uid: selected.uid, side: selected.side }
      const i = list.findIndex((l) => refEq(l.ref, ref))
      if (i >= 0) setWallIdx(i)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setSize({ W: el.clientWidth, H: el.clientHeight }))
    ro.observe(el)
    setSize({ W: el.clientWidth, H: el.clientHeight })
    return () => ro.disconnect()
  }, [])

  const { W, H } = size
  const { scale, panX, panY } = xf
  const toScreen = (u, v) => [u * scale + panX, panY - v * scale]
  const toWorld = (px, py) => [(px - panX) / scale, (panY - py) / scale]
  const ptr = (e) => { const r = svgRef.current.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top] }

  // fit the wall face into view
  function fitView() {
    if (!geom || !W) { setXf((s) => ({ ...s, init: true })); return }
    const pad = 64
    const ns = clampV(Math.min((W - 2 * pad) / Math.max(0.5, geom.length), (H - 2 * pad) / Math.max(0.5, geom.height)), 14, 200)
    setXf({ scale: ns, panX: W / 2 - (geom.length / 2) * ns, panY: H / 2 + (geom.height / 2) * ns, init: true })
  }
  const fitKey = geom ? `${current.label}:${geom.length.toFixed(2)}:${geom.height.toFixed(2)}` : 'none'
  useLayoutEffect(() => { fitView() /* eslint-disable-next-line */ }, [fitKey, W, H])

  const mine = geom ? builtins.filter((b) => refEq(b.wall, current.ref)) : []
  const selB = selected?.type === 'builtin' ? builtins.find((b) => b.uid === selected.uid) : null
  const selMine = selB && geom && refEq(selB.wall, current.ref) ? selB : null

  function builtinCorners(b) {
    return [toScreen(b.u, b.v), toScreen(b.u + b.w, b.v), toScreen(b.u + b.w, b.v + b.h), toScreen(b.u, b.v + b.h)]
  }
  function hitTest(px, py) {
    const [u, v] = toWorld(px, py)
    if (selMine) {
      const cs = builtinCorners(selMine)
      const opp = [2, 3, 0, 1]
      for (let i = 0; i < 4; i++) {
        if (Math.hypot(px - cs[i][0], py - cs[i][1]) < HANDLE_HIT) {
          const o = builtinCorners(selMine)[opp[i]]
          return { kind: 'b-handle', fixedU: (o[0] - panX) / scale, fixedV: (panY - o[1]) / scale }
        }
      }
    }
    for (let i = mine.length - 1; i >= 0; i--) {
      const b = mine[i]
      if (u >= b.u && u <= b.u + b.w && v >= b.v && v <= b.v + b.h) return { kind: 'builtin', uid: b.uid }
    }
    return { kind: 'empty' }
  }

  const onDown = (e) => {
    const [px, py] = ptr(e)
    pointers.current.set(e.pointerId, { x: px, y: py })
    svgRef.current.setPointerCapture(e.pointerId)
    if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()]
      const midx = (pts[0].x + pts[1].x) / 2
      const midy = (pts[0].y + pts[1].y) / 2
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y)
      const vv = xfRef.current
      pinch.current = { startDist: dist, startScale: vv.scale, wmx: (midx - vv.panX) / vv.scale, wmy: (vv.panY - midy) / vv.scale }
      setGesture(null)
      return
    }
    if (pointers.current.size > 2 || !geom) return
    const [u, v] = toWorld(px, py)
    if (eTool === 'box') {
      setGesture({ kind: 'drawBox', u0: snap(u, GRID), v0: snap(v, GRID), cur: { u: snap(u, GRID), v: snap(v, GRID), w: 0, h: 0 } })
      return
    }
    const h = hitTest(px, py)
    if (h.kind === 'b-handle') setGesture({ kind: 'resizeB', uid: selMine.uid, fixedU: h.fixedU, fixedV: h.fixedV })
    else if (h.kind === 'builtin') {
      const b = mine.find((o) => o.uid === h.uid)
      dispatch({ type: 'select', sel: { type: 'builtin', uid: h.uid } })
      setGesture({ kind: 'moveB', uid: h.uid, ou: u - b.u, ov: v - b.v })
    } else {
      setGesture({ kind: 'pan', sx: px, sy: py, panX: xfRef.current.panX, panY: xfRef.current.panY, moved: false })
    }
  }

  const onMove = (e) => {
    const [px, py] = ptr(e)
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, { x: px, y: py })
    if (pinch.current && pointers.current.size >= 2) {
      const pts = [...pointers.current.values()]
      const midx = (pts[0].x + pts[1].x) / 2
      const midy = (pts[0].y + pts[1].y) / 2
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y)
      const p = pinch.current
      const ns = clampV(p.startScale * (dist / p.startDist), 12, 240)
      setXf({ scale: ns, panX: midx - p.wmx * ns, panY: midy + p.wmy * ns, init: true })
      return
    }
    const g = gestureRef.current
    if (!g) return
    const [u, v] = toWorld(px, py)
    if (g.kind === 'pan') {
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 4) g.moved = true
      setXf((s) => ({ ...s, panX: g.panX + (px - g.sx), panY: g.panY + (py - g.sy) }))
    } else if (g.kind === 'drawBox') {
      const u1 = snap(u, GRID)
      const v1 = snap(v, GRID)
      setGesture((s) => ({ ...s, cur: { u: Math.min(s.u0, u1), v: Math.min(s.v0, v1), w: Math.abs(u1 - s.u0), h: Math.abs(v1 - s.v0) } }))
    } else if (g.kind === 'moveB') {
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch: { u: snap(u - g.ou, GRID), v: snap(v - g.ov, GRID) }, mergeKey: `mb:${g.uid}` })
    } else if (g.kind === 'resizeB') {
      const u1 = snap(u, GRID)
      const v1 = snap(v, GRID)
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch: { u: Math.min(g.fixedU, u1), v: Math.min(g.fixedV, v1), w: Math.max(0.1, Math.abs(u1 - g.fixedU)), h: Math.max(0.1, Math.abs(v1 - g.fixedV)) }, mergeKey: `rb:${g.uid}` })
    }
  }

  const onUp = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    const g = gestureRef.current
    if (g) {
      if (g.kind === 'drawBox' && g.cur.w > 0.1 && g.cur.h > 0.1) {
        dispatch({ type: 'addBuiltin', wall: current.ref, u: g.cur.u, v: g.cur.v, w: g.cur.w, h: g.cur.h, depth: 0.5, kind: 'cubby' })
        setETool('select')
      } else if (g.kind === 'pan' && !g.moved) {
        dispatch({ type: 'select', sel: null })
      }
    }
    if (pointers.current.size === 0) setGesture(null)
    try { svgRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }
  const onWheel = (e) => {
    const [px, py] = ptr(e)
    const v = xfRef.current
    const ns = clampV(v.scale * (e.deltaY < 0 ? 1.1 : 0.9), 12, 240)
    setXf({ scale: ns, panX: px - ((px - v.panX) / v.scale) * ns, panY: py + ((v.panY - py) / v.scale) * ns, init: true })
  }

  // grid (within the wall face only)
  const grid = []
  if (geom) {
    for (let u = 0; u <= geom.length + 1e-6; u += 0.5) {
      const [sx] = toScreen(u, 0)
      grid.push(<line key={`u${u.toFixed(2)}`} x1={sx} y1={toScreen(0, 0)[1]} x2={sx} y2={toScreen(0, geom.height)[1]} stroke="#000" strokeOpacity={Math.abs(u % 1) < 1e-6 ? 0.1 : 0.045} strokeWidth={1} />)
    }
    for (let v = 0; v <= geom.height + 1e-6; v += 0.5) {
      const [, sy] = toScreen(0, v)
      grid.push(<line key={`v${v.toFixed(2)}`} x1={toScreen(0, 0)[0]} y1={sy} x2={toScreen(geom.length, 0)[0]} y2={sy} stroke="#000" strokeOpacity={Math.abs(v % 1) < 1e-6 ? 0.1 : 0.045} strokeWidth={1} />)
    }
  }

  if (!list.length) {
    return (
      <div className="editor2d elevation" ref={wrapRef}>
        <div className="empty">
          <b>No walls yet</b>
          <span>Go to <strong>Plan</strong> and draw a room or wall, then come back to design built-ins against it.</span>
        </div>
      </div>
    )
  }

  const [wx0, wy0] = geom ? toScreen(0, geom.height) : [0, 0]
  const wPix = geom ? geom.length * scale : 0
  const hPix = geom ? geom.height * scale : 0

  // elevation furnishings: floor baseline, hatch, height ruler, scale figure
  const ruler = []
  const hatch = []
  const person = []
  let floorY = 0
  let ceilY = 0
  let gxA = 0
  if (geom) {
    floorY = toScreen(0, 0)[1]
    ceilY = toScreen(0, geom.height)[1]
    gxA = toScreen(0, 0)[0]
    const step = units === 'm' ? 0.5 : 0.3048
    let k = 0
    for (let v = 0; v <= geom.height + 1e-6; v += step, k++) {
      const y = toScreen(0, v)[1]
      const major = k % 2 === 0
      ruler.push(<line key={`t${k}`} x1={gxA - 7} y1={y} x2={gxA} y2={y} stroke="#9aa1ab" strokeWidth={major ? 1.6 : 1} />)
      if (major && v > 0.05) ruler.push(<text key={`rl${k}`} x={gxA - 10} y={y + 3} textAnchor="end" fontSize={9.5} fill="#8a92a0" fontFamily="-apple-system, system-ui, sans-serif">{formatLen(v, units)}</text>)
    }
    for (let x = gxA % 16; x < W; x += 16) hatch.push(<line key={`hx${x}`} x1={x} y1={floorY} x2={x - 10} y2={floorY + 12} stroke="#39414f" strokeOpacity={0.22} strokeWidth={1} />)
    if (geom.height >= 1.7 && scale > 22) {
      const pu = Math.min(0.55, geom.length * 0.25)
      const P = (u, v) => toScreen(u, v)
      const col = 'rgba(57,65,79,0.22)'
      const sw = Math.max(2, 0.05 * scale)
      const head = P(pu, 1.62)
      person.push(<circle key="ph" cx={head[0]} cy={head[1]} r={0.1 * scale} fill="none" stroke={col} strokeWidth={sw} />)
      const seg = (a, b, i) => { const A = P(...a); const B = P(...b); person.push(<line key={`ps${i}`} x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={col} strokeWidth={sw} strokeLinecap="round" />) }
      seg([pu, 1.52], [pu, 0.92], 0)
      seg([pu - 0.2, 1.3], [pu + 0.2, 1.3], 1)
      seg([pu, 0.92], [pu - 0.13, 0], 2)
      seg([pu, 0.92], [pu + 0.13, 0], 3)
    }
  }

  return (
    <div className="editor2d elevation" ref={wrapRef}>
      <svg ref={svgRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onWheel={onWheel}
        style={{ touchAction: 'none', cursor: eTool === 'box' ? 'crosshair' : 'default' }}>
        <defs>
          <filter id="esh" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.22" />
          </filter>
          <linearGradient id="wallgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6f7f9" />
            <stop offset="1" stopColor="#e2e6ec" />
          </linearGradient>
        </defs>
        <rect x={0} y={0} width={W} height={H} fill="transparent" />

        {geom && (
          <>
            {/* wall face (vertical gradient reads as an upright surface) */}
            <rect x={wx0} y={wy0} width={wPix} height={hPix} fill="url(#wallgrad)" stroke="#39414f" strokeWidth={2.5} pointerEvents="none" />
            {/* ceiling line */}
            <line x1={wx0} y1={ceilY} x2={wx0 + wPix} y2={ceilY} stroke="#39414f" strokeOpacity={0.5} strokeWidth={2} strokeDasharray="7 6" pointerEvents="none" />
            <g pointerEvents="none">{grid}</g>
            {/* height ruler + scale figure */}
            <g pointerEvents="none">{ruler}</g>
            <g pointerEvents="none">{person}</g>
            {/* floor baseline across the whole view + ground hatch */}
            <line x1={0} y1={floorY} x2={W} y2={floorY} stroke="#39414f" strokeWidth={3.5} pointerEvents="none" />
            <g pointerEvents="none">{hatch}</g>
            <text x={wx0 + 7} y={floorY - 7} fontSize={10} fontWeight={700} letterSpacing="1.5" fill="#39414f" opacity={0.45} pointerEvents="none">FLOOR</text>

            {/* dimension labels */}
            <g pointerEvents="none" fontSize={11.5} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">
              <rect x={wx0 + wPix / 2 - 70} y={wy0 - 25} width={140} height={19} rx={9.5} fill={ACCENT} />
              <text x={wx0 + wPix / 2} y={wy0 - 11} textAnchor="middle">{formatLen(geom.length, units)} wide</text>
              <g transform={`translate(${wx0 - 16} ${wy0 + hPix / 2}) rotate(-90)`}>
                <rect x={-58} y={-9} width={116} height={18} rx={9} fill={ACCENT} />
                <text x={0} y={4} textAnchor="middle">{formatLen(geom.height, units)} tall</text>
              </g>
            </g>

            {/* built-ins */}
            {mine.map((b) => {
              const [bx, by] = toScreen(b.u, b.v + b.h)
              const sel = selMine?.uid === b.uid
              const open = b.kind === 'cubby'
              return (
                <g key={b.uid} pointerEvents="none">
                  <rect x={bx} y={by} width={b.w * scale} height={b.h * scale}
                    fill={open ? '#f6f3ec' : b.color}
                    stroke={sel ? ACCENT : b.color}
                    strokeWidth={open ? Math.max(4, 0.05 * scale) : 2}
                    filter="url(#esh)" />
                  {sel && <rect x={bx - 4} y={by - 4} width={b.w * scale + 8} height={b.h * scale + 8} rx={6} fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" />}
                </g>
              )
            })}

            {/* draw preview */}
            {gesture?.kind === 'drawBox' && (() => {
              const [bx, by] = toScreen(gesture.cur.u, gesture.cur.v + gesture.cur.h)
              return (
                <g pointerEvents="none">
                  <rect x={bx} y={by} width={gesture.cur.w * scale} height={gesture.cur.h * scale} fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={3} strokeDasharray="6 5" />
                  <text x={bx + (gesture.cur.w * scale) / 2} y={by - 8} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a7327">
                    {formatLen(gesture.cur.w, units)} × {formatLen(gesture.cur.h, units)}
                  </text>
                </g>
              )
            })()}

            {/* selected built-in: handles + badge */}
            {selMine && (() => {
              const cs = builtinCorners(selMine)
              const [bx, by] = toScreen(selMine.u + selMine.w / 2, selMine.v + selMine.h)
              return (
                <g pointerEvents="none">
                  {cs.map(([hx, hy], i) => <circle key={i} cx={hx} cy={hy} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#esh)" />)}
                  <rect x={bx - 78} y={by - 28} width={156} height={20} rx={10} fill={ACCENT} />
                  <text x={bx} y={by - 14} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">
                    {formatLen(selMine.w, units)} × {formatLen(selMine.h, units)}
                  </text>
                </g>
              )
            })()}
          </>
        )}
      </svg>

      {/* wall picker */}
      <div className="wall-picker">
        <button onClick={() => setWallIdx((idx - 1 + list.length) % list.length)} aria-label="Previous wall">‹</button>
        <span>{current?.label}</span>
        <button onClick={() => setWallIdx((idx + 1) % list.length)} aria-label="Next wall">›</button>
      </div>

      {/* tool switcher */}
      <div className="toolbar" style={{ top: 60 }}>
        <button className={eTool === 'select' ? 'active' : ''} onClick={() => setETool('select')}><IconCursor size={16} /> Select</button>
        <button className={eTool === 'box' ? 'active' : ''} onClick={() => setETool('box')}><IconSquare size={16} /> Box</button>
      </div>

      <button className="recenter" onClick={fitView} aria-label="Fit to view"><IconCenter size={20} /></button>

      <div className="hint">
        {eTool === 'box' ? 'Drag to add a box, shelf or cubby on this wall'
          : selMine ? 'Drag to move · drag corners to resize · edit for depth & style'
          : 'Tap a box to select · use ‹ › to switch walls'}
      </div>
    </div>
  )
}
