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
        'custom-blue' : '#264653',
        'custom-teal' : '#2a9d8f',
        'custom-yellow' : '#e9c46a',
        'custom-orange-light' : '#f4a261',
        'custom-orange' : '#e76f51',
        'custom-gray' : '#d9d9d9'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}
