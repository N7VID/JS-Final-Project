import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { Category } from "../../components/scrollable category/category";
import { router } from "../../main";

export function mostPopularPage(data) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex items-center space-x-6 px-6 py-4">
        <a id="back-home-btn"><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <p class="text-[#152536] text-xl font-bold min-h-7">Most Popular</p>
    </div>

    <div class="flex-grow flex-col items-center justify-center">
      <div id="category-scroll-container" class="max-w-[1024px] my-0 mx-auto overflow-hidden"></div>

      <div class="max-w-[1300px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 pt-4 pb-[85px] gap-x-3 gap-y-5 laptop:grid-cols-4 tablet:grid-cols-3" id="card-container"></div>
      
      <div id="navbar-container"></div>
    </div>
  `;
  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

  const category = Category({
    content: [
      "All",
      "Nike",
      "Adidas",
      "Puma",
      "Asics",
      "Reebok",
      "New Balance",
      "Fila",
    ],
  });
  const categoryContainer = div.querySelector("#category-scroll-container");
  categoryContainer.append(category);

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
  div.querySelector("#back-home-btn").addEventListener("click", () => {
    router.navigate("/");
  });

  return div;
}
