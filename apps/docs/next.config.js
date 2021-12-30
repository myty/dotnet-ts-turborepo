const withTM = require("next-transpile-modules")(["@monorepo/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
