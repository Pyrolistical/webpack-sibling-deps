const { resolve } = require("path");

module.exports = {
  mode: "development",

  entry: "./index.ts",

  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
