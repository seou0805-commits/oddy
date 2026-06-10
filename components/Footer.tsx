const hPad = { paddingLeft: "max(24px, 5vw)", paddingRight: "max(24px, 5vw)" }

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #222",
        paddingTop: "60px",
        paddingBottom: "60px",
        ...hPad,
      }}
    >
      {/* Row 1 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>
        {/* Left */}
        <div>
          <p style={{ fontSize: "11px", color: "#888", marginBottom: "6px", letterSpacing: "0.05em" }}>
            연세대학교 디자인예술학부 시각디자인학전공
          </p>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>
            Yonsei University Integrated Design<br />
            27th Graduation Exhibition
          </p>
        </div>

        {/* Right */}
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "13px", color: "#fff", marginBottom: "4px" }}>
            2026. 06. 20 — 26
          </p>
          <p style={{ fontSize: "12px", color: "#888" }}>
            연세대학교 신촌캠퍼스 백양누리 B1 무악로터리홀
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
        <p style={{ fontSize: "12px", color: "#888" }}>
          © 2026 oddy. All rights reserved.
        </p>
        <p style={{ fontSize: "12px", color: "#888", textAlign: "right" }}>
          Design: 서우현 · 이한나 · 조준하&nbsp;&nbsp;Advisor: 신현재 교수
        </p>
      </div>
    </footer>
  )
}
