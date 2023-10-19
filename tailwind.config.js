/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darker: '#303030',
        blue: '#49DEFF',
        gray: '#4E4E4E',
      },
    },
  },
  plugins: [],
}