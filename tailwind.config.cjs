module.exports = {
  purge: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: [
        '"Playfair Display"',
        ]
      }
    },
  },
  variants: {
    extend: {
      scale: ["hover"]
    },
  },
  plugins: [],
}
