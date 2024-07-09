import Splide from "@splidejs/splide";
import { root, router } from "../../main";
import gsap from "gsap";
import { Button } from "../../components/button/button";

export function slider() {
  const div = document.createElement("div");
  div.innerHTML = `
         <section class="my-bg splide w-full h-screen p-0" aria-labelledby="carousel-heading">

        <div class="splide__track mx-auto my-0 w-full font-inter"> 
          <ul class="splide__list">
            <li class="splide__slide">
              <img src="./images/slide1.png" alt="slide1" class="object-fill w-full"/>
              <p class="text-[32px] font-semibold text-center pt-8">We provide high quality products just for you</p>
            </li>
            <li class="splide__slide">
              <img src="./images/slide2.png" alt="slide2" class="object-fill w-full"/>
              <p class="text-[32px] font-semibold text-center pt-8">Your satisfaction is our number one priority</p>
            </li>
            <li class="splide__slide">
              <img src="./images/slide3.png" alt="slide3" class="object-fill w-full"/>
              <p class="text-[32px] font-semibold text-center pt-8 px-3">Let’s fulfill your fashion needs with shoea right now!</p>
            </li>
          </ul>
          <div class="w-full flex justify-center items-center mt-[87px]" id="button-container"></div>
       
        </div>
      </section>
        `;
  const button = Button({ content: "Next", variant: "type1", id: "next-btn" });
  const buttonContainer = div.querySelector("#button-container");
  buttonContainer.appendChild(button);
  return div;
}
export function sliderAnimation() {
  gsap.fromTo(".my-bg", { x: "100vw" }, { x: "0", duration: 1.7 });
}
export function splide() {
  const splide = new Splide(".splide", {
    classes: {
      arrows: "splide__arrows hidden",
      page: "splide__pagination__page custom-pagination",
    },
  }).mount();
  root.querySelector("#next-btn").addEventListener("click", () => {
    if (splide.index + 1 === 3) {
      router.navigate("/login");
      localStorage.setItem("FirstVisited", "true");
    } else {
      splide.go(splide.index + 1);
    }
  });
  splide.on("pagination:updated", () => {
    if (splide.index + 1 === 3) {
      root.querySelector("#next-btn").innerHTML = "Get Started";
    } else {
      root.querySelector("#next-btn").innerHTML = "Next";
    }
  });
}
