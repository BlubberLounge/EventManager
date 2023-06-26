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

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var formFeedbackCreate = $('#container-form-feedback-create');\n  var formFeedback = $('#form-feedback');\n  var inputFeedbackType = $('#input-feedback-type');\n  var btnFeedbackTypeList = $('.btn-feedback-type');\n  btnFeedbackTypeList.each(function (k, e) {\n    $(e).click(function (event) {\n      $('#container-feedback').hide();\n      formFeedbackCreate.show();\n      var feedbackType = $(e).val();\n      inputFeedbackType.val(feedbackType);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZm9ybUZlZWRiYWNrQ3JlYXRlIiwiZm9ybUZlZWRiYWNrIiwiaW5wdXRGZWVkYmFja1R5cGUiLCJidG5GZWVkYmFja1R5cGVMaXN0IiwiZWFjaCIsImsiLCJlIiwiY2xpY2siLCJldmVudCIsImhpZGUiLCJzaG93IiwiZmVlZGJhY2tUeXBlIiwidmFsIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mZWVkYmFjay5qcz9iZDYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuXG4kKGZ1bmN0aW9uKClcbntcbiAgICBsZXQgZm9ybUZlZWRiYWNrQ3JlYXRlID0gJCgnI2NvbnRhaW5lci1mb3JtLWZlZWRiYWNrLWNyZWF0ZScpO1xuICAgIGxldCBmb3JtRmVlZGJhY2sgPSAkKCcjZm9ybS1mZWVkYmFjaycpO1xuICAgIGxldCBpbnB1dEZlZWRiYWNrVHlwZSA9ICQoJyNpbnB1dC1mZWVkYmFjay10eXBlJyk7XG4gICAgbGV0IGJ0bkZlZWRiYWNrVHlwZUxpc3QgPSAkKCcuYnRuLWZlZWRiYWNrLXR5cGUnKTtcblxuICAgIGJ0bkZlZWRiYWNrVHlwZUxpc3QuZWFjaCgoaywgZSkgPT5cbiAgICB7XG4gICAgICAgICQoZSkuY2xpY2soZXZlbnQgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgJCgnI2NvbnRhaW5lci1mZWVkYmFjaycpLmhpZGUoKTtcbiAgICAgICAgICAgIGZvcm1GZWVkYmFja0NyZWF0ZS5zaG93KCk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkYmFja1R5cGUgPSAkKGUpLnZhbCgpO1xuICAgICAgICAgICAgaW5wdXRGZWVkYmFja1R5cGUudmFsKGZlZWRiYWNrVHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLENBQUMsQ0FBQyxZQUNGO0VBQ0ksSUFBSUMsa0JBQWtCLEdBQUdELENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQztFQUM3RCxJQUFJRSxZQUFZLEdBQUdGLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN0QyxJQUFJRyxpQkFBaUIsR0FBR0gsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0VBQ2pELElBQUlJLG1CQUFtQixHQUFHSixDQUFDLENBQUMsb0JBQW9CLENBQUM7RUFFakRJLG1CQUFtQixDQUFDQyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQzlCO0lBQ0lQLENBQUMsQ0FBQ08sQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFBQyxLQUFLLEVBQ2hCO01BQ0lULENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDVSxJQUFJLEVBQUU7TUFDL0JULGtCQUFrQixDQUFDVSxJQUFJLEVBQUU7TUFFekIsSUFBSUMsWUFBWSxHQUFHWixDQUFDLENBQUNPLENBQUMsQ0FBQyxDQUFDTSxHQUFHLEVBQUU7TUFDN0JWLGlCQUFpQixDQUFDVSxHQUFHLENBQUNELFlBQVksQ0FBQztJQUN2QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmVlZGJhY2suanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/feedback.js\n");

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