import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// Local asset library: user-uploaded images (wood, flooring, wallpaper…)
// kept in IndexedDB so they persist across sessions and work offline.

const DB = 'honeycutt-assets'
const STORE = 'img'

function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1)
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'id' })
    r.onsuccess = () => res(r.result)
    r.onerror = () => rej(r.error)
  })
}
async function idbAll() {
  try {
    const db = await openDB()
    return await new Promise((res) => {
      const tx = db.transaction(STORE).objectStore(STORE).getAll()
      tx.onsuccess = () => res(tx.result || [])
      tx.onerror = () => res([])
    })
  } catch { return [] }
}
async function idbPut(a) {
  const db = await openDB()
  return new Promise((res) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put(a)
    tx.oncomplete = () => res()
    tx.onerror = () => res()
  })
}
async function idbDel(id) {
  const db = await openDB()
  return new Promise((res) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).delete(id)
    tx.oncomplete = () => res()
    tx.onerror = () => res()
  })
}

// downscale to <= 1024px and re-encode so textures stay light
function downscale(dataUrl, max = 1024) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height))
      const w = Math.max(1, Math.round(img.width * scale))
      const h = Math.max(1, Math.round(img.height * scale))
      const c = document.createElement('canvas')
      c.width = w
      c.height = h
      c.getContext('2d').drawImage(img, 0, 0, w, h)
      resolve(c.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = () => resolve(dataUrl)
    img.src = dataUrl
  })
}

const Ctx = createContext(null)
let seq = 1

export function AssetsProvider({ children }) {
  const [assets, setAssets] = useState([])

  useEffect(() => {
    idbAll().then((a) => setAssets(a.sort((x, y) => y.created - x.created)))
  }, [])

  const addAsset = useCallback((file) => new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = async () => {
      const small = await downscale(reader.result)
      const asset = { id: `a${Date.now().toString(36)}${seq++}`, name: file.name || 'image', dataUrl: small, created: Date.now() }
      await idbPut(asset)
      setAssets((a) => [asset, ...a])
      resolve(asset)
    }
    reader.readAsDataURL(file)
  }), [])

  const removeAsset = useCallback(async (id) => {
    await idbDel(id)
    setAssets((a) => a.filter((x) => x.id !== id))
  }, [])

  const map = useMemo(() => Object.fromEntries(assets.map((a) => [a.id, a.dataUrl])), [assets])

  return <Ctx.Provider value={{ assets, map, addAsset, removeAsset }}>{children}</Ctx.Provider>
}

export function useAssets() {
  return useContext(Ctx) || { assets: [], map: {}, addAsset: async () => {}, removeAsset: async () => {} }
}
