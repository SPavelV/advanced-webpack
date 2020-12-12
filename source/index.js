// import "@babel/polyfill"; // ставить импорт первым, минус - собираются все полифилы

// import { update } from "lodash-es";
// import * as _ from "lodash-es";
// console.log(_.update);

import component from "./simple-components/dom";
// import "./simple-components/javascript";
import "./react-components";
import "./theme/main.css";

// import moment from "moment";
// const now = moment.now();
// moment.locale("en");

let element = component();
document.body.appendChild(element);

// TODO: hot reloading на React
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код

if (module.hot) {
  module.hot.accept("./simple-components/dom", function () {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}

// ! ENV variables
// 1. Api (ссылка к API - дев или прод)
// 2. условия (дев или прод)
// 3. фичи в разработке (feature flags)

// console.log("➡ RELEASE: ", RELEASE);
// console.log("➡ TWO: ", TWO);
// console.log("➡ THREE: ", THREE);
// console.log("➡ FOUR: ", FOUR);
// console.log("➡ TRUE_SIMPLE: ", TRUE_SIMPLE);
// console.log("➡ TRUE_STRINGIFIED: ", TRUE_STRINGIFIED);

// console.log("__ENV__ ", __ENV__);
// console.log("__DEV__ ", __DEV__);
// console.log("__STAGE__ ", __STAGE__);
// console.log("__PROD__ ", __PROD__);

// if (__DEV__) {
//   console.log("➡ dev");
// }

// if (__PROD__) {
//   console.log("➡ prod");
// }

// if (process.env.NODE_ENV === "development") {
//   console.log("➡ development");
// }

// if (RELEASE === "2.1") {
//   // код нашей фичи
// }
