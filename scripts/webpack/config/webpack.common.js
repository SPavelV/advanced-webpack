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
      // entry: [SOURCE_DIRECTORY, "@babel/polyfill"], // то же, что и импорт в index.js
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: IS_DEV
          ? "js/bundle.[contenthash].chunk.js"
          : "js/bundle.[chunkhash].bundle.js", // entry point bundle name
        chunkFilename: "js/bundle.[chunkhash].chunk.js", // chunk name
        publicPath: "/",
        hashDigestLength: 5,
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
