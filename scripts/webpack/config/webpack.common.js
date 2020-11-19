// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = require("postcss-preset-env");

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
          test: /\.js$/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          // TODO: прокачать загрузку стилей
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    // цепочка плагинов postcss
                    env({
                      stage: 0, // default: stage 2
                      features: {
                        "custom-media-queries": {
                          importFrom: [
                            {
                              customMedia: {
                                "--phonePortrait": "(width <= 414px)",
                                "--phoneLandscape":
                                  "(width => 415px) and (width <= 667px)",
                                "--tabletPortrait":
                                  "(width => 668px) and (width <= 768px)",
                                "--tabletLandscape":
                                  "(width => 769px) and (width <= 1024px)",
                                "--desktopS":
                                  "(width => 1025px) and (width <= 1366px)",
                                "--desktopM":
                                  "(width => 1367px) and (width <= 1680px)",
                                "--desktopL":
                                  "(width => 1681px) and (width <= 1920px)",
                                "--desktopXL": "(width >= 1921px)",
                              },
                            },
                          ],
                        },
                      },
                    }),
                  ],
                },
              },
            },
          ],
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
