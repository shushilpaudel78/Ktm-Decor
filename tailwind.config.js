/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ['Aileron', 'sans-serif'],
      },
      fontFamily: {
        montecarlo: ['"MonteCarlo"', 'cursive'], // Adding MonteCarlo font
      },
    },
  },
  plugins: [],
}