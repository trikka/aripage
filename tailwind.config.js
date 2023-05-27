/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        bg: {
          200: "#f5f5f5",
          300: "#cccccc",
          DEFAULT: "#FFFFFF",
        },
        primary: {
          200: "#de835f",
          300: "#944424",
          DEFAULT: "#FFA07A",
        },
        accent: {
          200: "#99616c",
          DEFAULT: "#FFC0CB",
        },
        text: {
          200: "#5c5c5c",
          DEFAULT: "#333333",
        },
      },
    },
  },
  plugins: [],
};
