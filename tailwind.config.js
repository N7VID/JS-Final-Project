/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "serif"],
      },
      boxShadow: {
        cart: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      },
      backgroundImage: {
        "welcome-image": "url('/images/WallpaperDog-20534610 1.png')",
      },
    },
  },
  plugins: [],
};
