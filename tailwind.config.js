/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "800px",
      lg: "1224px",
      xl: "1580px",
      "2xl": "1736px",
    },

    fontSize: {
      sm: "1rem",
      base: "1.35rem",
      lg: "1.6rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4rem",
    },
    extend: {
      colors: {
        darkPurple: "#764abc",
        softWhite: "#edebe0",
        softCream: "#e2c8a1",
        purple: "#8E7CC3",
        green: "#38761D",
        yellow: "#F3CD00",
        darkBlue: "#00234b",
        redPink: "#e73b73",
        logoPurple: "#393f57",
        sweetOrange: "#f59e7c",
        whiteOrange: "#eddad1",
        bodyBackground: "#f6f8fa",
      },
      boxShadow: {
        regular:
          " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
        medium:
          "box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;",
        large:
          "box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
      },
    },
  },
  plugins: [],
};
