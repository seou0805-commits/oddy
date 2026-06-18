"use client"

import { useEffect, useRef, useState } from "react"

const TOTAL_SCROLL = 1800 // 12 frames × 150px

export default function TwiddleHero({
  color,
  tagline,
}: {
  color: string
  tagline: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onReady = () => setLoaded(true)
    video.addEventListener("canplaythrough", onReady)
    if (video.readyState >= 4) setLoaded(true)
    return () => video.removeEventListener("canplaythrough", onReady)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let raf = 0
    const tick = () => {
      const scrolled = Math.max(0, -container.getBoundingClientRect().top)
      const progress = Math.min(1, scrolled / TOTAL_SCROLL)
      const video = videoRef.current
      if (video && video.readyState >= 2) {
        video.currentTime = progress * video.duration
      }
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }

    window.addEventListener("scroll", onScroll, { passive: true })
    tick()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

        {!loaded && (
          <div style={{ position: "absolute", inset: 0, background: "#111", zIndex: 20 }} />
        )}

        {/* <video ref={videoRef} src="/twiddle-seq.mp4" preload="auto" muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> */}
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
            zIndex: 10,
          }}
        />

        <div style={{ position: "absolute", bottom: "60px", left: "max(24px, 5vw)", zIndex: 11 }}>
          <h1
            style={{
              fontSize: "clamp(48px, 10vw, 96px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "12px",
            }}
          >
            twiddle
          </h1>
          <p style={{ fontSize: "clamp(14px, 2vw, 20px)", color: "rgba(255,255,255,0.8)" }}>
            {tagline}
          </p>
        </div>
      </div>
    </div>
  )
}
