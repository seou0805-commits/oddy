"use client"

import { useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import * as THREE from "three"
import { useThreeScene } from "./useThreeScene"
import { useCarousel } from "./useCarousel"

const PRODUCT_SLUGS = ["orbit", "twiddle", "tipsy"]

function addFogPlane(group: THREE.Group) {
  const fogPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 3.5),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    })
  )
  fogPlane.name = "fogPlane"
  fogPlane.position.z = 1.2
  group.add(fogPlane)
}

export default function SelectInteraction() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modelsRef = useRef<(THREE.Group | null)[]>([null, null, null])
  const router = useRouter()

  const { applyPositions, rotate, label, frontIdx } = useCarousel(modelsRef)

  const handleModelsLoaded = useCallback(
    (models: THREE.Group[]) => {
      models.forEach((group) => addFogPlane(group))
      modelsRef.current = models
      applyPositions(0, models)
    },
    [applyPositions]
  )

  useThreeScene(canvasRef, handleModelsLoaded)

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1440 / 900" }}>
      <canvas
        ref={canvasRef}
        onClick={() => router.push(`/product/${PRODUCT_SLUGS[frontIdx]}`)}
        style={{ width: "100%", height: "100%", display: "block", cursor: "pointer" }}
      />

      {/* Left arrow */}
      <button
        onClick={() => rotate("left")}
        aria-label="previous product"
        style={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          width: "11%",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "2px solid rgba(0,0,0,0.12)",
          background: "rgba(255,255,255,0.7)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <svg width="24%" height="24%" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => rotate("right")}
        aria-label="next product"
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translateY(-50%)",
          width: "11%",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "2px solid rgba(0,0,0,0.12)",
          background: "rgba(255,255,255,0.7)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <svg width="24%" height="24%" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Product label */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          textAlign: "center",
          fontFamily: '-apple-system, "SF Pro Display", sans-serif',
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "1.1vw",
            fontWeight: 500,
            color: "rgba(0,0,0,0.75)",
            transition: "opacity 0.2s",
          }}
          key={`name-${frontIdx}`}
        >
          {label.name}
        </div>
        <div
          style={{
            fontSize: "0.85vw",
            color: "rgba(0,0,0,0.3)",
            marginTop: "3px",
            letterSpacing: "0.08em",
            transition: "opacity 0.2s",
          }}
          key={`sub-${frontIdx}`}
        >
          {label.sub}
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: i === frontIdx ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.15)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  )
}
