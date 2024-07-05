import { SingleProduct } from "../../components/single product/singleProduct";
import { root, router } from "../../main";
import { productApi } from "./api/product-api";

export function productPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="product-Container"></div>
  `;
  return div;
}

function renderSingleProduct(product) {
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

export function productPageHandler() {
  setTimeout(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        let target = e.target.closest("[id]");
        router.navigate(`/product/${target.id}`);
        productApi(target.id)
          .then((res) => renderSingleProduct(res.data))
          .catch((err) => {
            console.log(err);
          });
      });
    });
  }, 100);
}
