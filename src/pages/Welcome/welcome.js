import { router } from "../../main";

export function welcome() {
  const div = document.createElement("div");
  div.innerHTML = `
      <div
        class="my-bg relative bg-welcome-image bg-cover bg-center h-screen bg-no-repeat bg-opacity-50"
      >
        <div
          class="my-welcome-title absolute bottom-20 text-white font-inter font-medium px-8 space-y-6"
        >
          <div
            class="text-[30px] inline-flex items-center font-medium min-[341px]:text-[42px]"
          >
            Welcome to
            <img
              src="./images/waving-hand-sign_1f44b.png"
              alt="waving-hand-sign "
              class="w-10 ml-4"
            />
          </div>
          <div class="text-7xl font-bold">Shoea</div>
          <div class="text-base laptop:text-2xl">
            The best sneakers & shoes e-commerces app of the century for your
            fashion needs!
          </div>
        </div>
      </div>
      `;
  setTimeout(() => {
    router.navigate("/slider");
  }, 4000);
  return div;
}
