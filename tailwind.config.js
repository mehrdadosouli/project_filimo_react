/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
