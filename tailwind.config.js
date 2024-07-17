/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1589px",
        "3xl": "1920px",
      },
      boxShadow: {
        "custom-white-for-large": "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
        "custom-white-for-small": "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
        "slider-navigation-btn-shadow-normal":
          "0px 4px 8px rgba(0, 0, 0, 0.25)",
        "slider-navigation-btn-shadow-for-3xl":
          "0px 4px 24px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      sfPro: ["sfPro", "sans-serif"],
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};
