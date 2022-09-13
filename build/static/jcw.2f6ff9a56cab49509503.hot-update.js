webpackHotUpdate("jcw",{

/***/ "./packages/twentytwenty-theme/src/js/jcw.js":
/*!***************************************************!*\
  !*** ./packages/twentytwenty-theme/src/js/jcw.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\n/*  CUSTOM JAVASCRIPT LOADER */const JCW=({state})=>{react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(()=>{jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function(){console.log(\"jcw.js jQuery loaded.\");// Home Page Animations\nvar wordList=[\"winners\",\"makers\",\"doers\",\"lovers\",\"carpenters\",\"roofers\",\"painters\",\"builders\",\"plumbers\",\"janitors\",\"doctors\",\"lawyers\",\"rock-n-rollers\",\"bakers\",\"gamers\",\"developers\",\"realtors\",\"contractors\",\"movers\",\"shakers\",\"humans\"];var head=jquery__WEBPACK_IMPORTED_MODULE_1___default()('h1[class*=\"HomePageTitle\"]');var word=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#HomeAnimatedHead');var mark=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#Mark');var n=-1;const headAnim=setInterval(function(){n++;if(n>=wordList.length-1){word.addClass('last');mark.addClass('period').text('.');}if(n>=wordList.length){clearInterval(headAnim);return true;}var w=wordList[n];word.hide();word.html(\"<div>\"+w+\"</div>\");if(n>=wordList.length-1){word.fadeIn(3000);}else{word.fadeIn();}},800);function addPageType(){// Add page type to main element\nif(jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('archive');}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('page');}jquery__WEBPACK_IMPORTED_MODULE_1___default()('main').ready(function(){if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').removeClass(\"scroll\");}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isportfolio')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('portfolio');jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').addClass(\"scroll\");}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isblog')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('blog');}});};addPageType();function addArrowAction(){//for portfolio and sliders\nvar idx=0;var numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.right').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx++;if(idx>=numArticles)idx=0;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.left').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx--;if(idx<=0)idx=numArticles-1;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});};addArrowAction();// set the first blog or portfolio item to active\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-0').addClass('active');//portfolio slider observer\nlet observer=new MutationObserver(checkArticles=>{var idx=0,numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');};jquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});addPageType();addArrowAction();console.log(\"Number of Articles: \",numArticles);});observer.observe(main,{childList:true,characterDataOldValue:true// pass old data to callback\n});// Scroll effects\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).scroll(function(){if(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop()>80){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').addClass(\"scroll\");}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').removeClass(\"scroll\");};});});//document.ready\njquery__WEBPACK_IMPORTED_MODULE_1___default()(window).ready(function(){//stuff to do when everything is loaded\njquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader *').ready(function(){setTimeout(function(){console.log(\"Page Loaded!\");jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader').fadeOut();},1000);});// PAGE adjustments and modifications\njquery__WEBPACK_IMPORTED_MODULE_1___default()('div[class*=\"EntryContent\"]').addClass('entry-content');});//window.ready\n});return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{});};/* harmony default export */ __webpack_exports__[\"default\"] = (JCW);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2pzL2pjdy5qcz8zOGZkIl0sIm5hbWVzIjpbIkpDVyIsInN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkTGlzdCIsImhlYWQiLCJ3b3JkIiwibWFyayIsIm4iLCJoZWFkQW5pbSIsInNldEludGVydmFsIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiY2xlYXJJbnRlcnZhbCIsInciLCJoaWRlIiwiaHRtbCIsImZhZGVJbiIsImFkZFBhZ2VUeXBlIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiYWRkQXJyb3dBY3Rpb24iLCJpZHgiLCJudW1BcnRpY2xlcyIsImNsaWNrIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiY2hlY2tBcnRpY2xlcyIsIm9ic2VydmUiLCJtYWluIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2V0VGltZW91dCIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUlBLEtBQU1BLElBQUcsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQ3pCQyw0Q0FBSyxDQUFDQyxTQUFOLENBQWdCLElBQU0sQ0FDcEJDLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFVBQVcsQ0FDM0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBRUE7QUFDQSxHQUFJQyxTQUFRLENBQUcsQ0FDYixTQURhLENBRWIsUUFGYSxDQUdiLE9BSGEsQ0FJYixRQUphLENBS2IsWUFMYSxDQU1iLFNBTmEsQ0FPYixVQVBhLENBUWIsVUFSYSxDQVNiLFVBVGEsQ0FVYixVQVZhLENBV2IsU0FYYSxDQVliLFNBWmEsQ0FhYixn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LEVBRUQsQ0FkSCxFQWNLO0FBRU4sQ0FwSkMsRUFzSkEsTUFDRSwrSUFERixDQUtELENBNUpELENBOEplakIsa0VBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2pzL2pjdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICBDVVNUT00gSkFWQVNDUklQVCBMT0FERVIgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgSkNXID0gKHsgc3RhdGUgfSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJqY3cuanMgalF1ZXJ5IGxvYWRlZC5cIik7XG5cbiAgICAgIC8vIEhvbWUgUGFnZSBBbmltYXRpb25zXG4gICAgICB2YXIgd29yZExpc3QgPSBbXG4gICAgICAgIFwid2lubmVyc1wiLFxuICAgICAgICBcIm1ha2Vyc1wiLFxuICAgICAgICBcImRvZXJzXCIsXG4gICAgICAgIFwibG92ZXJzXCIsXG4gICAgICAgIFwiY2FycGVudGVyc1wiLFxuICAgICAgICBcInJvb2ZlcnNcIixcbiAgICAgICAgXCJwYWludGVyc1wiLFxuICAgICAgICBcImJ1aWxkZXJzXCIsXG4gICAgICAgIFwicGx1bWJlcnNcIixcbiAgICAgICAgXCJqYW5pdG9yc1wiLFxuICAgICAgICBcImRvY3RvcnNcIixcbiAgICAgICAgXCJsYXd5ZXJzXCIsXG4gICAgICAgIFwicm9jay1uLXJvbGxlcnNcIixcbiAgICAgICAgXCJiYWtlcnNcIixcbiAgICAgICAgXCJnYW1lcnNcIixcbiAgICAgICAgXCJkZXZlbG9wZXJzXCIsXG4gICAgICAgIFwicmVhbHRvcnNcIixcbiAgICAgICAgXCJjb250cmFjdG9yc1wiLFxuICAgICAgICBcIm1vdmVyc1wiLFxuICAgICAgICBcInNoYWtlcnNcIixcbiAgICAgICAgXCJodW1hbnNcIlxuICAgICAgXVxuICAgICAgdmFyIGhlYWQgPSAkKCdoMVtjbGFzcyo9XCJIb21lUGFnZVRpdGxlXCJdJyk7XG4gICAgICB2YXIgd29yZCA9ICQoJyNIb21lQW5pbWF0ZWRIZWFkJyk7XG4gICAgICB2YXIgbWFyayA9ICQoJyNNYXJrJyk7XG4gICAgICB2YXIgbiA9IC0xO1xuICAgICAgY29uc3QgaGVhZEFuaW0gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBuKys7XG4gICAgICAgICAgaWYgKG4gPj0gd29yZExpc3QubGVuZ3RoIC0gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3b3JkLmFkZENsYXNzKCdsYXN0Jyk7XG4gICAgICAgICAgICBtYXJrLmFkZENsYXNzKCdwZXJpb2QnKS50ZXh0KCcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuID49IHdvcmRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFkQW5pbSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHcgPSB3b3JkTGlzdFtuXTtcbiAgICAgICAgICB3b3JkLmhpZGUoKTtcbiAgICAgICAgICB3b3JkLmh0bWwoXCI8ZGl2PlwiK3crXCI8L2Rpdj5cIik7XG4gICAgICAgICAgaWYgKG4gPj0gd29yZExpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICB3b3JkLmZhZGVJbigzMDAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd29yZC5mYWRlSW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDgwMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkUGFnZVR5cGUoKSB7XG4gICAgICAgICAgLy8gQWRkIHBhZ2UgdHlwZSB0byBtYWluIGVsZW1lbnRcbiAgICAgICAgICBpZiAoICQoJ2FydGljbGUnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAkKCcjcm9vdCcpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2FyY2hpdmUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3Jvb3QnKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdwYWdlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQoJ21haW4nKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICggJCgnY29udGVudCcpLmF0dHIoJ2RhdGEtaXNob21lJykgKSB7XG4gICAgICAgICAgICAgICQoJyNyb290JykuYWRkQ2xhc3MoJ2hvbWUnKTtcbiAgICAgICAgICAgICAgJCgnI3NpdGUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICQoJ21haW4gPiBkaXYnKS5hdHRyKCdkYXRhLWlzcG9ydGZvbGlvJykgKSB7XG4gICAgICAgICAgICAgICQoJyNyb290JykuYWRkQ2xhc3MoJ3BvcnRmb2xpbycpO1xuICAgICAgICAgICAgICAkKCcjc2l0ZS1oZWFkZXInKS5hZGRDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggJCgnbWFpbiA+IGRpdicpLmF0dHIoJ2RhdGEtaXNibG9nJykgKSB7XG4gICAgICAgICAgICAgICQoJyNyb290JykuYWRkQ2xhc3MoJ2Jsb2cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkUGFnZVR5cGUoKTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRBcnJvd0FjdGlvbigpIHtcbiAgICAgICAgICAvL2ZvciBwb3J0Zm9saW8gYW5kIHNsaWRlcnNcbiAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICB2YXIgbnVtQXJ0aWNsZXMgPSAkKCdhcnRpY2xlJykubGVuZ3RoO1xuICAgICAgICAgICQoJy5hcnJvdy5yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKCdhcnRpY2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICBpZiAoaWR4ID49IG51bUFydGljbGVzKSBpZHggPSAwO1xuICAgICAgICAgICAgICAkKCcuaWR4LScgKyBpZHgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJy5hcnJvdy5sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoJ2FydGljbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgaWR4LS07XG4gICAgICAgICAgICAgIGlmIChpZHggPD0gMCkgaWR4ID0gbnVtQXJ0aWNsZXMtMTtcbiAgICAgICAgICAgICAgJCgnLmlkeC0nICsgaWR4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgYWRkQXJyb3dBY3Rpb24oKTtcblxuICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IGJsb2cgb3IgcG9ydGZvbGlvIGl0ZW0gdG8gYWN0aXZlXG4gICAgICAgICQoJy5pZHgtMCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvL3BvcnRmb2xpbyBzbGlkZXIgb2JzZXJ2ZXJcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgY2hlY2tBcnRpY2xlcyA9PiB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMCxcbiAgICAgICAgICAgIG51bUFydGljbGVzID0gJCgnYXJ0aWNsZScpLmxlbmd0aDtcbiAgICAgICAgICAgICQoJy5pZHgtJyArIGlkeCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKCAkKCdjb250ZW50JykuYXR0cignZGF0YS1pc2hvbWUnKSApIHtcbiAgICAgICAgICAgICAgJCgnI3Jvb3QnKS5hZGRDbGFzcygnaG9tZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICQoJ2ltZycpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICQoJ2ZpZ3VyZScpLmFkZENsYXNzKFwibG9hZGVkXCIpLmZhZGVJbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhZGRQYWdlVHlwZSgpO1xuICAgICAgICAgICAgYWRkQXJyb3dBY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIEFydGljbGVzOiBcIiwgbnVtQXJ0aWNsZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShtYWluLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSwgLy8gcGFzcyBvbGQgZGF0YSB0byBjYWxsYmFja1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTY3JvbGwgZWZmZWN0c1xuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCAkKHRoaXMpLnNjcm9sbFRvcCgpID4gODAgKSB7XG4gICAgICAgICAgICAkKCcjc2l0ZS1oZWFkZXInKS5hZGRDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3NpdGUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgfSk7Ly9kb2N1bWVudC5yZWFkeVxuXG4gICQod2luZG93KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vc3R1ZmYgdG8gZG8gd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZFxuICAgICAgJCgnaW1nJykucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnZmlndXJlJykuYWRkQ2xhc3MoXCJsb2FkZWRcIikuZmFkZUluKCk7XG4gICAgICB9KTtcbiAgICAgICQoJy5sb2FkZXIgKicpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFnZSBMb2FkZWQhXCIpO1xuICAgICAgICAgICQoJy5sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgICAgLy8gUEFHRSBhZGp1c3RtZW50cyBhbmQgbW9kaWZpY2F0aW9uc1xuICAgICAgJCgnZGl2W2NsYXNzKj1cIkVudHJ5Q29udGVudFwiXScpLmFkZENsYXNzKCdlbnRyeS1jb250ZW50Jyk7XG5cbiAgICB9KTsvL3dpbmRvdy5yZWFkeVxuXG59KVxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKQ1c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/js/jcw.js\n");

/***/ })

})