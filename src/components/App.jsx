import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from '../store.jsx'
import { haptic } from '../util.js'
import Editor2D from './Editor2D.jsx'
import ElevationEditor from './ElevationEditor.jsx'
import Scene3D from './Scene3D.jsx'
import Rail from './Rail.jsx'
import Panel from './Panel.jsx'
import { IconPlan, IconCube, IconSide, IconUndo, IconRedo, IconShare, IconNew } from './Icons.jsx'

export default function App() {
  const { state, dispatch, canUndo, canRedo } = useStore()
  const { view, selected, rooms } = state
  const [override, setOverride] = useState(null) // 'catalog' | 'settings' | 'presets'
  const [toast, setToast] = useState(null)

  const flash = useCallback((msg) => setToast({ msg, t: Date.now() }), [])
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1600)
    return () => clearTimeout(t)
  }, [toast])

  // displayed panel: an explicit override wins; otherwise selection shows the inspector
  const panel = override || (selected ? 'inspector' : null)

  const setView = (v) => dispatch({ type: 'view', view: v })
  const openPanel = (kind) => setOverride((p) => (p === kind ? null : kind))
  const closePanel = () => { setOverride(null); dispatch({ type: 'select', sel: null }) }

  const newDesign = () => {
    dispatch({ type: 'reset' })
    setOverride(null)
    flash('New design — undo to restore')
  }

  const addKind = (kind) => {
    let x = 0
    let z = 0
    const selRoom = selected?.type === 'room' && rooms.find((r) => r.uid === selected.uid)
    if (selRoom) { x = selRoom.x + selRoom.w / 2; z = selRoom.z + selRoom.d / 2 }
    else if (rooms.length) { const r = rooms[rooms.length - 1]; x = r.x + r.w / 2; z = r.z + r.d / 2 }
    dispatch({ type: 'addItem', kind, x, z })
    haptic(10)
    flash('Added — drag to position')
  }

  const exportView = async () => {
    try {
      let dataUrl
      if (view === '3d') {
        const canvas = document.querySelector('.scene3d canvas')
        if (!canvas) return
        dataUrl = canvas.toDataURL('image/png')
      } else {
        const svg = document.querySelector('.editor2d svg')
        if (!svg) return
        dataUrl = await svgToPng(svg)
      }
      await shareOrDownload(dataUrl, `honeycutt-room-${Date.now()}.png`)
      flash('Image saved')
    } catch {
      flash('Could not export')
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11 12 4l9 7" /><path d="M5 10v9h14v-9" />
            </svg>
          </div>
          <div className="title">
            <b>Honeycutt</b>
            <span>Room Studio</span>
          </div>
        </div>

        <div className="seg" role="tablist" aria-label="View mode">
          <button className={view === '2d' ? 'active' : ''} onClick={() => setView('2d')} aria-pressed={view === '2d'}><IconPlan size={15} /> Plan</button>
          <button className={view === 'side' ? 'active' : ''} onClick={() => setView('side')} aria-pressed={view === 'side'}><IconSide size={15} /> Side</button>
          <button className={view === '3d' ? 'active' : ''} onClick={() => setView('3d')} aria-pressed={view === '3d'}><IconCube size={15} /> 3D</button>
        </div>

        <div className="tools">
          <button className="tool" onClick={newDesign} aria-label="New design"><IconNew size={18} /></button>
          <button className="tool" disabled={!canUndo} onClick={() => dispatch({ type: 'undo' })} aria-label="Undo"><IconUndo size={18} /></button>
          <button className="tool" disabled={!canRedo} onClick={() => dispatch({ type: 'redo' })} aria-label="Redo"><IconRedo size={18} /></button>
          <button className="tool" onClick={exportView} aria-label="Export image"><IconShare size={18} /></button>
        </div>
      </header>

      <div className="body">
        <Rail onOpen={openPanel} activePanel={panel} />

        <main className="stage">
          {view === '2d' ? <Editor2D /> : view === 'side' ? <ElevationEditor /> : <Scene3D />}
        </main>

        {panel && <div className="panel-scrim" onClick={closePanel} />}
        {panel && (
          <Panel kind={panel} onClose={closePanel} onFlash={flash} onPick={addKind} />
        )}
      </div>

      {toast && <div className="toast" key={toast.t}>{toast.msg}</div>}
    </div>
  )
}

function svgToPng(svg) {
  return new Promise((resolve, reject) => {
    const rect = svg.getBoundingClientRect()
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    const scale = 2
    const xml = new XMLSerializer().serializeToString(svg)
    const src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)))
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = w * scale
      canvas.height = h * scale
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = src
  })
}

async function shareOrDownload(dataUrl, name) {
  const blob = await (await fetch(dataUrl)).blob()
  const file = new File([blob], name, { type: 'image/png' })
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file], title: 'My room · Honeycutt Room Studio' })
    return
  }
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}
