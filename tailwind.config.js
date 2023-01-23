/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '01': '680px',
        '02': '440px',
        '03': '500px',
        '04': '280%',
      },
      backgroundImage: {
        pick: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .5)), url('https://img.freepik.com/premium-photo/truck-with-container-logistic-running-road-background-natural-river-3d-illustrator_37416-605.jpg?w=2000')",
        second: "linear-gradient(to right ,rgba(33, 40, 33, .2), rgba(62, 78, 62, .2), rgba(62, 78, 62, .2)), url('https://digwallpapers.com/wallpapers/full/1/5/e/122172-2048x1536-semi-truck-pictures-background-desktop-hd.jpg')",
        third: "linear-gradient(to right ,rgba(33, 40, 33, 1), rgba(62, 78, 62, .9), rgba(62, 78, 62, .5)), url('https://wallpaperaccess.com/full/2106311.jpg')",
        wine: "linear-gradient(to right ,rgba(33, 40, 33, .6), rgba(62, 78, 62, .3), rgba(62, 78, 62, .5)), url('https://st3.depositphotos.com/3720851/36312/i/450/depositphotos_363124050-stock-photo-warm-burgundy-background-dark-red.jpg')",

      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['DM Sans', 'sans-serif'],
      'primary':['ABeeZee', 'sans-serif'],
    },
  },
  plugins: [],
})
