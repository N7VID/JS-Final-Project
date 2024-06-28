import Splide from "@splidejs/splide";
import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";
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
  .on(routes.onboarding, () => render(onboarding()))
  .on(routes.slider, () => {
    slider();
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
