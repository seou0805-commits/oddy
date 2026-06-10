import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "tipsy",
  slug: "tipsy",
  color: "#EB0018",
  heroImage: "/tipsy-hero.jpg",
  tagline: "저기.. 혹시 냅킨 한 장만..?",
  description:
    "평소엔 냅킨이 반대편으로 기울어져 있다. 상대 레버를 내려야 내 쪽이 열린다. 혼자선 열리지 않는다.",
  features: [
    {
      num: "01",
      title: "교차 레버",
      body: "내가 상대 것을 열고, 상대가 내 것을 열어준다.",
    },
    {
      num: "02",
      title: "기울어진 형태",
      body: "y자의 기울기. 기대는 형태.",
    },
    {
      num: "03",
      title: "냅킨홀더",
      body: "테이블 위에서 시작하는 가장 조용한 대화.",
    },
  ],
  others: [
    { name: "orbit",   slug: "orbit",   color: "#F1C300" },
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
  ],
}

export default function TipsyPage() {
  return <ProductPage product={product} />
}
