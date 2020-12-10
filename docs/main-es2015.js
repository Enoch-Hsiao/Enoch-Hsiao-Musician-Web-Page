(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_bio_bio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bio/bio.component */ "./src/app/components/bio/bio.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");








const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'bio', component: _components_bio_bio_component__WEBPACK_IMPORTED_MODULE_3__["BioComponent"] },
    { path: 'videos', component: _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_4__["VideosComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'enoch-hsiao-musician-web-page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_bio_bio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bio/bio.component */ "./src/app/components/bio/bio.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        _components_bio_bio_component__WEBPACK_IMPORTED_MODULE_8__["BioComponent"],
        _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_9__["VideosComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                    _components_bio_bio_component__WEBPACK_IMPORTED_MODULE_8__["BioComponent"],
                    _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_9__["VideosComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/bio/bio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/bio/bio.component.ts ***!
  \*************************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");



class BioComponent {
    constructor() { }
    ngOnInit() {
    }
}
BioComponent.ɵfac = function BioComponent_Factory(t) { return new (t || BioComponent)(); };
BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BioComponent, selectors: [["app-bio"]], decls: 15, vars: 0, consts: [[1, "bio-page"], [1, "bio-container"], [1, "text"]], template: function BioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enoch Hsiao, a current sophomore at the University of Massachusetts Amherst, is currently undergoing a BA music degree under Professor Gilles Vonsattel. As a previous student of Marina Lupinacci in Pittsburgh Pennsylvania, Enoch is known for his diverse, technical, and unique interpretations from baroque and classical to romanticism and impressionism. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Enoch has won multiple accolades and awards. Enoch won first place of Division 2 in the 2014 International Video Upload Social Music Works Piano Competition. In 2015, Enoch won the Pittsburgh Concert Society Young Artist competition in solo piano. In 2017, he was the winner of the PYSO Concerto Competition, playing Franz Liszt Piano Concerto No. 2 in Pittsburgh\u2019s Heinz Hall, as well as the winner of the Pittsburgh Philharmonic\u2019s Young Artist Concerto Competition. In 2018, he won the 2018 Butler County Symphony Young Artist Competition performing Rachmaninoff's Piano Concerto No. 2 and the Christine Bane Kefferstan International Classical Competition at WVU School of Music. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Enoch also performs regularly with chamber ensembles, winning first prize in the Great Composers Competition Best Ensemble (Trio) First Prize as a pianist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  overflow: hidden;\n}\n\n.bio-page[_ngcontent-%COMP%] {\n  background-image: url('bio.jpg');\n  overflow: hidden;\n  width: 100vw;\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.bio-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: black;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100vw;\n  min-height: 100vh;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  padding: 7.2px;\n  padding-top: 65px;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 20px \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n}\n\n@media only screen and (max-width: 420px) {\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    padding: 7.2px;\n    padding-top: 55px;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n\n  h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font: 15px \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iaW8vQzpcXFVzZXJzXFxFbm9jaCBIc2lhb1xcZW5vY2gtaHNpYW8tbXVzaWNpYW4td2ViLXBhZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJpb1xcYmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jpby9iaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkVBQUE7QUNDSjs7QURFQztFQUNHO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0NOOztFREVFO0lBQ0ksNkVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iaW8vYmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjcsIDI3LCAyNyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmlvLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3Bob3Rvcy9iaW8uanBnKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJpby1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApOyBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA3LjJweDtcclxuICAgIHBhZGRpbmctdG9wOiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG5oMyBzcGFuIHsgXHJcbiAgICBmb250OiAyMHB4IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjsgIFxyXG59XHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3LjJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDMgc3BhbiB7IFxyXG4gICAgICAgIGZvbnQ6IDE1cHggXCJEaWRvdCBMVCBTVERcIiwgXCJIb2VmbGVyIFRleHRcIiwgR2FyYW1vbmQsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmOyAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImJvZHksIGh0bWwge1xuICBiYWNrZ3JvdW5kOiAjMWIxYjFiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmlvLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vcGhvdG9zL2Jpby5qcGcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iaW8tY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA3LjJweDtcbiAgcGFkZGluZy10b3A6IDY1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5oMyBzcGFuIHtcbiAgZm9udDogMjBweCBcIkRpZG90IExUIFNURFwiLCBcIkhvZWZsZXIgVGV4dFwiLCBHYXJhbW9uZCwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA3LjJweDtcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuXG4gIGgzIHNwYW4ge1xuICAgIGZvbnQ6IDE1cHggXCJEaWRvdCBMVCBTVERcIiwgXCJIb2VmbGVyIFRleHRcIiwgR2FyYW1vbmQsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bio',
                templateUrl: './bio.component.html',
                styleUrls: ['./bio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");




class ContactComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.index = 0;
        this.backgroundPictures = [
            "https://i.imgur.com/mhXCNuv.png?1",
            "https://i.imgur.com/sTUl4wU.png?2",
            "https://i.imgur.com/DEEoOf2.png?1"
        ];
        this.currentBackground = this.backgroundPictures[this.index];
    }
    ngOnInit() {
        setInterval(() => {
            this.index = ++this.index % this.backgroundPictures.length;
            this.currentBackground = this.backgroundPictures[this.index];
            this.getBackgroundUrl();
        }, 5000);
    }
    getBackgroundUrl() {
        return 'url(' + this.currentBackground + ')';
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 13, vars: 0, consts: [[1, "contact-page"], [1, "contact-container"], ["id", "buttons"], ["target", "_blank", "href", "https://www.facebook.com/EnochHsiaoUmass", 1, "fa", "fa-facebook"], ["target", "_blank", "href", "https://www.linkedin.com/in/enoch-hsiao-77b326193/", 1, "fa", "fa-linkedin"], ["target", "_blank", "href", "https://www.youtube.com/channel/UCb7woo-Q1Rwi-Vr70EvA36w", 1, "fa", "fa-youtube"], ["target", "_blank", "href", "mailto:enochhsiao@hotmail.com", 1, "fa", "fa-envelope"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]], styles: [".contact-page[_ngcontent-%COMP%] {\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  background-image: url('Photo2.jpg');\n}\n\n.contact-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: black;\n  background: rgba(0, 0, 0, 0.5);\n  min-height: 100vh;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n#buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n}\n\n#buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style-type: none;\n}\n\n.fa[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 80px;\n  width: 125px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 10px;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.fa-facebook[_ngcontent-%COMP%] {\n  background: #3b5998;\n  color: white;\n}\n\n.fa-youtube[_ngcontent-%COMP%] {\n  background: red;\n  color: white;\n}\n\n.fa-linkedin[_ngcontent-%COMP%] {\n  background: #007bb5;\n  color: white;\n}\n\n.fa-envelope[_ngcontent-%COMP%] {\n  background: gray;\n  color: whitesmoke;\n}\n\n@media only screen and (max-width: 800px) {\n  .contact-page[_ngcontent-%COMP%] {\n    background-image: url(https://i.imgur.com/mhXCNuv.png?1);\n  }\n\n  ul[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    margin-top: 50px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .fa[_ngcontent-%COMP%] {\n    padding: 20px;\n    font-size: 60px;\n    width: 100px;\n    text-align: center;\n    text-decoration: none;\n    margin: 5px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcRW5vY2ggSHNpYW9cXGVub2NoLWhzaWFvLW11c2ljaWFuLXdlYi1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHdEQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUNFRjs7RURDQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3Bob3Rvcy9QaG90bzIuanBnKTtcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTsgXHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbiNidXR0b25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2J1dHRvbnMgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmZhIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDVweCAxMHB4O1xyXG59XHJcblxyXG4uZmE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmZhLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLXlvdXR1YmUge1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYS1saW5rZWRpbiB7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYS1lbnZlbG9wZSB7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb250YWN0LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vbWhYQ051di5wbmc/MSk7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmEge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGFjdC1wYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9waG90b3MvUGhvdG8yLmpwZyk7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxudWwge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2J1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2J1dHRvbnMgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZmEge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDgwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG59XG5cbi5mYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmZhLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEteW91dHViZSB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1lbnZlbG9wZSB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWN0LXBhZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL21oWENOdXYucG5nPzEpO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZmEge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/bio"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 2, consts: [[1, "home-page"], [1, "title"], [1, "button-div"], [1, "explore", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enoch Hsiao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pianist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.home-page[_ngcontent-%COMP%] {\n  background-image: url('home.jpg');\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: initial;\n  margin-left: 10px;\n}\n\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-family: \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.explore[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding: 0.5em 2em;\n  border: 0.16em solid white;\n  background-color: black;\n  margin: 0 0.3em 0.3em 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n  font-weight: 500;\n  font-size: 1em;\n  letter-spacing: 2px;\n  color: white;\n  text-align: center;\n  transition: all 0.15s;\n  left: 120px;\n  bottom: 175px;\n}\n\n.explore[_ngcontent-%COMP%]:hover {\n  color: #464646;\n  border-color: #8f8080;\n}\n\n.explore[_ngcontent-%COMP%]:active {\n  color: #918888;\n  background-color: #1f1d1d;\n  border-color: #8f8080;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn ease 3s;\n  -webkit-animation: fadeIn ease 3s;\n  -moz-animation: fadeIn ease 3s;\n  -o-animation: fadeIn ease 3s;\n  -ms-animation: fadeIn ease 3s;\n}\n\n@media only screen and (max-width: 420px) {\n  .explore[_ngcontent-%COMP%] {\n    padding: 0.4em 1em;\n    border: 0.16em solid white;\n    background-color: black;\n    margin: 0 0.3em 0.3em 0;\n    font-weight: 400;\n    font-size: 1em;\n    letter-spacing: 1px;\n    left: 90px;\n    bottom: 130px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    color: white;\n  }\n  .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3em;\n    font-family: \"Didot LT STD\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcRW5vY2ggSHNpYW9cXGVub2NoLWhzaWFvLW11c2ljaWFuLXdlYi1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0VBRUEsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREVJO0VBQ0ksY0FBQTtFQUNBLCtFQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0VBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNGSjs7QURNQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUVBLFVBQUE7SUFDQSxhQUFBO0VDSk47O0VETUU7SUFDSSxZQUFBO0VDSE47RURJTTtJQUNJLGNBQUE7SUFDQSwyQkFBQTtFQ0ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9waG90b3MvaG9tZS5qcGcpO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1kaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leHBsb3JlIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzowLjVlbSAyZW07XHJcbiAgICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRvdCBMVCBTVERcIiwgXCJIb2VmbGVyIFRleHRcIiwgR2FyYW1vbmQsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcblxyXG4gICAgbGVmdDogMTIwcHg7XHJcbiAgICBib3R0b206IDE3NXB4O1xyXG5cclxufVxyXG5cclxuLmV4cGxvcmU6aG92ZXIge1xyXG4gICAgY29sb3I6cmdiKDcwLCA3MCwgNzApO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYigxNDMsIDEyOCwgMTI4KTtcclxufVxyXG5cclxuLmV4cGxvcmU6YWN0aXZlIHtcclxuICAgIGNvbG9yOnJnYigxNDUsIDEzNiwgMTM2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMjksIDI5KTtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMTQzLCAxMjgsIDEyOCk7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDNzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5leHBsb3JlIHtcclxuICAgICAgICBwYWRkaW5nOjAuNGVtIDFlbTtcclxuICAgICAgICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICAgICAgbGVmdDogOTBweDtcclxuICAgICAgICBib3R0b206IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9waG90b3MvaG9tZS5qcGcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogaW5pdGlhbDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGl0bGUgaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhwbG9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlcjogMC4xNmVtIHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwIDAuM2VtIDAuM2VtIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIGxlZnQ6IDEyMHB4O1xuICBib3R0b206IDE3NXB4O1xufVxuXG4uZXhwbG9yZTpob3ZlciB7XG4gIGNvbG9yOiAjNDY0NjQ2O1xuICBib3JkZXItY29sb3I6ICM4ZjgwODA7XG59XG5cbi5leHBsb3JlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjOTE4ODg4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZDFkO1xuICBib3JkZXItY29sb3I6ICM4ZjgwODA7XG59XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAzcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlIDNzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiBlYXNlIDNzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5leHBsb3JlIHtcbiAgICBwYWRkaW5nOiAwLjRlbSAxZW07XG4gICAgYm9yZGVyOiAwLjE2ZW0gc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAuM2VtIDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxlZnQ6IDkwcHg7XG4gICAgYm90dG9tOiAxMzBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCI7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/contact"]; };
const _c1 = function () { return ["/videos"]; };
const _c2 = function () { return ["/bio"]; };
class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 11, vars: 6, consts: [[1, "nav-bar"], [3, "routerLink"], [1, "spacer"], [1, "name"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ENOCH HSIAO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  color: white;\n  overflow: hidden;\n  background-color: black;\n  position: fixed;\n  padding-top: 15px;\n  width: 100%;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  z-index: 99;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-family: \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n  float: left;\n  text-align: center;\n  padding: 14px 20px;\n  letter-spacing: 2px;\n  font-size: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  position: relative;\n  padding: 0.5em 2em;\n  border: 0.16em solid white;\n  background-color: black;\n  margin: 0.3em 0.3em 0.3em 0em;\n  box-sizing: border-box;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n  font-weight: 500;\n  font-size: 1em;\n  letter-spacing: 2px;\n  color: white;\n  text-align: center;\n  transition: all 0.15s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #464646;\n  border-color: #8f8080;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  color: #918888;\n  background-color: #1f1d1d;\n  border-color: #8f8080;\n  border: 0.16em solid white;\n}\n\n@media only screen and (max-width: 700px) {\n  .name[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 33.33%;\n    position: relative;\n    padding: 0.5em 0.5em;\n    border: 0.1em solid white;\n    background-color: black;\n    margin: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-family: \"Didot LT STD\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\n    font-weight: 200;\n    font-size: 0.75em;\n    letter-spacing: 2px;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0M6XFxVc2Vyc1xcRW5vY2ggSHNpYW9cXGVub2NoLWhzaWFvLW11c2ljaWFuLXdlYi1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLCtFQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDS0o7O0FERkE7RUFDSTtJQUNFLGFBQUE7RUNLSjs7RURIRTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EseUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSwrRUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZG90IExUIFNURFwiLCBcIkhvZWZsZXIgVGV4dFwiLCBHYXJhbW9uZCwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzowLjVlbSAyZW07XHJcbiAgICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbjogMC4zZW0gMC4zZW0gMC4zZW0gMGVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjpyZ2IoNzAsIDcwLCA3MCk7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDE0MywgMTI4LCAxMjgpO1xyXG59XHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgY29sb3I6cmdiKDE0NSwgMTM2LCAxMzYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYigxNDMsIDEyOCwgMTI4KTtcclxuICAgIGJvcmRlcjowLjE2ZW0gc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6MC41ZW0gMC41ZW07XHJcbiAgICAgICAgYm9yZGVyOjAuMWVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbn0iLCIubmF2LWJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDAuMTZlbSBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMC4zZW0gMC4zZW0gMC4zZW0gMGVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZG90IExUIFNURFwiLCBcIkhvZWZsZXIgVGV4dFwiLCBHYXJhbW9uZCwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgYm9yZGVyLWNvbG9yOiAjOGY4MDgwO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICM5MTg4ODg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIGJvcmRlci1jb2xvcjogIzhmODA4MDtcbiAgYm9yZGVyOiAwLjE2ZW0gc29saWQgd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiRGlkb3QgTFQgU1REXCIsIFwiSG9lZmxlciBUZXh0XCIsIEdhcmFtb25kLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/videos/videos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/videos/videos.component.ts ***!
  \*******************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");




class VideosComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.index = 0;
        this.links = [
            "https://www.youtube.com/embed/OquzfIyf9RU",
            "https://www.youtube.com/embed/gzmubSCAmAM",
            "https://www.youtube.com/embed/4LJnxjbLWYw",
            "https://www.youtube.com/embed/4Me_Voj14Q4"
        ];
        this.currentVid = this.links[this.index];
        this.reload = true;
    }
    ngOnInit() {
        if (this.reload) {
            this.reload = false;
            this.ngOnInit();
        }
    }
    left() {
        if (this.index == 0) {
            this.index = this.links.length - 1;
        }
        else {
            this.index--;
        }
        this.currentVid = this.links[this.index];
    }
    right() {
        this.index = ++this.index % this.links.length;
        this.currentVid = this.links[this.index];
    }
    getCurrentVid() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentVid);
    }
}
VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 10, vars: 1, consts: [[1, "background"], [1, "arrows"], [1, "slide-arrow", 3, "click"], [1, "arrow", "left"], [1, "arrow", "right"], [1, "video-slider"], [1, "iframe-container"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video", 3, "src"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideosComponent_Template_div_click_3_listener() { return ctx.left(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideosComponent_Template_div_click_5_listener() { return ctx.right(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getCurrentVid(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  height: 100%;\n  background-image: url('background.jpg');\n  background-position: center;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.video-slider[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.arrows[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: -25px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  border: solid whitesmoke;\n  border-width: 0 15px 15px 0;\n  display: inline-block;\n  padding: 25px;\n  margin-right: 50px;\n  margin-left: 50px;\n}\n\n.right[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.iframe-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 56.25%;\n  position: relative;\n  width: 50%;\n}\n\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  border-radius: 2%;\n  height: 50%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n@media only screen and (max-width: 700px), (max-aspect-ratio: 1/1) {\n  .iframe-container[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    overflow: hidden;\n    padding-top: 56.25%;\n    position: relative;\n    width: 100%;\n  }\n\n  .iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    border: 2px solid white;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb3MvQzpcXFVzZXJzXFxFbm9jaCBIc2lhb1xcZW5vY2gtaHNpYW8tbXVzaWNpYW4td2ViLXBhZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZGVvc1xcdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDR0E7O0FEQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDR0E7O0FEQUE7RUFFSSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFFQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ0FOOztFREdFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3Bob3Rvcy9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udmlkZW8tc2xpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93cyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYXJyb3cge1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDE1cHggMTVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuLnJpZ2h0IHtcclxudHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbnRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxufVxyXG5cclxuLmlmcmFtZS1jb250YWluZXIge1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBDYWxjdWxhdGVkIGZyb20gdGhlIGFzcGVjdCByYXRpb24gb2YgdGhlIGNvbnRlbnQgKGluIGNhc2Ugb2YgMTY6OSBpdCBpcyA5LzE2PSAwLjU2MjUpXHJcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgIFxyXG4uaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSwgKG1heC1hc3BlY3QtcmF0aW86IDEvMSkge1xyXG4gICAgLmlmcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBDYWxjdWxhdGVkIGZyb20gdGhlIGFzcGVjdCByYXRpb24gb2YgdGhlIGNvbnRlbnQgKGluIGNhc2Ugb2YgMTY6OSBpdCBpcyA5LzE2PSAwLjU2MjUpXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDU2LjI1JTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vcGhvdG9zL2JhY2tncm91bmQuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlkZW8tc2xpZGVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXJyb3dzIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXJyb3cge1xuICBib3JkZXI6IHNvbGlkIHdoaXRlc21va2U7XG4gIGJvcmRlci13aWR0aDogMCAxNXB4IDE1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ucmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uaWZyYW1lLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBoZWlnaHQ6IDUwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSwgKG1heC1hc3BlY3QtcmF0aW86IDEvMSkge1xuICAuaWZyYW1lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos',
                templateUrl: './videos.component.html',
                styleUrls: ['./videos.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Enoch Hsiao\enoch-hsiao-musician-web-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map