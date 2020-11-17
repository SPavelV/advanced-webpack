// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const {
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
} = require("./constatnts");

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
    entry: SOURCE_DIRECTORY,
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
    ],
  };
};
