/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
      },
      width: {
        100: '25rem',
      },
    },
  },
  plugins: [],
};
