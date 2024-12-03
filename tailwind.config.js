/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'custom': "url('/src/assets/icons/kunai-icon.png') 16 16, auto",
      },
      screens: {
        'sm': '480px',
      },
    },
  },
  plugins: [],
}