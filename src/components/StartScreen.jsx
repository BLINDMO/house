import React, { useState } from 'react'
import { generateHouse } from '../data/generate.js'

function Stepper({ label, value, min, max, onChange }) {
  return (
    <div className="gen-row">
      <span>{label}</span>
      <div className="gen-step">
        <button onClick={() => onChange(Math.max(min, value - 1))} aria-label={`Fewer ${label}`}>−</button>
        <b>{value}</b>
        <button onClick={() => onChange(Math.min(max, value + 1))} aria-label={`More ${label}`}>+</button>
      </div>
    </div>
  )
}

export default function StartScreen({ onBlank, onGenerate }) {
  const [mode, setMode] = useState('home') // 'home' | 'gen'
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(1)
  const [size, setSize] = useState('standard')

  return (
    <div className="start-scrim">
      <div className="start-card">
        <div className="start-brand">
          <div className="logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 4l9 7" /><path d="M5 10v9h14v-9" /></svg>
          </div>
          <div>
            <h1>Honeycutt Room Studio</h1>
            <p>Design your space in 2D &amp; 3D</p>
          </div>
        </div>

        {mode === 'home' ? (
          <div className="start-actions">
            <button className="start-btn primary" onClick={onBlank}>
              <b>Start a blank project</b>
              <span>Draw rooms and walls from scratch</span>
            </button>
            <button className="start-btn" onClick={() => setMode('gen')}>
              <b>Generate a house</b>
              <span>Auto-build a layout by rooms &amp; size</span>
            </button>
          </div>
        ) : (
          <div className="gen-form">
            <Stepper label="Bedrooms" value={bedrooms} min={1} max={6} onChange={setBedrooms} />
            <Stepper label="Bathrooms" value={bathrooms} min={1} max={4} onChange={setBathrooms} />
            <div className="gen-row">
              <span>Size</span>
              <div className="gen-sizes">
                {[['cozy', 'Cozy'], ['standard', 'Standard'], ['spacious', 'Spacious']].map(([v, n]) => (
                  <button key={v} className={`chip ${size === v ? 'active' : ''}`} onClick={() => setSize(v)}>{n}</button>
                ))}
              </div>
            </div>
            <div className="gen-buttons">
              <button className="start-btn" onClick={() => setMode('home')}>Back</button>
              <button className="start-btn primary" onClick={() => onGenerate(generateHouse({ bedrooms, bathrooms, size }))}>
                <b>Build it</b>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
