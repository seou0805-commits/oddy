"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const LINKS = [
  { name: "orbit",   href: "/orbit",   color: "#F1C300" },
  { name: "twiddle", href: "/twiddle", color: "#009ED6" },
  { name: "tipsy",   href: "/tipsy",   color: "#EB0018" },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[48px] transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
      }}
    >
      <Link
        href="/"
        className="text-[17px] font-semibold text-[#1d1d1f] hover:opacity-50 transition-opacity duration-200"
      >
        oddy
      </Link>

      <ul className="flex gap-8 list-none">
        {LINKS.map(({ name, href, color }) => (
          <li key={name}>
            <Link
              href={href}
              className="text-[13px] transition-colors duration-200"
              style={{
                color: pathname === href ? color : "rgba(29,29,31,0.5)",
                fontWeight: pathname === href ? 500 : 400,
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
