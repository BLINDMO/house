import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { phGltf } from '../data/phModels.js'

const loader = new GLTFLoader()
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
