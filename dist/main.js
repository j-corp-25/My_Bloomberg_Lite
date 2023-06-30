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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_fetch_stock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/fetch_stock_data */ \"./src/scripts/fetch_stock_data.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  const button = document.getElementById(\"fetchStock\");\n  button.addEventListener(\"click\", () => {\n    new _scripts_fetch_stock_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"](main);\n  });\n});\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   console.log(\"Hello world!!!\")\n//   console.log(getData)\n\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ2lCO0FBRXhERSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSUwsd0RBQU8sQ0FBQ0ksSUFBSSxDQUFDO0VBRWpCLE1BQU1FLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBRXBEQyxNQUFNLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3JDLElBQUlGLGlFQUFjLENBQUNHLElBQUksQ0FBQztFQUMxQixDQUFDLENBQUM7QUFHTixDQUFDLENBQUM7O0FBT0Y7QUFDQTtBQUNBOztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfYmxvb21iZXJnLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCJcbmltcG9ydCBGZXRjaFN0b2NrRGF0YSBmcm9tIFwiLi9zY3JpcHRzL2ZldGNoX3N0b2NrX2RhdGFcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgICBuZXcgRXhhbXBsZShtYWluKVxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZXRjaFN0b2NrXCIpO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBuZXcgRmV0Y2hTdG9ja0RhdGEobWFpbik7XG4gICAgfSk7XG5cblxufSlcblxuXG5cblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhISFcIilcbi8vICAgY29uc29sZS5sb2coZ2V0RGF0YSlcblxuXG5cbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJGZXRjaFN0b2NrRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUM3QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBRXREO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzFDO0FBR0o7QUFJQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215X2Jsb29tYmVyZy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBTElWRSEhITwvaDE+XCI7XG4gICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG4gICAgfVxuXG4gICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/fetch_stock_data.js":
/*!*****************************************!*\
  !*** ./src/scripts/fetch_stock_data.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass FetchStockData {\n  constructor(ele) {\n    this.ele = ele;\n    // this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    // this.handleClick = this.handleClick.bind(this);\n\n    this.ele.addEventListener(\"click\", this.handleClick);\n    this.getStockData();\n  }\n  async getStockData() {\n    const url = \"https://apistocks.p.rapidapi.com/daily?symbol=AAPL&dateStart=2023-06-01&dateEnd=2023-06-29\";\n    const options = {\n      method: \"GET\",\n      headers: {\n        \"X-RapidAPI-Key\": \"be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0\",\n        \"X-RapidAPI-Host\": \"apistocks.p.rapidapi.com\"\n      }\n    };\n    try {\n      const response = await fetch(url, options);\n      const result = await response.json();\n      const ticker = this.getTicker(result);\n      const closingPrices = this.getClosingPrices(result);\n      const dates = this.getDates(result);\n      const organizedData = this.organizedData(dates, closingPrices);\n      console.log(\"Ticker:\", ticker);\n      console.log(\"Closing Prices:\", closingPrices);\n      console.log(\"Dates:\", dates);\n      console.log(\"Organized Data:\", organizedData);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n  getTicker(response) {\n    return response.Metadata.Symbol;\n  }\n  getClosingPrices(response) {\n    return response.Results.map(result => result.Close);\n  }\n  getDates(response) {\n    return response.Results.map(result => result.Date);\n  }\n  organizedData(dates, closingPrices) {\n    console.log(\"Dates:\", dates);\n    console.log(\"Closing Prices:\", closingPrices);\n    return dates.map((date, index) => {\n      return {\n        Date: new Date(date),\n        Close: closingPrices[index]\n      };\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchStockData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9zdG9ja19kYXRhLmpzIiwibWFwcGluZ3MiOiI7QUFFQSxNQUFNQSxjQUFjLENBQUM7RUFDakJDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNiLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2Q7SUFDQTs7SUFFQSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0lBRXBELElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFLdkI7RUFJQSxNQUFNQSxZQUFZQSxDQUFBLEVBQUc7SUFDakIsTUFBTUMsR0FBRyxHQUNQLDRGQUE0RjtJQUM5RixNQUFNQyxPQUFPLEdBQUc7TUFDZEMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCLEVBQUUsb0RBQW9EO1FBQ3RFLGlCQUFpQixFQUFFO01BQ3JCO0lBQ0YsQ0FBQztJQUVELElBQUk7TUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxHQUFHLEVBQUVDLE9BQU8sQ0FBQztNQUMxQyxNQUFNSyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUdwQyxNQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUNILE1BQU0sQ0FBQztNQUdyQyxNQUFNSSxhQUFhLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0wsTUFBTSxDQUFDO01BR25ELE1BQU1NLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1AsTUFBTSxDQUFDO01BRW5DLE1BQU1RLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0YsS0FBSyxFQUFFRixhQUFhLENBQUM7TUFFOURLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRVIsTUFBTSxDQUFDO01BQzlCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRU4sYUFBYSxDQUFDO01BQzdDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVKLEtBQUssQ0FBQztNQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVGLGFBQWEsQ0FBQztJQUNqRCxDQUFDLENBQUMsT0FBT0csS0FBSyxFQUFFO01BQ2RGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDdEI7RUFDRjtFQUVBUixTQUFTQSxDQUFDTCxRQUFRLEVBQUU7SUFDbEIsT0FBT0EsUUFBUSxDQUFDYyxRQUFRLENBQUNDLE1BQU07RUFDakM7RUFFQVIsZ0JBQWdCQSxDQUFDUCxRQUFRLEVBQUU7SUFDekIsT0FBT0EsUUFBUSxDQUFDZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUVmLE1BQU0sSUFBS0EsTUFBTSxDQUFDZ0IsS0FBSyxDQUFDO0VBQ3ZEO0VBRUFULFFBQVFBLENBQUNULFFBQVEsRUFBRTtJQUNqQixPQUFPQSxRQUFRLENBQUNnQixPQUFPLENBQUNDLEdBQUcsQ0FBRWYsTUFBTSxJQUFLQSxNQUFNLENBQUNpQixJQUFJLENBQUM7RUFDdEQ7RUFHQVQsYUFBYUEsQ0FBQ0YsS0FBSyxFQUFFRixhQUFhLEVBQUU7SUFDbENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRUosS0FBSyxDQUFDO0lBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRU4sYUFBYSxDQUFDO0lBRTdDLE9BQU9FLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNHLElBQUksRUFBRUMsS0FBSyxLQUFLO01BQ2hDLE9BQU87UUFDTEYsSUFBSSxFQUFFLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ3BCRixLQUFLLEVBQUVaLGFBQWEsQ0FBQ2UsS0FBSztNQUM1QixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFLTjtBQUdBLCtEQUFlL0IsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL215X2Jsb29tYmVyZy8uL3NyYy9zY3JpcHRzL2ZldGNoX3N0b2NrX2RhdGEuanM/YzU0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgRmV0Y2hTdG9ja0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgLy8gdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBTElWRSEhITwvaDE+XCI7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXG4gICAgICAgIHRoaXMuZ2V0U3RvY2tEYXRhKCk7XG5cblxuXG5cbiAgICB9XG5cblxuXG4gICAgYXN5bmMgZ2V0U3RvY2tEYXRhKCkge1xuICAgICAgICBjb25zdCB1cmwgPVxuICAgICAgICAgIFwiaHR0cHM6Ly9hcGlzdG9ja3MucC5yYXBpZGFwaS5jb20vZGFpbHk/c3ltYm9sPUFBUEwmZGF0ZVN0YXJ0PTIwMjMtMDYtMDEmZGF0ZUVuZD0yMDIzLTA2LTI5XCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCJiZTJjNWNmOWQybXNoZGQyOTc5ZTk0MzE0NTk4cDE5YzNkYmpzbmVlMzAwMDIyNGJkMFwiLFxuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJhcGlzdG9ja3MucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXG4gICAgICAgICAgY29uc3QgdGlja2VyID0gdGhpcy5nZXRUaWNrZXIocmVzdWx0KTtcblxuXG4gICAgICAgICAgY29uc3QgY2xvc2luZ1ByaWNlcyA9IHRoaXMuZ2V0Q2xvc2luZ1ByaWNlcyhyZXN1bHQpO1xuXG5cbiAgICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZ2V0RGF0ZXMocmVzdWx0KTtcblxuICAgICAgICAgIGNvbnN0IG9yZ2FuaXplZERhdGEgPSB0aGlzLm9yZ2FuaXplZERhdGEoZGF0ZXMsIGNsb3NpbmdQcmljZXMpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUaWNrZXI6XCIsIHRpY2tlcik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDbG9zaW5nIFByaWNlczpcIiwgY2xvc2luZ1ByaWNlcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEYXRlczpcIiwgZGF0ZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcmdhbml6ZWQgRGF0YTpcIiwgb3JnYW5pemVkRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZ2V0VGlja2VyKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5NZXRhZGF0YS5TeW1ib2w7XG4gICAgICB9XG5cbiAgICAgIGdldENsb3NpbmdQcmljZXMocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLlJlc3VsdHMubWFwKChyZXN1bHQpID0+IHJlc3VsdC5DbG9zZSk7XG4gICAgICB9XG5cbiAgICAgIGdldERhdGVzKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5SZXN1bHRzLm1hcCgocmVzdWx0KSA9PiByZXN1bHQuRGF0ZSk7XG4gICAgICB9XG5cblxuICAgICAgb3JnYW5pemVkRGF0YShkYXRlcywgY2xvc2luZ1ByaWNlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGVzOlwiLCBkYXRlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBQcmljZXM6XCIsIGNsb3NpbmdQcmljZXMpO1xuXG4gICAgICAgIHJldHVybiBkYXRlcy5tYXAoKGRhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIERhdGU6IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICAgICAgQ2xvc2U6IGNsb3NpbmdQcmljZXNbaW5kZXhdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hTdG9ja0RhdGE7XG4iXSwibmFtZXMiOlsiRmV0Y2hTdG9ja0RhdGEiLCJjb25zdHJ1Y3RvciIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImdldFN0b2NrRGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJ0aWNrZXIiLCJnZXRUaWNrZXIiLCJjbG9zaW5nUHJpY2VzIiwiZ2V0Q2xvc2luZ1ByaWNlcyIsImRhdGVzIiwiZ2V0RGF0ZXMiLCJvcmdhbml6ZWREYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiTWV0YWRhdGEiLCJTeW1ib2wiLCJSZXN1bHRzIiwibWFwIiwiQ2xvc2UiLCJEYXRlIiwiZGF0ZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fetch_stock_data.js\n");

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