/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact()\n{\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Contact\";\n\n    const ownerName = document.createElement(\"h2\");\n    ownerName.textContent = \"Owner - Mr. Bigglesworth\";\n\n    const ownerPhoneNumber = document.createElement(\"p\");\n    ownerPhoneNumber.textContent = \"(666)-DOC-EVIL\";\n    \n    const ownerEmail = document.createElement(\"p\");\n    ownerEmail.textContent = \"biggs@aol.net\";\n\n    content.appendChild(title);\n    content.appendChild(ownerName);\n    content.appendChild(ownerPhoneNumber);\n    content.appendChild(ownerEmail);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzPzdhYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRhY3QoKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3Qgb3duZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG93bmVyTmFtZS50ZXh0Q29udGVudCA9IFwiT3duZXIgLSBNci4gQmlnZ2xlc3dvcnRoXCI7XG5cbiAgICBjb25zdCBvd25lclBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgb3duZXJQaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiKDY2NiktRE9DLUVWSUxcIjtcbiAgICBcbiAgICBjb25zdCBvd25lckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgb3duZXJFbWFpbC50ZXh0Q29udGVudCA9IFwiYmlnZ3NAYW9sLm5ldFwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvd25lck5hbWUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3duZXJQaG9uZU51bWJlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvd25lckVtYWlsKTtcbn1cblxuZXhwb3J0IHsgbG9hZENvbnRhY3QgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome()\n{\n    const content = document.querySelector(\"#content\");\n\n    const restaurantImage = document.createElement(\"img\");\n    restaurantImage.alt = \"Front of the restaurant\";\n\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"The Cat's Tail\";\n\n    const glazeParagraph = document.createElement(\"p\");\n    const emTitle = document.createElement(\"em\");\n    emTitle.textContent = \"The Cat's Tail\";\n    const rest = document.createTextNode(\" is the best restaurant to have ever existed, and probably the best restaurant that will ever exist! You could spend the rest of your life searching for someplace where the food tastes better, and yet, you will never succeed in these attempts. The food is simply that marvelous.\");\n    glazeParagraph.appendChild(emTitle);\n    glazeParagraph.appendChild(rest);\n\n    content.appendChild(restaurantImage);\n    content.appendChild(headline);\n    content.appendChild(glazeParagraph);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzP2IxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZEhvbWUoKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlc3RhdXJhbnRJbWFnZS5hbHQgPSBcIkZyb250IG9mIHRoZSByZXN0YXVyYW50XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiVGhlIENhdCdzIFRhaWxcIjtcblxuICAgIGNvbnN0IGdsYXplUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJlbVwiKTtcbiAgICBlbVRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQ2F0J3MgVGFpbFwiO1xuICAgIGNvbnN0IHJlc3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBpcyB0aGUgYmVzdCByZXN0YXVyYW50IHRvIGhhdmUgZXZlciBleGlzdGVkLCBhbmQgcHJvYmFibHkgdGhlIGJlc3QgcmVzdGF1cmFudCB0aGF0IHdpbGwgZXZlciBleGlzdCEgWW91IGNvdWxkIHNwZW5kIHRoZSByZXN0IG9mIHlvdXIgbGlmZSBzZWFyY2hpbmcgZm9yIHNvbWVwbGFjZSB3aGVyZSB0aGUgZm9vZCB0YXN0ZXMgYmV0dGVyLCBhbmQgeWV0LCB5b3Ugd2lsbCBuZXZlciBzdWNjZWVkIGluIHRoZXNlIGF0dGVtcHRzLiBUaGUgZm9vZCBpcyBzaW1wbHkgdGhhdCBtYXJ2ZWxvdXMuXCIpO1xuICAgIGdsYXplUGFyYWdyYXBoLmFwcGVuZENoaWxkKGVtVGl0bGUpO1xuICAgIGdsYXplUGFyYWdyYXBoLmFwcGVuZENoaWxkKHJlc3QpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2xhemVQYXJhZ3JhcGgpO1xufVxuXG5leHBvcnQgeyBsb2FkSG9tZSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nfunction clearContent()\n{\n    const content = document.querySelector(\"#content\");\n    while (content.firstChild)\n    {\n        content.removeChild(content.lastChild);\n    }\n}\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nconst homeButton = document.querySelector(\"#home\");\nhomeButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n});\n\nconst menuButton = document.querySelector(\"#menu\");\nmenuButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n});\n\nconst contactButton = document.querySelector(\"#contact\");\ncontactButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNBO0FBQ007O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBVztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz8zYTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KClcbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpXG4gICAge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmxvYWRIb21lKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZEhvbWUoKTtcbn0pO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGxvYWRNZW51KCk7XG59KTtcblxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBsb2FkQ29udGFjdCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu()\n{\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Menu\";\n\n    const itemTitle = document.createElement(\"h2\");\n    itemTitle.textContent = \"La queue du chat - $250\";\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = \"Did you expect anything else? Why would you need something different when you have this magnificient cuisine! NO REFUNDS!\";\n\n    content.appendChild(title);\n    content.appendChild(itemTitle);\n    content.appendChild(itemDescription);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcz9iNGI5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNZW51KClcbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBcIkxhIHF1ZXVlIGR1IGNoYXQgLSAkMjUwXCI7XG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRpZCB5b3UgZXhwZWN0IGFueXRoaW5nIGVsc2U/IFdoeSB3b3VsZCB5b3UgbmVlZCBzb21ldGhpbmcgZGlmZmVyZW50IHdoZW4geW91IGhhdmUgdGhpcyBtYWduaWZpY2llbnQgY3Vpc2luZSEgTk8gUkVGVU5EUyFcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCB7IGxvYWRNZW51IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;