import React from 'react'
import Catalog from './Catalog.jsx'
import Inspector from './Inspector.jsx'
import SettingsSheet from './RoomSheet.jsx'

export default function Panel({ kind, onClose, onFlash, onPick }) {
  return (
    <aside className="panel">
      <button className="panel-close" onClick={onClose} aria-label="Close panel">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
      <div className="panel-body">
        {kind === 'catalog' && <Catalog onPick={onPick} />}
        {kind === 'settings' && <SettingsSheet onFlash={onFlash} onClose={onClose} />}
        {kind === 'inspector' && <Inspector onClose={onClose} onFlash={onFlash} />}
      </div>
    </aside>
  )
}
