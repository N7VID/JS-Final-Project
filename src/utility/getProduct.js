import { Card } from "../components/product card/productCard";
import { root } from "../main";
import { homePageApi } from "../pages/Home/api/product-api";

export function renderProduct(data) {
  const cardContainer = root.querySelector("#card-container");
  cardContainer.innerHTML = "";
  data.forEach((product) => {
    const card = Card({
      content: product.name,
      price: product.price,
      imgSrc: product.images[0],
      id: product.id,
    });
    cardContainer.append(card);
    root.classList = "font-inter bg-white flex flex-col min-h-screen";
  });
}

export async function getProduct() {
  await homePageApi()
    .then((res) => {
      renderProduct(res.data);
    })
    .catch((e) => console.log(e));
}
