import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { Toast } from "../../components/toast/toast";
import { root, router } from "../../main";

export function cartPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="font-inter">
    <div class="flex items-center justify-between px-6 pb-4 pt-8">
        <div class="space-x-6 flex">
            <a href="/" data-navigo><img src="/public/images/logo-balck.svg" class="w-5"></a>
            <p class="text-2xl font-bold min-h-7">My Cart</p>
        </div>
        <a href="/" data-navigo><img src="/public/images/search icon.svg" class="w-8"></a>
    </div>
    <div id="toast-container"></div>
    <div id="card-container" class="flex flex-col pt-8 pb-48 gap-8"></div>
    <div class="fixed bottom-[77px] w-full h-[90px] rounded-t-3xl flex items-center justify-around gap-4 border-t-2 border-[#e9e9e9] bg-white">
      <div class="flex flex-col">
          <span class="text-[#757475] text-sm">Total price</span>
          <span class="text-2xl font-extrabold">$<span id="total-price">240.00</span></span>
      </div>
      <div id="button-checkout" class="bg-black rounded-full py-4 min-w-20 px-[70px] text-white font-medium shadow-cart flex justify-between gap-2 items-center">
      <div>Checkout</div>
      <img src="/public/images/arrow-right-white.svg" class="w-6">
      </div>
    </div>
  </div>  
  <div id="navbar-container"></div>
    `;
  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

  const cardContainer = div.querySelector("#card-container");
  const totalPrice = div.querySelector("#total-price");

  let records = JSON.parse(localStorage.getItem("cart"));
  if (!records || records.length === 0) {
    cardContainer.innerHTML = "EMPTY :)";
  } else {
    records.forEach((record) => {
      const card = Card({
        content: record.name,
        price: record.price,
        imgSrc: record.thumbnail,
        variant: "cart",
        colorCode: record.colorCode,
        colorName: record.colorName,
        quantity: record.quantity,
        size: record.size,
      });
      cardContainer.append(card);
    });
  }
  const cards = Object.values(div.querySelectorAll(".card"));
  const toastContainer = div.querySelector("#toast-container");
  let total = 0;
  let cardEndPrice = 0;
  let added = 0;
  cards.map((card, cardIndex) => {
    const addButton = card.querySelector("#add");
    const minusButton = card.querySelector("#minus");
    const quantityNumber = card.querySelector("#quantity");
    const priceNumber = card.querySelector("#end-price");
    const deleteButton = card.querySelector("#delete");
    let currentQuantity = parseInt(quantityNumber.innerHTML);
    let currentPrice = parseInt(priceNumber.innerHTML);

    deleteButton.addEventListener("click", () => {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      let updatedCards = cartLocal.filter(
        (value, index) => index !== cardIndex
      );
      cardContainer.childNodes[cardIndex].remove();
      localStorage.setItem("cart", JSON.stringify(updatedCards));
    });

    priceNumber.innerHTML = `${currentQuantity * currentPrice}`;
    total += parseInt(priceNumber.innerHTML);
    addButton.addEventListener("click", () => {
      if (currentQuantity < 10) {
        currentQuantity++;
        cardEndPrice = currentQuantity * currentPrice;
        priceNumber.innerHTML = cardEndPrice;
        // console.log(parseInt(cardEndPrice - currentPrice));
        added = parseInt(cardEndPrice - currentPrice);
        totalPrice.innerHTML = added + total;
        total += added;
      } else {
        const toast = Toast({
          content: "No more in stock!",
          variant: "error",
        });
        toastContainer.appendChild(toast);
      }
      quantityNumber.innerHTML = `${currentQuantity}`;
    });

    minusButton.addEventListener("click", () => {
      if (currentQuantity > 1) {
        currentQuantity--;
        priceNumber.innerHTML = `${currentQuantity * currentPrice}`;
        total += parseInt(priceNumber.innerHTML);
      } else {
        const toast = Toast({
          content: "Minimum order quantity!",
          variant: "error",
        });
        toastContainer.appendChild(toast);
      }
      quantityNumber.innerHTML = `${currentQuantity}`;
    });
  });
  totalPrice.innerHTML = total;
  return div;
}

export function handleCheckoutButton() {
  const checkoutButton = document.getElementById("button-checkout");
  checkoutButton.addEventListener("click", () => router.navigate("/checkout"));
}
