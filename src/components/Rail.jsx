import React from 'react'
import { useStore } from '../store.jsx'
import {
  IconCursor, IconSquare, IconWall, IconPlus, IconTune, IconSun, IconDoor,
} from './Icons.jsx'

function RailBtn({ icon, label, active, accent, onClick }) {
  return (
    <button className={`rail-btn ${active ? 'active' : ''} ${accent ? 'accent' : ''}`} onClick={onClick} title={label}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default function Rail({ onOpen, activePanel }) {
  const { state, dispatch } = useStore()
  const { view, tool, ambiance, openingMode, openShape } = state
  const SHAPES = [['rect', 'Rect'], ['arch', 'Arch'], ['round', 'Round'], ['star', 'Star']]

  return (
    <aside className="rail">
      <div className="rail-group">
        {view === '2d' && (
          <>
            <RailBtn icon={<IconCursor size={24} />} label="Select" active={tool === 'select'} onClick={() => dispatch({ type: 'tool', tool: 'select' })} />
            <RailBtn icon={<IconSquare size={24} />} label="Room" active={tool === 'room'} onClick={() => dispatch({ type: 'tool', tool: 'room' })} />
            <RailBtn icon={<IconWall size={24} />} label="Wall" active={tool === 'wall'} onClick={() => dispatch({ type: 'tool', tool: 'wall' })} />
          </>
        )}
        {view === '3d' && (
          <>
            <RailBtn icon={<IconCursor size={24} />} label="Select" active={!openingMode} onClick={() => dispatch({ type: 'openingMode', value: false })} />
            <RailBtn icon={<IconDoor size={24} />} label="Opening" active={openingMode} onClick={() => dispatch({ type: 'openingMode', value: !openingMode })} />
            {openingMode && (
              <div className="rail-shapes">
                {SHAPES.map(([s, lbl]) => (
                  <button key={s} className={`rail-shape ${(openShape || 'rect') === s ? 'active' : ''}`}
                    onClick={() => dispatch({ type: 'openShape', value: s })}>{lbl}</button>
                ))}
              </div>
            )}
            <div className="rail-sep" />
            {['day', 'night'].map((a) => (
              <RailBtn key={a} icon={<IconSun size={24} />} label={a[0].toUpperCase() + a.slice(1)} active={ambiance === a} onClick={() => dispatch({ type: 'ambiance', value: a })} />
            ))}
          </>
        )}
      </div>

      <div className="rail-group bottom">
        <RailBtn icon={<IconPlus size={22} />} label="Add" accent active={activePanel === 'catalog'} onClick={() => onOpen('catalog')} />
        <RailBtn icon={<IconTune size={20} />} label="Settings" active={activePanel === 'settings'} onClick={() => onOpen('settings')} />
      </div>
    </aside>
  )
}
