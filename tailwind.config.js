/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js,md}"],
  theme: {
    extend: {
      screens: {
        '4xl': '1920px'
      },
      fontFamily: {
        'miriam': ['Miriam Libre', 'serif']
      },
      colors: {
        'black': '#111111',
        'white': '#fefefe',
        'red': '#c83737',
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

