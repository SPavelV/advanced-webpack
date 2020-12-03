// Core
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";

// Config
import getCommonConfig from "./webpack.common";

// Modules
import * as modules from "../modules";

const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "production",
      devtool: false,
      plugins: [new CleanWebpackPlugin(cleanOptions)],
    },
    modules.loadProdCss(),
    modules.optimizeImages()
  );
};
