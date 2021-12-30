const withTM = require("next-transpile-modules")([
  "@monorepo/data",
  "@monorepo/ui",
]);

module.exports = withTM({
  reactStrictMode: true,
});
