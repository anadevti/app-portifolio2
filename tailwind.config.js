/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{tsx, ts}"],
  theme: {
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
