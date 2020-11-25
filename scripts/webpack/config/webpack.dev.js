// Core
import { HotModuleReplacementPlugin } from "webpack";
import { merge } from "webpack-merge";

// Config
import getCommonConfig from "./webpack.common";

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development",
    devtool: "eval-cheap-module-source-map", // TODO: настроить soruce map
    entry: ["webpack-hot-middleware/client?reload=true&quiet=true"],
    plugins: [new HotModuleReplacementPlugin()],
  });
};
