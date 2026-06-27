import React, { useRef } from 'react'
import { useStore } from '../store.jsx'
import { useAssets } from '../assets.jsx'
import { formatLen } from '../util.js'

export default function SettingsSheet({ onFlash, onClose }) {
  const { state, dispatch } = useStore()
  const { units, defaultHeight, rooms, walls, items } = state
  const { assets, addAsset, removeAsset } = useAssets()
  const fileRef = useRef(null)
  const onUpload = async (e) => {
    const files = [...(e.target.files || [])]
    e.target.value = ''
    for (const f of files) await addAsset(f)
    if (files.length) onFlash?.('Image added')
  }

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Settings</h2>
          <div className="sub">{rooms.length} rooms · {walls.length} walls · {items.length} items</div>
        </div>
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

        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div className="label">My images</div>
          <div style={{ marginLeft: 'auto', maxWidth: '74%', display: 'flex', flexWrap: 'wrap', gap: 9, justifyContent: 'flex-end' }}>
            {assets.map((a) => (
              <div key={a.id} className="asset-tile">
                <div className="asset-thumb" style={{ backgroundImage: `url(${a.dataUrl})` }} />
                <button className="asset-del" onClick={() => removeAsset(a.id)} aria-label="Delete image">×</button>
              </div>
            ))}
            <button className="swatch upload" onClick={() => fileRef.current?.click()} aria-label="Upload image">+</button>
            <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={onUpload} />
          </div>
        </div>
        <div className="row" style={{ borderBottom: 'none', paddingTop: 0 }}>
          <div className="sub" style={{ color: 'var(--text-3)', fontSize: 12 }}>
            Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker.
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
