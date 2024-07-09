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
      keyframes: {
        fadein: {
          "0%": { right: "0", opacity: "0" },
          "100%": { right: "10px", opacity: "1" },
        },
        fadeout: {
          "0%": { right: "10px", opacity: "1" },
          "100%": { right: "0", opacity: "0" },
        },
        fadeinmodalcontainer: {
          "0%": { bottom: "0", opacity: "0" },
          "100%": { bottom: "50px", opacity: "1" },
        },
        fadeinmodalcontainerpayment: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeoutmodalcontainer: {
          "0%": { bottom: "50px", opacity: "1" },
          "100%": { bottom: "0", opacity: "0" },
        },
        fadeinmodal: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeoutmodal: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(100%)" },
        },
      },
      animation: {
        fadeinfadeout: "fadeout 0.3s ease-out 2.7s, fadein 0.3s ease-in",
        fadeinmodalcontainer: "fadeinmodalcontainer 0.4s ease-in",
        fadeoutmodalcontainer: "fadeoutmodalcontainer 0.4s ease-out",
        fadeinmodal: "fadeinmodal 0.3s ease-in",
        fadeoutmodal: "fadeoutmodal 0.3s ease-out",
        fadeinmodalcontainerpayment: "fadeinmodalcontainerpayment 0.3 ease-in",
      },
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
