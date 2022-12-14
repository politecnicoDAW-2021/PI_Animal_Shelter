/* @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
      "./node_modules/flowbite/**/*.js"
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'fAwesome': '"FontAwesome"',
      'title': 'Bowlby One SC',
      'text': 'Nunito Sans'
    },
    extend: {
      colors: {
        'gray-1': '#cdcdcd',
        'gray-2': '#2e2e2e',
        'gray': '#c2bbba8c',
        'white-1': '#f5f5f5',
        'green-primary': '#395144',
        'green-secundary': '#4E6C50',
        'brown-primary': '#AA8B56',
        'brown-secundary': '#F0EBCE',
        'brown-tertiary': '#aa8b56b8',
        'green-700': '#395144',
        'green-800': '#4d6e5c',
        'button': 'white',
        'text-black': '#1e1e1e'
      },
      display: [''],
      backgroundImage: {
        'login-bg': "url('src/assets/login_Background.png')",
        'hero-gradient': " linear-gradient(270deg, rgba(255,255,255,1) 4%, rgba(255,255,255,0.7903536414565826) 15%, rgba(255,255,255,0.6951155462184874) 33%, rgba(255,255,255,0) 47%, rgba(255,255,255,0) 62%, rgba(255,255,255,0) 80%, rgba(255,255,255,0) 92%);",
        //'hero-gradient': "linear-gradient(90deg, rgba(255,255,255,0.9416141456582633) 0%, rgba(255,255,255,0.7287289915966386) 10%, rgba(255,255,255,0.16850490196078427) 55%, rgba(255,255,255,0) 100%);",
      },
      width: {
        'w-hero': '100%',
        'carousel': '1500px',
        'description': '323px',
        'animal-description': '850px',
        'animal-info': '20px',
        'upload': '460px'
      },
      height: {
        'h-hero': '35rem',
        'carousel': '18rem',
        'card': '27rem',
        'animal-card': '50px',
        'animal-view': '1100px'
      },
      spacing: {
        't-text': '15.5rem',
        'r-text': '20rem',
        'carousel': '0 calc((100% - 1500px)/2)',
        'name': '19rem',
        'description': '340px',
        'm-description': '30px calc((100% - 19rem)/2)',
        'urgent': '63rem',
        'upload': '190px',
        'upload-top': '29px',
        'textarea': '153px'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'), require('flowbite/plugin')
  ],
};