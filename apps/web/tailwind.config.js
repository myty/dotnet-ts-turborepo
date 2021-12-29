const tailwindConfig = require("config/tailwind.config");

module.exports = {
  ...tailwindConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui/atoms/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui/molecules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui/organisms/**/*.{js,ts,jsx,tsx}",
  ],
};
