import ProductPage, { type ProductData } from "@/components/ProductPage"

const product: ProductData = {
  name: "tipsy",
  slug: "tipsy",
  color: "#EB0018",
  tagline: "Bold moves only.",
  description:
    "Tipsy doesn't play it safe. A product designed to push limits and challenge norms — for those who move forward without asking for permission.",
  features: [
    {
      num: "01",
      title: "High-impact design",
      body: "Presence that's felt before it's seen. Tipsy commands the room the moment it enters.",
    },
    {
      num: "02",
      title: "Dynamic range",
      body: "From quiet to full volume in a single motion. The full spectrum of expression, always on demand.",
    },
    {
      num: "03",
      title: "Unapologetic form",
      body: "Not for everyone. That's the point. Tipsy is for those who know exactly what they want.",
    },
  ],
  stat: { value: "×2", label: "energy output" },
  others: [
    { name: "orbit",   slug: "orbit",   color: "#F1C300" },
    { name: "twiddle", slug: "twiddle", color: "#009ED6" },
  ],
}

export default function TipsyPage() {
  return <ProductPage product={product} />
}
