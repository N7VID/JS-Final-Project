import { Card } from "../../components/product card/productCard";
import { render, root, router } from "../../main";
import { productPageHandler } from "../product/product";
import { categoryApi } from "./api/category-api";
let brandName;
export function categoryPage(brand, data) {
  if (brand) {
    brandName = brand;
  }
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex items-center space-x-6 px-6 py-4">
        <a href="/" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <p class="text-[#152536] text-xl font-bold min-h-7">${brandName}</p>
    </div>
    <div class="max-w-[1300px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 py-4 gap-x-3 gap-y-5 laptop:grid-cols-4 tablet:grid-cols-3" id="card-container"></div>
  `;

  console.log(data);
  if (data !== undefined) {
    const cardContainer = div.querySelector("#card-container");
    cardContainer.innerHTML = "";
    data.forEach((product) => {
      const card = Card({
        content: product.name,
        price: product.price,
        imgSrc: product.images[0],
        id: product.id,
      });
      cardContainer.appendChild(card);
      div.classList = "font-inter bg-white flex flex-col min-h-screen";
    });
  }
  return div;
}
export function categoryPageHandler() {
  const buttons = root.querySelectorAll(".categoryButton");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let target = e.target.closest("[id]");
      if (target) {
        let categoryId = target.id;
        categoryId = categoryId.split("-").join(" ");
        router.navigate(`/category/${categoryId}`);
        categoryApi(categoryId)
          .then((res) =>
            render(categoryPage("", res.data), [productPageHandler])
          )
          .catch((err) => console.log(err));
      }
    });
  });
}
