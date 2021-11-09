const { resolve } = require("./utils");

module.exports = {
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("./src"),
      "@packages": resolve("./packages"),
    },
  },
  loaderOptions: {
    scss: {
      prependData: `@import "~@/assets/scss/output.scss";`,
    },
  },
};
