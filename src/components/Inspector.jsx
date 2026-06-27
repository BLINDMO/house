import React from 'react'
import { useStore } from '../store.jsx'
import { CATALOG_BY_TYPE } from '../data/catalog.js'
import { effDims, formatLen } from '../util.js'
import { IconRotate, IconCopy, IconTrash } from './Icons.jsx'
import FinishPicker from './FinishPicker.jsx'

function Slider({ label, value, min, max, step, onChange, display }) {
  return (
    <div className="row">
      <div className="label">{label}</div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
      <div className="val" style={{ width: 64, textAlign: 'right' }}>{display}</div>
    </div>
  )
}

// Precise length control: type exact feet + inches (or metres) — down to the inch.
function MeasureRow({ label, m, min, max, units, onChange }) {
  const clamp = (v) => Math.max(min, Math.min(max, v))
  const totIn = m / 0.0254
  const ft = Math.floor(totIn / 12 + 1e-6)
  const inRem = Math.round((totIn - ft * 12) * 100) / 100
  const fromFtIn = (f, i) => onChange(clamp((f * 12 + i) * 0.0254))
  return (
    <div className="row measure-row">
      <div className="measure-head">
        <div className="label">{label}</div>
        <div className="measure-inputs">
          {units === 'ft' ? (
            <>
              <input type="number" value={ft} min={0} step={1}
                onChange={(e) => fromFtIn(Math.max(0, Math.floor(Number(e.target.value) || 0)), inRem)} />
              <span className="u">ft</span>
              <input type="number" value={inRem} min={0} max={11.99} step={0.25}
                onChange={(e) => fromFtIn(ft, Number(e.target.value) || 0)} />
              <span className="u">in</span>
            </>
          ) : (
            <>
              <input type="number" value={Number(m.toFixed(3))} min={min} max={max} step={0.01}
                onChange={(e) => onChange(clamp(Number(e.target.value) || min))} />
              <span className="u">m</span>
            </>
          )}
        </div>
      </div>
      <input className="measure-slider" type="range" min={min} max={max} step={0.0254}
        value={m} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  )
}

export default function Inspector({ onClose, onFlash }) {
  const { state, dispatch } = useStore()
  const { selected, units, items, rooms, walls, builtins } = state
  if (!selected) return null

  const sel = selected
  const set = (patch, mergeKey) => dispatch({ type: 'update', sel, patch, mergeKey })
  const del = () => { dispatch({ type: 'remove', sel }); onFlash?.('Removed'); onClose() }
  const dup = () => { dispatch({ type: 'duplicate', sel }); onFlash?.('Duplicated'); onClose() }

  if (sel.type === 'roomwall') {
    const room = rooms.find((r) => r.uid === sel.uid)
    if (!room) return null
    const names = { n: 'North', e: 'East', s: 'South', w: 'West' }
    const on = !room.wallsOn || room.wallsOn[sel.side] !== false
    const toggle = () => dispatch({ type: 'update', sel: { type: 'room', uid: room.uid }, patch: { wallsOn: { ...(room.wallsOn || {}), [sel.side]: !on } } })
    return (
      <>
        <Head title="Wall section" sub={`${names[sel.side]} wall of this room`} />
        <div className="insp">
          <div className="row"><div className="label">Status</div><div className="val">{on ? 'Closed' : 'Open (doorway)'}</div></div>
          <div className="btn-row">
            {on
              ? <button className="btn danger" onClick={toggle}><IconTrash size={18} /> Remove wall</button>
              : <button className="btn accent" onClick={toggle}>Add wall back</button>}
          </div>
        </div>
      </>
    )
  }

  if (sel.type === 'item') {
    const item = items.find((i) => i.uid === sel.uid)
    const c = item && CATALOG_BY_TYPE[item.type]
    if (!item || !c) return null
    const dim = effDims(c, item)
    const s = item.scale || {}
    const avg = Math.round((((s.x ?? 1) + (s.z ?? 1)) / 2) * 100)
    return (
      <>
        <Head title={c.name} sub={`${formatLen(dim.w, units)} × ${formatLen(dim.d, units)} × ${formatLen(dim.h, units)}`} onClose={onClose} />
        <div className="insp">
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="label">Colour</div>
            <div style={{ marginLeft: 'auto', maxWidth: '74%' }}>
              <FinishPicker value={{ color: item.color || c.color }} allowTexture={false} onChange={(f) => set({ color: f.color })} />
            </div>
          </div>
          <Slider label="Size" value={avg} min={30} max={300} step={1}
            onChange={(v) => set({ scale: { x: v / 100, y: v / 100, z: v / 100 } }, `sz:${item.uid}`)} display={`${avg}%`} />
          <div className="row"><div className="label">Footprint</div><div className="val">{formatLen(dim.w, units)} × {formatLen(dim.d, units)}</div></div>
          <Slider label="Rotation" value={item.rot || 0} min={0} max={359} step={1}
            onChange={(v) => set({ rot: v }, `rot:${item.uid}`)} display={`${Math.round(item.rot || 0)}°`} />
          <div className="row">
            <div className="label">Quick turn</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              {[0, 90, 180, 270].map((deg) => (
                <button key={deg} className="chip" style={(item.rot || 0) === deg ? activeChip : undefined} onClick={() => set({ rot: deg })}>{deg}°</button>
              ))}
            </div>
          </div>
          <div className="btn-row">
            <button className="btn" onClick={() => set({ rot: ((item.rot || 0) + 90) % 360 })}><IconRotate size={18} /> Rotate</button>
            <button className="btn" onClick={dup}><IconCopy size={18} /> Duplicate</button>
          </div>
          <div className="btn-row">
            <button className="btn" onClick={() => set({ scale: { x: 1, y: 1, z: 1 } })}>Reset size</button>
            <button className="btn danger" onClick={del}><IconTrash size={18} /> Delete</button>
          </div>
        </div>
      </>
    )
  }

  if (sel.type === 'room') {
    const room = rooms.find((r) => r.uid === sel.uid)
    if (!room) return null
    const area = room.w * room.d
    return (
      <>
        <Head title="Room" sub={`${formatLen(room.w, units)} × ${formatLen(room.d, units)}`} onClose={onClose} />
        <div className="insp">
          <MeasureRow label="Width" m={room.w} min={0.5} max={40} units={units} onChange={(v) => set({ w: v }, `rw:${room.uid}`)} />
          <MeasureRow label="Depth" m={room.d} min={0.5} max={40} units={units} onChange={(v) => set({ d: v }, `rd:${room.uid}`)} />
          <MeasureRow label="Wall height" m={room.height} min={1.5} max={6} units={units} onChange={(v) => set({ height: v }, `rh:${room.uid}`)} />
          <div className="row"><div className="label">Floor area</div><div className="val">{units === 'm' ? `${area.toFixed(1)} m²` : `${Math.round(area * 10.7639)} ft²`}</div></div>
          <div className="row">
            <div className="label">Wall sides</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              {[['n', 'N'], ['e', 'E'], ['s', 'S'], ['w', 'W']].map(([side, lbl]) => {
                const on = !room.wallsOn || room.wallsOn[side] !== false
                return (
                  <button key={side} className="chip" style={on ? activeChip : undefined}
                    onClick={() => set({ wallsOn: { ...(room.wallsOn || {}), [side]: !on } })}>{lbl}</button>
                )
              })}
            </div>
          </div>
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="label">Flooring</div>
            <div style={{ marginLeft: 'auto', maxWidth: '74%' }}>
              <FinishPicker value={{ color: room.floorColor, tex: room.floorTex }} onChange={(f) => set({ floorColor: f.color, floorTex: f.tex })} />
            </div>
          </div>
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="label">Wall finish</div>
            <div style={{ marginLeft: 'auto', maxWidth: '74%' }}>
              <FinishPicker value={{ color: room.wallColor, tex: room.wallTex }} onChange={(f) => set({ wallColor: f.color, wallTex: f.tex })} />
            </div>
          </div>
          <div className="btn-row">
            <button className="btn" onClick={dup}><IconCopy size={18} /> Duplicate</button>
            <button className="btn danger" onClick={del}><IconTrash size={18} /> Delete</button>
          </div>
        </div>
      </>
    )
  }

  if (sel.type === 'builtin') {
    const b = builtins.find((o) => o.uid === sel.uid)
    if (!b) return null
    if (b.kind === 'board') {
      const len = Math.hypot(b.u2 - b.u1, b.v2 - b.v1)
      return (
        <>
          <Head title="Board" sub={`${formatLen(len, units)} long`} onClose={onClose} />
          <div className="insp">
            <div className="row"><div className="label">Length</div><div className="val">{formatLen(len, units)}</div></div>
            <Slider label="Width" value={b.thickness} min={0.01} max={0.4} step={0.005} onChange={(v) => set({ thickness: v }, `bt:${b.uid}`)} display={formatLen(b.thickness, units)} />
            <Slider label="Depth" value={b.depth} min={0.02} max={0.6} step={0.01} onChange={(v) => set({ depth: v }, `bd:${b.uid}`)} display={formatLen(b.depth, units)} />
            <div className="row" style={{ alignItems: 'flex-start' }}>
              <div className="label">Finish</div>
              <div style={{ marginLeft: 'auto', maxWidth: '74%' }}>
                <FinishPicker value={{ color: b.color, tex: b.tex }} onChange={(f) => set({ color: f.color, tex: f.tex })} />
              </div>
            </div>
            <div className="btn-row">
              <button className="btn" onClick={dup}><IconCopy size={18} /> Duplicate</button>
              <button className="btn danger" onClick={del}><IconTrash size={18} /> Delete</button>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <Head title="Built-in" sub={`${formatLen(b.w, units)} × ${formatLen(b.h, units)} × ${formatLen(b.depth, units)} deep`} onClose={onClose} />
        <div className="insp">
          <div className="row">
            <div className="label">Style</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              {[['cubby', 'Open cubby'], ['panel', 'Solid panel']].map(([k, lbl]) => (
                <button key={k} className="chip" style={b.kind === k ? activeChip : undefined} onClick={() => set({ kind: k })}>{lbl}</button>
              ))}
            </div>
          </div>
          <Slider label="Width" value={b.w} min={0.1} max={12} step={0.05} onChange={(v) => set({ w: v }, `bw:${b.uid}`)} display={formatLen(b.w, units)} />
          <Slider label="Height" value={b.h} min={0.1} max={6} step={0.05} onChange={(v) => set({ h: v }, `bh:${b.uid}`)} display={formatLen(b.h, units)} />
          <Slider label="Depth" value={b.depth} min={0.05} max={3} step={0.05} onChange={(v) => set({ depth: v }, `bd:${b.uid}`)} display={formatLen(b.depth, units)} />
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="label">Finish</div>
            <div style={{ marginLeft: 'auto', maxWidth: '74%' }}>
              <FinishPicker value={{ color: b.color, tex: b.tex }} onChange={(f) => set({ color: f.color, tex: f.tex })} />
            </div>
          </div>
          <div className="btn-row">
            <button className="btn" onClick={dup}><IconCopy size={18} /> Duplicate</button>
            <button className="btn danger" onClick={del}><IconTrash size={18} /> Delete</button>
          </div>
        </div>
      </>
    )
  }

  // wall
  const wall = walls.find((w) => w.uid === sel.uid)
  if (!wall) return null
  const len = Math.hypot(wall.x2 - wall.x1, wall.z2 - wall.z1)
  return (
    <>
      <Head title="Wall" sub={`${formatLen(len, units)} long`} onClose={onClose} />
      <div className="insp">
        <div className="row"><div className="label">Length</div><div className="val">{formatLen(len, units)}</div></div>
        <Slider label="Height" value={wall.height} min={1.5} max={6} step={0.1} onChange={(v) => set({ height: v }, `wh:${wall.uid}`)} display={formatLen(wall.height, units)} />
        <Slider label="Thickness" value={wall.thickness} min={0.05} max={0.4} step={0.01} onChange={(v) => set({ thickness: v }, `wt:${wall.uid}`)} display={formatLen(wall.thickness, units)} />
        <div className="btn-row">
          <button className="btn" onClick={dup}><IconCopy size={18} /> Duplicate</button>
          <button className="btn danger" onClick={del}><IconTrash size={18} /> Delete</button>
        </div>
      </div>
    </>
  )
}

const activeChip = { color: 'var(--accent)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }

function Head({ title, sub }) {
  return (
    <div className="sheet-head">
      <div>
        <h2>{title}</h2>
        <div className="sub">{sub}</div>
      </div>
    </div>
  )
}
