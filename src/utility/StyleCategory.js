import { root } from "../main";

export function handleStyleCategoryHomepage() {
  const categoriesNode = root.querySelectorAll(".category");
  const categoriesItem = Object.values(categoriesNode);
  categoriesItem.forEach((category) => {
    category.addEventListener("click", () => {
      categoriesItem.forEach((category) => {
        category.classList.add("text-[#343A40]", "font-semibold");
        category.classList.remove("text-white", "bg-[#343A40]");
      });
      category.classList.remove("text-[#343A40]", "font-semibold");
      category.classList.add("text-white", "bg-[#343A40]");
    });
  });
}
