"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/node-domexception";
exports.ids = ["vendor-chunks/node-domexception"];
exports.modules = {

/***/ "(rsc)/./node_modules/node-domexception/index.js":
/*!*************************************************!*\
  !*** ./node_modules/node-domexception/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ \nif (!globalThis.DOMException) {\n    try {\n        const { MessageChannel } = __webpack_require__(/*! worker_threads */ \"worker_threads\"), port = new MessageChannel().port1, ab = new ArrayBuffer();\n        port.postMessage(ab, [\n            ab,\n            ab\n        ]);\n    } catch (err) {\n        err.constructor.name === \"DOMException\" && (globalThis.DOMException = err.constructor);\n    }\n}\nmodule.exports = globalThis.DOMException;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm9kZS1kb21leGNlcHRpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGO0FBRXhGLElBQUksQ0FBQ0EsV0FBV0MsWUFBWSxFQUFFO0lBQzVCLElBQUk7UUFDRixNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyx5Q0FDbkNDLE9BQU8sSUFBSUYsaUJBQWlCRyxLQUFLLEVBQ2pDQyxLQUFLLElBQUlDO1FBQ1RILEtBQUtJLFdBQVcsQ0FBQ0YsSUFBSTtZQUFDQTtZQUFJQTtTQUFHO0lBQy9CLEVBQUUsT0FBT0csS0FBSztRQUNaQSxJQUFJQyxXQUFXLENBQUNDLElBQUksS0FBSyxrQkFDdkJYLENBQUFBLFdBQVdDLFlBQVksR0FBR1EsSUFBSUMsV0FBVztJQUU3QztBQUNGO0FBRUFFLE9BQU9DLE9BQU8sR0FBR2IsV0FBV0MsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL25hbWUvLi9ub2RlX21vZHVsZXMvbm9kZS1kb21leGNlcHRpb24vaW5kZXguanM/YWUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9kZS1kb21leGNlcHRpb24uIE1JVCBMaWNlbnNlLiBKaW1teSBXw6RydGluZyA8aHR0cHM6Ly9qaW1teS53YXJ0aW5nLnNlL29wZW5zb3VyY2U+ICovXG5cbmlmICghZ2xvYmFsVGhpcy5ET01FeGNlcHRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IE1lc3NhZ2VDaGFubmVsIH0gPSByZXF1aXJlKCd3b3JrZXJfdGhyZWFkcycpLFxuICAgIHBvcnQgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKS5wb3J0MSxcbiAgICBhYiA9IG5ldyBBcnJheUJ1ZmZlcigpXG4gICAgcG9ydC5wb3N0TWVzc2FnZShhYiwgW2FiLCBhYl0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRE9NRXhjZXB0aW9uJyAmJiAoXG4gICAgICBnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbiA9IGVyci5jb25zdHJ1Y3RvclxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uXG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsIkRPTUV4Y2VwdGlvbiIsIk1lc3NhZ2VDaGFubmVsIiwicmVxdWlyZSIsInBvcnQiLCJwb3J0MSIsImFiIiwiQXJyYXlCdWZmZXIiLCJwb3N0TWVzc2FnZSIsImVyciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/node-domexception/index.js\n");

/***/ })

};
;