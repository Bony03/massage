const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

module.exports = {
  mode,
  target,
  devtool,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "index.[contenthash].js",
    clean: true,
  },
  plugins,
  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
};
