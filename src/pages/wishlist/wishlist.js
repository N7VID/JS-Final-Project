import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { Category } from "../../components/scrollable category/category";

export function wishListPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="font-inter">
    <div class="flex items-center justify-between px-6 pb-4 pt-8">
        <div class="space-x-6 flex items-center">
            <a href="/" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
            <p class="text-2xl font-bold min-h-7">My WishList</p>
        </div>
        <a href="/" data-navigo><img src="/public/images/search icon.svg" class="w-8"></a>
    </div>
    <div id="category-scroll-container" class="max-w-[1024px] my-0 mx-auto overflow-hidden"></div>
    <div class="max-w-[1300px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 pt-4 pb-[85px] gap-x-3 gap-y-5 laptop:grid-cols-4 tablet:grid-cols-3" id="card-container"></div>    
  </div>
    <div id="navbar-container"></div>
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
  const wishList = JSON.parse(localStorage.getItem("wishlist"));
  cardContainer.innerHTML = "";
  wishList.forEach((card) => {
    const cardComponent = Card({
      id: card.id,
      content: card.name,
      price: card.price,
      imgSrc: card.img,
      variant: "wishlist",
      sold: card.sold,
      vote: card.vote,
    });
    cardContainer.append(cardComponent);
  });

  return div;
}
