import type { Metadata } from "next"
import { Syne, Space_Mono } from "next/font/google"
import Nav from "@/components/Nav"
import "./globals.css"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "oddy",
  description: "Objects that move with you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
