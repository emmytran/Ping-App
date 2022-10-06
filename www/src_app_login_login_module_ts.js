"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n  background-color: #ecf0f3;\n}\n\nh1, p {\n  text-align: center;\n}\n\nh1 {\n  color: #7AA7AD;\n  font-weight: 900;\n}\n\ninput, button {\n  display: block;\n  width: 30%;\n  padding: 0;\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n}\n\ninput[type=text], input[type=password] {\n  padding: 10px;\n  padding-left: 20px;\n  width: 100%;\n  height: 50px;\n  font-size: 14px;\n  border-radius: 50px;\n  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n}\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  letter-spacing: 0.1em;\n  background-color: #7AA7AD;\n  color: #ffffff;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  width: 100%;\n  margin: auto;\n}\n\nbutton:hover {\n  box-shadow: none;\n}\n\ndiv {\n  background: #ecf0f3;\n  padding: 40px;\n  max-width: 414px;\n  max-height: 896px;\n  margin: 40px auto;\n  border-radius: 50px;\n  box-shadow: 0 4px 10px 4px #cbced1;\n  height: 844px;\n}\n\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 35%;\n  text-align: center;\n  text-decoration: none;\n  margin: 40px auto;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  margin: 12px;\n  padding: 15px 0;\n}\n\n.fa:hover {\n  box-shadow: none;\n}\n\n.brand-logo {\n  height: 230px;\n  width: 230px;\n  display: block;\n  margin: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\n  background-position: center center;\n}\n\nul#menu li {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0VBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtFQUNBLGtDQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMztcclxufVxyXG5cclxuaDEsIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzdBQTdBRDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbmlucHV0LCBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCA2cHggI2NiY2VkMSwgaW5zZXQgLTZweCAtNnB4IDZweCB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOjA7XHJcbiAgICBwYWRkaW5nOjE1cHggMDtcclxuICAgIGxldHRlci1zcGFjaW5nOi4xZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0FBN0FEO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCA2cHggI2NiY2VkMSwgLTZweCAtNnB4IDZweCB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59IFxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5kaXYgeyAvL2lwaG9uZSAxMyBwcm8gc2NyZWVuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYzO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1heC13aWR0aDogNDE0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4OTZweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6MCA0cHggMTBweCA0cHggI2NiY2VkMTtcclxuICAgIGhlaWdodDogODQ0cHg7XHJcbn1cclxuXHJcbi5mYS1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDZweCAjY2JjZWQxLCAtNnB4IC02cHggNnB4IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgcGFkZGluZzoxNXB4IDA7O1xyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbi5mYTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnJhbmQtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiA3cHggN3B4IDEwcHggI2NiY2VkMSwgLTdweCAtN3B4IDEwcHggd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG51bCNtZW51IGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\r\n  <ion-header>\r\n    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <title>Login Page</title>\r\n  </ion-header>\r\n\r\n  <ion-content class=\"ion-padding\">\r\n    <div>\r\n      <h1>PING</h1>\r\n      <br>\r\n      <img src=\"assets/Ping-Logo.png\" class=\"brand-logo\"/>\r\n      <br>\r\n      <p>Login</p>\r\n      \r\n      <form>\r\n        <!--Email address-->\r\n        <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email Address\" required/>\r\n        <br>\r\n\r\n        <!--Password-->\r\n        <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required/>\r\n        \r\n\r\n        <!--Login with Facebook and Google-->\r\n        <p>Or</p>\r\n        <ul id=\"menu\">\r\n          <li><a href=\"#\" class=\"fa fa-facebook\"></a></li>\r\n          <li><a href=\"#\" class=\"fa fa-google\"></a></li>\r\n        </ul>\r\n\r\n        <!--Continue button-->\r\n        <button type=\"submit\" class=\"button\" value=\"submit\" [routerLink]=\"['/allow-location']\">CONTINUE</button>\r\n      </form>\r\n      \r\n      <p>Don't have an account? <a [routerLink]=\"['/register']\">Sign Up</a></p>\r\n    </div>\r\n  </ion-content>\r\n</ion-app>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map