/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchData */ \"./src/scripts/fetchData.js\");\n/* harmony import */ var _scripts_createChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/createChart */ \"./src/scripts/createChart.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    let currentTicker = '';\n    const tickerElement = document.getElementById('chart-container-ticker');\n    const SNP500 = [\"MMM\",\"ROKU\",\"GOOGL\",\"META\",\"KO\",\"GE\"]\n    //Selects all the buttons under id=date-intervals\n    const intervalButtons = document.querySelectorAll('#date-intervals button');\n\n    async function updateDataForTicker(ticker,interval = '1month') {\n        currentTicker = ticker;\n        tickerElement.textContent = currentTicker.toUpperCase();\n        try {\n            const data = await (0,_scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ticker,interval);\n            (0,_scripts_createChart__WEBPACK_IMPORTED_MODULE_1__.generateNewChart)(data);\n        }catch (error) {\n            console.error(`Failed to get data for ticker ${ticker}:`, error)\n        }\n\n    }\n    //Picks a random ticker from the list above\n    function randomTicker() {\n        return SNP500[(Math.floor(Math.random() * SNP500.length))];\n    }\n\n    intervalButtons.forEach(button => {\n        //Adds an event listener to each button and also gets their value when they are clicked\n        button.addEventListener('click', function () {\n            const interval = this.getAttribute('value');\n            updateDataForTicker(currentTicker, interval);\n        });\n    });\n    //Creates chart based on the ticker that generates randomly which is when the page loads\n    updateDataForTicker(randomTicker(),);\n\n    //Instead of cliick this adds a submit listener to the ticker form when searching for stock\n    document.querySelector('.ticker-form').addEventListener('submit', function (e) {\n        //Prevents from the form actualy being submitted\n        e.preventDefault();\n        const ticker = document.querySelector('#ticker-input').value;\n        updateDataForTicker(ticker,'1month');\n    });\n    function openTab(evt, tabName) {\n        var i, tabcontent, tablinks;\n        tabcontent = document.getElementsByClassName(\"tabcontent\");\n        tablinks = document.getElementsByClassName(\"tablinks\");\n\n        for (i = 0; i < tabcontent.length; i++) {\n            tabcontent[i].style.display = \"none\";\n        }\n        for (i = 0; i < tablinks.length; i++) {\n            tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\n        }\n        document.getElementById(tabName).style.display = \"block\";\n        evt.currentTarget.className += \" active\";\n    }\n\n    var tabButtons = document.getElementsByClassName('tablinks');\n    for (var i = 0; i < tabButtons.length; i++) {\n        tabButtons[i].addEventListener('click', function (event) {\n            openTab(event, event.target.innerHTML);\n        });\n    }\n});\n\n\n//# sourceURL=webpack://my_bloomberg/./src/index.js?");

/***/ }),

/***/ "./src/scripts/createChart.js":
/*!************************************!*\
  !*** ./src/scripts/createChart.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChart: function() { return /* binding */ createChart; },\n/* harmony export */   generateNewChart: function() { return /* binding */ generateNewChart; }\n/* harmony export */ });\n//credit to d3.js developers for the template below which I used to create and populate my chart\n//https://d3js.org/getting-started#try-d3-online\nfunction createChart(data,selector){\n    //Define the chart date format\n    //Format will look like \"2016-01-01\" on the x-axis\n    let dateFormat = d3.timeFormat(\"%Y-%M-%D\");\n\n    //Define the chart size and margins\n    //This will be the size of the chart inside the svg tag in the html\n    const width = 900;\n    const height = 500;\n    const marginTop = 40;\n    const marginRight = 25;\n    const marginBottom = 30;\n    const marginLeft = 40;\n\n    //This switches the time format to accommodate the smaller intervals on the x-axis when we fetch time data from API\n    data.forEach((d) => {\n        if (d.datetime.includes(\" \")) {\n            d.datetime = d3.timeParse(\"%Y-%m-%d %H:%M:%S\")(d.datetime);\n            dateFormat = d3.timeFormat(\"%I:%M:%S %p\");\n        } else {\n            d.datetime = d3.timeParse(\"%Y-%m-%d\")(d.datetime);\n            dateFormat = d3.timeFormat(\"%Y-%m-%d\");\n        }\n        //This turns the close: \"45.99\" into a number we can manipulate which makes it more dynamic\n        d.close = parseFloat(d.close);\n    });\n\n    //We are making sure axis stay within the svg width x height and the line starts from the lowest to highest close\n    const xScale = d3\n    .scaleUtc()\n    .domain(d3.extent(data, (d) => d.datetime))\n    .range([marginLeft, width - marginRight]);\n\n    const yScale = d3\n    .scaleLinear()\n    .domain(d3.extent(data, (d) => d.close))\n    .range([height - marginBottom, marginTop]); //we reverse where the pixels start here from top left to bottom left\n\n    //This grabs the x-axis line and the y-axis line and creates ticks based on the domain and range above\n    const xAxis = d3.axisBottom(xScale).tickFormat(dateFormat);\n    const yAxis = d3.axisLeft(yScale)\n\n    //this will add/create gridline to the chart like any normal chart\n    const xGridline = d3.axisBottom(xScale).tickSize(-height + marginTop + marginBottom).tickFormat(\"\");\n    const yGridline = d3.axisLeft(yScale).tickSize(-width + marginLeft + marginRight).tickFormat(\"\");\n\n    //This will clear anything existing in svg, making it look like we are updating the chart but we are actually\n    //erasing everything\n    d3\n    .select(selector)\n    .selectAll(\"*\").\n    remove();\n\n    //This selects the container that has the svg and changes its height and width. You can also just create a new container\n    //but this is the way I started mine since my svg is already in my html\n    const svg = d3\n    .select(selector)\n    .attr(\"width\", width)\n    .attr(\"height\", height)\n\n    //like before, anything we create we need to append to the \"group\" which is g from x and y gridline above\n    svg.append(\"g\")\n    .attr(\"class\", \"grid\")\n    .attr(\"transform\", `translate(0,${height - marginBottom})`)\n    .style(\"stroke-dasharray\",(\"3,3\"))\n    .call(xGridline);\n\n    svg.append(\"g\")\n    .attr(\"class\", \"grid\")\n    .attr(\"transform\", `translate(${marginLeft},0)`)\n    .style(\"stroke-dasharray\",(\"3,3\"))\n    .call(yGridline);\n    // In d3 we have to append everything we create because just because we create something doesn't mean its\n    //\"implicitly\" added so we add(append) the axis we created earlier inside the chart container by using \"g\"\n    //which \"groups\" them together\n    svg.append(\"g\")\n    .attr(\"transform\", `translate(0,${height - marginBottom})`)\n    .call(xAxis);\n\n\n    svg.append(\"g\")\n    .attr(\"transform\", `translate(${marginLeft},0)`)\n    .call(yAxis);\n\n    //We need to create a line that will eventually follow a path\n    const line = d3\n    .line()\n    .x((d) => xScale(d.datetime))\n    .y((d) => yScale(d.close));\n\n    //This will be the path that the line will \"follow\" we can customize color,fill, and many other things using \".attr\"\n    svg\n    .append(\"path\")\n    .datum(data)\n    .attr(\"fill\", \"none\")\n    .attr(\"stroke\", \"steelblue\")\n    .attr(\"stroke-width\", 2)\n    .attr(\"d\", line);\n}\n\n//this function will generate a new chart and delete the old one passing in the data from the fetch and the chart class which is assigned to my svg. I could have selected the svg from the start but this is how I did it\nfunction generateNewChart(data) {\n    createChart(data, \"#chart\");\n}\n\n\n\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/createChart.js?");

/***/ }),

/***/ "./src/scripts/fetchData.js":
/*!**********************************!*\
  !*** ./src/scripts/fetchData.js ***!
  \**********************************/
/***/ (function() {

eval("throw new Error(\"Module parse failed: 'return' outside of function (61:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }));\\n| \\n>     return dataPoints;\\n|   } catch (error) {\\n|     console.error(error);\");\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/fetchData.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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