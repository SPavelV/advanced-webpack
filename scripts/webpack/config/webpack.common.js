// Core

import merge from "webpack-merge";

// Constants
const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("../constants");

// Modules
import * as modules from "../modules";

export default () => {
  const { NODE_ENV } = process.env;
  const IS_DEV = NODE_ENV === "development";

  return merge(
    {
      mode: "none",
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: "js/bundle.[hash:5].js",
        chunkFilename: "js/bundle.[chunkhash:5].js",

        // filename: IS_DEV
        //   ? "js/[name].[hash].[id]"
        //   : "js/[name].[contenthash:5].[id].js",
        // chunkFilename: IS_DEV
        //   ? "js/[name].[hash].[id]"
        //   : "js/[name].[chunkhash:5].[id].js",

        publicPath: "/",
      },
    },
    modules.defineEnvVariables(),
    modules.loadJavaScript(),
    modules.loadSass(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts(),
    modules.setupHtml(),
    modules.filterMomentLocales()
  );
};
