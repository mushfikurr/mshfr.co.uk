/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          50: "#f2f4fd",
          100: "#e5e8f9",
          200: "#c5cef2",
          300: "#92a5e7",
          400: "#5876d8",
          500: "#3254c5",
          600: "#223da7",
          700: "#1d3187",
          800: "#1c2d70",
          900: "#1c285e",
          950: "#03040a",
        },
        text: {
          50: "#f2f4fb",
          100: "#e0e4f4",
          200: "#d5daf0",
          300: "#bcc2e5",
          400: "#a0a4d9",
          500: "#8888cc",
          600: "#7670bb",
          700: "#655ea4",
          800: "#524e85",
          900: "#46446b",
          950: "#2a283e",
        },
        accent: {
          50: "#e8f5ff",
          100: "#d5ecff",
          200: "#b4daff",
          300: "#87c1ff",
          400: "#5798ff",
          500: "#316eff",
          600: "#0e40ff",
          700: "#0536fd",
          800: "#0831cb",
          900: "#11329e",
          950: "#0a1b5c",
        },
        primary: {
          50: "#f0f4fd",
          100: "#e3ecfc",
          200: "#ccdaf9",
          300: "#adc0f4",
          400: "#7f94eb",
          500: "#707fe4",
          600: "#555bd6",
          700: "#4548bd",
          800: "#3b3f98",
          900: "#363b79",
          950: "#1f2047",
        },
        secondary: {
          50: "#e7f4ff",
          100: "#d4eaff",
          200: "#b1d7ff",
          300: "#82baff",
          400: "#518eff",
          500: "#2a61ff",
          600: "#0630ff",
          700: "#002aff",
          800: "#0226d1",
          900: "#0c289a",
          950: "#08175e",
        },
      },
    },
  },
  plugins: [],
};