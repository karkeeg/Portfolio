/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        violetPrimary: "#7e22ce",
        violetSecondary: "#a855f7",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "violet-glow": "linear-gradient(135deg, #7e22ce 0%, #7e22ce80 100%)",

        "violet-gradient": "linear-gradient(90deg, #7e22ce, #a855f7)",

        "hero-pattern": "url('/src/assets/image.png')",
      },
    },
  },
  plugins: [],
};
