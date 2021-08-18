const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
};
