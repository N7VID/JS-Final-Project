import { onboarding } from "../pages/Onboarding/onboarding";
import { welcome } from "../pages/Welcome/welcome";
import "../src/style.css";
import Navigo from "navigo";

export const router = new Navigo("/");
export const routes = {
  onboarding: "/onboarding",
  welcome: "/welcome",
  Register: "/register",
};
export const root = document.getElementById("app");

function render(content, eventListeners) {
  root.append(content);
  if (eventListeners && eventListeners.length > 0) {
    eventListeners.forEach((event) => {
      event();
    });
  }
}

router
  .on(routes.onboarding, () => render(onboarding()))
  .on(routes.welcome, () => render(welcome()))
  .resolve();
