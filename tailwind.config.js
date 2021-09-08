module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryButtonBg: "#82A3AC",
        primaryButtonBgHover: "#A9C7C5",
        secondaryButtonBg: "#D1ACA5",
        secondaryButtonBgHover: "#E2CFC9",
        bodyColor: "#f5f5f5",
        textHover: "#053F5C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
