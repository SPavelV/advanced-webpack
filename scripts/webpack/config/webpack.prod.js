// Core
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

// Config
const getCommonConfig = require("./webpack.common");

const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    plugins: [new CleanWebpackPlugin(cleanOptions)],
  });
};
