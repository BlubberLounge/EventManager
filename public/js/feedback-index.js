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

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var btnFeedbackRatingList = $('.btn-feedback-rating');\n  var btnFeedbackHeaderList = $('button[data-bl-feedback-status=\"new\"]');\n  btnFeedbackRatingList.each(function (k, e) {\n    $(e).click(function (event) {\n      var feedbackID = $(e).closest('.accordion-item').data('bl-feedback-id');\n      $.ajax({\n        url: '/user/feedback/' + feedbackID,\n        method: 'PUT',\n        headers: {\n          'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n        },\n        data: {\n          status: $(e).data('bl-feedback-status')\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n          // most cheap\n          window.location.reload();\n        },\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n          // TODO\n        }\n      });\n    });\n  });\n  btnFeedbackHeaderList.each(function (k, e) {\n    var feedbackID = $(e).closest('.accordion-item').data('bl-feedback-id');\n    $(e).click(function (event) {\n      $.ajax({\n        url: '/user/feedback/' + feedbackID,\n        method: 'PUT',\n        headers: {\n          'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n        },\n        data: {\n          status: 'seen'\n        },\n        beforeSend: function beforeSend() {},\n        success: function success(response) {\n          // console.log(response);\n          $(e).closest('.feedback-seen-icon').show();\n          $(e).off('click'); // remove event listener\n        },\n\n        error: function error(jqXHR, textStatus, errorThrown) {\n          // handle the error case\n          // console.log(errorThrown);\n          // TODO\n        }\n      });\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmVlZGJhY2staW5kZXguanMuanMiLCJuYW1lcyI6WyIkIiwiYnRuRmVlZGJhY2tSYXRpbmdMaXN0IiwiYnRuRmVlZGJhY2tIZWFkZXJMaXN0IiwiZWFjaCIsImsiLCJlIiwiY2xpY2siLCJldmVudCIsImZlZWRiYWNrSUQiLCJjbG9zZXN0IiwiZGF0YSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYXR0ciIsInN0YXR1cyIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJzaG93Iiwib2ZmIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmVlZGJhY2staW5kZXguanM/MTBkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWF4aW1pbGlhbiBNZXdlc1xuICpcbiAqXG4gKi9cblxuJChmdW5jdGlvbigpXG57XG4gICAgbGV0IGJ0bkZlZWRiYWNrUmF0aW5nTGlzdCA9ICQoJy5idG4tZmVlZGJhY2stcmF0aW5nJyk7XG4gICAgbGV0IGJ0bkZlZWRiYWNrSGVhZGVyTGlzdCA9ICQoJ2J1dHRvbltkYXRhLWJsLWZlZWRiYWNrLXN0YXR1cz1cIm5ld1wiXScpO1xuXG4gICAgYnRuRmVlZGJhY2tSYXRpbmdMaXN0LmVhY2goKGssIGUpID0+XG4gICAge1xuICAgICAgICAkKGUpLmNsaWNrKGV2ZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmZWVkYmFja0lEID0gJChlKS5jbG9zZXN0KCcuYWNjb3JkaW9uLWl0ZW0nKS5kYXRhKCdibC1mZWVkYmFjay1pZCcpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy91c2VyL2ZlZWRiYWNrLycrZmVlZGJhY2tJRCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJChlKS5kYXRhKCdibC1mZWVkYmFjay1zdGF0dXMnKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBtb3N0IGNoZWFwXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ0bkZlZWRiYWNrSGVhZGVyTGlzdC5lYWNoKChrLCBlKSA9PlxuICAgIHtcbiAgICAgICAgbGV0IGZlZWRiYWNrSUQgPSAkKGUpLmNsb3Nlc3QoJy5hY2NvcmRpb24taXRlbScpLmRhdGEoJ2JsLWZlZWRiYWNrLWlkJyk7XG5cbiAgICAgICAgJChlKS5jbGljayhldmVudCA9PlxuICAgICAgICB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy91c2VyL2ZlZWRiYWNrLycrZmVlZGJhY2tJRCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3NlZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoZSkuY2xvc2VzdCgnLmZlZWRiYWNrLXNlZW4taWNvbicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJChlKS5vZmYoJ2NsaWNrJyk7IC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGVycm9yIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfVxuICAg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\n//# sourceURL=webpack-internal:///./resources/js/feedback-index.js\n");

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