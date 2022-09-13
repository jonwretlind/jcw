webpackHotUpdate("jcw",{

/***/ "./packages/twentytwenty-theme/src/js/jcw.js":
/*!***************************************************!*\
  !*** ./packages/twentytwenty-theme/src/js/jcw.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\n/*  CUSTOM JAVASCRIPT LOADER */const JCW=({state})=>{react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(()=>{jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function(){console.log(\"jcw.js jQuery loaded.\");// Home Page Animations\nvar wordList=[\"winners\",\"makers\",\"doers\",\"lovers\",\"carpenters\",\"roofers\",\"painters\",\"builders\",\"plumbers\",\"janitors\",\"doctors\",\"lawyers\",\"rock-n-rollers\",\"bakers\",\"gamers\",\"developers\",\"realtors\",\"contractors\",\"movers\",\"shakers\",\"humans\"];var head=jquery__WEBPACK_IMPORTED_MODULE_1___default()('h1[class*=\"HomePageTitle\"]');var word=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#HomeAnimatedHead');var mark=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#Mark');var n=-1;const headAnim=setInterval(function(){n++;if(n>=wordList.length-1){word.addClass('last');mark.addClass('period').text('.');}if(n>=wordList.length){clearInterval(headAnim);return true;}var w=wordList[n];word.hide();word.html(\"<div>\"+w+\"</div>\");if(n>=wordList.length-1){word.fadeIn(3000);}else{word.fadeIn();}},800);function addPageType(){// Add page type to main element\nif(jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('archive');}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('page');}jquery__WEBPACK_IMPORTED_MODULE_1___default()('main').ready(function(){if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isportfolio')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('portfolio');}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isblog')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('blog');}});};addPageType();function addArrowAction(){//for portfolio and sliders\nvar idx=0;var numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.right').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx++;if(idx>=numArticles)idx=0;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.left').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx--;if(idx<=0)idx=numArticles-1;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});};addArrowAction();// set the first blog or portfolio item to active\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-0').addClass('active');//portfolio slider observer\nlet observer=new MutationObserver(checkArticles=>{var idx=0,numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');};jquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});addPageType();addArrowAction();console.log(\"Number of Articles: \",numArticles);});observer.observe(main,{childList:true,characterDataOldValue:true// pass old data to callback\n});// Scroll effects\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).scroll(function(){if(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop()>80){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').addClass(\"scroll\");}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').removeClass(\"scroll\");};});if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').hasClass('portfolio')){'#site-header'.addClass(\"scroll\");}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').removeClass(\"scroll\");};});//document.ready\njquery__WEBPACK_IMPORTED_MODULE_1___default()(window).ready(function(){//stuff to do when everything is loaded\njquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader *').ready(function(){setTimeout(function(){console.log(\"Page Loaded!\");jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader').fadeOut();},1000);});// PAGE adjustments and modifications\njquery__WEBPACK_IMPORTED_MODULE_1___default()('div[class*=\"EntryContent\"]').addClass('entry-content');});//window.ready\n});return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{});};/* harmony default export */ __webpack_exports__[\"default\"] = (JCW);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2pzL2pjdy5qcz8zOGZkIl0sIm5hbWVzIjpbIkpDVyIsInN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkTGlzdCIsImhlYWQiLCJ3b3JkIiwibWFyayIsIm4iLCJoZWFkQW5pbSIsInNldEludGVydmFsIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiY2xlYXJJbnRlcnZhbCIsInciLCJoaWRlIiwiaHRtbCIsImZhZGVJbiIsImFkZFBhZ2VUeXBlIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiYWRkQXJyb3dBY3Rpb24iLCJpZHgiLCJudW1BcnRpY2xlcyIsImNsaWNrIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiY2hlY2tBcnRpY2xlcyIsIm9ic2VydmUiLCJtYWluIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZmFkZU91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSUEsS0FBTUEsSUFBRyxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FDekJDLDRDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBTSxDQUNwQkMsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsVUFBVyxDQUMzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFFQTtBQUNBLEdBQUlDLFNBQVEsQ0FBRyxDQUNiLFNBRGEsQ0FFYixRQUZhLENBR2IsT0FIYSxDQUliLFFBSmEsQ0FLYixZQUxhLENBTWIsU0FOYSxDQU9iLFVBUGEsQ0FRYixVQVJhLENBU2IsVUFUYSxDQVViLFVBVmEsQ0FXYixTQVhhLENBWWIs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Q0FHTixJQUhNLENBQVYsQ0FJRCxDQUxELEVBTUE7QUFDQXZDLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2EsUUFBaEMsQ0FBeUMsZUFBekMsRUFDRCxDQWJILEVBYUs7QUFFTixDQXZKQyxFQXlKQSxNQUNFLCtJQURGLENBS0QsQ0EvSkQsQ0FpS2VqQixrRUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvanMvamN3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIENVU1RPTSBKQVZBU0NSSVBUIExPQURFUiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCBKQ1cgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImpjdy5qcyBqUXVlcnkgbG9hZGVkLlwiKTtcblxuICAgICAgLy8gSG9tZSBQYWdlIEFuaW1hdGlvbnNcbiAgICAgIHZhciB3b3JkTGlzdCA9IFtcbiAgICAgICAgXCJ3aW5uZXJzXCIsXG4gICAgICAgIFwibWFrZXJzXCIsXG4gICAgICAgIFwiZG9lcnNcIixcbiAgICAgICAgXCJsb3ZlcnNcIixcbiAgICAgICAgXCJjYXJwZW50ZXJzXCIsXG4gICAgICAgIFwicm9vZmVyc1wiLFxuICAgICAgICBcInBhaW50ZXJzXCIsXG4gICAgICAgIFwiYnVpbGRlcnNcIixcbiAgICAgICAgXCJwbHVtYmVyc1wiLFxuICAgICAgICBcImphbml0b3JzXCIsXG4gICAgICAgIFwiZG9jdG9yc1wiLFxuICAgICAgICBcImxhd3llcnNcIixcbiAgICAgICAgXCJyb2NrLW4tcm9sbGVyc1wiLFxuICAgICAgICBcImJha2Vyc1wiLFxuICAgICAgICBcImdhbWVyc1wiLFxuICAgICAgICBcImRldmVsb3BlcnNcIixcbiAgICAgICAgXCJyZWFsdG9yc1wiLFxuICAgICAgICBcImNvbnRyYWN0b3JzXCIsXG4gICAgICAgIFwibW92ZXJzXCIsXG4gICAgICAgIFwic2hha2Vyc1wiLFxuICAgICAgICBcImh1bWFuc1wiXG4gICAgICBdXG4gICAgICB2YXIgaGVhZCA9ICQoJ2gxW2NsYXNzKj1cIkhvbWVQYWdlVGl0bGVcIl0nKTtcbiAgICAgIHZhciB3b3JkID0gJCgnI0hvbWVBbmltYXRlZEhlYWQnKTtcbiAgICAgIHZhciBtYXJrID0gJCgnI01hcmsnKTtcbiAgICAgIHZhciBuID0gLTE7XG4gICAgICBjb25zdCBoZWFkQW5pbSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG4rKztcbiAgICAgICAgICBpZiAobiA+PSB3b3JkTGlzdC5sZW5ndGggLSAxKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdvcmQuYWRkQ2xhc3MoJ2xhc3QnKTtcbiAgICAgICAgICAgIG1hcmsuYWRkQ2xhc3MoJ3BlcmlvZCcpLnRleHQoJy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG4gPj0gd29yZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYWRBbmltKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdyA9IHdvcmRMaXN0W25dO1xuICAgICAgICAgIHdvcmQuaGlkZSgpO1xuICAgICAgICAgIHdvcmQuaHRtbChcIjxkaXY+XCIrdytcIjwvZGl2PlwiKTtcbiAgICAgICAgICBpZiAobiA+PSB3b3JkTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHdvcmQuZmFkZUluKDMwMDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3b3JkLmZhZGVJbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgODAwKTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRQYWdlVHlwZSgpIHtcbiAgICAgICAgICAvLyBBZGQgcGFnZSB0eXBlIHRvIG1haW4gZWxlbWVudFxuICAgICAgICAgIGlmICggJCgnYXJ0aWNsZScpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICQoJyNyb290JykucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnYXJjaGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjcm9vdCcpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ3BhZ2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJCgnbWFpbicpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCAkKCdjb250ZW50JykuYXR0cignZGF0YS1pc2hvbWUnKSApIHtcbiAgICAgICAgICAgICAgJCgnI3Jvb3QnKS5hZGRDbGFzcygnaG9tZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCAkKCdtYWluID4gZGl2JykuYXR0cignZGF0YS1pc3BvcnRmb2xpbycpICkge1xuICAgICAgICAgICAgICAkKCcjcm9vdCcpLmFkZENsYXNzKCdwb3J0Zm9saW8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggJCgnbWFpbiA+IGRpdicpLmF0dHIoJ2RhdGEtaXNibG9nJykgKSB7XG4gICAgICAgICAgICAgICQoJyNyb290JykuYWRkQ2xhc3MoJ2Jsb2cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkUGFnZVR5cGUoKTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRBcnJvd0FjdGlvbigpIHtcbiAgICAgICAgICAvL2ZvciBwb3J0Zm9saW8gYW5kIHNsaWRlcnNcbiAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICB2YXIgbnVtQXJ0aWNsZXMgPSAkKCdhcnRpY2xlJykubGVuZ3RoO1xuICAgICAgICAgICQoJy5hcnJvdy5yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKCdhcnRpY2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICBpZiAoaWR4ID49IG51bUFydGljbGVzKSBpZHggPSAwO1xuICAgICAgICAgICAgICAkKCcuaWR4LScgKyBpZHgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJy5hcnJvdy5sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoJ2FydGljbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgaWR4LS07XG4gICAgICAgICAgICAgIGlmIChpZHggPD0gMCkgaWR4ID0gbnVtQXJ0aWNsZXMtMTtcbiAgICAgICAgICAgICAgJCgnLmlkeC0nICsgaWR4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgYWRkQXJyb3dBY3Rpb24oKTtcblxuICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IGJsb2cgb3IgcG9ydGZvbGlvIGl0ZW0gdG8gYWN0aXZlXG4gICAgICAgICQoJy5pZHgtMCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvL3BvcnRmb2xpbyBzbGlkZXIgb2JzZXJ2ZXJcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgY2hlY2tBcnRpY2xlcyA9PiB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMCxcbiAgICAgICAgICAgIG51bUFydGljbGVzID0gJCgnYXJ0aWNsZScpLmxlbmd0aDtcbiAgICAgICAgICAgICQoJy5pZHgtJyArIGlkeCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKCAkKCdjb250ZW50JykuYXR0cignZGF0YS1pc2hvbWUnKSApIHtcbiAgICAgICAgICAgICAgJCgnI3Jvb3QnKS5hZGRDbGFzcygnaG9tZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICQoJ2ltZycpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICQoJ2ZpZ3VyZScpLmFkZENsYXNzKFwibG9hZGVkXCIpLmZhZGVJbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhZGRQYWdlVHlwZSgpO1xuICAgICAgICAgICAgYWRkQXJyb3dBY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIEFydGljbGVzOiBcIiwgbnVtQXJ0aWNsZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShtYWluLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSwgLy8gcGFzcyBvbGQgZGF0YSB0byBjYWxsYmFja1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTY3JvbGwgZWZmZWN0c1xuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCAkKHRoaXMpLnNjcm9sbFRvcCgpID4gODAgKSB7XG4gICAgICAgICAgICAkKCcjc2l0ZS1oZWFkZXInKS5hZGRDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3NpdGUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICQoJyNyb290JykuaGFzQ2xhc3MoJ3BvcnRmb2xpbycpICkge1xuICAgICAgICAgICgnI3NpdGUtaGVhZGVyJykuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCgnI3NpdGUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgIH07XG5cbiAgfSk7Ly9kb2N1bWVudC5yZWFkeVxuXG4gICQod2luZG93KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vc3R1ZmYgdG8gZG8gd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZFxuICAgICAgJCgnaW1nJykucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnZmlndXJlJykuYWRkQ2xhc3MoXCJsb2FkZWRcIikuZmFkZUluKCk7XG4gICAgICB9KTtcbiAgICAgICQoJy5sb2FkZXIgKicpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFnZSBMb2FkZWQhXCIpO1xuICAgICAgICAgICQoJy5sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgICAgLy8gUEFHRSBhZGp1c3RtZW50cyBhbmQgbW9kaWZpY2F0aW9uc1xuICAgICAgJCgnZGl2W2NsYXNzKj1cIkVudHJ5Q29udGVudFwiXScpLmFkZENsYXNzKCdlbnRyeS1jb250ZW50Jyk7XG4gICAgfSk7Ly93aW5kb3cucmVhZHlcblxufSlcblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSkNXO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/js/jcw.js\n");

/***/ })

})