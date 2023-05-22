/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        germania: ['Germania One', 'cursive'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans serif'],
      },
    },
  },
  plugins: [],
};
