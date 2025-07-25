/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // Establecemos 'Tinos' como la fuente principal para las categorías 'sans' y 'serif'.
        // Esto asegura que 'Tinos' se aplique por defecto a la mayoría del texto.
        sans: ['Tinos', 'serif'], // 'serif' como fallback general si Tinos no carga
        serif: ['Tinos', 'serif'], // 'serif' como fallback general si Tinos no carga

        // Si quisieras un nombre específico para Tinos, podrías usar:
        // tinos: ['Tinos', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

