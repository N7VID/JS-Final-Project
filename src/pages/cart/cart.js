import { NavBar } from "../../components/navbar mobile/navbar";

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
    <div class="card-container flex flex-col pt-8 gap-8">
        <div class="flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4">
            <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
                <img class="rounded-3xl w-[120px] h-[120px]" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg">
            </div>
            <div class="flex flex-col w-[210px] gap-2">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-lg text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">New Balance 996XPro 220</span>
                    <a><img src="/public/images/bin.svg" class="w-6"></a>   
                </div>
                <div class="flex items-center gap-3 text-[#757475] font-medium text-[13px] -mt-[1px]">
                    <div class="flex items-center gap-2 border-r-2 border-[#757475]  pr-3 h-[14px]">
                        <div class="w-3 h-3 flex items-center justify-center border-[#000000] border font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto"></div>
                        Black
                    </div>
                    <div>Size=42</div>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div class="font-bold text-xl">$105.00</div>
                    <div class="bg-[#F3F3F3] rounded-3xl flex items-center gap-4 py-2 px-3">
                    <div><img src="/public/images/minus.svg" class="w-4 cursor-pointer"></div>
                    <div class="font-extrabold">1</div>
                    <div><img src="/public/images/add.svg" class="w-4 cursor-pointer"></div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="fixed bottom-[77px] w-full h-[90px] rounded-t-3xl flex items-center justify-around gap-4 border-t-2 border-[#e9e9e9]">
      <div class="flex flex-col">
          <span class="text-[#757475] text-sm">Total price</span>
          <span class="text-2xl font-extrabold">$240.00</span>
      </div>
      <div id="button-container" onclick="goHome" class="bg-black rounded-full py-4 min-w-20 px-[70px] text-white font-medium shadow-cart flex justify-between gap-2 items-center">
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

  return div;
}
