/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3faf6',
          100: '#e6f6ee',
          200: '#c3ecd7',
          300: '#8fddb7',
          400: '#5dcb97',
          500: '#3bb273',
          600: '#2e8c59',
          700: '#256b45',
          800: '#1b4b31',
          900: '#13341f',
        },
        accent: {
          50: '#fff8eb',
          100: '#feect7',
          200: '#fcd58a',
          300: '#fbbd4d',
          400: '#faa31b',
          500: '#f4850d',
          600: '#d86208',
          700: '#b34609',
          800: '#92360e',
          900: '#782d0f',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
