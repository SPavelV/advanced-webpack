// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("../constants");

module.exports = () => {
  return {
    mode: "none",
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          // TODO: прокачать загрузку стилей
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем вебпак! 🚀",
        favicon: "./static/favicon.ico",
      }),
    ],
  };
};
