const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");
const licensePath = path.resolve(__dirname, "../src/js/license.txt");
const licenseText = fs.readFileSync(licensePath, "utf8");

module.exports = {
  entry: [
    path.resolve(__dirname, "../src/js/rellax.js"),
    path.resolve(__dirname, "../src/js/observer.js"),
    path.resolve(__dirname, "../src/js/swiper.js"),
  ],
  resolve: {
    alias: {
      rellax: path.resolve(__dirname, "node_modules/rellax/rellax.js"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../assets/js"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /license\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/img"),
          to: path.resolve(__dirname, "../assets/img"),
        },
      ],
    }),
    new webpack.BannerPlugin({
      banner: licenseText,
      entryOnly: true,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
