// 1. webpack
// 2. конфигурация
// 3. создать компайлер webpack
// 4. запуск 🚀

// Core
import webpack from "webpack";
import chalk from "chalk"; // Раскрашивает консоль

// Config
import getProdConfig from "./config/webpack.prod";

const compiler = webpack(getProdConfig());

// compiler.hooks.beforeRun.tap({ name: "start" }, () => {
//   console.log("➡ compilation started");
// });

// compiler.hooks.done.tap({ name: "done" }, () => {
//   console.log("➡ compilation completed");
// });

compiler.run((error, stats) => {
  if (error) {
    // ошибка конфигурации
    console.log(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false,
  });

  console.log(chalk.greenBright("✔ Build completed"));
  console.log(info);

  if (stats.hasErrors()) {
    // Ошибка во время компиляции (битый импорт, ошибка синтаксиса и т.д.)
    console.log(chalk.redBright("➡ Error!"));
    // console.error(info);
  }

  if (stats.hasWarnings()) {
    // Ворнинг во время компиляции
    console.log(chalk.yellowBright("➡ Warning!"));
    // console.warn(info);
  }
});
