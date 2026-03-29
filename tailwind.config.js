/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './partials/**/*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8b2a1a',
          redLight: '#c04030',
          cream: '#f5f0e8',
          dark: '#1a1a1a',
          muted: '#7a6e60',
          border: '#e2d8cc'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
