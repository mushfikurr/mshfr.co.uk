/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "background-img": "url('/img/background.png')",
        "landing-img": "url('/img/landing-background.png')",
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(119, 152, 217, 0.45)",
          "0 0px 20px rgba(119, 152, 217, 0.3)",
        ],
      },
      animation: {
        background: "background 100s linear infinite",
        "slide-in-300": "slide-in 1s ease 300ms forwards",
        "slide-in-500": "slide-in 1s ease 500ms forwards",
        "slide-in-700": "slide-in 1s ease 700ms forwards",
      },
      keyframes: {
        background: {
          "0%": {
            "background-size": "400% 400%",
            "background-position": "0% 0%",
          },
          "100%": {
            "background-size": "400% 400%",
            "background-position": "100% 100%",
          },
        },
        "slide-in": {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        primary: "#7798D9",
        secondary: "#253046",
        accent: "#1153D6",
        background: "#0B0D13",
        card: "#11141D",
        text: {
          DEFAULT: "#EEEEEE",
          50: "#F8F8F8",
          100: "#EEEEEE",
          200: "#D2D2D2",
          300: "#B6B6B6",
          400: "#9A9A9A",
          500: "#7E7E7E",
          600: "#626262",
          700: "#464646",
          800: "#2A2A2A",
          900: "#0E0E0E",
          950: "#000000",
        },
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("tailwindcss-animate"),
  ],
};
