import ProductPageNew, { type ProductDataNew } from "@/components/ProductPageNew"

const product: ProductDataNew = {
  name: "tipsy",
  color: "#EB0018",
  heroImage: "/tipsy-hero.jpg",
  productImage: "/tipsy.png",
  seqVideo: "/tipsy-seq.mp4",
  introImage: "/tipsy-intro.png",
  detailImage: "/tipsy-detail.png",
}

export default function TipsyPage() {
  return <ProductPageNew product={product} />
}
