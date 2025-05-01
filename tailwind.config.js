/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'safely-green': '#2D9D5C',
        'safely-green-light': '#E8F5E9',
        'safely-dark': '#0A341E',
        'safely-gray': '#6F767E',
        'safely-light': '#F4F4F4',
        'safely-white': '#FFFFFF',
        'safely-text': '#7FA191',
      },
    },
  },
  plugins: [],
} 