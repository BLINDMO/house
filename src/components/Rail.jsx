import React from 'react'
import { useStore } from '../store.jsx'
import {
  IconCursor, IconSquare, IconWall, IconPlus, IconTune, IconSun,
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
  const { view, tool, ambiance } = state

  return (
    <aside className="rail">
      <div className="rail-group">
        {view === '2d' && (
          <>
            <RailBtn icon={<IconCursor size={20} />} label="Select" active={tool === 'select'} onClick={() => dispatch({ type: 'tool', tool: 'select' })} />
            <RailBtn icon={<IconSquare size={20} />} label="Room" active={tool === 'room'} onClick={() => dispatch({ type: 'tool', tool: 'room' })} />
            <RailBtn icon={<IconWall size={20} />} label="Wall" active={tool === 'wall'} onClick={() => dispatch({ type: 'tool', tool: 'wall' })} />
          </>
        )}
        {view === '3d' && (
          <>
            {['day', 'night'].map((a) => (
              <RailBtn key={a} icon={<IconSun size={20} />} label={a[0].toUpperCase() + a.slice(1)} active={ambiance === a} onClick={() => dispatch({ type: 'ambiance', value: a })} />
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
