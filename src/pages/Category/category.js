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
  const buttons = [];
  const Nike = document.getElementById("Nike");
  const Adidas = document.getElementById("Adidas");
  const Puma = document.getElementById("Puma");
  const Asics = document.getElementById("Asics");
  const Reebok = document.getElementById("Reebok");
  const NewBalance = document.getElementById("New-Balance");
  const Fila = document.getElementById("Fila");
  buttons.push(Nike, Adidas, Puma, Asics, Reebok, NewBalance, Fila);
  buttons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      let target = e.target.id;
      target = target.split("-").join(" ");
      router.navigate(`/category/${target}`);
      categoryApi(target)
        .then((res) => renderProduct(res.data))
        .catch((err) => console.log(err));
    });
  });
}
export function categoryHandler() {
  console.log("hi");
  router.navigate(`/category/${e.target.id}`);
}
