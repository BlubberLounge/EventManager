/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/***/ (() => {

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\nvar animateCSS = function animateCSS(element, animation) {\n  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"animate__\";\n  return new Promise(function (resolve, reject) {\n    var animationName = \"\".concat(prefix).concat(animation);\n    var node = document.querySelector(element);\n    node.classList.add(\"\".concat(prefix, \"animated\"), animationName);\n    function handleAnimationEnd(event) {\n      event.stopPropagation();\n      node.classList.remove(\"\".concat(prefix, \"animated\"), animationName);\n      resolve(\"Animation ended\");\n    }\n    node.addEventListener(\"animationend\", handleAnimationEnd, {\n      once: true\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRlQ1NTIiwiZWxlbWVudCIsImFuaW1hdGlvbiIsInByZWZpeCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYW5pbWF0aW9uTmFtZSIsImNvbmNhdCIsIm5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlscy5qcz9iOGZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuXG5jb25zdCBhbmltYXRlQ1NTID0gKGVsZW1lbnQsIGFuaW1hdGlvbiwgcHJlZml4ID0gXCJhbmltYXRlX19cIikgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBgJHtwcmVmaXh9JHthbmltYXRpb259YDtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG5cbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH1hbmltYXRlZGAsIGFuaW1hdGlvbk5hbWUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbkVuZChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7cHJlZml4fWFuaW1hdGVkYCwgYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICByZXNvbHZlKFwiQW5pbWF0aW9uIGVuZGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZUFuaW1hdGlvbkVuZCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE9BQU8sRUFBRUMsU0FBUztFQUFBLElBQUVDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsV0FBVztFQUFBLE9BQ3hELElBQUlHLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUM3QixJQUFNQyxhQUFhLE1BQUFDLE1BQUEsQ0FBTVIsTUFBTSxFQUFBUSxNQUFBLENBQUdULFNBQVMsQ0FBRTtJQUM3QyxJQUFNVSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDYixPQUFPLENBQUM7SUFFNUNXLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLElBQUFMLE1BQUEsQ0FBSVIsTUFBTSxlQUFZTyxhQUFhLENBQUM7SUFFdEQsU0FBU08sa0JBQWtCQSxDQUFDQyxLQUFLLEVBQUU7TUFDL0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO01BQ3ZCUCxJQUFJLENBQUNHLFNBQVMsQ0FBQ0ssTUFBTSxJQUFBVCxNQUFBLENBQUlSLE1BQU0sZUFBWU8sYUFBYSxDQUFDO01BQ3pERixPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDOUI7SUFFQUksSUFBSSxDQUFDUyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUVKLGtCQUFrQixFQUFFO01BQ3RESyxJQUFJLEVBQUU7SUFDVixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy91dGlscy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/utils.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/utils.js"]();
/******/ 	
/******/ })()
;