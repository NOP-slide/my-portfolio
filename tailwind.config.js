/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "rgb(0, 24, 42)",
          pink: "rgb(168, 24, 129)",
        },
      },
    },
  },
  plugins: [],
}
