"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Cars.tsx":
/*!*********************************!*\
  !*** ./src/components/Cars.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cars": function() { return /* binding */ Cars; }
/* harmony export */ });
/* harmony import */ var C_Users_User_Desktop_volvo_test_volvo_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_api_cars_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/api/cars.json */ "./public/api/cars.json");
/* harmony import */ var _Slider_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider/index */ "./src/components/Slider/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\volvo-test\\volvo-test\\src\\components\\Cars.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_User_Desktop_volvo_test_volvo_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import ArrowRight from "../../public/images/chevron-small.svg"
// const MyComponent = () => <ArrowRight />


const SliderProps = {
  zoomFactor: 10,
  // How much the image should zoom on hover in percent
  slideMargin: 10,
  // Margin on each side of slides
  maxVisibleSlides: 4,
  pageTransition: 500 // Transition when flipping pages

};
const Cars = () => {
  _s();

  const [cars, setCars] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setCars(_public_api_cars_json__WEBPACK_IMPORTED_MODULE_2__);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "layout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Slider_index__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, SliderProps), {}, {
      children: cars.map(car => CarsComponent(car))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

_s(Cars, "/EQt6wAxOgtQYDavlJ/SWb5B/tI=");

_c = Cars;

function CarsComponent(car) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: car.bodyType.toLocaleUpperCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "car-info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: car.modelName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: car.modelType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      className: "car-img",
      src: car.imageUrl,
      alt: "car"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "car-link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: ["Learn", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: "car-link-arrow",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: car.svg,
            width: "15",
            height: "10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: ["Shop", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: "car-link-arrow",
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: car.svg,
            width: "15",
            height: "10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, car.id, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_c2 = CarsComponent;

var _c, _c2;

$RefreshReg$(_c, "Cars");
$RefreshReg$(_c2, "CarsComponent");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYjAzN2NhOWNmODk0MjIyNWZmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBOzs7QUFVQSxNQUFNSSxXQUFXLEdBQUc7QUFDbEJDLEVBQUFBLFVBQVUsRUFBRSxFQURNO0FBQ0Y7QUFDaEJDLEVBQUFBLFdBQVcsRUFBRSxFQUZLO0FBRUQ7QUFDakJDLEVBQUFBLGdCQUFnQixFQUFFLENBSEE7QUFJbEJDLEVBQUFBLGNBQWMsRUFBRSxHQUpFLENBSUc7O0FBSkgsQ0FBcEI7QUFNTyxNQUFNQyxJQUFjLEdBQUcsTUFBTTtBQUFBOztBQUNsQyxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQlgscURBQUEsQ0FBNEIsRUFBNUIsQ0FBeEI7QUFDQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RVLElBQUFBLE9BQU8sQ0FBQ1Qsa0RBQUQsQ0FBUDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQsa0NBQVlFLFdBQVo7QUFBQSxnQkFBMEJNLElBQUksQ0FBQ0csR0FBTCxDQUFVQyxHQUFELElBQVNDLGFBQWEsQ0FBQ0QsR0FBRCxDQUEvQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FYTTs7R0FBTUw7O0tBQUFBOztBQVliLFNBQVNNLGFBQVQsQ0FBdUJELEdBQXZCLEVBQW9EO0FBQ2xELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBTUEsR0FBRyxDQUFDRSxRQUFKLENBQWFDLGlCQUFiO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtILEdBQUcsQ0FBQ0k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFPSixHQUFHLENBQUNLO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUU7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixTQUFHLEVBQUVMLEdBQUcsQ0FBQ00sUUFBbEM7QUFBNEMsU0FBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFBLDRCQUNRLEdBRFIsZUFFRTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVOLEdBQUcsQ0FBQ08sR0FBZDtBQUFtQixpQkFBSyxFQUFDLElBQXpCO0FBQThCLGtCQUFNLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFBLDJCQUNPLEdBRFAsZUFFRTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEscUJBQ0csR0FESCxlQUVFO0FBQUssZUFBRyxFQUFFUCxHQUFHLENBQUNPLEdBQWQ7QUFBbUIsaUJBQUssRUFBQyxJQUF6QjtBQUE4QixrQkFBTSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUEsS0FBVVAsR0FBRyxDQUFDUSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7TUExQlFQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ2Fyc0RhdGEgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcGkvY2Fycy5qc29uXCJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vU2xpZGVyL2luZGV4XCJcbi8vIGltcG9ydCBBcnJvd1JpZ2h0IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NoZXZyb24tc21hbGwuc3ZnXCJcblxuLy8gY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiA8QXJyb3dSaWdodCAvPlxuXG50eXBlIENhcnNUeXBlcyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBtb2RlbE5hbWU6IHN0cmluZ1xuICBib2R5VHlwZTogc3RyaW5nXG4gIG1vZGVsVHlwZTogc3RyaW5nXG4gIGltYWdlVXJsOiBzdHJpbmdcbiAgc3ZnOiBzdHJpbmdcbn1cbmNvbnN0IFNsaWRlclByb3BzID0ge1xuICB6b29tRmFjdG9yOiAxMCwgLy8gSG93IG11Y2ggdGhlIGltYWdlIHNob3VsZCB6b29tIG9uIGhvdmVyIGluIHBlcmNlbnRcbiAgc2xpZGVNYXJnaW46IDEwLCAvLyBNYXJnaW4gb24gZWFjaCBzaWRlIG9mIHNsaWRlc1xuICBtYXhWaXNpYmxlU2xpZGVzOiA0LFxuICBwYWdlVHJhbnNpdGlvbjogNTAwLCAvLyBUcmFuc2l0aW9uIHdoZW4gZmxpcHBpbmcgcGFnZXNcbn1cbmV4cG9ydCBjb25zdCBDYXJzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NhcnMsIHNldENhcnNdID0gUmVhY3QudXNlU3RhdGU8Q2Fyc1R5cGVzW10+KFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhcnMoQ2Fyc0RhdGEpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxTbGlkZXIgey4uLlNsaWRlclByb3BzfT57Y2Fycy5tYXAoKGNhcikgPT4gQ2Fyc0NvbXBvbmVudChjYXIpKX08L1NsaWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZnVuY3Rpb24gQ2Fyc0NvbXBvbmVudChjYXI6IENhcnNUeXBlcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17Y2FyLmlkfT5cbiAgICAgIDxkaXY+e2Nhci5ib2R5VHlwZS50b0xvY2FsZVVwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItaW5mb1wiPlxuICAgICAgICA8aDQ+e2Nhci5tb2RlbE5hbWV9PC9oND5cbiAgICAgICAgPHNwYW4+e2Nhci5tb2RlbFR5cGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNhci1pbWdcIiBzcmM9e2Nhci5pbWFnZVVybH0gYWx0PVwiY2FyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWxpbmtcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBMZWFybntcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXItbGluay1hcnJvd1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Nhci5zdmd9IHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTaG9we1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhci1saW5rLWFycm93XCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8aW1nIHNyYz17Y2FyLnN2Z30gd2lkdGg9XCIxNVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNhcnNEYXRhIiwiU2xpZGVyIiwiU2xpZGVyUHJvcHMiLCJ6b29tRmFjdG9yIiwic2xpZGVNYXJnaW4iLCJtYXhWaXNpYmxlU2xpZGVzIiwicGFnZVRyYW5zaXRpb24iLCJDYXJzIiwiY2FycyIsInNldENhcnMiLCJ1c2VTdGF0ZSIsIm1hcCIsImNhciIsIkNhcnNDb21wb25lbnQiLCJib2R5VHlwZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwibW9kZWxOYW1lIiwibW9kZWxUeXBlIiwiaW1hZ2VVcmwiLCJzdmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=