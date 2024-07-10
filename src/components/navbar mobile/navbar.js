import { router } from "../../main";

export function NavBar() {
  const iconsSrc = {
    home: "/public/images/home-outline.svg",
    cart: "/public/images/cart-outline.svg",
    orders: "/public/images/shop-outline.svg",
    wallet: "/public/images/wallet-outline.svg",
    profile: "/public/images/profile-outline.svg",
  };

  const div = document.createElement("div");
  div.classList = "w-full fixed bg-white bottom-0";
  div.innerHTML = `
    <nav class="my-0 mx-auto w-full">
        <ul class="flex gap-12 justify-center items-center px-6 py-4 text-[#152536]">
          <a id="/" class="icon home text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.home} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Home</span>
          </a>
          <a id="/cart" class="icon cart text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.cart} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Cart</span>
          </a>
          <a id="/orders" class="icon orders text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.orders} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Orders</span>
          </a>
          <a id="/wallet" class="icon wallet text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.wallet} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Wallet</span>
          </a>
          <a id="/profile" class="icon profile text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.profile} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Profile</span>
          </a>
        </ul>
    </nav>
  `;

  const icons = Object.values(div.querySelectorAll(".icon"));
  icons.forEach((icon) => {
    let iconName = icon.querySelector("span").innerHTML.toLowerCase();
    setTimeout(() => {
      if (window.location.pathname === icon.id) {
        icon.querySelector("img").src = `/public/images/${iconName}-solid.svg`;
      }
    }, 10);
  });

  const homeIcon = div.querySelector(".home");
  const cartIcon = div.querySelector(".cart");
  const orderIcon = div.querySelector(".orders");
  homeIcon.addEventListener("click", () => {
    router.navigate("/");
  });
  cartIcon.addEventListener("click", () => {
    router.navigate("/cart");
  });
  orderIcon.addEventListener("click", () => {
    router.navigate("/orders");
  });

  return div;
}
