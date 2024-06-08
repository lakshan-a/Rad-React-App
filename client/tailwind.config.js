/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter', 'san-serif'],
      //   serif: ['Jose', 'sans']
      // },
      colors: {
        primary: '#6b40e4',
        secondary: '#47b725',
        tertiary: '#4c4d4d'
      }
    },
  },
  plugins: [],
}

