import axios from "axios";
import { NavBar } from "../../components/navbar mobile/navbar";
import { ModalPayment } from "../Home/components/modal/modalPayment";

export function paymentPage() {
  let totalReceipt = JSON.parse(localStorage.getItem("totalReceipt"));
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="font-inter">
        <div class="flex items-center justify-between px-6 pb-4 pt-8">
            <div class="space-x-6 flex">
                <a href="/checkout" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
                <p class="text-xl font-bold min-h-7">Payment Methods</p>
            </div>
        </div>
        <div id="toast-container"></div>
        <div class="pt-4 px-6 font-semibold text-[#5e5e5e]">Select the payment method you want to use.</div>
        <div class="pt-6 flex flex-col gap-6">
            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[80px] px-4 my-0 mx-auto">
                <div class="rounded-full w-14 h-14 flex justify-center items-center">
                    <img class="w-8 h-8" src="/public/images/wallet-2-svgrepo-com.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">My Wallet</span> 
                    </div>
                </div>
                <div class="font-bold leading-6 tracking-tight text-lg">$${totalReceipt}</div>
                <div data-selected="false" data-method="My Wallet" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full"></div>
                </div>
            </div>

            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[80px] px-4 my-0 mx-auto">
                <div class="rounded-full w-14 h-14 flex justify-center items-center">
                    <img class="w-8 h-8" src="/public/images/paypal-svgrepo-com.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">PayPal</span> 
                    </div>
                </div>
                <div data-selected="false" data-method="PayPal" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>
            



            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[80px] px-4 my-0 mx-auto">
                <div class="rounded-full w-14 h-14 flex justify-center items-center">
                    <img class="w-7 h-7" src="/public/images/google-color-svgrepo-com.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Google Pay</span> 
                    </div>
                </div>
                <div data-selected="false" data-method="Google Pay" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>

            


            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[80px] px-4 my-0 mx-auto">
                <div class="rounded-full w-14 h-14 flex justify-center items-center">
                    <img class="w-7 h-7" src="/public/images/apple-svgrepo-com.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Apple Pay</span> 
                    </div>
                </div>
                <div data-selected="false" data-method="Apple Pay" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>  

            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[80px] px-4 my-0 mx-auto">
                <div class="rounded-full w-14 h-14 flex justify-center items-center">
                    <img class="w-7 h-7" src="/public/images/mastercard-full-svgrepo-com.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">.... .... .... 4679</span> 
                    </div>
                </div>
                <div data-selected="false" data-method="MasterCard" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>  
            
            


        </div>

            <div class="w-full fixed bottom-0 rounded-t-3xl flex items-center justify-around border-t-2 border-[#e9e9e9] bg-white pt-4 pb-[85px]">
                <div id="apply-button" class="bg-black rounded-full py-4 w-[380px] px-[70px] text-white font-medium flex justify-center gap-4 items-center shadow-cart">
                    <div>Confirm Payment</div>
                </div>
            </div>        
    </div>
    <div id="modal-container"></div>
    <div id="navbar-container"></div>
  `;

  const navbar = NavBar();
  const navbarContainer = div.querySelector("#navbar-container");
  navbarContainer.append(navbar);
  return div;
}
export function handleRadioButtonsPayment() {
  const radioButtons = document.querySelectorAll(".radio");
  radioButtons.forEach((radio) => {
    radio.addEventListener("click", () => {
      radioButtons.forEach((radio) => {
        radio.querySelector("div").classList.add("hidden");
        radio.setAttribute("data-selected", "false");
      });
      radio.querySelector("div").classList.remove("hidden");
      radio.setAttribute("data-selected", "true");
    });
  });
}

export function handleConfirmPaymentButton() {
  const confirmButton = document.querySelector("#apply-button");
  const modalContainer = document.querySelector("#modal-container");
  const cards = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("user"));
  let newObj = {
    id: Date.now(),
    userId: user.id,
    status: "active",
    cart: cards,
  };
  confirmButton.addEventListener("click", async () => {
    await axios.post("http://localhost:3000/orders", newObj).then((res) => {
      if (res.status === 201) {
        localStorage.removeItem("cart");
        const modal = ModalPayment();
        modalContainer.append(modal);
      }
    });
  });
}
