"use client"

import Link from "next/link"
import { useState } from "react"
import ScrollScrubber, { useScrollProgress } from "./ScrollScrubber"
import Footer from "./Footer"

export interface Feature {
  num: string
  title: string
  body: string
}

export interface ProductData {
  name: string
  slug: string
  color: string
  heroImage: string
  tagline: string
  description: string
  features: Feature[]
  others: { name: string; slug: string; color: string }[]
}

const hPad = { paddingLeft: "max(24px, 5vw)", paddingRight: "max(24px, 5vw)" }

// ---------------------------------------------------------------------------
// Scroll-scrubbed story section
// ---------------------------------------------------------------------------
function StorySection({
  color,
  description,
  slug,
}: {
  color: string
  description: string
  slug: string
}) {
  const p = useScrollProgress()

  const phase1 = Math.min(1, p / 0.42)
  const phase2 = Math.max(0, Math.min(1, (p - 0.32) / 0.4))

  return (
    <div className="relative w-full h-full flex items-center bg-white overflow-hidden">
      {/* Left: description + stat */}
      <div
        className="absolute bottom-[18%] z-10 max-w-[280px]"
        style={{
          left: "max(32px, 6vw)",
          transform: `translateY(${(1 - phase1) * 40}px)`,
          opacity: phase1,
        }}
      >
        <p className="text-[15px] leading-[1.7] text-[#1d1d1f]/55">
          {description}
        </p>
      </div>

      {/* Right: image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden"
        style={{
          transform: `scale(${0.92 + phase2 * 0.08})`,
          transformOrigin: "center right",
          opacity: phase2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${slug}-story/800/1000`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: color, mixBlendMode: "multiply", opacity: 0.06 }}
        />
      </div>

      {/* Progress line */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-16 w-px bg-[#d2d2d7]"
        style={{ left: "max(32px, 6vw)" }}
      >
        <div
          className="absolute top-0 left-0 w-full transition-none"
          style={{ background: color, height: `${p * 100}%` }}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Other-product hover link
// ---------------------------------------------------------------------------
function OtherLink({ name, slug, color }: { name: string; slug: string; color: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={`/${slug}`}
      className="flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-2 h-2 rounded-full transition-transform duration-300"
        style={{ background: color, transform: hovered ? "scale(1.8)" : "scale(1)" }}
      />
      <span
        className="text-[32px] font-bold tracking-[-0.02em] transition-colors duration-200"
        style={{ color: hovered ? color : "#1d1d1f" }}
      >
        {name}
      </span>
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export default function ProductPage({ product }: { product: ProductData }) {
  const { name, slug, color, heroImage, tagline, description, features, others } = product

  return (
    <main className="bg-white text-[#1d1d1f]">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative">
        {/* Full-bleed image */}
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={name}
            style={{ width: "100%", height: "100vh", objectFit: "cover", zIndex: 0 }}
          />
          {/* Dark gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
              zIndex: 1,
            }}
          />
          {/* Name + tagline overlay */}
          <div
            className="absolute"
            style={{ bottom: "60px", left: "max(24px, 5vw)", zIndex: 2 }}
          >
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
              {name}
            </h1>
            <p style={{ fontSize: "clamp(14px, 2vw, 20px)", color: "rgba(255,255,255,0.8)" }}>
              {tagline}
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="text-center pb-24 bg-white" style={hPad}>
          <div className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-[0.18em] mb-5">
            oddy / {name}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/${name}.png`}
            alt={name}
            style={{ width: "clamp(150px, 30vw, 400px)", height: "auto" }}
            className="mx-auto mb-5"
          />
          <p className="text-[19px] text-[#6e6e73] max-w-md mx-auto leading-[1.55] font-light">
            {tagline}
          </p>
        </div>
      </section>

      {/* ── 2. Big headline ─────────────────────────────────────────────── */}
      <section className="py-32 text-center bg-[#f5f5f7]" style={hPad}>
        <h2
          className="font-bold text-[#1d1d1f] leading-tight tracking-[-0.025em] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          {tagline}
        </h2>
        <p className="mt-6 text-[19px] text-[#6e6e73] font-light max-w-xl mx-auto leading-[1.6]">
          {description}
        </p>
      </section>

      {/* ── 3. Story — scroll scrubbed ──────────────────────────────────── */}
      <ScrollScrubber height="260vh">
        <StorySection
          color={color}
          description={description}
          slug={slug}
        />
      </ScrollScrubber>

      {/* ── 4. Features ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f5f5f7]" style={hPad}>
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[12px] font-medium uppercase tracking-[0.18em] mb-16"
            style={{ color }}
          >
            features
          </div>
          <ul className="divide-y divide-[#d2d2d7]">
            {features.map((f) => (
              <li key={f.num} className="flex items-start gap-8 md:gap-14 py-10">
                <span className="text-[12px] font-medium text-[#6e6e73] mt-1.5 w-6 shrink-0">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-[26px] md:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.015em]">
                    {f.title}
                  </h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.7] max-w-lg">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="pt-20 pb-8" style={hPad}>
          <div
            className="text-[12px] font-medium uppercase tracking-[0.18em]"
            style={{ color }}
          >
            gallery
          </div>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#d2d2d7] mb-20 overflow-hidden rounded-2xl"
          style={{
            marginLeft: "max(24px, 5vw)",
            marginRight: "max(24px, 5vw)",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${slug}-g${i}/600/600`}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Other products ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#d2d2d7] bg-white" style={hPad}>
        <div className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-[0.18em] mb-12">
          also from oddy
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {others.map((o) => (
            <OtherLink key={o.name} {...o} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
