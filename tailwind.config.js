module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      lobster: ['"Lobster"'],
    },
    boxShadow:{
      "custom-light": "0px 0px 10px #313131",
      "custom-dark": "-5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        green: "#00f260",
        dark: {
          DEFAULT: "#010101", 
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"]
    },
  },
  plugins: [],
};
