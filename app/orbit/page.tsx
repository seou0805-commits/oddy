import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "orbit",
  slug: "orbit",
  color: "#F1C300",
  tagline: "The one you reach for first.",
  description:
    "Orbit moves with you. Engineered for seamless integration into daily life — the product that disappears into your routine until you need it most.",
  features: [
    {
      num: "01",
      title: "Fluid motion",
      body: "Every interaction flows naturally. No hard stops, no resistance — just continuous, satisfying movement that feels inevitable.",
    },
    {
      num: "02",
      title: "Precision-tuned",
      body: "Calibrated to respond at the exact threshold you set. Consistent across thousands of cycles without drift.",
    },
    {
      num: "03",
      title: "Zero-compromise build",
      body: "Aircraft-grade materials built to last. The kind of object you keep for years and reach for without thinking.",
    },
  ],
  stat: { value: "97%", label: "daily carry rate" },
  others: [
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
    { name: "tipsy",   slug: "tipsy",   color: "#EB0018" },
  ],
}

export default function OrbitPage() {
  return <ProductPage product={product} />
}
