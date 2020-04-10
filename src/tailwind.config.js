const _ = require("lodash");
module.exports = {
  theme: {
    fontFamily: {
      sans:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      lacquer: "Lacquer, serif"
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      ..._.reduce(
        new Array(7),
        (accumulator, current, index) => {
          accumulator[`${index + 5}xl`] = `${index + 3}rem`;
          return accumulator;
        },
        {}
      )
    },
    extend: {
      borderRadius: {
        50: "50%"
      },
      colors: {
        tomo: "#C55E5E"
      }
    }
  },
  variants: {},
  plugins: []
};
