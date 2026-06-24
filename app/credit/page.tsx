"use client"

function CreditLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
        textDecoration: "none",
        borderBottom: "1px solid #1d1d1f",
        paddingBottom: "1px",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.4")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
    >
      {name}
    </a>
  )
}

const hPad: React.CSSProperties = {
  paddingLeft: "max(24px, 8vw)",
  paddingRight: "max(24px, 8vw)",
}

const ROW_STYLE: React.CSSProperties = {
  display: "flex",
  gap: "48px",
  alignItems: "baseline",
}

const ROLE_STYLE: React.CSSProperties = {
  fontSize: "12px",
  color: "#6e6e73",
  letterSpacing: "0.05em",
  minWidth: "180px",
  flexShrink: 0,
}

const NAME_STYLE: React.CSSProperties = {
  fontSize: "15px",
  color: "#1d1d1f",
  lineHeight: 1.7,
}

export default function CreditPage() {
  return (
    <main style={{ background: "#fff", color: "#1d1d1f", minHeight: "100vh" }}>
      <section data-nav-theme="light" style={{ ...hPad, paddingTop: "140px", paddingBottom: "120px" }}>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "72px",
          }}
        >
          Credit
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "640px" }}>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>총괄 및 기획, 제품 디자인</span>
            <span style={NAME_STYLE}>
              oddy (
              <CreditLink name="이한나" href="https://instagram.com/eeoaeeaii" />
              {" "}
              <CreditLink name="조준하" href="https://instagram.com/baehot_hungryhotdog" />
              {" "}
              <CreditLink name="서우현" href="https://instagram.com/uhyeon.seo" />
              )
            </span>
          </div>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>사진</span>
            <span style={NAME_STYLE}>
              <CreditLink name="윤산" href="https://instagram.com/san2_film" />
            </span>
          </div>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>모델</span>
            <span style={NAME_STYLE}>
              <CreditLink name="양대건" href="https://instagram.com/noekeadgnay" />
              {"  "}
              <CreditLink name="케이트" href="https://instagram.com/katelauren.z" />
            </span>
          </div>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>헤어</span>
            <span style={NAME_STYLE}>
              <CreditLink name="공지환" href="https://instagram.com/idiajjh__" />
            </span>
          </div>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>메이크업</span>
            <span style={NAME_STYLE}>
              <CreditLink name="지수연" href="https://instagram.com/xxixuyeon" />
            </span>
          </div>

          <div style={ROW_STYLE}>
            <span style={ROLE_STYLE}>스타일링</span>
            <span style={NAME_STYLE}>
              <CreditLink name="이한나" href="https://instagram.com/eeoaeeaii" />
            </span>
          </div>

          <div
            style={{
              borderTop: "1px solid #e0e0e0",
              marginTop: "20px",
              paddingTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <p style={{ margin: 0, fontSize: "13px", color: "#6e6e73", lineHeight: 1.7 }}>
              Yonsei University Integrated Design 27th Graduation Exhibition
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#6e6e73" }}>
              © 2026 oddy
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#6e6e73" }}>
              adviser :{" "}
              <CreditLink
                name="교수 신현재"
                href="https://fis.yonsei.ac.kr/faculty/member.do?mode=view&userId=QfJyPDLER8skoQ7yb91s6A%3D%3D&sosokcd=0000905"
              />
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
