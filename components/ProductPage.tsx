"use client"

import Link from "next/link"
import { useState } from "react"
import ScrollScrubber, { useScrollProgress } from "./ScrollScrubber"

export interface Feature {
  num: string
  title: string
  body: string
}

export interface ProductData {
  name: string
  slug: string
  color: string
  tagline: string
  description: string
  features: Feature[]
  stat: { value: string; label: string }
  others: { name: string; slug: string; color: string }[]
}

// ---------------------------------------------------------------------------
// Scroll-scrubbed story section
// ---------------------------------------------------------------------------
function StorySection({
  color,
  description,
  stat,
  slug,
}: {
  color: string
  description: string
  stat: ProductData["stat"]
  slug: string
}) {
  const p = useScrollProgress()

  const phase1 = Math.min(1, p / 0.42)
  const phase2 = Math.max(0, Math.min(1, (p - 0.32) / 0.4))
  const phase3 = Math.max(0, Math.min(1, (p - 0.65) / 0.35))

  return (
    <div className="relative w-full h-full flex items-center bg-white overflow-hidden">
      {/* Left: description + stat */}
      <div
        className="absolute left-8 md:left-24 bottom-[18%] z-10 max-w-[280px]"
        style={{
          transform: `translateY(${(1 - phase1) * 40}px)`,
          opacity: phase1,
        }}
      >
        <p className="text-[15px] leading-[1.7] text-[#1d1d1f]/55">
          {description}
        </p>

        <div
          className="mt-10"
          style={{
            opacity: phase3,
            transform: `translateY(${(1 - phase3) * 16}px)`,
          }}
        >
          <div
            className="text-[72px] font-bold leading-none tracking-[-0.03em]"
            style={{ color }}
          >
            {stat.value}
          </div>
          <div className="text-[12px] text-[#6e6e73] mt-2 uppercase tracking-[0.15em]">
            {stat.label}
          </div>
        </div>
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
        {/* very subtle colour cast */}
        <div
          className="absolute inset-0"
          style={{ background: color, mixBlendMode: "multiply", opacity: 0.06 }}
        />
      </div>

      {/* Progress line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-16 w-px bg-[#d2d2d7]">
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
      className="flex items-center gap-3 group"
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
  const { name, slug, color, tagline, description, features, stat, others } = product

  return (
    <main className="bg-white text-[#1d1d1f]">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[48px]">
        {/* Full-bleed image */}
        <div className="relative h-[62vh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${slug}-hero/1600/900`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Text */}
        <div className="text-center px-8 pb-24 bg-white">
          <div className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-[0.18em] mb-5">
            oddy / {name}
          </div>
          <h1
            className="font-bold text-[#1d1d1f] leading-none tracking-[-0.035em] mb-5"
            style={{ fontSize: "clamp(4rem, 13vw, 9.5rem)" }}
          >
            {name}
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-md mx-auto leading-[1.55] font-light">
            {tagline}
          </p>
        </div>
      </section>

      {/* ── 2. Big headline ─────────────────────────────────────────────── */}
      <section className="py-32 px-8 text-center bg-[#f5f5f7]">
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
          stat={stat}
          slug={slug}
        />
      </ScrollScrubber>

      {/* ── 4. Features ─────────────────────────────────────────────────── */}
      <section className="py-28 px-8 md:px-16 bg-[#f5f5f7]">
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
        <div className="px-8 md:px-16 pt-20 pb-8">
          <div
            className="text-[12px] font-medium uppercase tracking-[0.18em]"
            style={{ color }}
          >
            gallery
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#d2d2d7] mx-8 md:mx-16 mb-20 overflow-hidden rounded-2xl">
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
      <section className="px-8 md:px-16 py-24 border-t border-[#d2d2d7] bg-white">
        <div className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-[0.18em] mb-12">
          also from oddy
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {others.map((o) => (
            <OtherLink key={o.name} {...o} />
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#d2d2d7] px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
        <span className="text-[13px] font-semibold text-[#1d1d1f]">oddy</span>
        <span className="text-[12px] text-[#6e6e73]">© 2025 oddy. All rights reserved.</span>
      </footer>
    </main>
  )
}
