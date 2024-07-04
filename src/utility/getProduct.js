import { SingleProduct } from "../components/single product/singleProduct";
import { root } from "../main";

export function renderSingleProduct(product) {
  const productContainer = root.querySelector("#product-Container");
  productContainer.innerHTML = "";
  const single = SingleProduct({
    images: product.images,
    name: product.name,
    sold: product.sold,
    vote: product.vote,
    reviews: product.review,
    description: product.description,
    sizes: product.sizes,
    colors: product.colors,
    price: product.price,
  });

  productContainer.append(single);
}
