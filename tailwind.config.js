module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "4px",
        sm: "2px",
        lg: "8px",
        xl: "16px",
        "2xl": "20px",
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
