"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var addressSubmittedHandler = function(address) {\n        setAddress(address);\n        setBalance(1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"cGJ+TUJ/GjeI0/rpwUW46QWmAoM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDZ0M7QUFHYztBQUNLOztBQUduRCxJQUFNRyxJQUFJLEdBQWEsV0FBTTs7SUFDM0IsSUFBOEJILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUM0MsT0FTZ0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFUaEIsVUFTNEIsR0FBSUEsR0FBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVjVDLFFBVWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBVmhCLFVBVTRCLEdBQUlBLElBQVksR0FBaEI7SUFFMUIsSUFBTVEsdUJBQXVCLEdBQUcsU0FBQ0YsT0FBZSxFQUFLO1FBQ25EQyxVQUFVLENBQUNELE9BQU8sQ0FBQztRQUNuQkQsVUFBVSxDQUFDLElBQUksQ0FBQztLQUNqQjtJQUVELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBRVQsb0VBQVU7a0JBQ3hCLDRFQUFDVyxRQUFNO1lBQUNGLFNBQVMsRUFBRVQsMEVBQWdCOzs4QkFDakMsOERBQUNhLEdBQUM7OEJBQUMsMkJBRUg7Ozs7O3lCQUFJOzhCQUNKLDhEQUFDWiwrREFBVztvQkFBQ2EsT0FBTyxFQUFFUCx1QkFBdUI7Ozs7O3lCQUFJOzhCQUNqRCw4REFBQ00sR0FBQzs4QkFBRSxXQUFVLENBQVUsT0FBUlIsUUFBTyxDQUFFOzs7Ozt5QkFBSzs4QkFDOUIsOERBQUNRLEdBQUM7OEJBQUUsV0FBVSxDQUFVLE1BQUksQ0FBWlYsT0FBTyxFQUFDLE1BQUksQ0FBQzs7Ozs7eUJBQUs7Ozs7OztpQkFDM0I7Ozs7O2FBQ0wsQ0FDUDtDQUNGO0dBckJLRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUF1QlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQWRkcmVzc0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRyZXNzRm9ybSdcbmltcG9ydCAqIGFzIHdlYjMgZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBhZGRyZXNzU3VibWl0dGVkSGFuZGxlciA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBZGRyZXNzKGFkZHJlc3MpXG4gICAgc2V0QmFsYW5jZSgxMDAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFN0YXJ0IFlvdXIgU29sYW5hIEpvdXJuZXlcbiAgICAgICAgPC9wPlxuICAgICAgICA8QWRkcmVzc0Zvcm0gaGFuZGxlcj17YWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXJ9IC8+XG4gICAgICAgIDxwPntgQWRkcmVzczogJHthZGRyZXNzfWB9PC9wPlxuICAgICAgICA8cD57YEJhbGFuY2U6ICR7YmFsYW5jZX0gU09MYH08L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJBZGRyZXNzRm9ybSIsIkhvbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJBcHAiLCJoZWFkZXIiLCJBcHBIZWFkZXIiLCJwIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});