// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");

const delay = (timeout = 1000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

/**
 * Типы конфигов вебпак:
 * Object
 * Function
 * Promise
 */

module.exports = (env) => {
  return {
    mode: "none",
    plugins: [
      // Каждый плагин это конструктор
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем вебпак! 🚀",
        favicon: "./static/favicon.ico",
      }),
    ],
  };
};
