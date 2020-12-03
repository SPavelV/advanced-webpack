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
        filename: "js/bundle.js",
        publicPath: "/",
      },
    },
    modules.loadJavaScript(),
    modules.loadSass(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts(),
    modules.setupHtml()
  );
};
