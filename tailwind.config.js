/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      'noto': 'Noto Sans Mono',
      'amantic': 'Amatic SC',
    },
    extend: {
      colors: {
        crema: '#FFFACD',
      },
    },
  },
  plugins: [],
}