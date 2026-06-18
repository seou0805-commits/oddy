"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoScrub({
  src,
  totalScroll = 1650,
  color,
  title,
  tagline,
}: {
  src: string
  totalScroll?: number
  color?: string
  title?: string
  tagline?: string
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
      const progress = Math.min(1, scrolled / totalScroll)
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
  }, [totalScroll])

  return (
    <div ref={containerRef} style={{ height: `calc(100vh + ${totalScroll}px)` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#000" }}>
        {!loaded && (
          <div style={{ position: "absolute", inset: 0, background: "#111", zIndex: 20 }} />
        )}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          src={src}
          preload="auto"
          muted
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {title && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />
            <div style={{ position: "absolute", bottom: "60px", left: "max(24px, 8vw)", zIndex: 10 }}>
              <h1
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {title}
              </h1>
              {tagline && (
                <p style={{ fontSize: "clamp(15px, 2vw, 21px)", color: "rgba(255,255,255,0.75)" }}>
                  {tagline}
                </p>
              )}
            </div>
          </>
        )}
        {color && (
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              right: "max(32px, 5vw)",
              zIndex: 10,
              fontSize: "11px",
              color,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            scroll to explore
          </div>
        )}
      </div>
    </div>
  )
}
