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

/***/ "./resources/js/settings.js":
/*!**********************************!*\
  !*** ./resources/js/settings.js ***!
  \**********************************/
/***/ (() => {

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var e2 = $('#moveMe').clone().attr('id', 'moveMe2').css('opacity', 0).insertAfter(\"#moveMe\");\n  $('#moveMe').css('position', 'absolute');\n  $('#topNav').css('position', 'fixed');\n  var CONFIG = {\n    el: $('#moveMe'),\n    startPosX: $('#moveMe2').offset().left,\n    startPosY: $('#moveMe2').offset().top,\n    startFontSize: toRem($('#moveMe').css('font-size')),\n    endPosX: 25,\n    // px\n    endPosY: 70,\n    // px\n    endFontSize: 1.2,\n    // rem\n    maxScroll: $('.scrollBox').height() // px\n  };\n\n  init();\n  window.onscroll = function () {\n    updateNavBar();\n  };\n  function init() {\n    CONFIG.el.css('left', CONFIG.endPosX);\n    CONFIG.el.css('top', CONFIG.endPosY);\n  }\n  function updateNavBar() {\n    if (CONFIG.maxScroll <= getYPos()) {\n      CONFIG.el.css('left', CONFIG.startPosX);\n      CONFIG.el.css('top', CONFIG.startPosY);\n      //CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p)+'rem');\n      $('#moveMe img').css('width', 30);\n      $('#navBrand').css('width', 60);\n      $('.update-profileimage').css('transform', 'scale(0)');\n      $('.fa-qrcode').css('transform', 'perspective(400px) rotate3d(1, 0, 0, 90deg)');\n      return;\n    }\n    var p = map(1, CONFIG.maxScroll, getYPos());\n    CONFIG.el.css('left', lerp(CONFIG.endPosX, CONFIG.startPosX, p));\n    CONFIG.el.css('top', lerp(CONFIG.endPosY, CONFIG.startPosY, p));\n    //CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p)+'rem');\n    $('#moveMe img').css('width', lerp(45, 30, p));\n    $('#navBrand').css('width', lerp(75, 60, p));\n    $('.update-profileimage').css('transform', 'scale(' + (lerp(1, 0, p) > .35 ? 1 : 0) + ')');\n    $('.fa-qrcode').css('transform', lerp(1, 0, p) > .75 ? 'perspective(400px)' : 'perspective(400px) rotate3d(1, 0, 0, 90deg)');\n  }\n  function getYPos() {\n    return window.scrollY || window.pageYOffset;\n  }\n  function lerp(a, b, p) {\n    return (1 - p) * a + p * b;\n  }\n  function map(min, max, x) {\n    return (x - min) * 100 / (max - min) / 100;\n  }\n  function toRem(el) {\n    return el.replace('px', '') / 16;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZTIiLCJjbG9uZSIsImF0dHIiLCJjc3MiLCJpbnNlcnRBZnRlciIsIkNPTkZJRyIsImVsIiwic3RhcnRQb3NYIiwib2Zmc2V0IiwibGVmdCIsInN0YXJ0UG9zWSIsInRvcCIsInN0YXJ0Rm9udFNpemUiLCJ0b1JlbSIsImVuZFBvc1giLCJlbmRQb3NZIiwiZW5kRm9udFNpemUiLCJtYXhTY3JvbGwiLCJoZWlnaHQiLCJpbml0Iiwid2luZG93Iiwib25zY3JvbGwiLCJ1cGRhdGVOYXZCYXIiLCJnZXRZUG9zIiwicCIsIm1hcCIsImxlcnAiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhIiwiYiIsIm1pbiIsIm1heCIsIngiLCJyZXBsYWNlIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zZXR0aW5ncy5qcz81M2VkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNYXhpbWlsaWFuIE1ld2VzXG4gKlxuICpcbiAqL1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGxldCBlMiA9ICQoJyNtb3ZlTWUnKS5jbG9uZSgpLmF0dHIoJ2lkJywgJ21vdmVNZTInKS5jc3MoJ29wYWNpdHknLCAwKS5pbnNlcnRBZnRlcihcIiNtb3ZlTWVcIik7XG4gICAgJCgnI21vdmVNZScpLmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAkKCcjdG9wTmF2JykuY3NzKCdwb3NpdGlvbicsICdmaXhlZCcpO1xuXG4gICAgY29uc3QgQ09ORklHID0ge1xuICAgICAgZWw6ICQoJyNtb3ZlTWUnKSxcbiAgICAgIHN0YXJ0UG9zWDogJCgnI21vdmVNZTInKS5vZmZzZXQoKS5sZWZ0LFxuICAgICAgc3RhcnRQb3NZOiAkKCcjbW92ZU1lMicpLm9mZnNldCgpLnRvcCxcbiAgICAgIHN0YXJ0Rm9udFNpemU6IHRvUmVtKCQoJyNtb3ZlTWUnKS5jc3MoJ2ZvbnQtc2l6ZScpKSxcbiAgICAgIGVuZFBvc1g6IDI1LCAvLyBweFxuICAgICAgZW5kUG9zWTogNzAsIC8vIHB4XG4gICAgICBlbmRGb250U2l6ZTogMS4yLCAvLyByZW1cbiAgICAgIG1heFNjcm9sbDogJCgnLnNjcm9sbEJveCcpLmhlaWdodCgpIC8vIHB4XG4gICAgfVxuXG4gICAgaW5pdCgpO1xuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVOYXZCYXIoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgQ09ORklHLmVsLmNzcygnbGVmdCcsIENPTkZJRy5lbmRQb3NYKTtcbiAgICAgICAgQ09ORklHLmVsLmNzcygndG9wJywgQ09ORklHLmVuZFBvc1kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdkJhcigpIHtcbiAgICAgICAgaWYoQ09ORklHLm1heFNjcm9sbCA8PSBnZXRZUG9zKCkpIHtcbiAgICAgICAgICAgIENPTkZJRy5lbC5jc3MoJ2xlZnQnLCBDT05GSUcuc3RhcnRQb3NYKTtcbiAgICAgICAgICAgIENPTkZJRy5lbC5jc3MoJ3RvcCcsIENPTkZJRy5zdGFydFBvc1kpO1xuICAgICAgICAgICAgLy9DT05GSUcuZWwuY3NzKCdmb250LXNpemUnLCBsZXJwKENPTkZJRy5lbmRGb250U2l6ZSwgQ09ORklHLnN0YXJ0Rm9udFNpemUsIHApKydyZW0nKTtcbiAgICAgICAgICAgICQoJyNtb3ZlTWUgaW1nJykuY3NzKCd3aWR0aCcsIDMwKTtcbiAgICAgICAgICAgICQoJyNuYXZCcmFuZCcpLmNzcygnd2lkdGgnLCA2MCk7XG5cbiAgICAgICAgICAgICQoJy51cGRhdGUtcHJvZmlsZWltYWdlJykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMCknKTtcbiAgICAgICAgICAgICQoJy5mYS1xcmNvZGUnKS5jc3MoJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcCA9IG1hcCgxLCBDT05GSUcubWF4U2Nyb2xsLCBnZXRZUG9zKCkpO1xuICAgICAgICBDT05GSUcuZWwuY3NzKCdsZWZ0JywgbGVycChDT05GSUcuZW5kUG9zWCwgQ09ORklHLnN0YXJ0UG9zWCwgcCkpO1xuICAgICAgICBDT05GSUcuZWwuY3NzKCd0b3AnLCBsZXJwKENPTkZJRy5lbmRQb3NZLCBDT05GSUcuc3RhcnRQb3NZLCBwKSk7XG4gICAgICAgIC8vQ09ORklHLmVsLmNzcygnZm9udC1zaXplJywgbGVycChDT05GSUcuZW5kRm9udFNpemUsIENPTkZJRy5zdGFydEZvbnRTaXplLCBwKSsncmVtJyk7XG4gICAgICAgICQoJyNtb3ZlTWUgaW1nJykuY3NzKCd3aWR0aCcsIGxlcnAoNDUsIDMwLCBwKSk7XG4gICAgICAgICQoJyNuYXZCcmFuZCcpLmNzcygnd2lkdGgnLCBsZXJwKDc1LCA2MCwgcCkpO1xuXG4gICAgICAgICQoJy51cGRhdGUtcHJvZmlsZWltYWdlJykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJysgKGxlcnAoMSwgMCwgcCkgPiAuMzUgPyAxIDogMCkgKycpJyk7XG4gICAgICAgICQoJy5mYS1xcmNvZGUnKS5jc3MoJ3RyYW5zZm9ybScsIGxlcnAoMSwgMCwgcCkgPiAuNzUgPyAncGVyc3BlY3RpdmUoNDAwcHgpJyA6ICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0WVBvcygpe1xuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgcCkge1xuICAgICAgICByZXR1cm4gKDEgLSBwKSAqIGEgKyBwICogYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAobWluLCBtYXgsIHgpIHtcbiAgICAgICAgcmV0dXJuICgoeCAtIG1pbikgKiAxMDAgLyAobWF4IC0gbWluKSkgLyAxMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9SZW0oZWwpIHtcbiAgICAgICAgcmV0dXJuIChlbC5yZXBsYWNlKCdweCcsICcnKSAvIDE2KTtcbiAgICB9XG5cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxDQUFDLENBQUMsWUFBVztFQUNULElBQUlDLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDRSxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFNBQVMsQ0FBQztFQUM1RkwsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztFQUN4Q0osQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztFQUVyQyxJQUFNRSxNQUFNLEdBQUc7SUFDYkMsRUFBRSxFQUFFUCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCUSxTQUFTLEVBQUVSLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ1MsTUFBTSxFQUFFLENBQUNDLElBQUk7SUFDdENDLFNBQVMsRUFBRVgsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDUyxNQUFNLEVBQUUsQ0FBQ0csR0FBRztJQUNyQ0MsYUFBYSxFQUFFQyxLQUFLLENBQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25EVyxPQUFPLEVBQUUsRUFBRTtJQUFFO0lBQ2JDLE9BQU8sRUFBRSxFQUFFO0lBQUU7SUFDYkMsV0FBVyxFQUFFLEdBQUc7SUFBRTtJQUNsQkMsU0FBUyxFQUFFbEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDbUIsTUFBTSxFQUFFLENBQUM7RUFDdEMsQ0FBQzs7RUFFREMsSUFBSSxFQUFFO0VBRU5DLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFlBQVk7SUFDMUJDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBRUQsU0FBU0gsSUFBSUEsQ0FBQSxFQUFHO0lBQ1pkLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDSCxHQUFHLENBQUMsTUFBTSxFQUFFRSxNQUFNLENBQUNTLE9BQU8sQ0FBQztJQUNyQ1QsTUFBTSxDQUFDQyxFQUFFLENBQUNILEdBQUcsQ0FBQyxLQUFLLEVBQUVFLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDO0VBQ3hDO0VBRUEsU0FBU08sWUFBWUEsQ0FBQSxFQUFHO0lBQ3BCLElBQUdqQixNQUFNLENBQUNZLFNBQVMsSUFBSU0sT0FBTyxFQUFFLEVBQUU7TUFDOUJsQixNQUFNLENBQUNDLEVBQUUsQ0FBQ0gsR0FBRyxDQUFDLE1BQU0sRUFBRUUsTUFBTSxDQUFDRSxTQUFTLENBQUM7TUFDdkNGLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDSCxHQUFHLENBQUMsS0FBSyxFQUFFRSxNQUFNLENBQUNLLFNBQVMsQ0FBQztNQUN0QztNQUNBWCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO01BQ2pDSixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO01BRS9CSixDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7TUFDdERKLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsRUFBRSw2Q0FBNkMsQ0FBQztNQUMvRTtJQUNKO0lBRUEsSUFBSXFCLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUMsRUFBRXBCLE1BQU0sQ0FBQ1ksU0FBUyxFQUFFTSxPQUFPLEVBQUUsQ0FBQztJQUMzQ2xCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDSCxHQUFHLENBQUMsTUFBTSxFQUFFdUIsSUFBSSxDQUFDckIsTUFBTSxDQUFDUyxPQUFPLEVBQUVULE1BQU0sQ0FBQ0UsU0FBUyxFQUFFaUIsQ0FBQyxDQUFDLENBQUM7SUFDaEVuQixNQUFNLENBQUNDLEVBQUUsQ0FBQ0gsR0FBRyxDQUFDLEtBQUssRUFBRXVCLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ1UsT0FBTyxFQUFFVixNQUFNLENBQUNLLFNBQVMsRUFBRWMsQ0FBQyxDQUFDLENBQUM7SUFDL0Q7SUFDQXpCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sRUFBRXVCLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFRixDQUFDLENBQUMsQ0FBQztJQUM5Q3pCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sRUFBRXVCLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFRixDQUFDLENBQUMsQ0FBQztJQUU1Q3pCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDSSxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsSUFBR3VCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFRixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQztJQUN4RnpCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsRUFBRXVCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFRixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsNkNBQTZDLENBQUM7RUFDaEk7RUFFQSxTQUFTRCxPQUFPQSxDQUFBLEVBQUU7SUFDZCxPQUFPSCxNQUFNLENBQUNPLE9BQU8sSUFBSVAsTUFBTSxDQUFDUSxXQUFXO0VBQy9DO0VBRUEsU0FBU0YsSUFBSUEsQ0FBQ0csQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRTtJQUNuQixPQUFPLENBQUMsQ0FBQyxHQUFHQSxDQUFDLElBQUlLLENBQUMsR0FBR0wsQ0FBQyxHQUFHTSxDQUFDO0VBQzlCO0VBRUEsU0FBU0wsR0FBR0EsQ0FBQ00sR0FBRyxFQUFFQyxHQUFHLEVBQUVDLENBQUMsRUFBRTtJQUN0QixPQUFRLENBQUNBLENBQUMsR0FBR0YsR0FBRyxJQUFJLEdBQUcsSUFBSUMsR0FBRyxHQUFHRCxHQUFHLENBQUMsR0FBSSxHQUFHO0VBQ2hEO0VBRUEsU0FBU2xCLEtBQUtBLENBQUNQLEVBQUUsRUFBRTtJQUNmLE9BQVFBLEVBQUUsQ0FBQzRCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtFQUNyQztBQUVKLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9zZXR0aW5ncy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/settings.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/settings.js"]();
/******/ 	
/******/ })()
;