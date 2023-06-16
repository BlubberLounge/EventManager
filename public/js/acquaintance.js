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

/***/ "./resources/js/acquaintance.js":
/*!**************************************!*\
  !*** ./resources/js/acquaintance.js ***!
  \**************************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\n * @author Maximilian Mewes\n *\n *\n */\n\nvar AcquaintanceStaus = {\n  PENDING: 'pending',\n  ACCEPTED: 'accepted',\n  DENIED: 'denied'\n};\n\n/**\n *\n *\n */\nvar Acquaintance = /*#__PURE__*/function () {\n  function Acquaintance() {\n    _classCallCheck(this, Acquaintance);\n    this.apiBaseURL = '/api/v1';\n    this.endpoint_updateByReceiverOrTransmitter = this.apiBaseURL + '/acquaintance/byReceiverOrTransmitter';\n    this.factory = new AcquaintanceElementFactory();\n    this.init();\n  }\n  _createClass(Acquaintance, [{\n    key: \"init\",\n    value: function init() {\n      //\n    }\n  }, {\n    key: \"updateByReceiverOrTransmitter\",\n    value: function updateByReceiverOrTransmitter(id, status) {\n      $.ajax({\n        url: this.endpoint_updateByReceiverOrTransmitter + '/' + id,\n        method: 'PUT',\n        data: {\n          status: AcquaintanceStaus[status.toUpperCase()]\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n        },\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n        }\n      });\n    }\n  }]);\n  return Acquaintance;\n}();\nvar AcquaintanceElementFactory = /*#__PURE__*/function () {\n  function AcquaintanceElementFactory() {\n    _classCallCheck(this, AcquaintanceElementFactory);\n  }\n  _createClass(AcquaintanceElementFactory, [{\n    key: \"createTemplateRow\",\n    value: function createTemplateRow(id) {\n      //\n    }\n  }]);\n  return AcquaintanceElementFactory;\n}(); // EXPORT\nmodule.exports = Acquaintance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY3F1YWludGFuY2VTdGF1cyIsIlBFTkRJTkciLCJBQ0NFUFRFRCIsIkRFTklFRCIsIkFjcXVhaW50YW5jZSIsIl9jbGFzc0NhbGxDaGVjayIsImFwaUJhc2VVUkwiLCJlbmRwb2ludF91cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlciIsImZhY3RvcnkiLCJBY3F1YWludGFuY2VFbGVtZW50RmFjdG9yeSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInVwZGF0ZUJ5UmVjZWl2ZXJPclRyYW5zbWl0dGVyIiwiaWQiLCJzdGF0dXMiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJ0b1VwcGVyQ2FzZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY3JlYXRlVGVtcGxhdGVSb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hY3F1YWludGFuY2UuanM/MTRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWF4aW1pbGlhbiBNZXdlc1xuICpcbiAqXG4gKi9cblxuY29uc3QgQWNxdWFpbnRhbmNlU3RhdXMgPSB7XG4gICAgUEVORElORzogJ3BlbmRpbmcnLFxuICAgIEFDQ0VQVEVEOiAnYWNjZXB0ZWQnLFxuICAgIERFTklFRDonZGVuaWVkJyxcbn07XG5cbi8qKlxuICpcbiAqXG4gKi9cbmNsYXNzIEFjcXVhaW50YW5jZVxue1xuXHRjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLmFwaUJhc2VVUkwgPSAnL2FwaS92MSc7XG4gICAgICAgIHRoaXMuZW5kcG9pbnRfdXBkYXRlQnlSZWNlaXZlck9yVHJhbnNtaXR0ZXIgPSB0aGlzLmFwaUJhc2VVUkwrJy9hY3F1YWludGFuY2UvYnlSZWNlaXZlck9yVHJhbnNtaXR0ZXInO1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgQWNxdWFpbnRhbmNlRWxlbWVudEZhY3Rvcnk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKVxuICAgIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICB1cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlcihpZCwgc3RhdHVzKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5lbmRwb2ludF91cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlcisnLycraWQsXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHN0YXR1czogQWNxdWFpbnRhbmNlU3RhdXNbc3RhdHVzLnRvVXBwZXJDYXNlKCldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGVycm9yIGNhc2VcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgQWNxdWFpbnRhbmNlRWxlbWVudEZhY3RvcnlcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgIH1cblxuICAgIGNyZWF0ZVRlbXBsYXRlUm93KGlkKVxuICAgIHtcbiAgICAgICAgLy9cbiAgICB9XG59XG5cbi8vIEVYUE9SVFxubW9kdWxlLmV4cG9ydHMgPSBBY3F1YWludGFuY2U7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUc7RUFDdEJDLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsTUFBTSxFQUFDO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUhBLElBSU1DLFlBQVk7RUFFakIsU0FBQUEsYUFBQSxFQUNHO0lBQUFDLGVBQUEsT0FBQUQsWUFBQTtJQUNJLElBQUksQ0FBQ0UsVUFBVSxHQUFHLFNBQVM7SUFDM0IsSUFBSSxDQUFDQyxzQ0FBc0MsR0FBRyxJQUFJLENBQUNELFVBQVUsR0FBQyx1Q0FBdUM7SUFDckcsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSUMsMEJBQTBCO0lBQzdDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0VBQ2Y7RUFBQ0MsWUFBQSxDQUFBUCxZQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILEtBQUEsRUFDQTtNQUNJO0lBQUE7RUFDSDtJQUFBRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyw4QkFBOEJDLEVBQUUsRUFBRUMsTUFBTSxFQUN4QztNQUNJQyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNIQyxHQUFHLEVBQUUsSUFBSSxDQUFDWixzQ0FBc0MsR0FBQyxHQUFHLEdBQUNRLEVBQUU7UUFDdkRLLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLElBQUksRUFBRTtVQUNGTCxNQUFNLEVBQUVoQixpQkFBaUIsQ0FBQ2dCLE1BQU0sQ0FBQ00sV0FBVyxFQUFFO1FBQ2xELENBQUM7UUFDREMsVUFBVSxFQUFFLFNBQUFBLFdBQUEsRUFBVyxDQUN2QixDQUFDO1FBQ0RDLE9BQU8sRUFBRSxTQUFBQSxRQUFTQyxRQUFRLEVBQUU7VUFDeEI7UUFBQSxDQUNIO1FBQ0RDLEtBQUssRUFBRSxTQUFBQSxNQUFTQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1VBQzVDO1VBQ0E7UUFBQTtNQUVSLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBekIsWUFBQTtBQUFBO0FBQUEsSUFHQ0ssMEJBQTBCO0VBRTVCLFNBQUFBLDJCQUFBLEVBQ0E7SUFBQUosZUFBQSxPQUFBSSwwQkFBQTtFQUNBO0VBQUNFLFlBQUEsQ0FBQUYsMEJBQUE7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlCLGtCQUFrQmYsRUFBRSxFQUNwQjtNQUNJO0lBQUE7RUFDSDtFQUFBLE9BQUFOLDBCQUFBO0FBQUEsS0FHTDtBQUNBc0IsTUFBTSxDQUFDQyxPQUFPLEdBQUc1QixZQUFZIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2FjcXVhaW50YW5jZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/acquaintance.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/acquaintance.js");
/******/ 	
/******/ })()
;