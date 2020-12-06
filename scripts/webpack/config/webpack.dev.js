// Core
import { merge } from "webpack-merge";

// Config
import getCommonConfig from "./webpack.common";

// Modules
import * as modules from "../modules";

export default () => {
  return merge(
    getCommonConfig(),
    {
      mode: "development",
      devtool: "eval-cheap-module-source-map", // TODO: настроить soruce map
      entry: ["webpack-hot-middleware/client?reload=true&quiet=true"],
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    },
    modules.connectHMR(),
    modules.connectFriendlyErrors(),
    modules.loadDevCss()
  );
};
