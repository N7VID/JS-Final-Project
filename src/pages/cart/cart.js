import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { Toast } from "../../components/toast/toast";
import { router } from "../../main";
import { productApi } from "../product/api/product-api";
import { Modal } from "./components/modal/modal";

export function cartPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="font-inter">
    <div class="flex items-center justify-between px-6 pb-4 pt-8">
        <div class="space-x-6 flex items-center">
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
    <div id="navbar-container"></div>
    <div id="modal-container"></div>  
  </div>  

    `;
  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

  const cardContainer = div.querySelector("#card-container");
  const totalPrice = div.querySelector("#total-price");

  let records = JSON.parse(localStorage.getItem("cart"));
  if (!records || records.length === 0) {
    cardContainer.innerHTML = `
      <div class="flex-grow flex flex-col justify-center items-center pt-16">
        <img src="/public/images/Empty state icon..svg">
        <div class="font-bold text-[22px]">Your Cart is Empty!</div>
        <div class="font-semibold text-[#757475] pt-4">You can see the products on the Home page.</div>
      </div>
    `;
  } else {
    records.forEach((record) => {
      const card = Card({
        id: record.id,
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
  cards.forEach((card) => {
    const addButton = card.querySelector("#add");
    const minusButton = card.querySelector("#minus");
    const quantityNumber = card.querySelector("#quantity");
    const priceNumber = card.querySelector("#end-price");
    const deleteButtonCard = card.querySelector("#delete");
    let currentQuantity = parseInt(quantityNumber.innerHTML);
    let currentPrice = parseInt(priceNumber.innerHTML);

    deleteButtonCard.addEventListener("click", () => {
      const modalContainer = div.querySelector("#modal-container");
      let carts = JSON.parse(localStorage.getItem("cart"));
      const cardId = card.id;
      let selectedCart = carts.find((cart) => cart.id === cardId);
      if (selectedCart) {
        modalContainer.innerHTML = "";
        const modal = Modal({
          content: selectedCart.name,
          price: selectedCart.price,
          imgSrc: selectedCart.thumbnail,
          colorCode: selectedCart.colorCode,
          colorName: selectedCart.colorName,
          quantity: selectedCart.quantity,
          size: selectedCart.size,
        });
        modalContainer.append(modal);
      } else {
        console.error("Cart not found!");
      }

      const modalDiv = div.querySelector("#modal");
      const cancelButton = modalDiv.querySelector("#cancel-button");
      const removeButton = modalDiv.querySelector("#remove-button");
      const wrapper = modalDiv.querySelector("#wrapper");

      modalDiv.classList.remove("hidden");
      cancelButton.addEventListener("click", () => {
        modalDiv.classList.remove("animate-fadeinmodalcontainer");
        modalDiv.classList.add("animate-fadeoutmodalcontainer");
        wrapper.classList.remove("animate-fadeinmodal");
        wrapper.classList.add("animate-fadeoutmodal");
        modalDiv.addEventListener(
          "animationend",
          () => {
            if (modalDiv.classList.contains("animate-fadeoutmodalcontainer")) {
              modalDiv.classList.add("hidden");
              modalDiv.classList.add("animate-fadeinmodalcontainer");
              modalDiv.classList.remove("animate-fadeoutmodalcontainer");
              wrapper.classList.remove("animate-fadeoutmodal");
              wrapper.classList.add("animate-fadeinmodal");
            }
          },
          { once: true }
        );
      });
      removeButton.addEventListener("click", () => {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let updatedCards = cartLocal.filter((value) => value.id !== cardId);
        let deletedCard = cartLocal.filter((value) => value.id === cardId);
        total = total - currentPrice * currentQuantity;
        totalPrice.innerHTML = total;
        cardContainer
          .querySelector("#" + CSS.escape(deletedCard[0].id))
          .remove();
        localStorage.setItem("cart", JSON.stringify(updatedCards));

        modalDiv.classList.remove("animate-fadeinmodalcontainer");
        modalDiv.classList.add("animate-fadeoutmodalcontainer");
        wrapper.classList.remove("animate-fadeinmodal");
        wrapper.classList.add("animate-fadeoutmodal");
        modalDiv.addEventListener(
          "animationend",
          () => {
            if (modalDiv.classList.contains("animate-fadeoutmodalcontainer")) {
              modalDiv.classList.add("hidden");
              modalDiv.classList.add("animate-fadeinmodalcontainer");
              modalDiv.classList.remove("animate-fadeoutmodalcontainer");
              wrapper.classList.remove("animate-fadeoutmodal");
              wrapper.classList.add("animate-fadeinmodal");
            }
          },
          { once: true }
        );
      });
      modalDiv.addEventListener("click", () => {
        modalDiv.classList.remove("animate-fadeinmodalcontainer");
        modalDiv.classList.add("animate-fadeoutmodalcontainer");
        wrapper.classList.remove("animate-fadeinmodal");
        wrapper.classList.add("animate-fadeoutmodal");
        modalDiv.addEventListener(
          "animationend",
          () => {
            if (modalDiv.classList.contains("animate-fadeoutmodalcontainer")) {
              modalDiv.classList.add("hidden");
              modalDiv.classList.add("animate-fadeinmodalcontainer");
              modalDiv.classList.remove("animate-fadeoutmodalcontainer");
              wrapper.classList.remove("animate-fadeoutmodal");
              wrapper.classList.add("animate-fadeinmodal");
            }
          },
          { once: true }
        );
      });
    });

    priceNumber.innerHTML = `${currentQuantity * currentPrice}`;
    total += currentPrice * currentQuantity;
    addButton.addEventListener("click", () => {
      if (currentQuantity < 10) {
        let cardId = addButton.getAttribute("data-cardId");
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let editedCard = cartLocal.find((value) => value.id === cardId);
        let editedQuantity = parseInt(editedCard.quantity);
        editedQuantity++;
        editedCard.quantity = editedQuantity.toString();
        localStorage.setItem("cart", JSON.stringify(cartLocal));

        currentQuantity++;
        cardEndPrice = currentQuantity * currentPrice;
        priceNumber.innerHTML = cardEndPrice;
        total = total + currentPrice;
        totalPrice.innerHTML = total;
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
      if (currentQuantity > 1) {
        let cardId = addButton.getAttribute("data-cardId");
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let editedCard = cartLocal.find((value) => value.id === cardId);
        let editedQuantity = parseInt(editedCard.quantity);
        editedQuantity--;
        editedCard.quantity = editedQuantity.toString();
        localStorage.setItem("cart", JSON.stringify(cartLocal));

        currentQuantity--;
        cardEndPrice = currentQuantity * currentPrice;
        priceNumber.innerHTML = cardEndPrice;
        total = total - currentPrice;
        totalPrice.innerHTML = total;
      } else {
        const toast = Toast({
          content: "Minimum order quantity!",
          variant: "info",
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
  let records = JSON.parse(localStorage.getItem("cart"));
  if (records && records.length !== 0) {
    checkoutButton.addEventListener("click", () => {
      router.navigate("/checkout");
    });
  }
}

export function showSingleProduct() {
  setTimeout(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.querySelector("img").addEventListener("click", (e) => {
        const id = card.querySelector("img").getAttribute("data-id");
        router.navigate(`/product/${id}`);
        productApi(id)
          .then((res) => productPage(res.data))
          .catch((err) => {
            console.log(err);
          });
      });
    });
  }, 100);
}
