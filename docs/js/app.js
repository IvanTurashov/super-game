/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ \"./node_modules/bootstrap-vue/dist/bootstrap-vue.css\");\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/@vue/composition-api/dist/vue-composition-api.module.js\");\n/* harmony import */ var _components_Game_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Game.vue */ \"./src/components/Game.vue\");\n/* harmony import */ var _components_TargetCreator_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TargetCreator.vue */ \"./src/components/TargetCreator.vue\");\n/* harmony import */ var _components_Winner_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Winner.vue */ \"./src/components/Winner.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"defineComponent\"])({\n  name: 'App',\n  components: {\n    Game: _components_Game_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    TargetCreator: _components_TargetCreator_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Winner: _components_Winner_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  setup: function setup() {\n    var targets = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])([]);\n    var winnerName = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])('');\n    var isGameStarted = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"computed\"])(function () {\n      return targets.value.length > 0;\n    });\n\n    var onWin = function onWin(name) {\n      targets.value = [];\n      winnerName.value = name;\n    };\n\n    var startNewGame = function startNewGame() {\n      winnerName.value = '';\n    };\n\n    return {\n      targets: targets,\n      winnerName: winnerName,\n      isGameStarted: isGameStarted,\n      onWin: onWin,\n      startNewGame: startNewGame\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Game.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/@vue/composition-api/dist/vue-composition-api.module.js\");\n/* harmony import */ var _Game_CoreGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Game/CoreGame */ \"./src/Game/CoreGame.ts\");\n/* harmony import */ var _components_TargetCreator_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TargetCreator.vue */ \"./src/components/TargetCreator.vue\");\n\n\n\n/* eslint-disable @typescript-eslint/no-non-null-assertion */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"defineComponent\"])({\n  name: 'Game',\n  components: {\n    TargetCreator: _components_TargetCreator_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  props: {\n    targetKeys: {\n      type: Array,\n      required: true\n    }\n  },\n  setup: function setup(_ref, _ref2) {\n    var targetKeys = _ref.targetKeys;\n    var emit = _ref2.emit;\n    var canvas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])({});\n    var game = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])(null);\n\n    var init = function init() {\n      var ctx = canvas.value.getContext('2d');\n      var _window = window,\n          width = _window.innerWidth,\n          height = _window.innerHeight;\n      game.value = new _Game_CoreGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx, {\n        width: width,\n        height: height\n      });\n      targetKeys.forEach(function (key) {\n        return game.value.addTarget(key);\n      });\n    };\n\n    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__[\"onMounted\"])(function () {\n      init();\n      canvas.value.addEventListener('win', function (e) {\n        emit('win', e.detail.winnerName);\n      });\n    });\n    return {\n      canvas: canvas\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/Game.vue?./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TargetCreator.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TargetCreator.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/@vue/composition-api/dist/vue-composition-api.module.js\");\n/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ \"./node_modules/bootstrap-vue/esm/index.js\");\n/* harmony import */ var _startMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startMembers */ \"./src/components/startMembers.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: 'TargetsCreator',\n  components: {\n    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__[\"BFormTags\"],\n    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__[\"BButton\"],\n    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__[\"BForm\"]\n  },\n  setup: function setup(props, _ref) {\n    var emit = _ref.emit;\n    var targets = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])(_startMembers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    var addTargets = function addTargets() {\n      emit('input', targets.value);\n    };\n\n    return {\n      targets: targets,\n      addTargets: addTargets\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/TargetCreator.vue?./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Winner.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/@vue/composition-api/dist/vue-composition-api.module.js\");\n/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-confetti */ \"./node_modules/vue-confetti/dist/vue-confetti.js\");\n/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ \"./node_modules/bootstrap-vue/esm/index.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_confetti__WEBPACK_IMPORTED_MODULE_2___default.a);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__[\"defineComponent\"])({\n  name: 'Winner',\n  components: {\n    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__[\"BButton\"]\n  },\n  props: {\n    winnerName: {\n      type: String,\n      required: true\n    }\n  },\n  setup: function setup(props, _ref) {\n    var emit = _ref.emit,\n        root = _ref.root;\n\n    var startNewGame = function startNewGame() {\n      emit('new-game');\n    };\n\n    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__[\"onMounted\"])(function () {\n      root.$confetti.start();\n    });\n    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__[\"onUnmounted\"])(function () {\n      root.$confetti.stop();\n    });\n    return {\n      startNewGame: startNewGame\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/Winner.vue?./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bebda70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"app\" } },\n    [\n      _vm.isGameStarted\n        ? _c(\"Game\", {\n            attrs: { \"target-keys\": _vm.targets },\n            on: { win: _vm.onWin }\n          })\n        : _c(\n            \"div\",\n            {\n              staticClass:\n                \"h-100 d-flex flex-row justify-content-center align-items-center\"\n            },\n            [\n              _vm.winnerName\n                ? _c(\"winner\", {\n                    attrs: { \"winner-name\": _vm.winnerName },\n                    on: { \"new-game\": _vm.startNewGame }\n                  })\n                : _c(\"target-creator\", {\n                    staticClass: \"w-25\",\n                    model: {\n                      value: _vm.targets,\n                      callback: function($$v) {\n                        _vm.targets = $$v\n                      },\n                      expression: \"targets\"\n                    }\n                  })\n            ],\n            1\n          )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220bebda70-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bebda70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"canvas\", { ref: \"canvas\" })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Game.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220bebda70-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bebda70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-form\",\n    {\n      on: {\n        submit: function($event) {\n          $event.preventDefault()\n          return _vm.addTargets($event)\n        }\n      }\n    },\n    [\n      _c(\"b-form-tags\", {\n        ref: \"tagsInput\",\n        staticClass: \"mb-2\",\n        attrs: { placeholder: \"Добавить названия целей\" },\n        model: {\n          value: _vm.targets,\n          callback: function($$v) {\n            _vm.targets = $$v\n          },\n          expression: \"targets\"\n        }\n      }),\n      _c(\n        \"b-button\",\n        {\n          staticClass: \"mr-2\",\n          attrs: { variant: \"success\", type: \"submit\", block: \"\" }\n        },\n        [_vm._v(\" Let's play! \")]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/TargetCreator.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220bebda70-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=template&id=5aaa6eef&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bebda70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Winner.vue?vue&type=template&id=5aaa6eef& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"winner\" },\n    [\n      _c(\"div\", { staticClass: \"winner__name\" }, [\n        _vm._v(_vm._s(_vm.winnerName) + \"!\")\n      ]),\n      _c(\n        \"b-button\",\n        { attrs: { variant: \"success\" }, on: { click: _vm.startNewGame } },\n        [_vm._v(\" New Game \")]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Winner.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220bebda70-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nhtml, body, #app {\\n  height: 100%;\\n}\\nbody {\\n  margin: 0;\\n  background: radial-gradient(circle, rgba(252, 247, 174, 1) 0%, rgba(223, 197, 75, 1) 100%);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\ncanvas[data-v-6ca3af22] {\\n  vertical-align: top;\\n  background-color: antiquewhite;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Game.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Winner.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.winner {\\n  z-index: 1;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n.winner__name {\\n  color: #e54d18;\\n  font-size: 60px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  font-family: 'Open Sans', sans-serif;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Winner.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"fa1ef42a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4c666488\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Game.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Winner.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Winner.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0b6f2973\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Winner.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./src/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--14-0!../node_modules/babel-loader/lib!../node_modules/ts-loader??ref--14-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0bebda70-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/Game/Bullet.ts":
/*!****************************!*\
  !*** ./src/Game/Bullet.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _assets_shot_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/shot.png */ \"./src/assets/shot.png\");\n/* harmony import */ var _assets_shot_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_shot_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _patterns_ImageFlyweightFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/patterns/ImageFlyweightFactory */ \"./src/patterns/ImageFlyweightFactory.ts\");\n\n\n\n\nvar bulletFlyweight = Object(_patterns_ImageFlyweightFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_assets_shot_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n\nvar Bullet = /*#__PURE__*/function () {\n  function Bullet(canvasCtx, position, direction) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Bullet);\n\n    this.size = {\n      width: 20,\n      height: 10\n    };\n    this.speed = 80;\n    this.position = position;\n    this.direction = direction;\n    this.canvasCtx = canvasCtx;\n    this.velocity = {\n      x: direction.x * this.speed,\n      y: direction.y * this.speed\n    };\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Bullet, [{\n    key: \"render\",\n    value: function render() {\n      this.position.x += this.velocity.x;\n      this.position.y += this.velocity.y;\n      this.canvasCtx.drawImage(bulletFlyweight.getImage(), this.position.x, this.position.y, this.size.width, this.size.height);\n    }\n  }]);\n\n  return Bullet;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/Game/Bullet.ts?");

/***/ }),

/***/ "./src/Game/Collision.ts":
/*!*******************************!*\
  !*** ./src/Game/Collision.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Collision; });\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n\n\nvar Collision = /*#__PURE__*/function () {\n  function Collision() {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Collision);\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Collision, null, [{\n    key: \"checkCollision\",\n    value: function checkCollision(objectsA, objectsB, onCollide) {\n      objectsA.forEach(function (objA) {\n        objectsB.forEach(function (objB) {\n          var rightSideObjA = objA.position.x + objA.size.width;\n          var leftSideObjA = objA.position.x;\n          var topSideObjA = objA.position.y;\n          var bottomSideObjA = objA.position.y + objA.size.height;\n          var rightSideObjB = objB.position.x + objB.size.width;\n          var leftSideObjB = objB.position.x;\n          var topSideObjB = objB.position.y;\n          var bottomSideObjB = objB.position.y + objB.size.height;\n          var inXRange = rightSideObjA > leftSideObjB && rightSideObjA < rightSideObjB || leftSideObjA < rightSideObjB && leftSideObjA > leftSideObjB;\n          var inYRange = topSideObjA < bottomSideObjB && topSideObjA > topSideObjB || bottomSideObjA > topSideObjB && bottomSideObjA < bottomSideObjB;\n          if (inXRange && inYRange) onCollide(objA, objB);\n        });\n      });\n    }\n  }]);\n\n  return Collision;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Game/Collision.ts?");

/***/ }),

/***/ "./src/Game/CoreGame.ts":
/*!******************************!*\
  !*** ./src/Game/CoreGame.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Game_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Game/Player */ \"./src/Game/Player.ts\");\n/* harmony import */ var _Game_Collision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Game/Collision */ \"./src/Game/Collision.ts\");\n/* harmony import */ var _Game_TargetFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Game/TargetFactory */ \"./src/Game/TargetFactory.ts\");\n/* harmony import */ var _assets_BACKGROUND_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/BACKGROUND.png */ \"./src/assets/BACKGROUND.png\");\n/* harmony import */ var _assets_BACKGROUND_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_BACKGROUND_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_background_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/background.mp3 */ \"./src/assets/background.mp3\");\n/* harmony import */ var _assets_background_mp3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_background_mp3__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/shared/utils */ \"./src/shared/utils.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvasCtx, gameConfig) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Game);\n\n    this.targets = [];\n    this.backgroundImage = new Image();\n    this.canvasCtx = canvasCtx;\n    this.canvasCtx.canvas.width = gameConfig.width;\n    this.canvasCtx.canvas.height = gameConfig.height;\n    this.targetFactory = new _Game_TargetFactory__WEBPACK_IMPORTED_MODULE_9__[\"default\"](canvasCtx);\n    this.player = new _Game_Player__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.canvasCtx, {\n      x: 50,\n      y: this.canvasCtx.canvas.height - 150\n    });\n    this.backgroundImage.src = _assets_BACKGROUND_png__WEBPACK_IMPORTED_MODULE_10___default.a;\n    this.render();\n    Object(_shared_utils__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(_assets_background_mp3__WEBPACK_IMPORTED_MODULE_11___default.a, true);\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Game, [{\n    key: \"shoot\",\n    value: function shoot(bullet, target) {\n      this.player.destroyBullet(bullet);\n      this.targets = this.targets.filter(function (t) {\n        return t !== target;\n      });\n      this.emitWinner(target.key);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var canvas = this.canvasCtx.canvas;\n      this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);\n      this.renderBackground();\n      this.player.render();\n      this.renderTargets();\n      _Game_Collision__WEBPACK_IMPORTED_MODULE_8__[\"default\"].checkCollision(this.player.bullets, this.targets, this.shoot);\n      window.requestAnimationFrame(function () {\n        _this.renderTargets();\n\n        _this.render();\n      });\n    }\n  }, {\n    key: \"renderBackground\",\n    value: function renderBackground() {\n      var canvas = this.canvasCtx.canvas;\n      this.canvasCtx.drawImage(this.backgroundImage, 0, 0, canvas.width, canvas.height);\n    }\n  }, {\n    key: \"addTarget\",\n    value: function addTarget(key) {\n      var target = this.targetFactory.create(key);\n      this.targets.push(target);\n    }\n  }, {\n    key: \"renderTargets\",\n    value: function renderTargets() {\n      this.targets.forEach(function (t) {\n        t.render();\n      });\n    }\n  }, {\n    key: \"emitWinner\",\n    value: function emitWinner(winnerName) {\n      var onWin = new CustomEvent('win', {\n        detail: {\n          winnerName: winnerName\n        }\n      });\n      this.canvasCtx.canvas.dispatchEvent(onWin);\n    }\n  }]);\n\n  return Game;\n}();\n\nObject(tslib__WEBPACK_IMPORTED_MODULE_5__[\"__decorate\"])([decko__WEBPACK_IMPORTED_MODULE_6__[\"bind\"]], Game.prototype, \"shoot\", null);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game/CoreGame.ts?");

/***/ }),

/***/ "./src/Game/Player.ts":
/*!****************************!*\
  !*** ./src/Game/Player.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ \"./node_modules/core-js/modules/es.array.fill.js\");\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Game_Bullet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Game/Bullet */ \"./src/Game/Bullet.ts\");\n/* harmony import */ var _assets_player_1_right_arm_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/player/1_right arm.png */ \"./src/assets/player/1_right arm.png\");\n/* harmony import */ var _assets_player_1_right_arm_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_right_arm_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_player_1_left_arm_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/player/1_left arm.png */ \"./src/assets/player/1_left arm.png\");\n/* harmony import */ var _assets_player_1_left_arm_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_left_arm_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_player_1_right_leg_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/player/1_right leg.png */ \"./src/assets/player/1_right leg.png\");\n/* harmony import */ var _assets_player_1_right_leg_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_right_leg_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_player_1_left_leg_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/assets/player/1_left leg.png */ \"./src/assets/player/1_left leg.png\");\n/* harmony import */ var _assets_player_1_left_leg_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_left_leg_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_player_1_hend_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/assets/player/1_hend.png */ \"./src/assets/player/1_hend.png\");\n/* harmony import */ var _assets_player_1_hend_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_hend_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_player_1_body_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/assets/player/1_body.png */ \"./src/assets/player/1_body.png\");\n/* harmony import */ var _assets_player_1_body_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_body_png__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_player_1_head_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/assets/player/1_head.png */ \"./src/assets/player/1_head.png\");\n/* harmony import */ var _assets_player_1_head_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_player_1_head_png__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _assets_WEAPON_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/assets/WEAPON.png */ \"./src/assets/WEAPON.png\");\n/* harmony import */ var _assets_WEAPON_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_WEAPON_png__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_shot_gun_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/assets/shot gun.png */ \"./src/assets/shot gun.png\");\n/* harmony import */ var _assets_shot_gun_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_shot_gun_png__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_shoot_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/assets/shoot.mp3 */ \"./src/assets/shoot.mp3\");\n/* harmony import */ var _assets_shoot_mp3__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_shoot_mp3__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/shared/utils */ \"./src/shared/utils.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar sizes = {\n  leftArmImage: {\n    width: 325,\n    height: 235\n  },\n  rightArmImage: {\n    width: 219,\n    height: 332\n  },\n  leftLegImage: {\n    width: 217,\n    height: 255\n  },\n  rightLegImage: {\n    width: 217,\n    height: 255\n  },\n  bodyImage: {\n    width: 442,\n    height: 496\n  },\n  headImage: {\n    width: 753,\n    height: 773\n  },\n  hendImage: {\n    width: 122,\n    height: 179\n  },\n  weaponImage: {\n    width: 349,\n    height: 272\n  },\n  shotGunImage: {\n    width: 138,\n    height: 193\n  }\n};\n\nvar Player = /*#__PURE__*/function () {\n  function Player(canvasCtx, position) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, Player);\n\n    this.bullets = [];\n    this.size = {\n      width: 0,\n      height: 0\n    };\n    this.p = 0.2;\n    this.angleWeapon = 0;\n    this.leftArmImage = new Image();\n    this.rightArmImage = new Image();\n    this.leftLegImage = new Image();\n    this.rightLegImage = new Image();\n    this.bodyImage = new Image();\n    this.headImage = new Image();\n    this.hendImage = new Image();\n    this.weaponImage = new Image();\n    this.shotGunImage = new Image();\n    this.lastShot = 0;\n    this.position = position;\n    this.canvasCtx = canvasCtx;\n    this.leftArmImage.src = _assets_player_1_left_arm_png__WEBPACK_IMPORTED_MODULE_13___default.a;\n    this.rightArmImage.src = _assets_player_1_right_arm_png__WEBPACK_IMPORTED_MODULE_12___default.a;\n    this.leftLegImage.src = _assets_player_1_left_leg_png__WEBPACK_IMPORTED_MODULE_15___default.a;\n    this.rightLegImage.src = _assets_player_1_right_leg_png__WEBPACK_IMPORTED_MODULE_14___default.a;\n    this.bodyImage.src = _assets_player_1_body_png__WEBPACK_IMPORTED_MODULE_17___default.a;\n    this.headImage.src = _assets_player_1_head_png__WEBPACK_IMPORTED_MODULE_18___default.a;\n    this.hendImage.src = _assets_player_1_hend_png__WEBPACK_IMPORTED_MODULE_16___default.a;\n    this.weaponImage.src = _assets_WEAPON_png__WEBPACK_IMPORTED_MODULE_19___default.a;\n    this.shotGunImage.src = _assets_shot_gun_png__WEBPACK_IMPORTED_MODULE_20___default.a;\n    this.sizes = this.generateSizes(sizes);\n    this.weaponPosition = {\n      x: this.position.x + this.sizes.bodyImage.width,\n      y: this.position.y + this.sizes.bodyImage.height * 0.8\n    };\n    this.initEvents();\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Player, [{\n    key: \"generateSizes\",\n    value: function generateSizes(originSizes) {\n      var _this = this;\n\n      var newSize = Object.keys(originSizes).reduce(function (prev, curr) {\n        return Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prev, Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, curr, {\n          width: sizes[curr].width * _this.p,\n          height: sizes[curr].height * _this.p\n        }));\n      }, {});\n      return newSize;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.canvasCtx.beginPath();\n      this.canvasCtx.fillStyle = 'black';\n      this.canvasCtx.fill();\n      this.renderPlayer();\n      this.renderBullets();\n\n      if (Date.now() - this.lastShot < 100) {\n        this.canvasCtx.drawImage(this.shotGunImage, this.weaponPosition.x + this.sizes.weaponImage.width, this.weaponPosition.y - this.sizes.weaponImage.height * 0.25, this.sizes.shotGunImage.width, this.sizes.shotGunImage.height);\n      }\n    }\n  }, {\n    key: \"renderPlayer\",\n    value: function renderPlayer() {\n      this.renderLeftArm();\n      this.renderLeftLeg();\n      this.renderRightLeg();\n      this.renderBody();\n      this.renderHead();\n      this.renderRightArm(); // this.renderLeftLeg();\n    }\n  }, {\n    key: \"renderBody\",\n    value: function renderBody() {\n      this.canvasCtx.drawImage(this.bodyImage, this.position.x, this.position.y, this.sizes.bodyImage.width, this.sizes.bodyImage.height);\n    }\n  }, {\n    key: \"renderLeftArm\",\n    value: function renderLeftArm() {\n      var position = {\n        x: this.position.x + this.sizes.bodyImage.width * 0.8,\n        y: this.position.y + this.sizes.bodyImage.height * 0.25\n      };\n      this.canvasCtx.drawImage(this.leftArmImage, this.position.x + this.sizes.bodyImage.width * 0.8, this.position.y + this.sizes.bodyImage.height * 0.25, this.sizes.leftArmImage.width, this.sizes.leftArmImage.height);\n      this.renderWeapon(position);\n    }\n  }, {\n    key: \"renderRightArm\",\n    value: function renderRightArm() {\n      this.canvasCtx.drawImage(this.rightArmImage, this.position.x - this.sizes.bodyImage.width * 0.3, this.position.y + this.sizes.bodyImage.height * 0.25, this.sizes.rightArmImage.width, this.sizes.rightArmImage.height);\n    }\n  }, {\n    key: \"renderRightLeg\",\n    value: function renderRightLeg() {\n      this.canvasCtx.drawImage(this.rightLegImage, this.position.x + this.sizes.bodyImage.width * 0.1, this.position.y + this.sizes.bodyImage.height * 0.75, this.sizes.rightLegImage.width, this.sizes.rightLegImage.height);\n    }\n  }, {\n    key: \"renderLeftLeg\",\n    value: function renderLeftLeg() {\n      this.canvasCtx.drawImage(this.leftLegImage, this.position.x + this.sizes.bodyImage.width * 0.55, this.position.y + this.sizes.bodyImage.height * 0.75, this.sizes.leftLegImage.width, this.sizes.leftLegImage.height);\n    }\n  }, {\n    key: \"renderWeapon\",\n    value: function renderWeapon(leftArmPosition) {\n      this.weaponPosition = {\n        x: leftArmPosition.x + this.sizes.leftArmImage.width * 0.8,\n        y: this.position.y + 10\n      };\n      this.canvasCtx.drawImage(this.weaponImage, this.weaponPosition.x, this.weaponPosition.y, this.sizes.weaponImage.width, this.sizes.weaponImage.height);\n    }\n  }, {\n    key: \"renderHead\",\n    value: function renderHead() {\n      this.canvasCtx.drawImage(this.headImage, this.position.x - this.sizes.bodyImage.width * 0.45, this.position.y - this.sizes.bodyImage.height * 1.05, this.sizes.headImage.width, this.sizes.headImage.height);\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this2 = this;\n\n      this.canvasCtx.canvas.addEventListener('click', lodash_throttle__WEBPACK_IMPORTED_MODULE_10___default()(function (event) {\n        _this2.addBullet({\n          x: event.x,\n          y: event.y\n        });\n      }, 1000)); // this.canvasCtx.canvas.addEventListener('mousemove', (event) => {\n      //   this.rotateWeapon({ x: event.x, y: event.y });\n      // });\n    } // @debounce(30)\n    // rotateWeapon(mousePosition: Vector2D) {\n    //   this.angleWeapon = Math.atan2(\n    //     mousePosition.x - this.weaponPosition.x,\n    //     mousePosition.y - this.weaponPosition.y,\n    //   );\n    // }\n\n  }, {\n    key: \"renderBullets\",\n    value: function renderBullets() {\n      var _this3 = this;\n\n      if (!this.bullets.length) {\n        return;\n      }\n\n      this.bullets.forEach(function (b) {\n        var isBulletLost = _this3.checkLostBullet(b);\n\n        if (isBulletLost) {\n          _this3.destroyBullet(b);\n\n          return;\n        }\n\n        b.render();\n      });\n    }\n  }, {\n    key: \"addBullet\",\n    value: function addBullet(targetPosition) {\n      this.lastShot = Date.now();\n      var bulletPosition = {\n        x: this.weaponPosition.x + this.sizes.weaponImage.width,\n        y: this.weaponPosition.y + 3\n      };\n      var dx = targetPosition.x - bulletPosition.x;\n      var dy = targetPosition.y - bulletPosition.y;\n      var mag = Math.sqrt(dx * dx + dy * dy);\n      var direction = {\n        x: dx / mag,\n        y: dy / mag\n      };\n      var bullet = new _Game_Bullet__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this.canvasCtx, bulletPosition, direction);\n      this.bullets.push(bullet);\n      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__[\"default\"])(_assets_shoot_mp3__WEBPACK_IMPORTED_MODULE_21___default.a);\n    }\n  }, {\n    key: \"destroyBullet\",\n    value: function destroyBullet(bullet) {\n      this.bullets = this.bullets.filter(function (b) {\n        return b !== bullet;\n      });\n    }\n  }, {\n    key: \"checkLostBullet\",\n    value: function checkLostBullet(bullet) {\n      if (bullet.position.x + bullet.size.width < 0 || bullet.position.x > this.canvasCtx.canvas.width) {\n        return true;\n      }\n\n      if (bullet.position.y + bullet.size.height < 0 || bullet.position.y > this.canvasCtx.canvas.height) {\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Game/Player.ts?");

/***/ }),

/***/ "./src/Game/Target.ts":
/*!****************************!*\
  !*** ./src/Game/Target.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Target; });\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _assets_bottle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/bottle.png */ \"./src/assets/bottle.png\");\n/* harmony import */ var _assets_bottle_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_bottle_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _patterns_ImageFlyweightFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/patterns/ImageFlyweightFactory */ \"./src/patterns/ImageFlyweightFactory.ts\");\n\n\n\n\nvar targetFlyweight = Object(_patterns_ImageFlyweightFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_assets_bottle_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n\nvar Target = /*#__PURE__*/function () {\n  function Target(ctx, key) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Target);\n\n    this.speed = 0;\n    this.position = {\n      x: 0,\n      y: 0\n    };\n    this.size = {\n      width: 40,\n      height: 50\n    };\n    this.canvasCtx = ctx;\n    this.key = key;\n    this.dropTarget();\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Target, [{\n    key: \"setStartPosition\",\n    value: function setStartPosition() {\n      var maxXPosition = this.canvasCtx.canvas.width - this.size.width;\n      var minXPosition = maxXPosition - maxXPosition / 3;\n      this.position = {\n        x: Math.random() * (maxXPosition - minXPosition) + minXPosition,\n        y: Math.random() * this.size.height * 4 - this.size.height * 4\n      };\n    }\n  }, {\n    key: \"setSpeed\",\n    value: function setSpeed() {\n      var maxSpeed = 6;\n      var minSpeed = 2;\n      this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;\n    }\n  }, {\n    key: \"dropTarget\",\n    value: function dropTarget() {\n      this.setStartPosition();\n      this.setSpeed();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.position.y >= this.canvasCtx.canvas.height) {\n        this.dropTarget();\n      } else {\n        this.position.y += this.speed;\n      }\n\n      this.canvasCtx.drawImage(targetFlyweight.getImage(), this.position.x, this.position.y, this.size.width, this.size.height);\n    }\n  }]);\n\n  return Target;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Game/Target.ts?");

/***/ }),

/***/ "./src/Game/TargetFactory.ts":
/*!***********************************!*\
  !*** ./src/Game/TargetFactory.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TargetFactory; });\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Game_Target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Game/Target */ \"./src/Game/Target.ts\");\n\n\n\n\nvar TargetFactory = /*#__PURE__*/function () {\n  function TargetFactory(ctx) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TargetFactory);\n\n    this.canvasCtx = ctx;\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TargetFactory, [{\n    key: \"create\",\n    value: function create(key) {\n      return new _Game_Target__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvasCtx, key);\n    }\n  }]);\n\n  return TargetFactory;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Game/TargetFactory.ts?");

/***/ }),

/***/ "./src/assets/BACKGROUND.png":
/*!***********************************!*\
  !*** ./src/assets/BACKGROUND.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/BACKGROUND.bc46be22.png\";\n\n//# sourceURL=webpack:///./src/assets/BACKGROUND.png?");

/***/ }),

/***/ "./src/assets/WEAPON.png":
/*!*******************************!*\
  !*** ./src/assets/WEAPON.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/WEAPON.05e2c123.png\";\n\n//# sourceURL=webpack:///./src/assets/WEAPON.png?");

/***/ }),

/***/ "./src/assets/background.mp3":
/*!***********************************!*\
  !*** ./src/assets/background.mp3 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/background.354cce50.mp3\";\n\n//# sourceURL=webpack:///./src/assets/background.mp3?");

/***/ }),

/***/ "./src/assets/bottle.png":
/*!*******************************!*\
  !*** ./src/assets/bottle.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bottle.afdf9bf1.png\";\n\n//# sourceURL=webpack:///./src/assets/bottle.png?");

/***/ }),

/***/ "./src/assets/player/1_body.png":
/*!**************************************!*\
  !*** ./src/assets/player/1_body.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_body.6903a4f9.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_body.png?");

/***/ }),

/***/ "./src/assets/player/1_head.png":
/*!**************************************!*\
  !*** ./src/assets/player/1_head.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_head.d080f160.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_head.png?");

/***/ }),

/***/ "./src/assets/player/1_hend.png":
/*!**************************************!*\
  !*** ./src/assets/player/1_hend.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_hend.d58a0c8a.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_hend.png?");

/***/ }),

/***/ "./src/assets/player/1_left arm.png":
/*!******************************************!*\
  !*** ./src/assets/player/1_left arm.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_left arm.98d64d28.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_left_arm.png?");

/***/ }),

/***/ "./src/assets/player/1_left leg.png":
/*!******************************************!*\
  !*** ./src/assets/player/1_left leg.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_left leg.1f556e8f.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_left_leg.png?");

/***/ }),

/***/ "./src/assets/player/1_right arm.png":
/*!*******************************************!*\
  !*** ./src/assets/player/1_right arm.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_right arm.dfc7b175.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_right_arm.png?");

/***/ }),

/***/ "./src/assets/player/1_right leg.png":
/*!*******************************************!*\
  !*** ./src/assets/player/1_right leg.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1_right leg.6fb7af4f.png\";\n\n//# sourceURL=webpack:///./src/assets/player/1_right_leg.png?");

/***/ }),

/***/ "./src/assets/shoot.mp3":
/*!******************************!*\
  !*** ./src/assets/shoot.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/shoot.071536da.mp3\";\n\n//# sourceURL=webpack:///./src/assets/shoot.mp3?");

/***/ }),

/***/ "./src/assets/shot gun.png":
/*!*********************************!*\
  !*** ./src/assets/shot gun.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/shot gun.b1bde589.png\";\n\n//# sourceURL=webpack:///./src/assets/shot_gun.png?");

/***/ }),

/***/ "./src/assets/shot.png":
/*!*****************************!*\
  !*** ./src/assets/shot.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAZCAYAAABq35PiAAAACXBIWXMAAA4VAAAOFQHUajXPAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAArESURBVHjavJhrjF1Xdcd/a+/zuI+5d+6Mx1OPE48SRyYQipQQgWiUqFKLitQUFQIh/VAe6gc+VJWKQESl/YSECkhRRasKkr5UoKFYbUEBp+FRrCYhoCgPEkSN6zhxPH4xM75z79z3uefsvfrh7IlvnETEqPaWju49++zHWv+19n+tveCVTbj87eI9zC8Zb7jCQt0GtIEcWAkCHAXWgQi4CUiBF4Aa8EagB5wC9gIVYAR4YBjm/FqYvwH8eph3DKgDC2E84XcArIb9jwN7gGvD/Cys/2hY/7KBYYB3AZ8HlkLfEJgATwL3AJ8CDgA3BIXWgAJoBqXHARgNCozDmOUA7HYAuhHGE/r64ftSAMkDbwgynAqyVcOzDfwV8EOgA8wBSZCjNwOaB1zov2QwUuBPgc83Gg3SNCWOY86f3yTPC4ATwNVAvGfPHiaTCfV6nUajgarS6/UYjUYsLi5SqVTY2NhgMhmzd+9VVKsVNjfP472n1WqRJAnD4ZDBYECapiwsLDAYDGi32ywsLLC0tMRgMKDb7dJsNmg25xkMBqytrTEajQiAdoNnafC4HR06AbBngKfC7+lgmNfVImAaLMjv3n47f3fffXz5y/fzybs/QcVGqOo1WZbJ7uVlPv6Ju7nrA+9nfWOLfr9PpZLQbNQpnKfd7lCp1Ni91CLPC7Y6PeI4pjVfZ5orw8GAvChozc+RpgmdTpdp7lleXqKSxnS6PaZTR7NZ1ySNZdgfMx6PsdZyzz2f5eDBr7O4uLhraWlpV6fToSgKWq3WirWWjY0Ner2en/FygLPhWP0n8H3g3OsBQ4O75tftvyZuNpv+qtXrFPX2TTe8iTvv/IB89av30+t2ePvN17t9q/t0dXVf4JoxUDEgrlynZ6GmEHlwAj0DNQ+pKb9PFLwpx+BgbGFqYL64BgS2DeCVeREQcB5GUqs3LMB77ng/H/nwR6jVKqDQ6W5TOE+zUQVV8+RTz/LEk0/x6MOHOXnyxF7grgDO48BB4MHgTa8JhgFUhOLpH33dTk4e0+X+psTWKxLJHXf8gXvg2w+ZY0d/Lv31v1YZPuAYDyxaBU0detaguUH2KGQety5IA0xdIVNUPeIVjEVaDu16fCdCFgwy5/DnQL1gdysUiqoK6pEiIp5XrHPjrcMGkLfc8EZ32603A4lc4ISxhRiIzC233KIAk6max378LA8eOsR3v/Ot1vPP/exdWTZ+B/Bu4IuBdyavBkYdaIpQrZsXSc0Gu5MRWQYvvnBMi7WPsXbifwTxROZ7kevH1o4c5F4QImyl5C2nFgFEQihU8AiCxcSKzwVPggFsCi4z6E7QDA6hCIrFxormApgpIC5GgK3nD5KdOpcn/eNW/dRK9TqnbuiYrFmpvsFJ7WpIdvtKsk9+623LvOOtH7R3vOc3uf/gt83Bf/33+c75E+8F3gb8JfClVwNjBPS8R5cakcjYc7qbkruMfUs9ab/4PduMJ4zmYHm+io1UUIE4CtzlSv6KJLwrUJRebnZOoRNsFawJZK9gqzNieFAVjN1ZU9AUahG9bSWNpyiQnX/cpucft36Yoj5DCyymNIB2H1aYgscQtTDpbldfvFFvffON7ta/+X157+038bf3fiM6/INHrh72N74I3Aj8BXB+FgwXwqXbnmg0GhqMFFRTmJ8zuInjwKrlzDOeky863vr2KFhfwzObqujMsrPv9oLSr5VzyewaIceynlqtTDwAJIlRTTCRwxWVcFp2puWlkQyCDvCjrjB4Djn5b0Jlnnfu/w1/7d2r7ksrb5F7//lROx5PPxT0/lSIOuyYd7cINKqC1IXlRcOupvDCWfCJodN3DIZKkQRh9QrkqaY8fbVEmE5KUOMYprmSirxSBolBkguA2kgwHgXBDTCb35cD84t87qM1v5Kid3+BCvCHIRx/nJLJEeCENURWIS08gwmcbSv9gWe5BWc2FWPg+lVTpjdXImGn9FmfK0ak3FJBFXzxWjLojDcKiA1PgndGfHtTkuKM/eQfRXLfn8XsWxaAPw55FiHkMSwcbPbBFEI2UozA3iVBM1iehySGX5zVl7vm5WwKxNCZQiXQyzRXKpXSMJeea0eoqeGGMQyVj3445rabzM6Z/T1g/w4Y+wHds0ugCSaB5ZaQVoSjZ5TFlpAVcKytZXrmrpBnSMhIvJZMYgEjF3j6V0DYRMAu+O5hz/OndYfIfgaMdpiuC0wTNHVT6DvIPfQHSrUi9EagDq5dkVeJzpfx1pRDdU7Ii9Ib00goRloGrl+Bg2wVHWfwk4e9/slnc3P8tAf4EfA5YDMqnZGTxpAeOaVIDrUpdPtKEgnXr0B/WJrBDMF3goWuRPOA0fL4U3pIXlAeE3kdYAYPMhFIjWL7jOqhR7z/9D8V6fF1D/AI8LEQTTQKW654D9UKmAWhWi29MU6gPSnjeJoqm1NFGiEyyyWef7mEMTtHIIFuR6mlZcfEC9VF8L0QrYuZe7cCHkUQEmCCtw6hwOHwx5/25h8PFfL3h33aLqPTg+FG/pOL84wU4KqWgIdzORQKu+bEnzyF1iuYubrIfEuQeWDrogJAYP6XUgQ7825DX3FRmcbvWH6mrwjjowv/k1gwkZS65goTcTJSpwYb9ithnFAG3ILC5GpIRHxHcUPs157w9iv/Xcjh455wzf8X4AuBK16Wge5wRv9MRxvZhvp0BI2amGKosr/ANUSkN/TCtno28RQYFCHC4xDyoEQFYYwnR6liUZQpDsGgGAweC5oj4lBqGDzoUJ1EIsRYMgomgGLxaLWGZpkaQJIezh/1amLBOjw5MFZPTSx1hLYKFRJU/DPHnDlyWuXexxz/e07ZGCjAEeArwD+EcsAr0vEUWDBCY7SNj7r4GwTyTM16VyRxGp3dVPIMZQ3lae9xAiNVCjxVsViFPjkGG0BwZDgMERbFisOhOlYnESJVici00DEqdWKJUSZa4NHSM8QjwES9WGCr9J3RGDvKFNtV3dqG6hyy2EQ3zyrHR8hcCj99wfODI94+t6788HlfuovSC97wNeCxX3ZrdQArFcSuqznfwQwzmOTKpx8q5NimkkawNxbjTiHbXW+aTSFKRWmrbmWYSpWoVkN1GzpD0jiGRgPIMNs9r5Jgmk2xDND+GTW5JV1sAB3R7YHaaaHxrqZgrOhw25tRgVlYKJPIaFKyyQM/dRw7r0SiUkuE9lAZZ0hkYb0Pp9ql8r0y4g2AtioPAd8IUWP4emqgfy7wmet2G7nrZsORtvLNJ16eTNQTeOebDQeWDXkOoxxGmVJLoF4VtvqQ5crCnGAFxrkHysyxnpb00RmBemVhzpAV0BkotRQqieAKJXMKKqQRxJHQnyj9ifLchvLzc2VOEBlMUV5x+kAkQlWVHDgTjLsOHArM9h+hAja6lILwZ8INjpkCbS1Uhx4Afhs4YE1ZbgFyEWIjL70PgeqMoFPApBFRdqESOUkiKtPipe/TyDJXuJfot4gMqVfwZfAYm1LRneCyBfw4FGmaZerEWiDEJNRBnw0e0eHC/e6Sq+OrwJ2h/NcIl5cG8F/At4D3Ab8TKuMrQCsUcF2oYo9D7NgRaiHMPx7Wvxb4RXhWggX7oaibhXVWg1XPAtcH2Y6GdZZDgfj+oKi76KgX/98pTi0os9OaF32f2wnBoaWhas3MPX3hVebMtsrMfZ6gaHKRDLMtuWjPy9r+bwDdpuJkts6eGwAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/assets/shot.png?");

/***/ }),

/***/ "./src/components/Game.vue":
/*!*********************************!*\
  !*** ./src/components/Game.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=6ca3af22&scoped=true& */ \"./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true&\");\n/* harmony import */ var _Game_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=ts& */ \"./src/components/Game.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& */ \"./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Game_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6ca3af22\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Game.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Game.vue?");

/***/ }),

/***/ "./src/components/Game.vue?vue&type=script&lang=ts&":
/*!**********************************************************!*\
  !*** ./src/components/Game.vue?vue&type=script&lang=ts& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--14-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Game.vue?");

/***/ }),

/***/ "./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=style&index=0&id=6ca3af22&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_6ca3af22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/Game.vue?");

/***/ }),

/***/ "./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=template&id=6ca3af22&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0bebda70-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Game.vue?vue&type=template&id=6ca3af22&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_6ca3af22_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Game.vue?");

/***/ }),

/***/ "./src/components/TargetCreator.vue":
/*!******************************************!*\
  !*** ./src/components/TargetCreator.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TargetCreator.vue?vue&type=template&id=77b5cfdb& */ \"./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb&\");\n/* harmony import */ var _TargetCreator_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TargetCreator.vue?vue&type=script&lang=ts& */ \"./src/components/TargetCreator.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TargetCreator_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/TargetCreator.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/TargetCreator.vue?");

/***/ }),

/***/ "./src/components/TargetCreator.vue?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./src/components/TargetCreator.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetCreator_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--14-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TargetCreator.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TargetCreator.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetCreator_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/TargetCreator.vue?");

/***/ }),

/***/ "./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb&":
/*!*************************************************************************!*\
  !*** ./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TargetCreator.vue?vue&type=template&id=77b5cfdb& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0bebda70-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TargetCreator.vue?vue&type=template&id=77b5cfdb&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetCreator_vue_vue_type_template_id_77b5cfdb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/TargetCreator.vue?");

/***/ }),

/***/ "./src/components/Winner.vue":
/*!***********************************!*\
  !*** ./src/components/Winner.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Winner.vue?vue&type=template&id=5aaa6eef& */ \"./src/components/Winner.vue?vue&type=template&id=5aaa6eef&\");\n/* harmony import */ var _Winner_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Winner.vue?vue&type=script&lang=ts& */ \"./src/components/Winner.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Winner.vue?vue&type=style&index=0&lang=css& */ \"./src/components/Winner.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Winner_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Winner.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Winner.vue?");

/***/ }),

/***/ "./src/components/Winner.vue?vue&type=script&lang=ts&":
/*!************************************************************!*\
  !*** ./src/components/Winner.vue?vue&type=script&lang=ts& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--14-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Winner.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Winner.vue?");

/***/ }),

/***/ "./src/components/Winner.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************!*\
  !*** ./src/components/Winner.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Winner.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/Winner.vue?");

/***/ }),

/***/ "./src/components/Winner.vue?vue&type=template&id=5aaa6eef&":
/*!******************************************************************!*\
  !*** ./src/components/Winner.vue?vue&type=template&id=5aaa6eef& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0bebda70-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Winner.vue?vue&type=template&id=5aaa6eef& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0bebda70-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Winner.vue?vue&type=template&id=5aaa6eef&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0bebda70_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winner_vue_vue_type_template_id_5aaa6eef___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Winner.vue?");

/***/ }),

/***/ "./src/components/startMembers.ts":
/*!****************************************!*\
  !*** ./src/components/startMembers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar members = ['Max Green', 'Roman Domoratskii', 'Сергей Ермаков | podkot', 'Ivan Turashov', 'wwwova', 'Gautama Shakyamuni', 'Andrey Brunetkin', 'Anna Shtanova', 'Irina', 'Ivan Votche 👽'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (members);\n\n//# sourceURL=webpack:///./src/components/startMembers.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanvotcel_projects_chapter_super_game_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/@vue/composition-api/dist/vue-composition-api.module.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/patterns/ImageFlyweight.ts":
/*!****************************************!*\
  !*** ./src/patterns/ImageFlyweight.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageFlyweight; });\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ImageFlyweight = /*#__PURE__*/function () {\n  function ImageFlyweight(imgSrc) {\n    Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ImageFlyweight);\n\n    this.image = new Image();\n    this.image.src = imgSrc;\n  }\n\n  Object(_Users_ivanvotcel_projects_chapter_super_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ImageFlyweight, [{\n    key: \"getImage\",\n    value: function getImage() {\n      return this.image;\n    }\n  }]);\n\n  return ImageFlyweight;\n}();\n\n\n\n//# sourceURL=webpack:///./src/patterns/ImageFlyweight.ts?");

/***/ }),

/***/ "./src/patterns/ImageFlyweightFactory.ts":
/*!***********************************************!*\
  !*** ./src/patterns/ImageFlyweightFactory.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _patterns_ImageFlyweight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/patterns/ImageFlyweight */ \"./src/patterns/ImageFlyweight.ts\");\n\n\nvar imageFlyweightFactory = function imageFlyweightFactory(image) {\n  return new _patterns_ImageFlyweight__WEBPACK_IMPORTED_MODULE_0__[\"default\"](image);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imageFlyweightFactory);\n\n//# sourceURL=webpack:///./src/patterns/ImageFlyweightFactory.ts?");

/***/ }),

/***/ "./src/shared/utils.ts":
/*!*****************************!*\
  !*** ./src/shared/utils.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.map */ \"./node_modules/core-js/modules/es.map.js\");\n/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar playSound = function () {\n  var soundStore = new Map();\n  return function (src) {\n    var isRepeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var sound = soundStore.get(src);\n\n    if (sound) {\n      sound.setAttribute('src', src);\n      sound.load();\n      sound.play();\n      return;\n    }\n\n    var tempSound = document.createElement('audio');\n    tempSound.src = src;\n    tempSound.loop = isRepeat;\n    tempSound.volume = 0.1;\n    tempSound.play();\n    soundStore.set(src, tempSound);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playSound);\n\n//# sourceURL=webpack:///./src/shared/utils.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });