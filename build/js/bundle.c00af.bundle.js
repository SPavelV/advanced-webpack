(self["webpackChunkwebpack_advanced"] = self["webpackChunkwebpack_advanced"] || []).push([[1],{

/***/ 0:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(75);
;// CONCATENATED MODULE: ./source/simple-components/dom.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const dom = ((text = "Hello!!!🎉🎉🎉") => {
  const element = document.createElement("div");
  element.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          element.innerHTML = "Динамическая загрузка⏲...";
          _context.next = 3;
          return __webpack_require__.e(/* import() | lazyLoadedText */ 0).then(__webpack_require__.bind(__webpack_require__, 87));

        case 3:
          result = _context.sent;
          _context.next = 6;
          return new Promise(resolve => setTimeout(() => {
            resolve;
          }, 2000));

        case 6:
          element.innerHTML = result.default;

        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  element.innerHTML = text;
  return element;
});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(76);
// EXTERNAL MODULE: ./node_modules/react-hot-loader/root.js
var root = __webpack_require__(86);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(79);
;// CONCATENATED MODULE: ./source/react-components/postcss.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const postcss = ({"toggler":"source-react-components-postcss__toggler--1nKK4"});
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(83);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./source/react-components/style.scss
var style = __webpack_require__(84);
;// CONCATENATED MODULE: ./source/react-components/style.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style.default, options);



/* harmony default export */ const react_components_style = (style.default.locals || {});
;// CONCATENATED MODULE: ./source/theme/images/kitty.jpg
/* harmony default export */ const kitty = (__webpack_require__.p + "images/kitty.0cd10abd7c785f87b23a6789376e4bf2.jpg");
;// CONCATENATED MODULE: ./source/theme/images/react.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react.createElement("g", {
  fill: "#61DAFB"
}, /*#__PURE__*/react.createElement("path", {
  d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"
}), /*#__PURE__*/react.createElement("circle", {
  cx: 420.9,
  cy: 296.5,
  r: 45.7
}), /*#__PURE__*/react.createElement("path", {
  d: "M520.5 78.1z"
}));

function SvgReact(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 841.9 595.3"
  }, props), _ref);
}

/* harmony default export */ const images_react = (__webpack_require__.p + "images/react.3adc4d153dba4c791b00838e53dc0410.svg");

;// CONCATENATED MODULE: ./source/react-components/Button/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"button":"source-react-components-Button-styles__button--2DqeE"});
;// CONCATENATED MODULE: ./source/react-components/Button/index.js
// Core
 // Styles


class Button extends react.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          onClick = _this$props.onClick;
    return /*#__PURE__*/react.createElement("button", {
      onClick: onClick,
      className: styles.button
    }, children);
  }

}
;// CONCATENATED MODULE: ./source/react-components/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Styles








class Toggle extends react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        count: ++state.count
      }));
    });

    this.state = {
      isToggleOn: true,
      count: 34
    };
  }

  render() {
    return /*#__PURE__*/react.createElement("section", {
      className: postcss.toggler,
      style: {
        "--mainColor": "orange",
        "--headingFontSize": `${this.state.count}px`
      }
    }, /*#__PURE__*/react.createElement(SvgReact, {
      width: 50
    }), /*#__PURE__*/react.createElement("img", {
      src: images_react
    }), /*#__PURE__*/react.createElement("img", {
      src: kitty,
      alt: ""
    }), /*#__PURE__*/react.createElement("h1", null, "Test!:"), /*#__PURE__*/react.createElement(Button, {
      onClick: this.handleClick
    }, this.state.isToggleOn ? "Включено!!!" : "Выключено"));
  }

}

const WithHot = (0,root.hot)(Toggle);
react_dom.render( /*#__PURE__*/react.createElement(WithHot, null), document.getElementById("app"));
;// CONCATENATED MODULE: ./source/index.js
// import "@babel/polyfill"; // ставить импорт первым, минус - собираются все полифилы
// import { update } from "lodash-es";
// import * as _ from "lodash-es";
// console.log(_.update);
 // import "./simple-components/javascript";


 // import moment from "moment";
// const now = moment.now();
// moment.locale("en");

let source_element = dom();
document.body.appendChild(source_element); // TODO: hot reloading на React
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код

if (false) {} // ! ENV variables
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

/***/ }),

/***/ 84:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #fff3c5;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
0,[[0,2,3]]]);