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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n// spotify api top 10\n// https://api.spotify.com/v1/search?q=artist:abba&type=album\n// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1\n// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1&offset=1\n\n// App Status Development mode (what does this mean?)\n// Client ID 891171d4b4ca47069bb6aa7958218249\n// Client Secret cb0bc2c317e04338a374b904b9b48528 \n\n\n// import SpotifyWebApi from 'spotify-web-api-js';\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  const root = document.querySelector('#root');\n  console.log(\"DOM loaded\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXdDO0FBQ3hDOztBQUVBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQ3JCRyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFFekIsSUFBSU4sd0RBQU8sQ0FBQ0csSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcmFsX2phbXovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcG90aWZ5IGFwaSB0b3AgMTBcbi8vIGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD9xPWFydGlzdDphYmJhJnR5cGU9YWxidW1cbi8vIGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD9xPWFydGlzdDphYmJhJnR5cGU9YWxidW0mbGltaXQ9MVxuLy8gaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoP3E9YXJ0aXN0OmFiYmEmdHlwZT1hbGJ1bSZsaW1pdD0xJm9mZnNldD0xXG5cbi8vIEFwcCBTdGF0dXMgRGV2ZWxvcG1lbnQgbW9kZSAod2hhdCBkb2VzIHRoaXMgbWVhbj8pXG4vLyBDbGllbnQgSUQgODkxMTcxZDRiNGNhNDcwNjliYjZhYTc5NTgyMTgyNDlcbi8vIENsaWVudCBTZWNyZXQgY2IwYmMyYzMxN2UwNDMzOGEzNzRiOTA0YjliNDg1MjggXG5cbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuLy8gaW1wb3J0IFNwb3RpZnlXZWJBcGkgZnJvbSAnc3BvdGlmeS13ZWItYXBpLWpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5cbiAgICBxdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnNvbGUubG9nKFwiRE9NIGxvYWRlZFwiKTtcblxuICAgIG5ldyBFeGFtcGxlKHJvb3QpO1xufSk7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>Click Me 😇</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener('click', this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    e.preventDefault();\n    this.ele.children[0].innerHTML = \"Clicked 😈\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsc0JBQXNCO0lBQzNDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTtFQUVBRCxXQUFXLENBQUNHLENBQUMsRUFBRTtJQUNYQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixJQUFJLENBQUNOLEdBQUcsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTixTQUFTLEdBQUcsWUFBWTtFQUNqRDtBQUNKO0FBRUEsK0RBQWVILE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJhbF9qYW16Ly4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+Q2xpY2sgTWUg8J+YhzwvaDE+XCJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBcIkNsaWNrZWQg8J+YiFwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJhbF9qYW16Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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