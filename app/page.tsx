"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

const SelectInteraction = dynamic(
  () => import("../components/SelectInteraction"),
  { ssr: false }
)

const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

const PRODUCTS = [
  { name: "orbit",   color: "#F1C300", tagline: "저기.. 혹시 시간 좀 알 수 있을까요?" },
  { name: "twiddle", color: "#009ED6", tagline: "저기.. 콘센트 좀 쓸 수 있을까요?"    },
  { name: "tipsy",   color: "#EB0018", tagline: "저기.. 혹시 냅킨 한 장만..?"         },
]

export default function Home() {
  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...hPad,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.png"
            alt="oddy"
            style={{ width: "clamp(200px, 40vw, 480px)", height: "auto" }}
          />
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 21px)",
              color: "rgba(255,255,255,0.65)",
              marginTop: "28px",
              letterSpacing: "0.01em",
            }}
          >
            낯선 사람과 대화하게 만드는 물건들
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <div
            className="scroll-line"
            style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.35)" }}
          />
        </div>
      </section>

      {/* ── 2. Statistics ───────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "120px", paddingBottom: "120px", ...hPad }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }}>
          {[
            { value: "3",  label: "Objects" },
            { value: "1",  label: "Conversation" },
            { value: "0",  label: "Words needed" },
          ].map(({ value, label }) => (
            <div key={label} style={{ borderTop: "1px solid #d2d2d7", paddingTop: "24px" }}>
              <div
                style={{
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: "13px", color: "#6e6e73", marginTop: "10px", letterSpacing: "0.02em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Waiting Slogan ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#f5f5f7",
          paddingTop: "160px",
          paddingBottom: "160px",
          textAlign: "center",
          ...hPad,
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#6e6e73",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          귀여운 불편함
        </p>
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          기다리는 사이,<br />대화가 시작된다
        </h2>
      </section>

      {/* ── 4. Product Images ───────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "120px", paddingBottom: "0" }}>
        <div style={{ ...hPad, marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
            }}
          >
            세 가지 물건
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px" }}>
          {PRODUCTS.map((p) => (
            <Link
              key={p.name}
              href={`/product/${p.name}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  background: "#f5f5f7",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${p.name}-hero.jpg`}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 28px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: p.color,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    oddy
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(20px, 3vw, 32px)",
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "6px" }}>
                    {p.tagline}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 5. Closer Interaction ───────────────────────────────────────── */}
      <section style={{ background: "#f5f5f7", paddingTop: "120px", paddingBottom: "120px", ...hPad }}>
        <div style={{ display: "flex", alignItems: "center", gap: "80px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Closer Interaction
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              의도된 불편함이<br />대화를 만든다
            </h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, maxWidth: "420px" }}>
              oddy의 물건들은 혼자서는 완성되지 않는다. 옆 사람의 손이 필요하고, 눈빛이 필요하고, 말 한마디가 필요하다.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 300px",
              minWidth: 0,
              aspectRatio: "4/3",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/orbit-hero.jpg"
              alt="interaction"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── 6. Video Clip ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "#000",
          position: "relative",
          overflow: "hidden",
          height: "80vh",
        }}
      >
        <video autoPlay muted loop playsInline style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.8,zIndex:0}}><source src="/hero-bg.mp4" type="video/mp4" /></video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "max(24px, 8vw)",
            zIndex: 2,
            fontSize: "clamp(18px, 2.5vw, 32px)",
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          낯선 사람과 대화하게 만드는 물건들
        </div>
      </section>

      {/* ── 7. Select Interaction ───────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "120px", paddingBottom: "60px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            ...hPad,
          }}
        >
          <h3
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 600,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
            }}
          >
            Select Interaction
          </h3>
          <Link
            href="/product"
            style={{ fontSize: "15px", color: "#6e6e73", textDecoration: "none" }}
          >
            모두 보기 →
          </Link>
        </div>
        <SelectInteraction />
      </section>

    </main>
  )
}
