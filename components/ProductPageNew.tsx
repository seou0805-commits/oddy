"use client"

export interface ProductDataNew {
  name: string
  color: string
  heroImage: string
  productImage: string
  seqVideo: string
  introImage: string
  detailImage: string
}

const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

export default function ProductPageNew({ product }: { product: ProductDataNew }) {
  const { name, color, heroImage, productImage, seqVideo, introImage, detailImage } = product

  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        data-nav-theme="dark"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </section>

      {/* ── 2. 제품명 + 작은 이미지 ──────────────────────────────────────── */}
      <section
        data-nav-theme="light"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          ...hPad,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(72px, 12vw, 160px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            margin: 0,
            flexShrink: 0,
          }}
        >
          <span style={{ color }}>{name[0]}</span>
          {name.slice(1)}
        </h1>
        <div style={{ flexShrink: 0, width: "clamp(140px, 18vw, 260px)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={productImage}
            alt={name}
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* ── 3. 시퀀스 영상 ───────────────────────────────────────────────── */}
      <section data-nav-theme="dark">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", display: "block" }}
        >
          <source src={seqVideo} type="video/mp4" />
        </video>
      </section>

      {/* ── 4. 소개 이미지 ───────────────────────────────────────────────── */}
      <section data-nav-theme="light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={introImage}
          alt={`${name} intro`}
          loading="lazy"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* ── 4-1. 제품 영상 ───────────────────────────────────────────────── */}
      <section data-nav-theme="light">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", pointerEvents: "none" }}
        >
          <source src={`/${name}.mp4`} type="video/mp4" />
        </video>
      </section>

      {/* ── 5. 디테일 이미지 ─────────────────────────────────────────────── */}
      <section data-nav-theme="light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={detailImage}
          alt={`${name} detail`}
          loading="lazy"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

    </main>
  )
}
