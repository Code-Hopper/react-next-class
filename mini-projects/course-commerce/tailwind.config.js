/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(13, 94, 166, 1)",
        secondary: "rgba(234, 166, 77, 1)",
        dull: "rgba(199, 138, 59, 1)",
        darkerSecondary: "rgba(161, 109, 40, 1)",
        light: "rgba(245, 245, 245, 1)",
        dark: "rgba(25, 25, 25, 1)"
      }
    },
  },
  plugins: [],
}

