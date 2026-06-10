"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"

const ProgressCtx = createContext(0)

export function useScrollProgress(): number {
  return useContext(ProgressCtx)
}

export default function ScrollScrubber({
  children,
  height = "300vh",
}: {
  children: React.ReactNode
  height?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const tick = () => {
      const { top, height: h } = el.getBoundingClientRect()
      const scrollable = h - window.innerHeight
      setProgress(scrollable > 0 ? Math.max(0, Math.min(1, -top / scrollable)) : 0)
      raf = 0
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    tick()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <ProgressCtx.Provider value={progress}>
      <div ref={ref} style={{ height }} className="relative w-full">
        <div className="sticky top-0 h-screen overflow-hidden">
          {children}
        </div>
      </div>
    </ProgressCtx.Provider>
  )
}
