import axios from "axios";
import { NavBar } from "../../components/navbar mobile/navbar";
import { Card } from "../../components/product card/productCard";
import { showSingleProduct } from "../cart/cart";

export function ordersPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="font-inter">
    <div class="flex items-center justify-between px-6 pb-4 pt-8">
        <div class="space-x-6 flex items-center">
            <a href="/" data-navigo><img src="/public/images/logo-balck.svg" class="w-5"></a>
            <p class="text-2xl font-bold min-h-7">My Orders</p>
        </div>
        <div class="flex items-center gap-4">
            <a href="/" data-navigo><img src="/public/images/search icon.svg" class="w-7"></a>
            <a href="/" data-navigo><img src="/public/images/more-outline.svg" class="w-7"></a>
        </div>
        </div>
        
        <div class="flex justify-around w-full px-4 border-b-2 font-bold text-[#757475] text-[17px] rounded-sm max-w-[550px] my-0 mx-auto">
        <div id="active-button" class="flex justify-center items-center py-3 w-1/2 active cursor-pointer">Active</div>
        <div id="completed-button" class="flex justify-center items-center py-3 w-1/2 cursor-pointer">Completed</div>
        </div>
        <div id="card-container" class="flex flex-col flex-grow pt-8 pb-32 gap-7"></div>
        <div id="navbar-container"></div>
  </div>
  `;

  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);
  // let orderStatus = true;
  getOrder("http://localhost:3000/orders?q=active");
  const toggleActiveButton = div.querySelector("#active-button");
  const toggleCompletedButton = div.querySelector("#completed-button");
  toggleActiveButton.addEventListener("click", () => {
    toggleActiveButton.classList.add("active");
    toggleCompletedButton.classList.remove("active");
    getOrder("http://localhost:3000/orders?q=active");
  });
  toggleCompletedButton.addEventListener("click", async () => {
    toggleCompletedButton.classList.add("active");
    toggleActiveButton.classList.remove("active");
    // orderStatus = false;
    getOrder("http://localhost:3000/orders?q=completed");
  });
  // if (orderStatus) {
  //   getOrder("http://localhost:3000/orders?q=active");
  // } else {
  //   getOrder("http://localhost:3000/orders?q=completed");
  // }

  return div;
}

async function getOrder(url) {
  let user = JSON.parse(localStorage.getItem("user"));
  await axios
    .get(url)
    .then((res) => {
      let data = res.data.filter((data) => data.userId === user.id);
      render(data);
    })
    .then(showSingleProduct())
    .catch((error) => console.log(error));
}

function render(data, status, action) {
  const cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = "";
  data.forEach((records) => {
    Object.values(records.cart).forEach((product) => {
      const card = Card({
        id: product.id,
        content: product.name,
        price: product.price,
        imgSrc: product.thumbnail,
        variant: "orders",
        colorCode: product.colorCode,
        colorName: product.colorName,
        quantity: product.quantity,
        size: product.size,
      });
      cardContainer.append(card);
    });
  });
}
