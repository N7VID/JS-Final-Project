import Splide from "@splidejs/splide";

export function SingleProduct({
  images,
  name,
  sold,
  vote,
  reviews,
  description,
  sizes,
  colors,
  price,
}) {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="my-bg splide w-[428px] h-[428px] p-0" aria-labelledby="carousel-heading">
        <a href="/" data-navigo class="absolute top-[16px] left-[24px] z-10"><img src="/public/images/arrow-left.svg" class="w-7"></a>
        <div class="splide__track mx-auto my-0 w-full"> 
          <ul class="splide__list">
          ${images
            .map(
              (image, index) => `
            <li class="splide__slide">
              <img src="${image}" alt="slide${
                index + 1
              }" class="object-fill w-[428px] h-[428px]"/>
            </li>`
            )
            .join("")}
          </ul>       
        </div>
    </section>
    <div class="font-inter px-5">
        <div class="pt-7 border-b-2 border-[#e9e9e9]">
            <div class="flex justify-between">
                <p class="text-[#152536] text-3xl font-extrabold text-nowrap text-ellipsis overflow-hidden">${name}</p>
                <img src="/public/images/heart - outline.svg" class="w-8">
            </div>
            <div class="py-4 flex items-center gap-4 text-[#152536]">
                <div class="font-semibold text-[12px] bg-[#e9e9e9] w-fit py-[6px] px-3 rounded-lg">${sold} sold</div>
                <div class="text-[13px] font-medium flex items-center gap-2 justify-around">
                    <img src="/public/images/star.svg" class="w-5">
                    <span>${vote}</span>
                    <span>(${reviews} reviews)</span>
                </div>
            </div>
        </div>
        <div class="pt-4">
            <div>
                <p class="text-xl font-extrabold pb-2">Description</p>
                <p class="max-h-[3em] overflow-hidden relative">${description}<a class="absolute right-0 bottom-0 font-semibold bg-white pl-2">view more...</a></p>
            </div>
            <div class="pt-4 flex items-center gap-8">
                <div class="flex-col flex">
                    <div class="text-xl font-extrabold pb-2">Size</div>
                    <div id="size-container" class="flex items-center justify-between gap-3 h-[45px]">
                    ${sizes
                      .map(
                        (size) => `
                        <div class="w-10 h-10 border-2 flex items-center justify-center border-black font-bold rounded-full">${size}</div>
                      `
                      )
                      .join("")}
                    
                    </div>
                </div>
                <div class="scroll-hidden flex-col flex overflow-x-auto flex-nowrap whitespace-nowraps">
                    <div class="text-xl font-extrabold pb-2">Color</div>
                    <div class="flex items-center gap-2 h-[45px]">
                    ${colors
                      .map((color) => {
                        return `
                          <div class="w-10 h-10 flex items-center justify-center shadow-sm shadow-black font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto" style="background-color: ${color.code};"></div>
                        `;
                      })
                      .join("")}
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
                    <span class="text-2xl font-extrabold">$${price}</span>
                </div>
                <div id="button-container" class="bg-black rounded-full py-4 min-w-20 px-[70px] text-white font-medium shadow-[#acacac] shadow-md flex justify-between gap-2 items-center">
                    <img src="/public/images/cart-single.svg" class="w-6">
                    <div>Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
  `;
  setTimeout(() => {
    new Splide(".splide", {
      classes: {
        arrows: "splide__arrows hidden",
        page: "splide__pagination__page custom-pagination-product",
      },
    }).mount();
  }, 0);
  return div;
}
