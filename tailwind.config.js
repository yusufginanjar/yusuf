/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        color1: '#2B2968',
        color2: '#5F5BBF',
        color3: '#4B47AB',
        color4: '#E5E4F1',
        red: '#EB5353',
      },
      fontFamily: {
        'sans': ['Open-Sans','ui-sans-serif', 'system-ui',],
        }
    },
    fontWeight: {
        hairline: 100,
        semibold: 600,
        bold: 700,
        'extra-light': 100,
        extrabold: 800,
        'extra-bold': 800,
    }
  },
  plugins: [],
}
