/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#ffffff',
        'secondary': '#718096',
        'green': '#2f855a',
        'red': '#ef4444'

      },

      backgroundColor: {
        'primary': '#18181d',
        'secondary': '#141318'
      },
    },
  },
  plugins: [],
}
