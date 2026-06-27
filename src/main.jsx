import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { StoreProvider } from './store.jsx'
import { AssetsProvider } from './assets.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AssetsProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AssetsProvider>
  </React.StrictMode>
)
