/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '420px',
      'sm': '640px',
      'md': '1024px',
      'xl': '1280px',
      '2xl': '1024px'
    }
  },
  plugins: [],
}
