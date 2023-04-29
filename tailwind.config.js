/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'HevHelvetica': ['Helvetica Neue', 'sans-serif'],
        'HelveticaNeueBd': ["HelveticaNeueBd.ttf"]
      },
      keyframes: {
        slideUp: {
          "0%": { height: "100%" },



          "100%": { height: "0%" },
        },
        fadeIn: {
          from: { opacity: "0", display: "none" },
          to: { opacity: "1", display: "block" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out   ",
        fadeIn: "fadeIn 0.3s ease-in",
        fadeOut: "fadeOut 0.3s ease-in",
      },


    },
  },
  plugins: [],
}