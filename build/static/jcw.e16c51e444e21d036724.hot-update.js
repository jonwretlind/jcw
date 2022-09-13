webpackHotUpdate("jcw",{

/***/ "./packages/twentytwenty-theme/src/js/jcw.js":
/*!***************************************************!*\
  !*** ./packages/twentytwenty-theme/src/js/jcw.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\n/*  CUSTOM JAVASCRIPT LOADER */const JCW=({state})=>{react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(()=>{jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function(){console.log(\"jcw.js jQuery loaded.\");// Home Page Animations\nvar wordList=[\"winners\",\"makers\",\"doers\",\"lovers\",\"carpenters\",\"roofers\",\"painters\",\"builders\",\"plumbers\",\"janitors\",\"doctors\",\"lawyers\",\"rock-n-rollers\",\"bakers\",\"gamers\",\"developers\",\"realtors\",\"contractors\",\"movers\",\"shakers\",\"humans\"];var head=jquery__WEBPACK_IMPORTED_MODULE_1___default()('h1[class*=\"HomePageTitle\"]');var word=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#HomeAnimatedHead');var mark=jquery__WEBPACK_IMPORTED_MODULE_1___default()('#Mark');var n=-1;const headAnim=setInterval(function(){n++;if(n>=wordList.length-1){word.addClass('last');mark.addClass('period').text('.');}if(n>=wordList.length){clearInterval(headAnim);return true;}var w=wordList[n];word.hide();word.html(\"<div>\"+w+\"</div>\");if(n>=wordList.length-1){word.fadeIn(3000);}else{word.fadeIn();}},800);function addPageType(){// Add page type to main element\n// short menus on everything but home page\njquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').addClass(\"scroll\");if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('archive');}else{jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').removeClass().addClass('page');}jquery__WEBPACK_IMPORTED_MODULE_1___default()('main').ready(function(){if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');jquery__WEBPACK_IMPORTED_MODULE_1___default()('#site-header').removeClass(\"scroll\");}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isportfolio')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('portfolio');}if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('main > div').attr('data-isblog')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('blog');}});};addPageType();function addArrowAction(){//for portfolio and sliders\nvar idx=0;var numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.right').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx++;if(idx>=numArticles)idx=0;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.arrow.left').click(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').removeClass('active');idx--;if(idx<=0)idx=numArticles-1;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');});};addArrowAction();// set the first blog or portfolio item to active\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-0').addClass('active');//portfolio slider observer\nlet observer=new MutationObserver(checkArticles=>{var idx=0,numArticles=jquery__WEBPACK_IMPORTED_MODULE_1___default()('article').length;jquery__WEBPACK_IMPORTED_MODULE_1___default()('.idx-'+idx).addClass('active');if(jquery__WEBPACK_IMPORTED_MODULE_1___default()('content').attr('data-ishome')){jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').addClass('home');};jquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});addPageType();addArrowAction();console.log(\"Number of Articles: \",numArticles);});observer.observe(main,{childList:true,characterDataOldValue:true// pass old data to callback\n});// Scroll effects\n/*\n        $(document).scroll(function() {\n          if ( $(this).scrollTop() > 80 ) {\n            $('#site-header').addClass(\"scroll\");\n          } else {\n            $('#site-header').removeClass(\"scroll\");\n          };\n        });\n        */});//document.ready\njquery__WEBPACK_IMPORTED_MODULE_1___default()(window).ready(function(){//stuff to do when everything is loaded\njquery__WEBPACK_IMPORTED_MODULE_1___default()('img').ready(function(){jquery__WEBPACK_IMPORTED_MODULE_1___default()('figure').addClass(\"loaded\").fadeIn();});jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader *').ready(function(){setTimeout(function(){console.log(\"Page Loaded!\");jquery__WEBPACK_IMPORTED_MODULE_1___default()('.loader').fadeOut();},1000);});// PAGE adjustments and modifications\njquery__WEBPACK_IMPORTED_MODULE_1___default()('div[class*=\"EntryContent\"]').addClass('entry-content');});//window.ready\n});return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{});};/* harmony default export */ __webpack_exports__[\"default\"] = (JCW);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2pzL2pjdy5qcz8zOGZkIl0sIm5hbWVzIjpbIkpDVyIsInN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkTGlzdCIsImhlYWQiLCJ3b3JkIiwibWFyayIsIm4iLCJoZWFkQW5pbSIsInNldEludGVydmFsIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiY2xlYXJJbnRlcnZhbCIsInciLCJoaWRlIiwiaHRtbCIsImZhZGVJbiIsImFkZFBhZ2VUeXBlIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiYWRkQXJyb3dBY3Rpb24iLCJpZHgiLCJudW1BcnRpY2xlcyIsImNsaWNrIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiY2hlY2tBcnRpY2xlcyIsIm9ic2VydmUiLCJtYWluIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwid2luZG93Iiwic2V0VGltZW91dCIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUlBLEtBQU1BLElBQUcsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQ3pCQyw0Q0FBSyxDQUFDQyxTQUFOLENBQWdCLElBQU0sQ0FDcEJDLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFVBQVcsQ0FDM0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBRUE7QUFDQSxHQUFJQyxTQUFRLENBQUcsQ0FDYixTQURhLENBRWIsUUFGYSxDQUdiLE9BSGEsQ0FJYixRQUphLENBS2IsWUFMYSxDQU1iLFNBTmEsQ0FPYixVQVBhLENBUWIsVUFSYSxDQVNiLFVBVGEsQ0FVYixVQVZhLENBV2IsU0FYYSxDQVliLFNBWmEsQ0FhYixnQkFiYSxDQWNiLFFBZGEsQ0FlYixR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Q0FGRCxFQUdBQyxXQUFXLEdBQ1hHLGNBQWMsR0FDZHBCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLENBQW9DcUIsV0FBcEMsRUFDRCxDQWRZLENBQWYsQ0FnQkFFLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsSUFBakIsQ0FBdUIsQ0FDckJDLFNBQVMsQ0FBRSxJQURVLENBRXJCQyxxQkFBcUIsQ0FBRSxJQUFNO0FBRlIsQ0FBdkIsRUFLQTtBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUVHLENBdElDLEVBc0lDO0FBRUhqQyw2Q0FBQyxDQUFDa0MsTUFBRCxDQUFELENBQVVoQyxLQUFWLENBQWdCLFVBQVcsQ0FDdkI7QUFDQUYsNkNBQUMsQ0FBQyxLQUFELENBQUQsQ0FBU0UsS0FBVCxDQUFlLFVBQVUsQ0FDdkJGLDZDQUFDLENBQUMsUUFBRCxDQUFELENBQVlhLFFBQVosQ0FBcUIsUUFBckIsRUFBK0JNLE1BQS9CLEdBQ0QsQ0FGRCxFQUdBbkIsNkNBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUUsS0FBZixDQUFxQixVQUFXLENBQzlCaUMsVUFBVSxDQUFDLFVBQVcsQ0FDcEJoQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQ0FKLDZDQUFDLENBQUMsU0FBRCxDQUFELENBQWFvQyxPQUFiLEdBQ0EsQ0FIUSxDQUdOLElBSE0sQ0FBVixDQUlELENBTEQsRUFNQTtBQUNBcEMsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDYSxRQUFoQyxDQUF5QyxlQUF6QyxFQUVELENBZEgsRUFjSztBQUVOLENBekpDLEVBMkpBLE1BQ0UsK0lBREYsQ0FLRCxDQWpLRCxDQW1LZWpCLGtFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9qcy9qY3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgQ1VTVE9NIEpBVkFTQ1JJUFQgTE9BREVSICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0IEpDVyA9ICh7IHN0YXRlIH0pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiamN3LmpzIGpRdWVyeSBsb2FkZWQuXCIpO1xuXG4gICAgICAvLyBIb21lIFBhZ2UgQW5pbWF0aW9uc1xuICAgICAgdmFyIHdvcmRMaXN0ID0gW1xuICAgICAgICBcIndpbm5lcnNcIixcbiAgICAgICAgXCJtYWtlcnNcIixcbiAgICAgICAgXCJkb2Vyc1wiLFxuICAgICAgICBcImxvdmVyc1wiLFxuICAgICAgICBcImNhcnBlbnRlcnNcIixcbiAgICAgICAgXCJyb29mZXJzXCIsXG4gICAgICAgIFwicGFpbnRlcnNcIixcbiAgICAgICAgXCJidWlsZGVyc1wiLFxuICAgICAgICBcInBsdW1iZXJzXCIsXG4gICAgICAgIFwiamFuaXRvcnNcIixcbiAgICAgICAgXCJkb2N0b3JzXCIsXG4gICAgICAgIFwibGF3eWVyc1wiLFxuICAgICAgICBcInJvY2stbi1yb2xsZXJzXCIsXG4gICAgICAgIFwiYmFrZXJzXCIsXG4gICAgICAgIFwiZ2FtZXJzXCIsXG4gICAgICAgIFwiZGV2ZWxvcGVyc1wiLFxuICAgICAgICBcInJlYWx0b3JzXCIsXG4gICAgICAgIFwiY29udHJhY3RvcnNcIixcbiAgICAgICAgXCJtb3ZlcnNcIixcbiAgICAgICAgXCJzaGFrZXJzXCIsXG4gICAgICAgIFwiaHVtYW5zXCJcbiAgICAgIF1cbiAgICAgIHZhciBoZWFkID0gJCgnaDFbY2xhc3MqPVwiSG9tZVBhZ2VUaXRsZVwiXScpO1xuICAgICAgdmFyIHdvcmQgPSAkKCcjSG9tZUFuaW1hdGVkSGVhZCcpO1xuICAgICAgdmFyIG1hcmsgPSAkKCcjTWFyaycpO1xuICAgICAgdmFyIG4gPSAtMTtcbiAgICAgIGNvbnN0IGhlYWRBbmltID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbisrO1xuICAgICAgICAgIGlmIChuID49IHdvcmRMaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgd29yZC5hZGRDbGFzcygnbGFzdCcpO1xuICAgICAgICAgICAgbWFyay5hZGRDbGFzcygncGVyaW9kJykudGV4dCgnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobiA+PSB3b3JkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGVhZEFuaW0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB3ID0gd29yZExpc3Rbbl07XG4gICAgICAgICAgd29yZC5oaWRlKCk7XG4gICAgICAgICAgd29yZC5odG1sKFwiPGRpdj5cIit3K1wiPC9kaXY+XCIpO1xuICAgICAgICAgIGlmIChuID49IHdvcmRMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgd29yZC5mYWRlSW4oMzAwMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdvcmQuZmFkZUluKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFBhZ2VUeXBlKCkge1xuICAgICAgICAgIC8vIEFkZCBwYWdlIHR5cGUgdG8gbWFpbiBlbGVtZW50XG5cbiAgICAgICAgICAvLyBzaG9ydCBtZW51cyBvbiBldmVyeXRoaW5nIGJ1dCBob21lIHBhZ2VcbiAgICAgICAgICAkKCcjc2l0ZS1oZWFkZXInKS5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgICAgIGlmICggJCgnYXJ0aWNsZScpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICQoJyNyb290JykucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnYXJjaGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjcm9vdCcpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ3BhZ2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJCgnbWFpbicpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCAkKCdjb250ZW50JykuYXR0cignZGF0YS1pc2hvbWUnKSApIHtcbiAgICAgICAgICAgICAgJCgnI3Jvb3QnKS5hZGRDbGFzcygnaG9tZScpO1xuICAgICAgICAgICAgICAkKCcjc2l0ZS1oZWFkZXInKS5yZW1vdmVDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggJCgnbWFpbiA+IGRpdicpLmF0dHIoJ2RhdGEtaXNwb3J0Zm9saW8nKSApIHtcbiAgICAgICAgICAgICAgJCgnI3Jvb3QnKS5hZGRDbGFzcygncG9ydGZvbGlvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICQoJ21haW4gPiBkaXYnKS5hdHRyKCdkYXRhLWlzYmxvZycpICkge1xuICAgICAgICAgICAgICAkKCcjcm9vdCcpLmFkZENsYXNzKCdibG9nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZFBhZ2VUeXBlKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkQXJyb3dBY3Rpb24oKSB7XG4gICAgICAgICAgLy9mb3IgcG9ydGZvbGlvIGFuZCBzbGlkZXJzXG4gICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgdmFyIG51bUFydGljbGVzID0gJCgnYXJ0aWNsZScpLmxlbmd0aDtcbiAgICAgICAgICAkKCcuYXJyb3cucmlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCgnYXJ0aWNsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICBpZHgrKztcbiAgICAgICAgICAgICAgaWYgKGlkeCA+PSBudW1BcnRpY2xlcykgaWR4ID0gMDtcbiAgICAgICAgICAgICAgJCgnLmlkeC0nICsgaWR4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkKCcuYXJyb3cubGVmdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKCdhcnRpY2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgIGlkeC0tO1xuICAgICAgICAgICAgICBpZiAoaWR4IDw9IDApIGlkeCA9IG51bUFydGljbGVzLTE7XG4gICAgICAgICAgICAgICQoJy5pZHgtJyArIGlkeCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGFkZEFycm93QWN0aW9uKCk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBibG9nIG9yIHBvcnRmb2xpbyBpdGVtIHRvIGFjdGl2ZVxuICAgICAgICAkKCcuaWR4LTAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy9wb3J0Zm9saW8gc2xpZGVyIG9ic2VydmVyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgICAgIGNoZWNrQXJ0aWNsZXMgPT4ge1xuICAgICAgICAgICAgdmFyIGlkeCA9IDAsXG4gICAgICAgICAgICBudW1BcnRpY2xlcyA9ICQoJ2FydGljbGUnKS5sZW5ndGg7XG4gICAgICAgICAgICAkKCcuaWR4LScgKyBpZHgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmICggJCgnY29udGVudCcpLmF0dHIoJ2RhdGEtaXNob21lJykgKSB7XG4gICAgICAgICAgICAgICQoJyNyb290JykuYWRkQ2xhc3MoJ2hvbWUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAkKCdpbWcnKS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAkKCdmaWd1cmUnKS5hZGRDbGFzcyhcImxvYWRlZFwiKS5mYWRlSW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWRkUGFnZVR5cGUoKTtcbiAgICAgICAgICAgIGFkZEFycm93QWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBBcnRpY2xlczogXCIsIG51bUFydGljbGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUobWFpbiwge1xuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsIC8vIHBhc3Mgb2xkIGRhdGEgdG8gY2FsbGJhY2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsIGVmZmVjdHNcbiAgICAgICAgLypcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICggJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDgwICkge1xuICAgICAgICAgICAgJCgnI3NpdGUtaGVhZGVyJykuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNzaXRlLWhlYWRlcicpLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAqL1xuXG4gIH0pOy8vZG9jdW1lbnQucmVhZHlcblxuICAkKHdpbmRvdykucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAvL3N0dWZmIHRvIGRvIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWRcbiAgICAgICQoJ2ltZycpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ2ZpZ3VyZScpLmFkZENsYXNzKFwibG9hZGVkXCIpLmZhZGVJbigpO1xuICAgICAgfSk7XG4gICAgICAkKCcubG9hZGVyIConKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgTG9hZGVkIVwiKTtcbiAgICAgICAgICAkKCcubG9hZGVyJykuZmFkZU91dCgpO1xuICAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICAgIC8vIFBBR0UgYWRqdXN0bWVudHMgYW5kIG1vZGlmaWNhdGlvbnNcbiAgICAgICQoJ2RpdltjbGFzcyo9XCJFbnRyeUNvbnRlbnRcIl0nKS5hZGRDbGFzcygnZW50cnktY29udGVudCcpO1xuXG4gICAgfSk7Ly93aW5kb3cucmVhZHlcblxufSlcblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSkNXO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/js/jcw.js\n");

/***/ })

})