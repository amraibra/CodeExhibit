/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        codeExhibit: '#E76F51', // Custom color
      },
      fontFamily: {
        londrina: ['Londrina Solid', 'sans-serif'], // Existing custom font
        inter: ['Inter', 'sans-serif'], // Added Inter font
      },
    },
  },
  plugins: [],
}
