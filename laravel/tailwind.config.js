const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.js",
    "./resources/views/**/*.blade.php",
  ],

  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        yellow: {
          DEFAULT: "#F9C200",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
