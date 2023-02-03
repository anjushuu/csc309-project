/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


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
      lightblue: 'C7D6E0',
    },
    dropShadow: {
      DEFAULT: '0 4px 4px rgba(0, 0, 0, 0.25))',
    },

    extend: {
      borderRadius: {
        DEFAULT: '10px',
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        'xs': '10px',
      }
    }
  },

  plugins: [
    require('@tailwindcss/forms'),

  ],
}
