export function ModalPayment() {
  const div = document.createElement("div");
  div.innerHTML = `
    <div id="modal" class="animate-fadeinmodalcontainer w-full h-full bg-black bg-opacity-50 z-50 fixed bottom-0 font-inter">
      <div id="wrapper" class="flex flex-col justify-center items-center bg-white fixed left-12 bottom-64 w-[calc(100vw-100px)] h-[calc(100vh-420px)] rounded-[55px] pt-2 animate-fadeinmodal mx-auto my-0">
        <div class="w-full flex justify-center items-center pt-3 "><img class="w-56" src="/public/images/order.jpg"></div>
        <div class="flex-col flex justify-center items-center gap-3">
         <div class="font-bold text-2xl">Order Successful!</div>
         <div class="font-semibold text-[#5e5e5e]">You have successfully made order</div>
        </div>
        <div class="flex flex-col justify-around items-center gap-3 py-6">
            <div id="remove-button" class="bg-black rounded-full py-4 px-[50px] text-white w-64 font-medium shadow-cart flex justify-center items-center whitespace-nowrap">
                <div>View Order</div>
            </div>
            <div id="cancel-button" class="bg-[#d4d4d4] rounded-full py-4 px-[50px] text-white w-64 font-semibold shadow-cart flex justify-center items-center">
                <div class="text-black">Cancel</div>
            </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
