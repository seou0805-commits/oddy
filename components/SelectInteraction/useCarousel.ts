import { useCallback, useRef, useState } from "react"
import * as THREE from "three"
import gsap from "gsap"

// Carousel positions: index 0 = front, 1 = right-back, 2 = left-back
const POSITIONS = [
  { x: 0,    z: 3.5,   scale: 1.0  },
  { x: 3.0,  z: -1.75, scale: 0.65 },
  { x: -3.0, z: -1.75, scale: 0.65 },
]

// Fog plane opacity per slot (0=front, 1/2=back)
const FOG_OPACITY = [0, 0.45, 0.45]

const LABELS = [
  { name: "orbit",   sub: "turning" },
  { name: "twiddle", sub: "hinging" },
  { name: "tipsy",   sub: "leaning" },
]

export function useCarousel(modelsRef: React.MutableRefObject<(THREE.Group | null)[]>) {
  const [frontIdx, setFrontIdx] = useState(0)
  const isRotating = useRef(false)

  // Apply positions immediately (called once after load)
  const applyPositions = useCallback(
    (currentFront: number, models: THREE.Group[]) => {
      models.forEach((group, modelIdx) => {
        if (!group) return
        // slot = where this model sits in the carousel ring
        const slot = ((modelIdx - currentFront) % 3 + 3) % 3
        const pos = POSITIONS[slot]
        group.position.x = pos.x
        group.position.z = pos.z
        group.scale.setScalar(pos.scale)

        // Update fog plane visibility if present
        const fogPlane = group.getObjectByName("fogPlane")
        if (fogPlane && fogPlane instanceof THREE.Mesh) {
          ;(fogPlane.material as THREE.MeshBasicMaterial).opacity = FOG_OPACITY[slot]
        }
      })
    },
    []
  )

  const rotate = useCallback(
    (dir: "left" | "right") => {
      if (isRotating.current) return
      const models = modelsRef.current
      if (models.some((m) => m === null)) return

      isRotating.current = true
      const newFront = dir === "right"
        ? (frontIdx + 1) % 3
        : (frontIdx + 2) % 3

      const tl = gsap.timeline({
        onComplete: () => {
          isRotating.current = false
          setFrontIdx(newFront)
        },
      })

      models.forEach((group, modelIdx) => {
        if (!group) return
        const slot = ((modelIdx - newFront) % 3 + 3) % 3
        const pos = POSITIONS[slot]

        tl.to(
          group.position,
          { x: pos.x, z: pos.z, duration: 0.55, ease: "power2.inOut" },
          0
        )
        tl.to(
          group.scale,
          { x: pos.scale, y: pos.scale, z: pos.scale, duration: 0.55, ease: "power2.inOut" },
          0
        )

        const fogPlane = group.getObjectByName("fogPlane")
        if (fogPlane && fogPlane instanceof THREE.Mesh) {
          tl.to(
            (fogPlane.material as THREE.MeshBasicMaterial),
            { opacity: FOG_OPACITY[slot], duration: 0.3, ease: "power2.inOut" },
            0
          )
        }
      })
    },
    [frontIdx, modelsRef]
  )

  return { frontIdx, applyPositions, rotate, label: LABELS[frontIdx] }
}
