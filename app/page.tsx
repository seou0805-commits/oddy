"use client"

import Link from "next/link"
import Footer from "@/components/Footer"

const PRODUCTS = [
  {
    name: "orbit",
    slug: "orbit",
    color: "#F1C300",
    tagline: "시간? 나도 몰라",
    description:
      "얼굴 감지 센서가 당신을 인식하는 순간, 시계는 반대 방향으로 돌아선다. 시간을 알려면 옆 사람에게 물어봐야 한다.",
    bg: "#fff",
  },
  {
    name: "twiddle",
    slug: "twiddle",
    color: "#009ED6",
    tagline: "앞 사람이 돌려줘야 해",
    description:
      "태엽이 손에 닿지 않는 위치에 설계되어 있다. 충전하려면 옆 사람의 손이 필요하다. 정확히 2바퀴.",
    bg: "#f5f5f7",
  },
  {
    name: "tipsy",
    slug: "tipsy",
    color: "#EB0018",
    tagline: "내가 열어줄게, 네가 열어줘",
    description:
      "평소엔 냅킨이 반대편으로 기울어져 있다. 상대 레버를 내려야 내 쪽이 열린다. 혼자선 열리지 않는다.",
    bg: "#fff",
  },
]

const hPad = { paddingLeft: "max(24px, 5vw)", paddingRight: "max(24px, 5vw)" }

function ProductSection({
  name,
  slug,
  color,
  tagline,
  description,
  bg,
  reverse,
}: (typeof PRODUCTS)[0] & { reverse?: boolean }) {
  return (
    <section
      style={{ background: bg, ...hPad }}
      className="w-full py-28"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center gap-12 md:gap-20 flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="text-[13px] font-medium" style={{ color }}>
              oddy {name}
            </span>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/${name}.png`}
            alt={name}
            style={{ height: "32px", width: "auto", marginBottom: "12px" }}
          />

          <p className="text-[17px] text-[#6e6e73] leading-[1.65] max-w-sm">
            {description}
          </p>

          <Link
            href={`/${slug}`}
            className="inline-flex items-center gap-1.5 text-[17px] font-medium hover:opacity-60 transition-opacity duration-200"
            style={{ color }}
          >
            Learn more <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e8ed]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${name}-home/800/600`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-[#1d1d1f]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#000" }}>
        {/* Background video */}
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          onCanPlay={(e) => { const v = e.target as HTMLVideoElement; v.muted = true; v.play().catch(() => {}); }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            zIndex: 0,
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/hero-bg.mov" type="video/quicktime" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1 }} />
        {/* Center: logo + subtitle */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", zIndex: 2 }}>
        <svg
          viewBox="0 0 6267 2854"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "clamp(320px, 70vw, 800px)", height: "auto", display: "block", marginBottom: "40px" }}
        >
          {/* o — outer ring + inner hole, evenodd makes the hole transparent */}
          <g className="svg-o">
            <path
              fillRule="evenodd"
              d="M-0.000388309 1228.35C-0.000388309 1164.65 8.04961 1103.4 24.1496 1044.6C40.9496 985.1 64.3996 929.8 94.4996 878.7C124.6 827.6 160.65 781.4 202.65 740.1C244.65 698.1 291.2 662.4 342.3 633C393.4 602.9 448 579.8 506.1 563.7C564.9 546.9 626.15 538.5 689.85 538.5C752.85 538.5 813.75 546.9 872.55 563.7C931.35 579.8 985.95 602.9 1036.35 633C1087.45 662.4 1134 698.1 1176 740.1C1218 781.4 1254.05 827.6 1284.15 878.7C1314.25 929.8 1337.35 985.1 1353.45 1044.6C1370.25 1103.4 1378.65 1164.65 1378.65 1228.35C1378.65 1292.05 1370.25 1353.3 1353.45 1412.1C1337.35 1470.9 1314.25 1525.85 1284.15 1576.95C1254.05 1627.35 1218 1673.55 1176 1715.55C1134 1757.55 1087.45 1793.6 1036.35 1823.7C985.95 1853.1 931.35 1876.2 872.55 1893C813.75 1909.1 752.85 1917.15 689.85 1917.15C626.15 1917.15 564.9 1909.1 506.1 1893C448 1876.2 393.4 1853.1 342.3 1823.7C291.2 1793.6 244.65 1757.55 202.65 1715.55C160.65 1673.55 124.6 1627.35 94.4996 1576.95C64.3996 1525.85 40.9496 1470.9 24.1496 1412.1C8.04961 1353.3 -0.000388309 1292.05 -0.000388309 1228.35ZM296.1 1228.35C296.1 1284.35 305.9 1337.55 325.5 1387.95C345.1 1437.65 372.4 1481.05 407.4 1518.15C442.4 1555.25 483.7 1584.65 531.3 1606.35C579.6 1628.05 632.1 1638.9 688.8 1638.9C744.1 1638.9 795.2 1628.05 842.1 1606.35C889.7 1584.65 930.65 1555.25 964.95 1518.15C999.25 1481.05 1025.85 1437.65 1044.75 1387.95C1064.35 1337.55 1074.15 1284.35 1074.15 1228.35C1074.15 1173.05 1064.35 1120.2 1044.75 1069.8C1025.85 1019.4 999.25 975.3 964.95 937.5C930.65 899 889.7 868.55 842.1 846.15C795.2 823.05 744.1 811.5 688.8 811.5C632.1 811.5 579.6 823.05 531.3 846.15C483.7 868.55 442.4 899 407.4 937.5C372.4 975.3 345.1 1019.4 325.5 1069.8C305.9 1120.2 296.1 1173.05 296.1 1228.35Z"
            />
          </g>
          {/* dd — both d shapes; evenodd punches inner rectangles as holes */}
          <g className="svg-dd">
            <path
              fillRule="evenodd"
              d="M1861.2 1929V1659H1588.2V816H1861.2V543H2680.2V-0.000125885H2983.2V1659H2707.2V1929H1861.2ZM1891.2 1629H2677.2V843H1891.2V1629ZM3470.42 1929V1659H3197.42V816H3470.42V543H4289.42V-0.000125885H4592.42V1659H4316.42V1929H3470.42ZM3500.42 1629H4286.42V843H3500.42V1629Z"
            />
          </g>
          {/* y */}
          <g className="svg-y">
            <path d="M6167.92 619.92C6143.2 619.92 6123.63 634.34 6109.21 663.18C6061.83 755.88 6012.39 864.03 5960.89 987.63C5911.45 1111.23 5862.01 1239.98 5812.57 1373.88C5763.13 1507.78 5715.75 1637.56 5670.43 1763.22C5627.17 1886.82 5588.03 1994.97 5553.01 2087.67C5443.83 2369.89 5331.56 2567.65 5216.2 2680.95C5100.84 2796.31 4982.39 2853.99 4860.85 2853.99C4801.11 2853.99 4752.7 2841.63 4715.62 2816.91C4676.48 2794.25 4656.91 2761.29 4656.91 2718.03C4654.85 2676.83 4678.54 2629.45 4727.98 2575.89C4727.98 2575.89 4747.55 2586.19 4786.69 2606.79C4825.83 2627.39 4872.18 2637.69 4925.74 2637.69C4977.24 2637.69 5027.71 2619.15 5077.15 2582.07C5128.65 2544.99 5176.03 2496.58 5219.29 2436.84C5264.61 2379.16 5303.75 2317.36 5336.71 2251.44C5371.73 2187.58 5398.51 2126.81 5417.05 2069.13C5437.65 2013.51 5447.95 1970.25 5447.95 1939.35C5447.95 1873.43 5431.47 1790 5398.51 1689.06C5365.55 1586.06 5323.32 1476.88 5271.82 1361.52C5222.38 1244.1 5170.88 1129.77 5117.32 1018.53C5065.82 907.29 5021.53 810.47 4984.45 728.07C4963.85 684.81 4943.25 657 4922.65 644.64C4902.05 630.22 4868.06 623.01 4820.68 623.01C4808.32 623.01 4802.14 610.65 4802.14 585.93C4802.14 575.63 4803.17 565.33 4805.23 555.03C4809.35 544.73 4814.5 539.58 4820.68 539.58C4878.36 539.58 4927.8 540.61 4969 542.67C5010.2 544.73 5058.61 545.76 5114.23 545.76C5153.37 545.76 5200.75 544.73 5256.37 542.67C5314.05 540.61 5377.91 539.58 5447.95 539.58C5456.19 539.58 5461.34 543.7 5463.4 551.94C5465.46 560.18 5466.49 569.45 5466.49 579.75C5466.49 606.53 5460.31 619.92 5447.95 619.92H5308.9C5282.12 619.92 5268.73 629.19 5268.73 647.73C5268.73 662.15 5286.24 713.65 5321.26 802.23C5356.28 890.81 5400.57 1005.14 5454.13 1145.22C5507.69 1283.24 5562.28 1435.68 5617.9 1602.54C5665.28 1448.04 5710.6 1310.02 5753.86 1188.48C5799.18 1064.88 5836.26 959.82 5865.1 873.3C5893.94 786.78 5908.36 720.86 5908.36 675.54C5908.36 652.88 5903.21 638.46 5892.91 632.28C5884.67 626.1 5876.43 623.01 5868.19 623.01H5722.96C5712.66 623.01 5707.51 611.68 5707.51 589.02C5707.51 578.72 5708.54 568.42 5710.6 558.12C5714.72 545.76 5718.84 539.58 5722.96 539.58C5801.24 539.58 5858.92 540.61 5896 542.67C5933.08 544.73 5974.28 545.76 6019.6 545.76C6056.68 545.76 6090.67 544.73 6121.57 542.67C6152.47 540.61 6193.67 539.58 6245.17 539.58C6253.41 539.58 6258.56 543.7 6260.62 551.94C6264.74 560.18 6266.8 569.45 6266.8 579.75C6266.8 606.53 6259.59 619.92 6245.17 619.92H6167.92Z" />
          </g>
        </svg>
        <p className="text-[21px] md:text-[24px] text-white/70 font-light max-w-sm leading-[1.45] text-center">
          낯선 사람과 대화하게 만드는 물건들
        </p>
        </div>

        {/* Bottom: scroll indicator */}
        <div style={{ position: "absolute", bottom: "48px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", zIndex: 2 }}>
          <span className="text-[11px] text-white/50 uppercase tracking-[0.18em]">scroll</span>
          <div className="w-px scroll-line bg-white/50" style={{ height: "60px" }} />
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-[#d2d2d7]" />

      {/* ── Product sections ──────────────────────────────────────────── */}
      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.slug} {...p} reverse={i % 2 !== 0} />
      ))}

      <Footer />
    </main>
  )
}
