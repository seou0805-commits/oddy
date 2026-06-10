"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const LINKS = [
  { name: "intro",   href: "/",        color: "#1a1a1a" },
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[48px] transition-all duration-300"
      style={{
        paddingLeft: "max(24px, 5vw)",
        paddingRight: "max(24px, 5vw)",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "2px solid rgba(0,0,0,0.12)",
      }}
    >
      <Link href="/" className="hover:opacity-60 transition-opacity duration-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="oddy" style={{ height: "18px", width: "auto" }} />
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
