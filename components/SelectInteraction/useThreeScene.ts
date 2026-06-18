import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js"

export type ModelGroup = THREE.Group | null

export interface ThreeRefs {
  renderer: THREE.WebGLRenderer | null
  scene: THREE.Scene | null
  camera: THREE.PerspectiveCamera | null
  models: ModelGroup[]
}

const PRODUCTS = [
  { file: "/models/orbit.glb",   name: "orbit",   rotY: Math.PI / 2 },
  { file: "/models/twiddle.glb", name: "twiddle", rotY: 0 },
  { file: "/models/tipsy.glb",   name: "tipsy",   rotY: 0 },
]

export function useThreeScene(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  onModelsLoaded: (models: THREE.Group[]) => void
) {
  const refsRef = useRef<ThreeRefs>({
    renderer: null,
    scene: null,
    camera: null,
    models: [null, null, null],
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    const w = canvas.clientWidth
    const h = canvas.clientHeight
    renderer.setSize(w, h, false)

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(0, 0.5, 8)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, 1.2)
    dir.position.set(2, 4, 5)
    scene.add(dir)

    refsRef.current = { renderer, scene, camera, models: [null, null, null] }

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco/")
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    let loadedCount = 0
    const loadedModels: THREE.Group[] = []

    PRODUCTS.forEach((prod, i) => {
      loader.load(
        prod.file,
        (gltf) => {
          const model = gltf.scene

          // Apply per-model initial rotation before computing bounds
          model.rotation.y = prod.rotY

          // Compute bounding box and normalize model size/position
          const box = new THREE.Box3().setFromObject(model)
          const size = box.getSize(new THREE.Vector3())
          const maxDim = Math.max(size.x, size.y, size.z)
          const scaleFactor = 2.0 / maxDim
          model.scale.setScalar(scaleFactor)

          // Center vertically after scaling
          const boxAfter = new THREE.Box3().setFromObject(model)
          const centerY = (boxAfter.min.y + boxAfter.max.y) / 2
          model.position.y = -centerY

          // Wrap in a group so we can move the group without affecting centering
          const group = new THREE.Group()
          group.add(model)

          refsRef.current.models[i] = group
          scene.add(group)
          loadedModels[i] = group

          loadedCount++
          if (loadedCount === PRODUCTS.length) {
            onModelsLoaded(loadedModels as THREE.Group[])
          }
        },
        undefined,
        (err) => {
          console.warn(`Failed to load ${prod.file}:`, err)
          // Create a placeholder box so the carousel still works
          const geo = new THREE.BoxGeometry(1, 1.5, 0.8)
          const mat = new THREE.MeshStandardMaterial({ color: 0xd0d0d0 })
          const mesh = new THREE.Mesh(geo, mat)
          const group = new THREE.Group()
          group.add(mesh)

          refsRef.current.models[i] = group
          scene.add(group)
          loadedModels[i] = group

          loadedCount++
          if (loadedCount === PRODUCTS.length) {
            onModelsLoaded(loadedModels as THREE.Group[])
          }
        }
      )
    })

    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      dracoLoader.dispose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return refsRef
}
