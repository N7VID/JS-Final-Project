export function Modal({
  content,
  price,
  imgSrc,
  variant,
  colorCode,
  colorName,
  quantity,
  size,
}) {
  const div = document.createElement("div");
  div.innerHTML = `
        <div id="modal" class="animate-fadeinmodalcontainer w-full h-full bg-black bg-opacity-50 z-50 fixed bottom-0 font-inter hidden">
      <div id="wrapper" class="flex flex-col justify-center items-center bg-white fixed bottom-0 w-full h-[calc(100vh-500px)] rounded-t-[45px] px-4 pt-2 animate-fadeinmodal ">
        <div class="items-center w-12 h-1 bg-[#ccc] rounded-3xl"></div>
        <div class="w-full flex justify-center items-center pt-8 pb-6 text-2xl font-bold border-b-2 border-[#e9e9e9]">Remove From Cart?</div>
        <div class="flex-grow flex justify-center items-center">
          <div class=" card flex items-center justify-between shadow-cart shadow-gray-200 rounded-3xl w-[390px] h-[150px] px-4 my-0 mx-auto gap-4">
            <div class="rounded-3xl bg-[#F3F3F3] w-[120px] h-[120px]">
                <img class="rounded-3xl w-[120px] h-[120px]" src=${imgSrc}>
            </div>
            <div class="flex flex-col w-[210px] gap-2">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-lg text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight w-[160px]">${content}</span>   
                </div>
                <div class="flex items-center gap-3 text-[#757475] font-medium text-[13px] -mt-[1px]">
                    <div class="flex items-center gap-2 border-r-2 border-[#757475]  pr-3 h-[14px]">
                        <div style="background-color: ${colorCode}" class="w-3 h-3 flex items-center justify-center shadow-sm shadow-black font-bold rounded-full flex-shrink-0 flex-grow-0 basis-auto"></div>
                        ${colorName}
                    </div>
                    <div>Size=${size}</div>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <span class="font-bold text-xl">$<span id="end-price" >${price}</span></span>
                    <div class="bg-[#F3F3F3] rounded-3xl flex items-center gap-4 py-2 px-3">
                    <div><img id="minus" src="/public/images/minus.svg" class="w-4 cursor-pointer"></div>
                    <div id="quantity" class="font-extrabold">${quantity}</div>
                    <div><img id="add" src="/public/images/add.svg" class="w-4 cursor-pointer"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="flex justify-around pt-6 pb-12 px-8 items-center gap-3 border-t-2 border-[#e9e9e9]">
          <div id="cancel-button" class="bg-[#d4d4d4] rounded-full py-4 px-[50px] text-white w-48 font-semibold shadow-cart flex justify-center items-center">
            <div class="text-black">Cancel</div>
          </div>
          <div id="remove-button" class="bg-black rounded-full py-4 px-[50px] text-white w-48 font-medium shadow-cart flex justify-center items-center whitespace-nowrap">
            <div>Yes, Remove</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
