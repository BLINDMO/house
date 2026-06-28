import React from 'react'

// Shown (via CSS, on touch devices held in portrait) to keep the studio in
// landscape — the 2D/3D canvas is designed for the wider orientation.
export default function RotateGate() {
  return (
    <div className="rotate-gate" aria-hidden="true">
      <div className="rotate-card">
        <div className="rotate-phone">
          <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
            <path d="M11 18.5h2" />
          </svg>
          <span className="rotate-arrow">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" />
            </svg>
          </span>
        </div>
        <h2>Rotate your device</h2>
        <p>Honeycutt Room Studio is built for landscape. Turn your phone sideways to design your space.</p>
        <div className="brand-mark">
          <div className="logo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 4l9 7" /><path d="M5 10v9h14v-9" /></svg>
          </div>
          Honeycutt Room Studio
        </div>
      </div>
    </div>
  )
}
