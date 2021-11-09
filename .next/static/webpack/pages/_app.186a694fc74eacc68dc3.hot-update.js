"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Slider/SliderItemStyles.ts":
/*!***************************************************!*\
  !*** ./src/components/Slider/SliderItemStyles.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSliderItem": function() { return /* binding */ StyledSliderItem; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

const StyledSliderItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin: 0 ${props => props.slideMargin}px;
  transition: transform 500ms ease;

  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;

  flex: 0 0 calc(100% / ${props => props.visibleSlides} - ${props => props.slideMargin * 2}px);

  .car-img {
    height: 400px;
    width: 100%;

    box-sizing: border-box;
  }

  :hover {
    transform: scale(${props => props.zoomFactor / 100 + 1}) !important;
  }

  :hover ~ * {
    transform: translateX(${props => props.zoomFactor / 2 + "%"}) !important;
  }

  &.left {
    transform-origin: left;

    :hover ~ * {
      transform: translateX(${props => props.zoomFactor + "%"}) !important;
    }
  }

  &.right {
    transform-origin: right;

    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Slider/SliderStyles.ts":
/*!***********************************************!*\
  !*** ./src/components/Slider/SliderStyles.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSliderWrapper": function() { return /* binding */ StyledSliderWrapper; },
/* harmony export */   "StyledSlider": function() { return /* binding */ StyledSlider; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SliderItemStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderItemStyles */ "./src/components/Slider/SliderItemStyles.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


const StyledSliderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 80%;
  flex-direction: column;
  padding: ${props => props.zoomFactor / props.visibleSlides * 0.7 + "%"} 0;

  .button-wrapper {
    position: relative;
    width: 55px;
    height: 100%;
    top: 50px;
    padding: ${props => props.zoomFactor / 7 + "%"} 0;
    box-sizing: border-box;
  }

  .button {
    display: block;
    background: white;
    border: 2px solid black;
    top: 0;
    width: 100%;
    height: 100%;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    :hover {
      opacity: 0.5;
    }
  }

  .back {
    left: 0;

    border-radius: 50%;
  }

  .forward {
    right: 0;
    border-radius: 50%;
  }
  .button-main {
    display: flex;
    position: relative;
    justify-content: flex-end;
    gap: 10px;
    right: 50px;
    top: 50px;
  }
  .dots-main {
    display: flex;
    position: relative;
    gap: 10px;
    justify-content: center;
  }
  .dot {
    cursor: pointer;
    padding: 3px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
`;
const StyledSlider = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  padding: 0 55px;
  transition: transform ${props => props.pageTransition}ms ease;

  :hover ${_SliderItemStyles__WEBPACK_IMPORTED_MODULE_0__.StyledSliderItem} {
    transform: translateX(${props => props.transformValue});
  }
`;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/css/styles.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/css/styles.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: white;\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.layout {\n  height: 100vh;\n}\n.car-info {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.car-link {\n  margin-top: 20px;\n  color: #3870b8;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  grid-gap: 30px;\n  gap: 30px;\n}\n.car-link-arrow {\n  margin-left: 10px;\n}\n", "",{"version":3,"sources":["webpack://public/css/styles.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,wIAAwI;AAC1I;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAa;EAAb,aAAa;EACb,2BAAmB;UAAnB,mBAAmB;EACnB,cAAS;EAAT,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,qBAAa;EAAb,aAAa;EACb,+BAAuB;UAAvB,uBAAuB;EACvB,cAAS;EAAT,SAAS;AACX;AACA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  background: white;\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.layout {\n  height: 100vh;\n}\n.car-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.car-link {\n  margin-top: 20px;\n  color: #3870b8;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n.car-link-arrow {\n  margin-left: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/api/cars.json":
/*!******************************!*\
  !*** ./public/api/cars.json ***!
  \******************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"xc90-recharge","modelName":"XC90 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc60-recharge","modelName":"XC60 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc60_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc40-recharge","modelName":"XC40 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc40_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc40-bev","modelName":"XC40 Recharge","bodyType":"suv","modelType":"pure electric","imageUrl":"/images/xc40_bev.jpg","svg":"/images/chevron-small.svg"},{"id":"v90-recharge","modelName":"V90 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"v60-recharge","modelName":"V60 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v60_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"s90-recharge","modelName":"S90 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"s60-recharge","modelName":"S60 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s60_recharge.jpg","svg":"/images/chevron-small.svg"}]');

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xODZhNjk0ZmM3NGVhY2M2OGRjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU08sTUFBTUMsZ0JBQWdCLEdBQUdELDBEQUFrQjtBQUNsRCxjQUFlRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEyQkQsS0FBRCxJQUFXQSxLQUFLLENBQUNFLGFBQWMsTUFBTUYsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsQ0FBRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBd0JELEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxVQUFOLEdBQW1CLEdBQW5CLEdBQXlCLENBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTZCSCxLQUFELElBQVdBLEtBQUssQ0FBQ0csVUFBTixHQUFtQixDQUFuQixHQUF1QixHQUFJO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUErQkgsS0FBRCxJQUFXQSxLQUFLLENBQUNHLFVBQU4sR0FBbUIsR0FBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBNUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFnQk8sTUFBTUMsbUJBQW1CLEdBQUdQLDBEQUErQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFjRyxLQUFELElBQVlBLEtBQUssQ0FBQ0csVUFBTixHQUFtQkgsS0FBSyxDQUFDRSxhQUExQixHQUEyQyxHQUEzQyxHQUFpRCxHQUFJO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWdCRixLQUFELElBQVdBLEtBQUssQ0FBQ0csVUFBTixHQUFtQixDQUFuQixHQUF1QixHQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F0RU87QUF3RUEsTUFBTUUsWUFBWSxHQUFHUiwwREFBd0I7QUFDcEQ7QUFDQTtBQUNBLDBCQUEyQkcsS0FBRCxJQUFXQSxLQUFLLENBQUNNLGNBQWU7QUFDMUQ7QUFDQSxXQUFXUiwrREFBaUI7QUFDNUIsNEJBQTZCRSxLQUFELElBQVdBLEtBQUssQ0FBQ08sY0FBZTtBQUM1RDtBQUNBLENBUk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGUDtBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELHNCQUFzQixpQkFBaUIsbUpBQW1KLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxhQUFhLDBCQUEwQixrQkFBa0IsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsY0FBYyxHQUFHLGFBQWEscUJBQXFCLG1CQUFtQiwwQkFBMEIsa0JBQWtCLG9DQUFvQyxvQ0FBb0MsbUJBQW1CLGNBQWMsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsU0FBUyxzRkFBc0YsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksZ0NBQWdDLHNCQUFzQixpQkFBaUIsbUpBQW1KLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGFBQWEscUJBQXFCLG1CQUFtQixrQkFBa0IsNEJBQTRCLGNBQWMsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcscUJBQXFCO0FBQzMvQztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtU3R5bGVzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyU3R5bGVzLnRzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvY3NzL3N0eWxlcy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG50eXBlIFByb3BzID0ge1xuICB6b29tRmFjdG9yOiBudW1iZXJcbiAgc2xpZGVNYXJnaW46IG51bWJlclxuICB2aXNpYmxlU2xpZGVzOiBudW1iZXJcbiAgY2xhc3NOYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNsaWRlckl0ZW0gPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgbWFyZ2luOiAwICR7KHByb3BzKSA9PiBwcm9wcy5zbGlkZU1hcmdpbn1weDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gJHsocHJvcHMpID0+IHByb3BzLnZpc2libGVTbGlkZXN9IC0gJHsocHJvcHMpID0+IHByb3BzLnNsaWRlTWFyZ2luICogMn1weCk7XG5cbiAgLmNhci1pbWcge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCR7KHByb3BzKSA9PiBwcm9wcy56b29tRmFjdG9yIC8gMTAwICsgMX0pICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6aG92ZXIgfiAqIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnpvb21GYWN0b3IgLyAyICsgXCIlXCJ9KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5sZWZ0IHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuXG4gICAgOmhvdmVyIH4gKiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnpvb21GYWN0b3IgKyBcIiVcIn0pICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJi5yaWdodCB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG5cbiAgICA6aG92ZXIgfiAqIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IFN0eWxlZFNsaWRlckl0ZW0gfSBmcm9tIFwiLi9TbGlkZXJJdGVtU3R5bGVzXCJcblxudHlwZSBTbGlkZXJXcmFwcGVyUHJvcHMgPSB7XG4gIHpvb21GYWN0b3I6IG51bWJlclxuICB2aXNpYmxlU2xpZGVzOiBudW1iZXJcbn1cblxudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgdmlzaWJsZVNsaWRlczogbnVtYmVyXG4gIHRyYW5zZm9ybVZhbHVlOiBzdHJpbmdcbiAgem9vbUZhY3RvcjogbnVtYmVyXG4gIHNsaWRlTWFyZ2luOiBudW1iZXJcbiAgcGFnZVRyYW5zaXRpb246IG51bWJlclxuICByZWY6IGFueVxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXY8U2xpZGVyV3JhcHBlclByb3BzPmBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMuem9vbUZhY3RvciAvIHByb3BzLnZpc2libGVTbGlkZXMpICogMC43ICsgXCIlXCJ9IDA7XG5cbiAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMuem9vbUZhY3RvciAvIDcgKyBcIiVcIn0gMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICA6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC5iYWNrIHtcbiAgICBsZWZ0OiAwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmZvcndhcmQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuYnV0dG9uLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogNTBweDtcbiAgfVxuICAuZG90cy1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmRvdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkLmRpdjxTbGlkZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgNTVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7KHByb3BzKSA9PiBwcm9wcy5wYWdlVHJhbnNpdGlvbn1tcyBlYXNlO1xuXG4gIDpob3ZlciAke1N0eWxlZFNsaWRlckl0ZW19IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnRyYW5zZm9ybVZhbHVlfSk7XG4gIH1cbmBcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4ubGF5b3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5jYXItaW5mbyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jYXItbGluayB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgY29sb3I6ICMzODcwYjg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmNhci1saW5rLWFycm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcHVibGljL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix3SUFBd0k7QUFDMUk7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixjQUFTO0VBQVQsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBUztFQUFULFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4ubGF5b3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5jYXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNhci1saW5rIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjb2xvcjogIzM4NzBiODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuLmNhci1saW5rLWFycm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFNsaWRlckl0ZW0iLCJkaXYiLCJwcm9wcyIsInNsaWRlTWFyZ2luIiwidmlzaWJsZVNsaWRlcyIsInpvb21GYWN0b3IiLCJTdHlsZWRTbGlkZXJXcmFwcGVyIiwiU3R5bGVkU2xpZGVyIiwicGFnZVRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1WYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=