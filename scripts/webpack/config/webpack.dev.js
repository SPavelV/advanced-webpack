// Core
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");

// Config
const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development",
    devtool: false, // TODO: настроить soruce map
    entry: ["webpack-hot-middleware/client?reload=true&quiet=true"],
    plugins: [new HotModuleReplacementPlugin()],
  });
};