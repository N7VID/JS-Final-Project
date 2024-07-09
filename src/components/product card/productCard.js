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
        <div class="bg-[#F3F3F3] rounded-[24px] h-[180px] w-[180px] flex justify-center items-center">
          <img src=${imgSrc} alt="shoe picture" class="w-[142px] h-[142px] object-contain rounded-full">
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold text-[20px] text-[#152536] pt-2 text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight">${content}</span>
          <span class="font-semibold text-[#152536] leading-5">$ ${price}</span>
        </div>
    </div>`,
    cart: `
      <div id="${id}" class=" card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4">
            <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
                <img id="imgSrc" class="rounded-3xl w-[120px] h-[120px]" src=${imgSrc}>
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
        class="card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4"
      >
        <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
          <img
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
        class="card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4"
      >
        <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
          <img
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
            <div class="font-semibold text-[10px] bg-[#e9e9e9] w-fit py-[5px] px-3 rounded-lg">In Delivery</div>
          </div>          
          <div class="flex justify-between items-center">
            <div class="font-bold text-xl">$<span id="price">${price}</span></div>
            <div class="bg-black rounded-2xl text-white px-4 py-[6px] text-[13px]">Track Order</div>
          </div>
        </div>
      </div>      
    `,
  };
  const className = variantClasses[variant] || "";
  const div = document.createElement("div");
  div.innerHTML = `
    ${className}
  `;
  return div;
}
