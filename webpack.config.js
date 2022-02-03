const { resolve } = require("path");

module.exports = {
  mode: "development",

  entry: "./index.js",

  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.[name].[contenthash].js",
  },
};
