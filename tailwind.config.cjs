/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        orange: "#F45C09",
        "black-900": "#232220",
        gray: "#474645",
      },
      fontFamily: {
        sans: ["Oswald", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
