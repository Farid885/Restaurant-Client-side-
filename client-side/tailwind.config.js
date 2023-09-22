/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#EBDFD4",
        secondaryText: "#E4D1BF",
        fixedNav: "#091b1e",
      },
      fontFamily:{
        "bigText":['Freight'],
        "miniText":['Lato'],
        "logo":['Kashima'],
      },
      fontSize: {
        xl: "1.25rem",
        "8/5xl": "7rem",
        "9/5xl": "10rem",
      },
    },
  },
  plugins: [],
};

