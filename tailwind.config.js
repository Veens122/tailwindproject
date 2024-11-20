/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,css,js}", "./src/**/*.{html,css,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FF69B4",
      },
      fontFamily: {
        fancy: ["Monsieur La Doulaise", "serif"],
        cont: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
