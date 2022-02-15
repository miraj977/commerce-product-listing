module.exports = {
  mode: 'jit',
  purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}', './stroies/*.{js,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require( '@tailwindcss/aspect-ratio' ), ],
};
