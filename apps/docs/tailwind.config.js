const tailwindConfig = require("@monorepo/config/tailwind.config");

module.exports = {
  ...tailwindConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@monorepo/ui/{atoms,molecules,organisms}/**/*.{js,ts,jsx,tsx}",
  ],
};
