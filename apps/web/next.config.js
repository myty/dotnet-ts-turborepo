const withTM = require("next-transpile-modules")([
  "@shelter/data",
  "@shelter/ui",
]);

module.exports = withTM({
  reactStrictMode: true,
});
