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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_whatmode_Documents_solana_dev_course_solana_intro_frontend_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_whatmode_Documents_solana_dev_course_solana_intro_frontend_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_whatmode_Documents_solana_dev_course_solana_intro_frontend_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), balance1 = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var addressSubmittedHandler = function() {\n        var _ref = _asyncToGenerator(_Users_whatmode_Documents_solana_dev_course_solana_intro_frontend_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n            var key, connection, balance;\n            return _Users_whatmode_Documents_solana_dev_course_solana_intro_frontend_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setAddress(address);\n                        key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(address);\n                        connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.clusterApiUrl(\"devnet\"));\n                        _ctx.next = 5;\n                        return connection.getBalance(key);\n                    case 5:\n                        balance = _ctx.sent;\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addressSubmittedHandler(address) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance1, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/whatmode/Documents/solana-dev-course/solana-intro-frontend-starter/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"cGJ+TUJ/GjeI0/rpwUW46QWmAoM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFHYztBQUNLO0FBQ1o7O0FBRXZDLElBQU1JLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUE4QkosR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVQzQyxRQVNnQixHQUFnQkEsR0FBVyxHQUEzQixFQVRoQixVQVM0QixHQUFJQSxHQUFXLEdBQWY7SUFDMUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFWNUMsUUFVZ0IsR0FBZ0JBLElBQVksR0FBNUIsRUFWaEIsVUFVNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUUxQixJQUFNUyx1QkFBdUI7bUJBQUcsd05BQU9GLE9BQWUsRUFBSztnQkFFbkRHLEdBQUcsRUFDSEMsVUFBVSxFQUNWTixPQUFPOzs7O3dCQUhiRyxVQUFVLENBQUNELE9BQU8sQ0FBQzt3QkFDYkcsR0FBRyxHQUFHLElBQUlQLHNEQUFjLENBQUNJLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQ0ksVUFBVSxHQUFHLElBQUlSLHVEQUFlLENBQUNBLDBEQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OytCQUMvQ1EsVUFBVSxDQUFDSSxVQUFVLENBQUNMLEdBQUcsQ0FBQzs7d0JBQTFDTCxPQUFPLFlBQW1DOzs7Ozs7U0FDakQ7d0JBTEtJLHVCQUF1QixDQUFVRixPQUFlOzs7T0FLckQ7SUFFRCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUVoQixvRUFBVTtrQkFDeEIsNEVBQUNrQixRQUFNO1lBQUNGLFNBQVMsRUFBRWhCLDBFQUFnQjs7OEJBQ2pDLDhEQUFDb0IsR0FBQzs4QkFBQywyQkFFSDs7Ozs7eUJBQUk7OEJBQ0osOERBQUNuQiwrREFBVztvQkFBQ29CLE9BQU8sRUFBRWIsdUJBQXVCOzs7Ozt5QkFBSTs4QkFDakQsOERBQUNZLEdBQUM7OEJBQUUsV0FBVSxDQUFVLE9BQVJkLFFBQU8sQ0FBRTs7Ozs7eUJBQUs7OEJBQzlCLDhEQUFDYyxHQUFDOzhCQUFFLFdBQVUsQ0FBVSxNQUFJLENBQVpoQixRQUFPLEVBQUMsTUFBSSxDQUFDOzs7Ozt5QkFBSzs7Ozs7O2lCQUMzQjs7Ozs7YUFDTCxDQUNQO0NBQ0Y7R0F2QktELElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXlCViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBBZGRyZXNzRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0FkZHJlc3NGb3JtJ1xuaW1wb3J0ICogYXMgd2ViMyBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCJcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyID0gYXN5bmMgKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHNldEFkZHJlc3MoYWRkcmVzcylcbiAgICBjb25zdCBrZXkgPSBuZXcgd2ViMy5QdWJsaWNLZXkoYWRkcmVzcyk7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyB3ZWIzLkNvbm5lY3Rpb24od2ViMy5jbHVzdGVyQXBpVXJsKCdkZXZuZXQnKSk7XG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShrZXkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFN0YXJ0IFlvdXIgU29sYW5hIEpvdXJuZXlcbiAgICAgICAgPC9wPlxuICAgICAgICA8QWRkcmVzc0Zvcm0gaGFuZGxlcj17YWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXJ9IC8+XG4gICAgICAgIDxwPntgQWRkcmVzczogJHthZGRyZXNzfWB9PC9wPlxuICAgICAgICA8cD57YEJhbGFuY2U6ICR7YmFsYW5jZX0gU09MYH08L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJBZGRyZXNzRm9ybSIsIndlYjMiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyIiwia2V5IiwiY29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkNvbm5lY3Rpb24iLCJjbHVzdGVyQXBpVXJsIiwiZ2V0QmFsYW5jZSIsImRpdiIsImNsYXNzTmFtZSIsIkFwcCIsImhlYWRlciIsIkFwcEhlYWRlciIsInAiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});