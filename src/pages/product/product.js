import { router } from "../../main";
import { renderSingleProduct } from "../../utility/getProduct";
import { productApi } from "./api/product-api";

export function productPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="product-Container"></div>
  `;
  return div;
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
