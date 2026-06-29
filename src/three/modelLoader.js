import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { kenUrl } from '../data/kenneyModels.js'

const loader = new GLTFLoader()
const cache = new Map() // id -> Promise<{ proto, dim }>

// Load (once, cached) a Kenney .glb, normalised so it sits centred on the
// origin in X/Z with its base on the floor (y = 0). Resolves with a shared
// prototype scene to clone per instance, plus its measured real-world size.
export function loadModel(id) {
  if (!cache.has(id)) {
    cache.set(id, new Promise((resolve, reject) => {
      loader.load(kenUrl(id), (gltf) => {
        const proto = gltf.scene
        // Kenney's kit isn't authored in metres — scale up to real-world size.
        proto.scale.setScalar(1.8)
        proto.updateMatrixWorld(true)
        const box = new THREE.Box3().setFromObject(proto)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        proto.position.x -= center.x
        proto.position.z -= center.z
        proto.position.y -= box.min.y
        proto.updateMatrixWorld(true)
        proto.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
        resolve({ proto, dim: { w: size.x, d: size.z, h: size.y } })
      }, undefined, (err) => reject(err))
    }))
  }
  return cache.get(id)
}

// A fresh, independent instance of a loaded model prototype.
export function instanceModel(entry) {
  const g = entry.proto.clone(true)
  g.position.set(0, 0, 0)
  return g
}
