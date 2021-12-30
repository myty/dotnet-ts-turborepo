const tailwindConfig = require("@shelter/config/tailwind.config");

module.exports = {
  ...tailwindConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shelter/ui/{atoms,molecules,organisms}/**/*.{js,ts,jsx,tsx}",
  ],
};
