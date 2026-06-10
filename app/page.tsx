"use client"

import Link from "next/link"

const PRODUCTS = [
  {
    name: "orbit",
    slug: "orbit",
    color: "#F1C300",
    tagline: "The one you reach for first.",
    description:
      "Engineered for seamless integration into daily life. Orbit moves with you until the moment you need it most.",
    bg: "#fff",
  },
  {
    name: "twiddle",
    slug: "twiddle",
    color: "#009ED6",
    tagline: "Precision in every interaction.",
    description:
      "Designed for those who demand exactness in every gesture. Twiddle rewards attention to detail.",
    bg: "#f5f5f7",
  },
  {
    name: "tipsy",
    slug: "tipsy",
    color: "#EB0018",
    tagline: "Bold moves only.",
    description:
      "For those who move forward without asking for permission. Tipsy doesn't play it safe.",
    bg: "#fff",
  },
]

function ProductSection({
  name,
  slug,
  color,
  tagline,
  description,
  bg,
  reverse,
}: (typeof PRODUCTS)[0] & { reverse?: boolean }) {
  return (
    <section style={{ background: bg }} className="w-full py-28 px-8 md:px-16">
      <div
        className={`max-w-6xl mx-auto flex items-center gap-12 md:gap-20 flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="text-[13px] font-medium" style={{ color }}>
              oddy {name}
            </span>
          </div>

          <h2
            className="font-bold text-[#1d1d1f] leading-tight tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
          >
            {name}
          </h2>

          <p className="text-[17px] text-[#6e6e73] leading-[1.65] max-w-sm">
            {description}
          </p>

          <Link
            href={`/${slug}`}
            className="inline-flex items-center gap-1.5 text-[17px] font-medium hover:opacity-60 transition-opacity duration-200"
            style={{ color }}
          >
            Learn more <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e8ed]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${name}-home/800/600`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-[#1d1d1f]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-8 bg-white">
        <p className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-[0.18em] mb-8">
          introducing
        </p>
        <h1
          className="font-bold text-[#1d1d1f] leading-none tracking-[-0.045em] mb-6"
          style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}
        >
          oddy
        </h1>
        <p className="text-[21px] md:text-[24px] text-[#6e6e73] font-light max-w-sm leading-[1.45]">
          Objects that move with you.
        </p>

        <div className="mt-20 flex flex-col items-center gap-3" style={{ opacity: 0.35 }}>
          <span className="text-[11px] text-[#1d1d1f] uppercase tracking-[0.18em]">scroll</span>
          <div className="w-px h-10 bg-[#1d1d1f]" />
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-[#d2d2d7]" />

      {/* ── Product sections ──────────────────────────────────────────── */}
      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.slug} {...p} reverse={i % 2 !== 0} />
      ))}

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#d2d2d7] px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
        <span className="text-[13px] font-semibold text-[#1d1d1f]">oddy</span>
        <span className="text-[12px] text-[#6e6e73]">© 2025 oddy. All rights reserved.</span>
      </footer>
    </main>
  )
}
