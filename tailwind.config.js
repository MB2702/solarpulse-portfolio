/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#66D9D1',
        'brand-teal-dark': '#4DB5AE',
        'teal-brand': '#66D9D1',
        'teal-brand-dark': '#4DB5AE',
        'teal-brand-light': '#99E5DF',
        'teal-tint': '#F0FFFE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
