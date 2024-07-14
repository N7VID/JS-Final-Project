import Splide from "@splidejs/splide";
import { router } from "../../main";
import { Toast } from "../toast/toast";

export function SingleProduct({
  id,
  images,
  name,
  sold,
  vote,
  reviews,
  description,
  sizes,
  colors,
  price,
  isInStock,
  inStock,
}) {
  const div = document.createElement("div");
  div.classList = "laptop:flex laptop:justify-center laptop:py-32 laptop:px-2";
  div.innerHTML = `
    <section class="my-bg splide w-[428px] h-[428px] p-0" aria-labelledby="carousel-heading">
        <a id="back-home-btn" class="absolute top-[16px] left-[24px] z-10"><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <div class="splide__track mx-auto my-0 w-full"> 
        <div id="toast-container"></div>
          <ul class="splide__list">
          ${images
            .map(
              (image, index) => `
            <li class="splide__slide">
              <img src="${image}" alt="slide${
                index + 1
              }" class="object-fill w-[428px] h-[428px]"/>
            </li>`
            )
            .join("")}
          </ul>       
        </div>
    </section>
    <div class="font-inter px-5 laptop:w-2/3 cursor-default">
        <div class="pt-7 border-b-2 border-[#e9e9e9]">
            <div class="flex justify-between">
                <p class="text-[#152536] text-3xl font-extrabold text-nowrap text-ellipsis overflow-hidden">${name}</p>
                <img src="/public/images/heart - outline.svg" class="w-8" id="wishlist">
            </div>
            <div class="py-4 flex items-center gap-4 text-[#152536]">
                <div class="font-semibold text-[12px] bg-[#e9e9e9] w-fit py-[6px] px-3 rounded-lg">${sold} sold</div>
                <div class="text-[13px] font-medium flex items-center gap-2 justify-around">
                    <img src="/public/images/star.svg" class="w-5">
                    <span>${vote}</span>
                    <span>(${reviews} reviews)</span>
                </div>
            </div>
        </div>
        <div class="pt-4">
            <div>
                <p class="text-lg font-extrabold pb-2">Description</p>
                <p class="max-h-[3em] overflow-hidden relative">${description}<a class="absolute right-0 bottom-0 font-semibold bg-white pl-2">view more...</a></p>
            </div>
            <div class="pt-4 flex items-center gap-8 laptop:justify-around laptop:pb-4">
                <div class="flex-col flex">
                    <div class="text-lg font-extrabold pb-1">Size</div>
                    <div id="size-container" class="flex items-center justify-between gap-2 h-[45px] cursor-default">
                    ${sizes
                      .map(
                        (size) => `
                        <div data-selected="false" class="sizeButton w-10 h-10 border-[2.4px] flex items-center justify-center border-[#6C757D] text-[#6C757D] font-bold rounded-full">${size}</div>
                      `
                      )
                      .join("")}
                    
                    </div>
                </div>
                <div class="scroll-hidden flex-col flex overflow-x-auto flex-nowrap whitespace-nowraps">
                    <div class="text-lg font-extrabold pb-1">Color</div>
                    <div class="flex items-center gap-[10px] h-[45px] cursor-default">
                    ${colors
                      .map((color) => {
                        return `
                          <div data-color="${color.colorName}" data-selected="false" class="colorButton w-9 h-9 flex items-center justify-center shadow-sm shadow-black font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto" style="background-color: ${color.code};"><img src="" id="check-img" class="w-6"></div>
                        `;
                      })
                      .join("")}
                    </div>
                </div>

            </div>
            </div>
            <div class="py-4 flex items-center gap-6">
                 <div class="text-lg font-extrabold">Quantity</div>
                 <div class="bg-[#e9e9e9] rounded-3xl flex items-center gap-4 py-2 px-4">
                    <div><img src="/public/images/minus.svg" id="minus-button" class="w-6 cursor-pointer"></div>
                    <div class="text-xl font-extrabold cursor-default" id="quantity-number">1</div>
                    <div><img src="/public/images/add.svg" id="add-button" class="w-6 cursor-pointer"></div>
                 </div>
            </div>
            <div class="pt-4 flex items-center justify-between gap-6 border-t-2 border-[#e9e9e9]">
                <div class="flex flex-col">
                    <span class="text-[#757475]">Total price</span>
                    <span class="text-2xl font-extrabold">$<span id="price-number">${price}</span></span>
                </div>
                <div id="button-submit" class="cursor-pointer bg-black rounded-full py-4 min-w-[260px] px-[70px] max-h-[56px] text-white font-medium shadow-[#acacac] shadow-md flex justify-between gap-2 items-center">
                    <img src="/public/images/cart-single.svg" class="w-6">
                    <div>Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
  `;

  setTimeout(() => {
    new Splide(".splide", {
      classes: {
        arrows: "splide__arrows hidden",
        page: "splide__pagination__page custom-pagination-product",
      },
    }).mount();
  }, 0);

  const backHomeButton = div.querySelector("#back-home-btn");
  backHomeButton.addEventListener("click", () => {
    router.navigate("/");
  });

  const sizeButtons = div.querySelectorAll(".sizeButton");
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((button) => {
        button.classList.add("border-[#6C757D]", "text-[#6C757D]", "font-bold");
        button.classList.remove("bg-black", "text-white", "border-black");
        button.setAttribute("data-selected", "false");
      });
      button.classList.remove(
        "border-[#6C757D]",
        "text-[#6C757D]",
        "font-bold"
      );
      button.classList.add("bg-black", "text-white", "border-black");
      button.setAttribute("data-selected", "true");
    });
  });

  const colorButtons = div.querySelectorAll(".colorButton");
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      colorButtons.forEach((button) => {
        button.querySelector("#check-img").src = "";
        button.setAttribute("data-selected", "false");
      });
      const bgColor = window.getComputedStyle(button).backgroundColor;

      button.querySelector("#check-img").src = isColorDark(bgColor)
        ? "/public/images/check-white.svg"
        : "/public/images/check-black.svg";
      button.setAttribute("data-selected", "true");
    });
  });

  const addButton = div.querySelector("#add-button");
  const minusButton = div.querySelector("#minus-button");
  const quantityNumber = div.querySelector("#quantity-number");
  const priceNumber = div.querySelector("#price-number");
  const toastContainer = div.querySelector("#toast-container");
  let currentPrice = priceNumber.innerHTML;
  addButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityNumber.innerHTML);
    if (currentQuantity < inStock) {
      currentQuantity++;
      priceNumber.innerHTML = `${currentQuantity * currentPrice}`;
    } else {
      const toast = Toast({
        content: "No more in stock!",
        variant: "info",
      });
      toastContainer.appendChild(toast);
    }
    quantityNumber.innerHTML = `${currentQuantity}`;
  });
  minusButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityNumber.innerHTML);
    if (currentQuantity > 1) {
      currentQuantity--;
      priceNumber.innerHTML = `${currentQuantity * currentPrice}`;
    } else {
      const toast = Toast({
        content: "Minimum order quantity!",
        variant: "info",
      });
      toastContainer.appendChild(toast);
    }
    quantityNumber.innerHTML = `${currentQuantity}`;
  });

  let selectedSize, selectedColorName, selectedColorCode;
  const submitButton = div.querySelector("#button-submit");
  submitButton.addEventListener("click", () => {
    Object.values(colorButtons).forEach((colorButton) => {
      if (colorButton.dataset.selected === "true") {
        selectedColorName = colorButton.dataset.color;
        selectedColorCode = colorButton.style.backgroundColor;
      }
    });
    Object.values(sizeButtons).forEach((sizeButton) => {
      if (sizeButton.dataset.selected === "true") {
        selectedSize = sizeButton.firstChild.data;
      }
    });

    if (selectedColorName && selectedColorCode && selectedSize) {
      let records = localStorage.getItem("cart");
      records = records ? JSON.parse(records) : [];
      let existingCard = records.find(
        (record) =>
          record.id === id &&
          record.size === selectedSize &&
          record.colorName === selectedColorName &&
          record.colorCode === selectedColorCode
      );
      if (existingCard) {
        existingCard.quantity =
          parseInt(existingCard.quantity) + parseInt(quantityNumber.innerHTML);
        const toast = Toast({
          content: "Existed card has been updated!",
          variant: "info",
        });
        toastContainer.appendChild(toast);
      } else {
        const newRecord = {
          id: `${id}`,
          name: `${name}`,
          price: `${price}`,
          thumbnail: `${images[0]}`,
          quantity: `${quantityNumber.innerHTML}`,
          size: `${selectedSize}`,
          inStock: `${inStock}`,
          isInStock: isInStock,
          colorName: `${selectedColorName}`,
          colorCode: `${selectedColorCode}`,
        };
        records.push(newRecord);
      }
      localStorage.setItem("cart", JSON.stringify(records));
      const toast = Toast({
        content: "Product has been added to the Cart!",
        variant: "success",
      });
      toastContainer.appendChild(toast);
    } else {
      const toast = Toast({
        content: "Choose size & color!",
        variant: "error",
      });
      toastContainer.appendChild(toast);
    }
  });

  div.querySelector("#wishlist").addEventListener("click", () => {
    let wishList = localStorage.getItem("wishlist");
    wishList = wishList ? JSON.parse(wishList) : [];
    const newWishlist = {
      id,
      name,
      vote,
      sold,
      img: images[0],
      price,
    };
    wishList.push(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  });

  return div;
}

function isColorDark(color) {
  const rgb = color
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);
  const r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 128;
}
