import { root } from "../main";
import { homePageCategoryApi } from "../pages/Home/api/product-api";
import { renderProduct } from "./getProduct";

export function getCategory() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  categoriesItem.map((category) => {
    category.addEventListener("click", (e) => {
      const category = e.target.id.toUpperCase();
      homePageCategoryApi(category)
        .then((res) => renderProduct(res.data))
        .catch((error) => console.log(error));
    });
  });
}
