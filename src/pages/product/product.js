import { SingleProduct } from "../../components/single product/singleProduct";
import { checkAuth, render, root, router, secondVisited } from "../../main";
import { productApi } from "./api/product-api";

export function productPage(product) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="product-Container"></div>
  `;
  const productContainer = div.querySelector("#product-Container");
  productContainer.innerHTML = "";
  const single = SingleProduct({
    id: product.id,
    images: product.images,
    name: product.name,
    sold: product.sold,
    vote: product.vote,
    reviews: product.review,
    description: product.description,
    sizes: product.sizes,
    colors: product.colors,
    price: product.price,
    isInStock: product.is_in_stock,
    inStock: product.in_stock,
  });

  productContainer.append(single);

  return div;
}

export function productPageHandler() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      let target = e.target.closest("[id]");
      router.navigate(`/product/${target.id}`);
      productApi(target.id)
        .then((res) =>
          secondVisited(() => checkAuth(() => render(productPage(res.data))))
        )
        .catch((err) => {
          console.log(err);
        });
    });
  });
}
