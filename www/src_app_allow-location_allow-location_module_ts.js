"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_allow-location_allow-location_module_ts"],{

/***/ 8141:
/*!*****************************************************************!*\
  !*** ./src/app/allow-location/allow-location-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowLocationPageRoutingModule": () => (/* binding */ AllowLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _allow_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allow-location.page */ 1560);




const routes = [
    {
        path: '',
        component: _allow_location_page__WEBPACK_IMPORTED_MODULE_0__.AllowLocationPage
    }
];
let AllowLocationPageRoutingModule = class AllowLocationPageRoutingModule {
};
AllowLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllowLocationPageRoutingModule);



/***/ }),

/***/ 5439:
/*!*********************************************************!*\
  !*** ./src/app/allow-location/allow-location.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowLocationPageModule": () => (/* binding */ AllowLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _allow_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allow-location-routing.module */ 8141);
/* harmony import */ var _allow_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allow-location.page */ 1560);







let AllowLocationPageModule = class AllowLocationPageModule {
};
AllowLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allow_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllowLocationPageRoutingModule
        ],
        declarations: [_allow_location_page__WEBPACK_IMPORTED_MODULE_1__.AllowLocationPage]
    })
], AllowLocationPageModule);



/***/ }),

/***/ 1560:
/*!*******************************************************!*\
  !*** ./src/app/allow-location/allow-location.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowLocationPage": () => (/* binding */ AllowLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _allow_location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allow-location.page.html?ngResource */ 6888);
/* harmony import */ var _allow_location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allow-location.page.scss?ngResource */ 3234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AllowLocationPage = class AllowLocationPage {
    constructor() { }
    ngOnInit() {
    }
};
AllowLocationPage.ctorParameters = () => [];
AllowLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allow-location',
        template: _allow_location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_allow_location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllowLocationPage);



/***/ }),

/***/ 3234:
/*!********************************************************************!*\
  !*** ./src/app/allow-location/allow-location.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n  background-color: #ecf0f3;\n  text-align: center;\n}\n\nh1 {\n  margin-top: 100px;\n  color: #5B8783;\n  font-weight: 900;\n}\n\np {\n  color: #789697;\n  font-weight: 900;\n}\n\ndiv {\n  background: #ecf0f3;\n  padding: 40px;\n  max-width: 414px;\n  max-height: 896px;\n  margin: 40px auto;\n  border-radius: 50px;\n  box-shadow: 0 4px 10px 4px #cbced1;\n  height: 844px;\n}\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  letter-spacing: 0.1em;\n  background-color: #7AA7AD;\n  color: #ffffff;\n  border-radius: 40px;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  width: 100%;\n  margin: auto;\n}\n\nbutton:hover {\n  box-shadow: none;\n}\n\n.brand-logo {\n  height: 230px;\n  width: 230px;\n  display: block;\n  margin: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\n  background-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbG93LWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtFQUNBLGtDQUFBO0FBQ0oiLCJmaWxlIjoiYWxsb3ctbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBjb2xvcjogIzVCODc4MztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgY29sb3I6ICM3ODk2OTc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5kaXYgeyAvL2lwaG9uZSAxMyBwcm8gc2NyZWVuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYzO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1heC13aWR0aDogNDE0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4OTZweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6MCA0cHggMTBweCA0cHggI2NiY2VkMTtcclxuICAgIGhlaWdodDogODQ0cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICAgcGFkZGluZzoxNXB4IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzouMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdBQTdBRDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSBcclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnJhbmQtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiA3cHggN3B4IDEwcHggI2NiY2VkMSwgLTdweCAtN3B4IDEwcHggd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 6888:
/*!********************************************************************!*\
  !*** ./src/app/allow-location/allow-location.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div>\r\n    <h1>Allow Location</h1>\r\n    <p>In order to use the app's function, we need your permission to access your location</p>\r\n    <br>\r\n    \r\n    <img src=\"assets/allow-location.png\" class=\"brand-logo\"/>\r\n    <br><br>\r\n\r\n    <button type=\"submit\" class=\"button\" value=\"submit\" [routerLink]=\"['/profile']\">ALLOW</button>\r\n    <p><a href=\"skip\">Skip</a></p>\r\n</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_allow-location_allow-location_module_ts.js.map