/* @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'gray-1': '#cdcdcd',
      'gray-2': '#2e2e2e',
      'white-1': '#f5f5f5'
    },
    fontFamily: {
      'fAwesome': '"FontAwesome"'
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('src/assets/login_Background.png')",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};