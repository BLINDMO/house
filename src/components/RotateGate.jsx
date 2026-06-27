import React, { useEffect, useState } from 'react'

// Honeycutt is a landscape-only studio. In portrait we show a premium prompt
// to rotate the device instead of cramming the desktop-style chrome.
export default function RotateGate() {
  const [portrait, setPortrait] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait)')
    const update = () => setPortrait(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    window.addEventListener('resize', update)
    return () => {
      mq.removeEventListener?.('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!portrait) return null

  return (
    <div className="rotate-gate">
      <div className="rotate-card">
        <div className="rotate-phone">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
            <path d="M11 18.5h2" />
          </svg>
          <svg className="rotate-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 15.5-6.2" /><path d="M19 3v4h-4" />
          </svg>
        </div>
        <div className="brand-mark">
          <div className="logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11 12 4l9 7" /><path d="M5 10v9h14v-9" />
            </svg>
          </div>
          <b>Honeycutt Room Studio</b>
        </div>
        <h2>Rotate your device</h2>
        <p>Honeycutt is designed for landscape. Turn your phone sideways to start building.</p>
      </div>
    </div>
  )
}
