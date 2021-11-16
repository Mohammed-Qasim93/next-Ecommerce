const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        100: "100",
        110: "110",
      },
      colors: {
        primaryButtonBg: "#82A3AC",
        primaryButtonBgHover: "#A9C7C5",
        secondaryButtonBg: "#D1ACA5",
        secondaryButtonBgHover: "#E2CFC9",
        bodyColor: "#f5f5f5",
        textHover: "#053F5C",
      },
      spacing: {
        100: "30rem",
        101: "35rem",
        102: "40rem",
        103: "45rem",
        104: "50rem",
        105: "55rem",
        106: "60rem",
        107: "65rem",
        108: "70rem",
        109: "75rem",
        110: "80rem",
        111: "85rem",
        112: "90rem",
        113: "95rem",
        114: "100rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
