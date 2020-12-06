/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import component from "./simple-components/dom";
 // let element = component();
// document.body.appendChild(element);
// if (module.hot) {
//   module.hot.accept("./simple-components/dom", function () {
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }
// TODO: hot reloading на React
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код
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

console.log("__ENV__ ", "production");
console.log("__DEV__ ", false);
console.log("__STAGE__ ", false);
console.log("__PROD__ ", true);

if (false) {}

if (true) {
  console.log("➡ prod");
} // if (process.env.NODE_ENV === "development") {
//   console.log("➡ development");
// }
// if (RELEASE === "2.1") {
//   // код нашей фичи
// }
// import "./simple-components/javascript";
// import "./react-components";

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;