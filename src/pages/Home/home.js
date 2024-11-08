import axios from "axios";
import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { Category } from "../../components/scrollable category/category";
import { render, router } from "../../main";
import { getCategoryHomePage } from "../../utility/getCategory";
import { handleStyleCategoryHomepage } from "../../utility/StyleCategory";
import { categoryPageHandler } from "../Category/category";
import { productPageHandler } from "../product/product";
import debounce from "lodash.debounce";
import { BASE_URL } from "../../constants";

export function homePage(data) {
  const div = document.createElement("div");
  div.innerHTML = `
    <header class="flex justify-between w-screen my-0 mx-auto py-4 px-6 max-w-[1300px]">
      <div class="flex gap-3">
        <img src="/images/default user profile.svg" alt="user-profile" class="rounded-full w-[48px]  cursor-pointer">
        <div class="flex-col justify-between">
            <span class="text-[#757475] flex items-center gap-1 cursor-default">Good Morning <img src="/images/waving-hand-sign_1f44b.png" class="w-[16px]"></span>
            <span class="font-bold cursor-pointer" id="welcome-name"></span>
        </div>
      </div>
      <div class="flex w-16 justify-between">
         <img src="/images/bell - outline.svg" class="w-7 cursor-pointer">
         <img src="/images/heart - outline.svg" class="w-7 cursor-pointer" id="wishlist">
      </div>
    </header>
    <div class="flex justify-center laptop:p-3">
      <div class="relative">
        <input autocomplete="on" type="text" placeholder="Search" id="search" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[#BAB8BC] placeholder:text-sm placeholder:font-normal pl-10"/>
        <img src="/images/search icon.svg" class="absolute top-2 left-3 w-[20px] cursor-pointer">
      </div>
    </div>
    <div class="grid grid-cols-4 gap-y-6 gap-x-6 py-4 px-6 w-fit my-0 mx-auto laptop:grid-cols-8 laptop:gap-x-9">
      <div id="Nike" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/nike-4-logo-svgrepo-com.svg" alt="nike-logo" class="w-[32px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Nike</p>
      </div>
      <div id="Adidas" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/adidas-svgrepo-com.svg" alt="adidas-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Adidas</p>
      </div>
      <div id="Puma" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/puma_logo_icon_248754.svg" alt="puma-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Puma</p>
      </div>
      <div id="Asics" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/public/images/asics.svg" alt="asics-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Asics</p>
      </div>
      <div id="Reebok" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/reebok_logo_icon_248669.svg" alt="reebok-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Reebok</p>
      </div>
      <div id="New-Balance" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/newbalance_logo_icon_248383.svg" alt="newbalance-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">New Balance</p>
      </div>
      <div id="Fila" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/public/images/fila-2.svg" alt="converse-logo" class="w-[40px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">Fila</p>
      </div>
      <div id="More" class="categoryButton flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/more-outline.svg" alt="nike-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis">More...</p>
      </div>
    </div>
    <div class="flex-grow flex-col items-center justify-center">
      <div class="flex justify-between items-center w-full px-6 py-2 max-w-[1000px] my-0 mx-auto laptop:p-4">
        <div><span class="text-[#152536] font-semibold text-xl cursor-default">Most Popular</span></div>
        <a id="see-all-btn"><span class="text-[#152536] font-bold text-[16.2px] cursor-pointer">See All</span></a>
      </div>

      <div id="category-scroll-container" class="max-w-[1024px] my-0 mx-auto overflow-hidden"></div>

      <div class="max-w-[1000px] my-0 mx-auto mb-[80px] grid grid-cols-2 px-6 py-4 gap-x-3 gap-y-5 laptop:grid-cols-4 laptop:gap-x-0 tablet:grid-cols-3" id="card-container"></div>

    </div>
    <div id="navbar-container"></div>
  `;

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

  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

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
      cardContainer.appendChild(card);
      div.classList = "font-inter bg-white flex flex-col min-h-screen";
    }
  });

  const welcomeName = div.querySelector("#welcome-name");
  let user = JSON.parse(localStorage.getItem("user"));
  welcomeName.innerHTML = user.fullName;

  div.querySelector("#see-all-btn").addEventListener("click", () => {
    router.navigate("/most-popular");
  });

  div
    .querySelector("#wishlist")
    .addEventListener("click", () => router.navigate("/wishlist"));

  return div;
}

export function searchInputHandler() {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("keydown", debounce(getSearch, 1000));
}
function getSearch(e) {
  axios
    .get(`${BASE_URL}/products?q=${e.target.value}`)
    .then((res) => {
      render(homePage(res.data), [
        getCategoryHomePage,
        handleStyleCategoryHomepage,
        categoryPageHandler,
        productPageHandler,
        searchInputHandler,
      ]);
    })
    .catch((err) => console.log(err));
}
