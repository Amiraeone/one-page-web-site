/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // برای دارک مود دستی
  content: [
    "./*.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
      },
    },
  },
  plugins: [],
}
