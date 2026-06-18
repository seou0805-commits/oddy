const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

export default function AboutPage() {
  return (
    <main style={{ background: "#fff", color: "#1d1d1f" }}>
      <section style={{ minHeight: "100vh", ...hPad, paddingTop: "140px", paddingBottom: "120px" }}>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "720px",
          }}
        >
          낯선 사람과<br />대화하게 만드는<br />물건들
        </h1>
        <p
          style={{
            fontSize: "19px",
            color: "#6e6e73",
            marginTop: "48px",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          oddy는 공공 공간에서 낯선 사람과의 대화를 유도하는 오브젝트 시리즈입니다.
          작은 불편함이 말 한마디를 만들고, 그 말 한마디가 관계를 만든다는 믿음에서 출발합니다.
        </p>
        <div
          style={{
            marginTop: "80px",
            borderTop: "1px solid #d2d2d7",
            paddingTop: "48px",
            display: "flex",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "School",     content: "연세대학교 디자인예술학부\n시각디자인학전공" },
            { label: "Exhibition", content: "2026 졸업전시\n2026. 06. 20 — 26"         },
            { label: "Venue",      content: "신촌캠퍼스 백양누리\nB1 무악로터리홀"      },
            { label: "Advisor",    content: "신현재 교수"                               },
          ].map(({ label, content }) => (
            <div key={label}>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6e6e73",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                {label}
              </p>
              <p style={{ fontSize: "15px", color: "#1d1d1f", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
