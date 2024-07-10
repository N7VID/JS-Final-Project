import "@splidejs/splide/css/sea-green";
import Navigo from "navigo";

import { categoryPage, categoryPageHandler } from "./pages/Category/category";
import { homePageApi } from "./pages/Home/api/product-api";
import { homePage } from "./pages/Home/home";
import {
  checkValidation,
  login,
  loginPage,
  styleHandler,
} from "./pages/Login/login";
import { mostPopularPage } from "./pages/Most popular/mostPopular";
import { onboarding, onboardingAnimation } from "./pages/Onboarding/onboarding";
import {
  checkValidationSignUp,
  signup,
  signupPage,
  styleHandlerSignup,
} from "./pages/Signup/signup";
import { slider, sliderAnimation, splide } from "./pages/Slider/slider";
import { welcome, welcomeAnimation } from "./pages/Welcome/welcome";
import {
  addressPage,
  handleRadioButtons,
  handleSubmitRadio,
} from "./pages/address/address";
import { cartPage, handleCheckoutButton } from "./pages/cart/cart";
import {
  checkoutPage,
  paymentContinueButtonHandler,
} from "./pages/checkout/checkout";
import { ordersPage } from "./pages/orders/orders";
import {
  handleConfirmPaymentButton,
  handleRadioButtonsPayment,
  paymentPage,
} from "./pages/payment/payment";
import { productPage, productPageHandler } from "./pages/product/product";
import {
  handleRadioButtonsShipping,
  handleSubmitRadioShipping,
  shippingPage,
} from "./pages/shipping/shipping";
import "./style.css";
import { handleStyleCategoryHomepage } from "./utility/StyleCategory";
import { getCategory } from "./utility/getCategory";

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
  chooseShipping: "/chooseShipping",
  payment: "/payment",
  orders: "/orders",
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

function firstVisited(next) {
  if (!localStorage.getItem("FirstVisited")) {
    next();
  } else {
    router.navigate("/login");
  }
}

function secondVisited(next) {
  if (localStorage.getItem("FirstVisited")) {
    next();
  } else {
    router.navigate("/onboarding");
  }
}

router
  .on(routes.home, () =>
    homePageApi()
      .then((res) => {
        secondVisited(() =>
          checkAuth(() =>
            render(homePage(res.data), [
              getCategory,
              handleStyleCategoryHomepage,
              categoryPageHandler,
              productPageHandler,
            ])
          )
        );
      })
      .catch((e) => console.log(e))
  )
  .on(routes.onboarding, () =>
    firstVisited(() => render(onboarding(), [onboardingAnimation]))
  )
  .on(routes.login, () =>
    secondVisited(() =>
      protectedRoute(() =>
        render(loginPage(), [styleHandler, checkValidation, login])
      )
    )
  )
  .on(routes.welcome, () =>
    firstVisited(() => render(welcome(), [welcomeAnimation]))
  )
  .on(routes.slider, () =>
    firstVisited(() => render(slider(), [sliderAnimation, splide]))
  )
  .on(routes.signup, () =>
    secondVisited(() =>
      protectedRoute(() =>
        render(signupPage(), [
          styleHandlerSignup,
          checkValidationSignUp,
          signup,
        ])
      )
    )
  )
  .on(routes.product, () =>
    secondVisited(() => checkAuth(() => render(productPage())))
  )
  .on(routes.mostPopular, () =>
    homePageApi()
      .then((res) => {
        secondVisited(() =>
          checkAuth(() =>
            render(mostPopularPage(res.data), [
              getCategory,
              handleStyleCategoryHomepage,
              productPageHandler,
            ])
          )
        );
      })
      .catch((e) => console.log(e))
  )
  .on(routes.category, (slug) =>
    secondVisited(() =>
      checkAuth(() =>
        render(categoryPage(slug.data.brand), [productPageHandler])
      )
    )
  )
  .on(routes.cart, () =>
    secondVisited(() =>
      checkAuth(() => render(cartPage(), [handleCheckoutButton]))
    )
  )
  .on(routes.checkout, () =>
    secondVisited(() =>
      checkAuth(() => render(checkoutPage(), [paymentContinueButtonHandler]))
    )
  )
  .on(routes.chooseAddress, () =>
    secondVisited(() =>
      checkAuth(() =>
        render(addressPage(), [handleRadioButtons, handleSubmitRadio])
      )
    )
  )
  .on(routes.chooseShipping, () =>
    secondVisited(() =>
      checkAuth(() =>
        render(shippingPage(), [
          handleRadioButtonsShipping,
          handleSubmitRadioShipping,
        ])
      )
    )
  )
  .on(routes.payment, () =>
    secondVisited(() =>
      checkAuth(() =>
        render(paymentPage(), [
          handleRadioButtonsPayment,
          handleConfirmPaymentButton,
        ])
      )
    )
  )
  .on(routes.orders, () =>
    secondVisited(() => checkAuth(() => render(ordersPage())))
  )
  .resolve();
