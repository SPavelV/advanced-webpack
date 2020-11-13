/**
 * Типы конфигов вебпак:
 * Object
 * Function
 * Promise
 */

module.exports = (env) => {
  console.log("env ", env);

  return {
    mode: "none",
    devtool: false,
  };
};

// const delay = (timeout = 1000) =>
//   new Promise((resolve) => setTimeout(resolve, timeout));

// module.exports = async () => {
//   //pause 1000ms
//   console.log("1");
//   await delay();
//   console.log("2");

//   return {
//     mode: "none",
//     devtool: false,
//   };
// };

// Promise config:
// module.exports = Promise.resolve({
//   mode: "none",
//   devtool: false,
// });
