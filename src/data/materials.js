// Real CC0 PBR materials from Poly Haven (polyhaven.com), downscaled to 512px
// and bundled into /public/textures so the app stays fully offline-capable.
// Each entry: { id, label, group, color (avg, for 2D + fallback), normal, repeat }
// `repeat` is the real-world tile size in metres (texture covers `repeat` m).
export const MATERIALS = [
  { id: 'oak_floor',   label: 'Oak Floor',    group: 'Wood',    color: '#806042', normal: true,  repeat: 1.4 },
  { id: 'wood_floor',  label: 'Wood Plank',   group: 'Wood',    color: '#7a5c3e', normal: false, repeat: 1.4 },
  { id: 'light_oak',   label: 'Light Oak',    group: 'Wood',    color: '#a17e58', normal: true,  repeat: 1.0 },
  { id: 'walnut',      label: 'Walnut',       group: 'Wood',    color: '#3e190b', normal: true,  repeat: 1.0 },
  { id: 'parquet',     label: 'Parquet',      group: 'Wood',    color: '#93704d', normal: true,  repeat: 1.2 },
  { id: 'herringbone', label: 'Herringbone',  group: 'Wood',    color: '#9a7550', normal: false, repeat: 1.0 },
  { id: 'dark_wood',   label: 'Dark Plank',   group: 'Wood',    color: '#4a3526', normal: false, repeat: 1.3 },
  { id: 'marble',     label: 'Marble',      group: 'Stone',  color: '#b29d7a', normal: true,  repeat: 2.0 },
  { id: 'granite',    label: 'Granite',     group: 'Stone',  color: '#4e4e4f', normal: false, repeat: 1.6 },
  { id: 'floor_tile', label: 'Floor Tile',  group: 'Tile',   color: '#796f6b', normal: true,  repeat: 1.2 },
  { id: 'patterned_tile', label: 'Patterned Tile', group: 'Tile', color: '#8a8077', normal: false, repeat: 1.0 },
  { id: 'brick',      label: 'Brick',       group: 'Masonry',color: '#8e6750', normal: true,  repeat: 1.6 },
  { id: 'concrete',   label: 'Concrete',    group: 'Masonry',color: '#565654', normal: true,  repeat: 2.2 },
  { id: 'plaster',     label: 'Plaster',      group: 'Wall',    color: '#b0a89d', normal: true,  repeat: 2.4 },
  { id: 'grey_plaster',label: 'Grey Plaster', group: 'Wall',    color: '#9a968f', normal: false, repeat: 2.4 },
  { id: 'beige_wall',  label: 'Beige Wall',   group: 'Wall',    color: '#cabfa9', normal: false, repeat: 2.6 },
  { id: 'fabric',      label: 'Fabric',       group: 'Soft',    color: '#9a5955', normal: true,  repeat: 0.8 },
  { id: 'carpet',      label: 'Carpet',       group: 'Soft',    color: '#352f25', normal: false, repeat: 1.5 },
  { id: 'grass',       label: 'Grass',        group: 'Outdoor', color: '#5f7d3f', normal: false, repeat: 1.5 },
]

export const MATERIAL_BY_ID = Object.fromEntries(MATERIALS.map((m) => [m.id, m]))

// Resolve a bundled-material id to its served URL (respects the PWA base path).
export const matUrl = (id, normal = false) =>
  `${import.meta.env.BASE_URL}textures/${id}${normal ? '_n' : ''}.jpg`

// The interior HDRI used for image-based lighting (Poly Haven CC0).
export const HDRI_URL = `${import.meta.env.BASE_URL}hdri/studio.hdr`
