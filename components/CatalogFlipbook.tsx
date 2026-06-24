"use client"

import { useState, useCallback } from "react"

const TOTAL_PAGES  = 26
const MAX_STATE    = 25

// state 0:     page-01  single right,  SINGLE_RATIO width (no left side)
// state 1:     page-02  half-right,    SPREAD_RATIO width (left = white blank)
// state 2–23:  page-03–24 full spread, SPREAD_RATIO width
// state 24:    page-25  half-left,     SPREAD_RATIO width (right = white blank)
// state 25:    page-26  single left,   SINGLE_RATIO width (no right side)
const SINGLE_RATIO = 1075 / 1512  // ~0.711
const SPREAD_RATIO = 2186 / 1554  // ~1.407

function pg(n: number) {
  return `/catalog/page-${String(n).padStart(2, "0")}.jpg`
}

const getPage      = (s: number) => s + 1
const useSpread    = (s: number) => s >= 1 && s <= 24   // uses SPREAD_RATIO container
const isFullSpread = (s: number) => s >= 2 && s <= 23   // full landscape spread image

type Mode = "single-right" | "half-right" | "full-spread" | "half-left" | "single-left"

function getMode(s: number): Mode {
  if (s === 0)              return "single-right"
  if (s === 1)              return "half-right"
  if (s >= 2 && s <= 23)   return "full-spread"
  if (s === 24)             return "half-left"
  return "single-left"
}

export default function CatalogFlipbook() {
  const [state,     setState]    = useState(0)
  const [flipping,  setFlipping] = useState(false)
  const [flipDir,   setFlipDir]  = useState<"fwd" | "bck">("fwd")
  const [fromPage,  setFromPage] = useState(1)
  const [toPage,    setToPage]   = useState(2)
  const [hovered,   setHovered]  = useState(false)
  const [editing,   setEditing]  = useState(false)
  const [inputVal,  setInputVal] = useState("")

  const currentPage = getPage(state)
  const mode        = getMode(state)
  const aspectRatio = useSpread(state)
    ? `${Math.round(SPREAD_RATIO * 10000)}/10000`
    : `${Math.round(SINGLE_RATIO * 10000)}/10000`

  const go = useCallback((dir: "fwd" | "bck") => {
    if (flipping) return
    if (dir === "fwd" && state >= MAX_STATE) return
    if (dir === "bck" && state <= 0) return

    const next = dir === "fwd" ? state + 1 : state - 1

    // Only animate between full-spread states
    if (isFullSpread(state) && isFullSpread(next)) {
      setFlipDir(dir)
      setFromPage(currentPage)
      setToPage(getPage(next))
      setFlipping(true)
      setTimeout(() => {
        setState(next)
        setFlipping(false)
      }, 600)
    } else {
      setState(next)
    }
  }, [flipping, state, currentPage])

  const showLeftBtn  = state > 0        && !flipping
  const showRightBtn = state < MAX_STATE && !flipping

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    overflow: "hidden",
    background: "#fff",
  }

  const navBtn: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid rgba(0,0,0,0.2)",
    background: "rgba(255,255,255,0.85)",
    cursor: "pointer",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const halfImg = (src: string): React.CSSProperties => ({
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    background: "#fff",
  })

  return (
    <>
      <style>{`
        @keyframes cf-fwd {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(-180deg); }
        }
        @keyframes cf-bck {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(180deg); }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            height: "clamp(360px, 65vh, 620px)",
            aspectRatio,
            boxShadow: "0 16px 56px rgba(0,0,0,0.24), 0 2px 8px rgba(0,0,0,0.1)",
            perspective: "2400px",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
            transformOrigin: "center center",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {/* ── static book content ─────────────────────────────────── */}

          {(mode === "single-right" || mode === "single-left" || mode === "full-spread") && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={pg(currentPage)}
              alt={`Page ${currentPage}`}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", background: "#fff" }}
            />
          )}

          {mode === "half-right" && (
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "50%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pg(currentPage)} alt={`Page ${currentPage}`} loading="lazy" style={halfImg(pg(currentPage))} />
            </div>
          )}

          {mode === "half-left" && (
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "50%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pg(currentPage)} alt={`Page ${currentPage}`} loading="lazy" style={halfImg(pg(currentPage))} />
            </div>
          )}

          {/* ── forward flip card (right half → left) ───────────────── */}
          {flipping && flipDir === "fwd" && (
            <div
              style={{
                position: "absolute",
                top: 0, bottom: 0, right: 0, width: "50%",
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                animation: "cf-fwd 0.6s ease-in-out forwards",
                zIndex: 20,
              }}
            >
              <div style={faceStyle}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pg(fromPage)} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
              <div style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pg(toPage)} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", display: "block" }} />
              </div>
            </div>
          )}

          {/* ── backward flip card (left half → right) ──────────────── */}
          {flipping && flipDir === "bck" && (
            <div
              style={{
                position: "absolute",
                top: 0, bottom: 0, left: 0, width: "50%",
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                animation: "cf-bck 0.6s ease-in-out forwards",
                zIndex: 20,
              }}
            >
              <div style={faceStyle}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pg(fromPage)} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", display: "block" }} />
              </div>
              <div style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pg(toPage)} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>
          )}

          {/* ── click zones ─────────────────────────────────────────── */}
          <div
            onClick={() => go("bck")}
            style={{
              position: "absolute", top: 0, bottom: 0, left: 0, right: "50%",
              cursor: showLeftBtn ? "pointer" : "default",
              zIndex: 10,
            }}
          />
          <div
            onClick={() => go("fwd")}
            style={{
              position: "absolute", top: 0, bottom: 0, left: "50%", right: 0,
              cursor: showRightBtn ? "pointer" : "default",
              zIndex: 10,
            }}
          />

          {/* ← button */}
          {showLeftBtn && (
            <button
              onClick={(e) => { e.stopPropagation(); go("bck") }}
              aria-label="이전"
              style={{ ...navBtn, left: 14 }}
            >←</button>
          )}

          {/* → button */}
          {showRightBtn && (
            <button
              onClick={(e) => { e.stopPropagation(); go("fwd") }}
              aria-label="다음"
              style={{ ...navBtn, right: 14 }}
            >→</button>
          )}
        </div>

        {editing ? (
          <input
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const n = parseInt(inputVal, 10)
                if (!isNaN(n) && n >= 1 && n <= TOTAL_PAGES) {
                  setState(n - 1)
                }
                setEditing(false)
              }
              if (e.key === "Escape") setEditing(false)
            }}
            onBlur={() => setEditing(false)}
            style={{
              width: "60px",
              textAlign: "center",
              fontSize: 12,
              color: "#6e6e73",
              letterSpacing: "0.06em",
              border: "none",
              borderBottom: "1px solid #6e6e73",
              outline: "none",
              background: "transparent",
              padding: "0 2px",
            }}
          />
        ) : (
          <p
            onClick={() => { setInputVal(String(currentPage)); setEditing(true) }}
            style={{ margin: 0, fontSize: 12, color: "#6e6e73", letterSpacing: "0.06em", cursor: "text" }}
          >
            {currentPage} / {TOTAL_PAGES}
          </p>
        )}
      </div>
    </>
  )
}
