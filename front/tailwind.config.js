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
      'white-1': '#f5f5f5',
      'green-primary': '#395144',
      'green-secundary': '#4E6C50',
      'brown-primary': '#AA8B56',
      'brown-secundary': '#F0EBCE',
      'green-700': '#395144',
      'green-800': '#4d6e5c',
      'button': 'white'
    },
    fontFamily: {
      'fAwesome': '"FontAwesome"',
      'title': 'Bowlby One SC',
      'text': 'Nunito Sans'
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('src/assets/login_Background.png')",
        'hero-gradient': "linear-gradient(270deg, rgba(255,255,255,0.9528186274509804) 4%, rgba(255,255,255,0.6951155462184874) 15%, rgba(255,255,255,0) 100%)",
        //'hero-gradient': "linear-gradient(90deg, rgba(255,255,255,0.9416141456582633) 0%, rgba(255,255,255,0.7287289915966386) 10%, rgba(255,255,255,0.16850490196078427) 55%, rgba(255,255,255,0) 100%);",
      },
      width: {
        'w-hero': '100%',
      },
      height: {
        'h-hero': '35rem',
      },
      spacing: {
        't-text': '15.5rem',
        'r-text': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};