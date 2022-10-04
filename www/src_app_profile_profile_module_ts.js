"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 6611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 6611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n  background-color: #ecf0f3;\n}\n\nh1 {\n  font-weight: 900;\n  color: #5B8783;\n}\n\np {\n  text-align: center;\n}\n\ndiv {\n  background: #ecf0f3;\n  padding: 40px;\n  max-width: 414px;\n  max-height: 896px;\n  margin: 40px auto;\n  border-radius: 50px;\n  box-shadow: 0 4px 10px 4px #cbced1;\n  height: 844px;\n}\n\n.brand-logo {\n  height: 200px;\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\n  background-position: center center;\n}\n\ninput[type=text] {\n  padding: 10px;\n  padding-left: 20px;\n  width: 100%;\n  height: 50px;\n  font-size: 14px;\n  border-radius: 50px;\n  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n}\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  letter-spacing: 0.1em;\n  background-color: #7AA7AD;\n  color: #ffffff;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  width: 100%;\n  margin: auto;\n}\n\nbutton:hover {\n  box-shadow: none;\n}\n\ninput, button {\n  display: block;\n  width: 30%;\n  padding: 0;\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0VBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYzO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICM1Qjg3ODM7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYgeyAvL2lwaG9uZSAxMyBwcm8gc2NyZWVuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYzO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1heC13aWR0aDogNDE0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4OTZweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6MCA0cHggMTBweCA0cHggI2NiY2VkMTtcclxuICAgIGhlaWdodDogODQ0cHg7XHJcbn1cclxuXHJcbi5icmFuZC1sb2dvIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDdweCA3cHggMTBweCAjY2JjZWQxLCAtN3B4IC03cHggMTBweCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggNnB4ICNjYmNlZDEsIGluc2V0IC02cHggLTZweCA2cHggd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICAgcGFkZGluZzoxNXB4IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzouMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdBQTdBRDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSBcclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufSJdfQ== */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <h1>Create Profile</h1>\r\n    <br><br>\r\n    <img src=\"assets/Ping-Logo.png\" class=\"brand-logo\"/>\r\n    <br><br>\r\n    <form>\r\n      <!--First Name-->\r\n      <input type=\"text\" name=\"fname\" id=\"fname\" placeholder=\"First Name\" required/>\r\n      <br>\r\n\r\n      <!--Last Name-->\r\n      <input type=\"text\" name=\"lname\" id=\"lname\" placeholder=\"Last Name\" required/>\r\n      <br><br>\r\n\r\n      <!--Create Profile-->\r\n      <button type=\"submit\" class=\"button\" value=\"submit\" [routerLink]=\"['/main/tabs/tab1']\">CONTINUE</button>\r\n      <p><a href=\"skip\">Skip</a></p>\r\n    </form>\r\n  </div>  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map