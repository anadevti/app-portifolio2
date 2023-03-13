/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
      },
      height: {
        '100': '26rem',
        '106': '30rem',
        '108': '36rem',
        '110': '38rem',
        '112': '40rem',
        '114': '42rem',
        '116': '44rem',
        '118': '46rem',
        '120': '48rem',
        '122': '50rem',
        '124': '52rem',
        '130': '60rem',

      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]

})
