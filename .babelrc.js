module.exports = (api) => {
  const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV

  /** Рекомендуется использовать именно эту форму кеширования для лучшей консистентности.
   * https://babeljs.io/docs/en/config-files#apicache
   */
  // api.cach.using(() => env === "development");

  api.cache.never();

  const plugins = ["@babel/proposal-class-properties"];

  if (env === "development") {
    plugins.push("react-hot-loader/babel");
  }

  return {
    presets: [
      "@babel/react",
      [
        "@babel/env",
        {
          debug: true,
          spec: true, // specification, делает код более медленным, но более надежным
          loose: false, // делает код более быстрым, но отходит от стандарта
          modules: false, // webpack хорошо работает только с ES2015 модулями
        },
      ],
    ],
    plugins,
    // dev (react-hot-loader нужен)
    // или
    // prod (react-hot-loader не нужен  )
  };
};
