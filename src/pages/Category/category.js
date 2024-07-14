import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { checkAuth, render, router, secondVisited } from "../../main";
import { productPageHandler } from "../product/product";
import { categoryApi } from "./api/category-api";
let brandName = "";
export function categoryPage(data) {
  let url = window.location.pathname;
  let parts = url.split("/");
  brandName = parts[2].split("-").join(" ");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex items-center space-x-6 px-6 py-4">
        <a id="back-home-btn"><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <p class="text-[#152536] text-xl font-bold min-h-7">${brandName}</p>
    </div>
    <div class="max-w-[1300px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 pt-4 pb-[85px] gap-x-3 gap-y-5 laptop:grid-cols-4 tablet:grid-cols-3" id="card-container"></div>
    <div id="navbar-container"></div>
  `;
  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

  if (data !== undefined) {
    const cardContainer = div.querySelector("#card-container");
    cardContainer.innerHTML = "";
    data.forEach((product) => {
      if (product.is_in_stock) {
        const card = Card({
          id: product.id,
          content: product.name,
          price: product.price,
          imgSrc: product.images[0],
          variant: "homePage",
        });
        cardContainer.append(card);
        div.classList = "font-inter bg-white flex flex-col min-h-screen";
      }
    });
  }
  div.querySelector("#back-home-btn").addEventListener("click", () => {
    router.navigate("/");
  });
  return div;
}
export function categoryPageHandler(match) {
  if (match) {
    let brand = match.data.brand.split("-").join(" ");
    categoryApi(brand)
      .then((res) =>
        secondVisited(() =>
          checkAuth(() => render(categoryPage(res.data), [productPageHandler]))
        )
      )
      .catch((err) => console.log(err));
  }
  const buttons = document.querySelectorAll(".categoryButton");
  buttons.forEach((button) => {
    if (button.id !== "More") {
      button.addEventListener("click", (e) => {
        let target = e.target.closest("[id]");
        let categoryId = target.id;
        router.navigate(`/category/${categoryId}`);
      });
    }
  });
}
