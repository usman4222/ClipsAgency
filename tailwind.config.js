/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        polysans: ["Polysans median", "sans-serif"],
      },
      colors: {
        customColor: "#080617",
      },
    },
  },
  plugins: [],
};
