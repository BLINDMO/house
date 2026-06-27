import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useStore } from '../store.jsx'
import { formatLen } from '../util.js'
import { wallGeometry, listWalls, refEq } from '../wall.js'
import { IconCenter } from './Icons.jsx'

const ACCENT = '#d9b779'
const GRID = 0.05
const HANDLE_HIT = 18
const snap = (v, g) => Math.round(v / g) * g
const clampV = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
const distToSeg = (px, pz, x1, z1, x2, z2) => {
  const dx = x2 - x1
  const dz = z2 - z1
  const l2 = dx * dx + dz * dz || 1e-6
  let t = ((px - x1) * dx + (pz - z1) * dz) / l2
  t = clampV(t, 0, 1)
  return Math.hypot(px - (x1 + t * dx), pz - (z1 + t * dz))
}

const WOOD = { color: '#c79a6b', tex: 'wood:oak' }
const WALNUT = { color: '#7a543a', tex: 'wood:walnut' }
const COUNTER = { color: '#d7d2c8', tex: 'stone:white' }

export const PRESETS = [
  { id: 'bunk', name: 'Bunk bed' },
  { id: 'base', name: 'Base cabinets' },
  { id: 'upper', name: 'Upper cabinets' },
  { id: 'cubby', name: 'Cubby wall' },
  { id: 'shelves', name: 'Open shelves' },
  { id: 'wardrobe', name: 'Wardrobe' },
]

export function buildPreset(id, geom, ref) {
  const L = geom.length
  const H = geom.height
  const out = []
  const add = (u, v, w, h, depth, kind = 'panel', fin = WOOD) =>
    out.push({ wall: ref, u: Math.max(0, u), v: Math.max(0, v), w, h, depth, kind, color: fin.color, tex: fin.tex })
  if (id === 'bunk') {
    const len = Math.min(L, 2.03)
    const bw = 1.0
    add(0, 0, 0.1, 1.85, bw)
    add(len - 0.1, 0, 0.1, 1.85, bw)
    add(0, 0.35, len, 0.12, bw)
    add(0, 1.45, len, 0.12, bw)
    add(0, 1.6, len, 0.32, 0.05)
  } else if (id === 'base') {
    const cab = 0.6
    const n = Math.max(1, Math.floor(L / cab))
    const run = n * cab
    for (let i = 0; i < n; i++) add(i * cab, 0, cab - 0.01, 0.9, 0.6)
    add(0, 0.9, run, 0.04, 0.64, 'panel', COUNTER)
  } else if (id === 'upper') {
    const cab = 0.6
    const n = Math.max(1, Math.floor(L / cab))
    for (let i = 0; i < n; i++) add(i * cab, 1.45, cab - 0.01, 0.7, 0.32)
  } else if (id === 'cubby' || id === 'shelves') {
    const cols = id === 'shelves' ? 1 : clampV(Math.round(L / 0.5), 2, 6)
    const rows = clampV(Math.round((H * 0.85) / 0.45), 2, 6)
    const cw = L / cols
    const ch = Math.min(0.5, (H * 0.85) / rows)
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) add(c * cw, r * ch, cw, ch, 0.4, 'cubby')
  } else if (id === 'wardrobe') {
    const ww = Math.min(L, 1.2)
    const wh = Math.min(H, 2.0)
    add(0, 0, ww / 2 - 0.005, wh, 0.6, 'panel', WALNUT)
    add(ww / 2, 0, ww / 2, wh, 0.6, 'panel', WALNUT)
  }
  return out
}

export default function ElevationEditor() {
  const { state, dispatch } = useStore()
  const { rooms, walls, builtins, selected, units, sideTool } = state
  const eTool = sideTool
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ W: 360, H: 540 })
  const [xf, setXf] = useState({ scale: 64, panX: 60, panY: 460, init: false })
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

  const synced = useRef(false)
  useEffect(() => {
    if (synced.current || !list.length) return
    synced.current = true
    let ref = state.sideWall
    if (!ref && selected && (selected.type === 'wall' || selected.type === 'roomwall')) {
      ref = selected.type === 'wall' ? { kind: 'wall', uid: selected.uid } : { kind: 'room', uid: selected.uid, side: selected.side }
    }
    if (ref) {
      const i = list.findIndex((l) => refEq(l.ref, ref))
      if (i >= 0) setWallIdx(i)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // keep the store's current wall in sync so the rail/presets panel knows it
  const refKey = current ? `${current.ref.kind}:${current.ref.uid}:${current.ref.side || ''}` : ''
  useEffect(() => {
    if (current) dispatch({ type: 'sideWall', ref: current.ref })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refKey])

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

  function fitView() {
    if (!geom || !W) { setXf((s) => ({ ...s, init: true })); return }
    const padX = 56
    const padTop = 116 // clear the wall picker + tool rows
    const padBottom = 60 // clear floor hatch + hint
    const ns = clampV(Math.min((W - 2 * padX) / Math.max(0.5, geom.length), (H - padTop - padBottom) / Math.max(0.5, geom.height)), 14, 200)
    const cy = (padTop + (H - padBottom)) / 2
    setXf({ scale: ns, panX: W / 2 - (geom.length / 2) * ns, panY: cy + (geom.height / 2) * ns, init: true })
  }
  const fitKey = geom ? `${current.label}` : 'none'
  useLayoutEffect(() => { if (gestureRef.current) return; fitView() /* eslint-disable-next-line */ }, [fitKey, W, H])

  const mine = geom ? builtins.filter((b) => refEq(b.wall, current.ref)) : []
  const selB = selected?.type === 'builtin' ? builtins.find((b) => b.uid === selected.uid) : null
  const selMine = selB && geom && refEq(selB.wall, current.ref) ? selB : null

  const rectCorners = (b) => [toScreen(b.u, b.v), toScreen(b.u + b.w, b.v), toScreen(b.u + b.w, b.v + b.h), toScreen(b.u, b.v + b.h)]

  function hitTest(px, py) {
    const [u, v] = toWorld(px, py)
    if (selMine) {
      if (selMine.kind === 'board') {
        for (const end of ['1', '2']) {
          const [hx, hy] = toScreen(selMine['u' + end], selMine['v' + end])
          if (Math.hypot(px - hx, py - hy) < HANDLE_HIT) return { kind: 'b-end', end }
        }
      } else {
        const cs = rectCorners(selMine)
        const opp = [2, 3, 0, 1]
        for (let i = 0; i < 4; i++) {
          if (Math.hypot(px - cs[i][0], py - cs[i][1]) < HANDLE_HIT) {
            const o = rectCorners(selMine)[opp[i]]
            return { kind: 'b-handle', fixedU: (o[0] - panX) / scale, fixedV: (panY - o[1]) / scale }
          }
        }
      }
    }
    // wall (room) resize handles — top edge = height, right edge = width
    if (geom && !selMine) {
      const defs = [['len', geom.length, geom.height / 2], ['ht', geom.length / 2, geom.height], ['both', geom.length, geom.height]]
      for (const [which, hu, hv] of defs) {
        const [hx, hy] = toScreen(hu, hv)
        if (Math.hypot(px - hx, py - hy) < HANDLE_HIT) return { kind: 'wall-handle', which }
      }
    }
    for (let i = mine.length - 1; i >= 0; i--) {
      const b = mine[i]
      if (b.kind === 'board') {
        if (distToSeg(u, v, b.u1, b.v1, b.u2, b.v2) <= b.thickness / 2 + 0.1) return { kind: 'builtin', uid: b.uid }
      } else if (u >= b.u && u <= b.u + b.w && v >= b.v && v <= b.v + b.h) return { kind: 'builtin', uid: b.uid }
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
    // Existing objects & handles are grabbable in ANY tool — only empty space draws.
    const h = hitTest(px, py)
    if (h.kind === 'b-handle') setGesture({ kind: 'resizeB', uid: selMine.uid, fixedU: h.fixedU, fixedV: h.fixedV })
    else if (h.kind === 'b-end') setGesture({ kind: 'endB', uid: selMine.uid, end: h.end })
    else if (h.kind === 'wall-handle') setGesture({ kind: 'resizeWall', which: h.which })
    else if (h.kind === 'builtin') {
      const b = mine.find((o) => o.uid === h.uid)
      dispatch({ type: 'select', sel: { type: 'builtin', uid: h.uid } })
      if (b.kind === 'board') setGesture({ kind: 'moveBoard', uid: h.uid, pu: u, pv: v, u1: b.u1, v1: b.v1, u2: b.u2, v2: b.v2 })
      else setGesture({ kind: 'moveB', uid: h.uid, ou: u - b.u, ov: v - b.v })
    } else if (eTool === 'box') {
      setGesture({ kind: 'drawBox', u0: snap(u, GRID), v0: snap(v, GRID), cur: { u: snap(u, GRID), v: snap(v, GRID), w: 0, h: 0 } })
    } else if (eTool === 'board') {
      const su = snap(u, GRID)
      const sv = snap(v, GRID)
      setGesture({ kind: 'drawLine', u1: su, v1: sv, cur: { u1: su, v1: sv, u2: su, v2: sv } })
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
    } else if (g.kind === 'drawLine') {
      let u2 = snap(u, GRID)
      let v2 = snap(v, GRID)
      if (Math.abs(u2 - g.u1) < 0.08) u2 = g.u1 // snap to vertical
      if (Math.abs(v2 - g.v1) < 0.08) v2 = g.v1 // snap to horizontal
      setGesture((s) => ({ ...s, cur: { u1: s.u1, v1: s.v1, u2, v2 } }))
    } else if (g.kind === 'moveB') {
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch: { u: snap(u - g.ou, GRID), v: snap(v - g.ov, GRID) }, mergeKey: `mb:${g.uid}` })
    } else if (g.kind === 'moveBoard') {
      const du = snap(u - g.pu, GRID)
      const dv = snap(v - g.pv, GRID)
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch: { u1: g.u1 + du, v1: g.v1 + dv, u2: g.u2 + du, v2: g.v2 + dv }, mergeKey: `mb:${g.uid}` })
    } else if (g.kind === 'endB') {
      const patch = g.end === '1' ? { u1: snap(u, GRID), v1: snap(v, GRID) } : { u2: snap(u, GRID), v2: snap(v, GRID) }
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch, mergeKey: `eb:${g.uid}` })
    } else if (g.kind === 'resizeB') {
      const u1 = snap(u, GRID)
      const v1 = snap(v, GRID)
      dispatch({ type: 'update', sel: { type: 'builtin', uid: g.uid }, patch: { u: Math.min(g.fixedU, u1), v: Math.min(g.fixedV, v1), w: Math.max(0.1, Math.abs(u1 - g.fixedU)), h: Math.max(0.1, Math.abs(v1 - g.fixedV)) }, mergeKey: `rb:${g.uid}` })
    } else if (g.kind === 'resizeWall') {
      let L = geom.length
      let Hh = geom.height
      if (g.which === 'len' || g.which === 'both') L = Math.max(0.5, snap(u, GRID))
      if (g.which === 'ht' || g.which === 'both') Hh = clampV(snap(v, GRID), 1.5, 6)
      const ref = current.ref
      if (ref.kind === 'room') {
        const patch = { height: Hh }
        if (ref.side === 'n' || ref.side === 's') patch.w = L
        else patch.d = L
        dispatch({ type: 'update', sel: { type: 'room', uid: ref.uid }, patch, mergeKey: `ws:${ref.uid}` })
      } else {
        dispatch({ type: 'update', sel: { type: 'wall', uid: ref.uid }, patch: { height: Hh, x2: geom.ox + geom.dirx * L, z2: geom.oz + geom.dirz * L }, mergeKey: `ws:${ref.uid}` })
      }
    }
  }

  const onUp = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    const g = gestureRef.current
    if (g && geom) {
      if (g.kind === 'drawBox' && g.cur.w > 0.1 && g.cur.h > 0.1) {
        dispatch({ type: 'addBuiltin', builtin: { wall: current.ref, u: g.cur.u, v: g.cur.v, w: g.cur.w, h: g.cur.h, depth: 0.5, kind: 'cubby', color: WOOD.color, tex: WOOD.tex } })
      } else if (g.kind === 'drawLine' && Math.hypot(g.cur.u2 - g.cur.u1, g.cur.v2 - g.cur.v1) > 0.05) {
        dispatch({ type: 'addBuiltin', builtin: { wall: current.ref, kind: 'board', u1: g.cur.u1, v1: g.cur.v1, u2: g.cur.u2, v2: g.cur.v2, thickness: 0.05, depth: 0.04, color: WOOD.color, tex: WOOD.tex } })
      } else if (g.kind === 'pan' && !g.moved) {
        dispatch({ type: 'select', sel: null })
      }
    }
    if (g && g.kind === 'resizeWall') fitView()
    if (pointers.current.size === 0) setGesture(null)
    try { svgRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }
  const onWheel = (e) => {
    const [px, py] = ptr(e)
    const v = xfRef.current
    const ns = clampV(v.scale * (e.deltaY < 0 ? 1.1 : 0.9), 12, 240)
    setXf({ scale: ns, panX: px - ((px - v.panX) / v.scale) * ns, panY: py + ((v.panY - py) / v.scale) * ns, init: true })
  }


  // grid + elevation furnishings
  const grid = []
  const ruler = []
  const hatch = []
  let floorY = 0
  let ceilY = 0
  let gxA = 0
  if (geom) {
    for (let u = 0; u <= geom.length + 1e-6; u += 0.5) {
      const [sx] = toScreen(u, 0)
      grid.push(<line key={`gu${u.toFixed(2)}`} x1={sx} y1={toScreen(0, 0)[1]} x2={sx} y2={toScreen(0, geom.height)[1]} stroke="#000" strokeOpacity={Math.abs(u % 1) < 1e-6 ? 0.1 : 0.045} strokeWidth={1} />)
    }
    for (let v = 0; v <= geom.height + 1e-6; v += 0.5) {
      const [, sy] = toScreen(0, v)
      grid.push(<line key={`gv${v.toFixed(2)}`} x1={toScreen(0, 0)[0]} y1={sy} x2={toScreen(geom.length, 0)[0]} y2={sy} stroke="#000" strokeOpacity={Math.abs(v % 1) < 1e-6 ? 0.1 : 0.045} strokeWidth={1} />)
    }
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

  return (
    <div className="editor2d elevation" ref={wrapRef}>
      <svg ref={svgRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onWheel={onWheel}
        style={{ touchAction: 'none', cursor: eTool === 'select' ? 'default' : 'crosshair' }}>
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
            <rect x={wx0} y={wy0} width={wPix} height={hPix} fill="url(#wallgrad)" stroke="#39414f" strokeWidth={2.5} pointerEvents="none" />
            <line x1={wx0} y1={ceilY} x2={wx0 + wPix} y2={ceilY} stroke="#39414f" strokeOpacity={0.5} strokeWidth={2} strokeDasharray="7 6" pointerEvents="none" />
            <g pointerEvents="none">{grid}</g>
            <g pointerEvents="none">{ruler}</g>
            <line x1={0} y1={floorY} x2={W} y2={floorY} stroke="#39414f" strokeWidth={3.5} pointerEvents="none" />
            <g pointerEvents="none">{hatch}</g>
            <text x={wx0 + 7} y={floorY - 7} fontSize={10} fontWeight={700} letterSpacing="1.5" fill="#39414f" opacity={0.45} pointerEvents="none">FLOOR</text>

            {/* built-ins */}
            {mine.map((b) => {
              const sel = selMine?.uid === b.uid
              if (b.kind === 'board') {
                const [ax, ay] = toScreen(b.u1, b.v1)
                const [bx, by] = toScreen(b.u2, b.v2)
                return <line key={b.uid} x1={ax} y1={ay} x2={bx} y2={by} stroke={sel ? ACCENT : b.color} strokeWidth={Math.max(4, b.thickness * scale)} strokeLinecap="round" pointerEvents="none" />
              }
              const [bx, by] = toScreen(b.u, b.v + b.h)
              const open = b.kind === 'cubby'
              return (
                <g key={b.uid} pointerEvents="none">
                  <rect x={bx} y={by} width={b.w * scale} height={b.h * scale} fill={open ? '#f6f3ec' : b.color} stroke={sel ? ACCENT : b.color} strokeWidth={open ? Math.max(4, 0.05 * scale) : 2} filter="url(#esh)" />
                  {sel && <rect x={bx - 4} y={by - 4} width={b.w * scale + 8} height={b.h * scale + 8} rx={6} fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" />}
                </g>
              )
            })}

            {/* previews */}
            {gesture?.kind === 'drawBox' && (() => {
              const [bx, by] = toScreen(gesture.cur.u, gesture.cur.v + gesture.cur.h)
              return (
                <g pointerEvents="none">
                  <rect x={bx} y={by} width={gesture.cur.w * scale} height={gesture.cur.h * scale} fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={3} strokeDasharray="6 5" />
                  <text x={bx + (gesture.cur.w * scale) / 2} y={by - 8} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a7327">{formatLen(gesture.cur.w, units)} × {formatLen(gesture.cur.h, units)}</text>
                </g>
              )
            })()}
            {gesture?.kind === 'drawLine' && (() => {
              const [ax, ay] = toScreen(gesture.cur.u1, gesture.cur.v1)
              const [bx, by] = toScreen(gesture.cur.u2, gesture.cur.v2)
              const len = Math.hypot(gesture.cur.u2 - gesture.cur.u1, gesture.cur.v2 - gesture.cur.v1)
              return (
                <g pointerEvents="none">
                  <line x1={ax} y1={ay} x2={bx} y2={by} stroke={ACCENT} strokeWidth={6} strokeLinecap="round" strokeDasharray="8 6" />
                  <text x={(ax + bx) / 2} y={(ay + by) / 2 - 8} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a7327">{formatLen(len, units)}</text>
                </g>
              )
            })()}

            {/* selection handles */}
            {selMine && selMine.kind === 'board' && (() => {
              const [ax, ay] = toScreen(selMine.u1, selMine.v1)
              const [bx, by] = toScreen(selMine.u2, selMine.v2)
              return (
                <g pointerEvents="none">
                  <circle cx={ax} cy={ay} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#esh)" />
                  <circle cx={bx} cy={by} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#esh)" />
                </g>
              )
            })()}
            {selMine && selMine.kind !== 'board' && (() => {
              const cs = rectCorners(selMine)
              const [bx, by] = toScreen(selMine.u + selMine.w / 2, selMine.v + selMine.h)
              return (
                <g pointerEvents="none">
                  {cs.map(([hx, hy], i) => <circle key={i} cx={hx} cy={hy} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#esh)" />)}
                  <rect x={bx - 78} y={by - 28} width={156} height={20} rx={10} fill={ACCENT} />
                  <text x={bx} y={by - 14} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">{formatLen(selMine.w, units)} × {formatLen(selMine.h, units)}</text>
                </g>
              )
            })()}

            {/* wall (room) resize handles + size — shown when no built-in is selected */}
            {!selMine && (() => {
              const tc = toScreen(geom.length / 2, geom.height)
              const rc = toScreen(geom.length, geom.height / 2)
              const cor = toScreen(geom.length, geom.height)
              const [lx, ly] = toScreen(0, geom.height)
              return (
                <g pointerEvents="none">
                  <rect x={lx + 8} y={ly + 8} width={148} height={20} rx={10} fill={ACCENT} />
                  <text x={lx + 82} y={ly + 22} textAnchor="middle" fontSize={11} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">{formatLen(geom.length, units)} W × {formatLen(geom.height, units)} H</text>
                  <circle cx={tc[0]} cy={tc[1]} r={7.5} fill={ACCENT} stroke="#20160a" strokeWidth={2} filter="url(#esh)" />
                  <circle cx={rc[0]} cy={rc[1]} r={7.5} fill={ACCENT} stroke="#20160a" strokeWidth={2} filter="url(#esh)" />
                  <circle cx={cor[0]} cy={cor[1]} r={8} fill={ACCENT} stroke="#20160a" strokeWidth={2} filter="url(#esh)" />
                </g>
              )
            })()}
          </>
        )}
      </svg>

      <div className="wall-picker">
        <button onClick={() => setWallIdx((idx - 1 + list.length) % list.length)} aria-label="Previous wall">‹</button>
        <span>{current?.label}</span>
        <button onClick={() => setWallIdx((idx + 1) % list.length)} aria-label="Next wall">›</button>
      </div>

      <button className="recenter" onClick={fitView} aria-label="Fit to view"><IconCenter size={20} /></button>

      <div className="hint">
        {selMine ? 'Drag to move · drag handles to resize · edit for depth & finish'
          : eTool === 'box' ? 'Drag empty space to add a box · tap a piece to edit it'
          : eTool === 'board' ? 'Drag empty space to draw a board · tap a piece to edit it'
          : 'Tap a piece to edit · drag the gold dots to resize the room'}
      </div>
    </div>
  )
}
