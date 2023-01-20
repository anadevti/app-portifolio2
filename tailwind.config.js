/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{tsx, ts}"],
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
      'roboto-moto': ['Roboto Mono'],
      'roboto': ['Roboto'],
    },
    extend: {
      colors: {
        'background-dark': '#0E1129',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]

}
