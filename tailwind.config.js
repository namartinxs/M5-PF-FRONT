/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // ajuste conforme sua estrutura
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': {
          DEFAULT: '#2f4e41',
          50: '#e5f0e9',
          100: '#c7dccd',
          200: '#9dbba9',
          300: '#739887',
          400: '#4e6f66',
          500: '#2f4e41',   // base
          600: '#274237',
          700: '#1f352c',
          800: '#172a22',
          900: '#0f1c16',
        },
        'grayish-green': {
          DEFAULT: '#557a6a',
          50: '#e6f0ec',
          100: '#c8dbd4',
          200: '#9fc2b9',
          300: '#75a99f',
          400: '#527f7c',
          500: '#557a6a',   // base
          600: '#47675a',
          700: '#394a45',
          800: '#2c3936',
          900: '#1a221f',
        },
        'light-green': {
          DEFAULT: '#b6ebc3',
          50: '#f2fcf5',
          100: '#dcf7de',
          200: '#b8ebba',
          300: '#8fdb8d',
          400: '#6cc05d',
          500: '#4daf32',
          600: '#439029',
          700: '#357220',
          800: '#275617',
          900: '#18390d',
        },
        background: '#ffffff',
        foreground: '#171717',
      },
    },
  },
  plugins: [],
}
