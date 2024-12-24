/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Add any themes you want to use
  },
  plugins: [require("daisyui")],
}
