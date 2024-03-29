/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '760px',
      'xl': '1280px'
    },
    extend: {},
  },
  plugins: [],
};
