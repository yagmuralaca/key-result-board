/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.16) 0px 0px 4px',
        'nav': 'rgba(0, 0, 0, 0.50) 0px 0px 4px, rgba(0, 0, 0, 0.23) 0px 3px 4px',
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
