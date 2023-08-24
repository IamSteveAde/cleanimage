/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
   
    extend: {
      colors: {
        'dark-bg':'hsl(0 0% 30% / 0.25)',
        'back-bg':'hsl(0 0% 0% / 0.25)',
        "custom-red": "rgb(29, 29, 246)"
      }
    },
    backgroundImage:{
      'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../../src/images/bg_image.jpg")',
      // 'fanzone-image':'linear-gradient(rgba(72.5, 11, 11, 0.6),rgba(72.5, 11, 11, 0.6)), url("../../src/images/football-player-wearing-number-10-jersey.jpg")',
      'fanzone-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/football-player-wearing-number-10-jersey.jpg")',
      'contact-image':'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("../../src/images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg")',
      'about-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/abt.png")',
      'wite-image': 'linear-gradient(rgba(2, 2, 2, 0), rgba(0, 0, 0, 0)), url("../../src/images/4853479.jpg")',
      'bleck-image': 'linear-gradient(rgba(2, 2, 2, 0), rgba(0, 0, 0, 0)), url("../../src/images/5442676.jpg")',
      'abouts-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/workers.jpg")',
      'contact-image-two': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")'

    },
    fontFamily:{
      "garamond":[ "Cormorant Garamond, serif"],
      "montserrat":[ 'Montserrat', 'sans-serif'],
      "serif": ['sans-serif']
    }
  },
  plugins: [],
}
