import React, { useMemo, useState } from 'react'
import { CATALOG } from '../data/catalog.js'
import Footprint from './Footprint.jsx'

// Built-in procedural furniture library — everything renders from code (no
// asset downloads), so pieces are fully movable, scalable and recolourable.
const LIBRARY = CATALOG.map((c) => ({ key: c.type, type: c.type, name: c.name, category: c.category, proc: c }))
const CAT_ORDER = ['Seating', 'Tables', 'Bedroom', 'Storage', 'Kitchen', 'Appliances', 'Bathroom', 'Office', 'Decor']
const CATS = ['All', ...CAT_ORDER.filter((c) => LIBRARY.some((i) => i.category === c))]

function ProcThumb({ item }) {
  const ar = item.w / item.d
  let wpx = 86
  let dpx = wpx / ar
  if (dpx > 60) { dpx = 60; wpx = dpx * ar }
  return (
    <svg viewBox="-50 -36 100 72" preserveAspectRatio="xMidYMid meet">
      <Footprint item={item} wpx={wpx} dpx={dpx} />
    </svg>
  )
}

export default function Catalog({ onPick }) {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const query = q.trim().toLowerCase()
    return LIBRARY.filter((i) =>
      (cat === 'All' || i.category === cat) &&
      (!query || i.name.toLowerCase().includes(query))
    )
  }, [cat, q])

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Library</h2>
          <div className="sub">{LIBRARY.length} pieces · tap to place</div>
        </div>
      </div>

      <div className="lib-search">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search furniture, appliances…" aria-label="Search library" />
      </div>

      <div className="cats">
        {CATS.map((c) => (
          <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>

      <div className="lib-grid">
        {list.map((item) => (
          <button key={item.key} className="lib-card" onClick={() => onPick(item.type)} title={item.name}>
            <div className="lib-thumb">
              <ProcThumb item={item.proc} />
            </div>
            <div className="lib-name">{item.name}</div>
          </button>
        ))}
        {list.length === 0 && <div className="panel-empty">No matches for “{q}”.</div>}
      </div>
    </>
  )
}
