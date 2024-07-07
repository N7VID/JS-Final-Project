import { Card } from "../../components/product card/productCard";

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
             <div class="flex items-center justify-between pb-6">
                <div class="">
                    <input autocomplete="on" type="text" placeholder="Enter Promo Code" id="search" class="rounded-xl w-[310px] h-11 bg-[#f5f5f5] placeholder:text-[#BAB8BC]  placeholder:font-normal pl-5 placeholder:tracking-tight"/>
                </div>
                <button class="bg-black rounded-full w-11 h-11 flex justify-center items-center cursor-pointer"><img src="/public/images/add-white.svg" class="w-7"></button>
            </div> 
            <div class="shadow-cart flex flex-col py-2 px-4 rounded-3xl tracking-tight">
                <div class="border-[#eee] border-b-2">
                    <div class="flex justify-between py-2">
                        <span class=" text-[#757475] font-medium">Amount</span>
                        <span class="text-lg font-semibold">$585.00</span>
                    </div>
                    <div class="flex justify-between pt-2 pb-4">
                        <span class=" text-[#757475] font-medium">Shipping</span>
                        <span class="font-semibold">-</span>
                    </div>
                </div>    
                <div class="flex justify-between py-5">
                    <span class=" text-[#757475] font-medium">Total</span>
                    <span class="font-semibold">-</span>
                </div>
            </div>

            </div>
            <div class="w-full rounded-t-3xl flex items-center justify-around border-t-2 border-[#e9e9e9] bg-white pt-4 pb-6">
                <div id="button-container" onclick="goHome" class="bg-black rounded-full py-4 w-[380px] px-[70px] text-white font-medium flex justify-center gap-4 items-center shadow-cart">
                    <div>Continue to Payment</div>
                    <img src="/public/images/arrow-right-white.svg" class="w-6">
                </div>
            </div>

     </div>
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
            <div class="font-bold leading-6 tracking-tight text-lg">$${price}</div>
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

  const cardContainer = div.querySelector(".card-container");
  let records = JSON.parse(localStorage.getItem("cart"));
  if (!records || records.length === 0) {
    cardContainer.innerHTML = "EMPTY :)";
  } else {
    records.forEach((record) => {
      const card = Card({
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
  }

  return div;
}
