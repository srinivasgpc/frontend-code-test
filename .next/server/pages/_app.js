(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_Cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Cars */ "./src/components/Cars.tsx");
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/styles.css */ "./public/css/styles.css");
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\volvo-test\\volvo-test\\pages\\_app.tsx";





function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_components_Cars__WEBPACK_IMPORTED_MODULE_0__.Cars, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/components/Cars.tsx":
/*!*********************************!*\
  !*** ./src/components/Cars.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cars": () => (/* binding */ Cars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_api_cars_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/api/cars.json */ "./public/api/cars.json");
/* harmony import */ var _Slider_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider/index */ "./src/components/Slider/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\volvo-test\\volvo-test\\src\\components\\Cars.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  const [cars, setCars] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCars(_public_api_cars_json__WEBPACK_IMPORTED_MODULE_1__);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "layout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Slider_index__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, SliderProps), {}, {
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

function CarsComponent(car) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: car.bodyType.toLocaleUpperCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "car-info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        children: car.modelName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
      className: "car-img",
      src: car.imageUrl,
      alt: "car"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "car-link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: ["Learn", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "car-link-arrow",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: ["Shop", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "car-link-arrow",
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
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

/***/ }),

/***/ "./src/components/Slider/SliderItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/Slider/SliderItem.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderItemStyles */ "./src/components/Slider/SliderItemStyles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\volvo-test\\volvo-test\\src\\components\\Slider\\SliderItem.tsx";
 // Styles




const SliderItem = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SliderItemStyles__WEBPACK_IMPORTED_MODULE_1__.StyledSliderItem, {
  zoomFactor: zoomFactor,
  slideMargin: slideMargin,
  visibleSlides: visibleSlides,
  className: slideClass,
  onMouseOver: () => callback(id),
  onMouseOut: callbackOut,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderItem);

/***/ }),

/***/ "./src/components/Slider/SliderItemStyles.ts":
/*!***************************************************!*\
  !*** ./src/components/Slider/SliderItemStyles.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSliderItem": () => (/* binding */ StyledSliderItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledSliderItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
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

/***/ }),

/***/ "./src/components/Slider/SliderStyles.ts":
/*!***********************************************!*\
  !*** ./src/components/Slider/SliderStyles.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSliderWrapper": () => (/* binding */ StyledSliderWrapper),
/* harmony export */   "StyledSlider": () => (/* binding */ StyledSlider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderItemStyles */ "./src/components/Slider/SliderItemStyles.ts");


const StyledSliderWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
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
const StyledSlider = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  padding: 0 55px;
  transition: transform ${props => props.pageTransition}ms ease;

  :hover ${_SliderItemStyles__WEBPACK_IMPORTED_MODULE_1__.StyledSliderItem} {
    transform: translateX(${props => props.transformValue});
  }
`;

/***/ }),

/***/ "./src/components/Slider/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Slider/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderItem */ "./src/components/Slider/SliderItem.tsx");
/* harmony import */ var _SliderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderStyles */ "./src/components/Slider/SliderStyles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\volvo-test\\volvo-test\\src\\components\\Slider\\index.tsx";
 // Components

 // Styles

 // Types



const numberOfSlides = (maxVisibleSlides, windowWidth) => {
  if (windowWidth > 1200) return maxVisibleSlides;
  if (windowWidth > 992) return 4;
  if (windowWidth > 768) return 3;
  return 1;
};

const Slider = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition
}) => {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: transformValue,
    1: setTransformValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(`-${zoomFactor / 2}%`);
  const {
    0: scrollSize,
    1: setScrollSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const sliderRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize); // Pages start at 0, therefore -1 at the end here

  const totalPages = Math.ceil(children.length / visibleSlides) - 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver(entries => {
      setScrollSize(entries[0].contentRect.width);
    });
    const {
      current
    } = sliderRef;
    resizeObserver.observe(current);
  }, [sliderRef]); // Position slider on resize

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(-${currentPage * scrollSize}px, 0, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]); // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides

  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = "none";
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = "all";
    }, pageTransition);
  };

  const handleSlideMove = forward => {
    disableHoverEffect();
    setCurrentPage(currentPage + (forward ? 1 : -1));
    if (sliderRef.current) sliderRef.current.style.transform = `translate3D(-${(currentPage + (forward ? 1 : -1)) * scrollSize}px, 0, 0)`;
  };

  const handleDotMove = move => {
    disableHoverEffect();
    setCurrentPage(move);
    if (sliderRef.current) sliderRef.current.style.transform = `translate3D(-${move * scrollSize}px, 0, 0)`;
  };

  const handleMouseOver = id => {
    if (id % visibleSlides === 1) setTransformValue("0%"); // left

    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index, visibleSlides) => {
    const classes = ["right", "left"];
    return classes[index % visibleSlides] || "";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SliderStyles__WEBPACK_IMPORTED_MODULE_2__.StyledSliderWrapper, {
    zoomFactor: zoomFactor,
    visibleSlides: visibleSlides,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SliderStyles__WEBPACK_IMPORTED_MODULE_2__.StyledSlider, {
      visibleSlides: visibleSlides,
      transformValue: transformValue,
      zoomFactor: zoomFactor,
      slideMargin: slideMargin,
      pageTransition: pageTransition,
      ref: sliderRef,
      children: children.map((child, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SliderItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        slideMargin: slideMargin,
        visibleSlides: visibleSlides,
        zoomFactor: zoomFactor,
        slideClass: assignSlideClass(i + 1, visibleSlides),
        id: i + 1,
        callback: handleMouseOver,
        callbackOut: handleMouseOut,
        children: child
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined), scrollSize > 728 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "button-main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "button-wrapper back",
        onClick: () => handleSlideMove(false),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          disabled: currentPage < 0,
          className: "button back",
          children: "\u2039"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "button-wrapper forward",
        onClick: () => handleSlideMove(true),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          disabled: currentPage === totalPages,
          className: "button forward",
          children: "\u203A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, undefined), scrollSize < 728 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "dots-main",
      children: [children.map((child, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        onClick: () => handleDotMove(i),
        className: "dot",
        style: {
          backgroundColor: currentPage === i ? "black" : "lightgray"
        }
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined)), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "./public/api/cars.json":
/*!******************************!*\
  !*** ./public/api/cars.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"xc90-recharge","modelName":"XC90 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc60-recharge","modelName":"XC60 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc60_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc40-recharge","modelName":"XC40 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc40_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"xc40-bev","modelName":"XC40 Recharge","bodyType":"suv","modelType":"pure electric","imageUrl":"/images/xc40_bev.jpg","svg":"/images/chevron-small.svg"},{"id":"v90-recharge","modelName":"V90 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"v60-recharge","modelName":"V60 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v60_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"s90-recharge","modelName":"S90 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s90_recharge.jpg","svg":"/images/chevron-small.svg"},{"id":"s60-recharge","modelName":"S60 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s60_recharge.jpg","svg":"/images/chevron-small.svg"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3QkFBZjtBQUF3QyxlQUFPLEVBQUUsTUFBTXVCLGVBQWUsQ0FBQyxJQUFELENBQXRFO0FBQUEsK0JBQ0U7QUFBUSxrQkFBUSxFQUFFdkIsV0FBVyxLQUFLTyxVQUFsQztBQUE4QyxtQkFBUyxFQUFDLGdCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLEVBdUJHSixVQUFVLEdBQUcsR0FBYixpQkFDQztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsaUJBQ0daLFFBQVEsQ0FBQ2hCLEdBQVQsQ0FBYSxDQUFDeUQsS0FBRCxFQUFhQyxDQUFiLGtCQUNaO0FBQUssZUFBTyxFQUFFLE1BQU1SLGFBQWEsQ0FBQ1EsQ0FBRCxDQUFqQztBQUE4QyxpQkFBUyxFQUFDLEtBQXhEO0FBQThELGFBQUssRUFBRTtBQUFFQyxVQUFBQSxlQUFlLEVBQUVsQyxXQUFXLEtBQUtpQyxDQUFoQixHQUFvQixPQUFwQixHQUE4QjtBQUFqRDtBQUFyRSxTQUEyQ0EsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQURILEVBR00sR0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBakdEOztBQW1HQSxpRUFBZW5FLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXhIQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3NyYy9jb21wb25lbnRzL0NhcnMudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC1jb2RlLXRlc3QvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVySXRlbVN0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC1jb2RlLXRlc3QvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyU3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0Ly4vcHVibGljL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJzIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NhcnNcIlxuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9zdHlsZXMuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxDYXJzIC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENhcnNEYXRhIGZyb20gXCIuLi8uLi9wdWJsaWMvYXBpL2NhcnMuanNvblwiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL1NsaWRlci9pbmRleFwiXG4vLyBpbXBvcnQgQXJyb3dSaWdodCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jaGV2cm9uLXNtYWxsLnN2Z1wiXG5cbi8vIGNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4gPEFycm93UmlnaHQgLz5cblxudHlwZSBDYXJzVHlwZXMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbW9kZWxOYW1lOiBzdHJpbmdcbiAgYm9keVR5cGU6IHN0cmluZ1xuICBtb2RlbFR5cGU6IHN0cmluZ1xuICBpbWFnZVVybDogc3RyaW5nXG4gIHN2Zzogc3RyaW5nXG59XG5jb25zdCBTbGlkZXJQcm9wcyA9IHtcbiAgem9vbUZhY3RvcjogMTAsIC8vIEhvdyBtdWNoIHRoZSBpbWFnZSBzaG91bGQgem9vbSBvbiBob3ZlciBpbiBwZXJjZW50XG4gIHNsaWRlTWFyZ2luOiAxMCwgLy8gTWFyZ2luIG9uIGVhY2ggc2lkZSBvZiBzbGlkZXNcbiAgbWF4VmlzaWJsZVNsaWRlczogNCxcbiAgcGFnZVRyYW5zaXRpb246IDUwMCwgLy8gVHJhbnNpdGlvbiB3aGVuIGZsaXBwaW5nIHBhZ2VzXG59XG5leHBvcnQgY29uc3QgQ2FyczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXJzLCBzZXRDYXJzXSA9IFJlYWN0LnVzZVN0YXRlPENhcnNUeXBlc1tdPihbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYXJzKENhcnNEYXRhKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8U2xpZGVyIHsuLi5TbGlkZXJQcm9wc30+e2NhcnMubWFwKChjYXIpID0+IENhcnNDb21wb25lbnQoY2FyKSl9PC9TbGlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbmZ1bmN0aW9uIENhcnNDb21wb25lbnQoY2FyOiBDYXJzVHlwZXMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2Nhci5pZH0+XG4gICAgICA8ZGl2PntjYXIuYm9keVR5cGUudG9Mb2NhbGVVcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWluZm9cIj5cbiAgICAgICAgPGg0PntjYXIubW9kZWxOYW1lfTwvaDQ+XG4gICAgICAgIDxzcGFuPntjYXIubW9kZWxUeXBlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXItaW1nXCIgc3JjPXtjYXIuaW1hZ2VVcmx9IGFsdD1cImNhclwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1saW5rXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgTGVhcm57XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyLWxpbmstYXJyb3dcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjYXIuc3ZnfSB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU2hvcHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXItbGluay1hcnJvd1wiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGltZyBzcmM9e2Nhci5zdmd9IHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIFN0eWxlc1xuaW1wb3J0IHsgU3R5bGVkU2xpZGVySXRlbSB9IGZyb20gXCIuL1NsaWRlckl0ZW1TdHlsZXNcIlxuXG50eXBlIFNsaWRlckl0ZW1Qcm9wcyA9IHtcbiAgc2xpZGVDbGFzczogc3RyaW5nXG4gIHpvb21GYWN0b3I6IG51bWJlclxuICBpZDogbnVtYmVyXG4gIGNhbGxiYWNrOiAoaWQ6IG51bWJlcikgPT4gdm9pZFxuICBjYWxsYmFja091dDogKCkgPT4gdm9pZFxuICBzbGlkZU1hcmdpbjogbnVtYmVyXG4gIHZpc2libGVTbGlkZXM6IG51bWJlclxufVxuXG5jb25zdCBTbGlkZXJJdGVtOiBSZWFjdC5GQzxTbGlkZXJJdGVtUHJvcHM+ID0gKHsgc2xpZGVNYXJnaW4sIHZpc2libGVTbGlkZXMsIHpvb21GYWN0b3IsIHNsaWRlQ2xhc3MsIGlkLCBjYWxsYmFjaywgY2FsbGJhY2tPdXQsIGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZFNsaWRlckl0ZW0gem9vbUZhY3Rvcj17em9vbUZhY3Rvcn0gc2xpZGVNYXJnaW49e3NsaWRlTWFyZ2lufSB2aXNpYmxlU2xpZGVzPXt2aXNpYmxlU2xpZGVzfSBjbGFzc05hbWU9e3NsaWRlQ2xhc3N9IG9uTW91c2VPdmVyPXsoKSA9PiBjYWxsYmFjayhpZCl9IG9uTW91c2VPdXQ9e2NhbGxiYWNrT3V0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkU2xpZGVySXRlbT5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVySXRlbVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG50eXBlIFByb3BzID0ge1xuICB6b29tRmFjdG9yOiBudW1iZXJcbiAgc2xpZGVNYXJnaW46IG51bWJlclxuICB2aXNpYmxlU2xpZGVzOiBudW1iZXJcbiAgY2xhc3NOYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNsaWRlckl0ZW0gPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgbWFyZ2luOiAwICR7KHByb3BzKSA9PiBwcm9wcy5zbGlkZU1hcmdpbn1weDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gJHsocHJvcHMpID0+IHByb3BzLnZpc2libGVTbGlkZXN9IC0gJHsocHJvcHMpID0+IHByb3BzLnNsaWRlTWFyZ2luICogMn1weCk7XG5cbiAgLmNhci1pbWcge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCR7KHByb3BzKSA9PiBwcm9wcy56b29tRmFjdG9yIC8gMTAwICsgMX0pICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6aG92ZXIgfiAqIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnpvb21GYWN0b3IgLyAyICsgXCIlXCJ9KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5sZWZ0IHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuXG4gICAgOmhvdmVyIH4gKiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnpvb21GYWN0b3IgKyBcIiVcIn0pICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJi5yaWdodCB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG5cbiAgICA6aG92ZXIgfiAqIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IFN0eWxlZFNsaWRlckl0ZW0gfSBmcm9tIFwiLi9TbGlkZXJJdGVtU3R5bGVzXCJcblxudHlwZSBTbGlkZXJXcmFwcGVyUHJvcHMgPSB7XG4gIHpvb21GYWN0b3I6IG51bWJlclxuICB2aXNpYmxlU2xpZGVzOiBudW1iZXJcbn1cblxudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgdmlzaWJsZVNsaWRlczogbnVtYmVyXG4gIHRyYW5zZm9ybVZhbHVlOiBzdHJpbmdcbiAgem9vbUZhY3RvcjogbnVtYmVyXG4gIHNsaWRlTWFyZ2luOiBudW1iZXJcbiAgcGFnZVRyYW5zaXRpb246IG51bWJlclxuICByZWY6IGFueVxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXY8U2xpZGVyV3JhcHBlclByb3BzPmBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMuem9vbUZhY3RvciAvIHByb3BzLnZpc2libGVTbGlkZXMpICogMC43ICsgXCIlXCJ9IDA7XG5cbiAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMuem9vbUZhY3RvciAvIDcgKyBcIiVcIn0gMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICA6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC5iYWNrIHtcbiAgICBsZWZ0OiAwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmZvcndhcmQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuYnV0dG9uLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogNTBweDtcbiAgfVxuICAuZG90cy1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmRvdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkLmRpdjxTbGlkZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgNTVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7KHByb3BzKSA9PiBwcm9wcy5wYWdlVHJhbnNpdGlvbn1tcyBlYXNlO1xuXG4gIDpob3ZlciAke1N0eWxlZFNsaWRlckl0ZW19IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IHByb3BzLnRyYW5zZm9ybVZhbHVlfSk7XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSBcIi4vU2xpZGVySXRlbVwiXG4vLyBTdHlsZXNcbmltcG9ydCB7IFN0eWxlZFNsaWRlcldyYXBwZXIsIFN0eWxlZFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclN0eWxlc1wiXG4vLyBUeXBlc1xudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbiAgem9vbUZhY3RvcjogbnVtYmVyXG4gIHNsaWRlTWFyZ2luOiBudW1iZXJcbiAgbWF4VmlzaWJsZVNsaWRlczogbnVtYmVyXG4gIHBhZ2VUcmFuc2l0aW9uOiBudW1iZXJcbn1cblxuY29uc3QgbnVtYmVyT2ZTbGlkZXMgPSAobWF4VmlzaWJsZVNsaWRlczogbnVtYmVyLCB3aW5kb3dXaWR0aDogbnVtYmVyKSA9PiB7XG4gIGlmICh3aW5kb3dXaWR0aCA+IDEyMDApIHJldHVybiBtYXhWaXNpYmxlU2xpZGVzXG4gIGlmICh3aW5kb3dXaWR0aCA+IDk5MikgcmV0dXJuIDRcbiAgaWYgKHdpbmRvd1dpZHRoID4gNzY4KSByZXR1cm4gM1xuICByZXR1cm4gMVxufVxuXG5jb25zdCBTbGlkZXI6IFJlYWN0LkZDPFNsaWRlclByb3BzPiA9ICh7IGNoaWxkcmVuLCB6b29tRmFjdG9yLCBzbGlkZU1hcmdpbiwgbWF4VmlzaWJsZVNsaWRlcywgcGFnZVRyYW5zaXRpb24gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFt0cmFuc2Zvcm1WYWx1ZSwgc2V0VHJhbnNmb3JtVmFsdWVdID0gdXNlU3RhdGUoYC0ke3pvb21GYWN0b3IgLyAyfSVgKVxuICBjb25zdCBbc2Nyb2xsU2l6ZSwgc2V0U2Nyb2xsU2l6ZV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHNsaWRlclJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cblxuICBjb25zdCB2aXNpYmxlU2xpZGVzID0gbnVtYmVyT2ZTbGlkZXMobWF4VmlzaWJsZVNsaWRlcywgc2Nyb2xsU2l6ZSlcbiAgLy8gUGFnZXMgc3RhcnQgYXQgMCwgdGhlcmVmb3JlIC0xIGF0IHRoZSBlbmQgaGVyZVxuICBjb25zdCB0b3RhbFBhZ2VzOiBudW1iZXIgPSBNYXRoLmNlaWwoY2hpbGRyZW4ubGVuZ3RoIC8gdmlzaWJsZVNsaWRlcykgLSAxXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgc2V0U2Nyb2xsU2l6ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKVxuICAgIH0pXG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSBzbGlkZXJSZWZcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGN1cnJlbnQpXG4gIH0sIFtzbGlkZXJSZWZdKVxuXG4gIC8vIFBvc2l0aW9uIHNsaWRlciBvbiByZXNpemVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2xpZGVyUmVmICYmIHNsaWRlclJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudFBhZ2UgPiB0b3RhbFBhZ2VzKSBzZXRDdXJyZW50UGFnZSh0b3RhbFBhZ2VzKVxuICAgICAgc2xpZGVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNEKC0ke2N1cnJlbnRQYWdlICogc2Nyb2xsU2l6ZX1weCwgMCwgMClgXG4gICAgfVxuICB9LCBbc2xpZGVyUmVmLCBjdXJyZW50UGFnZSwgc2Nyb2xsU2l6ZSwgdG90YWxQYWdlc10pXG5cbiAgLy8gSGF2ZSB0byBkaXNhYmxlIGhvdmVyIGVmZmVjdCBvbiBzbGlkZXMgd2hlbiBmbGlwcGluZyBwYWdlXG4gIC8vIE90aGVyd2lzZSBpdCB3aWxsIGxvb2sgdWdseSB3aGVuIG1vdXNlIGhvdmVycyBvdmVyIHRoZSBzbGlkZXNcbiAgY29uc3QgZGlzYWJsZUhvdmVyRWZmZWN0ID0gKCkgPT4ge1xuICAgIGlmIChzbGlkZXJSZWYuY3VycmVudCkgc2xpZGVyUmVmLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc2xpZGVyUmVmLmN1cnJlbnQpIHNsaWRlclJlZi5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiXG4gICAgfSwgcGFnZVRyYW5zaXRpb24pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTbGlkZU1vdmUgPSAoZm9yd2FyZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc2FibGVIb3ZlckVmZmVjdCgpXG4gICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAoZm9yd2FyZCA/IDEgOiAtMSkpXG5cbiAgICBpZiAoc2xpZGVyUmVmLmN1cnJlbnQpIHNsaWRlclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzRCgtJHsoY3VycmVudFBhZ2UgKyAoZm9yd2FyZCA/IDEgOiAtMSkpICogc2Nyb2xsU2l6ZX1weCwgMCwgMClgXG4gIH1cblxuICBjb25zdCBoYW5kbGVEb3RNb3ZlID0gKG1vdmU6IG51bWJlcikgPT4ge1xuICAgIGRpc2FibGVIb3ZlckVmZmVjdCgpXG4gICAgc2V0Q3VycmVudFBhZ2UobW92ZSlcbiAgICBpZiAoc2xpZGVyUmVmLmN1cnJlbnQpIHNsaWRlclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzRCgtJHttb3ZlICogc2Nyb2xsU2l6ZX1weCwgMCwgMClgXG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGlmIChpZCAlIHZpc2libGVTbGlkZXMgPT09IDEpIHNldFRyYW5zZm9ybVZhbHVlKFwiMCVcIikgLy8gbGVmdFxuICAgIGlmIChpZCAlIHZpc2libGVTbGlkZXMgPT09IDApIHNldFRyYW5zZm9ybVZhbHVlKGAtJHt6b29tRmFjdG9yfSVgKSAvLyByaWdodFxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XG4gICAgc2V0VHJhbnNmb3JtVmFsdWUoYC0ke3pvb21GYWN0b3IgLyAyfSVgKVxuICB9XG5cbiAgY29uc3QgYXNzaWduU2xpZGVDbGFzcyA9IChpbmRleDogbnVtYmVyLCB2aXNpYmxlU2xpZGVzOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1wicmlnaHRcIiwgXCJsZWZ0XCJdXG4gICAgcmV0dXJuIGNsYXNzZXNbaW5kZXggJSB2aXNpYmxlU2xpZGVzXSB8fCBcIlwiXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTbGlkZXJXcmFwcGVyIHpvb21GYWN0b3I9e3pvb21GYWN0b3J9IHZpc2libGVTbGlkZXM9e3Zpc2libGVTbGlkZXN9PlxuICAgICAgPFN0eWxlZFNsaWRlciB2aXNpYmxlU2xpZGVzPXt2aXNpYmxlU2xpZGVzfSB0cmFuc2Zvcm1WYWx1ZT17dHJhbnNmb3JtVmFsdWV9IHpvb21GYWN0b3I9e3pvb21GYWN0b3J9IHNsaWRlTWFyZ2luPXtzbGlkZU1hcmdpbn0gcGFnZVRyYW5zaXRpb249e3BhZ2VUcmFuc2l0aW9ufSByZWY9e3NsaWRlclJlZn0+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkOiBhbnksIGk6IGFueSkgPT4gKFxuICAgICAgICAgIDxTbGlkZXJJdGVtIGtleT17aX0gc2xpZGVNYXJnaW49e3NsaWRlTWFyZ2lufSB2aXNpYmxlU2xpZGVzPXt2aXNpYmxlU2xpZGVzfSB6b29tRmFjdG9yPXt6b29tRmFjdG9yfSBzbGlkZUNsYXNzPXthc3NpZ25TbGlkZUNsYXNzKGkgKyAxLCB2aXNpYmxlU2xpZGVzKX0gaWQ9e2kgKyAxfSBjYWxsYmFjaz17aGFuZGxlTW91c2VPdmVyfSBjYWxsYmFja091dD17aGFuZGxlTW91c2VPdXR9PlxuICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgIDwvU2xpZGVySXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIHtzY3JvbGxTaXplID4gNzI4ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXIgYmFja1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNsaWRlTW92ZShmYWxzZSl9PlxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPCAwfSBjbGFzc05hbWU9XCJidXR0b24gYmFja1wiPlxuICAgICAgICAgICAgICAmIzgyNDk7XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXIgZm9yd2FyZFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNsaWRlTW92ZSh0cnVlKX0+XG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc30gY2xhc3NOYW1lPVwiYnV0dG9uIGZvcndhcmRcIj5cbiAgICAgICAgICAgICAgJiM4MjUwO1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtzY3JvbGxTaXplIDwgNzI4ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RzLW1haW5cIj5cbiAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZDogYW55LCBpOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlRG90TW92ZShpKX0ga2V5PXtpfSBjbGFzc05hbWU9XCJkb3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGN1cnJlbnRQYWdlID09PSBpID8gXCJibGFja1wiIDogXCJsaWdodGdyYXlcIiB9fT48L2Rpdj5cbiAgICAgICAgICApKX17XCIgXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1N0eWxlZFNsaWRlcldyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbIkNhcnMiLCJSZWFjdCIsIkhvbWVQYWdlIiwidXNlRWZmZWN0IiwiQ2Fyc0RhdGEiLCJTbGlkZXIiLCJTbGlkZXJQcm9wcyIsInpvb21GYWN0b3IiLCJzbGlkZU1hcmdpbiIsIm1heFZpc2libGVTbGlkZXMiLCJwYWdlVHJhbnNpdGlvbiIsImNhcnMiLCJzZXRDYXJzIiwidXNlU3RhdGUiLCJtYXAiLCJjYXIiLCJDYXJzQ29tcG9uZW50IiwiYm9keVR5cGUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsIm1vZGVsTmFtZSIsIm1vZGVsVHlwZSIsImltYWdlVXJsIiwic3ZnIiwiaWQiLCJTdHlsZWRTbGlkZXJJdGVtIiwiU2xpZGVySXRlbSIsInZpc2libGVTbGlkZXMiLCJzbGlkZUNsYXNzIiwiY2FsbGJhY2siLCJjYWxsYmFja091dCIsImNoaWxkcmVuIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJTdHlsZWRTbGlkZXJXcmFwcGVyIiwiU3R5bGVkU2xpZGVyIiwidHJhbnNmb3JtVmFsdWUiLCJudW1iZXJPZlNsaWRlcyIsIndpbmRvd1dpZHRoIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInNldFRyYW5zZm9ybVZhbHVlIiwic2Nyb2xsU2l6ZSIsInNldFNjcm9sbFNpemUiLCJzbGlkZXJSZWYiLCJ1c2VSZWYiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImNvbnRlbnRSZWN0Iiwid2lkdGgiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzYWJsZUhvdmVyRWZmZWN0IiwicG9pbnRlckV2ZW50cyIsInNldFRpbWVvdXQiLCJoYW5kbGVTbGlkZU1vdmUiLCJmb3J3YXJkIiwiaGFuZGxlRG90TW92ZSIsIm1vdmUiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImFzc2lnblNsaWRlQ2xhc3MiLCJpbmRleCIsImNsYXNzZXMiLCJjaGlsZCIsImkiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9