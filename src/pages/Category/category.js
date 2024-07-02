import { root, router } from "../../main";
import { renderProduct } from "../../utility/getProduct";
import { categoryApi } from "./api/category-api";
export function categoryPage(brand) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex items-center space-x-6 px-6 py-4">
        <a href="/" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <p class="text-[#152536] text-xl font-bold min-h-7">${brand}</p>
    </div>
    <div class="max-w-[1300px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 py-4 gap-x-3 gap-y-5 laptop:grid-cols-4 laptop:gap-x-0 tablet:grid-cols-3" id="card-container"></div>
  `;
  return div;
}
export function categoryPageHandler() {
  const buttons = document.querySelectorAll(".categoryButton");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let target = e.target.closest("[id]");
      if (target) {
        let categoryId = target.id;
        categoryId = categoryId.split("-").join(" ");
        router.navigate(`/category/${categoryId}`);
        categoryApi(categoryId)
          .then((res) => renderProduct(res.data))
          .catch((err) => console.log(err));
      }
    });
  });
}
