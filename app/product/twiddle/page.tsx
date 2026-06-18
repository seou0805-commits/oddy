import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "twiddle",
  slug: "twiddle",
  color: "#009ED6",
  heroImage: "/twiddle-hero.jpg",
  tagline: "저기.. 콘센트 좀 쓸 수 있을까요?",
  slogan: "앞 사람이 돌려줘야 해",
  description:
    "카페 자리를 고를 때 생기는 대화. twiddle은 그 불편한 순간을 설계한다.\ntwiddle은 손이 닿지 않는 위치에 있는 태엽을 돌려야 작동하는 멀티탭이다. 충전이 필요하다면, 앞 사람에게 먼저 말을 걸어보자.",
  stats: [
    { value: "2회",    label: "태엽 감기 횟수" },
    { value: "8h",     label: "충전 시간"       },
    { value: "2 PORT", label: "충전 포트"        },
  ],
  scrubVideo: "/twiddle-seq.mp4",
  totalScroll: 1800,
  price: "₩129,000",
  others: [
    { name: "orbit", slug: "orbit", color: "#F1C300" },
    { name: "tipsy", slug: "tipsy", color: "#EB0018" },
  ],
}

export default function TwiddlePage() {
  return <ProductPage product={product} />
}
