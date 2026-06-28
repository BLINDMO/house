import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { phGltf } from '../data/phModels.js'

// Poly Haven's glTF references its textures with a folder-relative path
// (textures/<file>.jpg), but on the CDN those maps don't live next to the
// glTF — they're served from Models/jpg/<res>/<id>/<file>.jpg. Rewrite the
// resolved texture URL so runtime CDN loads come through fully textured.
// (Local copies keep their textures alongside, so this pattern won't match.)
const manager = new THREE.LoadingManager()
manager.setURLModifier((url) =>
  url.replace(/\/Models\/gltf\/([^/]+)\/([^/]+)\/textures\//, '/Models/jpg/$1/$2/')
)

const loader = new GLTFLoader(manager)
const cache = new Map() // id -> Promise<{ proto, dim }>

// Load (once, cached) a Poly Haven glTF model, normalised so it sits centred on
// the origin in X/Z with its base on the floor (y = 0). Resolves with a shared
// prototype scene to clone per instance, plus its measured real-world size.
export function loadModel(id) {
  if (!cache.has(id)) {
    cache.set(id, new Promise((resolve, reject) => {
      loader.load(
        phGltf(id),
        (gltf) => {
          const proto = gltf.scene
          const box = new THREE.Box3().setFromObject(proto)
          const size = box.getSize(new THREE.Vector3())
          const center = box.getCenter(new THREE.Vector3())
          proto.position.x -= center.x
          proto.position.z -= center.z
          proto.position.y -= box.min.y
          proto.updateMatrixWorld(true)
          proto.traverse((o) => {
            if (o.isMesh) {
              o.castShadow = true
              o.receiveShadow = true
              if (o.material) o.material.envMapIntensity = 1
            }
          })
          resolve({ proto, dim: { w: size.x, d: size.z, h: size.y } })
        },
        undefined,
        (err) => reject(err)
      )
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
