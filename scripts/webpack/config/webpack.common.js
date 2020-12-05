// Core
import { DefinePlugin } from "webpack";
import merge from "webpack-merge";

// Constants
const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("../constants");

// Modules
import * as modules from "../modules";

export default () => {
  const { NODE_ENV } = process.env;
  return merge(
    {
      mode: "none",
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: "js/bundle.js",
        publicPath: "/",
      },
      plugins: [
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __STAGE__: NODE_ENV === "development",
          __PROD__: NODE_ENV === "production",
          // RELEASE: "2.0",
          // TWO: "1+1",
          // THREE: JSON.stringify(3),
          // FOUR: 4,
          // TRUE_STRINGIFIED: JSON.stringify(true),
          // TRUE_SIMPLE: true,
          // HELLO_SIMPLE: "hello",
          // HELLO_STRINGIFIED: JSON.stringify("hello"),
        }),
      ],
    },
    modules.loadJavaScript(),
    modules.loadSass(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts(),
    modules.setupHtml()
  );
};
