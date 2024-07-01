import Splide from "@splidejs/splide";

export function productPage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <section class="my-bg splide w-[428px] h-[428px] p-0" aria-labelledby="carousel-heading">
        <a href="/" data-navigo class="absolute top-[16px] left-[24px] z-10"><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <div class="splide__track mx-auto my-0 w-full"> 
          <ul class="splide__list">
            <li class="splide__slide">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3309b7c847254e44926aab61012a61ec_9366/YEEZY_BOOST_350_V2_Beige_FX9028_01_standard1_hover.jpg" alt="slide1" class="object-fill w-[428px] h-[428px]"/>
            </li>
            <li class="splide__slide">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8cddd88362c74a86ae4fab61012a5f93_9366/YEEZY_BOOST_350_V2_Beige_FX9028_01_standard.jpg" alt="slide2" class="object-fill w-[428px] h-[428px]"/>
            </li>
            <li class="splide__slide">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/49852affde7f49dcb970a9ae017c284e_9366/YEEZY_BOOST_350_V2_White_EF2905_01_standard.jpg" alt="slide3" class="object-fill w-[428px] h-[428px]"/>
            </li>
            <li class="splide__slide">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/265347698c4c46ee9fe9a9ae017c25f4_9366/YEEZY_BOOST_350_V2_White_EF2905_01_standard2.jpg" alt="slide4" class="object-fill w-[428px] h-[428px]"/>
            </li>
          </ul>       
        </div>
    </section>
    <div class="font-inter px-5">
        <div class="pt-7 border-b-2 border-[#e9e9e9]">
            <div class="flex justify-between">
                <p class="text-[#152536] text-3xl font-extrabold">Running Sportwear</p>
                <img src="/public/images/heart - outline.svg" class="w-8">
            </div>
            <div class="py-4 flex items-center gap-4 text-[#152536]">
                <div class="font-semibold text-[12px] bg-[#e9e9e9] w-fit py-[6px] px-3 rounded-lg">5,371 sold</div>
                <div class="text-[13px] font-medium flex items-center gap-2 justify-around">
                    <img src="/public/images/star.svg" class="w-5">
                    <span>4.3</span>
                    <span>(5,389 reviews)</span>
                </div>
            </div>
        </div>
        <div class="pt-4">
            <div>
                <p class="text-xl font-extrabold pb-2">Description</p>
                <p class="max-h-[3em] overflow-hidden relative">The Nike React Miler provides performance for long-distance runs. Equipped with React foam for cushioned support, this shoe also features a breathable mesh upper and enhanced stability, making it ideal for runners who demand comfort and endurance.<a class="absolute right-0 bottom-0 font-semibold bg-white pl-2">view more...</a></p>
            </div>
            <div class="pt-4 flex items-center gap-8">
                <div class="flex-col flex">
                    <div class="text-xl font-extrabold pb-2">Size</div>
                    <div class="flex items-center justify-between gap-3">
                        <div class="w-10 h-10 border-2 flex items-center justify-center border-black font-bold rounded-full">
                            40
                        </div>
                        <div class="w-10 h-10 border-2 flex items-center justify-center border-black font-bold rounded-full">
                            41
                        </div>
                        <div class="w-10 h-10 border-2 flex items-center justify-center border-black font-bold rounded-full">
                            42
                        </div>
                    </div>
                </div>
                <div class="flex-col flex">
                    <div class="text-xl font-extrabold pb-2">Color</div>
                    <div class="flex items-center justify-between gap-3">
                        <div class="w-10 h-10 flex items-center justify-center bg-cyan-400 font-bold rounded-full"></div>
                        <div class="w-10 h-10 flex items-center justify-center bg-purple-500 font-bold rounded-full"></div>
                        <div class="w-10 h-10 flex items-center justify-center bg-amber-950 font-bold rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="py-4 flex items-center gap-6">
                 <div class="text-xl font-extrabold">Quantity</div>
                 <div class="bg-[#e9e9e9] rounded-3xl flex items-center gap-4 py-2 px-4">
                    <div><img src="/public/images/minus.svg" class="w-6 cursor-pointer"></div>
                    <div class="text-xl font-extrabold">4</div>
                    <div><img src="/public/images/add.svg" class="w-6 cursor-pointer"></div>
                 </div>
            </div>
            <div class="pt-4 flex items-center justify-between gap-6 border-t-2 border-[#e9e9e9]">
                <div class="flex flex-col">
                    <span class="text-[#757475]">Total price</span>
                    <span class="text-2xl font-extrabold">$240.00</span>
                </div>
                <div id="button-container" class="bg-black rounded-full py-4 min-w-20 px-[70px] text-white font-medium shadow-[#acacac] shadow-md flex justify-between gap-2 items-center">
                    <img src="/public/images/cart-single.svg" class="w-6">
                    <div>Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
  `;
  return div;
}
export function splideProduct() {
  const splideProduct = new Splide(".splide", {
    classes: {
      arrows: "splide__arrows hidden",
      page: "splide__pagination__page .custom-pagination-product",
    },
  }).mount();
}
