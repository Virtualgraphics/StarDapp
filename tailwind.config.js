/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Cinzel: ["Cinzel","Decorativ"],
        Proza: ["Proza Libre", "sans-serif"],
      },
     
    


    },
  },
  plugins: [],
};