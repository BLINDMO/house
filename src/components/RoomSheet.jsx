import React from 'react'
import { useStore } from '../store.jsx'
import { formatLen } from '../util.js'

export default function SettingsSheet({ onFlash, onClose }) {
  const { state, dispatch } = useStore()
  const { units, defaultHeight, rooms, walls, items } = state

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Settings</h2>
          <div className="sub">{rooms.length} rooms · {walls.length} walls · {items.length} items</div>
        </div>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="insp">
        <div className="row">
          <div className="label">Units</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            {[['ft', 'Feet'], ['m', 'Metres']].map(([u, n]) => (
              <button key={u} className="chip"
                style={units === u ? activeChip : undefined}
                onClick={() => dispatch({ type: 'units', value: u })}>{n}</button>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="label">New wall height</div>
          <input type="range" min={1.5} max={6} step={0.1} value={defaultHeight}
            onChange={(e) => dispatch({ type: 'defaultHeight', value: Number(e.target.value) })} />
          <div className="val" style={{ width: 64, textAlign: 'right' }}>{formatLen(defaultHeight, units)}</div>
        </div>
        <div className="row" style={{ borderBottom: 'none', paddingTop: 0 }}>
          <div className="sub" style={{ color: 'var(--text-3)', fontSize: 12 }}>
            Applied to rooms &amp; walls you draw next. Change an existing one by selecting it.
          </div>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => { dispatch({ type: 'clear' }); onFlash?.('Cleared furniture') }}>Clear furniture</button>
          <button className="btn danger" onClick={() => { dispatch({ type: 'reset' }); onFlash?.('Reset everything'); onClose() }}>Reset all</button>
        </div>
      </div>
    </>
  )
}

const activeChip = { color: 'var(--accent)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }
