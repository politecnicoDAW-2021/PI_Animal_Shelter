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
      'brown-secundary': '#F0EBCE'
    },
    fontFamily: {
      'fAwesome': '"FontAwesome"'
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('src/assets/login_Background.png')",
        'hero-gradient': "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 87%, rgba(255,255,255,1) 95%);",
        //'hero': "https://media.istockphoto.com/photos/happy-smiling-pet-dog-puppy-web-banner-with-copy-space-picture-id1024626456?b=1&k=20&m=1024626456&s=170667a&w=0&h=a1QAyqA7nWgyon4dPeAwHD_d2kTK4p_Uj9z8k547Mws="
      },
      width: {
        'w-hero': '100%',
      },
      height: {
        'h-hero': '41rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};