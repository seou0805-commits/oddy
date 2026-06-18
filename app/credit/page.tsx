const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

export default function CreditPage() {
  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>
      <section style={{ minHeight: "100vh", ...hPad, paddingTop: "140px", paddingBottom: "120px" }}>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.03em",
            marginBottom: "80px",
          }}
        >
          Credit
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "64px", maxWidth: "900px" }}>
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                borderBottom: "1px solid #d2d2d7",
                paddingBottom: "12px",
              }}
            >
              Design
            </p>
            {["서우현", "이한나", "조준하"].map((name) => (
              <p key={name} style={{ fontSize: "17px", color: "#1d1d1f", marginBottom: "8px" }}>
                {name}
              </p>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                borderBottom: "1px solid #d2d2d7",
                paddingBottom: "12px",
              }}
            >
              Advisor
            </p>
            <p style={{ fontSize: "17px", color: "#1d1d1f" }}>신현재 교수</p>
          </div>

          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                borderBottom: "1px solid #d2d2d7",
                paddingBottom: "12px",
              }}
            >
              School
            </p>
            <p style={{ fontSize: "15px", color: "#1d1d1f", lineHeight: 1.6 }}>
              연세대학교 디자인예술학부<br />시각디자인학전공
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "12px",
                color: "#6e6e73",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                borderBottom: "1px solid #d2d2d7",
                paddingBottom: "12px",
              }}
            >
              Exhibition
            </p>
            <p style={{ fontSize: "15px", color: "#1d1d1f", lineHeight: 1.6 }}>
              Yonsei University<br />
              Integrated Design 27th<br />
              Graduation Exhibition<br />
              2026. 06. 20 — 26
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
