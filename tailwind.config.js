/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        'primary': '#f3c614',
        'secondary': '#353535',
        'tertiary': '#6e6e6e',
      },
      backgroundImage:{
        'main-img': "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      },
      height:{
        '80': "20rem",
        '100': "25rem"
      }
    },
  },
  plugins: [],
}

