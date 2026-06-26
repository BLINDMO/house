import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import { CATALOG_BY_TYPE } from './data/catalog.js'

const KEY = 'atelier.design.v1'

let seq = 1
const uid = () => `${Date.now().toString(36)}-${(seq++).toString(36)}`

function starter() {
  return {
    view: '2d',
    room: { width: 5.0, depth: 4.0, height: 2.7, floor: 'oak' },
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
    return data
  } catch {
    return starter()
  }
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v))
}

function reducer(state, action) {
  switch (action.type) {
    case 'view':
      return { ...state, view: action.view }

    case 'room': {
      const room = { ...state.room, ...action.patch }
      room.width = clamp(room.width, 2, 14)
      room.depth = clamp(room.depth, 2, 14)
      room.height = clamp(room.height, 2.1, 4)
      // keep items inside the new bounds
      const items = state.items.map((it) => {
        const c = CATALOG_BY_TYPE[it.type]
        const half = footHalf(c, it.rot)
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
        const c = CATALOG_BY_TYPE[next.type]
        const half = footHalf(c, next.rot)
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
        const half = footHalf(c, it.rot)
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
      const half = footHalf(c, src.rot)
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
      return { ...starter(), view: state.view }

    default:
      return state
  }
}

// Half-footprint accounting for 90° rotations.
export function footHalf(c, rot) {
  if (!c) return { x: 0.25, z: 0.25 }
  const r = ((rot % 360) + 360) % 360
  const swap = r === 90 || r === 270
  return { x: (swap ? c.d : c.w) / 2, z: (swap ? c.w : c.d) / 2 }
}

const Ctx = createContext(null)

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)
  const t = useRef(null)

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

  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>
}

export function useStore() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
