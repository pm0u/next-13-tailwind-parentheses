/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/\\(layout-2\\)/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      red: '#FF0000',
      blue: '#0000FF',
      green: '#00FF00'
    }
  },
  prefix: 'eta-',
}