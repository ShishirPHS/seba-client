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
        // sm: "576px",
      },
      boxShadow: {
        "videoConsultation-normal": "0px 4px 27px 1px rgba(0, 0, 0, 0.20)",
        "videoConsultation-large": "0px 4px 146.2px 1px rgba(0, 0, 0, 0.20)",
        "custom-white-for-large": "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
        "custom-white-for-small": "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
        "slider-navigation-btn-shadow-normal":
          "0px 4px 8px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sfPro: ["sfPro", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primaryBg: "var(--color-primary-bg)",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
  ],
  daisyui: {
    themes: ["emerald"],
  },
};
