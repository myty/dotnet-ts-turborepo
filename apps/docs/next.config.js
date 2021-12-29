const withTM = require("next-transpile-modules")(["@shelter/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
