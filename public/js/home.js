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

/***/ }),

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _acquaintance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acquaintance */ \"./resources/js/acquaintance.js\");\n/* harmony import */ var _acquaintance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_acquaintance__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var acquaintance = new (_acquaintance__WEBPACK_IMPORTED_MODULE_0___default())();\n  $('.btn-acquaintance-accept').each(function (k, e) {\n    var e = $(e); // convert to JQuery object\n    e.on('click', function (event) {\n      acquaintance.updateByReceiverOrTransmitter(e.closest('div.row').attr('data-bl-acquaintance-id'), 'accepted');\n    });\n  });\n  $('.btn-acquaintance-decline').each(function (k, e) {\n    var e = $(e); // convert to JQuery object\n    e.on('click', function (event) {\n      acquaintance.updateByReceiverOrTransmitter(e.closest('div.row').attr('data-bl-acquaintance-id'), 'denied');\n    });\n  });\n});\nvar button = document.getElementById(\"notifications\");\nbutton.addEventListener(\"click\", function () {\n  Notification.requestPermission().then(function (result) {\n    if (result === \"granted\") {\n      randomNotification();\n    }\n  });\n});\nfunction randomNotification() {\n  var notifTitle = \"asdasdsad\";\n  var notifBody = \"Created by me.\";\n  var options = {\n    body: notifBody\n  };\n  new Notification(notifTitle, options);\n  setTimeout(randomNotification, 30000);\n}\n\n// function sendNotification (data) {\n//     if (data == undefined || !data) { return false }\n//     var title = (data.title === undefined) ? 'Notification' : data.title\n//     var clickCallback = data.clickCallback\n//     var message = (data.message === undefined) ? 'null' : data.message\n//     var icon = (data.icon === undefined) ? 'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png' : data.icon\n//     var sendNotification = function (){\n//         var notification = new Notification(title, {\n//             icon: icon,\n//             body: message\n//         })\n//         if (clickCallback !== undefined) {\n//             notification.onclick = function () {\n//                 clickCallback()\n//                 notification.close()\n//             }\n//         }\n//     }\n\n//     if (!window.Notification) {\n//         return false\n//     } else {\n//         if (Notification.permission === 'default') {\n//             Notification.requestPermission(function (p) {\n//                 if (p !== 'denied') {\n//                     sendNotification()\n//                 }\n//             })\n//         } else {\n//             sendNotification()\n//         }\n//     }\n// }\n// sendNotification({\n//   title: 'New Notification',\n//   message: 'Your message goes here',\n//   icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',\n//   clickCallback: function () {\n//     alert('do something when clicked on notification');\n//   }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBRTFDQyxDQUFDLENBQUMsWUFDRjtFQUNJLElBQU1DLFlBQVksR0FBRyxJQUFJRixzREFBWTtFQUVyQ0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFDeEM7SUFDSSxJQUFJQSxDQUFDLEdBQUdKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkQSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUNwQjtNQUNJTCxZQUFZLENBQUNNLDZCQUE2QixDQUFDSCxDQUFDLENBQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsVUFBVSxDQUFDO0lBQ2hILENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGVCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUN6QztJQUNJLElBQUlBLENBQUMsR0FBR0osQ0FBQyxDQUFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2RBLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQ3BCO01BQ0lMLFlBQVksQ0FBQ00sNkJBQTZCLENBQUNILENBQUMsQ0FBQ0ksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFBRSxRQUFRLENBQUM7SUFDOUcsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBR0YsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDdkRGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDckNDLFlBQVksQ0FBQ0MsaUJBQWlCLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztJQUNoRCxJQUFJQSxNQUFNLEtBQUssU0FBUyxFQUFFO01BQ3hCQyxrQkFBa0IsRUFBRTtJQUN0QjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVNBLGtCQUFrQkEsQ0FBQSxFQUFHO0VBQzFCLElBQU1DLFVBQVUsR0FBRyxXQUFXO0VBQzlCLElBQU1DLFNBQVMsbUJBQW1CO0VBQ2xDLElBQU1DLE9BQU8sR0FBRztJQUNkQyxJQUFJLEVBQUVGO0VBQ1IsQ0FBQztFQUNELElBQUlOLFlBQVksQ0FBQ0ssVUFBVSxFQUFFRSxPQUFPLENBQUM7RUFDckNFLFVBQVUsQ0FBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO0FBQ3ZDOztBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ob21lLmpzPzI0MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIE1heGltaWxpYW4gTWV3ZXNcbiAqXG4gKlxuICovXG5pbXBvcnQgQWNxdWFpbnRhbmNlIGZyb20gXCIuL2FjcXVhaW50YW5jZVwiO1xuXG4kKGZ1bmN0aW9uKClcbntcbiAgICBjb25zdCBhY3F1YWludGFuY2UgPSBuZXcgQWNxdWFpbnRhbmNlO1xuXG4gICAgJCgnLmJ0bi1hY3F1YWludGFuY2UtYWNjZXB0JykuZWFjaCgoaywgZSkgPT5cbiAgICB7XG4gICAgICAgIHZhciBlID0gJChlKTsgLy8gY29udmVydCB0byBKUXVlcnkgb2JqZWN0XG4gICAgICAgIGUub24oJ2NsaWNrJywgKGV2ZW50KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBhY3F1YWludGFuY2UudXBkYXRlQnlSZWNlaXZlck9yVHJhbnNtaXR0ZXIoZS5jbG9zZXN0KCdkaXYucm93JykuYXR0cignZGF0YS1ibC1hY3F1YWludGFuY2UtaWQnKSwgJ2FjY2VwdGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmJ0bi1hY3F1YWludGFuY2UtZGVjbGluZScpLmVhY2goKGssIGUpID0+XG4gICAge1xuICAgICAgICB2YXIgZSA9ICQoZSk7IC8vIGNvbnZlcnQgdG8gSlF1ZXJ5IG9iamVjdFxuICAgICAgICBlLm9uKCdjbGljaycsIChldmVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWNxdWFpbnRhbmNlLnVwZGF0ZUJ5UmVjZWl2ZXJPclRyYW5zbWl0dGVyKGUuY2xvc2VzdCgnZGl2LnJvdycpLmF0dHIoJ2RhdGEtYmwtYWNxdWFpbnRhbmNlLWlkJyksICdkZW5pZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGlmaWNhdGlvbnNcIik7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgIHJhbmRvbU5vdGlmaWNhdGlvbigpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcmFuZG9tTm90aWZpY2F0aW9uKCkge1xuICAgIGNvbnN0IG5vdGlmVGl0bGUgPSBcImFzZGFzZHNhZFwiO1xuICAgIGNvbnN0IG5vdGlmQm9keSA9IGBDcmVhdGVkIGJ5IG1lLmA7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGJvZHk6IG5vdGlmQm9keSxcbiAgICB9O1xuICAgIG5ldyBOb3RpZmljYXRpb24obm90aWZUaXRsZSwgb3B0aW9ucyk7XG4gICAgc2V0VGltZW91dChyYW5kb21Ob3RpZmljYXRpb24sIDMwMDAwKTtcbiAgfVxuXG5cblxuLy8gZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbiAoZGF0YSkge1xuLy8gICAgIGlmIChkYXRhID09IHVuZGVmaW5lZCB8fCAhZGF0YSkgeyByZXR1cm4gZmFsc2UgfVxuLy8gICAgIHZhciB0aXRsZSA9IChkYXRhLnRpdGxlID09PSB1bmRlZmluZWQpID8gJ05vdGlmaWNhdGlvbicgOiBkYXRhLnRpdGxlXG4vLyAgICAgdmFyIGNsaWNrQ2FsbGJhY2sgPSBkYXRhLmNsaWNrQ2FsbGJhY2tcbi8vICAgICB2YXIgbWVzc2FnZSA9IChkYXRhLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCkgPyAnbnVsbCcgOiBkYXRhLm1lc3NhZ2Vcbi8vICAgICB2YXIgaWNvbiA9IChkYXRhLmljb24gPT09IHVuZGVmaW5lZCkgPyAnaHR0cHM6Ly9jZG4yLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbWl4ZWQtcm91bmRlZC1mbGF0LWljb24vNTEyL21lZ2FwaG9uZS02NC5wbmcnIDogZGF0YS5pY29uXG4vLyAgICAgdmFyIHNlbmROb3RpZmljYXRpb24gPSBmdW5jdGlvbiAoKXtcbi8vICAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbi8vICAgICAgICAgICAgIGljb246IGljb24sXG4vLyAgICAgICAgICAgICBib2R5OiBtZXNzYWdlXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIGlmIChjbGlja0NhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2soKVxuLy8gICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBpZiAoIXdpbmRvdy5Ob3RpZmljYXRpb24pIHtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZGVmYXVsdCcpIHtcbi8vICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihmdW5jdGlvbiAocCkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChwICE9PSAnZGVuaWVkJykge1xuLy8gICAgICAgICAgICAgICAgICAgICBzZW5kTm90aWZpY2F0aW9uKClcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbigpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyBzZW5kTm90aWZpY2F0aW9uKHtcbi8vICAgdGl0bGU6ICdOZXcgTm90aWZpY2F0aW9uJyxcbi8vICAgbWVzc2FnZTogJ1lvdXIgbWVzc2FnZSBnb2VzIGhlcmUnLFxuLy8gICBpY29uOidodHRwczovL2NkbjIuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9taXhlZC1yb3VuZGVkLWZsYXQtaWNvbi81MTIvbWVnYXBob25lLTY0LnBuZycsXG4vLyAgIGNsaWNrQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbi8vICAgICBhbGVydCgnZG8gc29tZXRoaW5nIHdoZW4gY2xpY2tlZCBvbiBub3RpZmljYXRpb24nKTtcbi8vICAgfVxuLy8gfSk7XG4iXSwibmFtZXMiOlsiQWNxdWFpbnRhbmNlIiwiJCIsImFjcXVhaW50YW5jZSIsImVhY2giLCJrIiwiZSIsIm9uIiwiZXZlbnQiLCJ1cGRhdGVCeVJlY2VpdmVyT3JUcmFuc21pdHRlciIsImNsb3Nlc3QiLCJhdHRyIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInRoZW4iLCJyZXN1bHQiLCJyYW5kb21Ob3RpZmljYXRpb24iLCJub3RpZlRpdGxlIiwibm90aWZCb2R5Iiwib3B0aW9ucyIsImJvZHkiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/home.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/home.js");
/******/ 	
/******/ })()
;