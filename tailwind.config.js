/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        moraba: ["moraba"],
        morabaBold: ["morabaBold"],
        poppin: ["poppin"],
        poppinBold: ["poppinBold"],
        iran: ["iran"],
      },
    },
  },
  plugins: [],
};
