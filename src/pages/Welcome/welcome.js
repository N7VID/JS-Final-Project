import gsap from "gsap";
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

export function welcomeAnimation() {
  gsap.fromTo(".my-bg", { opacity: "0" }, { opacity: "1", duration: 1.7 });
  gsap.fromTo(
    ".my-bg",
    { opacity: "1" },
    { opacity: "0", duration: 1.5, delay: 2.6 }
  );
  gsap.fromTo(".my-welcome-title", { x: "100vw" }, { x: "0", duration: 1.7 });
  gsap.fromTo(
    ".my-welcome-title",
    { x: "0" },
    { x: "100vw", duration: 1.7, delay: 2.8 }
  );
}
