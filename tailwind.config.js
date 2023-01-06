/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      fontFamily : {
        'bruton' : ['burtons'],
      },
      colors : {
        primary : '#0284c7',
        secondary : '#0ea5e9',
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
