import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "twiddle",
  slug: "twiddle",
  color: "#009ED6",
  tagline: "Precision in every interaction.",
  description:
    "Twiddle brings control to your fingertips. Designed for those who demand exactness in every gesture — a product that rewards attention to detail.",
  features: [
    {
      num: "01",
      title: "Haptic precision",
      body: "Sub-millimeter feedback with tactile response that confirms every input before you've consciously registered it.",
    },
    {
      num: "02",
      title: "Responsive interface",
      body: "Instantaneous. No lag, no interpretation required. Your input, exactly as intended, every single time.",
    },
    {
      num: "03",
      title: "Adaptive calibration",
      body: "Learns your preference over time. The longer you use it, the more precisely it fits the way you move.",
    },
  ],
  stat: { value: "0.3ms", label: "response time" },
  others: [
    { name: "orbit", slug: "orbit", color: "#F1C300" },
    { name: "tipsy", slug: "tipsy", color: "#EB0018" },
  ],
}

export default function TwiddlePage() {
  return <ProductPage product={product} />
}
