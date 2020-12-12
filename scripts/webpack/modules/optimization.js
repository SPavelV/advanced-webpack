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
      chunks: "async", // initial, all (async + initial)
      // Минимальный размер нового чанка для отделения.
      minSize: 30000, // bytes
      // Максимальный размер нового чанка для отделения.
      // maxSize: 0,
      // Минимальное количество чанков, которые зависят от модуля
      // перед отделением этого модуля в отдельный чанк.
      minChunks: 1,
      // Максимальное количество одновременных параллельных запросов чанков для
      // асинхронного сплитинга.
      // Всегда предпочитаются чанки большего размера.
      maxAsyncRequests: 5,
      // Максимальное количество одновременных параллельных запросов чанков на один entrypoint.
      // Всегда предпочитаются чанки большего размера.
      maxInitialRequests: 3,
      // Символ-разделитель имени сплит-чанка (напр. vendors~main.js).
      automaticNameDelimiter: "~",
      // Определяет имя нового чанка
      // name: true,
      // По-умолчанию cacheGroups наследует от остальных опций splitChunks.
      // Уникальные для cacheGroups только test, priority и reuseExistingChunk.
      // Ключ каждой хэш-группы определяет ее имя.
      // По-умолчанию webpack устанвливает две кеш-группы:
      cacheGroups: {
        // Дефолтная кеш-группа. Выносит все зависимости из node_modules в чанк vendors.
        vendors: {
          // Перезаписанная опция
          chunks: "initial",
          // Выбирает модули, внесенную в данную кеш-группу. Если не указывать будут выбраны все модули.
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          // Дефолтная кеш-группа. Выносит любой модуль-зависимость в отдельный чанк default
          // при условии дублирования модуля-зависимости хотя бы в двух чанках.
          minChunks: 2,
          // Приоритет кеш-группы. Если модуль попадает сразу в несколько кеш-групп, то выбирается
          // кеш группа с более высоким priority, или которая составляет чанк большего размера.
          // У дефолтных кеш-групп отрицательный приоритет,
          // поэтому кастомные кеш-группы приоритетнее (их priority 0 по-умолчанию).
          priority: -20,
          // Если чанк содержит уже существующий отдельный чанк,
          // то используется этот же существующий отдельный чанк вместо создания нового.
          reuseExistingChunk: true,
        },
      },
    },
    // Выносит webpack runtime каждого entrypoint в отдельный чанк. false по-умолчанию.
    runtimeChunk: true,
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
