import "@splidejs/splide/css/sea-green";

import Navigo from "navigo";
import { homePage } from "./pages/Home/home";
import { checkValidation, login, styleHandler } from "./pages/Login/login";
import { onboarding, onboardingAnimation } from "./pages/Onboarding/onboarding";
import { signupPage } from "./pages/Signup/signup";
import { slider, sliderAnimation, splide } from "./pages/Slider/slider";
import { welcome, welcomeAnimation } from "./pages/Welcome/welcome";
import "./style.css";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  register: "/register",
  slider: "/slider",
  login: "/login",
  home: "/",
  signup: "/signup",
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
  .on(routes.onboarding, () => render(onboarding(), [onboardingAnimation]))
  .on(routes.login, () => render(login(), [styleHandler, checkValidation]))
  .on(routes.welcome, () => render(welcome(), [welcomeAnimation]))
  .on(routes.slider, () => render(slider(), [sliderAnimation, splide]))
  .on(routes.signup, () => render(signupPage()))
  .resolve();
