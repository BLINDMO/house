import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from '../store.jsx'
import { haptic } from '../util.js'
import Editor2D from './Editor2D.jsx'
import Scene3D from './Scene3D.jsx'
import Catalog from './Catalog.jsx'
import Inspector from './Inspector.jsx'
import SettingsSheet from './RoomSheet.jsx'
import {
  IconPlan, IconCube, IconPlus, IconRotate, IconCopy, IconTrash, IconTune,
  IconUndo, IconRedo, IconShare, IconCursor, IconSquare, IconWall,
} from './Icons.jsx'

export default function App() {
  const { state, dispatch, canUndo, canRedo } = useStore()
  const { view, selected, rooms, items, tool } = state
  const [sheet, setSheet] = useState(null) // 'catalog' | 'settings' | 'inspector'
  const [toast, setToast] = useState(null)

  const flash = useCallback((msg) => setToast({ msg, t: Date.now() }), [])
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1600)
    return () => clearTimeout(t)
  }, [toast])

  const hasSel = !!selected
  useEffect(() => {
    if (sheet === 'inspector' && !hasSel) setSheet(null)
  }, [sheet, hasSel])

  const setView = (v) => dispatch({ type: 'view', view: v })
  const setTool = (t) => dispatch({ type: 'tool', tool: t })

  const addKind = (kind) => {
    let x = 0
    let z = 0
    const selRoom = selected?.type === 'room' && rooms.find((r) => r.uid === selected.uid)
    if (selRoom) { x = selRoom.x + selRoom.w / 2; z = selRoom.z + selRoom.d / 2 }
    else if (rooms.length) { const r = rooms[rooms.length - 1]; x = r.x + r.w / 2; z = r.z + r.d / 2 }
    dispatch({ type: 'addItem', kind, x, z })
    setSheet(null)
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
          <button className={view === '2d' ? 'active' : ''} onClick={() => setView('2d')} aria-pressed={view === '2d'}>
            <IconPlan size={16} /> Plan
          </button>
          <button className={view === '3d' ? 'active' : ''} onClick={() => setView('3d')} aria-pressed={view === '3d'}>
            <IconCube size={16} /> 3D
          </button>
        </div>

        <div className="tools">
          <button className="tool" onClick={exportView} aria-label="Export image"><IconShare size={18} /></button>
        </div>
      </header>

      <main className="stage">
        {view === '2d' ? <Editor2D /> : <Scene3D />}

        {/* tool switcher (2D only) */}
        {view === '2d' && (
          <div className="toolbar">
            <button className={tool === 'select' ? 'active' : ''} onClick={() => setTool('select')}><IconCursor size={16} /> Select</button>
            <button className={tool === 'room' ? 'active' : ''} onClick={() => setTool('room')}><IconSquare size={16} /> Room</button>
            <button className={tool === 'wall' ? 'active' : ''} onClick={() => setTool('wall')}><IconWall size={16} /> Wall</button>
          </div>
        )}

        <div className="undo-cluster">
          <button className="tool" disabled={!canUndo} onClick={() => dispatch({ type: 'undo' })} aria-label="Undo"><IconUndo size={18} /></button>
          <button className="tool" disabled={!canRedo} onClick={() => dispatch({ type: 'redo' })} aria-label="Redo"><IconRedo size={18} /></button>
        </div>

        {selected && tool === 'select' && (() => {
          const rw = selected.type === 'roomwall' ? rooms.find((r) => r.uid === selected.uid) : null
          const rwOn = rw ? !rw.wallsOn || rw.wallsOn[selected.side] !== false : true
          const toggleWall = () => {
            if (!rw) return
            const next = { ...(rw.wallsOn || {}), [selected.side]: !rwOn }
            dispatch({ type: 'update', sel: { type: 'room', uid: rw.uid }, patch: { wallsOn: next } })
            haptic(10)
            flash(rwOn ? 'Wall removed' : 'Wall added')
          }
          return (
            <ActionBar
              type={selected.type}
              wallOn={rwOn}
              onToggle={toggleWall}
              onRotate={() => { if (selected.type === 'item') { const it = items.find((i) => i.uid === selected.uid); dispatch({ type: 'update', sel: selected, patch: { rot: ((it?.rot || 0) + 90) % 360 } }); haptic(6) } }}
              onDup={() => { dispatch({ type: 'duplicate', sel: selected }); haptic(8); flash('Duplicated') }}
              onEdit={() => setSheet('inspector')}
              onDelete={() => { dispatch({ type: 'remove', sel: selected }); haptic(12); flash('Removed') }}
            />
          )
        })()}
      </main>

      <nav className="dock">
        <button className="pill accent" onClick={() => { dispatch({ type: 'select', sel: null }); setSheet('catalog') }}>
          <IconPlus size={19} /> Add Furniture
        </button>
        <button className="pill" onClick={() => setSheet('settings')}>
          <IconTune size={19} /> Settings
        </button>
      </nav>

      {toast && <div className="toast" key={toast.t}>{toast.msg}</div>}

      {sheet === 'catalog' && (
        <Sheet onClose={() => setSheet(null)}><Catalog onPick={addKind} /></Sheet>
      )}
      {sheet === 'settings' && (
        <Sheet onClose={() => setSheet(null)}><SettingsSheet onFlash={flash} onClose={() => setSheet(null)} /></Sheet>
      )}
      {sheet === 'inspector' && selected && (
        <Sheet onClose={() => setSheet(null)}><Inspector onClose={() => setSheet(null)} onFlash={flash} /></Sheet>
      )}
    </div>
  )
}

function ActionBar({ type, wallOn, onToggle, onRotate, onDup, onEdit, onDelete }) {
  if (type === 'roomwall') {
    return (
      <div className="fab-col">
        {wallOn
          ? <button className="fab" onClick={onToggle} aria-label="Delete wall" style={{ color: 'var(--danger)' }}><IconTrash size={20} /></button>
          : <button className="fab primary" onClick={onToggle} aria-label="Add wall"><IconPlus size={20} /></button>}
      </div>
    )
  }
  return (
    <div className="fab-col">
      {type === 'item' && <button className="fab" onClick={onRotate} aria-label="Rotate"><IconRotate size={20} /></button>}
      <button className="fab" onClick={onDup} aria-label="Duplicate"><IconCopy size={20} /></button>
      <button className="fab primary" onClick={onEdit} aria-label="Edit"><IconTune size={20} /></button>
      <button className="fab" onClick={onDelete} aria-label="Delete" style={{ color: 'var(--danger)' }}><IconTrash size={20} /></button>
    </div>
  )
}

function Sheet({ children, onClose }) {
  return (
    <>
      <div className="scrim" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true">
        <div className="grip" />
        {children}
      </div>
    </>
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
      ctx.fillStyle = '#13161c'
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
