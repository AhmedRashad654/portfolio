/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryGreen: "#22c55e",
        white: "#FFFFFF",
        backgroundBlack: "#0B0B0B",
        backgroundProject: "#444444",
        bgOverlay: "#13121233",
      },
      screens: {
        smm: { min: "100px", max: "768px" },
        xsmlm: { min: "100px", max: "380px" },
        xsmlmFont:{min:"100px",max:"500px"},
        smmm: { min: "500px", max: "767px" },
        smmmm: { min: "1000px", max: "2000px" },
      },
    },
  },
  plugins: [],
};
