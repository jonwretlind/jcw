webpackHotUpdate("portfolio",{

/***/ "./packages/twentytwenty-theme/src/components/common/portfolio-media.js":
/*!******************************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/common/portfolio-media.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _styles_section_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/section-container */ \"./packages/twentytwenty-theme/src/components/styles/section-container.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The featured image/video of the post.\n *\n * @param props -\n * - `state`: The Frontity state\n * - `id`: The ID of the featured image/video.\n * - `className`: Required in order to wrap the component with `styled()`.\n * @returns React element.\n */const PortfolioMedia=({state,id,className})=>{const media=state.source.attachment[id];if(!media)return null;const srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(`${current.join(\" \")}w${index!==array.length-1?\", \":\"\"}`),\"\")||null;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Figure,{id:\"image\",className:className,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_styles_section_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{size:\"medium\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Image,{alt:media.title.rendered,src:media.source_url,srcSet:srcset,rel:\"preload\"})})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(PortfolioMedia));const Figure=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"figure\", false?undefined:{target:\"e1o56xkm1\",label:\"Figure\"})( false?undefined:{name:\"1mntq96\",styles:\"position:relative;border-left:1px solid #eee;background:linear-gradient(120deg, #ddd, #fff);width:calc(50% + 80px);animation:fadein;animation-duration:0.5s;animation-timing-function:ease-in;right:0px;height:80vh;display:flex;align-items:center;padding-right:37px;@keyframes fadein{from{opacity:0;width:0%;}to{opacity:1;width:80%;}}@media (max-width: 1000px){width:100%;height:40vh;padding-bottom:unset;padding-right:unset;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pjd3JldGxpbmQvd2Vic2l0ZS9qY3dfd2Vic2l0ZS9qY3cvcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wb3J0Zm9saW8tbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEM0QiIsImZpbGUiOiIvaG9tZS9qY3dyZXRsaW5kL3dlYnNpdGUvamN3X3dlYnNpdGUvamN3L3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9jb21tb24vcG9ydGZvbGlvLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1nIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSBcIi4uL3N0eWxlcy9zZWN0aW9uLWNvbnRhaW5lclwiO1xuXG4vKipcbiAqIFRoZSBmZWF0dXJlZCBpbWFnZS92aWRlbyBvZiB0aGUgcG9zdC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLVxuICogLSBgc3RhdGVgOiBUaGUgRnJvbnRpdHkgc3RhdGVcbiAqIC0gYGlkYDogVGhlIElEIG9mIHRoZSBmZWF0dXJlZCBpbWFnZS92aWRlby5cbiAqIC0gYGNsYXNzTmFtZWA6IFJlcXVpcmVkIGluIG9yZGVyIHRvIHdyYXAgdGhlIGNvbXBvbmVudCB3aXRoIGBzdHlsZWQoKWAuXG4gKiBAcmV0dXJucyBSZWFjdCBlbGVtZW50LlxuICovXG5jb25zdCBQb3J0Zm9saW9NZWRpYSA9ICh7IHN0YXRlLCBpZCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuICByZXR1cm4gKFxuICAgIDxGaWd1cmUgaWQ9XCJpbWFnZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxTZWN0aW9uQ29udGFpbmVyIHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICBzcmM9e21lZGlhLnNvdXJjZV91cmx9XG4gICAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgPC9GaWd1cmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvcnRmb2xpb01lZGlhKTtcblxuY29uc3QgRmlndXJlID0gc3R5bGVkLmZpZ3VyZWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNkZGQsICNmZmYpO1xuICB3aWR0aDogY2FsYyg1MCUgKyA4MHB4KTtcbiAgYW5pbWF0aW9uOiBmYWRlaW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzN3B4O1xuXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tICAgeyBvcGFjaXR5OiAwOyB3aWR0aDogMCU7IH1cbiAgICB0byAgICAgeyBvcGFjaXR5OiAxOyB3aWR0aDogODAlOyB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkKEltZylgXG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IGF1dG87XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGhlaWdodDogMjUwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Image=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e1o56xkm0\",label:\"Image\"})( false?undefined:{name:\"ppejaq\",styles:\"margin:0 auto;display:block;height:40vh;max-width:90%;object-fit:contain;width:auto;@media (max-width: 1200px){height:250px;@media screen and (orientation: landscape){height:40vh;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pjd3JldGxpbmQvd2Vic2l0ZS9qY3dfd2Vic2l0ZS9qY3cvcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wb3J0Zm9saW8tbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V5QiIsImZpbGUiOiIvaG9tZS9qY3dyZXRsaW5kL3dlYnNpdGUvamN3X3dlYnNpdGUvamN3L3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9jb21tb24vcG9ydGZvbGlvLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1nIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSBcIi4uL3N0eWxlcy9zZWN0aW9uLWNvbnRhaW5lclwiO1xuXG4vKipcbiAqIFRoZSBmZWF0dXJlZCBpbWFnZS92aWRlbyBvZiB0aGUgcG9zdC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLVxuICogLSBgc3RhdGVgOiBUaGUgRnJvbnRpdHkgc3RhdGVcbiAqIC0gYGlkYDogVGhlIElEIG9mIHRoZSBmZWF0dXJlZCBpbWFnZS92aWRlby5cbiAqIC0gYGNsYXNzTmFtZWA6IFJlcXVpcmVkIGluIG9yZGVyIHRvIHdyYXAgdGhlIGNvbXBvbmVudCB3aXRoIGBzdHlsZWQoKWAuXG4gKiBAcmV0dXJucyBSZWFjdCBlbGVtZW50LlxuICovXG5jb25zdCBQb3J0Zm9saW9NZWRpYSA9ICh7IHN0YXRlLCBpZCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuICByZXR1cm4gKFxuICAgIDxGaWd1cmUgaWQ9XCJpbWFnZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxTZWN0aW9uQ29udGFpbmVyIHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICBzcmM9e21lZGlhLnNvdXJjZV91cmx9XG4gICAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgPC9GaWd1cmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvcnRmb2xpb01lZGlhKTtcblxuY29uc3QgRmlndXJlID0gc3R5bGVkLmZpZ3VyZWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNkZGQsICNmZmYpO1xuICB3aWR0aDogY2FsYyg1MCUgKyA4MHB4KTtcbiAgYW5pbWF0aW9uOiBmYWRlaW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzN3B4O1xuXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tICAgeyBvcGFjaXR5OiAwOyB3aWR0aDogMCU7IH1cbiAgICB0byAgICAgeyBvcGFjaXR5OiAxOyB3aWR0aDogODAlOyB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkKEltZylgXG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IGF1dG87XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGhlaWdodDogMjUwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvY29tbW9uL3BvcnRmb2xpby1tZWRpYS5qcz80OWE5Il0sIm5hbWVzIjpbIlBvcnRmb2xpb01lZGlhIiwic3RhdGUiLCJpZCIsImNsYXNzTmFtZSIsIm1lZGlhIiwic291cmNlIiwiYXR0YWNobWVudCIsInNyY3NldCIsIk9iamVjdCIsInZhbHVlcyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsIm1hcCIsIml0ZW0iLCJzb3VyY2VfdXJsIiwid2lkdGgiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnJlbnQiLCJpbmRleCIsImFycmF5IiwiY29uY2F0Iiwiam9pbiIsImxlbmd0aCIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25uZWN0IiwiRmlndXJlIiwiSW1hZ2UiLCJJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEtBQU1BLGVBQWMsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsRUFBVCxDQUFhQyxTQUFiLENBQUQsR0FBOEIsQ0FDbkQsS0FBTUMsTUFBSyxDQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkosRUFBeEIsQ0FBZCxDQUVBLEdBQUksQ0FBQ0UsS0FBTCxDQUFZLE1BQU8sS0FBUCxDQUVaLEtBQU1HLE9BQU0sQ0FDVkMsTUFBTSxDQUFDQyxNQUFQLENBQWNMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkMsS0FBbEMsQ0FDRTtBQURGLENBRUdDLEdBRkgsQ0FFUUMsSUFBRCxFQUFVLENBQUNBLElBQUksQ0FBQ0MsVUFBTixDQUFrQkQsSUFBSSxDQUFDRSxLQUF2QixDQUZqQixDQUdFO0FBSEYsQ0FJR0MsTUFKSCxDQUtJLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFpQkMsS0FBakIsQ0FBd0JDLEtBQXhCLEdBQ0VILEtBQUssQ0FBQ0ksTUFBTixDQUNHLEdBQUVILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLEdBQWIsQ0FBa0IsSUFBR0gsS0FBSyxHQUFLQyxLQUFLLENBQUNHLE1BQU4sQ0FBZSxDQUF6QixDQUE2QixJQUE3QixDQUFvQyxFQUFHLEVBRGpFLENBTk4sQ0FTSSxFQVRKLEdBVU8sSUFYVCxDQVlBLE1BQ0Usd0VBQUMsTUFBRCxFQUFRLEVBQUUsQ0FBQyxPQUFYLENBQW1CLFNBQVMsQ0FBRXBCLFNBQTlCLFVBQ0UsdUVBQUMsaUVBQUQsRUFBa0IsSUFBSSxDQUFDLFFBQXZCLFVBQ0UsdUVBQUMsS0FBRCxFQUNFLEdBQUcsQ0FBRUMsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxRQURuQixDQUVFLEdBQUcsQ0FBRXJCLEtBQUssQ0FBQ1UsVUFGYixDQUdFLE1BQU0sQ0FBRVAsTUFIVixDQUlFLEdBQUcsQ0FBQyxTQUpOLEVBREYsRUFERixFQURGLENBWUQsQ0E3QkQsQ0ErQmVtQix1SEFBTyxDQUFDMUIsY0FBRCxDQUF0QixFQUVBLEtBQU0yQixPQUFNLDJnSUFBWixDQTBCQSxLQUFNQyxNQUFLLENBQUcsb0VBQU0sQ0FBQ0Msa0VBQVAscURBQUgsaXFIQUFYIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wb3J0Zm9saW8tbWVkaWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWcgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5pbXBvcnQgU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vc3R5bGVzL3NlY3Rpb24tY29udGFpbmVyXCI7XG5cbi8qKlxuICogVGhlIGZlYXR1cmVkIGltYWdlL3ZpZGVvIG9mIHRoZSBwb3N0LlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtXG4gKiAtIGBzdGF0ZWA6IFRoZSBGcm9udGl0eSBzdGF0ZVxuICogLSBgaWRgOiBUaGUgSUQgb2YgdGhlIGZlYXR1cmVkIGltYWdlL3ZpZGVvLlxuICogLSBgY2xhc3NOYW1lYDogUmVxdWlyZWQgaW4gb3JkZXIgdG8gd3JhcCB0aGUgY29tcG9uZW50IHdpdGggYHN0eWxlZCgpYC5cbiAqIEByZXR1cm5zIFJlYWN0IGVsZW1lbnQuXG4gKi9cbmNvbnN0IFBvcnRmb2xpb01lZGlhID0gKHsgc3RhdGUsIGlkLCBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG4gIHJldHVybiAoXG4gICAgPEZpZ3VyZSBpZD1cImltYWdlXCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPFNlY3Rpb25Db250YWluZXIgc2l6ZT1cIm1lZGl1bVwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8L0ZpZ3VyZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9ydGZvbGlvTWVkaWEpO1xuXG5jb25zdCBGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2RkZCwgI2ZmZik7XG4gIHdpZHRoOiBjYWxjKDUwJSArIDgwcHgpO1xuICBhbmltYXRpb246IGZhZGVpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDgwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDM3cHg7XG5cbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20gICB7IG9wYWNpdHk6IDA7IHdpZHRoOiAwJTsgfVxuICAgIHRvICAgICB7IG9wYWNpdHk6IDE7IHdpZHRoOiA4MCU7IH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQoSW1nKWBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1heC13aWR0aDogOTAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogYXV0bztcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgaGVpZ2h0OiAyNTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/common/portfolio-media.js\n");

/***/ })

})