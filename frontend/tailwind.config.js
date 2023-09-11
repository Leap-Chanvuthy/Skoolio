/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        color1_dark : '#001524',
        color2_rose : '#f1356d',
        color3_orange : '#f1356d',
        color4_blue : '#014c75'
      },
      fontFamily : {
        khmer : 'Noto Serif Khmer',
      }
    },
  },
  plugins: [],
}