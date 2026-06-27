import React from 'react'
import { useStore } from '../store.jsx'
import { wallGeometry, listWalls, refEq } from '../wall.js'
import Catalog from './Catalog.jsx'
import Inspector from './Inspector.jsx'
import SettingsSheet from './RoomSheet.jsx'
import { PRESETS, buildPreset } from './ElevationEditor.jsx'

function PresetsPanel({ onClose, onFlash }) {
  const { state, dispatch } = useStore()
  const { rooms, walls, sideWall } = state
  const list = listWalls(rooms, walls)
  const ref = (sideWall && list.find((l) => refEq(l.ref, sideWall))?.ref) || list[0]?.ref
  const geom = ref ? wallGeometry(ref, rooms, walls) : null
  const label = ref ? list.find((l) => refEq(l.ref, ref))?.label : null

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Presets</h2>
          <div className="sub">{geom ? `Drop a kit onto ${label}` : 'Draw a room or wall first'}</div>
        </div>
      </div>
      <div className="insp">
        {!geom && <div className="panel-empty">Go to the Plan view and draw a room or wall, then come back to drop in cabinetry, a bunk bed and more.</div>}
        {geom && (
          <div className="preset-list">
            {PRESETS.map((p) => (
              <button key={p.id} className="preset-card" onClick={() => { dispatch({ type: 'addBuiltins', list: buildPreset(p.id, geom, ref) }); onFlash?.(`Added ${p.name}`); onClose() }}>
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

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
        {kind === 'presets' && <PresetsPanel onClose={onClose} onFlash={onFlash} />}
      </div>
    </aside>
  )
}
