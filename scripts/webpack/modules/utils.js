import { HotModuleReplacementPlugin } from "webpack";
import WebpackBar from "webpackbar";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// Constants
import { PROJECT_ROOT, BUILD_DIRECTORY } from "../constants";

export const connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
});

export const connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

export const connectHMR = () => ({
  plugins: [new HotModuleReplacementPlugin()],
});

export const cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
});

export const connectBundleAnylizer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});
