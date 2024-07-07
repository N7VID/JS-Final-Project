import { Toast } from "../../components/toast/toast";

export function addressPage() {
  const div = document.createElement("div");
  div.innerHTML = `
    
    <div class="font-inter">
        <div class="flex items-center justify-between px-6 pb-4 pt-8">
            <div class="space-x-6 flex">
                <a href="/checkout" data-navigo><img src="/public/images/arrow-left.svg" class="w-7"></a>
                <p class="text-xl font-bold min-h-7">Shipping Address</p>
            </div>
        </div>
        <div id="toast-container"></div>
        <div class="pt-8 flex flex-col gap-6">
            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/location.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center -space-x-28">
                    <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Home</span> 
                    <div class="text-[13px] bg-[#e9e9e9] w-fit py-1 px-2 rounded-lg">Default</div>
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">61480 Sunbrook Park, PC 56794</p>
                    </div>
                </div>
                <div data-selected="false" data-radioName="Home" data-address="61480 Sunbrook Park, PC 56794" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full"></div>
                </div>
            </div>

            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/location.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Office</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">6993 Meadow Valley Terra, PC 3637</p>
                    </div>
                </div>
                <div data-selected="false" data-radioName="Office" data-address="6993 Meadow Valley Terra, PC 3637"  class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>
            



            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/location.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Apartment</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">21833 Clyde Gallagher, PC 4662</p>
                    </div>
                </div>
                <div data-radioName="Apartment" data-address="21833 Clyde Gallagher, PC 4662" data-selected="false" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>

            


            <div class="flex items-center justify-around shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[90px] px-4 my-0 mx-auto">
                <div class="rounded-full bg-[#e2e2e2] w-14 h-14 flex justify-center items-center">
                    <img class="w-10 h-10" src="/public/images/location.svg">
                </div>
                <div class="flex flex-col w-[210px]">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">Parent House</span> 
                    </div>
                    <div class="text-[#757475] font-medium text-[13px] mt-1">
                        <p class="text-nowrap overflow-hidden text-ellipsis">5259 Blue Bill Park, PC 4627</p>
                    </div>
                </div>
                <div data-radioName="Parent House" data-address="5259 Blue Bill Park, PC 4627"  data-selected="false" class="radio w-5 h-5 border-black border-[3px] rounded-full flex justify-center items-center">
                    <div class="w-3 h-3 bg-black rounded-full hidden"></div>
                </div>
            </div>  
            
            


        </div>

            <div class="w-full fixed bottom-0 rounded-t-3xl flex items-center justify-around border-t-2 border-[#e9e9e9] bg-white pt-4 pb-6">
                <div id="apply-button" class="bg-black rounded-full py-4 w-[380px] px-[70px] text-white font-medium flex justify-center gap-4 items-center shadow-cart">
                    <div>
                        <canvas id="dotlottie-canvas" class="w-[80px] h-[80px] hidden"></canvas>    
                        Apply
                    </div>
                </div>
            </div>        
    </div>
  `;
  return div;
}

export function handleRadioButtons() {
  const radioButtons = document.querySelectorAll(".radio");
  radioButtons.forEach((radio) => {
    let records = localStorage.getItem("address");
    records = records ? JSON.parse(records) : [];
    let selectDefault = records.title;
    if (selectDefault === radio.dataset.radioname) {
      radioButtons.forEach((radio) => {
        radio.querySelector("div").classList.add("hidden");
        radio.setAttribute("data-selected", "false");
      });
      radio.querySelector("div").classList.remove("hidden");
      radio.setAttribute("data-selected", "true");
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

export function handleSubmitRadio() {
  let selectedRadioName, selectedAddress;
  const toastContainer = document.querySelector("#toast-container");
  const applyButtons = document.querySelector("#apply-button");
  const radioButtons = document.querySelectorAll(".radio");
  applyButtons.addEventListener("click", () => {
    radioButtons.forEach((radio) => {
      if (radio.dataset.selected === "true") {
        selectedRadioName = radio.dataset.radioname;
        selectedAddress = radio.dataset.address;
      }
      let records = localStorage.getItem("address");
      records = records
        ? [JSON.parse(records)]
        : [{ title: "Choose Address", address: "Your Address Here..." }];
      const recordAddress = {
        title: selectedRadioName,
        address: selectedAddress,
      };
      records.push(recordAddress);
      localStorage.setItem("address", JSON.stringify(recordAddress));
    });
    const toast = Toast({
      content: "Shipping Address Saved!",
      variant: "success",
    });
    toastContainer.appendChild(toast);
  });
}
