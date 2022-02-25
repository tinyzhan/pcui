const { resolve, getComponentEntries } = require("./utils");
const common = require("./config.common");

module.exports = {
  productionSourceMap: false,
  outputDir: resolve("lib"),
  //  webpack配置
  configureWebpack: {
    //  入口文件
    entry: {
      index: resolve("./packages/index.js"),
      ...getComponentEntries("./packages"),
      // ...getComponentEntries("./packages/components/Client"),
      // ...getComponentEntries("./packages/components/Material"),
      // ...getComponentEntries("./packages/components/Enterprise"),
    },
    //  输出配置
    output: {
      filename: "[name]/index.js",
      libraryTarget: "umd",
      libraryExport: "default",
      library: "weiling-pc-ui",
    },
    resolve: common.resolve,
  },
  css: {
    sourceMap: false,
    // extract: {
    //   filename: "[name]/index.css",
    // },
    extract: false,
    loaderOptions: common.loaderOptions,
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  },
};
