/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#641ae6",
        secondary: "#d926a9",        
        accent: "#1fb2a6",                
        neutral: "#2a323c",               
        base_100: "#1d232a",                
        info: "#3abff8",                 
        success: "#36d399",                
        warning: "#fbbd23",      
        error: "#f87272",
      },
      fontFamily : {
        khmer : 'Noto Serif Khmer',
      }
    },
  },
  plugins: [require('daisyui')],
}