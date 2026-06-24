import ProductPageNew, { type ProductDataNew } from "@/components/ProductPageNew"

const product: ProductDataNew = {
  name: "twiddle",
  color: "#009ED6",
  heroImage: "/twiddle-hero.jpg",
  productImage: "/twiddle.png",
  seqVideo: "/twiddle-seq.mp4",
  introImage: "/twiddle-intro.png",
  detailImage: "/twiddle-detail.png",
}

export default function TwiddlePage() {
  return <ProductPageNew product={product} />
}
