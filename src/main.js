import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";
import {
  getCategory,
  handleStyleCategoryHomepage,
  homePage,
} from "./pages/Home/home";
import {
  checkValidation,
  login,
  loginPage,
  styleHandler,
} from "./pages/Login/login";
import { onboarding, onboardingAnimation } from "./pages/Onboarding/onboarding";
import { signup, signupPage } from "./pages/Signup/signup";
import { slider, sliderAnimation, splide } from "./pages/Slider/slider";
import { welcome, welcomeAnimation } from "./pages/Welcome/welcome";
import "./style.css";
import { productPage, splideProduct } from "./pages/product/product";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  register: "/register",
  slider: "/slider",
  login: "/login",
  home: "/",
  signup: "/signup",
  product: "/product",
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

function checkAuth(next) {
  if (localStorage.getItem("accessToken")) {
    next();
  } else {
    router.navigate("/login");
  }
}

function protectedRoute(next) {
  if (!localStorage.getItem("accessToken")) {
    next();
  } else {
    router.navigate("/");
  }
}

router
  .on(routes.home, () =>
    checkAuth(() =>
      render(homePage(), [getCategory, handleStyleCategoryHomepage])
    )
  )
  .on(routes.onboarding, () => render(onboarding(), [onboardingAnimation]))
  .on(routes.login, () =>
    protectedRoute(() =>
      render(loginPage(), [styleHandler, checkValidation, login])
    )
  )
  .on(routes.welcome, () => render(welcome(), [welcomeAnimation]))
  .on(routes.slider, () => render(slider(), [sliderAnimation, splide]))
  .on(routes.signup, () =>
    protectedRoute(() =>
      render(signupPage(), [styleHandler, checkValidation, signup])
    )
  )
  .on(routes.product, () => render(productPage(), [splideProduct]))
  .resolve();
