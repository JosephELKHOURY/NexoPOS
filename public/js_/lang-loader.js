/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknexopos_4x"] = self["webpackChunknexopos_4x"] || []).push([["/js/lang-loader"],{

/***/ "./resources/ts/lang-loader.ts":
/*!*************************************!*\
  !*** ./resources/ts/lang-loader.ts ***!
  \*************************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar NsLanguage = /*#__PURE__*/function () {\n  function NsLanguage() {\n    _classCallCheck(this, NsLanguage);\n\n    this.languages = {};\n    this.scripts = [];\n    this.callbacks = [];\n    this.loadJson();\n  }\n\n  _createClass(NsLanguage, [{\n    key: \"loadJson\",\n    value: function loadJson() {\n      var _this = this;\n\n      var promises = [];\n      /**\n       * the language for NexoPOS is\n       * fetched in priority\n       */\n\n      promises.push(this.fetchLang('NexoPOS', ns.langFiles));\n\n      for (var namespace in ns.langFiles) {\n        if (namespace !== 'NexoPOS') {\n          promises.push(this.fetchLang(namespace, ns.langFiles));\n        }\n      }\n\n      Promise.all(promises).then(function () {\n        _this.loadReadyScripts();\n\n        _this.loadReadyCallbacks();\n      });\n    }\n  }, {\n    key: \"fetchLang\",\n    value: function fetchLang(namespace, files) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        var xhttp = new XMLHttpRequest();\n\n        xhttp.onreadystatechange = function (e) {\n          if (e.target.readyState == 4 && e.target.status == 200) {\n            var result = JSON.parse(xhttp.responseText);\n\n            for (var key in result) {\n              if (_this2.languages[namespace] === undefined) {\n                _this2.languages[namespace] = new Object();\n              }\n\n              _this2.languages[namespace][key] = result[key];\n            }\n\n            resolve(_this2.languages);\n          }\n        };\n\n        xhttp.open(\"GET\", files[namespace], true);\n        xhttp.send();\n      });\n    }\n  }, {\n    key: \"loadReadyScripts\",\n    value: function loadReadyScripts() {\n      var scripts = this.scripts;\n\n      for (var i = 0; i < scripts.length; i++) {\n        // get some kind of XMLHttpRequest\n        // const xhrObj = new XMLHttpRequest();\n        // open and send a synchronous request\n        // xhrObj.open('GET', scripts[i], false);\n        // xhrObj.send('');\n        // add the returned content to a newly created script tag\n        var script = document.createElement('script');\n        script.type = \"text/javascript\";\n        script.src = scripts[i];\n        document.body.appendChild(script);\n      }\n    }\n  }, {\n    key: \"loadReadyCallbacks\",\n    value: function loadReadyCallbacks() {\n      this.callbacks.forEach(function (callback) {\n        return callback();\n      });\n    }\n  }, {\n    key: \"onReadyCallback\",\n    value: function onReadyCallback(callback) {\n      this.callbacks.push(callback);\n    }\n  }, {\n    key: \"onReadyScript\",\n    value: function onReadyScript(script) {\n      if (script.length !== undefined) {\n        var _this$scripts;\n\n        (_this$scripts = this.scripts).push.apply(_this$scripts, _toConsumableArray(script));\n      } else {\n        this.scripts.push(script);\n      }\n    }\n  }, {\n    key: \"getEntries\",\n    value: function getEntries(namespace) {\n      return this.languages[namespace] || false;\n    }\n  }]);\n\n  return NsLanguage;\n}();\n\nwindow.nsLanguage = new NsLanguage();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFoQztBQUNIOzs7V0FFRCx5QkFBaUJBLFFBQWpCLEVBQXlCO0FBQ3JCLFdBQUtGLFNBQUwsQ0FBZXhDLElBQWYsQ0FBcUIwQyxRQUFyQjtBQUNIOzs7V0FFRCx1QkFBZVQsTUFBZixFQUFxQjtBQUNqQixVQUFLQSxNQUFNLENBQUNELE1BQVAsS0FBa0JOLFNBQXZCLEVBQW1DO0FBQUE7O0FBQy9CLDhCQUFLSSxPQUFMLEVBQWE5QixJQUFiLHlDQUFzQmlDLE1BQXRCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0gsT0FBTCxDQUFhOUIsSUFBYixDQUFtQmlDLE1BQW5CO0FBQ0g7QUFDSjs7O1dBRUQsb0JBQVk3QixTQUFaLEVBQXFCO0FBQ2pCLGFBQU8sS0FBS3FCLFNBQUwsQ0FBZ0JyQixTQUFoQixLQUErQixLQUF0QztBQUNIOzs7Ozs7QUFHSHVDLE1BQWUsQ0FBQ0MsVUFBaEIsR0FBdUMsSUFBSS9DLFVBQUosRUFBdkMiLCJuYW1lcyI6WyJOc0xhbmd1YWdlIiwibG9hZEpzb24iLCJwcm9taXNlcyIsInB1c2giLCJmZXRjaExhbmciLCJucyIsImxhbmdGaWxlcyIsIm5hbWVzcGFjZSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwibG9hZFJlYWR5U2NyaXB0cyIsImxvYWRSZWFkeUNhbGxiYWNrcyIsImZpbGVzIiwicmVzb2x2ZSIsInJlamVjdCIsInhodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImtleSIsImxhbmd1YWdlcyIsInVuZGVmaW5lZCIsIk9iamVjdCIsIm9wZW4iLCJzZW5kIiwic2NyaXB0cyIsImkiLCJsZW5ndGgiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FsbGJhY2tzIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwid2luZG93IiwibnNMYW5ndWFnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4b3Bvcy00eC8uL3Jlc291cmNlcy90cy9sYW5nLWxvYWRlci50cz9kNWIxIl0sInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgbnM7XG5kZWNsYXJlIGNvbnN0IG5zSHR0cENsaWVudDtcbmRlY2xhcmUgY29uc3QgUnhKUztcbmNsYXNzIE5zTGFuZ3VhZ2Uge1xuICAgIHByaXZhdGUgbGFuZ3VhZ2VzICAgPSAgIHt9O1xuICAgIHByaXZhdGUgc2NyaXB0cyAgICAgPSAgIFtdO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzICAgPSAgIFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9hZEpzb24oKTtcbiAgICB9XG5cbiAgICBsb2FkSnNvbigpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgID0gICBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIGxhbmd1YWdlIGZvciBOZXhvUE9TIGlzXG4gICAgICAgICAqIGZldGNoZWQgaW4gcHJpb3JpdHlcbiAgICAgICAgICovXG4gICAgICAgIHByb21pc2VzLnB1c2goIHRoaXMuZmV0Y2hMYW5nKCAnTmV4b1BPUycsIG5zLmxhbmdGaWxlcyApICk7XG4gICAgICAgIFxuICAgICAgICBmb3IoIGxldCBuYW1lc3BhY2UgaW4gbnMubGFuZ0ZpbGVzICkge1xuICAgICAgICAgICAgaWYgKCBuYW1lc3BhY2UgIT09ICdOZXhvUE9TJyApIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKCB0aGlzLmZldGNoTGFuZyggbmFtZXNwYWNlLCBucy5sYW5nRmlsZXMgKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoIHByb21pc2VzICkudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkUmVhZHlTY3JpcHRzKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRSZWFkeUNhbGxiYWNrcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmZXRjaExhbmcoIG5hbWVzcGFjZSwgZmlsZXMgKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHR0cCAgICAgICAgICAgICAgICAgPSAgIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlICAgID0gICAoIGUgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAoPFhNTEh0dHBSZXF1ZXN0PmUudGFyZ2V0KS5yZWFkeVN0YXRlID09IDQgJiYgKDxYTUxIdHRwUmVxdWVzdD5lLnRhcmdldCkuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgICA9ICAgSlNPTi5wYXJzZSggeGh0dHAucmVzcG9uc2VUZXh0ICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBrZXkgaW4gcmVzdWx0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmxhbmd1YWdlc1sgbmFtZXNwYWNlIF0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1sgbmFtZXNwYWNlIF0gICAgID0gICBuZXcgT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1sgbmFtZXNwYWNlIF1bIGtleSBdICAgPSAgIHJlc3VsdFsga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCB0aGlzLmxhbmd1YWdlcyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHR0cC5vcGVuKFwiR0VUXCIsIGZpbGVzW25hbWVzcGFjZV0sIHRydWUpO1xuICAgICAgICAgICAgeGh0dHAuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkUmVhZHlTY3JpcHRzKCkge1xuICAgICAgICBjb25zdCBzY3JpcHRzICAgPSAgIHRoaXMuc2NyaXB0cztcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIC8vIGdldCBzb21lIGtpbmQgb2YgWE1MSHR0cFJlcXVlc3RcbiAgICAgICAgICAgIC8vIGNvbnN0IHhock9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgLy8gb3BlbiBhbmQgc2VuZCBhIHN5bmNocm9ub3VzIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIHhock9iai5vcGVuKCdHRVQnLCBzY3JpcHRzW2ldLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyB4aHJPYmouc2VuZCgnJyk7XG4gICAgICAgICAgICAvLyBhZGQgdGhlIHJldHVybmVkIGNvbnRlbnQgdG8gYSBuZXdseSBjcmVhdGVkIHNjcmlwdCB0YWdcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyAgPSBzY3JpcHRzW2ldO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlYWR5Q2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKCBjYWxsYmFjayA9PiBjYWxsYmFjaygpICk7XG4gICAgfVxuXG4gICAgb25SZWFkeUNhbGxiYWNrKCBjYWxsYmFjayApIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcbiAgICB9XG5cbiAgICBvblJlYWR5U2NyaXB0KCBzY3JpcHQgKSB7XG4gICAgICAgIGlmICggc2NyaXB0Lmxlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRzLnB1c2goIC4uLnNjcmlwdCApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRzLnB1c2goIHNjcmlwdCApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RW50cmllcyggbmFtZXNwYWNlICkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXNbIG5hbWVzcGFjZSBdIHx8IGZhbHNlO1xuICAgIH1cbn1cblxuKCB3aW5kb3cgYXMgYW55ICkubnNMYW5ndWFnZSAgICAgICAgID0gICBuZXcgTnNMYW5ndWFnZTtcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvdHMvbGFuZy1sb2FkZXIudHMuanMifQ==\n//# sourceURL=webpack-internal:///./resources/ts/lang-loader.ts\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/ts/lang-loader.ts"));
/******/ }
]);