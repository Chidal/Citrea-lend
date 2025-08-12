/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: '#FF6200',
        accent: '#FFFFFF',
        highlight: '#D3D3D3',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #1E1E1E, #000000)',
      },
    },
  },
  plugins: [],
};