/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0b34",
        secondary: "#068c7c",
        black: "#000000",
        white: "#ffffff",
        grey: "#c6c6c6",
      },
    },
  },
  plugins: [],
};