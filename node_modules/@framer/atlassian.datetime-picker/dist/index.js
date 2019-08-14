(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@atlaskit/css-reset"), require("@atlaskit/datetime-picker"), require("@atlaskit/form"), require("date-fns"), require("framer"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["@atlaskit/css-reset", "@atlaskit/datetime-picker", "@atlaskit/form", "date-fns", "framer", "react", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@atlaskit/css-reset"), require("@atlaskit/datetime-picker"), require("@atlaskit/form"), require("date-fns"), require("framer"), require("react"), require("styled-components")) : factory(root["@atlaskit/css-reset"], root["@atlaskit/datetime-picker"], root["@atlaskit/form"], root["date-fns"], root["Framer"], root["React"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__atlaskit_css_reset__, __WEBPACK_EXTERNAL_MODULE__atlaskit_datetime_picker__, __WEBPACK_EXTERNAL_MODULE__atlaskit_form__, __WEBPACK_EXTERNAL_MODULE_date_fns__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Datetime_picker.tsx": "./code/Datetime_picker.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Datetime_picker.tsx":
/*!**********************************!*\
  !*** ./code/Datetime_picker.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZXRpbWVfcGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9EYXRldGltZV9waWNrZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWlDO0FBQ2pDLCtCQUE4QjtBQUM5QiwrQkFBNEI7QUFDNUIsbUNBQXlEO0FBQ3pELHlDQUt1QjtBQUN2QiwrREFJa0M7QUFDbEMseURBQXNDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7O0NBSXpCLENBQUE7QUFFRCxlQUFlLENBQUMsWUFBWSxHQUFHO0lBQzNCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsT0FBTztJQUNkLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFlBQVksRUFBRSxZQUFZO0lBQzFCLFlBQVksRUFBRSxZQUFZO0lBQzFCLGFBQWEsRUFBRSxhQUFhO0lBQzVCLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7Q0FDNUIsQ0FBQTtBQUVELFNBQWdCLGVBQWUsQ0FBQyxLQUFLOztJQUNqQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVqQixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsRUFBRTs7UUFDdkIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25C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

Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! @atlaskit/css-reset */ "@atlaskit/css-reset");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const form_1 = __webpack_require__(/*! @atlaskit/form */ "@atlaskit/form");
const datetime_picker_1 = __webpack_require__(/*! @atlaskit/datetime-picker */ "@atlaskit/datetime-picker");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const Wrapper = styled_components_1.default.div `
  > div {
    margin-top: 0;
  }
`;
Datetime_picker.defaultProps = {
    width: 240,
    height: 80,
    label: "Label",
    dateFormat: "YYYY/MM/DD",
    isRequired: false,
    showValidation: true,
    placeholder: "Placeholder",
    errorMessage: "Error text",
    validMessage: "Valid text",
    helperMessage: "Helper text",
    validationValue: "helper",
    value: "",
    onValueChange: () => null,
};
function Datetime_picker(props) {
    window["__checkBudget__"]();
    const [dateValue, setDateValue] = React.useState(props.value);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setDateValue(props.value);
    }, [props.value]);
    const handleDate = event => {
        window["__checkBudget__"]();
        setDateValue(event);
        const outputValue = date_fns_1.format(new Date(event), props.dateFormat);
        props.onValueChange(event, outputValue);
    };
    let validationText = {
        error: React.createElement(form_1.ErrorMessage, null, props.errorMessage),
        valid: React.createElement(form_1.ValidMessage, null,
            " ",
            props.validMessage),
        helper: React.createElement(form_1.HelperMessage, null,
            " ",
            props.helperMessage),
    };
    return (React.createElement(Wrapper, null,
        React.createElement(form_1.Field, { name: "textField", label: props.label, isRequired: props.isRequired }, ({ fieldProps }) => (React.createElement(React.Fragment, null,
            React.createElement(datetime_picker_1.DatePicker, { placeholder: props.placeholder, onChange: handleDate, value: dateValue, dateFormat: props.dateFormat }),
            props.showValidation &&
                validationText[props.validationValue])))));
}
exports.Datetime_picker = Datetime_picker;
framer_1.addPropertyControls(Datetime_picker, {
    label: {
        type: framer_1.ControlType.String,
        title: "Label",
    },
    value: {
        type: framer_1.ControlType.String,
        title: "Value",
    },
    placeholder: {
        type: framer_1.ControlType.String,
        title: "Placeholder",
    },
    dateFormat: {
        type: framer_1.ControlType.String,
        title: "Date format",
    },
    isRequired: {
        type: framer_1.ControlType.Boolean,
        title: "Required?",
    },
    showValidation: {
        type: framer_1.ControlType.Boolean,
        title: "Validation?",
    },
    validationValue: {
        hidden(props) {
            window["__checkBudget__"]();
            return props.showValidation === false;
        },
        type: framer_1.ControlType.SegmentedEnum,
        title: "Validation",
        options: ["error", "valid", "helper"],
        optionTitles: ["Error", "Valid", "Helper"],
    },
    errorMessage: {
        hidden(props) {
            window["__checkBudget__"]();
            return props.validationValue !== "error";
        },
        type: framer_1.ControlType.String,
        title: "Error text",
    },
    validMessage: {
        hidden(props) {
            window["__checkBudget__"]();
            return props.validationValue !== "valid";
        },
        type: framer_1.ControlType.String,
        title: "Valid text",
    },
    helperMessage: {
        hidden(props) {
            window["__checkBudget__"]();
            return props.validationValue !== "helper";
        },
        type: framer_1.ControlType.String,
        title: "Helper text",
    },
});
exports.__info__ = [{ name: "Datetime_picker", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.11","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-extractor":"^7.1.5","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.19.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"e1cc239f-f3e8-41d2-a433-e662eaf4e785","displayName":"Datetime picker"},"author":"Ee Venn Soh","dependencies":{"@atlaskit/css-reset":"latest","@atlaskit/datetime-picker":"latest","@atlaskit/form":"latest","date-fns":"latest","styled-components":"latest"},"name":"@framer/atlassian.datetime-picker","version":"1.10.0"};

/***/ }),

/***/ "@atlaskit/css-reset":
/*!**************************************!*\
  !*** external "@atlaskit/css-reset" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__atlaskit_css_reset__;

/***/ }),

/***/ "@atlaskit/datetime-picker":
/*!********************************************!*\
  !*** external "@atlaskit/datetime-picker" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__atlaskit_datetime_picker__;

/***/ }),

/***/ "@atlaskit/form":
/*!*********************************!*\
  !*** external "@atlaskit/form" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__atlaskit_form__;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_date_fns__;

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});