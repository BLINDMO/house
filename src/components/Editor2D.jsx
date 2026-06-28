import React, { useLayoutEffect, useRef, useState } from 'react'
import { useStore, footHalf } from '../store.jsx'
import { defFor } from '../data/catalog.js'
import { wallGeometry, refEq } from '../wall.js'
import { MATERIAL_BY_ID, matUrl } from '../data/materials.js'
import { effDims, formatLen, haptic } from '../util.js'
import Footprint from './Footprint.jsx'
import { IconCenter, IconCheck, IconClose, IconUndo } from './Icons.jsx'

const ACCENT = '#d9b779'
const WALL_ON = '#39414f'
const WALL_OFF = '#c3c9d1'
const FLOOR = '#eef1f5'
const INCH = 0.0254
const ITEM_GRID = INCH // free placement to the inch
const HANDLE_HIT = 18
const SIDES = ['n', 'e', 's', 'w']
const SKETCH = '#2f7d8c'
const CLOSE_PX = 16

const snap = (v, g) => Math.round(v / g) * g
const clampV = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
const wallOn = (room, side) => !room.wallsOn || room.wallsOn[side] !== false

const WOOD_HEX = { oak: '#c79a6b', walnut: '#6e4a30', birch: '#d8c7a3', grey: '#9a9a92' }
// How a room's floor should be drawn in the 2D plan: a tiled texture image for
// bundled materials, otherwise a representative colour.
function floorFill(r) {
  const tex = r.floorTex || (r.floorColor ? null : 'wood:oak')
  if (!tex) return { color: r.floorColor || '#eef1f5' }
  if (tex.startsWith('wood:')) return { color: WOOD_HEX[tex.slice(5)] || '#c79a6b' }
  if (tex.startsWith('mat:')) {
    const m = MATERIAL_BY_ID[tex.slice(4)]
    if (m) return { mat: tex.slice(4), repeat: m.repeat || 1.5, color: m.color }
  }
  return { color: r.floorColor || '#cdb89a' }
}

function pointInPoly(x, z, pts) {
  let inside = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].x, zi = pts[i].z, xj = pts[j].x, zj = pts[j].z
    if (((zi > z) !== (zj > z)) && (x < ((xj - xi) * (z - zi)) / (zj - zi) + xi)) inside = !inside
  }
  return inside
}
function polyPerim(pts, closed) {
  let s = 0
  const n = closed ? pts.length : pts.length - 1
  for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; s += Math.hypot(b.x - a.x, b.z - a.z) }
  return s
}
function polyArea(pts) {
  let a = 0
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += (pts[j].x + pts[i].x) * (pts[j].z - pts[i].z)
  return Math.abs(a / 2)
}

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
  const { rooms, walls, items, sketches, openings, selected, units, tool, defaultHeight } = state
  // Free placement down to the inch (or 1 cm in metric) — no coarse 2" grid.
  const SNAP = units === 'ft' ? INCH : 0.01
  const [draft, setDraft] = useState([]) // in-progress sketch vertices
  const [hover, setHover] = useState(null) // live cursor point for the rubber band
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
    for (const it of items) { const c = defFor(it.type); const d = effDims(c, it); acc(it.x - d.w / 2, it.z - d.d / 2); acc(it.x + d.w / 2, it.z + d.d / 2) }
    for (const s of sketches) for (const p of s.pts) acc(p.x, p.z)
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

  // Auto-fit on first load with content, the first time a plan is started,
  // and whenever the stage width changes a lot (e.g. the panel opens/closes).
  const hasContent = rooms.length > 0 || walls.length > 0 || items.length > 0 || sketches.length > 0
  const prevW = useRef(0)
  useLayoutEffect(() => {
    if (!size.W) return
    const big = prevW.current && Math.abs(size.W - prevW.current) > 60
    prevW.current = size.W
    if (hasContent && (!fitted.current || big)) {
      fitView()
      fitted.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.W, hasContent])

  // Discard any in-progress sketch when leaving the Sketch tool.
  useLayoutEffect(() => {
    if (tool !== 'sketch') { setDraft([]); setHover(null) }
  }, [tool])

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
  const selSketch = selected?.type === 'sketch' ? sketches.find((s) => s.uid === selected.uid) : null

  function itemCorners(it) {
    const c = defFor(it.type)
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
      const c = defFor(it.type)
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
    // sketch edges
    for (let i = sketches.length - 1; i >= 0; i--) {
      const s = sketches[i]
      const segs = s.closed ? s.pts.length : s.pts.length - 1
      for (let j = 0; j < segs; j++) {
        const a = s.pts[j], b = s.pts[(j + 1) % s.pts.length]
        if (distToSeg(wx, wz, a.x, a.z, b.x, b.z) <= 0.18) return { kind: 'sketch', uid: s.uid }
      }
    }
    // openings sit on a wall line — a tap on one selects it (edit/delete here too)
    for (let i = openings.length - 1; i >= 0; i--) {
      const o = openings[i]
      const g = wallGeometry(o.wall, rooms, walls)
      if (!g) continue
      const ax = g.ox + g.dirx * o.u, az = g.oz + g.dirz * o.u
      const bx = g.ox + g.dirx * (o.u + o.w), bz = g.oz + g.dirz * (o.u + o.w)
      if (distToSeg(wx, wz, ax, az, bx, bz) <= 0.2) return { kind: 'opening', uid: o.uid }
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
    for (let i = sketches.length - 1; i >= 0; i--) {
      const s = sketches[i]
      if (s.closed && s.pts.length >= 3 && pointInPoly(wx, wz, s.pts)) return { kind: 'sketch', uid: s.uid }
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
  const snapX = (v, except) => { const t = snapEdge(v, edgeTargets(except).xs); return t != null ? t : snap(v, SNAP) }
  const snapZ = (v, except) => { const t = snapEdge(v, edgeTargets(except).zs); return t != null ? t : snap(v, SNAP) }

  // Anchor points walls snap to: every room corner and every wall endpoint.
  function wallVertices() {
    const out = []
    for (const r of rooms) out.push({ x: r.x, z: r.z }, { x: r.x + r.w, z: r.z }, { x: r.x, z: r.z + r.d }, { x: r.x + r.w, z: r.z + r.d })
    for (const w of walls) out.push({ x: w.x1, z: w.z1 }, { x: w.x2, z: w.z2 })
    return out
  }
  // Snap to the nearest anchor within `thr` metres, else null.
  function snapVertex(x, z, thr = 0.35) {
    let best = null
    let bd = thr
    for (const v of wallVertices()) {
      const d = Math.hypot(x - v.x, z - v.z)
      if (d < bd) { bd = d; best = v }
    }
    return best
  }
  // Resolve a dragged wall end: snap to an anchor if close, otherwise lock the
  // segment to horizontal/vertical (keeps walls square) and snap to the grid.
  function resolveWallEnd(x1, z1, wx, wz) {
    const v = snapVertex(wx, wz)
    if (v) return { x: v.x, z: v.z }
    let ex = wx
    let ez = wz
    if (Math.abs(ex - x1) >= Math.abs(ez - z1)) ez = z1
    else ex = x1
    return { x: snapX(ex), z: snapZ(ez) }
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
      const v = snapVertex(wx, wz)
      const sx = v ? v.x : snapX(wx)
      const sz = v ? v.z : snapZ(wz)
      setGesture({ kind: 'drawWall', x1: sx, z1: sz, cur: { x1: sx, z1: sz, x2: sx, z2: sz } })
      return
    }
    if (tool === 'sketch') {
      // a tap places a vertex; a drag pans the board
      setGesture({ kind: 'sketch', sx: px, sy: py, panX: xfRef.current.panX, panY: xfRef.current.panY, moved: false })
      return
    }

    const h = hitTest(px, py)
    switch (h.kind) {
      case 'item-handle':
        setGesture({ kind: 'resizeItem', uid: selItem.uid, cxw: selItem.x, czw: selItem.z, rot: selItem.rot || 0, c: selItem.dim || defFor(selItem.type) })
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
      case 'sketch': {
        const s = sketches.find((o) => o.uid === h.uid)
        dispatch({ type: 'select', sel: { type: 'sketch', uid: h.uid } })
        setGesture({ kind: 'moveSketch', uid: h.uid, ox: wx, oz: wz, pts: s.pts })
        break
      }
      case 'opening':
        dispatch({ type: 'select', sel: { type: 'opening', uid: h.uid } })
        setGesture(null)
        break
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

    if (tool === 'sketch' && pointers.current.size <= 1) {
      const [hwx, hwz] = toWorld(px, py)
      setHover({ x: snapX(hwx), z: snapZ(hwz) })
    }

    const g = gestureRef.current
    if (!g) return
    const [wx, wz] = toWorld(px, py)

    if (g.kind === 'pan') {
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 4) g.moved = true
      setXf((s) => ({ ...s, panX: g.panX + (px - g.sx), panY: g.panY + (py - g.sy) }))
    } else if (g.kind === 'sketch') {
      if (!g.moved && Math.hypot(px - g.sx, py - g.sy) > 7) g.moved = true
      if (g.moved) setXf((s) => ({ ...s, panX: g.panX + (px - g.sx), panY: g.panY + (py - g.sy) }))
    } else if (g.kind === 'drawRoom') {
      const x1 = snapX(wx)
      const z1 = snapZ(wz)
      setGesture((s) => ({ ...s, cur: { x: Math.min(s.x0, x1), z: Math.min(s.z0, z1), w: Math.abs(x1 - s.x0), d: Math.abs(z1 - s.z0) } }))
    } else if (g.kind === 'drawWall') {
      const e = resolveWallEnd(g.x1, g.z1, wx, wz)
      setGesture((s) => ({ ...s, cur: { x1: s.x1, z1: s.z1, x2: e.x, z2: e.z } }))
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
        else left = snap(left, SNAP)
        const st = snapEdge(top, zs)
        const sb = snapEdge(top + r.d, zs)
        if (st != null && (sb == null || Math.abs(top - st) <= Math.abs(top + r.d - sb))) top = st
        else if (sb != null) top = sb - r.d
        else top = snap(top, SNAP)
      }
      dispatch({ type: 'update', sel: { type: 'room', uid: g.uid }, patch: { x: left, z: top }, mergeKey: `mv:${g.uid}` })
    } else if (g.kind === 'resizeRoom') {
      let left = g.x0
      let top = g.z0
      let right = g.x0 + g.w0
      let bottom = g.z0 + g.d0
      const { xs, zs } = edgeTargets(g.uid)
      const sX = (v) => { const t = snapEdge(v, xs); return t != null ? t : snap(v, SNAP) }
      const sZ = (v) => { const t = snapEdge(v, zs); return t != null ? t : snap(v, SNAP) }
      if (g.handle.includes('e')) right = Math.max(left + 0.5, sX(wx))
      if (g.handle.includes('w')) left = Math.min(right - 0.5, sX(wx))
      if (g.handle.includes('s')) bottom = Math.max(top + 0.5, sZ(wz))
      if (g.handle.includes('n')) top = Math.min(bottom - 0.5, sZ(wz))
      dispatch({ type: 'update', sel: { type: 'room', uid: g.uid }, patch: { x: left, z: top, w: right - left, d: bottom - top }, mergeKey: `rs:${g.uid}` })
    } else if (g.kind === 'moveWall') {
      const dx = snap(wx - g.ox, SNAP)
      const dz = snap(wz - g.oz, SNAP)
      dispatch({ type: 'update', sel: { type: 'wall', uid: g.uid }, patch: { x1: g.x1 + dx, z1: g.z1 + dz, x2: g.x2 + dx, z2: g.z2 + dz }, mergeKey: `mv:${g.uid}` })
    } else if (g.kind === 'wallEnd') {
      const patch = g.end === '1' ? { x1: snap(wx, SNAP), z1: snap(wz, SNAP) } : { x2: snap(wx, SNAP), z2: snap(wz, SNAP) }
      dispatch({ type: 'update', sel: { type: 'wall', uid: g.uid }, patch, mergeKey: `we:${g.uid}` })
    } else if (g.kind === 'moveSketch') {
      const dx = snap(wx - g.ox, SNAP)
      const dz = snap(wz - g.oz, SNAP)
      dispatch({ type: 'update', sel: { type: 'sketch', uid: g.uid }, patch: { pts: g.pts.map((p) => ({ x: p.x + dx, z: p.z + dz })) }, mergeKey: `mv:${g.uid}` })
    }
  }

  const onUp = (e) => {
    const [px, py] = ptr(e)
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    const g = gestureRef.current
    if (g) {
      if (g.kind === 'sketch') {
        if (!g.moved) {
          const [wx, wz] = toWorld(px, py)
          const p = { x: snapX(wx), z: snapZ(wz) }
          let closed = false
          if (draft.length >= 3) {
            const [fx, fy] = toScreen(draft[0].x, draft[0].z)
            if (Math.hypot(px - fx, py - fy) < CLOSE_PX) closed = true
          }
          if (closed) {
            dispatch({ type: 'addSketch', pts: draft, closed: true })
            setDraft([]); setHover(null); haptic(12)
          } else {
            setDraft((d) => [...d, p]); haptic(6)
          }
        }
      } else if (g.kind === 'drawRoom') {
        if (g.cur.w > 0.3 && g.cur.d > 0.3) {
          dispatch({ type: 'addRoom', x: g.cur.x, z: g.cur.z, w: g.cur.w, d: g.cur.d, height: defaultHeight })
        } else {
          // a tap (no real drag) drops a default room so it's one-tap to start
          dispatch({ type: 'addRoom', x: snapX(g.x0 - 1.8), z: snapZ(g.z0 - 1.5), w: 3.6, d: 3, height: defaultHeight })
        }
      } else if (g.kind === 'drawWall' && Math.hypot(g.cur.x2 - g.cur.x1, g.cur.z2 - g.cur.z1) > 0.2) {
        dispatch({ type: 'addWall', ...g.cur, height: defaultHeight })
      } else if (g.kind === 'pan' && !g.moved) {
        dispatch({ type: 'select', sel: null })
      }
    }
    if (pointers.current.size === 0) setGesture(null)
    try { svgRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }

  const commitSketch = (closed) => {
    if ((closed && draft.length >= 3) || (!closed && draft.length >= 2)) {
      dispatch({ type: 'addSketch', pts: draft, closed })
      haptic(12)
    }
    setDraft([]); setHover(null)
  }

  // Screen-space points string + segment length labels for a polyline/polygon.
  function sketchSegLabels(pts, closed, fill, keyp) {
    const out = []
    const n = closed ? pts.length : pts.length - 1
    for (let j = 0; j < n; j++) {
      const a = pts[j], b = pts[(j + 1) % pts.length]
      const len = Math.hypot(b.x - a.x, b.z - a.z)
      if (len < 1e-3) continue
      const [ax, ay] = toScreen(a.x, a.z)
      const [bx, by] = toScreen(b.x, b.z)
      let mx = (ax + bx) / 2, my = (ay + by) / 2
      const nx = -(by - ay), ny = bx - ax
      const nl = Math.hypot(nx, ny) || 1
      mx += (nx / nl) * 11; my += (ny / nl) * 11
      out.push(
        <text key={`${keyp}-l${j}`} x={mx} y={my + 3} textAnchor="middle" fontSize={11} fontWeight={700}
          fill={fill} stroke="#fff" strokeWidth={3.2} paintOrder="stroke" strokeLinejoin="round"
          fontFamily="-apple-system, system-ui, sans-serif">{formatLen(len, units)}</text>
      )
    }
    return out
  }

  const onWheel = (e) => {
    const [px, py] = ptr(e)
    const v = xfRef.current
    const ns = clampV(v.scale * (e.deltaY < 0 ? 1.1 : 0.9), 12, 220)
    const wx = (px - v.panX) / v.scale
    const wy = (py - v.panY) / v.scale
    setXf({ scale: ns, panX: px - wx * ns, panY: py - wy * ns, init: true })
  }

  // graph-paper grid + edge rulers, in display units (feet or metres)
  const gridLines = []
  const gridLabels = []
  {
    const U = units === 'ft' ? 0.3048 : 1 // metres per display unit
    const ppu = scale * U // screen px per display unit
    let minor = 1
    if (ppu < 6) minor = 5
    if (ppu * minor < 6) minor = 25
    const major = minor * 5
    const [wl] = toWorld(0, 0)
    const [wr] = toWorld(W, 0)
    const [, wt] = toWorld(0, 0)
    const [, wb] = toWorld(0, H)
    const dl = wl / U, dr = wr / U, dt = wt / U, db = wb / U
    const unit = units === 'ft' ? '′' : 'm'
    if ((dr - dl) / minor < 500) {
      for (let n = Math.ceil(dl / minor) * minor; n <= dr; n += minor) {
        const r = Math.round(n)
        const [sx] = toScreen(r * U, 0)
        const axis = r === 0
        const isMajor = r % major === 0
        gridLines.push(<line key={`v${r}`} x1={sx} y1={0} x2={sx} y2={H} stroke="#000" strokeOpacity={axis ? 0.22 : isMajor ? 0.11 : 0.045} strokeWidth={1} />)
        if (isMajor && !axis) gridLabels.push(<text key={`vl${r}`} x={sx + 3} y={12} fontSize={9.5} fill="#8a929c" fontFamily="-apple-system, system-ui, sans-serif">{r}{unit}</text>)
      }
      for (let n = Math.ceil(dt / minor) * minor; n <= db; n += minor) {
        const r = Math.round(n)
        const [, sy] = toScreen(0, r * U)
        const axis = r === 0
        const isMajor = r % major === 0
        gridLines.push(<line key={`h${r}`} x1={0} y1={sy} x2={W} y2={sy} stroke="#000" strokeOpacity={axis ? 0.22 : isMajor ? 0.11 : 0.045} strokeWidth={1} />)
        if (isMajor && !axis) gridLabels.push(<text key={`hl${r}`} x={3} y={sy - 3} fontSize={9.5} fill="#8a929c" fontFamily="-apple-system, system-ui, sans-serif">{r}{unit}</text>)
      }
    }
  }

  const empty = rooms.length === 0 && walls.length === 0 && items.length === 0 && sketches.length === 0 && draft.length === 0

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
        <g pointerEvents="none">{gridLabels}</g>

        {/* room floors + name — shows the selected flooring on the plan */}
        {rooms.map((r) => {
          const [x0, y0] = toScreen(r.x, r.z)
          const wpx = r.w * scale
          const dpx = r.d * scale
          const f = floorFill(r)
          const tile = f.mat ? Math.max(10, f.repeat * scale) : 0
          const patId = `fp-${r.uid}`
          return (
            <g key={r.uid} pointerEvents="none">
              {f.mat && (
                <defs>
                  <pattern id={patId} patternUnits="userSpaceOnUse" width={tile} height={tile} patternTransform={`translate(${panX} ${panY})`}>
                    <rect width={tile} height={tile} fill={f.color} />
                    <image href={matUrl(f.mat)} width={tile} height={tile} preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                </defs>
              )}
              <rect x={x0} y={y0} width={wpx} height={dpx} fill={f.mat ? `url(#${patId})` : f.color} />
              {r.name && wpx > 46 && dpx > 26 && (
                <text x={x0 + wpx / 2} y={y0 + dpx / 2} textAnchor="middle" dominantBaseline="middle"
                  fontSize={12} fontWeight={700} fill="#33373d" stroke="#fff" strokeWidth={3} paintOrder="stroke"
                  strokeLinejoin="round" letterSpacing="0.3"
                  fontFamily="-apple-system, system-ui, sans-serif">{r.name}</text>
              )}
            </g>
          )
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

        {/* wall openings — doors (gap + swing arc) / windows / pass-throughs */}
        {openings.map((o) => {
          const geom = wallGeometry(o.wall, rooms, walls)
          if (!geom) return null
          const ax = geom.ox + geom.dirx * o.u
          const az = geom.oz + geom.dirz * o.u
          const bx = geom.ox + geom.dirx * (o.u + o.w)
          const bz = geom.oz + geom.dirz * (o.u + o.w)
          const [sax, say] = toScreen(ax, az)
          const [sbx, sby] = toScreen(bx, bz)
          const sel = selected?.type === 'opening' && selected.uid === o.uid
          // perpendicular (screen) for jamb ticks
          let pdx = -(sby - say); let pdy = sbx - sax
          const pl = Math.hypot(pdx, pdy) || 1
          pdx = (pdx / pl) * 6; pdy = (pdy / pl) * 6
          const stroke = sel ? ACCENT : '#5f6a78'
          const els = [
            // mask out the wall under the opening
            <line key="gap" x1={sax} y1={say} x2={sbx} y2={sby} stroke={FLOOR} strokeWidth={7} strokeLinecap="butt" />,
            // jambs
            <line key="j1" x1={sax - pdx} y1={say - pdy} x2={sax + pdx} y2={say + pdy} stroke={stroke} strokeWidth={2.5} strokeLinecap="round" />,
            <line key="j2" x1={sbx - pdx} y1={sby - pdy} x2={sbx + pdx} y2={sby + pdy} stroke={stroke} strokeWidth={2.5} strokeLinecap="round" />,
          ]
          if (o.kind === 'doorway') {
            // swing arc into the room (inward normal) with the leaf shown open
            const ox = ax + geom.nx * o.w
            const oz = az + geom.nz * o.w
            const [sox, soy] = toScreen(ox, oz)
            const rr = o.w * scale
            els.push(<line key="leaf" x1={sax} y1={say} x2={sox} y2={soy} stroke={stroke} strokeWidth={2.5} strokeLinecap="round" />)
            els.push(<path key="arc" d={`M ${sbx} ${sby} A ${rr} ${rr} 0 0 1 ${sox} ${soy}`} fill="none" stroke={stroke} strokeWidth={1.6} strokeDasharray="4 4" />)
          } else if (o.kind === 'window') {
            els.push(<line key="glass" x1={sax} y1={say} x2={sbx} y2={sby} stroke={sel ? ACCENT : '#5b86a8'} strokeWidth={2.5} strokeLinecap="round" />)
          }
          return <g key={o.uid} pointerEvents="none">{els}</g>
        })}

        {/* sketches (free-draw plan outlines) */}
        {sketches.map((s) => {
          const sel = selSketch?.uid === s.uid
          const ptsStr = s.pts.map((p) => toScreen(p.x, p.z).join(',')).join(' ')
          const col = sel ? ACCENT : SKETCH
          return (
            <g key={s.uid} pointerEvents="none">
              {s.closed
                ? <polygon points={ptsStr} fill={col} fillOpacity={0.07} stroke={col} strokeWidth={sel ? 3 : 2.5} strokeLinejoin="round" />
                : <polyline points={ptsStr} fill="none" stroke={col} strokeWidth={sel ? 3 : 2.5} strokeLinejoin="round" strokeLinecap="round" />}
              {sketchSegLabels(s.pts, s.closed, sel ? '#7a5a16' : '#15545f', s.uid)}
              {sel && s.pts.map((p, i) => {
                const [hx, hy] = toScreen(p.x, p.z)
                return <circle key={i} cx={hx} cy={hy} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              })}
            </g>
          )
        })}

        {/* in-progress sketch */}
        {tool === 'sketch' && draft.length > 0 && (() => {
          const pts = hover ? [...draft, hover] : draft
          const ptsStr = pts.map((p) => toScreen(p.x, p.z).join(',')).join(' ')
          const [fx, fy] = toScreen(draft[0].x, draft[0].z)
          const canClose = draft.length >= 3
          return (
            <g pointerEvents="none">
              <polyline points={ptsStr} fill="none" stroke={ACCENT} strokeWidth={2.5} strokeDasharray="7 5" strokeLinejoin="round" strokeLinecap="round" />
              {sketchSegLabels(pts, false, '#7a5a16', 'draft')}
              {draft.map((p, i) => {
                const [hx, hy] = toScreen(p.x, p.z)
                return <circle key={i} cx={hx} cy={hy} r={i === 0 ? 6 : 4.5} fill={i === 0 ? ACCENT : '#fff'} stroke={ACCENT} strokeWidth={2.5} filter="url(#softshadow)" />
              })}
              {canClose && <circle cx={fx} cy={fy} r={11} fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="3 3" />}
            </g>
          )
        })()}

        {/* items */}
        {items.map((it) => {
          const c = defFor(it.type)
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
          const c = defFor(selItem.type)
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

      {tool === 'sketch' && draft.length > 0 && (
        <div className="sketch-bar">
          <button onClick={() => setDraft((d) => d.slice(0, -1))} title="Undo last point"><IconUndo size={17} /></button>
          <button onClick={() => commitSketch(false)} disabled={draft.length < 2} title="Finish open line"><IconCheck size={18} /> Finish</button>
          <button className="accent" onClick={() => commitSketch(true)} disabled={draft.length < 3} title="Close shape"><IconCheck size={18} /> Close shape</button>
          <button onClick={() => { setDraft([]); setHover(null) }} title="Cancel"><IconClose size={17} /></button>
        </div>
      )}

      {empty && (
        <div className="empty">
          <b>Start your floor plan</b>
          <span>Pick <strong>Room</strong> and drag, or use <strong>Sketch</strong> to free-draw any space with live measurements — or just tap to drop a room.</span>
          <button className="empty-cta" onClick={() => dispatch({ type: 'addRoom', x: snapX(-1.8), z: snapZ(-1.5), w: 3.6, d: 3, height: defaultHeight })}>
            + Add a room
          </button>
        </div>
      )}

      <div className="hint">
        {tool === 'room' ? 'Drag to draw a room'
          : tool === 'wall' ? 'Drag to draw a wall'
          : tool === 'sketch' ? 'Tap to drop points — each edge is measured · tap the first point to close · drag to pan'
          : selItem ? 'Drag to move · drag white corners to resize'
          : selRoom ? 'Drag inside to move · corners to resize · tap a wall to edit it'
          : selWall ? 'Drag the wall or its endpoints'
          : selSketch ? 'Drag to move this sketch · edit dimensions in the panel'
          : selected?.type === 'roomwall' ? 'Use the button to delete or restore this wall'
          : 'Drag to pan · pinch to zoom · tap a wall to select it'}
      </div>
    </div>
  )
}
