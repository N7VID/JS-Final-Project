const icons = {
  home: "/public/images/home-outline.svg",
  cart: "/public/images/cart-outline.svg",
  orders: "/public/images/shop-outline.svg",
  wallet: "/public/images/wallet-outline.svg",
  profile: "/public/images/profile-outline.svg",
};
const outlineIcons = {
  home: "/public/images/home-outline.svg",
  cart: "/public/images/cart-outline.svg",
  orders: "/public/images/shop-outline.svg",
  wallet: "/public/images/wallet-outline.svg",
  profile: "/public/images/profile-outline.svg",
};

export function NavBar() {
  handleActiveIcon();
  const div = document.createElement("div");
  div.classList = "w-full fixed bg-white bottom-0";
  div.innerHTML = `
    <nav class="my-0 mx-auto w-full">
        <ul class="flex gap-12 justify-center items-center px-6 py-4 text-[#152536]">
          <a href="/" data-navigo class="text-center flex flex-col cursor-pointer" id="home">
            <img src=${icons.home} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Home</span>
          </a>
          <a href="/cart" data-navigo class="text-center flex flex-col cursor-pointer" id="cart">
            <img src=${icons.cart} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Cart</span>
          </a>
          <li class="text-center flex flex-col cursor-pointer" id="orders">
            <img src=${icons.orders} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Orders</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer" id="wallet">
            <img src=${icons.wallet} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Wallet</span>
          </li>
          <li class="text-center flex flex-col cursor-pointer" id="profile">
            <img src=${icons.profile} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Profile</span>
          </li>
        </ul>
    </nav>
  `;

  return div;
}

export function handleNavbarStyle() {
  const homeBtn = div.querySelector("#home");
  const homeIcon = homeBtn.querySelector("img");
  const cartBtn = div.querySelector("#cart");
  const cartIcon = cartBtn.querySelector("img");
  const ordersBtn = div.querySelector("#orders");
  const orderIcon = ordersBtn.querySelector("img");
  const walletBtn = div.querySelector("#wallet");
  const walletIcon = walletBtn.querySelector("img");
  const profileBtn = div.querySelector("#profile");
  const profileIcon = profileBtn.querySelector("img");

  homeBtn.addEventListener("click", () => {
    homeBtn.querySelector("img").src = "/public/images/home-solid.svg";
    clearIcon("homeBtn");
  });
  cartBtn.addEventListener("click", () => {
    cartBtn.querySelector("img").src = "/public/images/cart-solid.svg";
    clearIcon("cartBtn");
  });
  ordersBtn.addEventListener("click", () => {
    ordersBtn.querySelector("img").src = "/public/images/shop-solid.svg";
    clearIcon("ordersBtn");
  });
  walletBtn.addEventListener("click", () => {
    walletBtn.querySelector("img").src = "/public/images/wallet-solid.svg";
    clearIcon("walletBtn");
  });
  profileBtn.addEventListener("click", () => {
    profileBtn.querySelector("img").src = "/public/images/profile-solid.svg";
    clearIcon("profileBtn");
  });

  function clearIcon(text) {
    switch (text) {
      case "homeBtn":
        cartIcon.src = outlineIcons.cart;
        orderIcon.src = outlineIcons.orders;
        walletIcon.src = outlineIcons.wallet;
        profileIcon.src = outlineIcons.profile;
        break;
      case "cartBtn":
        homeIcon.src = outlineIcons.home;
        orderIcon.src = outlineIcons.orders;
        walletIcon.src = outlineIcons.wallet;
        profileIcon.src = outlineIcons.profile;
        break;
      case "ordersBtn":
        homeIcon.src = outlineIcons.home;
        cartIcon.src = outlineIcons.cart;
        walletIcon.src = outlineIcons.wallet;
        profileIcon.src = outlineIcons.profile;
        break;
      case "walletBtn":
        homeIcon.src = outlineIcons.home;
        cartIcon.src = outlineIcons.cart;
        orderIcon.src = outlineIcons.orders;
        profileIcon.src = outlineIcons.profile;
        break;
      case "profileBtn":
        homeIcon.src = outlineIcons.home;
        cartIcon.src = outlineIcons.cart;
        orderIcon.src = outlineIcons.orders;
        walletIcon.src = outlineIcons.wallet;
        break;
      default:
        break;
    }
  }
}

function handleActiveIcon() {
  window.location.pathname === "/"
    ? (icons.home = "/public/images/home-solid.svg")
    : window.location.pathname === "/cart"
    ? (icons.cart = "/public/images/cart-solid.svg")
    : window.location.pathname === "/orders"
    ? (icons.orders = "/public/images/shop-solid.svg")
    : window.location.pathname === "/wallet"
    ? (icons.wallet = "/public/images/wallet-solid.svg")
    : window.location.pathname === "/profile"
    ? (icons.profile = "/public/images/profile-solid.svg")
    : icons;
}
