import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef } from 'react'
import { CATALOG_BY_TYPE } from './data/catalog.js'

const KEY = 'honeycutt.design.v2'

let seq = 1
const uid = () => `${Date.now().toString(36)}-${(seq++).toString(36)}`

function starter() {
  return {
    view: '2d',
    tool: 'select', // 'select' | 'room' | 'wall' | 'sketch'
    sideTool: 'select', // 'select' | 'box' | 'board'
    sideWall: null, // wall ref { kind, uid, side } for the Side view
    units: 'ft',
    ambiance: 'day',
    defaultHeight: 2.7,
    rooms: [],
    walls: [],
    items: [],
    builtins: [],
    sketches: [], // freehand plan outlines: { uid, pts:[{x,z}], closed }
    // wall openings (doors / windows / pass-throughs) cut into a wall or room
    // edge: { uid, wall: ref, u, v, w, h, kind: 'doorway'|'window'|'passthrough' }
    // where u = distance along the wall, v = height off the floor, w×h = size.
    openings: [],
    selected: null, // { type: 'item' | 'room' | 'wall' | 'roomwall' | 'builtin' | 'sketch' | 'opening', uid }
  }
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return starter()
    const data = JSON.parse(raw)
    if (!data || !Array.isArray(data.items)) return starter()
    return { ...starter(), ...data, tool: 'select', sideTool: 'select', selected: null }
  } catch {
    return starter()
  }
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v))
}

function clampItem(n) {
  if (n.scale) {
    n.scale = {
      x: clamp(n.scale.x ?? 1, 0.3, 3),
      y: clamp(n.scale.y ?? 1, 0.3, 3),
      z: clamp(n.scale.z ?? 1, 0.3, 3),
    }
  }
  return n
}
function clampRoom(n) {
  n.w = clamp(n.w, 0.5, 40)
  n.d = clamp(n.d, 0.5, 40)
  if (n.height != null) n.height = clamp(n.height, 1.5, 6)
  return n
}
function clampWall(n) {
  if (n.height != null) n.height = clamp(n.height, 1.5, 6)
  if (n.thickness != null) n.thickness = clamp(n.thickness, 0.05, 0.5)
  return n
}
function clampBuiltin(n) {
  if (n.w != null) n.w = clamp(n.w, 0.1, 12)
  if (n.h != null) n.h = clamp(n.h, 0.1, 6)
  if (n.depth != null) n.depth = clamp(n.depth, 0.02, 3)
  if (n.thickness != null) n.thickness = clamp(n.thickness, 0.01, 0.4)
  return n
}
function clampOpening(n) {
  if (n.u != null) n.u = Math.max(0, n.u)
  if (n.v != null) n.v = clamp(n.v, 0, 6)
  if (n.w != null) n.w = clamp(n.w, 0.1, 12)
  if (n.h != null) n.h = clamp(n.h, 0.1, 6)
  return n
}

const COLL = { item: 'items', room: 'rooms', wall: 'walls', builtin: 'builtins', sketch: 'sketches', opening: 'openings' }

function patchOne(state, type, id, patch) {
  const key = COLL[type]
  const arr = state[key].map((o) => {
    if (o.uid !== id) return o
    const n = { ...o, ...patch }
    if (type === 'item') clampItem(n)
    if (type === 'room') clampRoom(n)
    if (type === 'wall') clampWall(n)
    if (type === 'builtin') clampBuiltin(n)
    if (type === 'opening') clampOpening(n)
    return n
  })
  return { ...state, [key]: arr }
}

function reducer(state, action) {
  switch (action.type) {
    case 'view':
      return { ...state, view: action.view }
    case 'ambiance':
      return { ...state, ambiance: action.value }
    case 'units':
      return { ...state, units: action.value }
    case 'tool':
      return { ...state, tool: action.tool, selected: action.tool === 'select' ? state.selected : null }
    case 'sideTool':
      return { ...state, sideTool: action.tool, selected: action.tool === 'select' ? state.selected : null }
    case 'sideWall':
      return { ...state, sideWall: action.ref }
    case 'defaultHeight':
      return { ...state, defaultHeight: clamp(action.value, 1.5, 6) }

    case 'select':
      return { ...state, selected: action.sel || null }

    case 'addRoom': {
      const room = clampRoom({
        uid: uid(), name: action.name || `Room ${state.rooms.length + 1}`,
        x: action.x, z: action.z, w: action.w, d: action.d,
        height: action.height ?? state.defaultHeight, floor: '#b08a5e',
      })
      // Drawing a room completes the gesture: drop back to the Select tool so
      // the next tap edits/moves it instead of drawing another room.
      return { ...state, rooms: [...state.rooms, room], tool: 'select', selected: { type: 'room', uid: room.uid } }
    }

    case 'addWall': {
      const wall = clampWall({
        uid: uid(), x1: action.x1, z1: action.z1, x2: action.x2, z2: action.z2,
        height: action.height ?? state.defaultHeight, thickness: 0.1,
      })
      // Keep the wall tool active and selection clear so you can chain walls
      // without the inspector popping up between segments.
      return { ...state, walls: [...state.walls, wall], selected: null }
    }

    case 'addBuiltin': {
      const b = clampBuiltin({ uid: uid(), kind: 'cubby', depth: 0.4, color: '#c7ad84', ...action.builtin })
      return { ...state, builtins: [...state.builtins, b], selected: { type: 'builtin', uid: b.uid } }
    }

    case 'addBuiltins': {
      const list = action.list.map((b) => clampBuiltin({ uid: uid(), depth: 0.4, color: '#c79a6b', kind: 'panel', ...b }))
      return { ...state, builtins: [...state.builtins, ...list], selected: list.length ? { type: 'builtin', uid: list[list.length - 1].uid } : state.selected }
    }

    case 'addOpening': {
      const o = clampOpening({ uid: uid(), kind: 'doorway', v: 0, ...action.opening })
      return { ...state, openings: [...state.openings, o], selected: { type: 'opening', uid: o.uid } }
    }

    case 'addSketch': {
      const s = { uid: uid(), pts: action.pts, closed: !!action.closed, color: action.color || '#3f7d8c' }
      return { ...state, sketches: [...state.sketches, s], selected: { type: 'sketch', uid: s.uid } }
    }

    case 'addItem': {
      if (action.kind.startsWith?.('ph:')) {
        const item = { uid: uid(), type: action.kind, x: action.x ?? 0, z: action.z ?? 0, rot: 0, scale: { x: 1, y: 1, z: 1 } }
        return { ...state, items: [...state.items, item], selected: { type: 'item', uid: item.uid } }
      }
      const c = CATALOG_BY_TYPE[action.kind]
      if (!c) return state
      const item = {
        uid: uid(), type: action.kind,
        x: action.x ?? 0, z: action.z ?? 0, rot: 0,
        color: c.color, scale: { x: 1, y: 1, z: 1 },
      }
      return { ...state, items: [...state.items, item], selected: { type: 'item', uid: item.uid } }
    }

    // non-historic: record a model's measured real-world size once it loads
    case 'itemDim':
      return { ...state, items: state.items.map((o) => (o.uid === action.uid ? { ...o, dim: action.dim } : o)) }

    case 'update':
      return patchOne(state, action.sel.type, action.sel.uid, action.patch)

    case 'remove': {
      const key = COLL[action.sel.type]
      const sel = state.selected && state.selected.uid === action.sel.uid ? null : state.selected
      return { ...state, [key]: state[key].filter((o) => o.uid !== action.sel.uid), selected: sel }
    }

    case 'duplicate': {
      const { type, uid: id } = action.sel
      const key = COLL[type]
      const src = state[key].find((o) => o.uid === id)
      if (!src) return state
      let copy
      if (type === 'wall') copy = { ...src, uid: uid(), x1: src.x1 + 0.3, z1: src.z1 + 0.3, x2: src.x2 + 0.3, z2: src.z2 + 0.3 }
      else if (type === 'builtin') copy = src.kind === 'board'
        ? { ...src, uid: uid(), u1: src.u1 + 0.3, v1: src.v1 + 0.3, u2: src.u2 + 0.3, v2: src.v2 + 0.3 }
        : { ...src, uid: uid(), u: src.u + 0.3, v: src.v + 0.3 }
      else if (type === 'sketch') copy = { ...src, uid: uid(), pts: src.pts.map((p) => ({ x: p.x + 0.3, z: p.z + 0.3 })) }
      else if (type === 'opening') copy = { ...src, uid: uid(), u: src.u + 0.3 }
      else copy = { ...src, uid: uid(), x: src.x + 0.3, z: src.z + 0.3 }
      return { ...state, [key]: [...state[key], copy], selected: { type, uid: copy.uid } }
    }

    case 'clear':
      return { ...state, items: [], selected: state.selected?.type === 'item' ? null : state.selected }

    case 'reset':
      return { ...starter(), view: state.view, units: state.units, ambiance: state.ambiance, defaultHeight: state.defaultHeight }

    default:
      return state
  }
}

// ---- history wrapper (undo / redo with drag coalescing) ----
const HISTORIC = new Set(['addRoom', 'addWall', 'addSketch', 'addItem', 'addBuiltin', 'addBuiltins', 'addOpening', 'update', 'remove', 'duplicate', 'clear', 'reset', 'defaultHeight'])
const LIMIT = 80

function root(c, action) {
  if (action.type === 'undo') {
    if (!c.past.length) return c
    const prev = c.past[c.past.length - 1]
    return {
      past: c.past.slice(0, -1),
      present: { ...prev, view: c.present.view, units: c.present.units, ambiance: c.present.ambiance, tool: c.present.tool },
      future: [c.present, ...c.future].slice(0, LIMIT),
      lastKey: null, lastTime: 0,
    }
  }
  if (action.type === 'redo') {
    if (!c.future.length) return c
    const next = c.future[0]
    return {
      past: [...c.past, c.present].slice(-LIMIT),
      present: { ...next, view: c.present.view, units: c.present.units, ambiance: c.present.ambiance, tool: c.present.tool },
      future: c.future.slice(1),
      lastKey: null, lastTime: 0,
    }
  }
  if (!HISTORIC.has(action.type)) {
    return { ...c, present: reducer(c.present, action) }
  }
  const now = Date.now()
  const key = action.mergeKey
  if (key && key === c.lastKey && now - c.lastTime < 1500) {
    return { ...c, present: reducer(c.present, action), lastTime: now }
  }
  return {
    past: [...c.past, c.present].slice(-LIMIT),
    present: reducer(c.present, action),
    future: [],
    lastKey: key || null, lastTime: now,
  }
}

// Half-footprint of a furniture piece, accounting for 90° rotation and scale.
export function footHalf(c, rot, scale) {
  if (!c) return { x: 0.25, z: 0.25 }
  const ew = c.w * (scale?.x ?? 1)
  const ed = c.d * (scale?.z ?? 1)
  const r = ((rot % 360) + 360) % 360
  const swap = r === 90 || r === 270
  return { x: (swap ? ed : ew) / 2, z: (swap ? ew : ed) / 2 }
}

const Ctx = createContext(null)

export function StoreProvider({ children }) {
  const [container, dispatch] = useReducer(root, undefined, () => ({
    past: [], present: load(), future: [], lastKey: null, lastTime: 0,
  }))
  const t = useRef(null)
  const state = container.present

  useEffect(() => {
    clearTimeout(t.current)
    t.current = setTimeout(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(state))
      } catch { /* ignore */ }
    }, 250)
    return () => clearTimeout(t.current)
  }, [state])

  const value = useMemo(
    () => ({ state, dispatch, canUndo: container.past.length > 0, canRedo: container.future.length > 0 }),
    [state, container.past.length, container.future.length]
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
