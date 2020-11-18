// Core
const { merge } = require("webpack-merge");

// Config
const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "none",
    devtool: false, // TODO: настроить soruce map
    plugins: [],
  });
};
