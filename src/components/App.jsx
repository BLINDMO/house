import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from '../store.jsx'
import Editor2D from './Editor2D.jsx'
import Scene3D from './Scene3D.jsx'
import Catalog from './Catalog.jsx'
import Inspector from './Inspector.jsx'
import RoomSheet from './RoomSheet.jsx'
import {
  IconPlan, IconCube, IconPlus, IconRoom, IconRotate, IconCopy,
  IconTrash, IconTune,
} from './Icons.jsx'

export default function App() {
  const { state, dispatch } = useStore()
  const { view, selected, items } = state
  const [sheet, setSheet] = useState(null) // 'catalog' | 'room' | 'inspector'
  const [toast, setToast] = useState(null)

  const flash = useCallback((msg) => {
    setToast(msg)
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1600)
    return () => clearTimeout(t)
  }, [toast])

  const sel = items.find((i) => i.uid === selected) || null

  // Close any open contextual sheet if the selection disappears.
  useEffect(() => {
    if (sheet === 'inspector' && !sel) setSheet(null)
  }, [sheet, sel])

  const setView = (v) => dispatch({ type: 'view', view: v })

  const addKind = (kind) => {
    dispatch({ type: 'add', kind })
    setSheet(null)
    flash('Added — drag to position')
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
            <b>Atelier</b>
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
      </header>

      <main className="stage">
        {view === '2d' ? (
          <Editor2D
            onSelect={(uid) => dispatch({ type: 'select', uid })}
            onEdit={() => setSheet('inspector')}
          />
        ) : (
          <Scene3D />
        )}

        {items.length === 0 && (
          <div className="empty">
            <b>Your room is empty</b>
            <span>Tap “Add Furniture” to start designing</span>
          </div>
        )}

        {/* Contextual action bar for the selected piece */}
        {sel && (
          <ActionBar
            onRotate={() => dispatch({ type: 'update', uid: sel.uid, patch: { rot: ((sel.rot || 0) + 90) % 360 } })}
            onDup={() => { dispatch({ type: 'duplicate', uid: sel.uid }); flash('Duplicated') }}
            onEdit={() => setSheet('inspector')}
            onDelete={() => { dispatch({ type: 'remove', uid: sel.uid }); flash('Removed') }}
          />
        )}
      </main>

      <nav className="dock">
        <button className="pill accent" onClick={() => { dispatch({ type: 'select', uid: null }); setSheet('catalog') }}>
          <IconPlus size={19} /> Add Furniture
        </button>
        <button className="pill" onClick={() => setSheet('room')}>
          <IconRoom size={19} /> Room
        </button>
      </nav>

      {toast && <div className="toast">{toast}</div>}

      {sheet === 'catalog' && (
        <Sheet onClose={() => setSheet(null)}>
          <Catalog onPick={addKind} />
        </Sheet>
      )}
      {sheet === 'room' && (
        <Sheet onClose={() => setSheet(null)}>
          <RoomSheet onFlash={flash} onClose={() => setSheet(null)} />
        </Sheet>
      )}
      {sheet === 'inspector' && sel && (
        <Sheet onClose={() => setSheet(null)}>
          <Inspector item={sel} onClose={() => setSheet(null)} onFlash={flash} />
        </Sheet>
      )}
    </div>
  )
}

function ActionBar({ onRotate, onDup, onEdit, onDelete }) {
  return (
    <div className="fab-col" style={{ bottom: 'calc(var(--safe-bottom) + 92px)' }}>
      <button className="fab" onClick={onRotate} aria-label="Rotate"><IconRotate size={20} /></button>
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
