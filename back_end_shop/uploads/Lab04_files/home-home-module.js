(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  \n    <!-- Toggler/collapsibe Button -->\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#collapsibleNavbar\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <!-- Navbar links -->\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            >Trang chủ</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/danh-sach-phim\"\n            routerLinkActive=\"active\"\n            >Sản phẩm</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/tin-tuc\" routerLinkActive=\"active\"\n            >Tin tức</a\n          >\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dang-ky\" routerLinkActive=\"active\"\n            >Đăng ký</a\n          >\n        </li> -->\n      </ul>\n    </div>\n  </nav>\n  \n  <router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tin-tuc/tin-tuc.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/tin-tuc/tin-tuc.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tin-tuc works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/trang-chu/trang-chu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/trang-chu/trang-chu.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>trang-chu works!</p>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _trang_chu_trang_chu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trang-chu/trang-chu.component */ "./src/app/home/trang-chu/trang-chu.component.ts");
/* harmony import */ var _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tin-tuc/tin-tuc.component */ "./src/app/home/tin-tuc/tin-tuc.component.ts");






const routes = [
    {
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: "",
                component: _trang_chu_trang_chu_component__WEBPACK_IMPORTED_MODULE_4__["TrangChuComponent"]
            },
            {
                path: "tin-tuc",
                component: _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__["TinTucComponent"]
            },
            {
                path: "danh-sach-phim",
                loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
            },
            {
                path: "danh-sach-phim/:id",
                loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
            },
            {
                path: "detail",
                loadChildren: "./detail/detail.module#DetailModule"
            },
            {
                path: "detail/:id",
                loadChildren: "./detail/detail.module#DetailModule"
            },
        ]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _trang_chu_trang_chu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trang-chu/trang-chu.component */ "./src/app/home/trang-chu/trang-chu.component.ts");
/* harmony import */ var _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tin-tuc/tin-tuc.component */ "./src/app/home/tin-tuc/tin-tuc.component.ts");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _trang_chu_trang_chu_component__WEBPACK_IMPORTED_MODULE_5__["TrangChuComponent"], _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__["TinTucComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/tin-tuc/tin-tuc.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/tin-tuc/tin-tuc.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGluLXR1Yy90aW4tdHVjLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/tin-tuc/tin-tuc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/tin-tuc/tin-tuc.component.ts ***!
  \***************************************************/
/*! exports provided: TinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinTucComponent", function() { return TinTucComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TinTucComponent = class TinTucComponent {
    constructor() { }
    ngOnInit() {
    }
};
TinTucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tin-tuc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tin-tuc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tin-tuc/tin-tuc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tin-tuc.component.scss */ "./src/app/home/tin-tuc/tin-tuc.component.scss")).default]
    })
], TinTucComponent);



/***/ }),

/***/ "./src/app/home/trang-chu/trang-chu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/trang-chu/trang-chu.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdHJhbmctY2h1L3RyYW5nLWNodS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/trang-chu/trang-chu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/trang-chu/trang-chu.component.ts ***!
  \*******************************************************/
/*! exports provided: TrangChuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangChuComponent", function() { return TrangChuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrangChuComponent = class TrangChuComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrangChuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trang-chu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trang-chu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/trang-chu/trang-chu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trang-chu.component.scss */ "./src/app/home/trang-chu/trang-chu.component.scss")).default]
    })
], TrangChuComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map