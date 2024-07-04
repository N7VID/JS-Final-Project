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
import {
  checkValidationSignUp,
  signup,
  signupPage,
  styleHandlerSignup,
} from "./pages/Signup/signup";
import { slider, sliderAnimation, splide } from "./pages/Slider/slider";
import { welcome, welcomeAnimation } from "./pages/Welcome/welcome";
import "./style.css";
import { productPage, productPageHandler } from "./pages/product/product";
import { mostPopularPage } from "./pages/Most popular/mostPopular";
import { handleStyleCategoryHomepage } from "./utility/StyleCategory";
import { getCategory } from "./utility/getCategory";
import { categoryPage, categoryPageHandler } from "./pages/Category/category";
import { cartPage, handleCheckoutButton } from "./pages/cart/cart";
import { checkoutPage } from "./pages/checkout/checkout";
import {
  addressPage,
  handleRadioButtons,
  handleSubmitRadio,
} from "./pages/address/address";
import { homePageApi } from "./pages/Home/api/product-api";
import { handleNavbarStyle } from "./components/navbar mobile/navbar";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  register: "/register",
  slider: "/slider",
  login: "/login",
  home: "/",
  signup: "/signup",
  product: "/product/:id",
  mostPopular: "/mostPopular",
  category: "/category/:brand",
  cart: "/cart",
  checkout: "/checkout",
  chooseAddress: "/chooseAddress",
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
    homePageApi()
      .then((res) => {
        checkAuth(() =>
          render(homePage(res.data), [
            getCategory,
            handleStyleCategoryHomepage,
            categoryPageHandler,
            productPageHandler,
            handleNavbarStyle,
          ])
        );
      })
      .catch((e) => console.log(e))
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
      render(signupPage(), [styleHandlerSignup, checkValidationSignUp, signup])
    )
  )
  .on(routes.product, () => render(productPage()))
  .on(routes.mostPopular, () =>
    homePageApi()
      .then((res) => {
        checkAuth(() =>
          render(mostPopularPage(res.data), [
            getCategory,
            handleStyleCategoryHomepage,
            productPageHandler,
          ])
        );
      })
      .catch((e) => console.log(e))
  )
  .on(routes.category, (slug) =>
    render(categoryPage(slug.data.brand), [productPageHandler])
  )
  .on(routes.cart, () =>
    render(cartPage(), [handleNavbarStyle, handleCheckoutButton])
  )
  .on(routes.checkout, () => render(checkoutPage()))
  .on(routes.chooseAddress, () =>
    render(addressPage(), [handleRadioButtons, handleSubmitRadio])
  )
  .resolve();
