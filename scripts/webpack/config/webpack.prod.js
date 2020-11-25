// Core
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";

// Config
import getCommonConfig from "./webpack.common";

const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    plugins: [new CleanWebpackPlugin(cleanOptions)],
  });
};
