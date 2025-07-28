/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#00ff00',
        accent: '#4a5568',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #1a202c 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
};