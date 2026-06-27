# Honeycutt Room Studio

A premium, installable **PWA** for drawing rooms and walls and designing them in **2D and 3D**.

**Landscape-only**, with a desktop-style studio layout: a left tool rail, a centered canvas, and a right properties panel that opens on selection (portrait shows a rotate prompt). The 3D view uses post-processing (ambient occlusion + anti-aliasing) for richer renders.

![Honeycutt Room Studio](public/icon-192.png)

## Features

- **Start from a blank canvas** — an infinite, pannable/pinch-zoomable grid. Nothing is preset.
- **Draw rooms & walls** — the **Room** tool drags out a rectangular room; the **Wall** tool draws standalone partition walls. Everything snaps to a grid.
- **Adjustable wall height** — set a default for new rooms/walls in Settings, or select any room/wall and change its height (and thickness) individually.
- **Drag to arrange anywhere** — move any piece with a finger, in or out of a room (no clamping); rotate, duplicate, recolour, or delete from the contextual controls.
- **Click-and-drag resizing** — select a piece and pull its corner handles; a live badge shows the footprint in feet (toggle to metres in Settings).
- **Side (elevation) view** — pick any wall and design built-ins against it: drag out boxes / open cubbies, draw individual **wood boards** with the Board tool, or drop a **preset** (bunk bed, base & upper cabinets, cubby wall, wardrobe). A floor line and height ruler keep it readable; everything appears in 3D.
- **Custom finishes & assets** — solid colors, a custom color picker, procedural **wood** finishes (oak / walnut / birch / grey), and **your own uploaded images** (download a free wood/flooring/wallpaper texture and plug it in). Apply finishes to flooring, walls, built-ins and furniture. Uploads are stored locally (IndexedDB) so they persist offline.
- **Clean room joins** — rooms snap to each other's edges and share wall lines, so adjacent rooms meet cleanly.
- **One-tap 3D view** — the same plan rendered as real 3D rooms with wood floors, soft shadows, and walls that auto-hide so you can always see inside. Orbit, pan and pinch-zoom.
- **Easy 3D rotation** — a drag-to-rotate ring gizmo appears around the selected piece.
- **Ambiance** — Day / Dusk / Night lighting presets.
- **27 preloaded pieces** — sofas, beds, tables, storage, plants, lighting, kitchen and more. Everything is **procedurally generated**, so there are no asset downloads and the app works fully **offline**.
- **Undo/redo, image export/share, auto-save, installable** — a premium dark champagne-gold, touch-first UI.

## Tech

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Three.js](https://threejs.org/) for the 3D scene (PBR environment lighting, PCF soft shadows)
- SVG for the 2D editor (shared vector renderer with the catalog so a piece looks identical everywhere)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (Workbox) for the manifest + offline service worker

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build (installable PWA)
```

App icons are generated with a tiny zero-dependency script:

```bash
node scripts/generateIcons.mjs
```

## Deploy (GitHub Pages, no Actions required)

The production site is built into the committed `docs/` folder so it can be served
directly by GitHub Pages' "deploy from a branch" mode:

```bash
npm run build:pages   # builds the static site into ./docs (with .nojekyll)
```

Then, once in the repo settings: **Settings → Pages → Build and deployment →
Source: _Deploy from a branch_ → Branch: `claude/room-design-pwa-qxojfo` / `/docs`**.
The site will be served at `https://<owner>.github.io/house/`. Because the build
uses relative asset paths, it works correctly under that sub-path. Re-run
`npm run build:pages` and commit `docs/` whenever you want to publish changes.

## How it's organised

| Path | Purpose |
| --- | --- |
| `src/store.jsx` | App state (room, items, selection) + localStorage persistence |
| `src/data/catalog.js` | The parametric furniture catalog (dimensions, colours, shapes) |
| `src/components/Footprint.jsx` | Shared 2D top-down vector renderer |
| `src/three/furniture.js` | Procedural 3D builders for every catalog shape |
| `src/components/Editor2D.jsx` | The 2D planner: drag-move + drag-resize |
| `src/components/Scene3D.jsx` | The Three.js 3D room |
| `src/components/Catalog.jsx`, `Inspector.jsx`, `RoomSheet.jsx` | Bottom-sheet UI |
