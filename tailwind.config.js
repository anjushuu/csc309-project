/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './P1/src/**/*.html',

  ],
  theme: {
    colors: {
      lightgreen: '#DAE7D5',
      darkgreen: '#748F6F',
      midgreen: '#A4BF9F',
      lightgray: '#D9DED7',
    },
    extend: {
      borderRadius: {
        DEFAULT: '10px',
      },

      fontFamily: {
        'sans': ['Inter']
      }
    }
  },

  plugins: [],
}
