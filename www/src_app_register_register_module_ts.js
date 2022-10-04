"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 8728:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 7734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3071);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 2657);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 5014:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 7734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5498);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 5977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 315);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5855);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 8728);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 2657);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 2657:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 7734);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 5436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5498);




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\r\n  <ion-header>\r\n    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <title>Login Page</title>\r\n  </ion-header>\r\n\r\n  <ion-content class=\"ion-padding\">\r\n    <div>\r\n      <h1>PING</h1>\r\n      <img src=\"assets/Ping-Logo.png\" class=\"brand-logo\"/>\r\n      <p>Sign Up</p>\r\n      \r\n      <form>\r\n        <!--Email address-->\r\n        <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email Address\" required/>\r\n        <br>\r\n\r\n        <!--Password-->\r\n        <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required/>\r\n        <br>\r\n\r\n        <!--Phone Number-->\r\n        <input type=\"text\" name=\"phonenumber\" id=\"phonenumber\" placeholder=\"Phone Number\" required/>\r\n\r\n\r\n        <!--Sign Up with Facebook and Google-->\r\n        <p>Or Sign Up with</p>\r\n        <ul id=\"menu\">\r\n          <li><a href=\"#\" class=\"fa fa-facebook\"></a></li>\r\n          <li><a href=\"#\" class=\"fa fa-google\"></a></li>\r\n        </ul>\r\n\r\n        <!--Continue button-->\r\n        <button type=\"submit\" class=\"button\" value=\"submit\" [routerLink]=\"['/allow-location']\">CONTINUE</button>\r\n      </form>\r\n      \r\n        <p>Go back to <a [routerLink]=\"['/login']\">Login Page</a></p>\r\n    </div>\r\n  </ion-content>\r\n</ion-app>\r\n";

/***/ }),

/***/ 5436:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n  background-color: #ecf0f3;\n}\n\nh1, p {\n  text-align: center;\n}\n\nh1 {\n  color: #7AA7AD;\n}\n\ninput, button {\n  display: block;\n  width: 30%;\n  padding: 0;\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n}\n\ninput[type=text], input[type=password] {\n  padding: 10px;\n  padding-left: 20px;\n  width: 100%;\n  height: 50px;\n  font-size: 14px;\n  border-radius: 50px;\n  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n}\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  letter-spacing: 0.1em;\n  background-color: #7AA7AD;\n  color: #ffffff;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  width: 80%;\n  margin: auto;\n}\n\nbutton:hover {\n  box-shadow: none;\n}\n\ndiv {\n  background: #ecf0f3;\n  padding: 40px;\n  max-width: 414px;\n  max-height: 896px;\n  margin: 40px auto;\n  border-radius: 50px;\n  box-shadow: 0 4px 10px 4px #cbced1;\n}\n\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 35%;\n  text-align: center;\n  text-decoration: none;\n  margin: 40px auto;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  margin: 12px;\n  padding: 15px 0;\n}\n\n.fa:hover {\n  box-shadow: none;\n}\n\n.brand-logo {\n  height: 230px;\n  width: 230px;\n  display: block;\n  margin: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\n  background-position: center center;\n}\n\nul#menu li {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdFQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMztcclxufVxyXG5oMSwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiAjN0FBN0FEO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggNnB4ICNjYmNlZDEsIGluc2V0IC02cHggLTZweCA2cHggd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICAgcGFkZGluZzoxNXB4IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzouMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdBQTdBRDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59IFxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYzO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1heC13aWR0aDogNDE0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4OTZweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6MCA0cHggMTBweCA0cHggI2NiY2VkMTtcclxufVxyXG5cclxuLmZhLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgICBwYWRkaW5nOjE1cHggMDs7XHJcbn1cclxuXHJcbiAgXHJcbi5mYTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnJhbmQtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiA3cHggN3B4IDEwcHggI2NiY2VkMSwgLTdweCAtN3B4IDEwcHggd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG51bCNtZW51IGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map