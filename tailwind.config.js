/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0056B3',
        secondary: '#0175D8',
        gray: {
          light: '#F3F4F6',
          DEFAULT: '#D1D5DB',
          dark: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],

  
};





