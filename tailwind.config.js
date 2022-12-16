const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Poppins"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333399",
          contrast: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#121238",
          contrast: "#FFFFFF",
        },
        red: {
          DEFAULT: "#FF6666",
          contrast: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
          contrast: "#FFFFFF",
        },
        white: {
          DEFAULT: "#FFFFFF",
          contrast: "#333399",
        },
      },
    },
  },
  plugins: [],
};
