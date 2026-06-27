import React, { useRef } from 'react'
import { PALETTE } from '../data/catalog.js'
import { useAssets } from '../assets.jsx'

export const WOODS = [
  { tex: 'wood:oak', color: '#c79a6b', label: 'Oak' },
  { tex: 'wood:walnut', color: '#6e4a30', label: 'Walnut' },
  { tex: 'wood:birch', color: '#d8c7a3', label: 'Birch' },
  { tex: 'wood:grey', color: '#9a9a92', label: 'Grey' },
]

// value: { color, tex }.  onChange({ color, tex })
export default function FinishPicker({ value, onChange, allowTexture = true }) {
  const { assets, addAsset } = useAssets()
  const fileRef = useRef(null)
  const color = value?.color || '#9aa3af'
  const tex = value?.tex

  const upload = async (e) => {
    const f = e.target.files?.[0]
    e.target.value = ''
    if (!f) return
    const a = await addAsset(f)
    onChange({ color: '#ffffff', tex: `img:${a.id}` })
  }

  return (
    <div className="finish">
      <div className="finish-row">
        {PALETTE.map((p) => (
          <button key={p} className={`swatch ${!tex && color === p ? 'active' : ''}`} style={{ background: p }} onClick={() => onChange({ color: p, tex: undefined })} aria-label={`Colour ${p}`} />
        ))}
        <label className="swatch custom" aria-label="Custom colour">
          <input type="color" value={/^#[0-9a-fA-F]{6}$/.test(color) ? color : '#999999'} onChange={(e) => onChange({ color: e.target.value, tex: undefined })} />
        </label>
      </div>

      {allowTexture && (
        <>
          <div className="finish-label">Wood</div>
          <div className="finish-row">
            {WOODS.map((w) => (
              <button key={w.tex} className={`swatch wood ${tex === w.tex ? 'active' : ''}`} style={{ background: w.color }} onClick={() => onChange({ color: w.color, tex: w.tex })} aria-label={w.label} />
            ))}
          </div>

          <div className="finish-label">Your images</div>
          <div className="finish-row">
            {assets.map((a) => (
              <button key={a.id} className={`swatch img ${tex === `img:${a.id}` ? 'active' : ''}`} style={{ backgroundImage: `url(${a.dataUrl})` }} onClick={() => onChange({ color: '#ffffff', tex: `img:${a.id}` })} aria-label={a.name} />
            ))}
            <button className="swatch upload" onClick={() => fileRef.current?.click()} aria-label="Upload image">+</button>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={upload} />
          </div>
        </>
      )}
    </div>
  )
}
