/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuHandler: () => (/* binding */ menuHandler)
/* harmony export */ });
function menuHandler() {
  if (document.body.classList.contains("menu-opened")) {
    document.body.classList.remove("menu-opened");
    return;
  }
  document.body.classList.add("menu-opened");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ././img/Group80.svg */ "./src/img/Group80.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Roboto:ital,wght@0,400;0,500;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */
/**
   * Remove the margin in all browsers.
   */
body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */
main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */
/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */
/**
   * Remove the gray background on active links in IE 10.
   */
a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */
small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */
/**
   * Remove the border on images inside links in IE 10.
   */
img {
  border-style: none;
}

/* Forms
     ========================================================================== */
/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */
textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */
/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */
summary {
  display: list-item;
}

/* Misc
     ========================================================================== */
/**
   * Add the correct display in IE 10+.
   */
template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */
[hidden] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

a,
a:visited {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  font-family: "Roboto", sans-serif;
  transition: all 0.2s ease;
  background-color: #f7f7f7;
}

.header__menu {
  position: relative;
  z-index: 1;
}
.header__mainhero {
  position: relative;
  z-index: 0;
}

h1 {
  font-family: "Playfair Display", serif;
  font-weight: 500;
}

[class*=__container] {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  [class*=__container] {
    padding: 0 30px;
  }
}
.menu__wrapper {
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
}
.menu__container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand__body {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 101;
}
.brand__body svg {
  width: 70px;
  stroke: #017d37;
  height: 100%;
  margin-right: 10px;
}
.brand__body svg path {
  stroke-width: 5px;
  stroke-dasharray: 1053;
  stroke-dashoffset: 1053;
  animation: draw 5s ease-in-out 1 forwards;
}
.brand__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: calc(50vw - 16px);
  transform: translate(-50%, 0);
}
.brand__text span:nth-child(1) {
  opacity: 0;
  font-size: 20px;
  color: #017d37;
  font-weight: 800;
  font-family: "Playfair Display", serif;
  animation: toOpacityOne 1s ease-in-out 1s 1 forwards;
}
.brand__text span:nth-child(2) {
  width: 117px;
  text-align: center;
  opacity: 0;
  font-size: 12px;
  color: #3c3c3c;
  font-weight: 700;
  animation: toOpacityOne 1s ease-in-out 1.5s 1 forwards;
}

.nav {
  display: flex;
  align-items: center;
}
.nav__item {
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8705882353);
}
.nav__item:first-child {
  padding-top: 130px;
}
.nav__list {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  z-index: 100;
  transform: translateX(-100%);
  transition: all 0.4s ease-out;
}
.nav__icon {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 4;
  display: flex;
  align-items: center;
  z-index: 101;
}
.nav__icon svg {
  fill: #017d37;
}
.nav__icon svg path:nth-child(1) {
  transition: all 0.4s ease-out;
  transform-origin: right;
}
.nav__icon svg path:nth-child(2) {
  transition: all 0.4s ease-out;
}
.nav__icon svg path:nth-child(3) {
  transition: all 0.4s ease-out;
  transform-origin: right;
}

.contacts__item svg {
  width: 40px;
  height: 40px;
  stroke: #017d37;
  margin-left: 15px;
}
.contacts__list {
  display: flex;
  position: absolute;
  z-index: 101;
  top: 90vh;
  left: 0;
  transform: translate(-100%, 0);
  transition: all 0.4s ease-out;
}

.tiktok svg {
  stroke-width: 9.5988px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.phone svg {
  fill: #017d37;
}

.menu-opened .contacts__list {
  left: 50%;
  transform: translate(-50%, 0);
}
.menu-opened .nav__list {
  left: auto;
  right: 0;
  transform: translate(0, 0);
  z-index: 100;
  opacity: 1;
  visibility: visible;
  width: 100%;
}
.menu-opened .nav__icon svg {
  fill: #017d37;
}
.menu-opened .nav__icon svg path:nth-child(1) {
  transform-origin: right;
  transform: translateY(-40%) rotate(-45deg);
}
.menu-opened .nav__icon svg path:nth-child(2) {
  opacity: 0;
}
.menu-opened .nav__icon svg path:nth-child(3) {
  transform-origin: right;
  transform: translateY(40%) rotate(45deg);
}

@media (min-width: 768.98px) {
  .menu {
    position: relative;
  }
  .menu__container {
    position: relative;
  }
  .brand__body {
    position: relative;
  }
  .brand__text {
    position: static;
    transform: translate(0, 0);
  }
  .nav__body {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: transparent;
  }
  .nav__list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    position: static;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 100;
    transform: translateY(-300%);
    background: transparent;
    transition: all 0.4s ease-out;
  }
  .nav__item {
    color: #ffffff;
    text-shadow: 0 0 2px #000000;
  }
  .nav__item:first-child {
    padding-top: 0;
  }
  .contacts {
    margin-right: 70px;
  }
  .contacts__item svg {
    width: 30px;
    height: 30px;
  }
  .contacts__list {
    position: static;
    transform: translate(0, 0);
  }
  .menu-opened .contacts__list {
    transform: translate(0);
  }
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes toOpacityOne {
  to {
    opacity: 1;
  }
}
@keyframes toDown {
  to {
    transform: translate(0, 0);
  }
}
.mainhero {
  margin-top: 80px;
  margin-bottom: 50px;
}
.mainhero__video {
  max-width: 1340px;
  margin: 0 auto;
  min-height: 450px;
  height: 70.1vh;
  position: relative;
}
.mainhero__video::before {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
}
.mainhero__video::after {
  content: "Lotus";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-transform: uppercase;
  font-size: 74px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8705882353);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center no-repeat;
}
.mainhero__video-intro {
  position: relative;
  min-height: 450px;
  height: 70vh;
  overflow: hidden;
}
.mainhero__video-intro::before {
  content: "mass";
  position: absolute;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8705882353);
  font-weight: 700;
  font-family: Arial, sans-serif;
  height: 70vh;
  top: 72px;
  left: 0;
  z-index: 2;
}
@media (max-width: 767.98px) {
  .mainhero__video-intro::before {
    font-size: calc(
      98px + 128.6 * (100vw - 320px) / 1280
    );
  }
}
@media (min-width: 767.98px) {
  .mainhero__video-intro::before {
    font-size: calc(
      98px + 102 * (100vw / 1280)
    );
  }
}
.mainhero__video-intro::after {
  content: "age";
  position: absolute;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8705882353);
  font-weight: 700;
  font-family: Arial, sans-serif;
  bottom: 72px;
  right: 0;
  z-index: 2;
}
@media (max-width: 767.98px) {
  .mainhero__video-intro::after {
    font-size: calc(
      98px + 128.6 * (100vw - 320px) / 1280
    );
  }
}
@media (min-width: 767.98px) {
  .mainhero__video-intro::after {
    font-size: calc(
      98px + 102 * (100vw / 1280)
    );
  }
}
.mainhero__video-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 767.98px) {
  .mainhero__video-intro::before {
    top: 0px;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8705882353);
  }
  .mainhero__video-intro::after {
    bottom: 0px;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8705882353);
  }
}
@media (min-width: 1340.98px) {
  .mainhero__video {
    padding: 0 30px;
  }
  .mainhero__video::before {
    width: calc(100% - 60px);
    left: 30px;
  }
}
.mainhero {
  margin-top: 80px;
  margin-bottom: 50px;
}
.mainhero__video {
  max-width: 1340px;
  margin: 0 auto;
  min-height: 450px;
  height: 70.1vh;
  position: relative;
}
.mainhero__video::before {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
}
.mainhero__video::after {
  content: "Lotus";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-transform: uppercase;
  font-size: 74px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8705882353);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center no-repeat;
}
.mainhero__video-intro {
  position: relative;
  min-height: 450px;
  height: 70vh;
  overflow: hidden;
}
.mainhero__video-intro::before {
  content: "mass";
  position: absolute;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8705882353);
  font-weight: 700;
  font-family: Arial, sans-serif;
  height: 70vh;
  top: 72px;
  left: 0;
  z-index: 2;
}
@media (max-width: 767.98px) {
  .mainhero__video-intro::before {
    font-size: calc(
      98px + 128.6 * (100vw - 320px) / 1280
    );
  }
}
@media (min-width: 767.98px) {
  .mainhero__video-intro::before {
    font-size: calc(
      98px + 102 * (100vw / 1280)
    );
  }
}
.mainhero__video-intro::after {
  content: "age";
  position: absolute;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8705882353);
  font-weight: 700;
  font-family: Arial, sans-serif;
  bottom: 72px;
  right: 0;
  z-index: 2;
}
@media (max-width: 767.98px) {
  .mainhero__video-intro::after {
    font-size: calc(
      98px + 128.6 * (100vw - 320px) / 1280
    );
  }
}
@media (min-width: 767.98px) {
  .mainhero__video-intro::after {
    font-size: calc(
      98px + 102 * (100vw / 1280)
    );
  }
}
.mainhero__video-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 767.98px) {
  .mainhero__video-intro::before {
    top: 0px;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8705882353);
  }
  .mainhero__video-intro::after {
    bottom: 0px;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8705882353);
  }
}
@media (min-width: 1340.98px) {
  .mainhero__video {
    padding: 0 30px;
  }
  .mainhero__video::before {
    width: calc(100% - 60px);
    left: 30px;
  }
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/libs/normolize.scss","webpack://./src/libs/_nullstyles.scss","webpack://./src/styles/_wrapper.scss","webpack://./src/styles/_vars.scss","webpack://./src/styles/_menu.scss","webpack://./src/styles/_mainhero.scss","webpack://./src/libs/_adaptFontSize.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Roboto:ital,wght@0,400;0,500;1,400&display=swap\");\r\n@import \"libs/normolize\";\r\n@import \"libs/nullstyles\";\r\n@import \"styles/wrapper\";\r\n@import \"styles/menu\";\r\n@import \"styles/mainhero\";\r\n@import \"styles/mainhero\";\r\n@import \"styles/_swiper\";\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  scroll-behavior: smooth;\r\n  text-rendering: optimizeSpeed;\r\n}\r\n\r\nul[class],\r\nol[class] {\r\n  list-style: none;\r\n}\r\n\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\na,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\narticle > * + * {\r\n  margin-top: 1em;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n","@import \"vars\";\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  font-family: \"Roboto\", sans-serif;\r\n  transition: all 0.2s ease;\r\n  background-color: $background;\r\n}\r\n.header {\r\n  &__wrapper {\r\n  }\r\n  &__menu {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &__mainhero {\r\n    position: relative;\r\n    z-index: 0;\r\n  }\r\n}\r\n.main {\r\n}\r\n.footer {\r\n}\r\nh1 {\r\n  font-family: \"Playfair Display\", serif;\r\n  font-weight: 500;\r\n}\r\n[class*=\"__container\"] {\r\n  max-width: 1340px;\r\n  margin: 0 auto;\r\n  padding: 0 16px;\r\n}\r\n@media (min-width: 768px) {\r\n  [class*=\"__container\"] {\r\n    padding: 0 30px;\r\n  }\r\n}\r\n","$primary: #017d37;\r\n$secondary: #aec09a;\r\n$third: #778d45;\r\n$background: #f7f7f7;\r\n$white: #ffffff;\r\n$white87: #ffffffde;\r\n$black: #000000;\r\n$black87: #000000de;\r\n$grey87: #3c3c3c;\r\n$border: 4px solid rgba($secondary, 0.4);\r\n$bigshadow: -10px 3px 30px;\r\n","@import \"vars\";\r\n.menu {\r\n  &__wrapper {\r\n    height: 90px;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: $white;\r\n  }\r\n  &__container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}\r\n.brand {\r\n  &__body {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 101;\r\n    & svg {\r\n      width: 70px;\r\n      stroke: $primary;\r\n      height: 100%;\r\n      margin-right: 10px;\r\n      & path {\r\n        stroke-width: 5px;\r\n        stroke-dasharray: 1053;\r\n        stroke-dashoffset: 1053;\r\n        animation: draw 5s ease-in-out 1 forwards;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    left: calc(50vw - 16px);\r\n    transform: translate(-50%, 0);\r\n    & span {\r\n      &:nth-child(1) {\r\n        opacity: 0;\r\n        font-size: 20px;\r\n        color: $primary;\r\n        font-weight: 800;\r\n        font-family: \"Playfair Display\", serif;\r\n        animation: toOpacityOne 1s ease-in-out 1s 1 forwards;\r\n      }\r\n\r\n      &:nth-child(2) {\r\n        width: 117px;\r\n        text-align: center;\r\n        opacity: 0;\r\n        font-size: 12px;\r\n        color: $grey87;\r\n        font-weight: 700;\r\n        animation: toOpacityOne 1s ease-in-out 1.5s 1 forwards;\r\n      }\r\n    }\r\n  }\r\n}\r\n.nav {\r\n  display: flex;\r\n  align-items: center;\r\n  &__item {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: $white87;\r\n    &:first-child {\r\n      padding-top: 130px;\r\n    }\r\n  }\r\n  &__list {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba($black, 0.5);\r\n    overflow: auto;\r\n    z-index: 100;\r\n    transform: translateX(-100%);\r\n    transition: all 0.4s ease-out;\r\n  }\r\n\r\n  &__icon {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 4;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 101;\r\n\r\n    & svg {\r\n      fill: $primary;\r\n      & path {\r\n        &:nth-child(1) {\r\n          transition: all 0.4s ease-out;\r\n          transform-origin: right;\r\n        }\r\n        &:nth-child(2) {\r\n          transition: all 0.4s ease-out;\r\n        }\r\n        &:nth-child(3) {\r\n          transition: all 0.4s ease-out;\r\n          transform-origin: right;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.contacts {\r\n  &__item {\r\n    & svg {\r\n      width: 40px;\r\n      height: 40px;\r\n      stroke: $primary;\r\n      margin-left: 15px;\r\n    }\r\n  }\r\n  &__list {\r\n    display: flex;\r\n    position: absolute;\r\n    z-index: 101;\r\n    top: 90vh;\r\n    left: 0;\r\n    transform: translate(-100%, 0);\r\n    transition: all 0.4s ease-out;\r\n  }\r\n}\r\n.tiktok {\r\n  & svg {\r\n    stroke-width: 9.5988px;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n  }\r\n}\r\n.phone {\r\n  & svg {\r\n    fill: $primary;\r\n  }\r\n}\r\n.menu-opened {\r\n  & .contacts__list {\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n  & .nav__list {\r\n    left: auto;\r\n    right: 0;\r\n    transform: translate(0, 0);\r\n    z-index: 100;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    width: 100%;\r\n  }\r\n  & .nav__icon {\r\n    & svg {\r\n      fill: $primary;\r\n      & path {\r\n        &:nth-child(1) {\r\n          transform-origin: right;\r\n          transform: translateY(-40%) rotate(-45deg);\r\n        }\r\n        &:nth-child(2) {\r\n          opacity: 0;\r\n        }\r\n        &:nth-child(3) {\r\n          transform-origin: right;\r\n          transform: translateY(40%) rotate(45deg);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768.98px) {\r\n  .menu {\r\n    position: relative;\r\n    &__container {\r\n      position: relative;\r\n    }\r\n  }\r\n  .brand {\r\n    &__body {\r\n      position: relative;\r\n    }\r\n    &__text {\r\n      position: static;\r\n      transform: translate(0, 0);\r\n    }\r\n  }\r\n  .nav {\r\n    &__body {\r\n      position: absolute;\r\n      top: 90px;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 50%;\r\n      z-index: -1;\r\n      overflow: hidden;\r\n      display: flex;\r\n      align-items: center;\r\n      background: transparent;\r\n    }\r\n    &__list {\r\n      width: 100%;\r\n      height: auto;\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 40px;\r\n      position: static;\r\n      top: 0;\r\n      left: 0;\r\n      overflow: auto;\r\n      z-index: 100;\r\n      transform: translateY(-300%);\r\n      background: transparent;\r\n      transition: all 0.4s ease-out;\r\n    }\r\n    &__item {\r\n      color: $white;\r\n      text-shadow: 0 0 2px $black;\r\n      &:first-child {\r\n        padding-top: 0;\r\n      }\r\n    }\r\n  }\r\n  .contacts {\r\n    margin-right: 70px;\r\n    &__item {\r\n      & svg {\r\n        width: 30px;\r\n        height: 30px;\r\n      }\r\n    }\r\n    &__list {\r\n      position: static;\r\n      transform: translate(0, 0);\r\n    }\r\n  }\r\n  .menu-opened {\r\n    & .contacts__list {\r\n      transform: translate(0);\r\n    }\r\n    & .nav__body {\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes draw {\r\n  to {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n@keyframes toOpacityOne {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes toDown {\r\n  to {\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n","@import \"../libs/adaptFontSize\";\r\n.mainhero {\r\n  margin-top: 80px;\r\n  margin-bottom: 50px;\r\n  &__wrapper {\r\n  }\r\n  &__video {\r\n    max-width: 1340px;\r\n    margin: 0 auto;\r\n    min-height: 450px;\r\n    height: 70.1vh;\r\n    position: relative;\r\n    &::before {\r\n      content: \"\";\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      position: absolute;\r\n      font-size: 24px;\r\n      font-weight: 700;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      z-index: 2;\r\n      background: rgba($black, 0.4);\r\n    }\r\n    &::after {\r\n      content: \"Lotus\";\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      position: absolute;\r\n      text-transform: uppercase;\r\n      font-size: 74px;\r\n      font-weight: 700;\r\n      color: $white87;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      z-index: 2;\r\n      background: url(\"././img/Group80.svg\") center no-repeat;\r\n    }\r\n  }\r\n  &__video-intro {\r\n    position: relative;\r\n    min-height: 450px;\r\n    height: 70vh;\r\n    overflow: hidden;\r\n\r\n    &::before {\r\n      content: \"mass\";\r\n      position: absolute;\r\n      text-transform: uppercase;\r\n      -webkit-text-fill-color: transparent;\r\n      -webkit-text-stroke: 1px #ffffffde;\r\n      @include adaptiv-font(200, 98, 1280);\r\n      font-weight: 700;\r\n      font-family: Arial, sans-serif;\r\n      height: 70vh;\r\n      top: 72px;\r\n      left: 0;\r\n      z-index: 2;\r\n    }\r\n    &::after {\r\n      content: \"age\";\r\n      position: absolute;\r\n      text-transform: uppercase;\r\n      -webkit-text-fill-color: transparent;\r\n      -webkit-text-stroke: 1px #ffffffde;\r\n      @include adaptiv-font(200, 98, 1280);\r\n      font-weight: 700;\r\n      font-family: Arial, sans-serif;\r\n      bottom: 72px;\r\n      right: 0;\r\n      z-index: 2;\r\n    }\r\n  }\r\n  &__video-media {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n}\r\n@media (min-width: 767.98px) {\r\n  .mainhero {\r\n    &__video-intro {\r\n      &::before {\r\n        top: 0px;\r\n        -webkit-text-stroke: 2px #ffffffde;\r\n      }\r\n      &::after {\r\n        bottom: 0px;\r\n        -webkit-text-stroke: 2px #ffffffde;\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (min-width: 1340.98px) {\r\n  .mainhero {\r\n    &__video {\r\n      padding: 0 30px;\r\n      &::before {\r\n        width: calc(100% - 60px);\r\n        left: 30px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@mixin adaptiv-font($pcSize, $mobSize, $maxWidth) {\r\n  $additionSize: $pcSize - $mobSize;\r\n  $addMobSize: $pcSize - $additionSize * 0.7;\r\n  @media (max-width: 767.98px) {\r\n    font-size: calc(\r\n      #{$mobSize + px} + #{$addMobSize} * (100vw - 320px) / #{$maxWidth}\r\n    );\r\n  }\r\n  @media (min-width: 767.98px) {\r\n    font-size: calc(\r\n      #{$mobSize + px} + #{$additionSize} * (100vw / #{$maxWidth})\r\n    );\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/video1.mp4 */ "./src/img/video1.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"wrapper\">\r\n      <header class=\"header\">\r\n        <div class=\"header__wrapper\">\r\n          <div class=\"header__menu menu\">\r\n            <div class=\"menu__wrapper\">\r\n              <div class=\"menu__container\">\r\n                <div class=\"menu__brand brand\">\r\n                  <a class=\"brand__body\" href=\"/\">\r\n                    <svg\r\n                      width=\"238\"\r\n                      height=\"183\"\r\n                      viewBox=\"0 0 238 183\"\r\n                      fill=\"none\"\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                    >\r\n                      <path\r\n                        id=\"leftLogo\"\r\n                        d=\"M119 135C133.333 137.667 156 155 130.5 171C121 175.5 119.5 178.5 119.5 183M119 135C133.667 131.167 164.4 115.4 166 83M119 135C134.313 126.949 158.849 102.66 137.5 67.4857M119 135C123.883 133.333 134.327 131.495 142.386 133.501M120 35.5C120 38 119.1 44.3 133.5 61.5C134.979 63.5285 136.309 65.524 137.5 67.4857M166 83C166 68.2 163 60.8333 161.5 59C160.5 57 160.5 55.5 160.5 52.5C159 54.5 157.317 58.6729 151 62.3105M166 83C172.235 81.1662 177.352 78.8808 181.5 76.458M137.5 67.4857C143.208 66.0895 147.628 64.2525 151 62.3105M142.386 154C146 161.5 149.828 163.833 151 165C167.4 177.4 179.5 164 187.5 161C184.5 160.5 180.563 161.385 163.265 148M142.386 133.501C145.605 134.302 148.602 135.717 151 138C155.605 141.918 159.676 145.223 163.265 148M142.386 133.501C158.166 129.862 169.759 123.982 178.153 117M205 117C221.8 109.4 221 91.1667 218.5 83C216.777 86.4682 211.175 93.0964 201 96.8353M192.521 99C199.382 85.1443 199.003 70.6787 196.5 61.5C195.343 64.7403 190.923 70.9539 181.5 76.458M192.521 99C189.396 105.312 184.767 111.498 178.153 117M192.521 99C195.639 98.5208 198.462 97.768 201 96.8353M178.153 117C183.935 115.167 199.1 113.4 213.5 121C219.9 124.2 230.5 122.333 235 121C229.177 136.333 206.678 163.2 163.265 148M201 96.8353C205.667 90.3902 213.6 73.8 208 59C205.6 53.4 205 46.6667 205 44C202.5 48.5 197.5 57.5 182.579 55.5M181.5 76.458C183 68.472 184.431 49.6 178.153 38C175.076 32.4 172.769 25.6667 172 23C168.4 33.8 156.578 42 148.446 43M118.5 0.5C120 9.5 116.5 20.7917 133.5 30C155.061 41.6787 152 55.5 151 62.3105\"\r\n                        stroke-width=\"3\"\r\n                      />\r\n                      <path\r\n                        id=\"rightLogo\"\r\n                        d=\"M119.5 135C105.167 137.667 82.5 154 107.939 171C112.944 174.345 118.439 176.5 119.5 182.5M119.5 135C104.833 131.167 74.0394 115.4 72.4394 83M119.5 135C104.187 126.949 79.5903 102.66 100.939 67.4857M119.5 135C114.617 133.333 104.112 131.495 96.0537 133.501M120 37.5C120 40 119.339 44.3 104.939 61.5C103.46 63.5285 102.13 65.524 100.939 67.4857M72.4394 83C72.4394 68.2 76.2719 60.7865 76.9394 59C77.5 57.5 77.9394 55.5 77.9394 52.5C79.5 55 81.1229 58.6729 87.4394 62.3105M72.4394 83C66.2044 81.1662 61.0872 78.8808 56.9394 76.458M100.939 67.4857C95.2315 66.0895 90.8116 64.2525 87.4394 62.3105M96.0537 154C92.4394 161.5 88.6112 163.833 87.4394 165C71.0394 177.4 55.5 166.5 50.9394 161C54 161 57.8768 161.385 75.1741 148M96.0537 133.501C92.8348 134.302 89.837 135.717 87.4394 138C82.8341 141.918 78.7632 145.223 75.1741 148M96.0537 133.501C80.2733 129.862 68.6804 123.982 60.2863 117M33.4394 117C16.6394 109.4 17.4394 91.1667 19.9394 83C21.6623 86.4682 27.2648 93.0964 37.4394 96.8352M45.9184 99C39.0578 85.1443 39.4364 70.6788 41.9394 61.5C43.0967 64.7404 47.5164 70.9539 56.9394 76.458M45.9184 99C49.0439 105.312 53.672 111.498 60.2863 117M45.9184 99C42.8004 98.5208 39.9776 97.7679 37.4394 96.8352M60.2863 117C54.504 115.167 39.3394 113.4 24.9394 121C18.5394 124.2 7.93945 122.333 3.43945 121C9.26255 136.333 31.7618 163.2 75.1741 148M37.4394 96.8352C32.7728 90.3901 24.8394 73.8 30.4394 59C32.8394 53.4 33.4394 46.6667 33.4394 44C36 48 40.9394 57.5 55.8607 55.5M56.9394 76.458C55.4394 68.472 54.0088 49.6 60.2863 38C63.3638 32.4 65.6707 25.6666 66.4394 23C70.0394 33.8 83.4394 43 91.5709 44M118.5 1C120 13 113.371 23.1217 104.939 30C85.9395 45.5 86.4394 55.5 87.4394 62.3105\"\r\n                        stroke-width=\"3\"\r\n                      />\r\n                    </svg>\r\n                    <div class=\"brand__text\">\r\n                      <span>LOTUS</span>\r\n                      <span>\r\n                        Студія професійного\r\n                        <p>масажу</p>\r\n                      </span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n                <nav class=\"menu__body nav\">\r\n                  <div class=\"nav__body\">\r\n                    <ul class=\"nav__list\">\r\n                      <li class=\"nav__item\"><a>Про нас</a></li>\r\n                      <li class=\"nav__item\"><a>Послуги</a></li>\r\n                      <li class=\"nav__item\"><a>Навчання</a></li>\r\n                      <li class=\"nav__item\"><a>Подарунковий сертифікат</a></li>\r\n                      <li class=\"nav__item\"><a>Контакти</a></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"nav__contacts contacts\">\r\n                    <ul class=\"contacts__list\">\r\n                      <li class=\"contacts__item instagram\">\r\n                        <a>\r\n                          <svg\r\n                            width=\"105\"\r\n                            height=\"105\"\r\n                            viewBox=\"0 0 105 105\"\r\n                            fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <path\r\n                              d=\"M75.9438 5H28.6479C15.5875 5 5 15.5875 5 28.6479V75.9438C5 89.0042 15.5875 99.5918 28.6479 99.5918H75.9438C89.0042 99.5918 99.5918 89.0042 99.5918 75.9438V28.6479C99.5918 15.5875 89.0042 5 75.9438 5Z\"\r\n                              stroke-width=\"9.45918\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                            />\r\n                            <path\r\n                              d=\"M71.2142 49.3162C71.7979 53.2524 71.1256 57.2724 69.2929 60.8045C67.4602 64.3365 64.5604 67.2008 61.006 68.9898C57.4516 70.7788 53.4237 71.4015 49.495 70.7693C45.5663 70.1371 41.937 68.2823 39.1232 65.4685C36.3095 62.6548 34.4546 59.0255 33.8224 55.0968C33.1903 51.1681 33.813 47.1401 35.602 43.5857C37.391 40.0314 40.2552 37.1316 43.7873 35.2989C47.3193 33.4662 51.3394 32.7938 55.2755 33.3775C59.2906 33.9729 63.0077 35.8438 65.8778 38.7139C68.7479 41.5841 70.6189 45.3012 71.2142 49.3162Z\"\r\n                              stroke-width=\"9.45918\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                            />\r\n                            <path\r\n                              d=\"M78.3086 26.2831H78.3559\"\r\n                              stroke-width=\"9.45918\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                            />\r\n                          </svg>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"contacts__item tiktok\">\r\n                        <a\r\n                          ><svg\r\n                            width=\"95\"\r\n                            height=\"109\"\r\n                            viewBox=\"0 -5 105 119\"\r\n                            fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <path\r\n                              d=\"M49.6865 0.0918655C55.6238 0 61.527 0.0544388 67.4234 0C67.7806 6.94435 70.278 14.018 75.3612 18.9277C80.4343 23.9599 87.61 26.2633 94.5918 27.0425V45.3101C88.0489 45.0958 81.4754 43.7348 75.5382 40.9176C72.9523 39.7472 70.5434 38.2399 68.1855 36.6986C68.1549 49.9544 68.24 63.1933 68.1005 76.3947C67.7466 82.7368 65.6541 89.0483 61.9659 94.2745C56.0321 102.974 45.7329 108.646 35.1548 108.823C28.6663 109.194 22.1847 107.425 16.6558 104.165C7.49303 98.7623 1.04543 88.8714 0.106357 78.2558C-0.00252081 75.9864 -0.0399476 73.7204 0.0519179 71.5054C0.8685 62.8735 5.13855 54.6158 11.7665 48.9984C19.279 42.4555 29.8027 39.3389 39.6562 41.183C39.748 47.9028 39.4792 54.6158 39.4792 61.3356C34.9778 59.8793 29.7177 60.2876 25.7845 63.0198C22.9128 64.8809 20.7319 67.7321 19.5955 70.9576C18.6564 73.2577 18.9252 75.8129 18.9796 78.2558C20.0582 85.7003 27.2169 91.9574 34.8587 91.2803C39.925 91.2259 44.7802 88.2862 47.4205 83.9821C48.2745 82.4748 49.2306 80.9335 49.2816 79.1609C49.7274 71.0461 49.5504 62.9653 49.6049 54.8505C49.6423 36.5625 49.5504 18.3255 49.6899 0.095268L49.6865 0.0918655Z\"\r\n                            />\r\n                          </svg>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"contacts__item youtube\">\r\n                        <a>\r\n                          <svg\r\n                            width=\"104\"\r\n                            height=\"76\"\r\n                            viewBox=\"0 0 104 76\"\r\n                            fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <path\r\n                              d=\"M97.6116 15.4046C97.1009 13.3641 96.0607 11.4946 94.5962 9.98475C93.1317 8.47495 91.2947 7.37836 89.2707 6.80575C81.8758 5 52.2959 5 52.2959 5C52.2959 5 22.716 5 15.321 6.97773C13.2971 7.55034 11.4601 8.64693 9.99555 10.1567C8.53105 11.6665 7.4909 13.5361 6.98018 15.5765C5.62679 23.0814 4.96478 30.6946 5.00246 38.3204C4.95422 46.0036 5.61627 53.6748 6.98018 61.2362C7.54323 63.2132 8.60668 65.0117 10.0678 66.4577C11.5289 67.9038 13.3382 68.9485 15.321 69.491C22.716 71.4688 52.2959 71.4688 52.2959 71.4688C52.2959 71.4688 81.8758 71.4688 89.2707 69.491C91.2947 68.9184 93.1317 67.8218 94.5962 66.312C96.0607 64.8022 97.1009 62.9327 97.6116 60.8922C98.9545 53.4439 99.6165 45.8888 99.5893 38.3204C99.6376 30.6371 98.9755 22.9659 97.6116 15.4046Z\"\r\n                              stroke-width=\"8.5988\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                            />\r\n                            <path\r\n                              d=\"M42.6222 52.3794L67.3438 38.3204L42.6222 24.2613V52.3794Z\"\r\n                              stroke-width=\"8.5988\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                            />\r\n                          </svg>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"contacts__item phone\">\r\n                        <a href=\"\"\r\n                          ><svg\r\n                            width=\"95\"\r\n                            height=\"95\"\r\n                            viewBox=\"0 0 95 95\"\r\n                            fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <path\r\n                              d=\"M91.8872 9.82932L91.7309 9.73168L71.9776 0L50.6572 28.4272L60.4662 41.5067C60.1727 46.4393 58.0809 51.0932 54.5868 54.5872C51.0927 58.0812 46.4389 60.173 41.5063 60.4664L28.427 50.6574L0 71.9774L9.6507 91.5655L9.73191 91.7309L9.82977 91.887C10.3448 92.7168 11.0636 93.401 11.9178 93.8744C12.772 94.3479 13.7332 94.5948 14.7099 94.5917H19.8069C29.6278 94.5917 39.3525 92.6574 48.4259 88.8991C57.4992 85.1408 65.7434 79.6321 72.6879 72.6877C79.6323 65.7432 85.1409 57.499 88.8991 48.4257C92.6574 39.3523 94.5918 29.6276 94.5917 19.8067V14.7094C94.5949 13.7328 94.348 12.7716 93.8746 11.9174C93.4011 11.0632 92.717 10.3443 91.8872 9.82932ZM87.292 19.8067C87.292 57.0182 57.0182 87.292 19.8069 87.292H15.6826L9.22549 74.1837L28.4283 59.7816L39.1195 67.7997H40.336C47.6178 67.7915 54.5989 64.8953 59.7479 59.7463C64.8969 54.5973 67.7931 47.6162 67.8013 40.3344V39.1179L59.7832 28.427L74.1837 9.22526L87.292 15.6835V19.8067Z\"\r\n                            />\r\n                          </svg>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <span class=\"nav__icon\">\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      width=\"30\"\r\n                      height=\"30\"\r\n                      viewBox=\"0 0 23 12\"\r\n                      fill=\"none\"\r\n                    >\r\n                      <path\r\n                        d=\"M0.872937 1.725H22.1271C22.5825 1.725 23 1.35 23 0.8625C23 0.375 22.6205 0 22.1271 0H0.872937C0.417492 0 0 0.375 0 0.8625C0 1.35 0.417492 1.725 0.872937 1.725Z\"\r\n                      ></path>\r\n                      <path\r\n                        d=\"M22.5256 5H10.9744C10.7269 5 10.5 5.37609 10.5 5.865C10.5 6.35391 10.7063 6.73 10.9744 6.73H22.5256C22.7731 6.73 23 6.35391 23 5.865C23 5.37609 22.7731 5 22.5256 5Z\"\r\n                      ></path>\r\n                      <path\r\n                        d=\"M22.1271 10H0.872937C0.417492 10 0 10.375 0 10.8625C0 11.3125 0.379538 11.725 0.872937 11.725H22.1271C22.5825 11.725 23 11.35 23 10.8625C23 10.375 22.5825 10 22.1271 10Z\"\r\n                      ></path>\r\n                    </svg>\r\n                  </span>\r\n                </nav>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"header__mainhero mainhero\">\r\n            <div class=\"mainhero__wrapper\">\r\n              <div class=\"mainhero__video\">\r\n                <div class=\"mainhero__video-intro\">\r\n                  <video\r\n                    class=\"mainhero__video-media\"\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n                    autoplay\r\n                    muted\r\n                    loop\r\n                  ></video>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <main class=\"main\">\r\n        <div class=\"swiper\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide\">Slide 1</div>\r\n            <div class=\"swiper-slide\">Slide 2</div>\r\n            <div class=\"swiper-slide\">Slide 3</div>\r\n          </div>\r\n\r\n          <!-- If we need navigation buttons -->\r\n          <div class=\"swiper-button-prev\"></div>\r\n          <div class=\"swiper-button-next\"></div>\r\n\r\n          <!-- If we need scrollbar -->\r\n          <div class=\"swiper-scrollbar\"></div>\r\n        </div>\r\n      </main>\r\n      <footer class=\"footer\"></footer>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/Group80.svg":
/*!*****************************!*\
  !*** ./src/img/Group80.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8173487ff45382d5695.svg";

/***/ }),

/***/ "./src/img/video1.mp4":
/*!****************************!*\
  !*** ./src/img/video1.mp4 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad392fb32640e7d4e7e5.mp4";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");



const menuIcon = document.querySelector(".nav__icon");
menuIcon.onclick = _js_menu__WEBPACK_IMPORTED_MODULE_2__.menuHandler;
})();

/******/ })()
;
//# sourceMappingURL=index.16a69f2ce3826722c9dc.js.map