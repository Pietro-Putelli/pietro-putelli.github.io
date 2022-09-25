/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-light": ["Montserrat", "light"],
        "montserrat-regular": ["Montserrat", "regular"],
      },
      colors: {
        main: "#030610",
        second: "#0B173E",
        accent: "#001B76",
      },
      letterSpacing: {
        widest: ".40rem",
      },
    },
  },
  plugins: [],
};
