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

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/**\n * @author Maximilian Mewes\n *\n *\n */\n$(function () {\n  var el = document.querySelector(\".detectSticky\");\n  var observer = new IntersectionObserver(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 1),\n      e = _ref2[0];\n    var el = $(\".timeTableUser\");\n    el.toggleClass(\"isStuck\", e.intersectionRatio < 1);\n  }, {\n    threshold: [1]\n  });\n  observer.observe(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJlIiwidG9nZ2xlQ2xhc3MiLCJpbnRlcnNlY3Rpb25SYXRpbyIsInRocmVzaG9sZCIsIm9ic2VydmUiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3RpbWV0YWJsZS5qcz8wNmU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuJChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0ZWN0U3RpY2t5XCIpXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoW2VdKSA9PiB7XG4gICAgICAgIGxldCBlbCA9ICQoXCIudGltZVRhYmxlVXNlclwiKTtcbiAgICAgICAgZWwudG9nZ2xlQ2xhc3MoXCJpc1N0dWNrXCIsIGUuaW50ZXJzZWN0aW9uUmF0aW8gPCAxKTtcbiAgICB9LFxuICAgICAgeyB0aHJlc2hvbGQ6IFsxXSB9XG4gICAgKTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsQ0FBQyxDQUFDLFlBQVc7RUFDVCxJQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUNsRCxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0JBQW9CLENBQ3ZDLFVBQUFDLElBQUEsRUFBUztJQUFBLElBQUFDLEtBQUEsR0FBQUMsY0FBQSxDQUFBRixJQUFBO01BQVBHLENBQUMsR0FBQUYsS0FBQTtJQUNELElBQUlOLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQzVCQyxFQUFFLENBQUNTLFdBQVcsQ0FBQyxTQUFTLEVBQUVELENBQUMsQ0FBQ0UsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0VBQ3RELENBQUMsRUFDQztJQUFFQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUNuQjtFQUVEUixRQUFRLENBQUNTLE9BQU8sQ0FBQ1osRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy90aW1ldGFibGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/timetable.js\n");

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