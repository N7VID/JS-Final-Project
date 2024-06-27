import Splide from "@splidejs/splide";
import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";
import {
  login,
  emailValidation,
  passwordValidation,
  passwordInputHandler,
  emailInputHandler,
  showPasswordHandler,
  formIsValid,
} from "../pages/Login/login";
import { onboarding } from "../pages/Onboarding/onboarding";
import { slider } from "../pages/Slider/slider";
import { welcome } from "../pages/Welcome/welcome";
import "../src/style.css";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  register: "/register",
  slider: "/slider",
  login: "/login",
};
export const root = document.getElementById("app");

function render(content, eventListeners) {
  root.innerHTML = "";
  root.appendChild(content);
  if (eventListeners && eventListeners.length > 0) {
    eventListeners.forEach((event) => {
      event();
    });
  }
}

router
  .on(routes.onboarding, () => render(onboarding()))
  .on(routes.welcome, () => render(welcome()))
  .on(routes.slider, () => {
    render(slider());

    document.getElementById("next-btn").addEventListener("click", () => {
      if (splide.index + 1 === 3) {
        router.navigate("/welcome");
      } else {
        splide.go(splide.index + 1);
      }
      splide.on("pagination:updated", () => {
        if (splide.index + 1 == 3) {
          document.getElementById("next-btn").innerHTML = "Get Started";
        } else {
          document.getElementById("next-btn").innerHTML = "Next";
        }
      });
      // splide.on("click", () => {
      //   console.log("hi");
      // });
    });
  })
  .on(routes.login, () => {
    render(login());
    document
      .getElementById("email")
      .addEventListener("keyup", emailInputHandler);
    document
      .getElementById("password")
      .addEventListener("keyup", passwordInputHandler);
    document.getElementById("email").addEventListener("blur", () => {
      emailValidation();
      formIsValid();
    });
    document.getElementById("password").addEventListener("blur", () => {
      passwordValidation();
      formIsValid();
    });
    document
      .getElementById("eye-icon")
      .addEventListener("click", showPasswordHandler);
  })
  .resolve();

const splide = new Splide(".splide", {
  classes: {
    arrows: "splide__arrows hidden",
    page: "splide__pagination__page custom-pagination",
  },
}).mount();
