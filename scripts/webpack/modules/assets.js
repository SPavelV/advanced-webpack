// Core
import HtmlWebpackPlugin from "html-webpack-plugin";

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/template.html",
      title: "Изучаем вебпак! 🚀",
      favicon: "./static/favicon.ico",
    }),
  ],
});

export const loadImages = () => ({
  module: {
    rules: [
      // loadImages
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `images/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
});
