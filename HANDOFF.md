# Handoff — Honeycutt Room Studio

Continuation note for a fresh session. The previous session got very long
(token-heavy), so work pauses here with this note as the pick-up point.

## NEXT TASK (decided): textured / optimized-PBR furniture
The user wants **realistic textured furniture** — go ahead even though it's
heavier; the existing **runtime caching + graphics quality slider** are expected
to keep it usable on an iPhone 16 Pro.

- Source a **web-optimized PBR (or baked-texture) CC0/free furniture pack** of
  glTF/glb models. **Do NOT use Poly Haven** (the user found those old + heavy,
  they performed badly and were removed earlier).
- Keep it lean: lazy-load + runtime-cache (already set up), reasonable texture
  sizes (≈1k or baked), and make sure the **quality slider** (Normal/High/Max)
  meaningfully lightens it.
- The user is open to a **hybrid**: keep the fast low-poly Kenney pack as the
  default, and add a set of "premium" textured hero pieces.
- Research the best modern pack first (Sketchfab CC0, Poly Pizza, Quaternius
  textured sets, glTF-Sample-Assets, etc.) and confirm download URLs work
  before integrating (verify a couple of model URLs return 200 + load).

### How models are wired today (reuse this pipeline)
- `src/data/kenneyModels.js` — manifest (`k:<id>` types, `kenUrl`, `kenThumb`,
  categories). Add a parallel prefix (e.g. `m:` or `pbr:`) for the new pack, or
  extend this.
- `src/three/modelLoader.js` — GLTFLoader for `.glb`, normalises (centre X/Z,
  base on floor y=0), measures real size → `item.dim`. Kenney scaled 1.8×.
- `src/data/catalog.js` `defFor()` — branches on `isKenney`; add the new pack.
- `src/store.jsx` `addItem` — `k:` branch (no catalog color); `itemDim` action
  records measured size.
- `src/components/Scene3D.jsx` furniture effect — loads/instances models, shares
  cached geometry (do NOT dispose model instances), dispatches `itemDim`.
- `src/components/Catalog.jsx` — `LIBRARY` lists models (with `thumb`) first.
- `vite.config.js` — runtimeCaching CacheFirst for `.glb`; thumbnails (`png`)
  are precached via globPatterns.

## App state (already built + deployed)
2D plan + 3D only (Side/Sketch removed). Key features live on the default branch:
- Plan: room/wall tools are **one-shot** + snap (corners/endpoints, ortho);
  rooms nameable; flooring shows in 2D.
- 3D: select items/walls/rooms; bottom **edit menu** (Edit/Rotate/Duplicate/
  Delete); tap floor→room, tap wall→wall.
- **Openings**: draw on a wall in 3D (drag rectangle), shapes Rect/Arch/Round/
  Star; cut into all coplanar walls (consistent both sides); 2D gap+swing arc.
- **Roof** toggle (hip roof + solid exterior walls) for exterior views.
- **Visit** mode: first-person walk-through, spawns OUTSIDE facing a doorway,
  wall collision, warns if no way in. On-screen pad + WASD.
- **Day/Night** lighting over a grassy field; **graphics quality** slider
  (Normal/High/Max); HDRI + AO at Max.
- **Start screen**: New / Generate-a-house (bedrooms/baths/size).
- **Landscape lock**: phones auto-rotate the app to landscape (CSS) + native
  orientation lock attempt; all pointer input remapped (see `ROTATED_MQ`/
  `appLocal` in `src/util.js`).
- **Library**: Kenney CC0 low-poly pack (124 models, `public/models/kenney/`)
  + procedural pieces. Flat/vertex-coloured (this is WHY the user asked about
  textures — the next task adds textured pieces).
- Flooring/wall PBR materials bundled in `public/textures/` (incl. grass).

## Repo / deploy mechanics (IMPORTANT)
- **Deploy branch = the repo default branch `claude/room-design-pwa-qxojfo`**
  (GitHub Pages serves `docs/` from it). Work and push there directly so it's a
  single deploy. (An older dev branch `...-gonwu6` exists; ignore it.)
- Build: `npm run build`. Refresh Pages: `npm run build:pages` (outputs `docs/`,
  --emptyOutDir; do not put hand-written files in `docs/`).
- Verify with Playwright: chromium at `/opt/pw-browsers/chromium-1194/
  chrome-linux/chrome`, `--use-gl=swiftshader`. Inject design via
  `localStorage['honeycutt.design.v2']`. **Uninstall temp `playwright-core`/
  `sharp` and delete temp scripts before committing.** No PWA via gh CLI — none
  needed; just push.
- Commit footer lines (Co-Authored-By / Claude-Session) per project convention.
- PWA caches aggressively: after deploy, hard-refresh / reopen to see changes.

## Token discipline
Be economical: fewer screenshots, batch edits, commit/push per chunk so progress
survives. The user flagged token use twice — keep it tight.
