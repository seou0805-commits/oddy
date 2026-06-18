"use client"

import Link from "next/link"
import { useState } from "react"

const PRODUCTS = [
  {
    name: "orbit",
    color: "#F1C300",
    tagline: "저기.. 혹시 시간 좀 알 수 있을까요?",
    heroImage: "/orbit-hero.jpg",
  },
  {
    name: "twiddle",
    color: "#009ED6",
    tagline: "저기.. 콘센트 좀 쓸 수 있을까요?",
    heroImage: "/twiddle-hero.jpg",
  },
  {
    name: "tipsy",
    color: "#EB0018",
    tagline: "저기.. 혹시 냅킨 한 장만..?",
    heroImage: "/tipsy-hero.jpg",
  },
]

export default function SelectInteractionPage() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#0a0a0a",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header label */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Select Interaction
        </p>
      </div>

      {PRODUCTS.map((p, i) => (
        <Link
          key={p.name}
          href={`/product/${p.name}`}
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "60px clamp(20px, 3vw, 48px)",
            textDecoration: "none",
            overflow: "hidden",
            borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHovered(p.name)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Hero image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.heroImage}
            alt={p.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hovered === p.name ? 0.5 : 0.18,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Color tint */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: p.color,
              opacity: hovered === p.name ? 0.12 : 0,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "65%",
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
            }}
          />

          {/* Text content */}
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: p.color,
                marginBottom: "14px",
                opacity: hovered === p.name ? 1 : 0.5,
                transition: "opacity 0.4s ease",
              }}
            >
              oddy
            </div>
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "16px",
                transform: hovered === p.name ? "translateY(-6px)" : "translateY(0)",
                transition: "transform 0.4s ease",
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "200px",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {p.tagline}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: p.color,
                letterSpacing: "0.05em",
                opacity: hovered === p.name ? 1 : 0,
                transform: hovered === p.name ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
              }}
            >
              자세히 보기 →
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
