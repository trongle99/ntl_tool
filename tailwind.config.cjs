/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar': '#474849',
        'sidebar-hover': '#5a5a5c',
      },
    },
  },
  plugins: [],
}