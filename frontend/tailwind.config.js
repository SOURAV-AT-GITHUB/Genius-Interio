/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8D7C68",
        secondary:"#F0DEC9",
      }
    },
  },
  plugins: [],
}