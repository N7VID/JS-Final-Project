import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";
import { gsap } from "gsap";
import { homePage } from "./pages/Home/home";
import {
  emailInputHandler,
  emailValidation,
  formIsValid,
  login,
  passwordInputHandler,
  passwordValidation,
  showPasswordHandler,
} from "./pages/Login/login";
import { onboarding } from "./pages/Onboarding/onboarding";
import { slider } from "./pages/Slider/slider";
import { welcome } from "./pages/Welcome/welcome";
import "./style.css";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  register: "/register",
  slider: "/slider",
  login: "/login",
  home: "/",
};
export const root = document.getElementById("app");

export function render(content, eventListeners) {
  root.innerHTML = "";
  root.append(content);
  if (eventListeners && eventListeners.length > 0) {
    eventListeners.forEach((event) => {
      event();
    });
  }
}

router
  .on(routes.home, render(homePage()))
  .on(routes.onboarding, () => {
    render(onboarding());
    gsap.fromTo(
      ".bg-onboard",
      { opacity: "1" },
      { opacity: "0", duration: 0.5, delay: 2 }
    );
  })
  .on(routes.welcome, () => {
    render(welcome());
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
  })
  .on(routes.slider, () => {
    slider();
    gsap.fromTo(".my-bg", { x: "100vw" }, { x: "0", duration: 1.7 });
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
