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

/***/ "./resources/js/feedback.js":
/*!**********************************!*\
  !*** ./resources/js/feedback.js ***!
  \**********************************/
/***/ (() => {

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var formFeedbackCreate = $('#container-form-feedback-create');\n  var formFeedback = $('#form-feedback');\n  var inputFeedbackType = $('#input-feedback-type');\n  var btnFeedbackTypeList = $('.btn-feedback-type');\n  btnFeedbackTypeList.each(function (k, e) {\n    $(e).click(function (event) {\n      $('#container-feedback').hide();\n      formFeedbackCreate.show();\n      var feedbackType = $(e).val();\n      inputFeedbackType.val(feedbackType);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmVlZGJhY2suanMuanMiLCJuYW1lcyI6WyIkIiwiZm9ybUZlZWRiYWNrQ3JlYXRlIiwiZm9ybUZlZWRiYWNrIiwiaW5wdXRGZWVkYmFja1R5cGUiLCJidG5GZWVkYmFja1R5cGVMaXN0IiwiZWFjaCIsImsiLCJlIiwiY2xpY2siLCJldmVudCIsImhpZGUiLCJzaG93IiwiZmVlZGJhY2tUeXBlIiwidmFsIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmVlZGJhY2suanM/YmQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWF4aW1pbGlhbiBNZXdlc1xuICpcbiAqXG4gKi9cblxuJChmdW5jdGlvbigpXG57XG4gICAgbGV0IGZvcm1GZWVkYmFja0NyZWF0ZSA9ICQoJyNjb250YWluZXItZm9ybS1mZWVkYmFjay1jcmVhdGUnKTtcbiAgICBsZXQgZm9ybUZlZWRiYWNrID0gJCgnI2Zvcm0tZmVlZGJhY2snKTtcbiAgICBsZXQgaW5wdXRGZWVkYmFja1R5cGUgPSAkKCcjaW5wdXQtZmVlZGJhY2stdHlwZScpO1xuICAgIGxldCBidG5GZWVkYmFja1R5cGVMaXN0ID0gJCgnLmJ0bi1mZWVkYmFjay10eXBlJyk7XG5cbiAgICBidG5GZWVkYmFja1R5cGVMaXN0LmVhY2goKGssIGUpID0+XG4gICAge1xuICAgICAgICAkKGUpLmNsaWNrKGV2ZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJyNjb250YWluZXItZmVlZGJhY2snKS5oaWRlKCk7XG4gICAgICAgICAgICBmb3JtRmVlZGJhY2tDcmVhdGUuc2hvdygpO1xuXG4gICAgICAgICAgICBsZXQgZmVlZGJhY2tUeXBlID0gJChlKS52YWwoKTtcbiAgICAgICAgICAgIGlucHV0RmVlZGJhY2tUeXBlLnZhbChmZWVkYmFja1R5cGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxDQUFDLENBQUMsWUFDRjtFQUNJLElBQUlDLGtCQUFrQixHQUFHRCxDQUFDLENBQUMsaUNBQWlDLENBQUM7RUFDN0QsSUFBSUUsWUFBWSxHQUFHRixDQUFDLENBQUMsZ0JBQWdCLENBQUM7RUFDdEMsSUFBSUcsaUJBQWlCLEdBQUdILENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztFQUNqRCxJQUFJSSxtQkFBbUIsR0FBR0osQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0VBRWpESSxtQkFBbUIsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUM5QjtJQUNJUCxDQUFDLENBQUNPLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBQUMsS0FBSyxFQUNoQjtNQUNJVCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ1UsSUFBSSxFQUFFO01BQy9CVCxrQkFBa0IsQ0FBQ1UsSUFBSSxFQUFFO01BRXpCLElBQUlDLFlBQVksR0FBR1osQ0FBQyxDQUFDTyxDQUFDLENBQUMsQ0FBQ00sR0FBRyxFQUFFO01BQzdCVixpQkFBaUIsQ0FBQ1UsR0FBRyxDQUFDRCxZQUFZLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./resources/js/feedback.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/feedback.js"]();
/******/ 	
/******/ })()
;