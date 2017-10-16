/*!
*  filename: ej2-buttons.umd.js
*  version : 1.0.22
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base")) : factory(root["@syncfusion/ej2-base"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4), __webpack_require__(6), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2, index_3, index_4) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	    __export(index_3);
	    __export(index_4);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, common_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(common_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    function wrapperInitialize(tag, type, element, WRAPPER) {
	        if (element.tagName === tag) {
	            var ejInstance = ej2_base_2.getValue('ej2_instances', element);
	            var input = ej2_base_1.createElement('input', { attrs: { 'type': type } });
	            var props = ['change', 'cssClass', 'label', 'labelPosition'];
	            var wrapper = ej2_base_1.createElement(tag, {
	                className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
	            });
	            for (var index = 0, len = element.attributes.length; index < len; index++) {
	                if (props.indexOf(element.attributes[index].nodeName) === -1) {
	                    input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
	                }
	            }
	            element.parentNode.insertBefore(input, element);
	            ej2_base_1.detach(element);
	            element = input;
	            element.parentNode.insertBefore(wrapper, element);
	            wrapper.appendChild(element);
	            ej2_base_2.setValue('ej2_instances', ejInstance, element);
	        }
	        return element;
	    }
	    exports.wrapperInitialize = wrapperInitialize;
	    function getTextNode(element) {
	        var node;
	        var childnode = element.childNodes;
	        for (var i = 0; i < childnode.length; i++) {
	            node = childnode[i];
	            if (node.nodeType === 3) {
	                return node;
	            }
	        }
	        return null;
	    }
	    exports.getTextNode = getTextNode;
	    function createCheckBox(enableRipple) {
	        if (enableRipple === void 0) { enableRipple = false; }
	        var wrapper = ej2_base_1.createElement('div', { className: 'e-checkbox-wrapper' });
	        var frameSpan = ej2_base_1.createElement('span', { className: 'e-frame e-icons' });
	        if (enableRipple) {
	            var rippleSpan = ej2_base_1.createElement('span', { className: 'e-ripple-container' });
	            ej2_base_1.rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
	            frameSpan.appendChild(rippleSpan);
	        }
	        wrapper.appendChild(frameSpan);
	        return wrapper;
	    }
	    exports.createCheckBox = createCheckBox;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, button_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(button_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, common_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var cssClassName = {
	        RTL: 'e-rtl',
	        BUTTON: 'e-btn',
	        PRIMARY: 'e-primary',
	        ICONBTN: 'e-icon-btn'
	    };
	    var Button = (function (_super) {
	        __extends(Button, _super);
	        function Button(options, element) {
	            return _super.call(this, options, element) || this;
	        }
	        Button.prototype.preRender = function () {
	        };
	        Button.prototype.render = function () {
	            this.initialize();
	        };
	        Button.prototype.initialize = function () {
	            if (this.cssClass) {
	                ej2_base_3.addClass([this.element], this.cssClass.split(' '));
	            }
	            if (this.isPrimary) {
	                this.element.classList.add(cssClassName.PRIMARY);
	            }
	            if (this.content) {
	                this.element.innerHTML = this.content;
	            }
	            this.setIconCss();
	            if (this.enableRtl) {
	                this.element.classList.add(cssClassName.RTL);
	            }
	            if (this.disabled) {
	                this.controlStatus(this.disabled);
	            }
	            ej2_base_2.rippleEffect(this.element, { selector: '.' + cssClassName.BUTTON });
	            this.wireEvents();
	        };
	        Button.prototype.controlStatus = function (disabled) {
	            this.element.disabled = disabled;
	        };
	        Button.prototype.setIconCss = function () {
	            if (this.iconCss) {
	                if (!this.element.textContent) {
	                    this.element.classList.add(cssClassName.ICONBTN);
	                }
	                var span = ej2_base_3.createElement('span', { className: 'e-btn-icon ' + this.iconCss });
	                var node = this.element.childNodes[0];
	                if (node && this.iconPosition === 'left') {
	                    this.element.insertBefore(span, node);
	                    span.classList.add('e-icon-left');
	                }
	                else {
	                    this.element.appendChild(span);
	                    if (this.iconPosition === 'right') {
	                        span.classList.add('e-icon-right');
	                    }
	                }
	            }
	        };
	        Button.prototype.wireEvents = function () {
	            if (this.isToggle) {
	                ej2_base_2.EventHandler.add(this.element, 'click', this.btnClickHandler, this);
	            }
	        };
	        Button.prototype.unWireEvents = function () {
	            if (this.isToggle) {
	                ej2_base_2.EventHandler.remove(this.element, 'click', this.btnClickHandler);
	            }
	        };
	        Button.prototype.btnClickHandler = function () {
	            if (this.element.classList.contains('e-active')) {
	                this.element.classList.remove('e-active');
	            }
	            else {
	                this.element.classList.add('e-active');
	            }
	        };
	        Button.prototype.destroy = function () {
	            var span;
	            var element = this.element;
	            _super.prototype.destroy.call(this);
	            ej2_base_3.removeClass([this.element], [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success',
	                'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round']);
	            ['e-ripple', 'disabled'].forEach(function (value) {
	                element.removeAttribute(value);
	            });
	            if (this.content) {
	                element.innerHTML = element.innerHTML.replace(this.content, '');
	            }
	            span = element.querySelector('span.e-btn-icon');
	            if (span) {
	                ej2_base_3.detach(span);
	            }
	            this.unWireEvents();
	        };
	        Button.prototype.getModuleName = function () {
	            return 'btn';
	        };
	        Button.prototype.getPersistData = function () {
	            return this.addOnPersist([]);
	        };
	        Button.prototype.onPropertyChanged = function (newProp, oldProp) {
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'isPrimary':
	                        if (newProp.isPrimary) {
	                            this.element.classList.add(cssClassName.PRIMARY);
	                        }
	                        else {
	                            this.element.classList.remove(cssClassName.PRIMARY);
	                        }
	                        break;
	                    case 'disabled':
	                        this.controlStatus(this.disabled);
	                        break;
	                    case 'iconCss':
	                        var span = this.element.querySelector('span.e-btn-icon');
	                        if (span) {
	                            span.className = 'e-btn-icon ' + this.iconCss;
	                            if (this.element.textContent) {
	                                if (this.iconPosition === 'left') {
	                                    span.classList.add('e-icon-left');
	                                }
	                                else {
	                                    span.classList.add('e-icon-right');
	                                }
	                            }
	                        }
	                        else {
	                            this.setIconCss();
	                        }
	                        break;
	                    case 'iconPosition':
	                        span = this.element.querySelector('span.e-btn-icon');
	                        if (span) {
	                            ej2_base_3.detach(span);
	                        }
	                        this.setIconCss();
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            ej2_base_3.removeClass([this.element], oldProp.cssClass.split(' '));
	                        }
	                        ej2_base_3.addClass([this.element], newProp.cssClass.split(' '));
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            this.element.classList.add(cssClassName.RTL);
	                        }
	                        else {
	                            this.element.classList.remove(cssClassName.RTL);
	                        }
	                        break;
	                    case 'content':
	                        var node = common_1.getTextNode(this.element);
	                        if (node) {
	                            node.textContent = newProp.content;
	                        }
	                        else {
	                            this.element.innerHTML = newProp.content;
	                            this.element.classList.remove(cssClassName.ICONBTN);
	                            this.setIconCss();
	                        }
	                        break;
	                    case 'isToggle':
	                        if (newProp.isToggle) {
	                            ej2_base_2.EventHandler.add(this.element, 'click', this.btnClickHandler, this);
	                        }
	                        else {
	                            ej2_base_2.EventHandler.remove(this.element, 'click', this.btnClickHandler);
	                            ej2_base_3.removeClass([this.element], ['e-active']);
	                        }
	                        break;
	                }
	            }
	        };
	        return Button;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Property('left')
	    ], Button.prototype, "iconPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "isPrimary", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "content", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "isToggle", void 0);
	    Button = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], Button);
	    exports.Button = Button;
	    exports.buttonBuilder = ej2_base_2.CreateBuilder(Button);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, check_box_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(check_box_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CHECK = 'e-check';
	    var DISABLED = 'e-checkbox-disabled';
	    var FRAME = 'e-frame';
	    var INDETERMINATE = 'e-stop';
	    var LABEL = 'e-label';
	    var RIPPLE = 'e-ripple-container';
	    var RTL = 'e-rtl';
	    var WRAPPER = 'e-checkbox-wrapper';
	    var CheckBox = (function (_super) {
	        __extends(CheckBox, _super);
	        function CheckBox(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isKeyPressed = false;
	            return _this;
	        }
	        CheckBox.prototype.changeState = function (state) {
	            var ariaState;
	            var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
	            if (state === 'check') {
	                frameSpan.classList.remove(INDETERMINATE);
	                frameSpan.classList.add(CHECK);
	                ariaState = 'true';
	                this.element.checked = true;
	            }
	            else if (state === 'uncheck') {
	                ej2_base_3.removeClass([frameSpan], [CHECK, INDETERMINATE]);
	                ariaState = 'false';
	                this.element.checked = false;
	            }
	            else {
	                frameSpan.classList.remove(CHECK);
	                frameSpan.classList.add(INDETERMINATE);
	                ariaState = 'mixed';
	                this.element.indeterminate = true;
	            }
	            this.getWrapper().setAttribute('aria-checked', ariaState);
	        };
	        CheckBox.prototype.clickHandler = function (event) {
	            this.focusOutHandler();
	            if (this.indeterminate) {
	                this.changeState(this.checked ? 'check' : 'uncheck');
	                this.indeterminate = false;
	                this.element.indeterminate = false;
	            }
	            else if (this.checked) {
	                this.changeState('uncheck');
	                this.checked = false;
	            }
	            else {
	                this.changeState('check');
	                this.checked = true;
	            }
	            var changeEventArgs = { checked: this.element.checked, event: event };
	            this.trigger('change', changeEventArgs);
	        };
	        CheckBox.prototype.destroy = function () {
	            var wrapper = this.getWrapper();
	            _super.prototype.destroy.call(this);
	            if (!this.disabled) {
	                this.unWireEvents();
	            }
	            wrapper.parentNode.insertBefore(this.element, wrapper);
	            ej2_base_3.detach(wrapper);
	            this.element.checked = false;
	            if (this.indeterminate) {
	                this.element.indeterminate = false;
	            }
	            if (this.name) {
	                this.element.removeAttribute('name');
	            }
	            if (this.value) {
	                this.element.removeAttribute('value');
	            }
	            if (this.disabled) {
	                this.element.removeAttribute('disabled');
	            }
	        };
	        CheckBox.prototype.focusHandler = function () {
	            if (this.isKeyPressed) {
	                this.getWrapper().classList.add('e-focus');
	            }
	        };
	        CheckBox.prototype.focusOutHandler = function () {
	            this.getWrapper().classList.remove('e-focus');
	        };
	        CheckBox.prototype.getModuleName = function () {
	            return 'checkbox';
	        };
	        CheckBox.prototype.getPersistData = function () {
	            return this.addOnPersist(['checked', 'indeterminate']);
	        };
	        CheckBox.prototype.getWrapper = function () {
	            return this.element.parentElement.parentElement;
	        };
	        CheckBox.prototype.initialize = function () {
	            if (this.name) {
	                this.element.setAttribute('name', this.name);
	            }
	            if (this.value) {
	                this.element.setAttribute('value', this.value);
	            }
	            if (this.checked) {
	                this.changeState('check');
	            }
	            if (this.indeterminate) {
	                this.changeState();
	            }
	            if (this.disabled) {
	                this.setDisabled();
	            }
	        };
	        CheckBox.prototype.initWrapper = function () {
	            var wrapper = this.element.parentElement;
	            if (!wrapper.classList.contains(WRAPPER)) {
	                wrapper = ej2_base_3.createElement('div', {
	                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
	                });
	                this.element.parentNode.insertBefore(wrapper, this.element);
	            }
	            var label = ej2_base_3.createElement('label', { attrs: { for: this.element.id } });
	            var frameSpan = ej2_base_3.createElement('span', { className: 'e-icons ' + FRAME });
	            if (this.enableRtl) {
	                wrapper.classList.add(RTL);
	            }
	            if (this.cssClass) {
	                ej2_base_3.addClass([wrapper], this.cssClass.split(' '));
	            }
	            wrapper.appendChild(label);
	            label.appendChild(this.element);
	            label.appendChild(frameSpan);
	            if (ej2_base_3.isRippleEnabled) {
	                var rippleSpan = ej2_base_3.createElement('span', { className: RIPPLE });
	                frameSpan.appendChild(rippleSpan);
	                ej2_base_3.rippleEffect(rippleSpan, { duration: 400, isCenterRipple: true });
	            }
	            if (this.label) {
	                this.setText(this.label);
	            }
	        };
	        CheckBox.prototype.keyActionHandler = function (e) {
	            if (e.action === 'space') {
	                e.preventDefault();
	                this.clickHandler(e);
	                this.focusHandler();
	            }
	        };
	        CheckBox.prototype.keyDownHandler = function () {
	            this.isKeyPressed = true;
	        };
	        CheckBox.prototype.labelMouseHandler = function (e) {
	            var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
	            if (rippleSpan) {
	                var event_1 = document.createEvent('MouseEvents');
	                event_1.initEvent(e.type, true, true);
	                rippleSpan.dispatchEvent(event_1);
	            }
	        };
	        CheckBox.prototype.mouseDownHandler = function () {
	            this.isKeyPressed = false;
	        };
	        CheckBox.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var wrapper = this.getWrapper();
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'checked':
	                        this.indeterminate = false;
	                        this.element.indeterminate = false;
	                        this.changeState(newProp.checked ? 'check' : 'uncheck');
	                        break;
	                    case 'indeterminate':
	                        if (newProp.indeterminate) {
	                            this.changeState();
	                        }
	                        else {
	                            this.element.indeterminate = false;
	                            this.changeState(this.checked ? 'check' : 'uncheck');
	                        }
	                        break;
	                    case 'disabled':
	                        if (newProp.disabled) {
	                            this.setDisabled();
	                            this.unWireEvents();
	                        }
	                        else {
	                            this.element.disabled = false;
	                            wrapper.classList.remove(DISABLED);
	                            wrapper.setAttribute('aria-disabled', 'false');
	                            this.wireEvents();
	                        }
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            wrapper.classList.remove(oldProp.cssClass);
	                        }
	                        wrapper.classList.add(newProp.cssClass);
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            wrapper.classList.add(RTL);
	                        }
	                        else {
	                            wrapper.classList.remove(RTL);
	                        }
	                        break;
	                    case 'label':
	                        this.setText(newProp.label);
	                        break;
	                    case 'labelPosition':
	                        var label = wrapper.getElementsByClassName(LABEL)[0];
	                        var labelWrap = wrapper.getElementsByTagName('label')[0];
	                        ej2_base_3.detach(label);
	                        if (newProp.labelPosition === 'after') {
	                            labelWrap.appendChild(label);
	                        }
	                        else {
	                            labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
	                        }
	                        break;
	                    case 'name':
	                        this.element.setAttribute('name', newProp.name);
	                        break;
	                    case 'value':
	                        this.element.setAttribute('value', newProp.value);
	                        break;
	                }
	            }
	        };
	        CheckBox.prototype.preRender = function () {
	            if (this.element.tagName === 'EJ-CHECKBOX') {
	                var ejInst = ej2_base_4.getValue('ej2_instances', this.element);
	                var input = ej2_base_3.createElement('input', { attrs: { 'type': 'checkbox' } });
	                var props = ['change', 'cssClass', 'indeterminate', 'label', 'labelPosition'];
	                var wrapper = ej2_base_3.createElement('EJ-CHECKBOX', {
	                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
	                });
	                for (var index = 0, len = this.element.attributes.length; index < len; index++) {
	                    if (props.indexOf(this.element.attributes[index].nodeName) === -1) {
	                        input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
	                    }
	                }
	                this.element.parentNode.insertBefore(input, this.element);
	                ej2_base_3.detach(this.element);
	                this.element = input;
	                this.element.parentNode.insertBefore(wrapper, this.element);
	                wrapper.appendChild(this.element);
	                ej2_base_4.setValue('ej2_instances', ejInst, this.element);
	            }
	            if (this.element.getAttribute('type') !== 'checkbox') {
	                this.element.setAttribute('type', 'checkbox');
	            }
	            if (!this.element.id) {
	                this.element.id = ej2_base_4.getUniqueID('e-' + this.getModuleName());
	            }
	        };
	        CheckBox.prototype.render = function () {
	            this.initWrapper();
	            this.initialize();
	            if (!this.disabled) {
	                this.wireEvents();
	            }
	        };
	        CheckBox.prototype.setDisabled = function () {
	            var wrapper = this.getWrapper();
	            this.element.disabled = true;
	            wrapper.classList.add(DISABLED);
	            wrapper.setAttribute('aria-disabled', 'true');
	        };
	        CheckBox.prototype.setText = function (text) {
	            var label = this.getWrapper().getElementsByClassName(LABEL)[0];
	            if (label) {
	                label.textContent = text;
	            }
	            else {
	                label = ej2_base_3.createElement('span', { className: LABEL, innerHTML: text });
	                var labelWrap = this.getWrapper().getElementsByTagName('label')[0];
	                if (this.labelPosition === 'before') {
	                    labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName(FRAME)[0]);
	                }
	                else {
	                    labelWrap.appendChild(label);
	                }
	            }
	        };
	        CheckBox.prototype.unWireEvents = function () {
	            var wrapper = this.getWrapper();
	            ej2_base_2.EventHandler.remove(this.element, 'click', this.clickHandler);
	            this.keyboardModule.destroy();
	            ej2_base_2.EventHandler.remove(document, 'keydown', this.keyDownHandler);
	            ej2_base_2.EventHandler.remove(wrapper, 'mousedown', this.mouseDownHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focus', this.focusHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
	            var label = wrapper.getElementsByClassName('e-label')[0];
	            if (label) {
	                ej2_base_2.EventHandler.remove(label, 'mousedown', this.labelMouseHandler);
	                ej2_base_2.EventHandler.remove(label, 'mouseup', this.labelMouseHandler);
	            }
	        };
	        CheckBox.prototype.wireEvents = function () {
	            var wrapper = this.getWrapper();
	            ej2_base_2.EventHandler.add(this.element, 'click', this.clickHandler, this);
	            this.keyboardModule = new ej2_base_2.KeyboardEvents(wrapper, {
	                eventName: 'keydown',
	                keyAction: this.keyActionHandler.bind(this),
	                keyConfigs: { space: 'space' }
	            });
	            ej2_base_2.EventHandler.add(document, 'keydown', this.keyDownHandler, this);
	            ej2_base_2.EventHandler.add(wrapper, 'mousedown', this.mouseDownHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focus', this.focusHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
	            var label = wrapper.getElementsByClassName('e-label')[0];
	            if (label) {
	                ej2_base_2.EventHandler.add(label, 'mousedown', this.labelMouseHandler, this);
	                ej2_base_2.EventHandler.add(label, 'mouseup', this.labelMouseHandler, this);
	            }
	        };
	        return CheckBox;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Event()
	    ], CheckBox.prototype, "change", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "checked", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "indeterminate", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "label", void 0);
	    __decorate([
	        ej2_base_1.Property('after')
	    ], CheckBox.prototype, "labelPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "name", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "value", void 0);
	    CheckBox = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], CheckBox);
	    exports.CheckBox = CheckBox;
	    exports.checkBoxBuilder = ej2_base_1.CreateBuilder(CheckBox);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, radio_button_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(radio_button_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, common_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var LABEL = 'e-label';
	    var RIPPLE = 'e-ripple-container';
	    var RTL = 'e-rtl';
	    var WRAPPER = 'e-radio-wrapper';
	    var RadioButton = (function (_super) {
	        __extends(RadioButton, _super);
	        function RadioButton(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isKeyPressed = false;
	            return _this;
	        }
	        RadioButton.prototype.changeHandler = function (event) {
	            this.checked = true;
	            var changeEventArgs = { checked: true, event: event };
	            this.trigger('change', changeEventArgs);
	        };
	        RadioButton.prototype.updateChange = function (state) {
	            var input;
	            var name = this.element.getAttribute('name');
	            var radioGrp = document.querySelectorAll('input.e-radio[name="' + name + '"]');
	            for (var i = 0; i < radioGrp.length; i++) {
	                input = radioGrp[i];
	                if (input !== this.element) {
	                    input.ej2_instances[0].checked = false;
	                }
	            }
	        };
	        RadioButton.prototype.destroy = function () {
	            var label = this.getLabel();
	            _super.prototype.destroy.call(this);
	            if (!this.disabled) {
	                this.unWireEvents();
	            }
	            ej2_base_3.detach(label);
	            this.element.checked = false;
	            if (this.name) {
	                this.element.removeAttribute('name');
	            }
	            if (this.value) {
	                this.element.removeAttribute('value');
	            }
	            if (this.disabled) {
	                this.element.removeAttribute('disabled');
	            }
	        };
	        RadioButton.prototype.focusHandler = function () {
	            if (this.isKeyPressed) {
	                this.getLabel().classList.add('e-focus');
	            }
	        };
	        RadioButton.prototype.focusOutHandler = function () {
	            this.getLabel().classList.remove('e-focus');
	        };
	        RadioButton.prototype.getModuleName = function () {
	            return 'radio';
	        };
	        RadioButton.prototype.getPersistData = function () {
	            return this.addOnPersist(['checked']);
	        };
	        RadioButton.prototype.getLabel = function () {
	            return this.element.nextElementSibling;
	        };
	        RadioButton.prototype.initialize = function () {
	            this.initWrapper();
	            if (this.name) {
	                this.element.setAttribute('name', this.name);
	            }
	            if (this.value) {
	                this.element.setAttribute('value', this.value);
	            }
	            if (this.checked) {
	                this.element.checked = true;
	            }
	            if (this.disabled) {
	                this.setDisabled();
	            }
	        };
	        RadioButton.prototype.initWrapper = function () {
	            var rippleSpan;
	            var wrapper = this.element.parentElement;
	            if (!wrapper.classList.contains(WRAPPER)) {
	                wrapper = ej2_base_3.createElement('div', { className: WRAPPER });
	                this.element.parentNode.insertBefore(wrapper, this.element);
	            }
	            var label = ej2_base_3.createElement('label', { attrs: { for: this.element.id } });
	            wrapper.appendChild(this.element);
	            wrapper.appendChild(label);
	            if (ej2_base_3.isRippleEnabled) {
	                rippleSpan = ej2_base_3.createElement('span', { className: (RIPPLE) });
	                label.appendChild(rippleSpan);
	                ej2_base_1.rippleEffect(rippleSpan, {
	                    duration: 400,
	                    isCenterRipple: true
	                });
	            }
	            if (this.enableRtl) {
	                label.classList.add(RTL);
	            }
	            if (this.cssClass) {
	                ej2_base_3.addClass([label], this.cssClass.split(' '));
	            }
	            if (this.label) {
	                this.setText(this.label);
	            }
	        };
	        RadioButton.prototype.keyDownHandler = function () {
	            this.isKeyPressed = true;
	        };
	        RadioButton.prototype.labelRippleHandler = function (e) {
	            var ripple = this.getLabel().getElementsByClassName(RIPPLE)[0];
	            if (ripple) {
	                var event_1 = document.createEvent('MouseEvents');
	                event_1.initEvent(e.type, true, true);
	                ripple.dispatchEvent(event_1);
	            }
	        };
	        RadioButton.prototype.mouseDownHandler = function () {
	            this.isKeyPressed = false;
	        };
	        RadioButton.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var label = this.getLabel();
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'checked':
	                        if (newProp.checked) {
	                            this.updateChange(newProp.checked);
	                        }
	                        this.element.checked = newProp.checked;
	                        break;
	                    case 'disabled':
	                        if (newProp.disabled) {
	                            this.setDisabled();
	                            this.unWireEvents();
	                        }
	                        else {
	                            this.element.disabled = false;
	                            this.wireEvents();
	                        }
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            label.classList.remove(oldProp.cssClass);
	                        }
	                        label.classList.add(newProp.cssClass);
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            label.classList.add(RTL);
	                        }
	                        else {
	                            label.classList.remove(RTL);
	                        }
	                        break;
	                    case 'label':
	                        this.setText(newProp.label);
	                        break;
	                    case 'labelPosition':
	                        if (newProp.labelPosition === 'before') {
	                            label.classList.add('e-right');
	                        }
	                        else {
	                            label.classList.remove('e-right');
	                        }
	                        break;
	                    case 'name':
	                        this.element.setAttribute('name', newProp.name);
	                        break;
	                    case 'value':
	                        this.element.setAttribute('value', newProp.value);
	                        break;
	                }
	            }
	        };
	        RadioButton.prototype.preRender = function () {
	            var element = this.element;
	            element = common_1.wrapperInitialize('EJ-RADIOBUTTON', 'radio', element, WRAPPER);
	            this.element = element;
	            if (this.element.getAttribute('type') !== 'radio') {
	                this.element.setAttribute('type', 'radio');
	            }
	            if (!this.element.id) {
	                this.element.id = ej2_base_4.getUniqueID('e-' + this.getModuleName());
	            }
	        };
	        RadioButton.prototype.render = function () {
	            this.initialize();
	            if (!this.disabled) {
	                this.wireEvents();
	            }
	        };
	        RadioButton.prototype.setDisabled = function () {
	            this.element.disabled = true;
	        };
	        RadioButton.prototype.setText = function (text) {
	            var label = this.getLabel();
	            var textLabel = label.getElementsByClassName(LABEL)[0];
	            if (textLabel) {
	                textLabel.textContent = text;
	            }
	            else {
	                textLabel = ej2_base_3.createElement('span', { className: LABEL, innerHTML: text });
	                label.appendChild(textLabel);
	            }
	            if (this.labelPosition === 'before') {
	                this.getLabel().classList.add('e-right');
	            }
	            else {
	                this.getLabel().classList.remove('e-right');
	            }
	        };
	        RadioButton.prototype.unWireEvents = function () {
	            var label = this.getLabel();
	            ej2_base_2.EventHandler.remove(this.element, 'change', this.changeHandler);
	            ej2_base_2.EventHandler.remove(document, 'keydown', this.keyDownHandler);
	            ej2_base_2.EventHandler.remove(label, 'mousedown', this.mouseDownHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focus', this.focusHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
	            var rippleLabel = label.getElementsByClassName(LABEL)[0];
	            if (rippleLabel) {
	                ej2_base_2.EventHandler.remove(rippleLabel, 'mousedown', this.labelRippleHandler);
	                ej2_base_2.EventHandler.remove(rippleLabel, 'mouseup', this.labelRippleHandler);
	            }
	        };
	        RadioButton.prototype.wireEvents = function () {
	            var label = this.getLabel();
	            ej2_base_2.EventHandler.add(this.element, 'change', this.changeHandler, this);
	            ej2_base_2.EventHandler.add(document, 'keydown', this.keyDownHandler, this);
	            ej2_base_2.EventHandler.add(label, 'mousedown', this.mouseDownHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focus', this.focusHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
	            var rippleLabel = label.getElementsByClassName(LABEL)[0];
	            if (rippleLabel) {
	                ej2_base_2.EventHandler.add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
	                ej2_base_2.EventHandler.add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
	            }
	        };
	        return RadioButton;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Event()
	    ], RadioButton.prototype, "change", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], RadioButton.prototype, "checked", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], RadioButton.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "label", void 0);
	    __decorate([
	        ej2_base_1.Property('after')
	    ], RadioButton.prototype, "labelPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "name", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "value", void 0);
	    RadioButton = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], RadioButton);
	    exports.RadioButton = RadioButton;
	    exports.radioButtonBuilder = ej2_base_1.CreateBuilder(RadioButton);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI0OTFjNTk2MjE1YmJhODhiNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrLWJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2stYm94L2NoZWNrLWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztpRUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O2lFQ1BEO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsU0FBUyxlQUFlLEVBQUU7QUFDckY7QUFDQTtBQUNBLDZDQUE0QztBQUM1QyxjQUFhO0FBQ2IsaUVBQWdFLGFBQWE7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLHNCQUFzQjtBQUM1RCx3REFBdUQsa0NBQWtDO0FBQ3pGLDJEQUEwRCwrQkFBK0I7QUFDekY7QUFDQSxnRUFBK0Qsa0NBQWtDO0FBQ2pHLGtEQUFpRCxzQ0FBc0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ25ERCxnRDs7Ozs7O2lFQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCxzQ0FBc0M7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsMENBQTBDO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQy9ORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdEO0FBQ2hELGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNERBQTJELFNBQVMsdUJBQXVCLEVBQUU7QUFDN0YsK0RBQThELGdDQUFnQztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRSxvQkFBb0I7QUFDdkY7QUFDQSxzREFBcUQsc0NBQXNDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELFNBQVMscUJBQXFCLEVBQUU7QUFDL0Y7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRCxrQkFBaUI7QUFDakIsMEVBQXlFLGFBQWE7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQsb0NBQW9DO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0IsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDalhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELHFCQUFxQjtBQUNoRjtBQUNBO0FBQ0EsNERBQTJELFNBQVMsdUJBQXVCLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELHNCQUFzQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQThELG9DQUFvQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiZWoyLWJ1dHRvbnMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjQ5MWM1OTYyMTViYmE4OGI3IiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9jb21tb24vaW5kZXhcIiwgXCIuL2J1dHRvbi9pbmRleFwiLCBcIi4vY2hlY2stYm94L2luZGV4XCIsIFwiLi9yYWRpby1idXR0b24vaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBpbmRleF8yLCBpbmRleF8zLCBpbmRleF80KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbmRleF8xKTtcbiAgICBfX2V4cG9ydChpbmRleF8yKTtcbiAgICBfX2V4cG9ydChpbmRleF8zKTtcbiAgICBfX2V4cG9ydChpbmRleF80KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9jb21tb25cIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBjb21tb25fMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoY29tbW9uXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZnVuY3Rpb24gd3JhcHBlckluaXRpYWxpemUodGFnLCB0eXBlLCBlbGVtZW50LCBXUkFQUEVSKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IHRhZykge1xuICAgICAgICAgICAgdmFyIGVqSW5zdGFuY2UgPSBlajJfYmFzZV8yLmdldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBhdHRyczogeyAndHlwZSc6IHR5cGUgfSB9KTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IFsnY2hhbmdlJywgJ2Nzc0NsYXNzJywgJ2xhYmVsJywgJ2xhYmVsUG9zaXRpb24nXTtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRhZywge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogV1JBUFBFUiwgYXR0cnM6IHsgJ3JvbGUnOiB0eXBlLCAnYXJpYS1jaGVja2VkJzogJ2ZhbHNlJyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuaW5kZXhPZihlbGVtZW50LmF0dHJpYnV0ZXNbaW5kZXhdLm5vZGVOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZU5hbWUsIGVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0LCBlbGVtZW50KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuZGV0YWNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudCA9IGlucHV0O1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLnNldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgZWpJbnN0YW5jZSwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGV4cG9ydHMud3JhcHBlckluaXRpYWxpemUgPSB3cmFwcGVySW5pdGlhbGl6ZTtcbiAgICBmdW5jdGlvbiBnZXRUZXh0Tm9kZShlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlO1xuICAgICAgICB2YXIgY2hpbGRub2RlID0gZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IGNoaWxkbm9kZVtpXTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGV4cG9ydHMuZ2V0VGV4dE5vZGUgPSBnZXRUZXh0Tm9kZTtcbiAgICBmdW5jdGlvbiBjcmVhdGVDaGVja0JveChlbmFibGVSaXBwbGUpIHtcbiAgICAgICAgaWYgKGVuYWJsZVJpcHBsZSA9PT0gdm9pZCAwKSB7IGVuYWJsZVJpcHBsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciB3cmFwcGVyID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2UtY2hlY2tib3gtd3JhcHBlcicgfSk7XG4gICAgICAgIHZhciBmcmFtZVNwYW4gPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2UtZnJhbWUgZS1pY29ucycgfSk7XG4gICAgICAgIGlmIChlbmFibGVSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVTcGFuID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdlLXJpcHBsZS1jb250YWluZXInIH0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5yaXBwbGVFZmZlY3QocmlwcGxlU3BhbiwgeyBpc0NlbnRlclJpcHBsZTogdHJ1ZSwgZHVyYXRpb246IDQwMCB9KTtcbiAgICAgICAgICAgIGZyYW1lU3Bhbi5hcHBlbmRDaGlsZChyaXBwbGVTcGFuKTtcbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZyYW1lU3Bhbik7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICBleHBvcnRzLmNyZWF0ZUNoZWNrQm94ID0gY3JlYXRlQ2hlY2tCb3g7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi9jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9idXR0b25cIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBidXR0b25fMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoYnV0dG9uXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9idXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCIuLi9jb21tb24vY29tbW9uXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgY29tbW9uXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIGNzc0NsYXNzTmFtZSA9IHtcbiAgICAgICAgUlRMOiAnZS1ydGwnLFxuICAgICAgICBCVVRUT046ICdlLWJ0bicsXG4gICAgICAgIFBSSU1BUlk6ICdlLXByaW1hcnknLFxuICAgICAgICBJQ09OQlROOiAnZS1pY29uLWJ0bidcbiAgICB9O1xuICAgIHZhciBCdXR0b24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBCdXR0b24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hZGRDbGFzcyhbdGhpcy5lbGVtZW50XSwgdGhpcy5jc3NDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzTmFtZS5QUklNQVJZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRJY29uQ3NzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzc05hbWUuUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU3RhdHVzKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMi5yaXBwbGVFZmZlY3QodGhpcy5lbGVtZW50LCB7IHNlbGVjdG9yOiAnLicgKyBjc3NDbGFzc05hbWUuQlVUVE9OIH0pO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuY29udHJvbFN0YXR1cyA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0SWNvbkNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmljb25Dc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzc05hbWUuSUNPTkJUTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzcGFuID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdlLWJ0bi1pY29uICcgKyB0aGlzLmljb25Dc3MgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiB0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoc3Bhbiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnZS1pY29uLWxlZnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWNvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2UtaWNvbi1yaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuYnRuQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS51bldpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuYnRuQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS5idG5DbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2UtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzcGFuO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMucmVtb3ZlQ2xhc3MoW3RoaXMuZWxlbWVudF0sIFtjc3NDbGFzc05hbWUuUFJJTUFSWSwgY3NzQ2xhc3NOYW1lLlJUTCwgY3NzQ2xhc3NOYW1lLklDT05CVE4sICdlLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICdlLWluZm8nLCAnZS1kYW5nZXInLCAnZS13YXJuaW5nJywgJ2UtZmxhdCcsICdlLW91dGxpbmUnLCAnZS1zbWFsbCcsICdlLWJpZ2dlcicsICdlLWFjdGl2ZScsICdlLXJvdW5kJ10pO1xuICAgICAgICAgICAgWydlLXJpcHBsZScsICdkaXNhYmxlZCddLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKHRoaXMuY29udGVudCwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5lLWJ0bi1pY29uJyk7XG4gICAgICAgICAgICBpZiAoc3Bhbikge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHNwYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdidG4nO1xuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS5vblByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdQcm9wLCBvbGRQcm9wKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lzUHJpbWFyeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzc05hbWUuUFJJTUFSWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc05hbWUuUFJJTUFSWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU3RhdHVzKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ljb25Dc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwYW4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5lLWJ0bi1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ2UtYnRuLWljb24gJyArIHRoaXMuaWNvbkNzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2UtaWNvbi1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2UtaWNvbi1yaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uQ3NzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaWNvblBvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5lLWJ0bi1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHNwYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uQ3NzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3NzQ2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFByb3AuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBvbGRQcm9wLmNzc0NsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hZGRDbGFzcyhbdGhpcy5lbGVtZW50XSwgbmV3UHJvcC5jc3NDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3NOYW1lLlJUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc05hbWUuUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gY29tbW9uXzEuZ2V0VGV4dE5vZGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5ld1Byb3AuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBuZXdQcm9wLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3NOYW1lLklDT05CVE4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbkNzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lzVG9nZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmlzVG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5idG5DbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5idG5DbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMucmVtb3ZlQ2xhc3MoW3RoaXMuZWxlbWVudF0sIFsnZS1hY3RpdmUnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBCdXR0b247XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdsZWZ0JylcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImljb25Qb3NpdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiaWNvbkNzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImlzUHJpbWFyeVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImNvbnRlbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImlzVG9nZ2xlXCIsIHZvaWQgMCk7XG4gICAgQnV0dG9uID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgQnV0dG9uKTtcbiAgICBleHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbiAgICBleHBvcnRzLmJ1dHRvbkJ1aWxkZXIgPSBlajJfYmFzZV8yLkNyZWF0ZUJ1aWxkZXIoQnV0dG9uKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYnV0dG9uL2J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NoZWNrLWJveFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGNoZWNrX2JveF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChjaGVja19ib3hfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NoZWNrLWJveC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgZWoyX2Jhc2VfNCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0hFQ0sgPSAnZS1jaGVjayc7XG4gICAgdmFyIERJU0FCTEVEID0gJ2UtY2hlY2tib3gtZGlzYWJsZWQnO1xuICAgIHZhciBGUkFNRSA9ICdlLWZyYW1lJztcbiAgICB2YXIgSU5ERVRFUk1JTkFURSA9ICdlLXN0b3AnO1xuICAgIHZhciBMQUJFTCA9ICdlLWxhYmVsJztcbiAgICB2YXIgUklQUExFID0gJ2UtcmlwcGxlLWNvbnRhaW5lcic7XG4gICAgdmFyIFJUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIFdSQVBQRVIgPSAnZS1jaGVja2JveC13cmFwcGVyJztcbiAgICB2YXIgQ2hlY2tCb3ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQ2hlY2tCb3gsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENoZWNrQm94KG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5pc0tleVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBhcmlhU3RhdGU7XG4gICAgICAgICAgICB2YXIgZnJhbWVTcGFuID0gdGhpcy5nZXRXcmFwcGVyKCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGUkFNRSlbMF07XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdjaGVjaycpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uY2xhc3NMaXN0LnJlbW92ZShJTkRFVEVSTUlOQVRFKTtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uY2xhc3NMaXN0LmFkZChDSEVDSyk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAndW5jaGVjaycpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnJlbW92ZUNsYXNzKFtmcmFtZVNwYW5dLCBbQ0hFQ0ssIElOREVURVJNSU5BVEVdKTtcbiAgICAgICAgICAgICAgICBhcmlhU3RhdGUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uY2xhc3NMaXN0LnJlbW92ZShDSEVDSyk7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5hZGQoSU5ERVRFUk1JTkFURSk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ21peGVkJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFdyYXBwZXIoKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIGFyaWFTdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNPdXRIYW5kbGVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSh0aGlzLmNoZWNrZWQgPyAnY2hlY2snIDogJ3VuY2hlY2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndW5jaGVjaycpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY2hlY2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoYW5nZUV2ZW50QXJncyA9IHsgY2hlY2tlZDogdGhpcy5lbGVtZW50LmNoZWNrZWQsIGV2ZW50OiBldmVudCB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBjaGFuZ2VFdmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5XaXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgd3JhcHBlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFdyYXBwZXIoKS5jbGFzc0xpc3QuYWRkKCdlLWZvY3VzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5mb2N1c091dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFdyYXBwZXIoKS5jbGFzc0xpc3QucmVtb3ZlKCdlLWZvY3VzJyk7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdjaGVja2JveCc7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbJ2NoZWNrZWQnLCAnaW5kZXRlcm1pbmF0ZSddKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmdldFdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY2hlY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmluaXRXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmICghd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoV1JBUFBFUikpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogV1JBUFBFUiwgYXR0cnM6IHsgJ3JvbGUnOiAnY2hlY2tib3gnLCAnYXJpYS1jaGVja2VkJzogJ2ZhbHNlJyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBhdHRyczogeyBmb3I6IHRoaXMuZWxlbWVudC5pZCB9IH0pO1xuICAgICAgICAgICAgdmFyIGZyYW1lU3BhbiA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZS1pY29ucyAnICsgRlJBTUUgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hZGRDbGFzcyhbd3JhcHBlcl0sIHRoaXMuY3NzQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChmcmFtZVNwYW4pO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzMuaXNSaXBwbGVFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJpcHBsZVNwYW4gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogUklQUExFIH0pO1xuICAgICAgICAgICAgICAgIGZyYW1lU3Bhbi5hcHBlbmRDaGlsZChyaXBwbGVTcGFuKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnJpcHBsZUVmZmVjdChyaXBwbGVTcGFuLCB7IGR1cmF0aW9uOiA0MDAsIGlzQ2VudGVyUmlwcGxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRleHQodGhpcy5sYWJlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5rZXlBY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ3NwYWNlJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzS2V5UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5sYWJlbE1vdXNlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlU3BhbiA9IHRoaXMuZ2V0V3JhcHBlcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUklQUExFKVswXTtcbiAgICAgICAgICAgIGlmIChyaXBwbGVTcGFuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBldmVudF8xLmluaXRFdmVudChlLnR5cGUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJpcHBsZVNwYW4uZGlzcGF0Y2hFdmVudChldmVudF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzS2V5UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG5ld1Byb3AuY2hlY2tlZCA/ICdjaGVjaycgOiAndW5jaGVjaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luZGV0ZXJtaW5hdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSh0aGlzLmNoZWNrZWQgPyAnY2hlY2snIDogJ3VuY2hlY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuV2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKERJU0FCTEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcm9wLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKG9sZFByb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKG5ld1Byb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShSVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhYmVsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGV4dChuZXdQcm9wLmxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsYWJlbFBvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShMQUJFTClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWxXcmFwID0gd3JhcHBlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmxhYmVsUG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdyYXAuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXcmFwLmluc2VydEJlZm9yZShsYWJlbCwgd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZSQU1FKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3UHJvcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1Byb3AudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRUotQ0hFQ0tCT1gnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVqSW5zdCA9IGVqMl9iYXNlXzQuZ2V0VmFsdWUoJ2VqMl9pbnN0YW5jZXMnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGF0dHJzOiB7ICd0eXBlJzogJ2NoZWNrYm94JyB9IH0pO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IFsnY2hhbmdlJywgJ2Nzc0NsYXNzJywgJ2luZGV0ZXJtaW5hdGUnLCAnbGFiZWwnLCAnbGFiZWxQb3NpdGlvbiddO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdFSi1DSEVDS0JPWCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBXUkFQUEVSLCBhdHRyczogeyAncm9sZSc6ICdjaGVja2JveCcsICdhcmlhLWNoZWNrZWQnOiAnZmFsc2UnIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbiA9IHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmluZGV4T2YodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaW5kZXhdLm5vZGVOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZU5hbWUsIHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzW2luZGV4XS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgZWpJbnN0LCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSAhPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gZWoyX2Jhc2VfNC5nZXRVbmlxdWVJRCgnZS0nICsgdGhpcy5nZXRNb2R1bGVOYW1lKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0V3JhcHBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoRElTQUJMRUQpO1xuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuc2V0VGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmdldFdyYXBwZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKExBQkVMKVswXTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IExBQkVMLCBpbm5lckhUTUw6IHRleHQgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsV3JhcCA9IHRoaXMuZ2V0V3JhcHBlcigpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsV3JhcC5pbnNlcnRCZWZvcmUobGFiZWwsIHRoaXMuZ2V0V3JhcHBlcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRlJBTUUpWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsV3JhcC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUudW5XaXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHdyYXBwZXIsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEhhbmRsZXIpO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlLWxhYmVsJylbMF07XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUobGFiZWwsICdtb3VzZWRvd24nLCB0aGlzLmxhYmVsTW91c2VIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUobGFiZWwsICdtb3VzZXVwJywgdGhpcy5sYWJlbE1vdXNlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRNb2R1bGUgPSBuZXcgZWoyX2Jhc2VfMi5LZXlib2FyZEV2ZW50cyh3cmFwcGVyLCB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAna2V5ZG93bicsXG4gICAgICAgICAgICAgICAga2V5QWN0aW9uOiB0aGlzLmtleUFjdGlvbkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBrZXlDb25maWdzOiB7IHNwYWNlOiAnc3BhY2UnIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHdyYXBwZXIsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlLWxhYmVsJylbMF07XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQobGFiZWwsICdtb3VzZWRvd24nLCB0aGlzLmxhYmVsTW91c2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQobGFiZWwsICdtb3VzZXVwJywgdGhpcy5sYWJlbE1vdXNlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDaGVja0JveDtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuRXZlbnQoKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJjaGFuZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwiY2hlY2tlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJpbmRldGVybWluYXRlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQ2hlY2tCb3gucHJvdG90eXBlLCBcImxhYmVsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2FmdGVyJylcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwibGFiZWxQb3NpdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJuYW1lXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQ2hlY2tCb3gucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgQ2hlY2tCb3ggPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBDaGVja0JveCk7XG4gICAgZXhwb3J0cy5DaGVja0JveCA9IENoZWNrQm94O1xuICAgIGV4cG9ydHMuY2hlY2tCb3hCdWlsZGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKENoZWNrQm94KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2hlY2stYm94L2NoZWNrLWJveC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3JhZGlvLWJ1dHRvblwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIHJhZGlvX2J1dHRvbl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChyYWRpb19idXR0b25fMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JhZGlvLWJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiLi8uLi9jb21tb24vY29tbW9uXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgZWoyX2Jhc2VfNCwgY29tbW9uXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIExBQkVMID0gJ2UtbGFiZWwnO1xuICAgIHZhciBSSVBQTEUgPSAnZS1yaXBwbGUtY29udGFpbmVyJztcbiAgICB2YXIgUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgV1JBUFBFUiA9ICdlLXJhZGlvLXdyYXBwZXInO1xuICAgIHZhciBSYWRpb0J1dHRvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhSYWRpb0J1dHRvbiwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gUmFkaW9CdXR0b24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmlzS2V5UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5jaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGNoYW5nZUV2ZW50QXJncyA9IHsgY2hlY2tlZDogdHJ1ZSwgZXZlbnQ6IGV2ZW50IH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIGNoYW5nZUV2ZW50QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS51cGRhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dDtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgdmFyIHJhZGlvR3JwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuZS1yYWRpb1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvR3JwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSByYWRpb0dycFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5lajJfaW5zdGFuY2VzWzBdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuV2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2gobGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldExhYmVsKCkuY2xhc3NMaXN0LmFkZCgnZS1mb2N1cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuZm9jdXNPdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRMYWJlbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2UtZm9jdXMnKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JhZGlvJztcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KFsnY2hlY2tlZCddKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmdldExhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0V3JhcHBlcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuaW5pdFdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlU3BhbjtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFdSQVBQRVIpKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlciA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IFdSQVBQRVIgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBhdHRyczogeyBmb3I6IHRoaXMuZWxlbWVudC5pZCB9IH0pO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMy5pc1JpcHBsZUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByaXBwbGVTcGFuID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IChSSVBQTEUpIH0pO1xuICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHJpcHBsZVNwYW4pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmlwcGxlRWZmZWN0KHJpcHBsZVNwYW4sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaXNDZW50ZXJSaXBwbGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hZGRDbGFzcyhbbGFiZWxdLCB0aGlzLmNzc0NsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRleHQodGhpcy5sYWJlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNLZXlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmxhYmVsUmlwcGxlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gdGhpcy5nZXRMYWJlbCgpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUklQUExFKVswXTtcbiAgICAgICAgICAgIGlmIChyaXBwbGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRfMSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAgICAgICAgIGV2ZW50XzEuaW5pdEV2ZW50KGUudHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmlwcGxlLmRpc3BhdGNoRXZlbnQoZXZlbnRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5tb3VzZURvd25IYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0tleVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDaGFuZ2UobmV3UHJvcC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gbmV3UHJvcC5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5XaXJlRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkUHJvcC5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUob2xkUHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKG5ld1Byb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFJUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFJUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGFiZWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUZXh0KG5ld1Byb3AubGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhYmVsUG9zaXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AubGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdlLXJpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdlLXJpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3UHJvcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1Byb3AudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50ID0gY29tbW9uXzEud3JhcHBlckluaXRpYWxpemUoJ0VKLVJBRElPQlVUVE9OJywgJ3JhZGlvJywgZWxlbWVudCwgV1JBUFBFUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSAhPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gZWoyX2Jhc2VfNC5nZXRVbmlxdWVJRCgnZS0nICsgdGhpcy5nZXRNb2R1bGVOYW1lKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLnNldFRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgdmFyIHRleHRMYWJlbCA9IGxhYmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTEFCRUwpWzBdO1xuICAgICAgICAgICAgaWYgKHRleHRMYWJlbCkge1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogTEFCRUwsIGlubmVySFRNTDogdGV4dCB9KTtcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldExhYmVsKCkuY2xhc3NMaXN0LmFkZCgnZS1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMYWJlbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2UtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRIYW5kbGVyKTtcbiAgICAgICAgICAgIHZhciByaXBwbGVMYWJlbCA9IGxhYmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTEFCRUwpWzBdO1xuICAgICAgICAgICAgaWYgKHJpcHBsZUxhYmVsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHJpcHBsZUxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5sYWJlbFJpcHBsZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShyaXBwbGVMYWJlbCwgJ21vdXNldXAnLCB0aGlzLmxhYmVsUmlwcGxlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2NoYW5nZScsIHRoaXMuY2hhbmdlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQobGFiZWwsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZUxhYmVsID0gbGFiZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShMQUJFTClbMF07XG4gICAgICAgICAgICBpZiAocmlwcGxlTGFiZWwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQocmlwcGxlTGFiZWwsICdtb3VzZWRvd24nLCB0aGlzLmxhYmVsUmlwcGxlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHJpcHBsZUxhYmVsLCAnbW91c2V1cCcsIHRoaXMubGFiZWxSaXBwbGVIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJhZGlvQnV0dG9uO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5FdmVudCgpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcImNoYW5nZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJjaGVja2VkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcImxhYmVsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2FmdGVyJylcbiAgICBdLCBSYWRpb0J1dHRvbi5wcm90b3R5cGUsIFwibGFiZWxQb3NpdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJuYW1lXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgUmFkaW9CdXR0b24gPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBSYWRpb0J1dHRvbik7XG4gICAgZXhwb3J0cy5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuICAgIGV4cG9ydHMucmFkaW9CdXR0b25CdWlsZGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKFJhZGlvQnV0dG9uKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9