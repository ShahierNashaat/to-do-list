/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: calc(100vh - 50px);\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\nbody input[type=\\\"text\\\"] {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: rgb(71, 71, 71);\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 90%;\\r\\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.container > * {\\r\\n  border-bottom: 1px solid rgb(165, 165, 165);\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: gray;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.container .add-area input {\\r\\n  border: 0;\\r\\n  font-size: 20px;\\r\\n  width: 96%;\\r\\n}\\r\\n\\r\\n.container ul li i {\\r\\n  cursor: pointer;\\r\\n  color: rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.container .add-area i {\\r\\n  cursor: pointer;\\r\\n  color: rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task input[type=\\\"checkbox\\\"] {\\r\\n  appearance: none;\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  border: 1px solid #d5d5d5;\\r\\n  border-radius: 3px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.container ul {\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.container ul li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 20px 20px;\\r\\n  border-bottom: 1px solid rgb(165, 165, 165);\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n  flex-grow: 9;\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task input[type=\\\"checkbox\\\"]::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 20%;\\r\\n  left: 15%;\\r\\n  width: 50%;\\r\\n  height: 25%;\\r\\n  border-bottom: 4px solid white;\\r\\n  border-left: 4px solid white;\\r\\n  border-radius: 20%;\\r\\n  transform: rotate(-45deg);\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task input[type=\\\"checkbox\\\"]:checked {\\r\\n  background-color: rgb(19, 150, 19);\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task input[type=\\\"checkbox\\\"]:checked::after {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task input[type=\\\"text\\\"] {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.container ul li .checkbox-task p {\\r\\n  color: rgb(71, 71, 71);\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.container button {\\r\\n  align-self: center;\\r\\n  margin: 20px 0;\\r\\n  font-size: 20px;\\r\\n  border: 0;\\r\\n  background-color: white;\\r\\n  cursor: pointer;\\r\\n  color: rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.container button:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-start-point/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-start-point/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-start-point/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-and-remove-task.js":
/*!************************************!*\
  !*** ./src/add-and-remove-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage-controller */ \"./src/localStorage-controller.js\");\n\n\nconst updateListIndexes = () => {\n  const toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n  toDoTasks.sort((task1, task2) => task1.index - task2.index);\n\n  for (let i = 0; i < toDoTasks.length; i += 1) {\n    toDoTasks[i].index = i + 1;\n  }\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n};\n\nconst addTask = (taskDescription) => {\n  if (taskDescription === '') {\n    return;\n  }\n\n  const toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n\n  const task = {\n    description: taskDescription,\n    completed: false,\n    index: toDoTasks.length + 1,\n  };\n\n  toDoTasks.push(task);\n\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n\n  updateListIndexes();\n};\n\nconst editTask = (taskDescription, index) => {\n  if (taskDescription === '') {\n    return;\n  }\n\n  const toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n\n  toDoTasks[index].description = taskDescription;\n\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n};\n\nconst deleteTask = (index) => {\n  let toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n\n  toDoTasks = toDoTasks.filter((task) => task.index !== toDoTasks[index].index);\n\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n  updateListIndexes();\n};\n\nconst clearCompletedTasks = () => {\n  let toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n\n  toDoTasks = toDoTasks.filter((task) => !task.completed);\n\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n  updateListIndexes();\n};\n\nconst renderEditAndDeleteArea = (e) => {\n  const taskDescription = e.currentTarget.parentNode.querySelector('.checkbox-task p');\n  const taskDescriptionInput = e.currentTarget.parentNode.querySelector('.checkbox-task input[type=\"text\"]');\n  const editIcon = e.currentTarget.parentNode.querySelector('.fa-ellipsis-v');\n  const deleteIcon = e.currentTarget.parentNode.querySelector('.fa-trash-alt');\n\n  taskDescription.classList.add('display-none');\n  taskDescriptionInput.classList.remove('display-none');\n  taskDescriptionInput.focus();\n  editIcon.classList.add('display-none');\n  deleteIcon.classList.remove('display-none');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addTask, editTask, deleteTask, clearCompletedTasks, renderEditAndDeleteArea,\n});\n\n//# sourceURL=webpack://webpack-start-point/./src/add-and-remove-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage-controller.js */ \"./src/localStorage-controller.js\");\n/* harmony import */ var _task_status_change_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_status_change.js */ \"./src/task_status_change.js\");\n/* harmony import */ var _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-and-remove-task */ \"./src/add-and-remove-task.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\nlet toDoTasks = [];\n\nconst renderList = () => {\n  if (_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks') == null) {\n    _localStorage_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n  }\n\n  toDoTasks = _localStorage_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n\n  toDoTasks.sort((task1, task2) => task1.index - task2.index);\n\n  const toDoListUL = document.querySelector('ul');\n  toDoListUL.innerHTML = '';\n\n  for (let i = 0; i < toDoTasks.length; i += 1) {\n    const li = document.createElement('li');\n    toDoListUL.appendChild(li);\n\n    const checkboxAndTaskDiv = document.createElement('div');\n    checkboxAndTaskDiv.classList.add('checkbox-task');\n    li.appendChild(checkboxAndTaskDiv);\n\n    const checkBox = document.createElement('input');\n    checkBox.setAttribute('type', 'checkbox');\n    checkBox.checked = toDoTasks[i].completed;\n    checkBox.addEventListener('change', _task_status_change_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    checkboxAndTaskDiv.appendChild(checkBox);\n\n    const taskParagraph = document.createElement('p');\n    taskParagraph.textContent = toDoTasks[i].description;\n    checkboxAndTaskDiv.appendChild(taskParagraph);\n    if (toDoTasks[i].completed) {\n      taskParagraph.classList.add('completed');\n    }\n\n    const editTaskDescriptionInput = document.createElement('input');\n    editTaskDescriptionInput.value = toDoTasks[i].description;\n    editTaskDescriptionInput.classList.add('display-none');\n    editTaskDescriptionInput.setAttribute('type', 'text');\n    editTaskDescriptionInput.addEventListener('blur', (e) => {\n      _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editTask(e.currentTarget.value, i);\n    });\n    checkboxAndTaskDiv.appendChild(editTaskDescriptionInput);\n\n    const moreIcon = document.createElement('i');\n    moreIcon.classList.add('fas');\n    moreIcon.classList.add('fa-ellipsis-v');\n    moreIcon.addEventListener('click', (e) => {\n      _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderEditAndDeleteArea(e);\n    });\n    li.appendChild(moreIcon);\n\n    const deleteIcon = document.createElement('i');\n    deleteIcon.classList.add('fas');\n    deleteIcon.classList.add('fa-trash-alt');\n    deleteIcon.classList.add('display-none');\n    deleteIcon.addEventListener('click', () => {\n      _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTask(i);\n      renderList();\n    });\n    li.appendChild(deleteIcon);\n  }\n};\n\nrenderList();\n\nconst addButton = document.querySelector('.fa-plus');\naddButton.addEventListener('click', () => {\n  _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(addButton.previousElementSibling.value);\n  addButton.previousElementSibling.value = \"\";\n  renderList();\n});\n\nconst clearCompletedTasksButton = document.querySelector('.container button');\nclearCompletedTasksButton.addEventListener('click', () => {\n  _add_and_remove_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearCompletedTasks();\n  renderList();\n});\n\ndocument.addEventListener('click', (e) => {\n  if (e.target == null) {\n    return;\n  }\n  if (e.target !== e.target.parentNode.querySelector('.checkbox-task input[type=\"text\"]') && e.target !== e.target.parentNode.querySelector('.fa-trash-alt') && e.target !== e.target.parentNode.querySelector('.fa-ellipsis-v') && e.target !== e.target.parentNode.querySelector('input[type=\"checkbox\"]')) {\n    renderList();\n  }\n});\n\n//# sourceURL=webpack://webpack-start-point/./src/index.js?");

/***/ }),

/***/ "./src/localStorage-controller.js":
/*!****************************************!*\
  !*** ./src/localStorage-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTheLocalStorage = (dataName, data) => {\n  const strdata = JSON.stringify(data);\n  localStorage.setItem(dataName, strdata);\n};\n\nconst getDataFromLocalStorage = (dataName) => {\n  if (localStorage.getItem(dataName) == null) {\n    return null;\n  }\n  return JSON.parse(localStorage.getItem(dataName));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createTheLocalStorage, getDataFromLocalStorage });\n\n//# sourceURL=webpack://webpack-start-point/./src/localStorage-controller.js?");

/***/ }),

/***/ "./src/task_status_change.js":
/*!***********************************!*\
  !*** ./src/task_status_change.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskStatusChange)\n/* harmony export */ });\n/* harmony import */ var _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage-controller */ \"./src/localStorage-controller.js\");\n\n\nfunction taskStatusChange(e) {\n  const toDoTasks = _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage('toDoTasks');\n  const taskDescription = e.currentTarget.nextElementSibling;\n  const toDoTask = toDoTasks.filter((task) => task.description === taskDescription.textContent)[0];\n  const taskindex = toDoTasks.indexOf(toDoTask);\n\n  toDoTasks[taskindex].completed = e.target.checked;\n\n  if (e.target.checked) {\n    taskDescription.classList.add('completed');\n  } else {\n    taskDescription.classList.remove('completed');\n  }\n\n  _localStorage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTheLocalStorage('toDoTasks', toDoTasks);\n}\n\n//# sourceURL=webpack://webpack-start-point/./src/task_status_change.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;