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
        "custom-white-for-large": "0px 4px 146.2px 1px rgba(0, 0, 0, 0.20)",
        "custom-white-for-small": "0px 4px 146.2px 35px rgba(0, 0, 0, 0.20)",
        "slider-navigation-btn-shadow": "0px 4px 80px rgba(0, 0, 0, 0.25)",
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
};
