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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\n * @author Maximilian Mewes\n *\n *\n */\n\nvar AcquaintanceStaus = {\n  PENDING: 'pending',\n  ACCEPTED: 'accepted',\n  DENIED: 'denied'\n};\n\n/**\n *\n *\n */\nvar Acquaintance = /*#__PURE__*/function () {\n  function Acquaintance() {\n    _classCallCheck(this, Acquaintance);\n    this.apiBaseURL = '/api/v1';\n    this.endpoint_updateByReceiverOrTransmitter = this.apiBaseURL + '/acquaintance/byReceiverOrTransmitter';\n    this.factory = new AcquaintanceElementFactory();\n    this.init();\n  }\n  _createClass(Acquaintance, [{\n    key: \"init\",\n    value: function init() {\n      //\n    }\n  }, {\n    key: \"updateByReceiverOrTransmitter\",\n    value: function updateByReceiverOrTransmitter(id, status) {\n      $.ajax({\n        url: this.endpoint_updateByReceiverOrTransmitter + '/' + id,\n        method: 'PUT',\n        data: {\n          status: AcquaintanceStaus[status.toUpperCase()]\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n        },\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n        }\n      });\n    }\n  }]);\n  return Acquaintance;\n}();\nvar AcquaintanceElementFactory = /*#__PURE__*/function () {\n  function AcquaintanceElementFactory() {\n    _classCallCheck(this, AcquaintanceElementFactory);\n  }\n  _createClass(AcquaintanceElementFactory, [{\n    key: \"createTemplateRow\",\n    value: function createTemplateRow(id) {\n      //\n    }\n  }]);\n  return AcquaintanceElementFactory;\n}(); // EXPORT\nmodule.exports = Acquaintance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWNxdWFpbnRhbmNlLmpzLmpzIiwibmFtZXMiOlsiQWNxdWFpbnRhbmNlU3RhdXMiLCJQRU5ESU5HIiwiQUNDRVBURUQiLCJERU5JRUQiLCJBY3F1YWludGFuY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcGlCYXNlVVJMIiwiZW5kcG9pbnRfdXBkYXRlQnlSZWNlaXZlck9yVHJhbnNtaXR0ZXIiLCJmYWN0b3J5IiwiQWNxdWFpbnRhbmNlRWxlbWVudEZhY3RvcnkiLCJpbml0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ1cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlciIsImlkIiwic3RhdHVzIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwidG9VcHBlckNhc2UiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImNyZWF0ZVRlbXBsYXRlUm93IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FjcXVhaW50YW5jZS5qcz8xNGJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuXG5jb25zdCBBY3F1YWludGFuY2VTdGF1cyA9IHtcbiAgICBQRU5ESU5HOiAncGVuZGluZycsXG4gICAgQUNDRVBURUQ6ICdhY2NlcHRlZCcsXG4gICAgREVOSUVEOidkZW5pZWQnLFxufTtcblxuLyoqXG4gKlxuICpcbiAqL1xuY2xhc3MgQWNxdWFpbnRhbmNlXG57XG5cdGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuYXBpQmFzZVVSTCA9ICcvYXBpL3YxJztcbiAgICAgICAgdGhpcy5lbmRwb2ludF91cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlciA9IHRoaXMuYXBpQmFzZVVSTCsnL2FjcXVhaW50YW5jZS9ieVJlY2VpdmVyT3JUcmFuc21pdHRlcic7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBBY3F1YWludGFuY2VFbGVtZW50RmFjdG9yeTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpXG4gICAge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHVwZGF0ZUJ5UmVjZWl2ZXJPclRyYW5zbWl0dGVyKGlkLCBzdGF0dXMpXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLmVuZHBvaW50X3VwZGF0ZUJ5UmVjZWl2ZXJPclRyYW5zbWl0dGVyKycvJytpZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBBY3F1YWludGFuY2VTdGF1c1tzdGF0dXMudG9VcHBlckNhc2UoKV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBBY3F1YWludGFuY2VFbGVtZW50RmFjdG9yeVxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgfVxuXG4gICAgY3JlYXRlVGVtcGxhdGVSb3coaWQpXG4gICAge1xuICAgICAgICAvL1xuICAgIH1cbn1cblxuLy8gRVhQT1JUXG5tb2R1bGUuZXhwb3J0cyA9IEFjcXVhaW50YW5jZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztFQUN0QkMsT0FBTyxFQUFFLFNBQVM7RUFDbEJDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxNQUFNLEVBQUM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBSEEsSUFJTUMsWUFBWTtFQUVqQixTQUFBQSxhQUFBLEVBQ0c7SUFBQUMsZUFBQSxPQUFBRCxZQUFBO0lBQ0ksSUFBSSxDQUFDRSxVQUFVLEdBQUcsU0FBUztJQUMzQixJQUFJLENBQUNDLHNDQUFzQyxHQUFHLElBQUksQ0FBQ0QsVUFBVSxHQUFDLHVDQUF1QztJQUNyRyxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJQywwQkFBMEI7SUFDN0MsSUFBSSxDQUFDQyxJQUFJLEVBQUU7RUFDZjtFQUFDQyxZQUFBLENBQUFQLFlBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsS0FBQSxFQUNBO01BQ0k7SUFBQTtFQUNIO0lBQUFFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLDhCQUE4QkMsRUFBRSxFQUFFQyxNQUFNLEVBQ3hDO01BQ0lDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ0hDLEdBQUcsRUFBRSxJQUFJLENBQUNaLHNDQUFzQyxHQUFDLEdBQUcsR0FBQ1EsRUFBRTtRQUN2REssTUFBTSxFQUFFLEtBQUs7UUFDYkMsSUFBSSxFQUFFO1VBQ0ZMLE1BQU0sRUFBRWhCLGlCQUFpQixDQUFDZ0IsTUFBTSxDQUFDTSxXQUFXLEVBQUU7UUFDbEQsQ0FBQztRQUNEQyxVQUFVLEVBQUUsU0FBQUEsV0FBQSxFQUFXLENBQ3ZCLENBQUM7UUFDREMsT0FBTyxFQUFFLFNBQUFBLFFBQVNDLFFBQVEsRUFBRTtVQUN4QjtRQUFBLENBQ0g7UUFDREMsS0FBSyxFQUFFLFNBQUFBLE1BQVNDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDNUM7VUFDQTtRQUFBO01BRVIsQ0FBQyxDQUFDO0lBQ047RUFBQztFQUFBLE9BQUF6QixZQUFBO0FBQUE7QUFBQSxJQUdDSywwQkFBMEI7RUFFNUIsU0FBQUEsMkJBQUEsRUFDQTtJQUFBSixlQUFBLE9BQUFJLDBCQUFBO0VBQ0E7RUFBQ0UsWUFBQSxDQUFBRiwwQkFBQTtJQUFBRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUIsa0JBQWtCZixFQUFFLEVBQ3BCO01BQ0k7SUFBQTtFQUNIO0VBQUEsT0FBQU4sMEJBQUE7QUFBQSxLQUdMO0FBQ0FzQixNQUFNLENBQUNDLE9BQU8sR0FBRzVCLFlBQVkifQ==\n//# sourceURL=webpack-internal:///./resources/js/acquaintance.js\n");

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