/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchData */ \"./src/scripts/fetchData.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    console.log(\"The DOM has loaded\");\n    (0,_scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nconsole.log(\"Hello World\");\n\n\n//# sourceURL=webpack://my_bloomberg/./src/index.js?");

/***/ }),

/***/ "./src/scripts/fetchData.js":
/*!**********************************!*\
  !*** ./src/scripts/fetchData.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nasync function fetchData() {\n    const rapidApiKey = \"da67ae36b6mshfed40a4fe258a74p18afdajsn4916c4fb8e2a\";\n    const url = 'https://twelve-data1.p.rapidapi.com/time_series?&start_date=2000-01-01&end_date=2023-06-30&symbol=aapl&interval=15min&format=json';\n    const options = {\n\tmethod: 'GET',\n\theaders: {\n\t\t'X-RapidAPI-Key': \"da67ae36b6mshfed40a4fe258a74p18afdajsn4916c4fb8e2a\",\n\t\t'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'\n\t}\n};\n\n    try {\n        const response = await fetch(url, options);\n        const result = await response.json();\n        console.log(result);\n    } catch (error) {\n        console.error(error);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/fetchData.js?");

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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