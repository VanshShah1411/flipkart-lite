const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'

  variants: {
    extend: {},
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins"],
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
      padding: ["hover"],
      // keyframes: {
      //   wiggle: {
      //     "0%": { right: "0", opacity: "0" },
      //     "90%": { right: "5px", opacity: "1" },
      //     "100%": { right: "0", opacity: "0" },
      //   },
      // },
    },
    // Make animation stay for more longer
    // animation: {
    //   wiggle: "wiggle 0.8s ease-in-out",
    // },
  },
};
