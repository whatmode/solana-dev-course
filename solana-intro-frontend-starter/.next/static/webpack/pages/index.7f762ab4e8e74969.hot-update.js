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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var addressSubmittedHandler = function(address) {\n        setAddress(address);\n        var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n        var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"cGJ+TUJ/GjeI0/rpwUW46QWmAoM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2dDO0FBR2M7QUFDSztBQUNaOztBQUV2QyxJQUFNSSxJQUFJLEdBQWEsV0FBTTs7SUFDM0IsSUFBOEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUM0MsT0FTZ0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFUaEIsVUFTNEIsR0FBSUEsR0FBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVjVDLFFBVWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBVmhCLFVBVTRCLEdBQUlBLElBQVksR0FBaEI7SUFFMUIsSUFBTVMsdUJBQXVCLEdBQUcsU0FBQ0YsT0FBZSxFQUFLO1FBQ25EQyxVQUFVLENBQUNELE9BQU8sQ0FBQztRQUNuQixJQUFNRyxHQUFHLEdBQUcsSUFBSVAsc0RBQWMsQ0FBQ0ksT0FBTyxDQUFDO1FBQ3ZDLElBQU1LLFVBQVUsR0FBRyxJQUFJVCx1REFBZSxDQUFDQSwwREFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyRTtJQUVELHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLFNBQVMsRUFBRWYsb0VBQVU7a0JBQ3hCLDRFQUFDaUIsUUFBTTtZQUFDRixTQUFTLEVBQUVmLDBFQUFnQjs7OEJBQ2pDLDhEQUFDbUIsR0FBQzs4QkFBQywyQkFFSDs7Ozs7eUJBQUk7OEJBQ0osOERBQUNsQiwrREFBVztvQkFBQ21CLE9BQU8sRUFBRVosdUJBQXVCOzs7Ozt5QkFBSTs4QkFDakQsOERBQUNXLEdBQUM7OEJBQUUsV0FBVSxDQUFVLE9BQVJiLFFBQU8sQ0FBRTs7Ozs7eUJBQUs7OEJBQzlCLDhEQUFDYSxHQUFDOzhCQUFFLFdBQVUsQ0FBVSxNQUFJLENBQVpmLE9BQU8sRUFBQyxNQUFJLENBQUM7Ozs7O3lCQUFLOzs7Ozs7aUJBQzNCOzs7OzthQUNMLENBQ1A7Q0FDRjtHQXRCS0QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0nXG5pbXBvcnQgKiBhcyB3ZWIzIGZyb20gXCJAc29sYW5hL3dlYjMuanNcIlxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgYWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXIgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWRkcmVzcyhhZGRyZXNzKVxuICAgIGNvbnN0IGtleSA9IG5ldyB3ZWIzLlB1YmxpY0tleShhZGRyZXNzKTtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IHdlYjMuQ29ubmVjdGlvbih3ZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5BcHBIZWFkZXJ9PlxuICAgICAgICA8cD5cbiAgICAgICAgICBTdGFydCBZb3VyIFNvbGFuYSBKb3VybmV5XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEFkZHJlc3NGb3JtIGhhbmRsZXI9e2FkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyfSAvPlxuICAgICAgICA8cD57YEFkZHJlc3M6ICR7YWRkcmVzc31gfTwvcD5cbiAgICAgICAgPHA+e2BCYWxhbmNlOiAke2JhbGFuY2V9IFNPTGB9PC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQWRkcmVzc0Zvcm0iLCJ3ZWIzIiwiSG9tZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhZGRyZXNzU3VibWl0dGVkSGFuZGxlciIsImtleSIsIlB1YmxpY0tleSIsImNvbm5lY3Rpb24iLCJDb25uZWN0aW9uIiwiY2x1c3RlckFwaVVybCIsImRpdiIsImNsYXNzTmFtZSIsIkFwcCIsImhlYWRlciIsIkFwcEhlYWRlciIsInAiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});