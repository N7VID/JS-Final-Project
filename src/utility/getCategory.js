import { handleNavbarStyle } from "../components/navbar mobile/navbar.js";
import { render, root } from "../main";
import { categoryPageHandler } from "../pages/Category/category.js";
import { homePageCategoryApi } from "../pages/Home/api/product-api";
import { homePage } from "../pages/Home/home.js";
import { productPageHandler } from "../pages/product/product.js";
import { handleStyleCategoryHomepage } from "./StyleCategory.js";

export function getCategory() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  categoriesItem.map((category) => {
    category.addEventListener("click", (e) => {
      const category = e.currentTarget.id.toUpperCase();
      homePageCategoryApi(category)
        .then((res) =>
          render(homePage(res.data), [
            getCategory,
            handleStyleCategoryHomepage,
            categoryPageHandler,
            productPageHandler,
            handleNavbarStyle,
          ])
        )
        .catch((error) => console.log(error));
    });
  });
}
