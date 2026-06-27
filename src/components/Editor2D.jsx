import React, { useLayoutEffect, useRef, useState } from 'react'
import { useStore, footHalf } from '../store.jsx'
import { CATALOG_BY_TYPE } from '../data/catalog.js'
import { effDims, formatLen } from '../util.js'
import Footprint from './Footprint.jsx'
import { IconCenter } from './Icons.jsx'

const ACCENT = '#d9b779'
const WALL_ON = '#39414f'
const WALL_OFF = '#c3c9d1'
const FLOOR = '#eef1f5'
const GRID = 0.1
const ITEM_GRID = 0.05
const HANDLE_HIT = 18
const SIDES = ['n', 'e', 's', 'w']

const snap = (v, g) => Math.round(v / g) * g
const clampV = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
const wallOn = (room, side) => !room.wallsOn || room.wallsOn[side] !== false

function roomSide(r, side) {
  switch (side) {
    case 'n': return [r.x, r.z, r.x + r.w, r.z]
    case 's': return [r.x, r.z + r.d, r.x + r.w, r.z + r.d]
    case 'w': return [r.x, r.z, r.x, r.z + r.d]
    default: return [r.x + r.w, r.z, r.x + r.w, r.z + r.d]
  }
}
function distToSeg(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1
  const dz = z2 - z1
  const len2 = dx * dx + dz * dz || 1e-6
  let t = ((px - x1) * dx + (pz - z1) * dz) / len2
  t = clampV(t, 0, 1)
  return Math.hypot(px - (x1 + t * dx), pz - (z1 + t * dz))
}

export default function Editor2D() {
  const { state, dispatch } = useStore()
  const { rooms, walls, items, selected, units, tool, defaultHeight } = state
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ W: 360, H: 540 })
  const [xf, setXf] = useState({ scale: 64, panX: 180, panY: 270, init: false })
  const [gesture, setGesture] = useState(null)
  const gestureRef = useRef(null)
  gestureRef.current = gesture
  const pointers = useRef(new Map())
  const pinch = useRef(null)
  const xfRef = useRef(xf)
  xfRef.current = xf
  const fitted = useRef(false)

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const apply = () => {
      const W = el.clientWidth
      const H = el.clientHeight
      setSize({ W, H })
      setXf((s) => (s.init ? s : { scale: 64, panX: W / 2, panY: H / 2, init: true }))
    }
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    apply()
    return () => ro.disconnect()
  }, [])

  const { W, H } = size

  function fitView() {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity
    const acc = (x, z) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z) }
    for (const r of rooms) { acc(r.x, r.z); acc(r.x + r.w, r.z + r.d) }
    for (const w of walls) { acc(w.x1, w.z1); acc(w.x2, w.z2) }
    for (const it of items) { const c = CATALOG_BY_TYPE[it.type]; const d = effDims(c, it); acc(it.x - d.w / 2, it.z - d.d / 2); acc(it.x + d.w / 2, it.z + d.d / 2) }
    if (!isFinite(minX)) { setXf({ scale: 64, panX: W / 2, panY: H / 2, init: true }); return }
    const padX = 56
    const padTop = 92 // clear the tool switcher
    const padBottom = 64 // clear the hint
    const spanX = Math.max(0.5, maxX - minX)
    const spanZ = Math.max(0.5, maxZ - minZ)
    const ns = clampV(Math.min((W - 2 * padX) / spanX, (H - padTop - padBottom) / spanZ), 14, 180)
    const cx = (minX + maxX) / 2
    const cz = (minZ + maxZ) / 2
    const cy = (padTop + (H - padBottom)) / 2
    setXf({ scale: ns, panX: W / 2 - cx * ns, panY: cy - cz * ns, init: true })
  }

  // Auto-fit on first load with content, and the first time a plan is started.
  const hasContent = rooms.length > 0 || walls.length > 0 || items.length > 0
  useLayoutEffect(() => {
    if (size.W && hasContent && !fitted.current) {
      fitView()
      fitted.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.W, hasContent])
  const { scale, panX, panY } = xf
  const toScreen = (x, z) => [x * scale + panX, z * scale + panY]
  const toWorld = (px, py) => [(px - panX) / scale, (py - panY) / scale]
  const ptr = (e) => {
    const r = svgRef.current.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }

  const selItem = selected?.type === 'item' ? items.find((i) => i.uid === selected.uid) : null
  const selRoom = selected?.type === 'room' ? rooms.find((r) => r.uid === selected.uid) : null
  const selWall = selected?.type === 'wall' ? walls.find((w) => w.uid === selected.uid) : null

  function itemCorners(it) {
    const c = CATALOG_BY_TYPE[it.type]
    const d = effDims(c, it)
    const [cxp, cyp] = toScreen(it.x, it.z)
    const th = ((it.rot || 0) * Math.PI) / 180
    const cos = Math.cos(th)
    const sin = Math.sin(th)
    const hw = (d.w * scale) / 2
    const hd = (d.d * scale) / 2
    return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([mx, mz]) => {
      const lx = mx * hw
      const ly = mz * hd
      return [cxp + lx * cos - ly * sin, cyp + lx * sin + ly * cos]
    })
  }
  function roomCorners(r) {
    return {
      nw: toScreen(r.x, r.z), ne: toScreen(r.x + r.w, r.z),
      se: toScreen(r.x + r.w, r.z + r.d), sw: toScreen(r.x, r.z + r.d),
    }
  }

  function hitTest(px, py) {
    const [wx, wz] = toWorld(px, py)
    if (selItem) {
      const cs = itemCorners(selItem)
      for (let i = 0; i < 4; i++) if (Math.hypot(px - cs[i][0], py - cs[i][1]) < HANDLE_HIT) return { kind: 'item-handle' }
    }
    if (selRoom) {
      const cs = roomCorners(selRoom)
      for (const k in cs) if (Math.hypot(px - cs[k][0], py - cs[k][1]) < HANDLE_HIT) return { kind: 'room-handle', handle: k }
    }
    if (selWall) {
      for (const end of ['1', '2']) {
        const [hx, hy] = toScreen(selWall['x' + end], selWall['z' + end])
        if (Math.hypot(px - hx, py - hy) < HANDLE_HIT) return { kind: 'wall-end', end }
      }
    }
    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i]
      const c = CATALOG_BY_TYPE[it.type]
      if (!c) continue
      const d = effDims(c, it)
      const th = ((it.rot || 0) * Math.PI) / 180
      const vx = wx - it.x
      const vz = wz - it.z
      const lx = vx * Math.cos(th) + vz * Math.sin(th)
      const lz = -vx * Math.sin(th) + vz * Math.cos(th)
      if (Math.abs(lx) <= d.w / 2 + 0.08 && Math.abs(lz) <= d.d / 2 + 0.08) return { kind: 'item', uid: it.uid }
    }
    for (let i = walls.length - 1; i >= 0; i--) {
      const w = walls[i]
      if (distToSeg(wx, wz, w.x1, w.z1, w.x2, w.z2) <= w.thickness / 2 + 0.18) return { kind: 'wall', uid: w.uid }
    }
    // room wall sides (a click on an edge selects that wall, not the room)
    for (let i = rooms.length - 1; i >= 0; i--) {
      const r = rooms[i]
      for (const side of SIDES) {
        const [x1, z1, x2, z2] = roomSide(r, side)
        if (distToSeg(wx, wz, x1, z1, x2, z2) <= 0.18) return { kind: 'roomwall', uid: r.uid, side }
      }
    }
    for (let i = rooms.length - 1; i >= 0; i--) {
      const r = rooms[i]
      if (wx >= r.x && wx <= r.x + r.w && wz >= r.z && wz <= r.z + r.d) return { kind: 'room', uid: r.uid }
    }
    return { kind: 'empty' }
  }

  // snap a coordinate to nearby room edges, falling back to the grid
  function edgeTargets(exceptUid) {
    const xs = []
    const zs = []
    for (const r of rooms) {
      if (r.uid === exceptUid) continue
      xs.push(r.x, r.x + r.w)
      zs.push(r.z, r.z + r.d)
    }
    return { xs, zs }
  }
  function snapEdge(v, targets, thr = 0.28) {
    let best = null
    let bd = thr
    for (const t of targets) { const d = Math.abs(v - t); if (d < bd) { bd = d; best = t } }
    return best
  }
  const snapX = (v, except) => { const t = snapEdge(v, edgeTargets(except).xs); return t != null ? t : snap(v, GRID) }
  const snapZ = (v, except) => { const t = snapEdge(v, edgeTargets(except).zs); return t != null ? t : snap(v, GRID) }

  const onDown = (e) => {
    const [px, py] = ptr(e)
    pointers.current.set(e.pointerId, { x: px, y: py })
    svgRef.current.setPointerCapture(e.pointerId)

    if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()]
      const midx = (pts[0].x + pts[1].x) / 2
      const midy = (pts[0].y + pts[1].y) / 2
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y)
      const v = xfRef.current
      pinch.current = { startDist: dist, startScale: v.scale, wmx: (midx - v.panX) / v.scale, wmy: (midy - v.panY) / v.scale }
      setGesture(null)
      return
    }
    if (pointers.current.size > 2) return

    const [wx, wz] = toWorld(px, py)
    if (tool === 'room') {
      const x0 = snapX(wx)
      const z0 = snapZ(wz)
      setGesture({ kind: 'drawRoom', x0, z0, cur: { x: x0, z: z0, w: 0, d: 0 } })
      return
    }
    if (tool === 'wall') {
      const sx = snapX(wx)
      const sz = snapZ(wz)
      setGesture({ kind: 'drawWall', x1: sx, z1: sz, cur: { x1: sx, z1: sz, x2: sx, z2: sz } })
      return
    }

    const h = hitTest(px, py)
    switch (h.kind) {
      case 'item-handle':
        setGesture({ kind: 'resizeItem', uid: selItem.uid, cxw: selItem.x, czw: selItem.z, rot: selItem.rot || 0, c: CATALOG_BY_TYPE[selItem.type] })
        break
      case 'room-handle':
        setGesture({ kind: 'resizeRoom', uid: selRoom.uid, handle: h.handle, x0: selRoom.x, z0: selRoom.z, w0: selRoom.w, d0: selRoom.d })
        break
      case 'wall-end':
        setGesture({ kind: 'wallEnd', uid: selWall.uid, end: h.end })
        break
      case 'item': {
        const it = items.find((i) => i.uid === h.uid)
        dispatch({ type: 'select', sel: { type: 'item', uid: h.uid } })
        setGesture({ kind: 'moveItem', uid: h.uid, ox: wx - it.x, oz: wz - it.z })
        break
      }
      case 'wall': {
        const w = walls.find((o) => o.uid === h.uid)
        dispatch({ type: 'select', sel: { type: 'wall', uid: h.uid } })
        setGesture({ kind: 'moveWall', uid: h.uid, ox: wx, oz: wz, x1: w.x1, z1: w.z1, x2: w.x2, z2: w.z2 })
        break
      }
      case 'roomwall':
        dispatch({ type: 'select', sel: { type: 'roomwall', uid: h.uid, side: h.side } })
        setGesture(null)
        break
      case 'room': {
        const r = rooms.find((o) => o.uid === h.uid)
        dispatch({ type: 'select', sel: { type: 'room', uid: h.uid } })
        setGesture({ kind: 'moveRoom', uid: h.uid, ox: wx - r.x, oz: wz - r.z })
        break
      }
      default:
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
      const ns = clampV(p.startScale * (dist / p.startDist), 12, 220)
      setXf({ scale: ns, panX: midx - p.wmx * ns, panY: midy - p.wmy * ns, init: true })
      return
    }

    const g = gestureRef.current
    if (!g) return
    const [wx, wz] = toWorld(px, py)

    if (g.kind === 'pan') {
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 4) g.moved = true
      setXf((s) => ({ ...s, panX: g.panX + (px - g.sx), panY: g.panY + (py - g.sy) }))
    } else if (g.kind === 'drawRoom') {
      const x1 = snapX(wx)
      const z1 = snapZ(wz)
      setGesture((s) => ({ ...s, cur: { x: Math.min(s.x0, x1), z: Math.min(s.z0, z1), w: Math.abs(x1 - s.x0), d: Math.abs(z1 - s.z0) } }))
    } else if (g.kind === 'drawWall') {
      setGesture((s) => ({ ...s, cur: { x1: s.x1, z1: s.z1, x2: snapX(wx), z2: snapZ(wz) } }))
    } else if (g.kind === 'moveItem') {
      dispatch({ type: 'update', sel: { type: 'item', uid: g.uid }, patch: { x: snap(wx - g.ox, ITEM_GRID), z: snap(wz - g.oz, ITEM_GRID) }, mergeKey: `mv:${g.uid}` })
    } else if (g.kind === 'resizeItem') {
      const vx = wx - g.cxw
      const vz = wz - g.czw
      const th = (g.rot * Math.PI) / 180
      const lx = vx * Math.cos(th) + vz * Math.sin(th)
      const lz = -vx * Math.sin(th) + vz * Math.cos(th)
      const sx = clampV((2 * Math.max(0.1, Math.abs(lx))) / g.c.w, 0.3, 3)
      const sz = clampV((2 * Math.max(0.1, Math.abs(lz))) / g.c.d, 0.3, 3)
      const sy = clampV(Math.sqrt(sx * sz), 0.3, 3)
      dispatch({ type: 'update', sel: { type: 'item', uid: g.uid }, patch: { scale: { x: sx, y: sy, z: sz } }, mergeKey: `sz:${g.uid}` })
    } else if (g.kind === 'moveRoom') {
      const r = rooms.find((o) => o.uid === g.uid)
      let left = wx - g.ox
      let top = wz - g.oz
      if (r) {
        const { xs, zs } = edgeTargets(g.uid)
        const sl = snapEdge(left, xs)
        const sr = snapEdge(left + r.w, xs)
        if (sl != null && (sr == null || Math.abs(left - sl) <= Math.abs(left + r.w - sr))) left = sl
        else if (sr != null) left = sr - r.w
        else left = snap(left, GRID)
        const st = snapEdge(top, zs)
        const sb = snapEdge(top + r.d, zs)
        if (st != null && (sb == null || Math.abs(top - st) <= Math.abs(top + r.d - sb))) top = st
        else if (sb != null) top = sb - r.d
        else top = snap(top, GRID)
      }
      dispatch({ type: 'update', sel: { type: 'room', uid: g.uid }, patch: { x: left, z: top }, mergeKey: `mv:${g.uid}` })
    } else if (g.kind === 'resizeRoom') {
      let left = g.x0
      let top = g.z0
      let right = g.x0 + g.w0
      let bottom = g.z0 + g.d0
      const { xs, zs } = edgeTargets(g.uid)
      const sX = (v) => { const t = snapEdge(v, xs); return t != null ? t : snap(v, GRID) }
      const sZ = (v) => { const t = snapEdge(v, zs); return t != null ? t : snap(v, GRID) }
      if (g.handle.includes('e')) right = Math.max(left + 0.5, sX(wx))
      if (g.handle.includes('w')) left = Math.min(right - 0.5, sX(wx))
      if (g.handle.includes('s')) bottom = Math.max(top + 0.5, sZ(wz))
      if (g.handle.includes('n')) top = Math.min(bottom - 0.5, sZ(wz))
      dispatch({ type: 'update', sel: { type: 'room', uid: g.uid }, patch: { x: left, z: top, w: right - left, d: bottom - top }, mergeKey: `rs:${g.uid}` })
    } else if (g.kind === 'moveWall') {
      const dx = snap(wx - g.ox, GRID)
      const dz = snap(wz - g.oz, GRID)
      dispatch({ type: 'update', sel: { type: 'wall', uid: g.uid }, patch: { x1: g.x1 + dx, z1: g.z1 + dz, x2: g.x2 + dx, z2: g.z2 + dz }, mergeKey: `mv:${g.uid}` })
    } else if (g.kind === 'wallEnd') {
      const patch = g.end === '1' ? { x1: snap(wx, GRID), z1: snap(wz, GRID) } : { x2: snap(wx, GRID), z2: snap(wz, GRID) }
      dispatch({ type: 'update', sel: { type: 'wall', uid: g.uid }, patch, mergeKey: `we:${g.uid}` })
    }
  }

  const onUp = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    const g = gestureRef.current
    if (g) {
      if (g.kind === 'drawRoom' && g.cur.w > 0.3 && g.cur.d > 0.3) {
        dispatch({ type: 'addRoom', x: g.cur.x, z: g.cur.z, w: g.cur.w, d: g.cur.d, height: defaultHeight })
        dispatch({ type: 'tool', tool: 'select' })
      } else if (g.kind === 'drawWall' && Math.hypot(g.cur.x2 - g.cur.x1, g.cur.z2 - g.cur.z1) > 0.2) {
        dispatch({ type: 'addWall', ...g.cur, height: defaultHeight })
        dispatch({ type: 'tool', tool: 'select' })
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
    const ns = clampV(v.scale * (e.deltaY < 0 ? 1.1 : 0.9), 12, 220)
    const wx = (px - v.panX) / v.scale
    const wy = (py - v.panY) / v.scale
    setXf({ scale: ns, panX: px - wx * ns, panY: py - wy * ns, init: true })
  }

  // grid
  const gridLines = []
  {
    const [wl] = toWorld(0, 0)
    const [wr] = toWorld(W, 0)
    const [, wt] = toWorld(0, 0)
    const [, wb] = toWorld(0, H)
    const span = Math.max(wr - wl, wb - wt)
    const step = span > 60 ? 5 : 1
    if (span / step < 240) {
      for (let x = Math.ceil(wl / step) * step; x <= wr; x += step) {
        const [sx] = toScreen(x, 0)
        const axis = Math.abs(x) < 1e-6
        gridLines.push(<line key={`v${x}`} x1={sx} y1={0} x2={sx} y2={H} stroke="#000" strokeOpacity={axis ? 0.16 : 0.055} strokeWidth={1} />)
      }
      for (let z = Math.ceil(wt / step) * step; z <= wb; z += step) {
        const [, sy] = toScreen(0, z)
        const axis = Math.abs(z) < 1e-6
        gridLines.push(<line key={`h${z}`} x1={0} y1={sy} x2={W} y2={sy} stroke="#000" strokeOpacity={axis ? 0.16 : 0.055} strokeWidth={1} />)
      }
    }
  }

  const empty = rooms.length === 0 && walls.length === 0 && items.length === 0

  return (
    <div className="editor2d" ref={wrapRef}>
      <svg ref={svgRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onWheel={onWheel}
        style={{ touchAction: 'none', cursor: tool === 'select' ? 'default' : 'crosshair' }}>
        <defs>
          <filter id="softshadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.22" />
          </filter>
        </defs>

        <rect x={0} y={0} width={W} height={H} fill="transparent" />
        <g pointerEvents="none">{gridLines}</g>

        {/* room floors */}
        {rooms.map((r) => {
          const [x0, y0] = toScreen(r.x, r.z)
          return <rect key={r.uid} x={x0} y={y0} width={r.w * scale} height={r.d * scale} fill={FLOOR} pointerEvents="none" />
        })}

        {/* room wall sides */}
        {rooms.map((r) => (
          <g key={r.uid} pointerEvents="none">
            {SIDES.map((side) => {
              const [x1, z1, x2, z2] = roomSide(r, side)
              const [ax, ay] = toScreen(x1, z1)
              const [bx, by] = toScreen(x2, z2)
              const on = wallOn(r, side)
              const isSel = selected?.type === 'roomwall' && selected.uid === r.uid && selected.side === side
              return (
                <line key={side} x1={ax} y1={ay} x2={bx} y2={by}
                  stroke={isSel ? ACCENT : on ? WALL_ON : WALL_OFF}
                  strokeWidth={isSel ? 6 : on ? 4 : 2}
                  strokeLinecap="round"
                  strokeDasharray={on ? undefined : '7 7'} />
              )
            })}
          </g>
        ))}

        {/* selected room outline + dimension badge */}
        {selRoom && (() => {
          const [x0, y0] = toScreen(selRoom.x, selRoom.z)
          const w = selRoom.w * scale
          return (
            <g pointerEvents="none">
              <rect x={x0} y={y0} width={w} height={selRoom.d * scale} fill="none" stroke={ACCENT} strokeOpacity={0.7} strokeWidth={2} strokeDasharray="6 5" />
              <g fontSize={11.5} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">
                <rect x={x0 + w / 2 - 78} y={y0 - 25} width={156} height={19} rx={9.5} fill={ACCENT} />
                <text x={x0 + w / 2} y={y0 - 11} textAnchor="middle">{formatLen(selRoom.w, units)} × {formatLen(selRoom.d, units)}</text>
              </g>
              {Object.entries(roomCorners(selRoom)).map(([k, [hx, hy]]) => (
                <circle key={k} cx={hx} cy={hy} r={7} fill={ACCENT} stroke="#20160a" strokeWidth={2} filter="url(#softshadow)" />
              ))}
            </g>
          )
        })()}

        {/* free walls */}
        {walls.map((wl) => {
          const [ax, ay] = toScreen(wl.x1, wl.z1)
          const [bx, by] = toScreen(wl.x2, wl.z2)
          const sel = selWall?.uid === wl.uid
          return (
            <line key={wl.uid} x1={ax} y1={ay} x2={bx} y2={by} stroke={sel ? ACCENT : WALL_ON}
              strokeWidth={Math.max(5, wl.thickness * scale)} strokeLinecap="round" pointerEvents="none" />
          )
        })}
        {selWall && (() => {
          const [ax, ay] = toScreen(selWall.x1, selWall.z1)
          const [bx, by] = toScreen(selWall.x2, selWall.z2)
          return (
            <g pointerEvents="none">
              <circle cx={ax} cy={ay} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              <circle cx={bx} cy={by} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
            </g>
          )
        })()}

        {/* items */}
        {items.map((it) => {
          const c = CATALOG_BY_TYPE[it.type]
          if (!c) return null
          const [ix, iy] = toScreen(it.x, it.z)
          const d = effDims(c, it)
          const wpx = d.w * scale
          const dpx = d.d * scale
          const sel = selItem?.uid === it.uid
          return (
            <g key={it.uid} transform={`translate(${ix} ${iy}) rotate(${it.rot || 0})`} pointerEvents="none">
              <g filter="url(#softshadow)" opacity={c.shape === 'rug' || c.shape === 'round-rug' ? 0.96 : 1}>
                <Footprint item={{ ...c, color: it.color || c.color }} wpx={wpx} dpx={dpx} />
              </g>
              {sel && (
                <rect x={-wpx / 2 - 5} y={-dpx / 2 - 5} width={wpx + 10} height={dpx + 10} rx={7}
                  fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" />
              )}
            </g>
          )
        })}

        {/* draw previews */}
        {gesture?.kind === 'drawRoom' && (() => {
          const [x0, y0] = toScreen(gesture.cur.x, gesture.cur.z)
          return (
            <g pointerEvents="none">
              <rect x={x0} y={y0} width={gesture.cur.w * scale} height={gesture.cur.d * scale} fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={3} strokeDasharray="6 5" />
              <text x={x0 + (gesture.cur.w * scale) / 2} y={y0 - 8} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a7327">
                {formatLen(gesture.cur.w, units)} × {formatLen(gesture.cur.d, units)}
              </text>
            </g>
          )
        })()}
        {gesture?.kind === 'drawWall' && (() => {
          const [ax, ay] = toScreen(gesture.cur.x1, gesture.cur.z1)
          const [bx, by] = toScreen(gesture.cur.x2, gesture.cur.z2)
          const len = Math.hypot(gesture.cur.x2 - gesture.cur.x1, gesture.cur.z2 - gesture.cur.z1)
          return (
            <g pointerEvents="none">
              <line x1={ax} y1={ay} x2={bx} y2={by} stroke={ACCENT} strokeWidth={6} strokeLinecap="round" strokeDasharray="8 6" />
              <text x={(ax + bx) / 2} y={(ay + by) / 2 - 8} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a7327">{formatLen(len, units)}</text>
            </g>
          )
        })()}

        {/* selected item: corner resize handles + size badge */}
        {selItem && (() => {
          const cs = itemCorners(selItem)
          const c = CATALOG_BY_TYPE[selItem.type]
          const d = effDims(c, selItem)
          const [ix, iy] = toScreen(selItem.x, selItem.z)
          const radius = Math.hypot(d.w * scale, d.d * scale) / 2
          return (
            <g pointerEvents="none">
              {cs.map(([hx, hy], i) => (
                <circle key={i} cx={hx} cy={hy} r={7} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              ))}
              <rect x={ix - 78} y={iy - radius - 30} width={156} height={20} rx={10} fill={ACCENT} />
              <text x={ix} y={iy - radius - 16} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">
                {formatLen(d.w, units)} × {formatLen(d.d, units)}
              </text>
            </g>
          )
        })()}

        {/* selected room wall: highlight endpoints + length */}
        {selected?.type === 'roomwall' && (() => {
          const r = rooms.find((o) => o.uid === selected.uid)
          if (!r) return null
          const [x1, z1, x2, z2] = roomSide(r, selected.side)
          const [ax, ay] = toScreen(x1, z1)
          const [bx, by] = toScreen(x2, z2)
          const len = Math.hypot(x2 - x1, z2 - z1)
          const on = wallOn(r, selected.side)
          return (
            <g pointerEvents="none">
              <circle cx={ax} cy={ay} r={6} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              <circle cx={bx} cy={by} r={6} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              <rect x={(ax + bx) / 2 - 60} y={(ay + by) / 2 - 11} width={120} height={20} rx={10} fill={ACCENT} />
              <text x={(ax + bx) / 2} y={(ay + by) / 2 + 3} textAnchor="middle" fontSize={11} fontWeight={700} fill="#20160a" fontFamily="-apple-system, system-ui, sans-serif">
                {on ? formatLen(len, units) : 'opening'}
              </text>
            </g>
          )
        })()}
      </svg>

      <button className="recenter" onClick={fitView} aria-label="Fit to view"><IconCenter size={20} /></button>

      {empty && (
        <div className="empty">
          <b>Start your floor plan</b>
          <span>Tap <strong>Room</strong> below and drag on the canvas to draw a room. Add walls with the <strong>Wall</strong> tool.</span>
        </div>
      )}

      <div className="hint">
        {tool === 'room' ? 'Drag to draw a room'
          : tool === 'wall' ? 'Drag to draw a wall'
          : selItem ? 'Drag to move · drag white corners to resize'
          : selRoom ? 'Drag inside to move · corners to resize · tap a wall to edit it'
          : selWall ? 'Drag the wall or its endpoints'
          : selected?.type === 'roomwall' ? 'Use the button to delete or restore this wall'
          : 'Drag to pan · pinch to zoom · tap a wall to select it'}
      </div>
    </div>
  )
}
