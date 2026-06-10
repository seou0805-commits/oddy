import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "orbit",
  slug: "orbit",
  color: "#F1C300",
  heroImage: "/orbit-hero.jpg",
  tagline: "저기.. 혹시 시간 좀 알 수 있을까요?",
  description:
    "얼굴 감지 센서가 당신을 인식하는 순간, 시계는 반대 방향으로 돌아선다. 시간을 알려면 옆 사람에게 물어봐야 한다.",
  features: [
    {
      num: "01",
      title: "얼굴 감지",
      body: "사람을 감지하면 반대로 공전한다. 센서가 당신을 보고 있다.",
    },
    {
      num: "02",
      title: "360° 회전",
      body: "어느 방향으로 돌아도 뒷면만 보인다.",
    },
    {
      num: "03",
      title: "데스크 클락",
      body: "책상 위에 두는 순간 대화가 시작된다.",
    },
  ],
  others: [
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
    { name: "tipsy",   slug: "tipsy",   color: "#EB0018" },
  ],
}

export default function OrbitPage() {
  return <ProductPage product={product} />
}
