import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "twiddle",
  slug: "twiddle",
  color: "#009ED6",
  heroImage: "/twiddle-hero.jpg",
  tagline: "저기.. 콘센트 좀 쓸 수 있을까요?",
  description:
    "태엽이 손에 닿지 않는 위치에 설계되어 있다. 충전하려면 옆 사람의 손이 필요하다. 정확히 2바퀴.",
  features: [
    {
      num: "01",
      title: "태엽 키",
      body: "손이 닿지 않는 위치. 설계된 불편함.",
    },
    {
      num: "02",
      title: "2바퀴",
      body: "정확히 2바퀴. 그 이상도 이하도 아니다.",
    },
    {
      num: "03",
      title: "듀얼 유닛",
      body: "두 유닛이 나란히 붙어있다.",
    },
  ],
  others: [
    { name: "orbit", slug: "orbit", color: "#F1C300" },
    { name: "tipsy", slug: "tipsy", color: "#EB0018" },
  ],
}

export default function TwiddlePage() {
  return <ProductPage product={product} />
}
