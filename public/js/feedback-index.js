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

/***/ "./resources/js/feedback-index.js":
/*!****************************************!*\
  !*** ./resources/js/feedback-index.js ***!
  \****************************************/
/***/ (() => {

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var btnFeedbackRatingList = $('.btn-feedback-rating');\n  btnFeedbackRatingList.each(function (k, e) {\n    $(e).click(function (event) {\n      var feedbackID = $(e).closest('div').data('bl-feedback-id');\n      console.log(feedbackID);\n      $.ajax({\n        url: '/user/feedback/' + feedbackID,\n        method: 'PUT',\n        headers: {\n          'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n        },\n        data: {\n          status: $(e).data('bl-feedback-status')\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n          // most cheap\n          window.location.reload();\n        },\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n          // TODO\n        }\n      });\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiYnRuRmVlZGJhY2tSYXRpbmdMaXN0IiwiZWFjaCIsImsiLCJlIiwiY2xpY2siLCJldmVudCIsImZlZWRiYWNrSUQiLCJjbG9zZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImF0dHIiLCJzdGF0dXMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mZWVkYmFjay1pbmRleC5qcz8xMGQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuXG4kKGZ1bmN0aW9uKClcbntcbiAgICBsZXQgYnRuRmVlZGJhY2tSYXRpbmdMaXN0ID0gJCgnLmJ0bi1mZWVkYmFjay1yYXRpbmcnKTtcblxuICAgIGJ0bkZlZWRiYWNrUmF0aW5nTGlzdC5lYWNoKChrLCBlKSA9PlxuICAgIHtcbiAgICAgICAgJChlKS5jbGljayhldmVudCA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2tJRCA9ICQoZSkuY2xvc2VzdCgnZGl2JykuZGF0YSgnYmwtZmVlZGJhY2staWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZlZWRiYWNrSUQpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXNlci9mZWVkYmFjay8nK2ZlZWRiYWNrSUQsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICQoZSkuZGF0YSgnYmwtZmVlZGJhY2stc3RhdHVzJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbW9zdCBjaGVhcFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsQ0FBQyxDQUFDLFlBQ0Y7RUFDSSxJQUFJQyxxQkFBcUIsR0FBR0QsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0VBRXJEQyxxQkFBcUIsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUNoQztJQUNJSixDQUFDLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBQUMsS0FBSyxFQUNoQjtNQUNJLElBQUlDLFVBQVUsR0FBR1AsQ0FBQyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7TUFDM0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixVQUFVLENBQUM7TUFDdkJQLENBQUMsQ0FBQ1ksSUFBSSxDQUFDO1FBQ0hDLEdBQUcsRUFBRSxpQkFBaUIsR0FBQ04sVUFBVTtRQUNqQ08sTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1VBQ0wsY0FBYyxFQUFFZixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxTQUFTO1FBQy9ELENBQUM7UUFDRFAsSUFBSSxFQUFFO1VBQ0ZRLE1BQU0sRUFBRWpCLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQyxvQkFBb0I7UUFDMUMsQ0FBQztRQUNEUyxVQUFVLEVBQUUsU0FBQUEsV0FBQSxFQUFXLENBQ3ZCLENBQUM7UUFDREMsT0FBTyxFQUFFLFNBQUFBLFFBQVNDLFFBQVEsRUFBRTtVQUN4QjtVQUNBO1VBQ0FDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEVBQUU7UUFDNUIsQ0FBQztRQUNEQyxLQUFLLEVBQUUsU0FBQUEsTUFBU0MsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUM1QztVQUNBO1VBQ0E7UUFBQTtNQUVSLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9mZWVkYmFjay1pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/feedback-index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/feedback-index.js"]();
/******/ 	
/******/ })()
;