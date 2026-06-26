# Atelier — Room Studio

A premium, installable **PWA** for designing rooms and viewing them in **2D and 3D** — right from your phone.

![Atelier](public/icon-192.png)

## Features

- **2D floor planner** — a clean top-down plan with a metric grid and live dimension labels.
- **Drag to resize the room** — grab any of the 8 handles (corners + edges) and pull, just like a home-design app. Furniture stays anchored inside the walls.
- **Drag to arrange** — move any piece with a finger; rotate, duplicate, recolour, or delete from the contextual controls.
- **One-tap 3D view** — the exact same layout rendered as a real 3D room with a wood floor, soft shadows, and walls that auto-hide so you can always see inside. Orbit and pinch-zoom to walk around it.
- **27 preloaded pieces** — sofas, beds, tables, storage, plants, lighting, kitchen and more. Everything is **procedurally generated**, so there are no asset downloads and the app works fully **offline**.
- **Premium feel** — dark champagne-gold theme, glass bottom sheets, smooth motion, safe-area aware, designed for touch.
- **Auto-save** — your design persists locally between visits.
- **Installable** — add it to your home screen and it launches like a native app.

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
