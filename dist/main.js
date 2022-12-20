/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadContact */ \"./src/loadContact.js\");\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHome */ \"./src/loadHome.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n    const element = document.createElement('div');\r\n    const content = document.getElementById('content');\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.textContent = \"Home\";\r\n    homeBtn.classList.add(\"tab\");\r\n    element.appendChild(homeBtn);\r\n    homeBtn.addEventListener(\"click\", (e) => {\r\n        content.textContent='';\r\n        (0,_loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.textContent = \"Menu\";\r\n    menuBtn.classList.add(\"tab\");\r\n    element.appendChild(menuBtn);\r\n    menuBtn.addEventListener(\"click\", (e) => {\r\n        content.textContent='';\r\n        (0,_loadMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    });\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.textContent = \"Contact\";\r\n    contactBtn.classList.add(\"tab\");\r\n    element.appendChild(contactBtn);\r\n    contactBtn.addEventListener(\"click\", (e) => {\r\n        content.textContent='';\r\n        (0,_loadContact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n    initPage();\r\n    return element;\r\n  }\r\n  \r\n  document.body.appendChild(component());\r\n\r\nfunction initPage() {\r\n    (0,_loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeContact() {\r\n    const contactPage = document.createElement(\"div\");\r\n    contactPage.classList.add(\"contact\");\r\n    contactPage.appendChild(addTitle(\"Contact Us\"));\r\n    contactPage.appendChild(addP(\"Our email is parlor@gmail.com\"));\r\n\r\n    return contactPage;\r\n}\r\n\r\nfunction addTitle(content) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = content;\r\n    paragraph.classList.add(\"intro\");\r\n    return paragraph;\r\n}\r\n\r\nfunction addP(content) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = content;\r\n    return paragraph;\r\n}\r\n\r\nfunction addImg(src, alt) {\r\n    const image = document.createElement(\"img\");\r\n    image.src = src;\r\n    image.alt = alt;\r\n    return image;\r\n}\r\n\r\nfunction loadContact() {\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(makeContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadContact.js?");

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeHome() {\r\n    const homePage = document.createElement(\"div\");\r\n    homePage.classList.add(\"home\");\r\n    homePage.appendChild(addTitle(\"Ice Cream Parlor\"));\r\n    homePage.appendChild(addImg(\"icecream.jpg\", \"picture of ice cream\"));\r\n    homePage.appendChild(addP(\"This restaurant was established in 1980 specifically to serve delicious and exotic brands of ice cream! \\\r\n    Drop by to see ice cream flavors you've never even heard about!\"));\r\n\r\n    return homePage;\r\n}\r\n\r\nfunction addTitle(content) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = content;\r\n    paragraph.classList.add(\"intro\");\r\n    return paragraph;\r\n}\r\n\r\nfunction addP(content) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = content;\r\n    return paragraph;\r\n}\r\n\r\nfunction addImg(src, alt) {\r\n    const image = document.createElement(\"img\");\r\n    image.src = src;\r\n    image.alt = alt;\r\n    return image;\r\n}\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n    //main.textContent=\"\";\r\n    content.appendChild(makeHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadHome.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeMenu() {\r\n    const menuPage = document.createElement(\"div\");\r\n    menuPage.classList.add(\"menu\");\r\n    menuPage.appendChild(addP(\"menu\", \"title\"));\r\n    menuPage.appendChild(addP(\"Welcome to the menu!\", \"text\"));\r\n    menuPage.appendChild(addMenuItem(\"Ice Cream Sundae\", 14.00, \"Three scoops of delicious ice cream topped with sprinkles and melted chocolate.\",\r\n    \"icecream.jpg\", \"photo of sundae\"));\r\n\r\n    return menuPage;\r\n}\r\n\r\nfunction addP(content, c) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = content;\r\n    paragraph.classList.add(c);\r\n    return paragraph;\r\n}\r\n\r\nfunction addMenuItem(name, price, description, image, alt) {\r\n    const item = document.createElement(\"div\");\r\n    item.classList.add(\"item\");\r\n\r\n    item.appendChild(addP(name, \"name\"));\r\n\r\n    item.appendChild(addImg(image, alt));\r\n\r\n    item.appendChild(addP(price, \"price\"));\r\n    item.appendChild(addP(description, \"description\"));\r\n    return item;\r\n}\r\n\r\nfunction addImg(src, alt) {\r\n    const image = document.createElement(\"img\");\r\n    image.src = src;\r\n    image.alt = alt;\r\n    return image;\r\n}\r\n\r\nfunction loadMenu() {\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(makeMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadMenu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n|     font-size: medium;\");\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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