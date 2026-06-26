import React, { useMemo, useState } from 'react'
import { CATALOG, CATEGORIES } from '../data/catalog.js'
import { useStore } from '../store.jsx'
import { formatLen } from '../util.js'
import Footprint from './Footprint.jsx'

function Thumb({ item }) {
  const box = { w: 86, h: 60 }
  const ar = item.w / item.d
  let wpx = box.w
  let dpx = wpx / ar
  if (dpx > box.h) {
    dpx = box.h
    wpx = dpx * ar
  }
  return (
    <svg viewBox="-50 -36 100 72" preserveAspectRatio="xMidYMid meet">
      <Footprint item={item} wpx={wpx} dpx={dpx} />
    </svg>
  )
}

export default function Catalog({ onPick }) {
  const { state } = useStore()
  const { units } = state
  const [cat, setCat] = useState('All')
  const cats = ['All', ...CATEGORIES]
  const list = useMemo(
    () => (cat === 'All' ? CATALOG : CATALOG.filter((c) => c.category === cat)),
    [cat]
  )

  return (
    <>
      <div className="sheet-head">
        <div>
          <h2>Furniture</h2>
          <div className="sub">{CATALOG.length} premium pieces · tap to place</div>
        </div>
      </div>

      <div className="cats">
        {cats.map((c) => (
          <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((item) => (
          <button key={item.type} className="card" onClick={() => onPick(item.type)}>
            <div className="thumb"><Thumb item={item} /></div>
            <div className="name">{item.name}</div>
            <div className="dim">{formatLen(item.w, units)} × {formatLen(item.d, units)}</div>
          </button>
        ))}
      </div>
    </>
  )
}
