import ImageminWebpackPlugin from "imagemin-webpack";
import TerserPlugin from "terser-webpack-plugin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import { ContextReplacementPlugin } from "webpack";

/**
 * production - оптимизация только в mode: "production"
 * development - оптимизация включена только в mode: development
 * ✔ - оптимизация включена в mode: "production" и в mode: "development"
 */
export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: "production",

    // dependency graph ➡ компиляция
    // module graph ➡ output
    // chank graph ➡ output

    // production: минификация JavaScript.
    minimize: false,
    minimizer: [new TerserPlugin()],

    // production: останавливает эмит сборки при возникновении ошибки во время компиляции.
    emitOnErrors: true,

    // ✔ Не добавляет в сборку пустые чанки - это уменьшает нагрузку на систему, что ускаряет работу.
    removeEmptyChunks: true,
    // // ✔ Объеденяет эквивалентные чанки.
    mergeDuplicateChunks: true,
    // ✔ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке()
    removeAvailableModules: true,

    // produciton: анализирует module graph и пытается найти модули, которые можно смержить
    // в один модуль
    // ? эта настройка зависит от providedExports и usedExports
    concatenateModules: true, // module concatenation, scope hoisting

    // ✔ определяет экспортированные сущности для каждого модуля.
    // эта информация помогает остальным продвинутым оптимизациям webpack
    providedExports: true,
    // production: определяет использованные экспортированные сущности для каждого модуля.
    // эта информация помогает остальным продвинутым оптимизациям webpack.
    // Пример: минификаторы и DCE(dead code elemination) могут удалять неиспользованные экспорты.
    // ? эта настройка зависит от providedExports
    usedExports: true,
    // production: собирает зависимость более эффективно, если в package.json зависимости стоит
    // ? эта настройка зависит от providedExports и usedExports
    sideEffects: true, // TODO: (TREE SHAKING)посомотреть

    // //development: вместо числовых ID дает модулям понятные имена.
    // // TODO webpack 5 add `moduleIds: "named" default for development
    // // TODO webpack 5 add `moduleIds: "size" default for production
    // // TODO webpack 5 remove optimiztion.namedModules.
    // namedModules: false,

    // // Определяет механизм генерирования Id для модуля.
    // moduleIds: false,

    //development: вместо числовых ID дает чанкам понятные имена.
    // TODO webpack 5 add `chunkIds: "named" default for development
    // TODO webpack 5 add `chunkIds: "siez" default for production
    // TODO webpack 5 remove optimiztion.namedChunks
    // namedChunks: false,
    // // Определяет механизм генерирования Id для чанка.
    // chunkIds: false,

    // initial chunk(vendors - react, react-dom)
    // async chunk (on demond)

    // Эта опция включена всегда. Конфигурируется в SplitChunksPlugin
    splitChunks: {
      // Режим разделеиния кода. По-умолчанию - async.
      chunks: "all", // initial, all
    },
  },
});

export const optimizeImages = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins: [
          imageminMozjpeg({
            progressive: true,
            quality: 60,
          }),
          imageminPngquant({
            quality: 60,
          }),
          imageminSvgo(),
        ],
      },
    }),
  ],
});

export const filterMomentLocales = () => ({
  plugins: [new ContextReplacementPlugin(/moment[/\\]locale$/, /en/)],
});
