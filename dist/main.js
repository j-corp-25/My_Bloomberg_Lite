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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchData */ \"./src/scripts/fetchData.js\");\n/* harmony import */ var _scripts_createChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/createChart */ \"./src/scripts/createChart.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    document.getElementById(\"defaultOpen\").click();\n    const defaultButton = document.getElementById(\"defaultButton\")\n    defaultButton.click();\n    let currentTicker = '';\n    const tickerElement = document.getElementById('chart-container-ticker');\n    const SNP500 = [\n        \"MMM\",\n        \"ROKU\",\n        \"GOOGL\",\n        \"META\",\n        \"KO\",\n        \"GE\"\n    ]\n    // Selects all the buttons under id=date-intervals\n    const intervalButtons = document.querySelectorAll('#date-intervals button');\n\n    async function updateDataForTicker(ticker, interval = '1month') {\n        currentTicker = ticker;\n        tickerElement.textContent = currentTicker.toUpperCase();\n        try {\n            const data = await (0,_scripts_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ticker, interval);\n            (0,_scripts_createChart__WEBPACK_IMPORTED_MODULE_1__.generateNewChart)(data);\n        } catch (error) {\n            console.error(`Failed to get data for ticker ${ticker}:`, error)\n        }\n\n    }\n    // Picks a random ticker from the list above\n    function randomTicker() {\n        return SNP500[(Math.floor(Math.random() * SNP500.length))];\n    }\n\n    intervalButtons.forEach(button => { // Adds an event listener to each button and also gets their value when they are clicked\n        button.addEventListener('click', function () {\n            const interval = this.getAttribute('value');\n            updateDataForTicker(currentTicker, interval);\n        });\n    });\n    // Creates chart based on the ticker that generates randomly which is when the page loads\n    updateDataForTicker(randomTicker(),);\n\n    // Instead of cliick this adds a submit listener to the ticker form when searching for stock\n    document.querySelector('.ticker-form').addEventListener('submit', function (e) { // Prevents from the form actualy being submitted\n        e.preventDefault();\n        const ticker = document.querySelector('#ticker-input').value;\n        updateDataForTicker(ticker, '1month');\n    });\n    function openTab(evt, tabName) {\n        var i,\n            tabcontent,\n            tablinks;\n        tabcontent = document.getElementsByClassName(\"tabcontent\");\n        tablinks = document.getElementsByClassName(\"tablinks\");\n\n        for (i = 0; i < tabcontent.length; i++) {\n            tabcontent[i].style.display = \"none\";\n        }\n        for (i = 0; i < tablinks.length; i++) {\n            tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\n        }\n        document.getElementById(tabName).style.display = \"block\";\n        evt.currentTarget.className += \" active\";\n    }\n\n    var tabButtons = document.getElementsByClassName('tablinks');\n    for (var i = 0; i < tabButtons.length; i++) {\n        tabButtons[i].addEventListener('click', function (event) {\n            openTab(event, event.target.innerHTML);\n        });\n\n    }\n\n\n});\n\n\n//# sourceURL=webpack://my_bloomberg/./src/index.js?");

/***/ }),

/***/ "./src/scripts/createChart.js":
/*!************************************!*\
  !*** ./src/scripts/createChart.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChart: function() { return /* binding */ createChart; },\n/* harmony export */   generateNewChart: function() { return /* binding */ generateNewChart; }\n/* harmony export */ });\n//credit to d3.js developers for the template below which I used to create and populate my chart\n//https://d3js.org/getting-started#try-d3-online\nfunction createChart(data,selector){\n    //Define the chart date format\n    //Format will look like \"2016-01-01\" on the x-axis\n    let dateFormat = d3.timeFormat(\"%Y-%M-%D\");\n\n    //Define the chart size and margins\n    //This will be the size of the chart inside the svg tag in the html\n    const width = 900;\n    const height = 500;\n    const marginTop = 40;\n    const marginRight = 25;\n    const marginBottom = 30;\n    const marginLeft = 40;\n\n    //This switches the time format to accommodate the smaller intervals on the x-axis when we fetch time data from API\n    data.forEach((d) => {\n        if (d.datetime.includes(\" \")) {\n            d.datetime = d3.timeParse(\"%Y-%m-%d %H:%M:%S\")(d.datetime);\n            dateFormat = d3.timeFormat(\"%I:%M:%S %p\");\n        } else {\n            d.datetime = d3.timeParse(\"%Y-%m-%d\")(d.datetime);\n            dateFormat = d3.timeFormat(\"%Y-%m-%d\");\n        }\n        //This turns the close: \"45.99\" into a number we can manipulate which makes it more dynamic\n        d.close = parseFloat(d.close);\n    });\n\n    //We are making sure axis stay within the svg width x height and the line starts from the lowest to highest close\n    const xScale = d3\n    .scaleUtc()\n    .domain(d3.extent(data, (d) => d.datetime))\n    .range([marginLeft, width - marginRight]);\n\n    const yScale = d3\n    .scaleLinear()\n    .domain(d3.extent(data, (d) => d.close))\n    .range([height - marginBottom, marginTop]); //we reverse where the pixels start here from top left to bottom left\n\n    //This grabs the x-axis line and the y-axis line and creates ticks based on the domain and range above\n    const xAxis = d3.axisBottom(xScale).tickFormat(dateFormat);\n    const yAxis = d3.axisLeft(yScale)\n\n    //this will add/create gridline to the chart like any normal chart\n    const xGridline = d3.axisBottom(xScale).tickSize(-height + marginTop + marginBottom).tickFormat(\"\");\n    const yGridline = d3.axisLeft(yScale).tickSize(-width + marginLeft + marginRight).tickFormat(\"\");\n\n    //This will clear anything existing in svg, making it look like we are updating the chart but we are actually\n    //erasing everything\n    d3\n    .select(selector)\n    .selectAll(\"*\").\n    remove();\n\n    //This selects the container that has the svg and changes its height and width. You can also just create a new container\n    //but this is the way I started mine since my svg is already in my html\n    const svg = d3\n    .select(selector)\n    .attr(\"width\", width)\n    .attr(\"height\", height)\n\n    //like before, anything we create we need to append to the \"group\" which is g from x and y gridline above\n    svg.append(\"g\")\n    .attr(\"class\", \"grid\")\n    .attr(\"transform\", `translate(0,${height - marginBottom})`)\n    .style(\"stroke-dasharray\",(\"3,3\"))\n    .call(xGridline);\n\n    svg.append(\"g\")\n    .attr(\"class\", \"grid\")\n    .attr(\"transform\", `translate(${marginLeft},0)`)\n    .style(\"stroke-dasharray\",(\"3,3\"))\n    .call(yGridline);\n    // In d3 we have to append everything we create because just because we create something doesn't mean its\n    //\"implicitly\" added so we add(append) the axis we created earlier inside the chart container by using \"g\"\n    //which \"groups\" them together\n    svg.append(\"g\")\n    .attr(\"transform\", `translate(0,${height - marginBottom})`)\n    .call(xAxis);\n\n\n    svg.append(\"g\")\n    .attr(\"transform\", `translate(${marginLeft},0)`)\n    .call(yAxis);\n\n    //We need to create a line that will eventually follow a path\n    const line = d3\n    .line()\n    .x((d) => xScale(d.datetime))\n    .y((d) => yScale(d.close));\n\n    //This will be the path that the line will \"follow\" we can customize color,fill, and many other things using \".attr\"\n    svg\n    .append(\"path\")\n    .datum(data)\n    .attr(\"fill\", \"none\")\n    .attr(\"stroke\", \"steelblue\")\n    .attr(\"stroke-width\", 2)\n    .attr(\"d\", line);\n\n\n    svg.selectAll(\".dot\")\n    .data(data)\n    .enter().append(\"circle\")\n    .attr(\"class\", \"dot\") // Assign a class for styling\n    .attr(\"cx\", function(d, i) { return xScale(d.datetime) })\n    .attr(\"cy\", function(d, i) { return yScale(d.close) })\n    .attr(\"r\", 5) // Radius size, could be adjusted\n    .attr('fill', function (d, i) {\n        return dateFormat(d.datetime) // If dateFormat function returns color code\n    })\n    .style(\"opacity\", 0) // Start invisible\n    .on('mouseover', function (d, i) {\n        d3.select(this).transition()\n            .duration('50')\n            .style('fill', 'white')\n            .style('opacity', '.85')\n            ; // Make visible on mouseover\n    })\n    .on('mouseout', function (d, i) {\n        d3.select(this).transition()\n        .duration('50')\n        .style('opacity', '0'); // Revert to invisible after mouseout\n    });\n\n\n}\n\n\n//this function will generate a new chart and delete the old one passing in the data from the fetch and the chart class which is assigned to my svg. I could have selected the svg from the start but this is how I did it\nfunction generateNewChart(data) {\n    createChart(data, \"#chart\");\n}\n\n\n\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/createChart.js?");

/***/ }),

/***/ "./src/scripts/fetchData.js":
/*!**********************************!*\
  !*** ./src/scripts/fetchData.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData2 */ \"./src/scripts/fetchData2\");\n\nasync function fetchData(ticker, interval = \"1month\") {\n    let startDate = \"1985-01-01\";\n    let endDate = \"2023-06-30\";\n\n    if (interval === \"15min\") {\n      startDate = \"2023-06-29\";\n      endDate = endDate;\n    } else if (interval === \"1min\") {\n      startDate = \"2023-06-29\";\n      endDate = endDate;\n    } else if (interval === \"5min\") {\n      startDate = \"2023-06-28\";\n      endDate = endDate;\n    } else if (interval === \"15min\") {\n      startDate = \"2023-06-27\";\n      endDate = endDate;\n    } else if (interval === \"30min\") {\n      startDate = \"2023-06-26\";\n      endDate = endDate;\n    } else if (interval === \"45min\") {\n      startDate = \"2023-06-23\";\n      endDate = endDate;\n    } else if (interval === \"1h\") {\n      startDate = \"2023-06-22\";\n      endDate = endDate;\n    } else if (interval === \"2h\") {\n      startDate = \"2023-06-21\";\n      endDate = endDate;\n    } else if (interval === \"4h\") {\n      startDate = \"2023-06-16\";\n      endDate = endDate;\n    } else if (interval === \"1day\") {\n      startDate = \"2023-06-01\";\n      endDate = \"2023-06-30\";\n    } else if (interval === \"1week\") {\n      startDate = \"2023-03-15\";\n      endDate = \"2023-06-30\";\n    } else {\n      interval = interval;\n    }\n\n    const url1 = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`;\n    const options1 = {\n        method: 'GET',\n        headers: {\n            'X-RapidAPI-Key': \"be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0\",\n            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'\n        }\n    };\n\n    const url2 = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`;  // fallback API URL\n    const options2 = {\n        method: 'GET',\n        headers: {\n            'X-RapidAPI-Key': \"da67ae36b6mshfed40a4fe258a74p18afdajsn4916c4fb8e2a\",\n            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'\n        }\n    };\n\n    try {\n        const response1 = await fetch(url1, options1);\n        if (!response1.ok) throw new Error('API request failed');\n        const result1 = await response1.json();\n\n        const dataPoints = result1.values.map((value) => ({\n            datetime: value.datetime,\n            close: value.close,\n        }));\n\n        return dataPoints;\n\n    } catch (error1) {\n\n        try {\n            const response2 = await fetch(url2, options2);\n            if (!response2.ok) throw new Error('Fallback API request failed');\n            const result2 = await response2.json();\n\n            const dataPoints2 = result2.values.map((value) => ({\n                datetime: value.datetime,\n                close: value.close,\n            }));\n\n            return dataPoints2;\n\n        } catch (error2) {\n            console.error(error2);\n            throw error2;  // rethrow the error so the calling function knows something went wrong\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/fetchData.js?");

/***/ }),

/***/ "./src/scripts/fetchData2":
/*!********************************!*\
  !*** ./src/scripts/fetchData2 ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/scripts/fetchData.js\");\n\nasync function fetchData2(ticker, interval = \"1month\") {\n    let startDate = \"1985-01-01\";\n    let endDate = \"2023-06-30\";\n\n    if (interval === \"15min\") {\n      startDate = \"2023-06-29\";\n      endDate = endDate;\n    } else if (interval === \"1min\") {\n      startDate = \"2023-06-29\";\n      endDate = endDate;\n    } else if (interval === \"5min\") {\n      startDate = \"2023-06-28\";\n      endDate = endDate;\n    } else if (interval === \"15min\") {\n      startDate = \"2023-06-27\";\n      endDate = endDate;\n    } else if (interval === \"30min\") {\n      startDate = \"2023-06-26\";\n      endDate = endDate;\n    } else if (interval === \"45min\") {\n      startDate = \"2023-06-23\";\n      endDate = endDate;\n    } else if (interval === \"1h\") {\n      startDate = \"2023-06-22\";\n      endDate = endDate;\n    } else if (interval === \"2h\") {\n      startDate = \"2023-06-21\";\n      endDate = endDate;\n    } else if (interval === \"4h\") {\n      startDate = \"2023-06-16\";\n      endDate = endDate;\n    } else if (interval === \"1day\") {\n      startDate = \"2023-06-01\";\n      endDate = \"2023-06-30\";\n    } else if (interval === \"1week\") {\n      startDate = \"2023-03-15\";\n      endDate = \"2023-06-30\";\n    } else {\n      interval = interval;\n    }\n\n    const url = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`;\n    const options = {\n  \tmethod: 'GET',\n    headers: {\n      //hid key in .env\n      'X-RapidAPI-Key': \"be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0\",\n      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'\n    }\n  };\n\n  try {\n    const response = await fetch(url, options);\n    const result = await response.json();\n    //iterates over the value key in the response and returns just data and close\n    const dataPoints = result.values.map((value) => ({\n      datetime: value.datetime,\n      close: value.close,\n    }));\n    if(dataPoints )\n    {return dataPoints}\n    else {(0,_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, options)}\n\n\n  } catch (error) {\n    console.error(error);\n\n\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData2);\n\n\n//# sourceURL=webpack://my_bloomberg/./src/scripts/fetchData2?");

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