import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "orbit",
  slug: "orbit",
  color: "#F1C300",
  heroImage: "/orbit-hero.jpg",
  tagline: "저기.. 혹시 시간 좀 알 수 있을까요?",
  slogan: "시간? 나도 몰라",
  description:
    "스마트폰을 꺼내기 귀찮을 때 하는 대화. orbit은 그 상황을 유도한다.\norbit은 내 시선을 피해 반대 방향으로 도망치듯 회전하는 시계다. 지금 시간이 궁금하다면, 맞은편 사람에게 한번 물어보자.",
  stats: [
    { value: "0.3s", label: "얼굴 감지 속도" },
    { value: "360°", label: "회전 각도"       },
    { value: "80cm", label: "감지 거리"       },
  ],
  scrubVideo: "/orbit-seq.mp4",
  totalScroll: 1650,
  price: "₩89,000",
  others: [
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
    { name: "tipsy",   slug: "tipsy",   color: "#EB0018" },
  ],
}

export default function OrbitPage() {
  return <ProductPage product={product} />
}
