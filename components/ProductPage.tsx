"use client"

import Link from "next/link"
import { useState } from "react"
import VideoScrub from "./VideoScrub"
import Footer from "./Footer"

export interface Stat {
  value: string
  label: string
}

export interface ProductData {
  name: string
  slug: string
  color: string
  heroImage: string
  tagline: string
  slogan: string
  description: string
  stats: Stat[]
  scrubVideo: string
  totalScroll?: number
  closerTitle?: string
  price: string
  others: { name: string; slug: string; color: string }[]
}

const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

function isDarkColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

function OtherCard({ name, slug, color }: { name: string; slug: string; color: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={`/product/${slug}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          borderRadius: "18px",
          background: hovered ? "#e8e8ed" : "#f5f5f7",
          padding: "40px 32px",
          transition: "background 0.3s ease",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: color,
            marginBottom: "16px",
            transform: hovered ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
        <div
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 600,
            color: hovered ? color : "#1d1d1f",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            transition: "color 0.3s ease",
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: "13px", color: "#6e6e73", marginTop: "10px" }}>자세히 보기 →</div>
      </div>
    </Link>
  )
}

export default function ProductPage({ product }: { product: ProductData }) {
  const { name, color, heroImage, tagline, slogan, description, stats, scrubVideo, totalScroll, price, others, closerTitle } = product
  const btnTextColor = isDarkColor(color) ? "#000" : "#fff"

  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>

      {/* ── 1. Hero — scroll scrubbing video ────────────────────────────── */}
      <VideoScrub src={scrubVideo} totalScroll={totalScroll} color={color} title={name} tagline={tagline} />

      {/* ── 2. Statistics ───────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "100px", paddingBottom: "100px", ...hPad }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ borderTop: `2px solid ${color}`, paddingTop: "20px" }}>
              <div
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "13px", color: "#6e6e73", marginTop: "10px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Slogan ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#f5f5f7",
          paddingTop: "140px",
          paddingBottom: "140px",
          textAlign: "center",
          ...hPad,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {slogan}
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "#6e6e73",
            marginTop: "24px",
            maxWidth: "480px",
            margin: "24px auto 0",
            lineHeight: 1.7,
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </p>
      </section>

      {/* ── 4. Closer Interaction ─────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "120px", paddingBottom: "120px", ...hPad }}>
        <div style={{ display: "flex", alignItems: "center", gap: "80px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <p
              style={{
                fontSize: "12px",
                color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Closer Interaction
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              {closerTitle ?? "어떻게 작동하는가"}
            </h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, maxWidth: "400px", whiteSpace: "pre-line" }}>
              {description}
            </p>
          </div>
          <div
            style={{
              flex: "1 1 320px",
              minWidth: 0,
              aspectRatio: "4/3",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── 6. Fonts & Stuff / Best Price ───────────────────────────────── */}
      <section style={{ background: "#f5f5f7", paddingTop: "100px", paddingBottom: "100px", ...hPad }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          {/* Fonts & Stuff */}
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Fonts &amp; Stuff
            </p>
            <div style={{ marginBottom: "28px" }}>
              <p style={{ fontSize: "11px", color: "#6e6e73", marginBottom: "6px" }}>Primary Typeface</p>
              <p style={{ fontSize: "28px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em" }}>
                SF Pro Display
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
              {["Light", "Regular", "Medium", "Semibold", "Bold"].map((w) => (
                <div
                  key={w}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "#fff",
                    fontSize: "13px",
                    color: "#1d1d1f",
                  }}
                >
                  {w}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: color }} />
              <span style={{ fontSize: "12px", color: "#6e6e73", fontVariantNumeric: "tabular-nums" }}>{color}</span>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#1d1d1f" }} />
              <span style={{ fontSize: "12px", color: "#6e6e73" }}>#1d1d1f</span>
            </div>
          </div>

          {/* Best Price */}
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Best Price
            </p>
            <div
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {price}
            </div>
            <p style={{ fontSize: "13px", color: "#6e6e73", marginBottom: "32px" }}>부가세 포함</p>
            <div
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "980px",
                background: color,
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: 600, color: btnTextColor }}>구매하기</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Video Clip ───────────────────────────────────────────────── */}
      <section style={{ background: "#000", position: "relative", overflow: "hidden", height: "80vh" }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          src={scrubVideo}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "max(24px, 8vw)",
            zIndex: 2,
            fontSize: "clamp(20px, 3vw, 40px)",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          {slogan}
        </div>
      </section>

      {/* ── 8. Another Products ─────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "100px", paddingBottom: "100px", ...hPad }}>
        <h3
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.01em",
            marginBottom: "32px",
          }}
        >
          Also from oddy
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {others.map((o) => (
            <OtherCard key={o.name} {...o} />
          ))}
        </div>
      </section>

      {/* ── 9. Footer ───────────────────────────────────────────────────── */}
      <Footer />
    </main>
  )
}
