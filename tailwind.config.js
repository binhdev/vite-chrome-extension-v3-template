/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './popup.html',
    './src/**/*.{js,ts,jsx,tsx,css}', // Thêm .css để quét file CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};