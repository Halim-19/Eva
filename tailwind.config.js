/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'russian-violet': '#0d0630',
        'prussian-blue': '#18314f',
        'yinmn-blue': '#384e77',
        'cambridge-blue': '#8bbeb2',
        'mindaro': '#e6f9af',
      },
    }
  },
  plugins: [],
}

