/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const start = new CustomEvent(\"start\", {\r\n        detail: {\r\n            color: \"green\"\r\n        }\r\n    });\r\n\r\n    const stop = new CustomEvent(\"stop\", {\r\n        detail: {\r\n            color: \"red\"\r\n        }\r\n    });\r\n\r\n    const night = new CustomEvent(\"night\", {\r\n        detail: {\r\n            color: \"yellow\"\r\n        }\r\n    });\r\n\r\n    const allLights = document.querySelectorAll(\".trafficLight\");\r\n    let resetBtn = document.querySelector(\"#Do\");\r\n\r\n    allLights.forEach(light => {\r\n\r\n        light.addEventListener(\"night\", (e) => {\r\n            e.target.classList = `trafficLight ${e.detail.color}`\r\n            light.timer = setInterval(() => light.classList.toggle(e.detail.color), 700);\r\n        });\r\n\r\n        light.dispatchEvent(night);\r\n        light.color = \"yellow\";\r\n\r\n        light.addEventListener(\"stop\", (e) => {\r\n            e.target.classList = `trafficLight ${e.detail.color}`;\r\n        })\r\n\r\n        light.addEventListener(\"start\", (e) => {\r\n            clearInterval(light.timer);\r\n            e.target.classList = `trafficLight ${e.detail.color}`;\r\n        });\r\n\r\n        resetBtn.addEventListener(\"click\", () => {\r\n            clearInterval(light.timer);\r\n            light.color = \"yellow\";\r\n            light.dispatchEvent(night)\r\n        })\r\n\r\n        light.addEventListener(\"click\", () => {\r\n            switch (light.color) {\r\n                case \"yellow\": light.dispatchEvent(start)\r\n                    light.color = \"red\";\r\n                    break;\r\n                case \"red\": light.dispatchEvent(stop)\r\n                    light.color = \"green\";\r\n                    break;\r\n                case \"green\": light.dispatchEvent(start)\r\n                    light.color = \"red\";\r\n                    break;\r\n                default: console.log(\"Error\")\r\n            };\r\n\r\n        });\r\n\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });