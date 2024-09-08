/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      robotoRegular: ['Roboto_400Regular'],
      robotoBold: ['Roboto_700Bold']
    },
    fontSize: {
      'text-base': '14px',
      xs: '12px',
      sm: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '24px'
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#e1e1e6',
        200: '#c4c4cc',
        300: '#7c7c8a',
        400: '#323238',
        500: '#29292e',
        600: '#202024',
        700: '#121214'
      },
      green: {
        500: '#00b37e',
        700: '#00875f'
      }
    },
    extend: {}
  },
  plugins: []
}
