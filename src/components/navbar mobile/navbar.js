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
          <a id="/" href="/" data-navigo class="icon home text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.home} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Home</span>
          </a>
          <a id="/cart" href="/cart" data-navigo class="icon cart text-center flex flex-col cursor-pointer">
            <img src=${iconsSrc.cart} class="w-[30px]">
            <span class="text-[10px] font-semibold tracking-tight">Cart</span>
          </a>
          <a id="/orders" href="/orders" data-navigo class="icon orders text-center flex flex-col cursor-pointer">
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
    if (window.location.pathname == icon.id) {
      icon.querySelector("img").src = `/public/images/${iconName}-solid.svg`;
    }
  });

  return div;
}

export function handleNavbarStyle() {
  const homeBtn = document.querySelector(".home");
  const homeIcon = homeBtn.querySelector("img");
  const cartBtn = document.querySelector(".cart");
  const cartIcon = cartBtn.querySelector("img");
  const ordersBtn = document.querySelector(".orders");
  const orderIcon = ordersBtn.querySelector("img");
  const walletBtn = document.querySelector(".wallet");
  const walletIcon = walletBtn.querySelector("img");
  const profileBtn = document.querySelector(".profile");
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
    ordersBtn.querySelector("img").src = "/public/images/orders-solid.svg";
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
    const outlineIcons = {
      home: "/public/images/home-outline.svg",
      cart: "/public/images/cart-outline.svg",
      orders: "/public/images/shop-outline.svg",
      wallet: "/public/images/wallet-outline.svg",
      profile: "/public/images/profile-outline.svg",
    };
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
