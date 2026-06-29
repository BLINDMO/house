import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { StoreProvider } from './store.jsx'
import { AssetsProvider } from './assets.jsx'
import './index.css'

// Try to lock to landscape natively where the platform allows it (Android /
// installed PWAs). Where it isn't honoured (e.g. iOS Safari) the CSS rotation
// in index.css presents the studio in landscape instead. Best-effort, silent.
function lockLandscape() {
  try { window.screen?.orientation?.lock?.('landscape').catch(() => {}) } catch { /* unsupported */ }
}
lockLandscape()
window.addEventListener('pointerdown', lockLandscape, { once: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AssetsProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AssetsProvider>
  </React.StrictMode>
)
