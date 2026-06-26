import React from 'react'
import { useStore } from '../store.jsx'
import { CATALOG_BY_TYPE, PALETTE } from '../data/catalog.js'
import { effDims, formatLen } from '../util.js'
import { IconRotate, IconCopy, IconTrash } from './Icons.jsx'

export default function Inspector({ item, onClose, onFlash }) {
  const { state, dispatch } = useStore()
  const { units } = state
  const c = CATALOG_BY_TYPE[item.type]
  if (!c) return null

  const set = (patch, mergeKey) => dispatch({ type: 'update', uid: item.uid, patch, mergeKey })
  const dim = effDims(c, item)
  const s = item.scale || {}
  const avg = Math.round((((s.x ?? 1) + (s.z ?? 1)) / 2) * 100)

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>{c.name}</h2>
          <div className="sub">{formatLen(dim.w, units)} × {formatLen(dim.d, units)} × {formatLen(dim.h, units)}</div>
        </div>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="insp">
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div className="label">Colour</div>
          <div className="swatches" style={{ marginLeft: 'auto', maxWidth: '70%', justifyContent: 'flex-end' }}>
            {PALETTE.map((p) => (
              <button
                key={p}
                className={`swatch ${(item.color || c.color) === p ? 'active' : ''}`}
                style={{ background: p }}
                onClick={() => set({ color: p })}
                aria-label={`Colour ${p}`}
              />
            ))}
          </div>
        </div>

        <div className="row">
          <div className="label">Size</div>
          <input
            type="range" min="40" max="250" value={avg}
            onChange={(e) => {
              const v = Number(e.target.value) / 100
              set({ scale: { x: v, y: v, z: v } }, `size:${item.uid}`)
            }}
          />
          <div className="val" style={{ width: 48, textAlign: 'right' }}>{avg}%</div>
        </div>

        <div className="row">
          <div className="label">Footprint</div>
          <div className="val">{formatLen(dim.w, units)} × {formatLen(dim.d, units)}</div>
        </div>

        <div className="row">
          <div className="label">Rotation</div>
          <input type="range" min="0" max="359" value={item.rot || 0}
            onChange={(e) => set({ rot: Number(e.target.value) }, `rot:${item.uid}`)} />
          <div className="val" style={{ width: 44, textAlign: 'right' }}>{Math.round(item.rot || 0)}°</div>
        </div>

        <div className="row">
          <div className="label">Quick turn</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            {[0, 90, 180, 270].map((deg) => (
              <button
                key={deg}
                className="chip"
                style={(item.rot || 0) === deg ? { color: 'var(--accent)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' } : undefined}
                onClick={() => set({ rot: deg })}
              >
                {deg}°
              </button>
            ))}
          </div>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => set({ rot: ((item.rot || 0) + 90) % 360 })}>
            <IconRotate size={18} /> Rotate
          </button>
          <button className="btn" onClick={() => { dispatch({ type: 'duplicate', uid: item.uid }); onFlash?.('Duplicated'); onClose() }}>
            <IconCopy size={18} /> Duplicate
          </button>
        </div>
        <div className="btn-row">
          <button className="btn" onClick={() => set({ scale: { x: 1, y: 1, z: 1 } })}>Reset size</button>
          <button className="btn danger" onClick={() => { dispatch({ type: 'remove', uid: item.uid }); onFlash?.('Removed'); onClose() }}>
            <IconTrash size={18} /> Delete
          </button>
        </div>
      </div>
    </>
  )
}
