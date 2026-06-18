const FONT: React.CSSProperties = {
  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #e0e0e0",
        padding: "52px max(32px, 6vw) 48px",
        ...FONT,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Left: wordmark + tagline */}
        <div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            oddy
          </p>
          <p style={{ fontSize: "12px", color: "#6e6e73" }}>귀여운 불편함</p>
        </div>

        {/* Center: exhibition info */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#1d1d1f",
              lineHeight: 1.7,
              marginBottom: "6px",
            }}
          >
            Yonsei University Integrated Design<br />
            27th Graduation Exhibition
          </p>
          <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: 1.7 }}>
            2026. 06. 20 — 26<br />
            연세대학교 신촌캠퍼스 백양누리 B1 무악로터리홀
          </p>
        </div>

        {/* Right: credits */}
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "12px", color: "#1d1d1f", lineHeight: 1.9 }}>
            Design: 서우현 · 이한나 · 조준하
          </p>
          <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: 1.9 }}>
            Advisor: 신현재 교수
          </p>
          <p style={{ fontSize: "12px", color: "#6e6e73", marginTop: "8px" }}>
            © 2026 oddy
          </p>
        </div>
      </div>
    </footer>
  )
}
