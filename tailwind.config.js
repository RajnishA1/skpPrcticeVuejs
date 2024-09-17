/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#088190',
        'secondary':'#066F7C '
      }
    },
  },
  variants:{},
  plugins: [],
}

