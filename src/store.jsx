import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef } from 'react'
import { CATALOG_BY_TYPE } from './data/catalog.js'

const KEY = 'atelier.design.v1'

let seq = 1
const uid = () => `${Date.now().toString(36)}-${(seq++).toString(36)}`

function starter() {
  return {
    view: '2d',
    ambiance: 'day',
    units: 'ft',
    room: { width: 5.0, depth: 4.0, height: 2.7 },
    items: [
      { uid: uid(), type: 'sofa', x: 2.5, z: 0.7, rot: 0, color: '#7d8aa0' },
      { uid: uid(), type: 'coffee-table', x: 2.5, z: 1.75, rot: 0, color: '#7a5c41' },
      { uid: uid(), type: 'rug', x: 2.5, z: 1.6, rot: 0, color: '#94604f' },
      { uid: uid(), type: 'tv-unit', x: 2.5, z: 3.6, rot: 0, color: '#3f4148' },
      { uid: uid(), type: 'tv', x: 2.5, z: 3.78, rot: 0, color: '#15171b' },
      { uid: uid(), type: 'plant', x: 0.45, z: 0.45, rot: 0, color: '#3f7a4f' },
      { uid: uid(), type: 'floor-lamp', x: 4.55, z: 0.5, rot: 0, color: '#e8d8a8' },
    ],
    selected: null,
  }
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return starter()
    const data = JSON.parse(raw)
    if (!data || !data.room || !Array.isArray(data.items)) return starter()
    data.selected = null
    if (!data.ambiance) data.ambiance = 'day'
    if (!data.units) data.units = 'ft'
    return data
  } catch {
    return starter()
  }
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v))
}

// ---- core reducer (operates on a single present state) ----
function reducer(state, action) {
  switch (action.type) {
    case 'view':
      return { ...state, view: action.view }

    case 'ambiance':
      return { ...state, ambiance: action.value }

    case 'units':
      return { ...state, units: action.value }

    case 'room': {
      const room = { ...state.room, ...action.patch }
      room.width = clamp(room.width, 2, 14)
      room.depth = clamp(room.depth, 2, 14)
      room.height = clamp(room.height, 2.1, 4)
      const items = state.items.map((it) => {
        const c = CATALOG_BY_TYPE[it.type]
        const half = footHalf(c, it.rot, it.scale)
        return {
          ...it,
          x: clamp(it.x, half.x, room.width - half.x),
          z: clamp(it.z, half.z, room.depth - half.z),
        }
      })
      return { ...state, room, items }
    }

    case 'add': {
      const c = CATALOG_BY_TYPE[action.kind]
      if (!c) return state
      const half = footHalf(c, 0)
      const item = {
        uid: uid(),
        type: action.kind,
        x: clamp(action.x ?? state.room.width / 2, half.x, state.room.width - half.x),
        z: clamp(action.z ?? state.room.depth / 2, half.z, state.room.depth - half.z),
        rot: 0,
        color: c.color,
      }
      return { ...state, items: [...state.items, item], selected: item.uid }
    }

    case 'update': {
      const items = state.items.map((it) => {
        if (it.uid !== action.uid) return it
        const next = { ...it, ...action.patch }
        if (next.scale) {
          next.scale = {
            x: clamp(next.scale.x ?? 1, 0.4, 2.5),
            y: clamp(next.scale.y ?? 1, 0.4, 2.5),
            z: clamp(next.scale.z ?? 1, 0.4, 2.5),
          }
        }
        const c = CATALOG_BY_TYPE[next.type]
        const half = footHalf(c, next.rot, next.scale)
        next.x = clamp(next.x, half.x, state.room.width - half.x)
        next.z = clamp(next.z, half.z, state.room.depth - half.z)
        return next
      })
      return { ...state, items }
    }

    case 'resize': {
      const width = clamp(action.width, 2, 14)
      const depth = clamp(action.depth, 2, 14)
      const room = { ...state.room, width, depth }
      const items = state.items.map((it) => {
        const c = CATALOG_BY_TYPE[it.type]
        const half = footHalf(c, it.rot, it.scale)
        return {
          ...it,
          x: clamp(it.x - action.shiftX, half.x, width - half.x),
          z: clamp(it.z - action.shiftZ, half.z, depth - half.z),
        }
      })
      return { ...state, room, items }
    }

    case 'select':
      return { ...state, selected: action.uid }

    case 'remove':
      return {
        ...state,
        items: state.items.filter((it) => it.uid !== action.uid),
        selected: state.selected === action.uid ? null : state.selected,
      }

    case 'duplicate': {
      const src = state.items.find((it) => it.uid === action.uid)
      if (!src) return state
      const c = CATALOG_BY_TYPE[src.type]
      const half = footHalf(c, src.rot, src.scale)
      const copy = {
        ...src,
        uid: uid(),
        x: clamp(src.x + 0.3, half.x, state.room.width - half.x),
        z: clamp(src.z + 0.3, half.z, state.room.depth - half.z),
      }
      return { ...state, items: [...state.items, copy], selected: copy.uid }
    }

    case 'clear':
      return { ...state, items: [], selected: null }

    case 'reset':
      return { ...starter(), view: state.view, ambiance: state.ambiance, units: state.units }

    default:
      return state
  }
}

// ---- history wrapper (undo / redo with drag coalescing) ----
const HISTORIC = new Set(['add', 'update', 'remove', 'duplicate', 'clear', 'reset', 'resize', 'room'])
const LIMIT = 60

function root(c, action) {
  if (action.type === 'undo') {
    if (!c.past.length) return c
    const prev = c.past[c.past.length - 1]
    return {
      past: c.past.slice(0, -1),
      present: { ...prev, view: c.present.view, ambiance: c.present.ambiance },
      future: [c.present, ...c.future].slice(0, LIMIT),
      lastKey: null,
      lastTime: 0,
    }
  }
  if (action.type === 'redo') {
    if (!c.future.length) return c
    const next = c.future[0]
    return {
      past: [...c.past, c.present].slice(-LIMIT),
      present: { ...next, view: c.present.view, ambiance: c.present.ambiance },
      future: c.future.slice(1),
      lastKey: null,
      lastTime: 0,
    }
  }

  if (!HISTORIC.has(action.type)) {
    return { ...c, present: reducer(c.present, action) }
  }

  const now = Date.now()
  const key = action.mergeKey
  // coalesce continuous gestures (e.g. dragging) into one undo step
  if (key && key === c.lastKey && now - c.lastTime < 1500) {
    return { ...c, present: reducer(c.present, action), lastTime: now }
  }
  return {
    past: [...c.past, c.present].slice(-LIMIT),
    present: reducer(c.present, action),
    future: [],
    lastKey: key || null,
    lastTime: now,
  }
}

// Half-footprint accounting for 90° rotations and per-item scale.
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
      } catch {
        /* storage full / unavailable — ignore */
      }
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
