/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "className",
  theme: {
    screens: {
      xms: "320px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      tall: { raw: "(min-height: 830px)" },
      short: { raw: "(min-height: 400px)" },
    },
    fontFamily: {
      alkalami: ["alkalami"],
    },
    extend: {
      colors: {
        primaryDark: "#111114",
        secondaryDark: "#131316",
        secondaryOrange: "#262833",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        baselg: "1.3rem",
        md: "1.75rem",
        l: "2rem",
        xl: "2.5rem",
        xxl: "3rem",
        xxxl: "3.5rem",
        xlxl: "4rem",
      },
    },
  },
  plugins: [],
};
