/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#313642",
        secondary: "#404553",
        pineGlade: "#B1D299",
        bittersweet: "#FF7361",
        anakiwa: "#AFD5FF",
        frenchGray: "#C2C3C9",
      }
    },
  },
  plugins: [],
};
