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

eval("/**\n * @author Maximilian Mewes\n *\n *\n */\n\n$(function () {\n  var e2 = $('#moveMe').clone().attr('id', 'moveMe2').css('opacity', 0).insertAfter(\"#moveMe\");\n  $('#moveMe').css('position', 'absolute');\n  $('#topNav').css('position', 'fixed');\n  var CONFIG = {\n    el: $('#moveMe'),\n    // startPosX: $('#moveMe2').offset().left,\n    // startPosY: $('#moveMe2').offset().top,\n    startPosX: 88,\n    startPosY: 12,\n    startFontSize: 1,\n    endPosX: 25,\n    // px\n    endPosY: 70,\n    // px\n    endFontSize: 1.25,\n    // rem\n    maxScroll: $('.scrollBox').height(),\n    // px\n    startImageWidth: 55,\n    endImageWidth: 35\n  };\n  init();\n  window.onscroll = function () {\n    updateNavBar();\n  };\n  function init() {\n    CONFIG.el.css('left', CONFIG.endPosX);\n    CONFIG.el.css('top', CONFIG.endPosY);\n    $('#moveMe img').css('width', CONFIG.startImageWidth);\n    CONFIG.el.css('font-size', CONFIG.endFontSize + 'rem');\n  }\n  function updateNavBar() {\n    if (CONFIG.maxScroll <= getYPos()) {\n      CONFIG.el.css('left', CONFIG.startPosX);\n      CONFIG.el.css('top', CONFIG.startPosY);\n      CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p) + 'rem');\n      $('#moveMe img').css('width', CONFIG.endImageWidth);\n      $('#navBrand').css('width', 60);\n      $('.update-profileimage').css('transform', 'scale(0)');\n      $('.fa-qrcode').css('transform', 'perspective(400px) rotate3d(1, 0, 0, 90deg)');\n      return;\n    }\n    var p = map(1, CONFIG.maxScroll, getYPos());\n    CONFIG.el.css('left', lerp(CONFIG.endPosX, CONFIG.startPosX, p));\n    CONFIG.el.css('top', lerp(CONFIG.endPosY, CONFIG.startPosY, p));\n    CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p) + 'rem');\n    $('#moveMe img').css('width', lerp(CONFIG.startImageWidth, CONFIG.endImageWidth, p));\n    $('#navBrand').css('width', lerp(75, 60, p));\n    $('.update-profileimage').css('transform', 'scale(' + (lerp(1, 0, p) > .35 ? 1 : 0) + ')');\n    $('.fa-qrcode').css('transform', lerp(1, 0, p) > .75 ? 'perspective(400px)' : 'perspective(400px) rotate3d(1, 0, 0, 90deg)');\n  }\n  function getYPos() {\n    return window.scrollY || window.pageYOffset;\n  }\n  function lerp(a, b, p) {\n    return (1 - p) * a + p * b;\n  }\n  function map(min, max, x) {\n    return (x - min) * 100 / (max - min) / 100;\n  }\n  function toRem(el) {\n    return el.replace('px', '') / 16;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2V0dGluZ3MuanMuanMiLCJuYW1lcyI6WyIkIiwiZTIiLCJjbG9uZSIsImF0dHIiLCJjc3MiLCJpbnNlcnRBZnRlciIsIkNPTkZJRyIsImVsIiwic3RhcnRQb3NYIiwic3RhcnRQb3NZIiwic3RhcnRGb250U2l6ZSIsImVuZFBvc1giLCJlbmRQb3NZIiwiZW5kRm9udFNpemUiLCJtYXhTY3JvbGwiLCJoZWlnaHQiLCJzdGFydEltYWdlV2lkdGgiLCJlbmRJbWFnZVdpZHRoIiwiaW5pdCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwidXBkYXRlTmF2QmFyIiwiZ2V0WVBvcyIsImxlcnAiLCJwIiwibWFwIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwiYSIsImIiLCJtaW4iLCJtYXgiLCJ4IiwidG9SZW0iLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2V0dGluZ3MuanM/NTNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWF4aW1pbGlhbiBNZXdlc1xuICpcbiAqXG4gKi9cblxuJChmdW5jdGlvbigpIHtcbiAgICBsZXQgZTIgPSAkKCcjbW92ZU1lJykuY2xvbmUoKS5hdHRyKCdpZCcsICdtb3ZlTWUyJykuY3NzKCdvcGFjaXR5JywgMCkuaW5zZXJ0QWZ0ZXIoXCIjbW92ZU1lXCIpO1xuICAgICQoJyNtb3ZlTWUnKS5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgJCgnI3RvcE5hdicpLmNzcygncG9zaXRpb24nLCAnZml4ZWQnKTtcblxuICAgIGNvbnN0IENPTkZJRyA9IHtcbiAgICAgICAgZWw6ICQoJyNtb3ZlTWUnKSxcbiAgICAgICAgLy8gc3RhcnRQb3NYOiAkKCcjbW92ZU1lMicpLm9mZnNldCgpLmxlZnQsXG4gICAgICAgIC8vIHN0YXJ0UG9zWTogJCgnI21vdmVNZTInKS5vZmZzZXQoKS50b3AsXG4gICAgICAgIHN0YXJ0UG9zWDogODgsXG4gICAgICAgIHN0YXJ0UG9zWTogMTIsXG4gICAgICAgIHN0YXJ0Rm9udFNpemU6IDEsXG4gICAgICAgIGVuZFBvc1g6IDI1LCAvLyBweFxuICAgICAgICBlbmRQb3NZOiA3MCwgLy8gcHhcbiAgICAgICAgZW5kRm9udFNpemU6IDEuMjUsIC8vIHJlbVxuICAgICAgICBtYXhTY3JvbGw6ICQoJy5zY3JvbGxCb3gnKS5oZWlnaHQoKSwgLy8gcHhcbiAgICAgICAgc3RhcnRJbWFnZVdpZHRoOiA1NSxcbiAgICAgICAgZW5kSW1hZ2VXaWR0aDogMzVcbiAgICB9XG5cbiAgICBpbml0KCk7XG5cbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZU5hdkJhcigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbml0KClcbiAgICB7XG4gICAgICAgIENPTkZJRy5lbC5jc3MoJ2xlZnQnLCBDT05GSUcuZW5kUG9zWCk7XG4gICAgICAgIENPTkZJRy5lbC5jc3MoJ3RvcCcsIENPTkZJRy5lbmRQb3NZKTtcbiAgICAgICAgJCgnI21vdmVNZSBpbWcnKS5jc3MoJ3dpZHRoJywgQ09ORklHLnN0YXJ0SW1hZ2VXaWR0aCk7XG4gICAgICAgIENPTkZJRy5lbC5jc3MoJ2ZvbnQtc2l6ZScsIENPTkZJRy5lbmRGb250U2l6ZSsncmVtJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2QmFyKClcbiAgICB7XG4gICAgICAgIGlmKENPTkZJRy5tYXhTY3JvbGwgPD0gZ2V0WVBvcygpKSB7XG4gICAgICAgICAgICBDT05GSUcuZWwuY3NzKCdsZWZ0JywgQ09ORklHLnN0YXJ0UG9zWCk7XG4gICAgICAgICAgICBDT05GSUcuZWwuY3NzKCd0b3AnLCBDT05GSUcuc3RhcnRQb3NZKTtcbiAgICAgICAgICAgIENPTkZJRy5lbC5jc3MoJ2ZvbnQtc2l6ZScsIGxlcnAoQ09ORklHLmVuZEZvbnRTaXplLCBDT05GSUcuc3RhcnRGb250U2l6ZSwgcCkrJ3JlbScpO1xuICAgICAgICAgICAgJCgnI21vdmVNZSBpbWcnKS5jc3MoJ3dpZHRoJywgQ09ORklHLmVuZEltYWdlV2lkdGgpO1xuICAgICAgICAgICAgJCgnI25hdkJyYW5kJykuY3NzKCd3aWR0aCcsIDYwKTtcblxuICAgICAgICAgICAgJCgnLnVwZGF0ZS1wcm9maWxlaW1hZ2UnKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgwKScpO1xuICAgICAgICAgICAgJCgnLmZhLXFyY29kZScpLmNzcygndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwID0gbWFwKDEsIENPTkZJRy5tYXhTY3JvbGwsIGdldFlQb3MoKSk7XG4gICAgICAgIENPTkZJRy5lbC5jc3MoJ2xlZnQnLCBsZXJwKENPTkZJRy5lbmRQb3NYLCBDT05GSUcuc3RhcnRQb3NYLCBwKSk7XG4gICAgICAgIENPTkZJRy5lbC5jc3MoJ3RvcCcsIGxlcnAoQ09ORklHLmVuZFBvc1ksIENPTkZJRy5zdGFydFBvc1ksIHApKTtcbiAgICAgICAgQ09ORklHLmVsLmNzcygnZm9udC1zaXplJywgbGVycChDT05GSUcuZW5kRm9udFNpemUsIENPTkZJRy5zdGFydEZvbnRTaXplLCBwKSsncmVtJyk7XG4gICAgICAgICQoJyNtb3ZlTWUgaW1nJykuY3NzKCd3aWR0aCcsIGxlcnAoQ09ORklHLnN0YXJ0SW1hZ2VXaWR0aCwgQ09ORklHLmVuZEltYWdlV2lkdGgsIHApKTtcbiAgICAgICAgJCgnI25hdkJyYW5kJykuY3NzKCd3aWR0aCcsIGxlcnAoNzUsIDYwLCBwKSk7XG5cbiAgICAgICAgJCgnLnVwZGF0ZS1wcm9maWxlaW1hZ2UnKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgnKyAobGVycCgxLCAwLCBwKSA+IC4zNSA/IDEgOiAwKSArJyknKTtcbiAgICAgICAgJCgnLmZhLXFyY29kZScpLmNzcygndHJhbnNmb3JtJywgbGVycCgxLCAwLCBwKSA+IC43NSA/ICdwZXJzcGVjdGl2ZSg0MDBweCknIDogJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRZUG9zKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCBwKSB7XG4gICAgICAgIHJldHVybiAoMSAtIHApICogYSArIHAgKiBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChtaW4sIG1heCwgeCkge1xuICAgICAgICByZXR1cm4gKCh4IC0gbWluKSAqIDEwMCAvIChtYXggLSBtaW4pKSAvIDEwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b1JlbShlbCkge1xuICAgICAgICByZXR1cm4gKGVsLnJlcGxhY2UoJ3B4JywgJycpIC8gMTYpO1xuICAgIH1cblxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLENBQUMsQ0FBQyxZQUFXO0VBQ1QsSUFBSUMsRUFBRSxHQUFHRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNFLEtBQUssRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsU0FBUyxDQUFDO0VBQzVGTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0VBQ3hDSixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO0VBRXJDLElBQU1FLE1BQU0sR0FBRztJQUNYQyxFQUFFLEVBQUVQLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEI7SUFDQTtJQUNBUSxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVB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\n//# sourceURL=webpack-internal:///./resources/js/settings.js\n");

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