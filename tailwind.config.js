/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
