/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#903AFF",
        secondary: "#DA34FE",
        tertiary: "#150E28",
        light: "#FE34B9",
        red: "#ff0000"
      }
    },
  },
  plugins: [],
}

