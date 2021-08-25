module.exports = {
  purge: [
    './pages/**/*.tsx', './components/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      
      'lobster': ['"Lobster"', ],
     },
    extend:{
      colors: {
      green:"#00f260"
      }
    },
 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
