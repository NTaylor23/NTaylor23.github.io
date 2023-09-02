/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      marginLeft: ["first"],
      textShadow: {
        default: "0 0 3px rgba(0, 0, 0, 0.5)",
        glow: "0 0 2px #2DD4BF, 1px 0 1px #2DD4BF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
