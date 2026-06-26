import React from 'react'
import { useStore } from '../store.jsx'

function Slider({ label, value, min, max, step, onChange, unit = 'm' }) {
  return (
    <div className="row">
      <div className="label">{label}</div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
      <div className="val" style={{ width: 56, textAlign: 'right' }}>{value.toFixed(2)} {unit}</div>
    </div>
  )
}

export default function RoomSheet({ onFlash, onClose }) {
  const { state, dispatch } = useStore()
  const { room, items } = state
  const setRoom = (patch) => dispatch({ type: 'room', patch })
  const area = (room.width * room.depth).toFixed(1)

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Room</h2>
          <div className="sub">{area} m² floor area · {items.length} items</div>
        </div>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="insp">
        <Slider label="Width" value={room.width} min={2} max={14} step={0.1} onChange={(v) => setRoom({ width: v })} />
        <Slider label="Depth" value={room.depth} min={2} max={14} step={0.1} onChange={(v) => setRoom({ depth: v })} />
        <Slider label="Height" value={room.height} min={2.1} max={4} step={0.1} onChange={(v) => setRoom({ height: v })} />

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
