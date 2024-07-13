export function Card({
  id,
  content,
  price,
  imgSrc,
  variant = "",
  additional = "",
  colorCode = "",
  colorName = "",
  quantity = "",
  size = "",
  type = "",
  sold = "",
  vote = "",
  ...restProps
}) {
  const attributesString = (props) => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };
  const variantClasses = {
    homePage: `
    <div id="${id}" class="card my-0 mx-auto max-w-[182px] cursor-pointer">
        <div class="bg-[#F3F3F3] rounded-[24px] h-[180px] w-[180px] flex justify-center items-center laptop:h-[150px] laptop:w-[150px]">
          <img src=${imgSrc} alt="shoe picture" class="w-[142px] h-[142px] object-contain rounded-full laptop:h-[110px] laptop:w-[110px]">
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold text-[20px] text-[#152536] pt-2 text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight laptop:text-[16px]">${content}</span>
          <span class="font-semibold text-[#152536] leading-5 laptop:text-[14px]">$ ${price}</span>
        </div>
    </div>`,
    cart: `
      <div id="${id}" class=" card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4 laptop:w-[500px] laptop:justify-around">
            <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
                <img data-id="${id}" id="imgSrc" class="rounded-3xl w-[120px] h-[120px]" src=${imgSrc}>
            </div>
            <div class="flex flex-col w-[210px] gap-2">
                <div class="flex items-center justify-between">
                    <span id="title" class="font-bold text-lg text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">${content}</span>
                    <a><img id="delete" src="/public/images/bin.svg" class="w-6"></a>   
                </div>
                <div class="flex items-center gap-3 text-[#757475] font-medium text-[13px] -mt-[1px]">
                    <div class="flex items-center gap-2 border-r-2 border-[#757475]  pr-3 h-[14px]">
                        <div id="color" style="background-color: ${colorCode}" class="w-3 h-3 flex items-center justify-center shadow-sm shadow-black font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto"></div>
                        ${colorName}
                    </div>
                    <div id="size">Size=${size}</div>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <span class="font-bold text-xl">$<span id="end-price" >${price}</span></span>
                    <div class="bg-[#F3F3F3] rounded-3xl flex items-center gap-4 py-2 px-3">
                    <div><img data-cardId="${id}" id="minus" src="/public/images/minus.svg" class="w-4 cursor-pointer"></div>
                    <div id="quantity" class="font-extrabold">${quantity}</div>
                    <div><img data-cardId="${id}" id="add" src="/public/images/add.svg" class="w-4 cursor-pointer"></div>
                    </div>
                    </div>
                  </div>
      </div>
    `,
    checkout: `
      <div
        class="card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4 laptop:w-[500px] laptop:justify-around"
      >
        <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
          <img
            data-id="${id}"
            id="img"
            class="rounded-3xl w-[120px] h-[120px]"
            src=${imgSrc}
          />
        </div>
        <div class="flex flex-col w-[210px] gap-2">
          <div class="flex items-center justify-between">
            <span
              id="title"
              class="font-bold text-lg text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]"
              >${content}</span
            >
          </div>
          <div
            class="flex items-center gap-3 text-[#757475] font-medium text-[13px] -mt-[1px]"
          >
            <div
              class="flex items-center gap-2 border-r-2 border-[#757475] pr-3 h-[14px]"
            >
              <div
                id="color"
                style="background-color: ${colorCode}"
                class="w-3 h-3  shadow-sm shadow-black flex items-center justify-center font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto"
              ></div>
              ${colorName}
            </div>
            <div>Size=<span id="size">${size}</span></div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="font-bold text-xl">$<span id="price">${price}</span></div>
            <div
              class="bg-[#F3F3F3] rounded-full w-10 h-10 flex justify-center items-center"
            >
              <div id="quantity" class="font-extrabold">${quantity}</div>
            </div>
          </div>
        </div>
      </div>
    `,
    orders: `
      <div
        class="card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4 laptop:w-[500px] laptop:justify-around"
      >
        <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
          <img
            data-id="${id}"
            id="img"
            class="rounded-3xl w-[120px] h-[120px]"
            src=${imgSrc}
          />
        </div>
        <div class="flex flex-col w-[210px] gap-2">
          <div class="flex items-center justify-between">
            <span
              id="title"
              class="font-bold text-lg text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]"
              >${content}</span
            >
          </div>
          <div
            class="flex items-center gap-3 text-[#757475] font-medium text-[13px] -mt-[1px]"
          >
            <div
              class="flex items-center gap-2 border-r-2 border-[#757475] pr-2 h-[14px]"
            >
              <div
                id="color"
                style="background-color: ${colorCode}"
                class="w-3 h-3 shadow-sm shadow-black flex items-center justify-center font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto"
              ></div>
              ${colorName}
            </div>
            <div class="flex items-center gap-2 border-r-2 border-[#757475] pr-2 h-[14px]">Size=<span id="size">${size}</span></div>
            <div class="flex items-center gap-2 h-[14px]">Qty=<span id="quantity">${quantity}</span></div>
          </div>
          <div class="flex justify-start items-center">
            <div class="font-semibold text-[10px] bg-[#e9e9e9] w-fit py-[5px] px-3 rounded-lg">${
              type.includes("active") ? "In Delivery" : "Completed"
            }</div>
          </div>          
          <div class="flex justify-between items-center">
            <div class="font-bold text-xl">$<span id="price">${price}</span></div>
            <div class="bg-black rounded-2xl text-white px-4 py-[6px] text-[13px]">${
              type.includes("active") ? "Track Order" : "Leave Review"
            }</div>
          </div>
        </div>
      </div>      
    `,
    wishlist: `
    <div id="${id}" class="card my-0 mx-auto max-w-[182px] cursor-pointer relative">
    <div class="w-[30px] h-[30px] bg-gradient-to-l from-[#1b1d1d] to-[#414345] rounded-full flex justify-center items-center z-10 absolute top-5 right-5">
      <img src="/public/images/heart-solid-white.svg" class="w-4">
    </div>

    <div class="absolute top-5 left-5 w-[30px] h-[30px] bg-gradient-to-l from-[#1b1d1d] to-[#414345] rounded-full flex justify-center items-center z-10 ">
        <img src="/public/images/bin-white.svg" class="w-4">
    </div>

        <div class="bg-[#F3F3F3] rounded-[24px] h-[180px] w-[180px] flex justify-center items-center laptop:h-[150px] laptop:w-[150px]">
          <img src=${imgSrc} alt="shoe picture" class="w-[142px] h-[142px] object-contain rounded-full laptop:h-[110px] laptop:w-[110px]">
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold text-[18px] text-black pt-2 text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight laptop:text-[16px]">${content}</span>
            <div class="py-1 flex items-center gap-3 text-black">
              <div class="text-[13px] font-medium flex items-center gap-1 justify-around border-r-2 border-[#ccc] pr-2 rounded-r-[1px]">
                <img src="/public/images/star.svg" class="w-5">
                <span>${vote}</span>
              </div>
              <div class="font-semibold text-[12px] bg-[#e9e9e9] w-fit py-[4px] px-3 rounded-lg">${sold} sold</div>
              
            </div>
          <span class="text-lg font-semibold text-black leading-5 laptop:text-[14px]">$ ${price}</span>
        </div>
    </div>`,
  };
  const className = variantClasses[variant] || "";
  const div = document.createElement("div");
  div.innerHTML = `
    ${className}
  `;
  return div;
}
