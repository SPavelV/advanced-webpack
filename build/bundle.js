/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _react_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_components__WEBPACK_IMPORTED_MODULE_0__);
// import component from "./simple-components/dom";
// import "./theme/main.css";
// const element = component();
// document.body.appendChild(element);
// TODO: hot reloading на React
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код
// import "./simple-components/javascript";
;

/***/ }),
/* 1 */
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: G:\\learn\\webpack-advanced\\source\\react-components\\index.js: Unexpected token (21:78)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m  render() {\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33msection\u001b[39m className\u001b[33m=\u001b[39m{\u001b[33mStyles\u001b[39m\u001b[33m.\u001b[39mtoggler} style\u001b[33m=\u001b[39m{{\u001b[32m\"--mainColor: rebeccapurple\"\u001b[39m}}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleClick}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m          {\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39misToggleOn \u001b[33m?\u001b[39m \u001b[32m\"Включено!!\"\u001b[39m \u001b[33m:\u001b[39m \u001b[32m\"Выключено\"\u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:790:17)\n    at Object.raiseWithData (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:783:17)\n    at Object.raise (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:777:17)\n    at Object.unexpected (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:9095:16)\n    at Object.parseObjPropValue (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:11081:21)\n    at Object.parsePropertyDefinition (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:11004:10)\n    at Object.parseObjectLike (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:10894:25)\n    at Object.parseExprAtom (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:10445:23)\n    at Object.parseExprAtom (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:4759:20)\n    at Object.parseExprSubscripts (G:\\learn\\webpack-advanced\\node_modules\\@babel\\parser\\lib\\index.js:10094:23)");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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