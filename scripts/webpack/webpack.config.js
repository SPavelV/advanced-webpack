// Core
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const {
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
} = require("./constants");

const cleanOptions = {
  verbose: true,
};

/**
 * Типы конфигов вебпак:
 * Object
 * Function
 * Promise
 */

module.exports = (env) => {
  return {
    entry: [
      "webpack-hot-middleware/client?reload=true&quiet=true",
      SOURCE_DIRECTORY,
    ],
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    mode: "none",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      // Каждый плагин это конструктор
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем вебпак! 🚀",
        favicon: "./static/favicon.ico",
      }),
      new CleanWebpackPlugin(cleanOptions),
      new HotModuleReplacementPlugin(),
    ],
  };
};
