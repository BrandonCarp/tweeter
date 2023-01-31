/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
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
        primaryDark: "#171717",
        secondaryDark: "#262626",
        primaryGray: "#525252",
        secondaryGray: "#737373",
        purpleGray: "#40375c",
        primaryLight: "#ede9fe",
        secondaryLight: "#cbd5e1",
        primaryPurple: "#8b5cf6",
        secondaryPurple: "#5b21b6",
        borderLight: "#cbd5e1",
        transparentBg: "rgba(0, 0, 0, .7)",
        linkedBlue: "#0072b1",
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
