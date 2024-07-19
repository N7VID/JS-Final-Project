import { checkAuth, render, root, secondVisited } from "../main";
import { categoryPageHandler } from "../pages/Category/category.js";
import { homePageCategoryApi } from "../pages/Home/api/product-api";
import { homePage } from "../pages/Home/home.js";
import { mostPopularPage } from "../pages/Most popular/mostPopular.js";
import { productPageHandler } from "../pages/product/product.js";
import { showWishlistCards, wishListPage } from "../pages/wishlist/wishlist.js";
import { handleStyleCategoryHomepage } from "./StyleCategory.js";

export function getCategoryHomePage() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  categoriesItem.map((category) => {
    category.addEventListener("click", (e) => {
      const category = e.currentTarget.id.toUpperCase();
      homePageCategoryApi(category)
        .then((res) =>
          render(homePage(res.data), [
            getCategoryHomePage,
            handleStyleCategoryHomepage,
            categoryPageHandler,
            productPageHandler,
          ])
        )
        .catch((error) => console.log(error));
    });
  });
}

export function getCategoryMostPopular() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  categoriesItem.map((category) => {
    category.addEventListener("click", (e) => {
      const category = e.currentTarget.id.toUpperCase();
      homePageCategoryApi(category)
        .then((res) =>
          render(mostPopularPage(res.data), [
            getCategoryMostPopular,
            handleStyleCategoryHomepage,
            productPageHandler,
          ])
        )
        .catch((error) => console.log(error));
    });
  });
}

export function getCategoryWishList() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  let currentWishList = JSON.parse(localStorage.getItem("wishlist"));
  showWishlistCards(currentWishList);
  productPageHandler();
  categoriesItem.map((category) => {
    category.addEventListener("click", (e) => {
      const category = e.currentTarget.id.toUpperCase();
      if (currentWishList) {
        if (category !== "ALL") {
          let filteredWishList = currentWishList.filter(
            (card) => card.brand === category
          );
          showWishlistCards(filteredWishList);
          productPageHandler();
        } else {
          showWishlistCards(currentWishList);
          productPageHandler();
        }
      }
    });
  });
}
