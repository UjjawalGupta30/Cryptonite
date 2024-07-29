"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/explore/[coin_id]/page",{

/***/ "(app-pages-browser)/./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   fetchOHLCData: function() { return /* binding */ fetchOHLCData; },\n/* harmony export */   formatTimestamp: function() { return /* binding */ formatTimestamp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\nconst fetchOHLCData = async (coinId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.coingecko.com/api/v3/coins/\".concat(coinId, \"/ohlc\"), {\n        params: {\n            vs_currency: \"usd\",\n            days: \"1\"\n        }\n    });\n    return response.data.map((param)=>{\n        let [timestamp, open, high, low, close] = param;\n        return {\n            timestamp,\n            open,\n            high,\n            low,\n            close\n        };\n    });\n};\nconst formatTimestamp = (timestamp)=>{\n    const date = new Date(timestamp);\n    return \"\".concat(date.getHours(), \":\").concat(date.getMinutes());\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ21CO0FBQ0o7QUFFbEMsU0FBU0c7SUFBRztRQUFHQyxPQUFILHVCQUF1Qjs7SUFDeEMsT0FBT0YsdURBQU9BLENBQUNELDBDQUFJQSxDQUFDRztBQUN0QjtBQUVPLE1BQU1DLGdCQUFnQixPQUFPQztJQUNsQyxNQUFNQyxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQzlCLDBDQUFpRCxPQUFQRixRQUFPLFVBQ2pEO1FBQ0VHLFFBQVE7WUFDTkMsYUFBYTtZQUNiQyxNQUFNO1FBQ1I7SUFDRjtJQUVGLE9BQU9KLFNBQVNLLElBQUksQ0FBQ0MsR0FBRyxDQUN0QjtZQUFDLENBQUNDLFdBQVdDLE1BQU1DLE1BQU1DLEtBQUtDLE1BTTdCO2VBQU07WUFDTEo7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjs7QUFFSixFQUFFO0FBRUssTUFBTUMsa0JBQWtCLENBQUNMO0lBQzlCLE1BQU1NLE9BQU8sSUFBSUMsS0FBS1A7SUFDdEIsT0FBTyxHQUFzQk0sT0FBbkJBLEtBQUtFLFFBQVEsSUFBRyxLQUFxQixPQUFsQkYsS0FBS0csVUFBVTtBQUM5QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvdXRpbHMudHM/N2MxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0eXBlIENsYXNzVmFsdWUsIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY24oLi4uaW5wdXRzOiBDbGFzc1ZhbHVlW10pIHtcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoT0hMQ0RhdGEgPSBhc3luYyAoY29pbklkOiBTdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y29pbklkfS9vaGxjYCxcbiAgICB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdnNfY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgIGRheXM6IFwiMVwiLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG4gIHJldHVybiByZXNwb25zZS5kYXRhLm1hcChcbiAgICAoW3RpbWVzdGFtcCwgb3BlbiwgaGlnaCwgbG93LCBjbG9zZV06IFtcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlclxuICAgIF0pID0+ICh7XG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBvcGVuLFxuICAgICAgaGlnaCxcbiAgICAgIGxvdyxcbiAgICAgIGNsb3NlLFxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKHRpbWVzdGFtcDogRGF0ZSkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgcmV0dXJuIGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX1gO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNsc3giLCJ0d01lcmdlIiwiY24iLCJpbnB1dHMiLCJmZXRjaE9ITENEYXRhIiwiY29pbklkIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJ2c19jdXJyZW5jeSIsImRheXMiLCJkYXRhIiwibWFwIiwidGltZXN0YW1wIiwib3BlbiIsImhpZ2giLCJsb3ciLCJjbG9zZSIsImZvcm1hdFRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/utils.ts\n"));

/***/ })

});