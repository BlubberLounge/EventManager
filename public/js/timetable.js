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

/***/ "./resources/js/timetable.js":
/*!***********************************!*\
  !*** ./resources/js/timetable.js ***!
  \***********************************/
/***/ (() => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/**\n * @author Maximilian Mewes\n *\n *\n */\n$(function () {\n  var el = document.querySelector(\".detectSticky\");\n  var observer = new IntersectionObserver(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 1),\n      e = _ref2[0];\n    var el = $(\".timeTableUser\");\n    el.toggleClass(\"isStuck\", e.intersectionRatio < 1);\n  }, {\n    threshold: [1]\n  });\n  observer.observe(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdGltZXRhYmxlLmpzLmpzIiwibmFtZXMiOlsiJCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwiZSIsInRvZ2dsZUNsYXNzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdGltZXRhYmxlLmpzPzA2ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIE1heGltaWxpYW4gTWV3ZXNcbiAqXG4gKlxuICovXG4kKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRlY3RTdGlja3lcIilcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZV0pID0+IHtcbiAgICAgICAgbGV0IGVsID0gJChcIi50aW1lVGFibGVVc2VyXCIpO1xuICAgICAgICBlbC50b2dnbGVDbGFzcyhcImlzU3R1Y2tcIiwgZS5pbnRlcnNlY3Rpb25SYXRpbyA8IDEpO1xuICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogWzFdIH1cbiAgICApO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxDQUFDLENBQUMsWUFBVztFQUNULElBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBQ2xELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FDdkMsVUFBQUMsSUFBQSxFQUFTO0lBQUEsSUFBQUMsS0FBQSxHQUFBQyxjQUFBLENBQUFGLElBQUE7TUFBUEcsQ0FBQyxHQUFBRixLQUFBO0lBQ0QsSUFBSU4sRUFBRSxHQUFHRCxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDNUJDLEVBQUUsQ0FBQ1MsV0FBVyxDQUFDLFNBQVMsRUFBRUQsQ0FBQyxDQUFDRSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7RUFDdEQsQ0FBQyxFQUNDO0lBQUVDLFNBQVMsRUFBRSxDQUFDLENBQUM7RUFBRSxDQUFDLENBQ25CO0VBRURSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDWixFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./resources/js/timetable.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/timetable.js"]();
/******/ 	
/******/ })()
;