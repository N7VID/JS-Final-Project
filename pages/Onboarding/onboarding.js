export const onboarding = function () {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class= "h-screen">
        <div class="inline-flex items-center justify-center h-5/6 w-full">
          <div class="relative">
            <img src="./images/Ellipse 1.svg" alt="logo" />
            <img src="./images/logo.svg" alt="" class="absolute top-2 left-4" />
          </div>
          <p class="text-[#152536] text-[52px] font-bold font-inter ml-3">
            Shoea
          </p>
        </div>
        <div class="flex justify-center w-full">
          <div class="loader"></div>
        </div>
      </div>
    `;
  return div;
};
