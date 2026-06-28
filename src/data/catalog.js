// Preloaded, fully parametric furniture catalog.
// Dimensions are in metres: w = width (x), d = depth (z), h = height (y).
// Everything renders procedurally in both 2D (top-down) and 3D — no asset files.

export const CATEGORIES = [
  'Seating',
  'Tables',
  'Bedroom',
  'Storage',
  'Kitchen',
  'Appliances',
  'Bathroom',
  'Office',
  'Decor',
]

export const CATALOG = [
  // ---------- Seating ----------
  { type: 'sofa', name: 'Sofa', category: 'Seating', w: 2.1, d: 0.92, h: 0.82, color: '#9aa3af', shape: 'seat' },
  { type: 'loveseat', name: 'Loveseat', category: 'Seating', w: 1.5, d: 0.92, h: 0.82, color: '#b1937a', shape: 'seat' },
  { type: 'armchair', name: 'Armchair', category: 'Seating', w: 0.88, d: 0.9, h: 0.82, color: '#7d8aa0', shape: 'seat' },
  { type: 'dining-chair', name: 'Chair', category: 'Seating', w: 0.5, d: 0.54, h: 0.9, color: '#caa472', shape: 'chair' },
  { type: 'bench', name: 'Bench', category: 'Seating', w: 1.2, d: 0.42, h: 0.46, color: '#a98c6a', shape: 'bench' },
  { type: 'stool', name: 'Stool', category: 'Seating', w: 0.42, d: 0.42, h: 0.62, color: '#8a7256', shape: 'round' },
  { type: 'pouf', name: 'Pouf', category: 'Seating', w: 0.5, d: 0.5, h: 0.4, color: '#b6855f', shape: 'pouf' },

  // ---------- Tables ----------
  { type: 'coffee-table', name: 'Coffee Table', category: 'Tables', w: 1.1, d: 0.6, h: 0.42, color: '#7a5c41', shape: 'table' },
  { type: 'dining-table', name: 'Dining Table', category: 'Tables', w: 1.7, d: 0.95, h: 0.75, color: '#6f4f37', shape: 'table' },
  { type: 'round-table', name: 'Round Table', category: 'Tables', w: 1.15, d: 1.15, h: 0.75, color: '#6f4f37', shape: 'round-table' },
  { type: 'side-table', name: 'Side Table', category: 'Tables', w: 0.5, d: 0.5, h: 0.55, color: '#7a5c41', shape: 'table' },
  { type: 'desk', name: 'Desk', category: 'Tables', w: 1.4, d: 0.7, h: 0.75, color: '#5d5a55', shape: 'desk' },

  // ---------- Bedroom ----------
  { type: 'bed-double', name: 'Double Bed', category: 'Bedroom', w: 1.6, d: 2.05, h: 0.55, color: '#c9c2b6', shape: 'bed' },
  { type: 'bed-single', name: 'Single Bed', category: 'Bedroom', w: 1.0, d: 2.05, h: 0.55, color: '#c9c2b6', shape: 'bed' },
  { type: 'nightstand', name: 'Nightstand', category: 'Bedroom', w: 0.46, d: 0.4, h: 0.5, color: '#7a5c41', shape: 'cabinet' },
  { type: 'wardrobe', name: 'Wardrobe', category: 'Bedroom', w: 1.2, d: 0.6, h: 2.0, color: '#5f534a', shape: 'wardrobe' },
  { type: 'dresser', name: 'Dresser', category: 'Bedroom', w: 1.0, d: 0.5, h: 0.82, color: '#6b5946', shape: 'drawers' },

  // ---------- Storage ----------
  { type: 'bookshelf', name: 'Bookshelf', category: 'Storage', w: 0.9, d: 0.34, h: 1.8, color: '#6b5946', shape: 'shelf' },
  { type: 'tv-unit', name: 'TV Unit', category: 'Storage', w: 1.7, d: 0.4, h: 0.48, color: '#3f4148', shape: 'drawers' },
  { type: 'tv', name: 'TV', category: 'Storage', w: 1.25, d: 0.08, h: 0.72, color: '#15171b', shape: 'tv' },
  { type: 'cabinet', name: 'Cabinet', category: 'Storage', w: 0.9, d: 0.45, h: 0.92, color: '#5f534a', shape: 'cabinet' },
  { type: 'ladder-shelf', name: 'Ladder Shelf', category: 'Storage', w: 0.6, d: 0.4, h: 1.7, color: '#9a6f43', shape: 'ladder' },

  // ---------- Decor ----------
  { type: 'rug', name: 'Rug', category: 'Decor', w: 2.2, d: 1.5, h: 0.02, color: '#94604f', shape: 'rug' },
  { type: 'round-rug', name: 'Round Rug', category: 'Decor', w: 1.6, d: 1.6, h: 0.02, color: '#4f6b73', shape: 'round-rug' },
  { type: 'plant', name: 'Plant', category: 'Decor', w: 0.5, d: 0.5, h: 1.3, color: '#3f7a4f', shape: 'plant' },
  { type: 'floor-lamp', name: 'Floor Lamp', category: 'Decor', w: 0.4, d: 0.4, h: 1.6, color: '#e8d8a8', shape: 'lamp' },
  { type: 'fireplace', name: 'Fireplace', category: 'Decor', w: 1.3, d: 0.4, h: 1.1, color: '#cfcabf', shape: 'fireplace' },
  { type: 'floor-mirror', name: 'Floor Mirror', category: 'Decor', w: 0.7, d: 0.06, h: 1.7, color: '#caa86a', shape: 'mirror' },
  { type: 'bar-cart', name: 'Bar Cart', category: 'Decor', w: 0.7, d: 0.42, h: 0.8, color: '#b8923f', shape: 'barcart' },
  { type: 'piano', name: 'Upright Piano', category: 'Decor', w: 1.5, d: 0.6, h: 1.2, color: '#161616', shape: 'piano' },
  { type: 'coat-rack', name: 'Coat Rack', category: 'Decor', w: 0.5, d: 0.5, h: 1.75, color: '#5a4636', shape: 'coatrack' },
  { type: 'floor-vase', name: 'Floor Vase', category: 'Decor', w: 0.32, d: 0.32, h: 0.85, color: '#9a8f7a', shape: 'vase' },

  // ---------- Kitchen ----------
  { type: 'fridge', name: 'Fridge', category: 'Kitchen', w: 0.72, d: 0.7, h: 1.85, color: '#cfd4da', shape: 'fridge' },
  { type: 'counter', name: 'Counter', category: 'Kitchen', w: 1.2, d: 0.6, h: 0.9, color: '#8e8e8e', shape: 'counter' },
  { type: 'island', name: 'Kitchen Island', category: 'Kitchen', w: 1.4, d: 0.9, h: 0.9, color: '#7d7f83', shape: 'counter' },
  { type: 'range', name: 'Range', category: 'Kitchen', w: 0.6, d: 0.62, h: 0.9, color: '#4a4d52', shape: 'range' },
  { type: 'oven', name: 'Stove / Oven', category: 'Kitchen', w: 0.6, d: 0.62, h: 0.9, color: '#d3d7dc', shape: 'oven' },
  { type: 'sink', name: 'Kitchen Sink', category: 'Kitchen', w: 0.85, d: 0.6, h: 0.9, color: '#7a5c41', shape: 'sink' },
  { type: 'dishwasher', name: 'Dishwasher', category: 'Kitchen', w: 0.6, d: 0.6, h: 0.85, color: '#cfd4da', shape: 'appliance' },

  // ---------- Appliances ----------
  { type: 'washer', name: 'Washing Machine', category: 'Appliances', w: 0.6, d: 0.62, h: 0.85, color: '#e8eaec', shape: 'washer' },
  { type: 'dryer', name: 'Dryer', category: 'Appliances', w: 0.6, d: 0.62, h: 0.85, color: '#dfe2e5', shape: 'washer' },
  { type: 'chest-freezer', name: 'Chest Freezer', category: 'Appliances', w: 1.0, d: 0.6, h: 0.85, color: '#e2e6ea', shape: 'appliance' },
  { type: 'water-heater', name: 'Water Heater', category: 'Appliances', w: 0.55, d: 0.55, h: 1.5, color: '#d9dde1', shape: 'fridge' },
  { type: 'ac-unit', name: 'AC Unit', category: 'Appliances', w: 0.5, d: 0.5, h: 0.7, color: '#cfd4da', shape: 'appliance' },

  // ---------- Bathroom ----------
  { type: 'toilet', name: 'Toilet', category: 'Bathroom', w: 0.4, d: 0.68, h: 0.78, color: '#f2f2f0', shape: 'toilet' },
  { type: 'bathtub', name: 'Bathtub', category: 'Bathroom', w: 1.7, d: 0.75, h: 0.56, color: '#f3f3f1', shape: 'bathtub' },
  { type: 'shower', name: 'Shower', category: 'Bathroom', w: 0.9, d: 0.9, h: 2.0, color: '#e8e8e6', shape: 'shower' },
  { type: 'vanity', name: 'Vanity', category: 'Bathroom', w: 0.8, d: 0.5, h: 0.85, color: '#6f5a45', shape: 'sink' },

  // ---------- Office ----------
  { type: 'office-chair', name: 'Office Chair', category: 'Office', w: 0.6, d: 0.6, h: 1.1, color: '#3a3a40', shape: 'chair' },
  { type: 'filing-cabinet', name: 'Filing Cabinet', category: 'Office', w: 0.45, d: 0.6, h: 1.32, color: '#6b6f74', shape: 'drawers' },
  { type: 'office-desk', name: 'Office Desk', category: 'Office', w: 1.5, d: 0.75, h: 0.75, color: '#5d5a55', shape: 'desk' },
]

export const CATALOG_BY_TYPE = Object.fromEntries(CATALOG.map((c) => [c.type, c]))

// Definition lookup for a placed piece (all pieces are procedural).
export function defFor(type) {
  return CATALOG_BY_TYPE[type] || null
}

// A few tasteful recolour options shown in the inspector.
export const PALETTE = [
  '#9aa3af', '#7d8aa0', '#5b6472', '#c9c2b6',
  '#b1937a', '#a98c6a', '#7a5c41', '#5f534a',
  '#94604f', '#caa472', '#4f6b73', '#3f7a4f',
  '#d9b779', '#15171b', '#cfd4da',
]
