import ProductPageNew, { type ProductDataNew } from "@/components/ProductPageNew"

const product: ProductDataNew = {
  name: "orbit",
  color: "#F1C300",
  heroImage: "/orbit-hero.jpg",
  productImage: "/orbit.png",
  seqVideo: "/orbit-seq.mp4",
  introImage: "/orbit-intro.png",
  detailImage: "/orbit-detail.png",
}

export default function OrbitPage() {
  return <ProductPageNew product={product} />
}
