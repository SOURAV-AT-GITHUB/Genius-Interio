/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ffc945",
        secondary:"#D7BB90",
        darkBrown: "#b77231"
      }
    },
  },
  plugins: [],
}