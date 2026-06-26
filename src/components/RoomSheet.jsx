import React from 'react'
import { useStore } from '../store.jsx'
import { formatLen, formatArea } from '../util.js'

function Slider({ label, value, min, max, step, onChange, display }) {
  return (
    <div className="row">
      <div className="label">{label}</div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
      <div className="val" style={{ width: 64, textAlign: 'right' }}>{display}</div>
    </div>
  )
}

export default function RoomSheet({ onFlash, onClose }) {
  const { state, dispatch } = useStore()
  const { room, items, units } = state
  const setRoom = (patch) => dispatch({ type: 'room', patch, mergeKey: 'room' })
  const area = room.width * room.depth

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Room</h2>
          <div className="sub">{formatArea(area, units)} floor area · {items.length} items</div>
        </div>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="insp">
        <div className="row">
          <div className="label">Units</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            {[['ft', 'Feet'], ['m', 'Metres']].map(([u, n]) => (
              <button key={u} className="chip"
                style={units === u ? { color: 'var(--accent)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' } : undefined}
                onClick={() => dispatch({ type: 'units', value: u })}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <Slider label="Width" value={room.width} min={2} max={14} step={0.1}
          onChange={(v) => setRoom({ width: v })} display={formatLen(room.width, units)} />
        <Slider label="Depth" value={room.depth} min={2} max={14} step={0.1}
          onChange={(v) => setRoom({ depth: v })} display={formatLen(room.depth, units)} />
        <Slider label="Height" value={room.height} min={2.1} max={4} step={0.1}
          onChange={(v) => setRoom({ height: v })} display={formatLen(room.height, units)} />

        <div className="row">
          <div className="label">Presets</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {[['Cozy', 3, 3], ['Studio', 5, 4], ['Lounge', 6, 5], ['Suite', 8, 6]].map(([n, w, d]) => (
              <button key={n} className="chip" onClick={() => setRoom({ width: w, depth: d })}>{n}</button>
            ))}
          </div>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => { dispatch({ type: 'clear' }); onFlash?.('Cleared room') }}>
            Clear items
          </button>
          <button className="btn" onClick={() => { dispatch({ type: 'reset' }); onFlash?.('Reset design'); onClose() }}>
            Reset design
          </button>
        </div>
      </div>
    </>
  )
}
