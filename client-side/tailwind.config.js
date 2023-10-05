/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#EBDFD4",
        secondaryText: "#E4D1BF",
        fixedNav: "#091b1e",
        about:"#DDD6CC",
        dark:"#031013",
      },
      fontFamily: {
        bigText: ["Freight"],
        miniText: ["Lato"],
        logo: ["Kashima"],
      },
      fontSize: {
        xl: "1.25rem",
        "8/5xl": "7rem",
        "9/5xl": "10rem",
        "10xl": "11rem",
        "11xl": "14rem",
      },
    },
  },
  plugins: [],
});
