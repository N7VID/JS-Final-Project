import { Toast } from "../../components/toast/toast";

export function shippingPage() {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="font-inter">
        <div class="flex items-center justify-between px-6 pb-4 pt-8">
            <div class="space-x-6 flex">
                <a href="/checkout" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
                <p class="text-xl font-bold min-h-7">Shipping Shipping</p>
            </div>
        </div>
        <div id="toast-container"></div>
        <div class="pt-8 flex flex-col gap-6">
            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/economy.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Economy</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">Estimated Arrival, Dec 20-23</p>
                    </div>
                </div>
                <div class="font-bold leading-6 tracking-tight text-lg">$10</div>
                <div data-selected="false" data-shippingtype="Economy" data-price="10" data-arrival="Dec 20-23" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full"></div>
                </div>
            </div>

            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/regular.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Regular</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">Estimated Arrival, Dec 20-22</p>
                    </div>
                </div>
                <div class="font-bold leading-6 tracking-tight text-lg">$15</div>
                <div data-selected="false" data-shippingtype="Regular" data-price="20" data-arrival="Dec 20-22" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>
            



            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/cargo.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Cargo</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">Estimated Arrival, Dec 19-20</p>
                    </div>
                </div>
                <div class="font-bold leading-6 tracking-tight text-lg">$20</div>
                <div data-selected="false" data-shippingtype="Cargo" data-price="20" data-arrival="Dec 19-20" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>

            


            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-12 h-12" src="/public/images/express.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Express</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">Estimated Arrival, Dec 18-19</p>
                    </div>
                </div>
                <div class="font-bold leading-6 tracking-tight text-lg">$30</div>
                <div data-selected="false" data-shippingtype="Express" data-price="30" data-arrival="Dec 18-19" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>  
            
            


        </div>

            <div class="w-full fixed bottom-0 rounded-t-3xl flex items-center justify-around border-t-2 border-[#e9e9e9] bg-white pt-4 pb-6">
                <div id="apply-button" class="bg-black rounded-full py-4 w-[380px] px-[70px] text-white font-medium flex justify-center gap-4 items-center shadow-cart">
                    <div>Apply</div>
                </div>
            </div>        
    </div>
  `;

  return div;
}
export function handleRadioButtonsShipping() {
  const radioButtons = document.querySelectorAll(".radio");
  radioButtons.forEach((radio) => {
    let records = localStorage.getItem("shipping");
    records = records ? JSON.parse(records) : [];
    let selectDefault = records.type;
    if (selectDefault === radio.dataset.shippingtype) {
      radioButtons.forEach((radio) => {
        radio.querySelector("div").classList.add("hidden");
        radio.setAttribute("data-selected", "false");
      });
      radio.querySelector("div").classList.remove("hidden");
      radio.setAttribute("data-selected", "true");
    } else if (!selectDefault) {
      radioButtons.forEach((radio) => {
        radio.querySelector("div").classList.add("hidden");
        radio.setAttribute("data-selected", "false");
      });
    }
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

export function handleSubmitRadioShipping() {
  let selectedType, selectedPrice, selectedDate;
  const toastContainer = document.querySelector("#toast-container");
  const applyButtons = document.querySelector("#apply-button");
  const radioButtons = document.querySelectorAll(".radio");
  applyButtons.addEventListener("click", () => {
    radioButtons.forEach((radio) => {
      if (radio.dataset.selected === "true") {
        selectedType = radio.dataset.shippingtype;
        selectedPrice = radio.dataset.price;
        selectedDate = radio.dataset.arrival;
      }
      let records = localStorage.getItem("shipping");
      if (records) {
        records = [JSON.parse(records)];
      } else {
        records = [];
      }
      const recordShipping = {
        type: selectedType,
        price: selectedPrice,
        date: selectedDate,
      };
      records.push(recordShipping);
      localStorage.setItem("shipping", JSON.stringify(recordShipping));
    });
    const toast = Toast({
      content: "Shipping Type Saved!",
      variant: "success",
    });
    toastContainer.appendChild(toast);
  });
}
