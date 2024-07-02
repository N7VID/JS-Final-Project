import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";
import { homePage } from "./pages/Home/home";
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
import { productPage, productPageHandler } from "./pages/product/product";
import { mostPopularPage } from "./pages/Most popular/mostPopular";
import { handleStyleCategoryHomepage } from "./utility/StyleCategory";
import { getCategory } from "./utility/getCategory";
import { getProduct } from "./utility/getProduct";
import { categoryPage, categoryPageHandler } from "./pages/Category/category";
import { cartPage } from "./pages/cart/cart";

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
  mostPopular: "/mostPopular",
  category: "/category/:brand",
  cart: "/cart",
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
      render(homePage(), [
        getProduct,
        getCategory,
        handleStyleCategoryHomepage,
        categoryPageHandler,
        productPageHandler,
      ])
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
  .on(routes.product, () => render(productPage()))
  .on(routes.mostPopular, () =>
    render(mostPopularPage(), [
      getProduct,
      getCategory,
      handleStyleCategoryHomepage,
    ])
  )
  .on(routes.category, (slug) => render(categoryPage(slug.data.brand)))
  .on(routes.cart, () => render(cartPage()))
  .resolve();
