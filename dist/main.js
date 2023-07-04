/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchData */ \"./src/scripts/fetchData.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"The DOM has loaded\");\n  (0,_scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\nconsole.log(\"Hello World\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7QUFFNUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7RUFDakNKLDhEQUFTLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ibG9vbWJlcmcvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vc2NyaXB0cy9mZXRjaERhdGEnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBET00gaGFzIGxvYWRlZFwiKTtcbiAgICBmZXRjaERhdGEoKTtcbn0pO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetchData.js":
/*!**********************************!*\
  !*** ./src/scripts/fetchData.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nasync function fetchData() {\n  const url = 'https://twelve-data1.p.rapidapi.com/time_series?&start_date=2000-01-01&end_date=2023-06-30&symbol=aapl&interval=15min&format=json';\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,\n      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'\n    }\n  };\n  try {\n    const response = await fetch(url, options);\n    const result = await response.json();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaERhdGEuanMiLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWVBLFNBQVNBLENBQUEsRUFBRztFQUN2QixNQUFNQyxHQUFHLEdBQUcsbUlBQW1JO0VBQy9JLE1BQU1DLE9BQU8sR0FBRztJQUNuQkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsT0FBTyxFQUFFO01BQ1IsZ0JBQWdCLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZO01BQzFDLGlCQUFpQixFQUFFO0lBQ3BCO0VBQ0QsQ0FBQztFQUVHLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDUixHQUFHLEVBQUVDLE9BQU8sQ0FBQztJQUMxQyxNQUFNUSxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztFQUN2QixDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDeEI7QUFDSjtBQUNBLCtEQUFlZCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfYmxvb21iZXJnLy4vc3JjL3NjcmlwdHMvZmV0Y2hEYXRhLmpzPzdhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3R3ZWx2ZS1kYXRhMS5wLnJhcGlkYXBpLmNvbS90aW1lX3Nlcmllcz8mc3RhcnRfZGF0ZT0yMDAwLTAxLTAxJmVuZF9kYXRlPTIwMjMtMDYtMzAmc3ltYm9sPWFhcGwmaW50ZXJ2YWw9MTVtaW4mZm9ybWF0PWpzb24nO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG5cdG1ldGhvZDogJ0dFVCcsXG5cdGhlYWRlcnM6IHtcblx0XHQnWC1SYXBpZEFQSS1LZXknOiBwcm9jZXNzLmVudi5SQVBJREFQSV9LRVksXG5cdFx0J1gtUmFwaWRBUEktSG9zdCc6ICd0d2VsdmUtZGF0YTEucC5yYXBpZGFwaS5jb20nXG5cdH1cbn07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7XG4iXSwibmFtZXMiOlsiZmV0Y2hEYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiUkFQSURBUElfS0VZIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/fetchData.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ibG9vbWJlcmcvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;