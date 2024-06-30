import { Card } from "../../components/product card/produtCard";
import { homePageApi } from "./api/product-api";

export function homePage() {
  const div = document.createElement("div");
  div.innerHTML = `
    <header class="flex justify-between w-screen my-0 mx-auto py-4 px-6">
      <div class="flex gap-3">
        <img src="/images/default user profile.svg" alt="user-profile" class="rounded-full w-[48px]  cursor-pointer">
        <div class="flex-col justify-between">
            <span class="text-[#757475] flex items-center gap-1 cursor-default">Good Morning <img src="/images/waving-hand-sign_1f44b.png" class="w-[16px]"></span>
            <span class="font-bold cursor-pointer">Saeed Abdilar</span>
        </div>
      </div>
      <div class="flex w-16 justify-between">
         <img src="/images/bell - outline.svg" class="w-7 cursor-pointer">
         <img src="/images/heart - outline.svg" class="w-7 cursor-pointer">
      </div>
    </header>
    <div class="flex justify-center">
      <div class="relative">
        <input autocomplete="on" type="text" placeholder="Search" id="search" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] placeholder:text-[#BAB8BC] placeholder:text-sm placeholder:font-normal pl-10"/>
        <img src="/images/search icon.svg" class="absolute top-2 left-3 w-[20px] cursor-pointer">
      </div>
    </div>
    <div class="grid grid-cols-4 gap-y-6 gap-x-6 py-4 px-6">
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/nike-4-logo-svgrepo-com.svg" alt="nike-logo" class="w-[32px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm overflow-hidden text-nowrap overflow-ellipsis cursor-pointer">Nike</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/adidas-svgrepo-com.svg" alt="adidas-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">Adidas</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/puma_logo_icon_248754.svg" alt="puma-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">Puma</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/asics.svg" alt="asics-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">Asics</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/reebok_logo_icon_248669.svg" alt="reebok-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">Reebok</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/newbalance_logo_icon_248383.svg" alt="newbalance-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">New Balance</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/Converse_(shoe_company)-Icon-Logo.wine.svg" alt="converse-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">Converse</p>
      </div>
      <div class="flex-col flex justify-between text-center h-[91px] items-center">
        <div class="bg-[#ECECEC] rounded-full w-[60px] h-[60px] flex justify-center cursor-pointer"><img src="/images/more-outline.svg" alt="nike-logo" class="w-[25px] mix-blend-multiply"></div>
        <p class="font-semibold text-sm cursor-pointer">More...</p>
      </div>
    </div>
    <div class="flex-grow flex-col items-center justify-center">
      <div class="flex justify-between items-center w-full px-6 py-2">
        <div><span class="text-[#152536] font-semibold text-xl cursor-default">Most Popular</span></div>
        <div><span class="text-[#152536] font-bold text-[16.2px] cursor-pointer">See All</span></div>
      </div>
      <div class="flex justify-start items-center gap-4 overflow-x-auto flex-nowrap whitespace-nowrap py-2 px-6">
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">All</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Nike</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Adidas</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Puma</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Asics</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Reebok</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">New Balance</div>
        <div class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.4px] rounded-[25px] py-[3.5px] px-4 text-center text-[#343A40] font-semibold">Converse</div>
      </div>

      <div class="grid grid-cols-2 px-6 py-4 gap-x-3 gap-y-5" id="card-container"></div>

    </div>
    <div class="w-full">
      <nav class="my-0 mx-auto w-full">
        <ul class="flex gap-12 justify-center items-center px-6 text-[#152536]">
          <li class="text-center flex flex-col cursor-pointer">
            <img src="/images/home-outline.svg" class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Home</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer">
            <img src="/images/cart-outline.svg" class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Cart</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer">
            <img src="/images/shop-outline.svg" class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Orders</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer">
            <img src="/images/wallet-outline.svg" class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Wallet</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer">
            <img src="/images/profile-outline.svg" class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Profile</span>
          </li>
        </ul>
      </nav>
    </div>
  `;
  homePageApi()
    .then((res) => {
      render(res.data);
    })
    .catch((e) => console.log(e));

  function render(data) {
    data.forEach((product) => {
      const card = Card({
        content: product.name,
        price: product.price,
        imgSrc: product.images[0],
        id: product.id,
      });
      const cardContainer = div.querySelector("#card-container");
      cardContainer.append(card);
      div.classList = "font-inter bg-white flex flex-col min-h-screen";
    });
  }
  return div;
}
