/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        serif: ['Markazi Text', 'serif'],
      },
      colors: {
        secondary: 'rgba(73, 94, 87, 1)',
        lemon: 'rgba(244, 206, 20, 1)',
        highlighted: 'rgba(251, 218, 187, 1)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
