import type { Metadata, Viewport } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "oddy",
  description: "Objects that move with you.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
