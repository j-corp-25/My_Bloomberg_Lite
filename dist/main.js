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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   console.log(\"Hello world!!!\")\n//   console.log(getData)\n\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7QUFFdkNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSix3REFBTyxDQUFDRyxJQUFJLENBQUM7QUFHckIsQ0FBQyxDQUFDOztBQU9GO0FBQ0E7QUFDQTs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL215X2Jsb29tYmVyZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICAgbmV3IEV4YW1wbGUobWFpbilcblxuXG59KVxuXG5cblxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCEhIVwiKVxuLy8gICBjb25zb2xlLmxvZyhnZXREYXRhKVxuXG5cblxuLy8gfSk7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n    this.getData();\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n  async getData() {\n    const url = \"https://apistocks.p.rapidapi.com/daily?symbol=AAPL&dateStart=2023-06-01&dateEnd=2023-06-29\";\n    const options = {\n      method: \"GET\",\n      headers: {\n        \"X-RapidAPI-Key\": \"be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0\",\n        \"X-RapidAPI-Host\": \"apistocks.p.rapidapi.com\"\n      }\n    };\n    try {\n      const response = await fetch(url, options);\n      const result = await response.json();\n\n      // Extracting ticker, closing prices, and dates\n      const ticker = this.getTicker(result);\n      const closingPrices = this.getClosingPrices(result);\n      const dates = this.getDates(result);\n      console.log(\"Ticker:\", ticker);\n      console.log(\"Closing Prices:\", closingPrices);\n      console.log(\"Dates:\", dates);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n  getTicker(response) {\n    return response.Metadata.Symbol;\n  }\n  getClosingPrices(response) {\n    return response.Results.map(result => result.Close);\n  }\n  getDates(response) {\n    return response.Results.map(result => result.Date);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUM3QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0lBRXBELElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUM7RUFDaEI7RUFFQUgsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRixHQUFHLENBQUNNLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDMUM7RUFFQSxNQUFNRixPQUFPQSxDQUFBLEVBQUc7SUFDZCxNQUFNRyxHQUFHLEdBQ1AsNEZBQTRGO0lBQzlGLE1BQU1DLE9BQU8sR0FBRztNQUNkQyxNQUFNLEVBQUUsS0FBSztNQUNiQyxPQUFPLEVBQUU7UUFDUCxnQkFBZ0IsRUFBRSxvREFBb0Q7UUFDdEUsaUJBQWlCLEVBQUU7TUFDckI7SUFDRixDQUFDO0lBRUQsSUFBSTtNQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdBQUcsRUFBRUMsT0FBTyxDQUFDO01BQzFDLE1BQU1LLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDOztNQUVwQztNQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDO01BQ3JDLE1BQU1JLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDTCxNQUFNLENBQUM7TUFDbkQsTUFBTU0sS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDUCxNQUFNLENBQUM7TUFFbkNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRVAsTUFBTSxDQUFDO01BQzlCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUwsYUFBYSxDQUFDO01BQzdDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVILEtBQUssQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFO01BQ2RGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDdEI7RUFDRjtFQUVBUCxTQUFTQSxDQUFDTCxRQUFRLEVBQUU7SUFDbEIsT0FBT0EsUUFBUSxDQUFDYSxRQUFRLENBQUNDLE1BQU07RUFDakM7RUFFQVAsZ0JBQWdCQSxDQUFDUCxRQUFRLEVBQUU7SUFDekIsT0FBT0EsUUFBUSxDQUFDZSxPQUFPLENBQUNDLEdBQUcsQ0FBRWQsTUFBTSxJQUFLQSxNQUFNLENBQUNlLEtBQUssQ0FBQztFQUN2RDtFQUVBUixRQUFRQSxDQUFDVCxRQUFRLEVBQUU7SUFDakIsT0FBT0EsUUFBUSxDQUFDZSxPQUFPLENBQUNDLEdBQUcsQ0FBRWQsTUFBTSxJQUFLQSxNQUFNLENBQUNnQixJQUFJLENBQUM7RUFDdEQ7QUFDSjtBQUlBLCtEQUFlaEMsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215X2Jsb29tYmVyZy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBTElWRSEhITwvaDE+XCI7XG4gICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREYXRhKCkge1xuICAgICAgY29uc3QgdXJsID1cbiAgICAgICAgXCJodHRwczovL2FwaXN0b2Nrcy5wLnJhcGlkYXBpLmNvbS9kYWlseT9zeW1ib2w9QUFQTCZkYXRlU3RhcnQ9MjAyMy0wNi0wMSZkYXRlRW5kPTIwMjMtMDYtMjlcIjtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCJiZTJjNWNmOWQybXNoZGQyOTc5ZTk0MzE0NTk4cDE5YzNkYmpzbmVlMzAwMDIyNGJkMFwiLFxuICAgICAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiYXBpc3RvY2tzLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBFeHRyYWN0aW5nIHRpY2tlciwgY2xvc2luZyBwcmljZXMsIGFuZCBkYXRlc1xuICAgICAgICBjb25zdCB0aWNrZXIgPSB0aGlzLmdldFRpY2tlcihyZXN1bHQpO1xuICAgICAgICBjb25zdCBjbG9zaW5nUHJpY2VzID0gdGhpcy5nZXRDbG9zaW5nUHJpY2VzKHJlc3VsdCk7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5nZXREYXRlcyhyZXN1bHQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlja2VyOlwiLCB0aWNrZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsb3NpbmcgUHJpY2VzOlwiLCBjbG9zaW5nUHJpY2VzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRlczpcIiwgZGF0ZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuTWV0YWRhdGEuU3ltYm9sO1xuICAgIH1cblxuICAgIGdldENsb3NpbmdQcmljZXMocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5SZXN1bHRzLm1hcCgocmVzdWx0KSA9PiByZXN1bHQuQ2xvc2UpO1xuICAgIH1cblxuICAgIGdldERhdGVzKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuUmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gcmVzdWx0LkRhdGUpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldERhdGEiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJ0aWNrZXIiLCJnZXRUaWNrZXIiLCJjbG9zaW5nUHJpY2VzIiwiZ2V0Q2xvc2luZ1ByaWNlcyIsImRhdGVzIiwiZ2V0RGF0ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJNZXRhZGF0YSIsIlN5bWJvbCIsIlJlc3VsdHMiLCJtYXAiLCJDbG9zZSIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

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