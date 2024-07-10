import axios from "axios";
import { Card } from "../../components/product card/productCard";
import { Toast } from "../../components/toast/toast";
import { router } from "../../main";
import { NavBar } from "../../components/navbar mobile/navbar";

export function checkoutPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="font-inter">
    <div class="flex items-center justify-between px-6 pb-4 pt-8">
        <div class="space-x-6 flex">
            <a href="/cart" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
            <p class="text-xl font-bold min-h-7">Checkout</p>
        </div>
        <a href="/" data-navigo><img src="/public/images/more-outline.svg" class="w-7"></a>
    </div>
    <div id="toast-container"></div>
    <div class="border-b-2 border-[#eee] mx-auto my-0 w-[400px] pb-6 cursor-default">
        <p class="py-4 px-2 text-lg font-semibold">Shipping Address</p>
        <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
            <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                <img class="w-10 h-10" src="/public/images/location.svg">
            </div>
            <div class="flex flex-col w-[210px]">
                <div class="flex items-center justify-between">
                    <span id="location" class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]"></span> 
                </div>
                <div class="text-[#757475] font-medium text-[13px] mt-1">
                    <p id="address" class="text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
            </div>
            <div class="">
                <a href="/chooseAddress" data-navigo><img src="/public/images/edit.svg" class="w-6 cursor-pointer"></a>  
            </div>
        </div>
    </div>
    <p class="pt-4 px-6 text-lg font-semibold max-w-[428px] mx-auto my-0">Order List</p>
    <div class="card-container flex flex-col pt-4 pb-6 gap-8"></div>
    </div>

    <div class="border-[#eee] mx-auto my-0 w-[400px] pb-6 cursor-default border-y-2">
        <p class="py-4 px-2 text-lg font-semibold">Choose Shipping</p>
        <div id="shipping-container"></div>
    </div>


    <div class="mx-auto my-0 w-[400px] pb-6 px-2 cursor-default">
            <p class="py-4 text-lg font-semibold">Promo Code</p>
             <div class="flex items-center gap-8 pb-6">
                <div id="input-container">
                    <input autocomplete="on" type="text" placeholder="Enter Promo Code" id="promo-input" class="rounded-xl w-[310px] h-11 bg-[#f5f5f5] placeholder:text-[#BAB8BC]  placeholder:font-normal pl-5 placeholder:tracking-tight"/>
                </div>
                <button id="promo-button" class="bg-black rounded-full w-11 h-11 flex justify-center items-center cursor-pointer"><img src="/public/images/add-white.svg" class="w-5"></button>
            </div> 
            <div class="shadow-cart flex flex-col py-2 px-4 rounded-3xl tracking-tight">
                <div class="border-[#eee] border-b-2">
                    <div class="flex justify-between py-2">
                        <span class="text-[#757475] font-medium">Amount</span>
                        <span class="font-semibold text-[18px]">$<span id="amount-span"></span></span>
                    </div>
                    <div class="flex justify-between py-2">
                        <span class=" text-[#757475] font-medium">Shipping</span>
                        <span id="shipping-span" class="font-semibold text-[18px]"></span>
                    </div>
                    <div id="promo-container" class="flex justify-between pt-2 pb-4">
                        <span class=" text-[#757475] font-medium">Promo</span>
                        <span id="promo-span" class="font-semibold text-[18px]">-</span>
                    </div>                    
                </div>    
                <div class="flex justify-between py-5">
                    <span class=" text-[#757475] font-medium">Total</span>
                    <span id="total-span" class="font-semibold text-[20px]">-</span>
                </div>
            </div>

            </div>
            <div class="w-full rounded-t-3xl flex items-center justify-around border-t-2 border-[#e9e9e9] bg-white pt-4 pb-[85px]">
                <div id="button-container" class="bg-black rounded-full py-4 w-[380px] px-[70px] text-white font-medium flex justify-center gap-4 items-center shadow-cart">
                    <div>Continue to Payment</div>
                    <img src="/public/images/arrow-right-white.svg" class="w-6">
                </div>
            </div>

     </div>
     <div id="navbar-container"></div>
  `;

  const location = div.querySelector("#location");
  const address = div.querySelector("#address");
  let addressRecord = localStorage.getItem("address");
  addressRecord = addressRecord
    ? JSON.parse(addressRecord)
    : { title: "Choose Address", address: "Your Address Here..." };
  location.innerHTML = addressRecord.title;
  address.innerHTML = addressRecord.address;

  const shippingContainer = div.querySelector("#shipping-container");
  let shippingRecord = localStorage.getItem("shipping");
  if (shippingRecord) {
    shippingRecord = JSON.parse(shippingRecord);
    let type = shippingRecord.type;
    let price = shippingRecord.price;
    let date = shippingRecord.date;
    shippingContainer.innerHTML = `
        <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
            <div class="rounded-full bg-gradient-to-tr from-[#232526] to-[#414345] w-14 h-14 flex justify-center items-center">
                <img class="w-8 h-8" src="/public/images/${type}.png">
            </div>
            <div class="flex flex-col w-[210px]">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">${type}</span> 
                </div>
                <div class="text-[#757475] font-medium text-[13px] mt-1">
                    <p class="text-nowrap overflow-hidden text-ellipsis">Estimated Arrival, ${date}</p>
                </div>
            </div>
            <div class="font-bold leading-6 tracking-tight text-lg">$<span id="shipping">${price}</span></div>
            <div class="">
                <a href="/chooseShipping" data-navigo><img src="/public/images/edit.svg" class="w-6 cursor-pointer"></a>  
            </div>
        </div> 
    `;
  } else {
    shippingContainer.innerHTML = `
    <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[70px] px-4 my-0 mx-auto cursor-pointer">
                <img class="w-8 h-8" src="/public/images/shipping-truck.svg">
            <div class="flex flex-col w-[210px]">
                <div class="flex items-center justify-between">
                    <span class="font-bold leading-6 tracking-tight w-[160px]">Choose Shipping Type</span> 
                </div>
            </div>
            <div class="">
                <a href="/chooseShipping" data-navigo><img src="/public/images/chevron-right.svg" class="w-7"></a>  
            </div>
        </div>
    `;
  }

  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);

  const cardContainer = div.querySelector(".card-container");
  let records = JSON.parse(localStorage.getItem("cart"));

  records.forEach((record) => {
    const card = Card({
      id: record.id,
      content: record.name,
      price: record.price,
      imgSrc: record.thumbnail,
      variant: "checkout",
      colorCode: record.colorCode,
      colorName: record.colorName,
      quantity: record.quantity,
      size: record.size,
    });
    cardContainer.append(card);
  });

  const quantity = cardContainer.querySelector("#quantity");
  const price = cardContainer.querySelector("#price");
  let endPrice = parseInt(quantity.innerHTML) * parseInt(price.innerHTML);
  price.innerHTML = endPrice.toString();

  const amountSpan = div.querySelector("#amount-span");
  const shippingSpan = div.querySelector("#shipping-span");
  const promoSpan = div.querySelector("#promo-span");
  const totalSpan = div.querySelector("#total-span");
  let promoAmount = 0;
  let shippingAmount = 0;
  let totalAmount = 0;
  let totalReceipt = 0;
  const cards = Object.values(div.querySelectorAll(".card"));
  cards.forEach((card) => {
    const amount = card.querySelector("#price");
    totalAmount += parseInt(amount.innerHTML);
  });
  amountSpan.innerHTML = totalAmount;

  const shippingMethodSpan = shippingContainer.querySelector("#shipping");
  if (shippingMethodSpan) {
    shippingAmount = shippingMethodSpan.innerHTML;
    shippingSpan.innerHTML = "$" + shippingAmount;
  } else {
    shippingSpan.innerHTML = "-";
  }

  const promoInput = div.querySelector("#promo-input");
  const promoButton = div.querySelector("#promo-button");
  const promoInputContainer = div.querySelector("#input-container");
  const toastContainer = div.querySelector("#toast-container");
  promoButton.addEventListener("click", () => {
    axios.get("http://localhost:3000/Users").then((res) => {
      let userName = localStorage.getItem("fullName");
      let user = res.data.find((user) => user.name === userName);
      console.log("value of input: " + promoInput.value);
      console.log("value of promo: " + user.promo.name);
      if (promoInput.value === user.promo.name) {
        promoInputContainer.innerHTML = `
            <div id="inner-container" data-promo="${user.promo.value}" class="px-7 py-2 bg-black rounded-[30px] flex items-center gap-4">
                <div class="text-white font-semibold text-[18px]">Discount ${user.promo.value}% Off</div>
                <div id="delete-promo" class="text-white font-semibold pb-[2px] text-[18px]">&times</div>
            </div>
        `;
        promoInputContainer
          .querySelector("#delete-promo")
          .addEventListener("click", () => {
            promoSpan.innerHTML = "-";
            totalReceipt = parseFloat(totalAmount) + parseFloat(shippingAmount);
            localStorage.setItem("totalReceipt", totalReceipt);
            totalSpan.innerHTML = "$" + totalReceipt;
            promoInputContainer.innerHTML = `
                <div id="input-container">
                    <input autocomplete="on" type="text" placeholder="Enter Promo Code" id="promo-input" class="rounded-xl w-[310px] h-11 bg-[#f5f5f5] placeholder:text-[#BAB8BC]  placeholder:font-normal pl-5 placeholder:tracking-tight"/>
                </div>
        `;
          });
        let promoValue = promoInputContainer
          .querySelector("#inner-container")
          .getAttribute("data-promo");
        if (promoValue) {
          promoAmount = (totalAmount * promoValue) / 100;
          promoSpan.innerHTML = "-$" + promoAmount;
          totalReceipt =
            parseFloat(totalAmount) +
            parseFloat(shippingAmount) -
            parseFloat(promoAmount);
          totalSpan.innerHTML = "$" + totalReceipt;
          localStorage.setItem("totalReceipt", totalReceipt);
        }
      } else {
        promoInput.value = "";
        const toast = Toast({
          content: "Incorrect Promo!",
          variant: "error",
        });
        toastContainer.appendChild(toast);
      }
    });
  });

  totalReceipt =
    parseFloat(totalAmount) +
    parseFloat(shippingAmount) -
    parseFloat(promoAmount);

  totalSpan.innerHTML = "$" + totalReceipt;
  localStorage.setItem("totalReceipt", totalReceipt);

  return div;
}

export function paymentContinueButtonHandler() {
  const btn = document.querySelector("#button-container");
  btn.addEventListener("click", () => {
    router.navigate("/payment");
  });
}
