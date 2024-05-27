/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#ffffff',
        'secondary': '#9ca3af',
        'green': '#10b981',
        'red': '#ef4444'
      },

      backgroundColor: {
        'primary': '#18181d',
        'secondary': '#141318',
        'tertiary': '#222126'
      },
    },
  },
  plugins: [],
}
