import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "tipsy",
  slug: "tipsy",
  color: "#EB0018",
  heroImage: "/tipsy-hero.jpg",
  tagline: "저기.. 혹시 냅킨 한 장만..?",
  slogan: "내가 열어줄게, 네가 열어줘",
  description:
    "식사 자리에서 가장 짧게 나누는 대화. tipsy는 그 순간을 가만히 기다린다.\ntipsy는 내 쪽 뚜껑을 내가 열 수 없는 냅킨통이다. 급하다면 맞은편 사람에게 먼저 눈을 마주쳐보자.",
  stats: [
    { value: "2개",  label: "레버 개수"   },
    { value: "15°",  label: "기울기 각도" },
    { value: "50장", label: "냅킨 용량"   },
  ],
  scrubVideo: "/tipsy-seq.mp4",
  totalScroll: 1800,
  price: "₩69,000",
  others: [
    { name: "orbit",   slug: "orbit",   color: "#F1C300" },
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
  ],
}

export default function TipsyPage() {
  return <ProductPage product={product} />
}
