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
        md: "1024px",
        lg: "1300px",
        xl: "1589px",
        "2xl": "1728px",
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
