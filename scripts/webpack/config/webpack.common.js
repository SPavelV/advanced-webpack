// Core
import merge from "webpack-merge";

// Constants
const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("../constants");

// Modules
import * as modules from "../modules";

export default () => {
  return merge(
    {
      mode: "none",
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: "bundle.js",
      },
    },
    modules.loadJavaScript(),
    modules.loadCSS(),
    modules.loadImages(),
    modules.setupHtml()
  );
};
