const { resolve } = require("path");

module.exports = {
  mode: "development",

  entry: "./index.ts",

  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.[name].[contenthash].js",
  },
};
