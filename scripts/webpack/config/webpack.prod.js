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
      mode: "none",
      devtool: false,
    },
    modules.cleanDirectories(),
    modules.connectBuildProgressIndicator(),
    modules.loadProdCss(),
    modules.optimizeBuild(),
    // modules.optimizeImages(),
    modules.connectBundleAnylizer()
  );
};
