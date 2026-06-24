"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

const SelectInteraction = dynamic(
  () => import("../components/SelectInteraction"),
  { ssr: false }
)

const CatalogFlipbook = dynamic(
  () => import("../components/CatalogFlipbook"),
  { ssr: false }
)

const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}


export default function Home() {
  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>

      {/* ── 1. Hero — 3분할 영상 ────────────────────────────────────────── */}
      <section
        data-nav-theme="dark"
        style={{ display: "flex", height: "100vh", overflow: "hidden" }}
      >
        {[
          { src: "/orbit.mp4",   label: "orbit"   },
          { src: "/twiddle.mp4", label: "twiddle" },
          { src: "/tipsy.mp4",   label: "tipsy"   },
        ].map(({ src, label }) => (
          <div key={label} style={{ width: "33.333%", height: "100%", overflow: "hidden", flexShrink: 0 }}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </section>

      {/* ── 3. Waiting Slogan ───────────────────────────────────────────── */}
      <section
        data-nav-theme="light"
        style={{
          background: "#ffffff",
          paddingTop: "160px",
          paddingBottom: "160px",
          textAlign: "center",
          ...hPad,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="oddy" style={{ height: "40px", width: "auto", margin: "0 auto 40px", display: "block" }} />
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#1d1d1f",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <p style={{ margin: 0 }}>
            디지털의 발전은 주고받는 대화의 양과 편의를 폭발적으로 늘렸다.<br />
            SNS, 번역 어플, Ai를 통한 문법 교정 등 누구를 만날 필요 없이<br />
            언제, 어디서나, 누구와도 대화를 할 수 있는 시기가 되었다.<br />
            하지만 역설적이게도 젠지스테어, 콜포비아 등 타인과의<br />
            소통을 가장 두려워하는 시대이기도 하다.
          </p>
          <p style={{ margin: 0, marginTop: "2em" }}>
            대화가 부담스럽다면, 불편함이 부담스럽다면.<br />
            대화를 촉발시키는 불편함을 귀엽게 만든다면 어떨까?
          </p>
          <p style={{ margin: 0, marginTop: "2em" }}>
            oddy는 소통이 점점 사라지는 시대에, 타인과의 대화를<br />
            &apos;귀여운 불편함&apos;으로 만드는 인테리어 브랜드다.
          </p>
          <p style={{ margin: 0, marginTop: "2em" }}>
            말을 걸기 어려운 당신을 위해, 제품이 먼저 핑계가 되어준다.
          </p>
          <p style={{ margin: 0, marginTop: "2em", fontWeight: 700 }}>
            우리 한 번 불편해보자 :)
          </p>
        </div>
      </section>

      {/* ── 4. Catalog Flipbook ─────────────────────────────────────────── */}
      <section
        data-nav-theme="light"
        style={{
          background: "#fff",
          paddingTop: "120px",
          paddingBottom: "80px",
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        <CatalogFlipbook />
      </section>

      {/* ── 5. Closer Interaction ───────────────────────────────────────── */}
      <section data-nav-theme="light" style={{ background: "#f5f5f7", paddingTop: "120px", paddingBottom: "120px", ...hPad }}>
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
        data-nav-theme="dark"
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
      <section data-nav-theme="light" style={{ background: "#fff", paddingTop: "120px", paddingBottom: "60px" }}>
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
