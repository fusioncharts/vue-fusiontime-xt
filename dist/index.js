/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = {\n\tname: 'fusiontime',\n\trender: function render(createElm) {\n\t\treturn createElm('div', {\n\t\t\tclass: {\n\t\t\t\tfusiontime: true\n\t\t\t}\n\t\t});\n\t},\n\n\tprops: ['width', 'height', 'dataSource'],\n\tmethods: {\n\t\trenderChart: function renderChart(data) {\n\t\t\tif (Object.keys(data).length > 0) {\n\t\t\t\tvar chartConfig = {\n\t\t\t\t\ttype: \"timeseries\",\n\t\t\t\t\twidth: this.width,\n\t\t\t\t\theight: this.height,\n\t\t\t\t\trenderAt: this.$el,\n\t\t\t\t\tdataFormat: 'json',\n\t\t\t\t\tdataSource: data\n\t\t\t\t};\n\t\t\t\tthis.fc = new FusionCharts(chartConfig).render();\n\t\t\t}\n\t\t}\n\t},\n\n\tmounted: function mounted() {\n\t\tthis.renderChart(this.dataSource);\n\t},\n\tdestroyed: function destroyed() {\n\t\tif (this.fc) {\n\t\t\tthis.fc.dispose();\n\t\t}\n\t},\n\n\twatch: {\n\t\tdataSource: function dataSource(val) {\n\t\t\tthis.renderChart(val);\n\t\t}\n\t}\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVnVlRnVzaW9uVGltZS5qcz81NThjIl0sIm5hbWVzIjpbIm5hbWUiLCJyZW5kZXIiLCJjcmVhdGVFbG0iLCJjbGFzcyIsImZ1c2lvbnRpbWUiLCJwcm9wcyIsIm1ldGhvZHMiLCJyZW5kZXJDaGFydCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY2hhcnRDb25maWciLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXJBdCIsIiRlbCIsImRhdGFGb3JtYXQiLCJkYXRhU291cmNlIiwiZmMiLCJGdXNpb25DaGFydHMiLCJtb3VudGVkIiwiZGVzdHJveWVkIiwiZGlzcG9zZSIsIndhdGNoIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNkQSxPQUFNLFlBRFE7QUFFZEMsU0FBUSxnQkFBVUMsU0FBVixFQUFxQjtBQUM1QixTQUFPQSxVQUFVLEtBQVYsRUFBaUI7QUFDdkJDLFVBQU87QUFDTkMsZ0JBQVk7QUFETjtBQURnQixHQUFqQixDQUFQO0FBS0EsRUFSYTs7QUFVZEMsUUFBTyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFlBQXBCLENBVk87QUFXZEMsVUFBUztBQUNSQyxlQUFhLHFCQUFVQyxJQUFWLEVBQWdCO0FBQ3pCLE9BQUlDLE9BQU9DLElBQVAsQ0FBWUYsSUFBWixFQUFrQkcsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDcEMsUUFBSUMsY0FBYztBQUNkQyxXQUFNLFlBRFE7QUFFZEMsWUFBTyxLQUFLQSxLQUZFO0FBR2RDLGFBQVEsS0FBS0EsTUFIQztBQUlkQyxlQUFVLEtBQUtDLEdBSkQ7QUFLZEMsaUJBQVksTUFMRTtBQU1kQyxpQkFBWVg7QUFORSxLQUFsQjtBQVFBLFNBQUtZLEVBQUwsR0FBVSxJQUFJQyxZQUFKLENBQWlCVCxXQUFqQixFQUE4QlgsTUFBOUIsRUFBVjtBQUNBO0FBQ0Q7QUFiTyxFQVhLOztBQTJCZHFCLFVBQVMsbUJBQVk7QUFDcEIsT0FBS2YsV0FBTCxDQUFpQixLQUFLWSxVQUF0QjtBQUNBLEVBN0JhO0FBOEJkSSxZQUFXLHFCQUFZO0FBQ3BCLE1BQUksS0FBS0gsRUFBVCxFQUFhO0FBQ1gsUUFBS0EsRUFBTCxDQUFRSSxPQUFSO0FBQ0Q7QUFDSCxFQWxDYTs7QUFvQ2RDLFFBQU87QUFDTk4sY0FBWSxvQkFBVU8sR0FBVixFQUFlO0FBQzFCLFFBQUtuQixXQUFMLENBQWlCbUIsR0FBakI7QUFDQTtBQUhLO0FBcENPLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2Z1c2lvbnRpbWUnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uIChjcmVhdGVFbG0pIHtcblx0XHRyZXR1cm4gY3JlYXRlRWxtKCdkaXYnLCB7XG5cdFx0XHRjbGFzczoge1xuXHRcdFx0XHRmdXNpb250aW1lOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0cHJvcHM6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2RhdGFTb3VyY2UnXSxcblx0bWV0aG9kczoge1xuXHRcdHJlbmRlckNoYXJ0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGV0IGNoYXJ0Q29uZmlnID0ge1xuXHRcdCAgICAgIHR5cGU6IFwidGltZXNlcmllc1wiLFxuXHRcdCAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuXHRcdCAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG5cdFx0ICAgICAgcmVuZGVyQXQ6IHRoaXMuJGVsLFxuXHRcdCAgICAgIGRhdGFGb3JtYXQ6ICdqc29uJyxcblx0XHQgICAgICBkYXRhU291cmNlOiBkYXRhXG5cdFx0ICAgIH07XG5cdFx0XHRcdHRoaXMuZmMgPSBuZXcgRnVzaW9uQ2hhcnRzKGNoYXJ0Q29uZmlnKS5yZW5kZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bW91bnRlZDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMucmVuZGVyQ2hhcnQodGhpcy5kYXRhU291cmNlKTtcblx0fSxcblx0ZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZmMpIHtcbiAgICAgIHRoaXMuZmMuZGlzcG9zZSgpO1xuICAgIH1cblx0fSxcblxuXHR3YXRjaDoge1xuXHRcdGRhdGFTb3VyY2U6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHRoaXMucmVuZGVyQ2hhcnQodmFsKTtcblx0XHR9XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVnVlRnVzaW9uVGltZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _VueFusionTime = __webpack_require__(0);\n\nvar _VueFusionTime2 = _interopRequireDefault(_VueFusionTime);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nVue.component(_VueFusionTime2.default.name, _VueFusionTime2.default);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGFnLmpzPzhlNDAiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLElBQUlDLFNBQUosQ0FBYyx3QkFBY0MsSUFBNUIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWVGdXNpb25UaW1lIGZyb20gJy4vVnVlRnVzaW9uVGltZSc7XG5cblZ1ZS5jb21wb25lbnQoVnVlRnVzaW9uVGltZS5uYW1lLCBWdWVGdXNpb25UaW1lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWcuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);