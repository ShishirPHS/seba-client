/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      sfPro: ["sfPro", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
