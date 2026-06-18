"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
  { name: "About",   href: "/about"   },
  { name: "Product", href: "/product" },
  { name: "Credit",  href: "/credit"  },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "max(24px, 8vw)",
        paddingRight: "max(24px, 8vw)",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Link href="/" style={{ display: "block", lineHeight: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="oddy" style={{ height: "20px", width: "auto" }} />
      </Link>

      <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
        {LINKS.map(({ name, href }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
          return (
            <li key={name}>
              <Link
                href={href}
                style={{
                  fontSize: "13px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#1d1d1f" : "rgba(29,29,31,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
