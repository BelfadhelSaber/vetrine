/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF7F4',
          100: '#FCEFE9',
          200: '#F8DEC9',
          300: '#F2C3A3',
          400: '#DE8B67',
          500: '#C65D3A', // Teinte principale du restaurant
          600: '#B04E2D',
          700: '#943F23',
          800: '#79331C',
          900: '#632A17',
        },
        creme: {
          50: '#FFFCF7',
          100: '#FFF6E8', // Fond crème doux
          200: '#FCEFD8',
          300: '#F7E2BD',
          400: '#EDCE94',
        },
        brun: {
          50: '#F6F4F3',
          100: '#E7E4E2',
          200: '#D0CAC6',
          700: '#4F3F36',
          800: '#3D3029',
          900: '#30251F', // Brun foncé profond pour textes et contrastes
          950: '#211814',
        },
        olive: {
          50: '#F6F8F4',
          100: '#E9EDE4',
          500: '#657153', // Vert olive signature
          600: '#535D43',
          700: '#414A34',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
