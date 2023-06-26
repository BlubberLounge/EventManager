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

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var btnFeedbackRatingList = $('.btn-feedback-rating');\n  btnFeedbackRatingList.each(function (k, e) {\n    $(e).click(function (event) {\n      var feedbackID = $(e).closest('div').data('bl-feedback-id');\n      console.log(feedbackID);\n      $.ajax({\n        url: '/user/feedback/' + feedbackID,\n        method: 'PUT',\n        headers: {\n          'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n        },\n        data: {\n          status: $(e).data('bl-feedback-status')\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n          // most cheap\n          window.location.reload();\n        },\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n          // TODO\n        }\n      });\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmVlZGJhY2staW5kZXguanMuanMiLCJuYW1lcyI6WyIkIiwiYnRuRmVlZGJhY2tSYXRpbmdMaXN0IiwiZWFjaCIsImsiLCJlIiwiY2xpY2siLCJldmVudCIsImZlZWRiYWNrSUQiLCJjbG9zZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImF0dHIiLCJzdGF0dXMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmVlZGJhY2staW5kZXguanM/MTBkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWF4aW1pbGlhbiBNZXdlc1xuICpcbiAqXG4gKi9cblxuJChmdW5jdGlvbigpXG57XG4gICAgbGV0IGJ0bkZlZWRiYWNrUmF0aW5nTGlzdCA9ICQoJy5idG4tZmVlZGJhY2stcmF0aW5nJyk7XG5cbiAgICBidG5GZWVkYmFja1JhdGluZ0xpc3QuZWFjaCgoaywgZSkgPT5cbiAgICB7XG4gICAgICAgICQoZSkuY2xpY2soZXZlbnQgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZlZWRiYWNrSUQgPSAkKGUpLmNsb3Nlc3QoJ2RpdicpLmRhdGEoJ2JsLWZlZWRiYWNrLWlkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmZWVkYmFja0lEKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VzZXIvZmVlZGJhY2svJytmZWVkYmFja0lELFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAkKGUpLmRhdGEoJ2JsLWZlZWRiYWNrLXN0YXR1cycpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vc3QgY2hlYXBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGVycm9yIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLENBQUMsQ0FBQyxZQUNGO0VBQ0ksSUFBSUMscUJBQXFCLEdBQUdELENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztFQUVyREMscUJBQXFCLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFDaEM7SUFDSUosQ0FBQyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQUFDLEtBQUssRUFDaEI7TUFDSSxJQUFJQyxVQUFVLEdBQUdQLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDO01BQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osVUFBVSxDQUFDO01BQ3ZCUCxDQUFDLENBQUNZLElBQUksQ0FBQztRQUNIQyxHQUFHLEVBQUUsaUJBQWlCLEdBQUNOLFVBQVU7UUFDakNPLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtVQUNMLGNBQWMsRUFBRWYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNnQixJQUFJLENBQUMsU0FBUztRQUMvRCxDQUFDO1FBQ0RQLElBQUksRUFBRTtVQUNGUSxNQUFNLEVBQUVqQixDQUFDLENBQUNJLENBQUMsQ0FBQyxDQUFDSyxJQUFJLENBQUMsb0JBQW9CO1FBQzFDLENBQUM7UUFDRFMsVUFBVSxFQUFFLFNBQUFBLFdBQUEsRUFBVyxDQUN2QixDQUFDO1FBQ0RDLE9BQU8sRUFBRSxTQUFBQSxRQUFTQyxRQUFRLEVBQUU7VUFDeEI7VUFDQTtVQUNBQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQzVCLENBQUM7UUFDREMsS0FBSyxFQUFFLFNBQUFBLE1BQVNDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDNUM7VUFDQTtVQUNBO1FBQUE7TUFFUixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./resources/js/feedback-index.js\n");

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