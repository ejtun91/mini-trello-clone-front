"use strict";
(self["webpackChunktrello"] = self["webpackChunktrello"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/services/auth.service */ 6518);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/socket.service */ 3460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AppComponent {
    constructor(authService, socketService) {
        this.authService = authService;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.authService.getCurrentUser().subscribe({
            next: (currentUser) => {
                this.socketService.setupSocketConnection(currentUser);
                this.authService.setCurrentUser(currentUser);
            },
            error: (err) => {
                console.log('error', err);
                this.authService.setCurrentUser(null);
            },
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _boards_boards_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boards/boards.module */ 4189);
/* harmony import */ var _board_board_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.module */ 567);
/* harmony import */ var _auth_services_authinterceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/services/authinterceptor.service */ 7032);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/socket.service */ 3460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _auth_services_authinterceptor_service__WEBPACK_IMPORTED_MODULE_6__.AuthInterceptor, multi: true },
        _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _boards_boards_module__WEBPACK_IMPORTED_MODULE_4__.BoardsModule,
        _board_board_module__WEBPACK_IMPORTED_MODULE_5__.BoardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _boards_boards_module__WEBPACK_IMPORTED_MODULE_4__.BoardsModule,
        _board_board_module__WEBPACK_IMPORTED_MODULE_5__.BoardModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 6518);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 5694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 9125);
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authguard.service */ 637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent,
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        canActivate: [],
    },
];
class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService, _services_authguard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] }); })();


/***/ }),

/***/ 9125:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/socket.service */ 3460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(fb, authService, router, socketService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.socketService = socketService;
        this.errorMessage = null;
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.authService.login(this.form.value).subscribe({
            next: (currentUser) => {
                this.authService.setToken(currentUser);
                this.socketService.setupSocketConnection(currentUser);
                this.authService.setCurrentUser(currentUser);
                this.errorMessage = null;
                this.router.navigateByUrl('/');
            },
            error: (error) => {
                console.log('err', error.error);
                this.errorMessage = error.error.emailOrPassword;
            },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["auth-login"]], decls: 15, vars: 2, consts: [[1, "login-page"], ["routerLink", "/"], ["src", "/assets/trello-logo.svg", 1, "trello-main-logo"], [1, "form-container"], [1, "login-header"], ["class", "errors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", "placeholder", "Email", 1, "login-input"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "login-input"], ["type", "submit", 1, "login-submit-button"], [1, "bottom-form-links"], ["routerLink", "/register", 1, "register-link"], [1, "errors"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login to Trello");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7)(9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sign up for an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 5694:
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/socket.service */ 3460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function RegisterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class RegisterComponent {
    constructor(fb, authService, router, socketService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.socketService = socketService;
        this.errorMessage = null;
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.authService.register(this.form.value).subscribe({
            next: (currentUser) => {
                this.authService.setToken(currentUser);
                this.socketService.setupSocketConnection(currentUser);
                this.authService.setCurrentUser(currentUser);
                this.errorMessage = null;
                this.router.navigateByUrl('/');
            },
            error: (error) => {
                console.log('err', error.error);
                this.errorMessage = error.error.join(', ');
            },
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["auth-register"]], decls: 16, vars: 2, consts: [[1, "login-page"], ["routerLink", "/"], ["src", "/assets/trello-logo.svg", 1, "trello-main-logo"], [1, "form-container"], [1, "login-header"], ["class", "errors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", "placeholder", "Email", 1, "login-input"], ["type", "text", "formControlName", "username", "name", "username", "id", "username", "placeholder", "Username", 1, "login-input"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "login-input"], ["type", "submit", 1, "login-submit-button"], [1, "bottom-form-links"], ["routerLink", "/login", 1, "register-link"], [1, "errors"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Register to Trello");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7)(9, "input", 8)(10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 6518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/socket.service */ 3460);





class AuthService {
    constructor(http, socketService) {
        this.http = http;
        this.socketService = socketService;
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        this.isLogged$ = this.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((currentUser) => currentUser !== undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(Boolean));
    }
    getCurrentUser() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/user`;
        return this.http.get(url);
    }
    register(registerRequest) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
        return this.http.post(url, registerRequest);
    }
    login(loginRequest) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/login`;
        return this.http.post(url, loginRequest);
    }
    setToken(currentUser) {
        localStorage.setItem('token', currentUser.token);
    }
    setCurrentUser(currentUser) {
        this.currentUser$.next(currentUser);
    }
    logout() {
        localStorage.removeItem('token');
        this.currentUser$.next(null);
        this.socketService.disconnect();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 637:
/*!****************************************************!*\
  !*** ./src/app/auth/services/authguard.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.authService.isLogged$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((isLoggedIn) => {
            if (isLoggedIn) {
                return true;
            }
            this.router.navigateByUrl('/');
            return false;
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });


/***/ }),

/***/ 7032:
/*!**********************************************************!*\
  !*** ./src/app/auth/services/authinterceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        req = req.clone({
            setHeaders: {
                Authorization: token ?? '',
            },
        });
        return next.handle(req);
    }
}


/***/ }),

/***/ 567:
/*!***************************************!*\
  !*** ./src/app/board/board.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardModule": () => (/* binding */ BoardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/services/authguard.service */ 637);
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/board.service */ 1665);
/* harmony import */ var _shared_services_columns_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/columns.service */ 2855);
/* harmony import */ var _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/topbar/topbar.module */ 1708);
/* harmony import */ var _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modules/inlineForm/inlineForm.module */ 2488);
/* harmony import */ var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/tasks.service */ 4973);
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/board/board.component */ 3224);
/* harmony import */ var _components_taskModal_taskModal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/taskModal/taskModal.component */ 7592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    {
        path: 'boards/:boardId',
        component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_6__.BoardComponent,
        canActivate: [_auth_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
        children: [
            {
                path: 'tasks/:taskId',
                component: _components_taskModal_taskModal_component__WEBPACK_IMPORTED_MODULE_7__.TaskModalComponent,
            },
        ],
    },
];
class BoardModule {
}
BoardModule.ɵfac = function BoardModule_Factory(t) { return new (t || BoardModule)(); };
BoardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: BoardModule });
BoardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_services_board_service__WEBPACK_IMPORTED_MODULE_1__.BoardService, _shared_services_columns_service__WEBPACK_IMPORTED_MODULE_2__.ColumnsService, _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__.TasksService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
        _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_3__.TopbarModule,
        _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_4__.InlineFormModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BoardModule, { declarations: [_components_board_board_component__WEBPACK_IMPORTED_MODULE_6__.BoardComponent, _components_taskModal_taskModal_component__WEBPACK_IMPORTED_MODULE_7__.TaskModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_3__.TopbarModule,
        _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_4__.InlineFormModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 3224:
/*!***********************************************************!*\
  !*** ./src/app/board/components/board/board.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardComponent": () => (/* binding */ BoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_boards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/boards.service */ 5693);
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/board.service */ 1665);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/socket.service */ 3460);
/* harmony import */ var _shared_services_columns_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/columns.service */ 2855);
/* harmony import */ var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/tasks.service */ 4973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_modules_topbar_components_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/topbar/components/topbar.component */ 9352);
/* harmony import */ var _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/inlineForm/components/inlineForm.component */ 490);














function BoardComponent_div_1_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BoardComponent_div_1_div_6_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const task_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.openTask(task_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", task_r5.title, " ");
  }
}

function BoardComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "inline-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("handleSubmit", function BoardComponent_div_1_div_6_Template_inline_form_handleSubmit_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.updateColumnName($event, column_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BoardComponent_div_1_div_6_Template_img_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.deleteColumn(column_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BoardComponent_div_1_div_6_div_4_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "inline-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("handleSubmit", function BoardComponent_div_1_div_6_Template_inline_form_handleSubmit_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.createTask($event, column_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("defaultText", column_r3.title)("title", column_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.getTasksByColumn(column_r3.id, data_r1.tasks));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasButton", true);
  }
}

function BoardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "inline-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("handleSubmit", function BoardComponent_div_1_Template_inline_form_handleSubmit_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.updateBoard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BoardComponent_div_1_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.deleteBoard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Delete Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BoardComponent_div_1_div_6_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "inline-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("handleSubmit", function BoardComponent_div_1_Template_inline_form_handleSubmit_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.createColumn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("defaultText", data_r1.board.title)("title", data_r1.board.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasButton", true);
  }
}

class BoardComponent {
  constructor(boardsService, route, boardService, socketService, router, columnsService, tasksService) {
    this.boardsService = boardsService;
    this.route = route;
    this.boardService = boardService;
    this.socketService = socketService;
    this.router = router;
    this.columnsService = columnsService;
    this.tasksService = tasksService;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    const boardId = this.route.snapshot.paramMap.get('boardId');

    if (!boardId) {
      throw new Error('Cant get boardId from url');
    }

    this.boardId = boardId;
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.boardService.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean)), this.boardService.columns$, this.boardService.tasks$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([board, columns, tasks]) => ({
      board,
      columns,
      tasks
    })));
  }

  createColumn(title) {
    const columnInput = {
      title,
      boardId: this.boardId
    };
    this.columnsService.createColumn(columnInput);
  }

  createTask(title, columnId) {
    const taskInput = {
      title,
      boardId: this.boardId,
      columnId
    };
    this.tasksService.createTask(taskInput);
  }

  ngOnInit() {
    this.socketService.emit(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.boardsJoin, {
      boardId: this.boardId
    });
    this.fetchData();
    this.initializeListeners();
  }

  initializeListeners() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationStart && !event.url.includes('/boards/')) {
        this.boardService.leaveBoard(this.boardId);
      }
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.columnsCreateSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(column => {
      this.boardService.addColumn(column);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.tasksCreateSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(task => {
      this.boardService.addTask(task);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.boardsUpdateSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(updatedBoard => {
      this.boardService.updateBoard(updatedBoard);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.boardsDeleteSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(() => {
      this.router.navigateByUrl('/boards');
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.columnsDeleteSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(columnId => {
      this.boardService.deleteColumn(columnId);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.columnsUpdateSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(updatedColumn => {
      this.boardService.updateColumn(updatedColumn);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.tasksUpdateSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(updatedTask => {
      this.boardService.updateTask(updatedTask);
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.tasksDeleteSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$)).subscribe(taskId => {
      this.boardService.deleteTask(taskId);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchData() {
    this.boardsService.getBoard(this.boardId).subscribe(board => {
      this.boardService.setBoard(board);
    });
    this.columnsService.getColumns(this.boardId).subscribe(columns => {
      this.boardService.setColumns(columns);
    });
    this.tasksService.getTasks(this.boardId).subscribe(tasks => {
      this.boardService.setTasks(tasks);
    });
  }

  getTasksByColumn(columnId, tasks) {
    return tasks.filter(task => task.columnId === columnId);
  }

  updateBoard(boardName) {
    this.boardsService.updateBoard(this.boardId, {
      title: boardName
    });
  }

  deleteBoard() {
    if (confirm('Are you sure you want to delete the board')) {
      this.boardsService.deleteBoard(this.boardId);
    }
  }

  deleteColumn(columnId) {
    this.columnsService.deleteColumn(this.boardId, columnId);
  }

  updateColumnName(columnName, columnId) {
    this.columnsService.updateColumn(this.boardId, columnId, {
      title: columnName
    });
  }

  openTask(taskId) {
    this.router.navigate(['boards', this.boardId, 'tasks', taskId]);
  }

}

BoardComponent.ɵfac = function BoardComponent_Factory(t) {
  return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_boards_service__WEBPACK_IMPORTED_MODULE_1__.BoardsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_board_service__WEBPACK_IMPORTED_MODULE_2__.BoardService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_columns_service__WEBPACK_IMPORTED_MODULE_4__.ColumnsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__.TasksService));
};

BoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BoardComponent,
  selectors: [["board"]],
  decls: 4,
  vars: 3,
  consts: [["class", "board", 4, "ngIf"], [1, "board"], [1, "board-header-container"], [1, "edit-board-form", 3, "defaultText", "title", "handleSubmit"], [1, "delete-board", 3, "click"], [1, "columns"], ["class", "column", 4, "ngFor", "ngForOf"], ["defaultText", "Add a list", "buttonText", "Add list", "inputPlaceholder", "Add column name", 1, "create-column-form", 3, "hasButton", "handleSubmit"], [1, "column"], [1, "column-title"], [1, "edit-column-form", 3, "defaultText", "title", "handleSubmit"], ["src", "/assets/close_icon.svg", 1, "column-delete-icon", 3, "click"], ["class", "task", 3, "click", 4, "ngFor", "ngForOf"], ["defaultText", "Add a card", "buttonText", "Add card", "inputPlaceholder", "Enter a title for this card", 1, "create-task-form", 3, "hasButton", "handleSubmit"], [1, "task", 3, "click"]],
  template: function BoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BoardComponent_div_1_Template, 8, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "router-outlet");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _shared_modules_topbar_components_topbar_component__WEBPACK_IMPORTED_MODULE_6__.TopbarComponent, _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_7__.InlineFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7592:
/*!*******************************************************************!*\
  !*** ./src/app/board/components/taskModal/taskModal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModalComponent": () => (/* binding */ TaskModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/board.service */ 1665);
/* harmony import */ var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/tasks.service */ 4973);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/socket.service */ 3460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/modules/inlineForm/components/inlineForm.component */ 490);











function TaskModalComponent_div_0_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", column_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", column_r3.title, " ");
  }
}

function TaskModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "inline-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleSubmit", function TaskModalComponent_div_0_Template_inline_form_handleSubmit_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.updateTaskName($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskModalComponent_div_0_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.goToBoard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6)(5, "div")(6, "form", 7)(7, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TaskModalComponent_div_0_option_8_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10)(10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "inline-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleSubmit", function TaskModalComponent_div_0_Template_inline_form_handleSubmit_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.updateTaskDescription($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13)(14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskModalComponent_div_0_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.deleteTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("defaultText", data_r1.task.title)("title", data_r1.task.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.columnForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", data_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("defaultText", data_r1.task.description || "Add a more detailed description")("title", data_r1.task.description || "")("hasButton", true);
  }
}

class TaskModalComponent {
  constructor(route, router, boardService, tasksService, socketService, fb) {
    this.route = route;
    this.router = router;
    this.boardService = boardService;
    this.tasksService = tasksService;
    this.socketService = socketService;
    this.fb = fb;
    this.classes = 'task-modal';
    this.columnForm = this.fb.group({
      columnId: [null]
    });
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    const taskId = this.route.snapshot.paramMap.get('taskId');
    const boardId = this.route.parent?.snapshot.paramMap.get('boardId');

    if (!boardId) {
      throw new Error("Can't get boardID from URL");
    }

    if (!taskId) {
      throw new Error("Can't get taskID from URL");
    }

    this.taskId = taskId;
    this.boardId = boardId;
    this.task$ = this.boardService.tasks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(tasks => {
      return tasks.find(task => task.id === this.taskId);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(Boolean));
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.task$, this.boardService.columns$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([task, columns]) => ({
      task,
      columns
    })));
    this.task$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(task => {
      this.columnForm.patchValue({
        columnId: task.columnId
      });
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.task$, this.columnForm.get('columnId').valueChanges]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(([task, columnId]) => {
      if (task.columnId !== columnId) {
        this.tasksService.updateTask(this.boardId, task.id, {
          columnId
        });
      }
    });
    this.socketService.listen(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.tasksDeleteSuccess).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(() => {
      this.goToBoard();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  goToBoard() {
    this.router.navigate(['boards', this.boardId]);
  }

  updateTaskName(taskName) {
    this.tasksService.updateTask(this.boardId, this.taskId, {
      title: taskName
    });
  }

  updateTaskDescription(taskDescription) {
    this.tasksService.updateTask(this.boardId, this.taskId, {
      description: taskDescription
    });
  }

  deleteTask() {
    this.tasksService.deleteTask(this.boardId, this.taskId);
  }

}

TaskModalComponent.ɵfac = function TaskModalComponent_Factory(t) {
  return new (t || TaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_board_service__WEBPACK_IMPORTED_MODULE_1__.BoardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder));
};

TaskModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TaskModalComponent,
  selectors: [["task-modal"]],
  hostVars: 2,
  hostBindings: function TaskModalComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.classes);
    }
  },
  decls: 3,
  vars: 3,
  consts: [["class", "task-modal-container", 4, "ngIf"], [1, "task-modal-backdrop"], [1, "task-modal-container"], [1, "task-modal-header"], [1, "task-modal-edit-title-form", 3, "defaultText", "title", "handleSubmit"], ["src", "/assets/close_icon.svg", 1, "task-modal-close", 3, "click"], [1, "task-modal-body"], [1, "column-select-container", 3, "formGroup"], ["formControlName", "columnId", "name", "", "id", "", 1, "column-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "task-modal-description"], [1, "task-modal-description-label"], ["inputType", "textarea", "buttonText", "Save", 1, "task-modal-edit-description-form", 3, "defaultText", "title", "hasButton", "handleSubmit"], [1, "task-modal-actions"], [1, "task-modal-actions-label"], [1, "task-modal-actions-action", 3, "click"], ["src", "/assets/trash.svg", 1, "task-modal-actions-icon"], [3, "ngValue"]],
  template: function TaskModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TaskModalComponent_div_0_Template, 20, 7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_4__.InlineFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 1665:
/*!*************************************************!*\
  !*** ./src/app/board/services/board.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardService": () => (/* binding */ BoardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/socket.service */ 3460);




class BoardService {
    constructor(socketService) {
        this.socketService = socketService;
        this.board$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.columns$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    setBoard(board) {
        this.board$.next(board);
    }
    setColumns(columns) {
        this.columns$.next(columns);
    }
    setTasks(tasks) {
        this.tasks$.next(tasks);
    }
    leaveBoard(boardId) {
        this.board$.next(null);
        this.socketService.emit(_shared_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_0__.SocketEventsEnum.boardsLeave, { boardId });
    }
    addColumn(column) {
        const updatedColumns = [...this.columns$.getValue(), column];
        this.columns$.next(updatedColumns);
    }
    addTask(task) {
        const updatedTasks = [...this.tasks$.getValue(), task];
        this.tasks$.next(updatedTasks);
    }
    updateBoard(updatedBoard) {
        const board = this.board$.getValue();
        if (!board) {
            throw new Error('Board is not initialized');
        }
        this.board$.next({ ...board, title: updatedBoard.title });
    }
    updateColumn(updatedColumn) {
        const updatedColumns = this.columns$.getValue().map((column) => {
            if (column.id === updatedColumn.id) {
                return { ...column, title: updatedColumn.title };
            }
            return column;
        });
        this.columns$.next(updatedColumns);
    }
    updateTask(updatedTask) {
        const updatedTasks = this.tasks$.getValue().map((task) => {
            if (task.id === updatedTask.id) {
                return {
                    ...task,
                    title: updatedTask.title,
                    description: updatedTask.description,
                    columnId: updatedTask.columnId,
                };
            }
            return task;
        });
        this.tasks$.next(updatedTasks);
    }
    deleteColumn(columnId) {
        const updatedColumns = this.columns$
            .getValue()
            .filter((column) => column.id !== columnId);
        this.columns$.next(updatedColumns);
    }
    deleteTask(taskId) {
        const updatedTasks = this.tasks$
            .getValue()
            .filter((task) => task.id !== taskId);
        this.tasks$.next(updatedTasks);
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
BoardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac });


/***/ }),

/***/ 4189:
/*!*****************************************!*\
  !*** ./src/app/boards/boards.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardsModule": () => (/* binding */ BoardsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/boards/boards.component */ 7514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/services/authguard.service */ 637);
/* harmony import */ var _shared_services_boards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/boards.service */ 5693);
/* harmony import */ var _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/inlineForm/inlineForm.module */ 2488);
/* harmony import */ var _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modules/topbar/topbar.module */ 1708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: 'boards',
        component: _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_0__.BoardsComponent,
        canActivate: [_auth_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService],
    },
];
class BoardsModule {
}
BoardsModule.ɵfac = function BoardsModule_Factory(t) { return new (t || BoardsModule)(); };
BoardsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BoardsModule });
BoardsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_shared_services_boards_service__WEBPACK_IMPORTED_MODULE_2__.BoardsService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_3__.InlineFormModule,
        _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__.TopbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BoardsModule, { declarations: [_components_boards_boards_component__WEBPACK_IMPORTED_MODULE_0__.BoardsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _shared_modules_inlineForm_inlineForm_module__WEBPACK_IMPORTED_MODULE_3__.InlineFormModule,
        _shared_modules_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__.TopbarModule] }); })();


/***/ }),

/***/ 7514:
/*!**************************************************************!*\
  !*** ./src/app/boards/components/boards/boards.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardsComponent": () => (/* binding */ BoardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_boards_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/boards.service */ 5693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/modules/inlineForm/components/inlineForm.component */ 490);
/* harmony import */ var _shared_modules_topbar_components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/topbar/components/topbar.component */ 9352);






const _c0 = function (a1) { return ["/boards", a1]; };
function BoardsComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const board_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, board_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](board_r1.title);
} }
const _c1 = function () { return { exact: true }; };
class BoardsComponent {
    constructor(boardsService) {
        this.boardsService = boardsService;
        this.boards = [];
    }
    ngOnInit() {
        this.boardsService
            .getBoards()
            .subscribe((boards) => (this.boards = boards));
    }
    createBoard(title) {
        this.boardsService.createBoard(title).subscribe((createdBoad) => {
            this.boards = [...this.boards, createdBoad];
        });
    }
}
BoardsComponent.ɵfac = function BoardsComponent_Factory(t) { return new (t || BoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_boards_service__WEBPACK_IMPORTED_MODULE_0__.BoardsService)); };
BoardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoardsComponent, selectors: [["boards"]], decls: 15, vars: 3, consts: [[1, "boards-page-container"], [1, "home-left-sidebar-container"], ["routerLink", "/boards", "routerLinkActive", "boards-side-menu-option-selected", 1, "boards-side-menu-option"], ["routerLink", "/", "routerLinkActive", "boards-side-menu-option-selected", 1, "boards-side-menu-option", 3, "routerLinkActiveOptions"], [1, "boards-section-container"], [1, "my-boards"], [1, "my-boards-section-header"], [1, "boards-page-header-name"], [1, "board-tile-list"], ["defaultText", "Create new board", 1, "create-board-form", 3, "handleSubmit"], ["class", "board-tile", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "board-tile", 3, "routerLink"], [1, "board-tile-details-name"]], template: function BoardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "My boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "inline-form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("handleSubmit", function BoardsComponent_Template_inline_form_handleSubmit_13_listener($event) { return ctx.createBoard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BoardsComponent_a_14_Template, 3, 4, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.boards);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _shared_modules_inlineForm_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_1__.InlineFormComponent, _shared_modules_topbar_components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent], encapsulation: 2 });


/***/ }),

/***/ 2093:
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations_slide_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/animations/slide.animation */ 5774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = ["scrollDivContainer"];
function HomeComponent_ng_template_49_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 245);
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_ng_template_49_img_0_Template, 1, 1, "img", 244);
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentSlideIndex(i_r4));
} }
function HomeComponent_ng_template_289_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 247)(1, "div", 248)(2, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 250)(5, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Read the story");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 254)(12, "h3", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Trello TechValidate Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r7.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r7.authorInfo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r7.info, " ");
} }
function HomeComponent_ng_template_289_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_ng_template_289_div_0_Template, 16, 4, "div", 246);
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isCurrentSlideTestimonialIndex(i_r8));
} }
const _c1 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
        this.currentIndex = 0;
        this.currentTestimonialIndex = 0;
        this.width = window.innerWidth;
        this.mobileWidth = 768;
        this.isMobile = false;
        this.slides = [
            { image: 'assets/Carousel_Image_Boards_2x.png', description: 'Image 00' },
            { image: 'assets/Carousel_Image_Lists_2x.png', description: 'Image 01' },
            { image: 'assets/Carousel_Image_Cards_2x.png', description: 'Image 02' },
        ];
        this.slidesTestimonial = [
            {
                description: '[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird"s-eye view.',
                info: '75% of organizations report that Trello delivers value to their business within 30 days.',
                author: 'Joey Rosenberg',
                authorInfo: 'Global Leadership Director at Women Who Code',
            },
            {
                description: 'Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.',
                info: '81% of customers chose Trello for its ease of use.',
                author: 'Sumeet Moghe',
                authorInfo: 'Product Manager at ThoughtWorks',
            },
            {
                description: 'We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.',
                info: '74% of customers say Trello has improved communication with their co-workers and teams.',
                author: 'Jefferson Scomacao',
                authorInfo: 'Development Manager at IKEA/PTC',
            },
        ];
    }
    ngOnDestroy() {
        this.isLoggedInSubscription?.unsubscribe();
    }
    ngOnInit() {
        this.authService.isLogged$.subscribe((isLoggedIn) => {
            if (isLoggedIn)
                this.router.navigateByUrl('/boards');
        });
        this.preloadImages();
        this.isMobile = this.width < this.mobileWidth;
    }
    preloadImages() {
        this.slides.forEach((slide) => {
            new Image().src = slide.image;
        });
        console.log('slides: ', this.slides);
    }
    setCurrentSlideIndex(index) {
        this.currentIndex = index;
    }
    isCurrentSlideIndex(index) {
        return this.currentIndex === index;
    }
    isCurrentSlideTestimonialIndex(index) {
        return this.currentTestimonialIndex === index;
    }
    setCurrentTestimonialSlideIndex(index) {
        this.currentTestimonialIndex = index;
    }
    nextSlide() {
        this.currentTestimonialIndex =
            this.currentTestimonialIndex < this.slidesTestimonial.length - 1
                ? ++this.currentTestimonialIndex
                : 0;
    }
    prevSlide() {
        this.currentTestimonialIndex =
            this.currentTestimonialIndex > 0
                ? --this.currentTestimonialIndex
                : this.slidesTestimonial.length - 1;
    }
    scrollDiv(direction) {
        const scrollWidth = this.scrollDivContainer.nativeElement
            .scrollWidth;
        if (direction == 'right') {
            if (this.isMobile)
                this.scrollDivContainer.nativeElement.scrollLeft += 380;
            else
                this.scrollDivContainer.nativeElement.scrollLeft +=
                    scrollWidth;
        }
        else {
            if (this.isMobile)
                this.scrollDivContainer.nativeElement.scrollLeft -= 380;
            else
                this.scrollDivContainer.nativeElement.scrollLeft = 0;
        }
    }
    onWindowResize(event) {
        this.width = event.target.innerWidth;
        this.isMobile = this.width < this.mobileWidth;
    }
    activeSlide(index) {
        this.currentIndex = index;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollDivContainer = _t.first);
    } }, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 466, vars: 22, consts: [[1, "bg-white", "flex", "items-center", "justify-around", "py-[.4em]", "overflow-hidden"], ["routerLink", "/", 1, "home-header-home-link"], ["src", "/assets/trello-logo.svg"], ["routerLink", "/login", 1, "text-[#172B4D]", "font-semibold", "tracking-wider", "mr-4", "text-lg"], ["routerLink", "/register", 1, "bg-[#0065FF]", "py-4", "px-3", "tracking-wider", "text-white", "text-lg"], [1, "home-hero", "md:min-h-[500px]"], [1, "home-container", "px-2", "md:px-[unset]", "pb-0", "md:pb-[80px]", "flex", "flex-col", "md:flex-row", "gap-20"], [1, "flex-1"], [1, "home-title", "text-[2rem]", "md:text-[2.7rem]", "md:text-left", "text-center"], [1, "font-semibold", "text-xl", "md:text-left", "text-center"], [1, "input-container", "flex", "items-center", "justify-between", "md:flex-row", "flex-col", "gap-[2em]", "my-5"], ["type", "text", "placeholder", "Email", 1, "md:block", "hidden", "py-3", "px-2", "rounded-sm", "flex-[65%]", "text-black", "focus:outline", "outline-2", "outline-offset-2", "outline-white"], [1, "bg-[#0065FF]", "py-3", "px-2", "font-semibold", "tracking-wider", "text-white", "w-full", "md:flex-[35%]"], ["src", "/assets/TrelloUICollage_4x.webp"], [1, "home-team"], [1, "home-container", "team-container", "flex-wrap", "px-4", "md:px-[unset]"], [1, "top", "w-full", "mb-5"], [1, "font-semibold", "text-lg"], [1, "home-title", "text-[2rem]", "md:text-[3rem]"], [1, "font-semibold", "text-lg", "md:w-[60%]"], [1, "flex", "flex-1", "flex-col", "relative"], [1, "container", "slider", "flex", "md:flex-row", "flex-col-reverse", "gap-10", "h-max"], [1, "buttons", "flex-[30%]", "flex", "flex-col", "gap-1", "justify-between"], [1, "rounded-md", "py-5", "px-4", "arrow", "prev", "border-l-[8px]", "border-transparent", "[&.active]:shadow-2xl", "[&.active]:bg-white", "[&.active]:border-l-[8px]", "[&.active]:border-blue-500", 3, "ngClass", "click"], [1, "font-semibold", "text-left"], [1, "text-left"], [1, "flex-[70%]", "overflow-hidden", "max-h-[500px]"], ["ngFor", "", 3, "ngForOf"], [1, "home-information"], [1, "home-container", "information-container", "flex-wrap", "md:px-[unset]", "px-4"], [1, "top", "w-full", "mb-4"], [1, "font-bold", "text-md", "md:text-lg"], [1, "home-title", "md:text-4xl", "text-[1.5rem]"], [1, "buttons", "my-4", "flex", "gap-4", "w-full", "justify-end"], [1, "left", "bg-gray-200", "rounded-full", "w-[30px]", "h-[30px]", "flex", "items-center", "justify-center", "text-gray-500", "cursor-pointer", 3, "click"], ["width", "30", "height", "30", "viewBox", "0 0 30 30", "fill", "none"], ["width", "30", "height", "30", "rx", "15"], ["d", "M16.7167 8.21674L10.2168 14.7167L16.5001 20.9999", "stroke-width", "2", "stroke-linecap", "round", "stroke", "gray", "stroke-linejoin", "round"], [1, "right", "bg-gray-200", "rounded-full", "w-[30px]", "h-[30px]", "flex", "items-center", "justify-center", "text-gray-500", "cursor-pointer", 3, "click"], ["x", "30", "y", "30", "width", "30", "height", "30", "rx", "15", "transform", "rotate(-180 30 30)"], ["d", "M13.2833 21.7833L19.7832 15.2833L13.4999 9.00007", "stroke-width", "2", "stroke-linecap", "round", "stroke", "gray", "stroke-linejoin", "round"], [1, "boxes", "flex", "gap-8"], [1, "wrapper", "container", "mx-auto", "overflow-x-hidden", "w-full", "scroll-smooth"], ["scrollDivContainer", ""], [1, "box-wrapper", "flex", "flex-nowrap", "gap-8", "items-stretch", "w-[390px]", "md:w-[calc(100%_+_2rem)]", "pb-[6rem]", "md:pl-[4em]"], [1, "box", "rounded-md", "block", "flex-[0_0_auto]", "shadow-2xl"], [1, "container-box", "w-[350px]", "h-[240px]", "flex", "flex-col"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#FF7452]"], [1, "icon", "w-[50px]", "h-[50px]", "absolute", "z-[2]", "left-4", "top-[50%]", "p-2", "bg-white", "rounded-md"], ["src", "/assets/icon-content-folder_2x.png", "alt", "", 1, "w-full"], [1, "body", "flex-[85%]", "flex", "items-center", "justify-center", "flex-col", "p-4", "gap-5"], [1, "font-bold", "text-left", "text-2xl", "w-full"], [1, "font-semibold"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#2684FF]"], ["src", "/assets/icon-object-megaphone_2x.png", "alt", "", 1, "w-full"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#57D9A3]"], ["src", "/assets/icon-object-leaf_2x.png", "alt", "", 1, "w-full"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#FFC400]"], ["src", "/assets/icon-content-checklists_2x.png", "alt", "", 1, "w-full"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#00C7E5]"], ["width", "24", "height", "21", "viewBox", "0 0 24 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4786 3.2765C15.1428 1.25724 12.8955 0 10.4299 0C6.63506 0 3.51747 2.95097 3.17207 6.72114C1.29746 7.44955 0 9.2954 0 11.4132C0 13.6952 1.49564 15.6217 3.54375 16.2328C3.87678 15.2062 4.64794 14.3742 5.64682 13.9847C5.89537 11.2618 8.13887 9.13055 10.8697 9.13055C12.6441 9.13055 14.2612 10.0386 15.2226 11.4969C15.463 11.4581 15.7074 11.4386 15.9542 11.4386C18.3452 11.4386 20.3175 13.2695 20.6003 15.6336C22.6255 14.5119 24 12.327 24 9.81537C24 6.15943 21.0878 3.1957 17.4953 3.1957C17.1524 3.1957 16.8127 3.2228 16.4786 3.2765Z", "fill", "#79E2F2"], ["opacity", "0.5", "d", "M10.8698 9.13049C12.6441 9.13049 14.2613 10.0385 15.2226 11.4969C15.463 11.4581 15.7075 11.4385 15.9542 11.4385C18.5394 11.4385 20.6352 13.579 20.6352 16.2194C20.6352 18.8334 18.5811 20.9574 16.0316 20.9996L15.9542 21.0002H6.91519C4.954 21.0002 3.36414 19.3764 3.36414 17.3734C3.36414 15.8438 4.29782 14.5107 5.64684 13.9847C5.8954 11.2618 8.1389 9.13049 10.8698 9.13049Z", "fill", "#79E2F2"], [1, "box", "rounded-md", "block", "flex-[0_0_auto]", "shadow-2xl", "pr-[1em]", "md:pr-[4em]"], [1, "top-bar", "relative", "flex-[15%]", "rounded-tl-md", "rounded-tr-md", "z-[1]", "bg-[#F99CDB]"], ["src", "/assets/icon-object-book_2x.png", "alt", "", 1, "w-full"], [1, "bottom", "flex", "justify-between", "items-center"], [1, "w-[60%]", "text-xl", "font-semibold"], [1, "border-2", "border-solid", "border-blue-500", "rounded-md", "py-3", "px-2", "text-lg", "hover:bg-blue-100", "transition-all"], [1, "home-workflow"], [1, "home-container", "workflow-container", "flex", "flex-col", "gap-6", "items-center", "container", "mx-auto", "px-[16em]"], [1, "home-title", "!text-[35px]", "text-white"], [1, "text-xl", "text-white", "w-[55%]", "text-center", "font-semibold"], [1, "bg-white", "py-3", "px-3", "rounded-sm", "font-semibold", "hover:bg-blue-50", "transition-all"], [1, "bottom", "flex", "flex-col", "gap-12"], [1, "banner", "flex", "bg-white", "p-8", "gap-12", "rounded-md", "shadow-xl"], [1, "left", "flex-[60%]"], ["src", "/assets/workflow1.webp", "alt", ""], [1, "right", "flex-[40%]", "flex", "flex-col", "justify-around", "items-start"], [1, "top", "flex"], [1, "icon"], ["aria-hidden", "true", "viewBox", "0 0 32 32", 1, "!text-[#8777D9]", 2, "color", "#8777D9"], ["d", "M6 5.333h9.333a3.333 3.333 0 0 1 0 6.667H6a3.333 3.333 0 0 1 0-6.667Zm9.333 4a.667.667 0 0 0 0-1.333H6a.667.667 0 0 0 0 1.333h9.333Zm-6.666 4H18A3.333 3.333 0 1 1 18 20H8.667a3.333 3.333 0 0 1 0-6.667Zm9.333 4A.667.667 0 0 0 18 16H8.667a.667.667 0 0 0 0 1.333H18Zm6.667 4h-9.334a3.333 3.333 0 1 0 0 6.667h9.334a3.333 3.333 0 0 0 0-6.667Zm-9.334 4a.667.667 0 0 1 0-1.333h9.334a.667.667 0 1 1 0 1.333h-9.334Zm8-20H26A3.333 3.333 0 1 1 26 12h-2.667a3.333 3.333 0 1 1 0-6.667Zm2.667 4A.667.667 0 1 0 26 8h-2.667a.667.667 0 1 0 0 1.333H26Z", 1, "!text-[#8777D9]", 2, "color", "#8777D9"], [1, "uppercase", "font-semibold"], [1, "text-lg", "font-medium"], [1, "text-blue-500", "underline", "text-xl"], [1, "banner", "flex", "bg-white", "p-8", "relative", "-mb-[10rem]", "gap-12", "rounded-md", "shadow-2xl"], [1, "left", "flex-[40%]", "flex", "flex-col", "justify-around", "items-start"], [1, "right", "flex-[60%]", "flex", "flex-col", "justify-around", "items-start"], ["src", "/assets/workflow2.webp", "alt", ""], [1, "conf", "pt-[10rem]"], [1, "wrapper", "flex", "container", "md:px-[15em]", "mx-auto", "flex-col", "gap-20"], [1, "first-row", "flex", "flex-col", "gap-8"], [1, "text-gray-800", "text-4xl", "font-semibold"], [1, "text-xl", "font-semibold", "text-gray-800", "w-[60%]"], [1, "boxes", "flex", "gap-6"], [1, "box", "flex-1", "bg-gray-100", "p-4", "rounded-sm", "flex", "flex-col", "gap-6", "items-start"], ["width", "107", "height", "100", "viewBox", "0 0 107 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_486_60869)"], ["d", "M94.8349 55.6066L100.641 56.7555C100.779 56.8014 100.779 56.9393 100.641 56.9852L95.3878 58.3639L95.7104 59.6047C95.7565 59.6507 95.6643 59.7426 95.5722 59.7426L89.766 58.5937C89.6738 58.5477 89.6277 58.3639 89.766 58.3639L95.0192 56.9852L94.6966 55.7444C94.6966 55.7263 94.7002 55.7084 94.7071 55.6917C94.7141 55.6749 94.7243 55.6597 94.7371 55.6469C94.75 55.6341 94.7652 55.624 94.782 55.6171C94.7987 55.6101 94.8167 55.6066 94.8349 55.6066Z", "fill", "#FFC400"], ["width", "107", "height", "100", "fill", "white", "fill-opacity", "0.01"], ["d", "M30.8742 64.4301C31.0469 65.9399 31.7216 67.3486 32.7906 68.4314C33.8597 69.5142 35.2615 70.2088 36.7726 70.4044C38.2529 70.5877 39.7533 70.2981 41.0581 69.5772C41.2051 69.487 41.3737 69.4377 41.5462 69.4343C41.7188 69.431 41.8891 69.4737 42.0395 69.5581C42.1899 69.6425 42.3149 69.7654 42.4017 69.9142C42.4884 70.063 42.5336 70.2323 42.5327 70.4044V84.8345C31.2523 84.8345 20.434 80.3656 12.4575 72.4108C4.48111 64.456 0 53.667 0 42.4172H14.4694C14.6391 42.4216 14.807 42.3813 14.9562 42.3005C15.1053 42.2197 15.2305 42.1011 15.3193 41.9568C15.408 41.8124 15.457 41.6474 15.4616 41.4781C15.4661 41.3089 15.4259 41.1414 15.345 40.9926C14.7287 39.9548 14.3983 38.7731 14.3871 37.567C14.3759 36.3609 14.6843 35.1733 15.2812 34.1242C15.878 33.0752 16.7422 32.202 17.7861 31.5931C18.83 30.9841 20.0167 30.6609 21.2261 30.6562C22.4355 30.6515 23.6247 30.9655 24.6734 31.5663C25.722 32.1672 26.5929 33.0336 27.198 34.078C27.803 35.1224 28.1207 36.3076 28.1189 37.5137C28.1171 38.7198 27.7959 39.9041 27.1878 40.9466C27.095 41.0966 27.0451 41.269 27.0436 41.4453C27.042 41.6215 27.0889 41.7947 27.1791 41.9463C27.2694 42.0978 27.3995 42.2218 27.5553 42.3048C27.7112 42.3878 27.8869 42.4267 28.0633 42.4172H42.5327V56.8474C42.5422 57.0233 42.5033 57.1986 42.42 57.354C42.3368 57.5094 42.2124 57.6392 42.0605 57.7291C41.9085 57.8191 41.7348 57.8659 41.5581 57.8644C41.3814 57.8628 41.2085 57.8131 41.0581 57.7205C40.0284 57.106 38.8481 56.7879 37.6481 56.8014C36.6844 56.808 35.7328 57.0169 34.8553 57.4145C33.9778 57.8121 33.1941 58.3895 32.5552 59.1091C31.9162 59.8287 31.4363 60.6744 31.1467 61.5911C30.8571 62.5079 30.7643 63.4752 30.8742 64.4301Z", "fill", "#253858"], ["d", "M54.2373 21.9669C54.0566 23.4859 53.3745 24.9018 52.2983 25.9917C51.2221 27.0817 49.813 27.7836 48.2929 27.9871C46.8068 28.1767 45.2997 27.8696 44.0073 27.114C43.857 27.0214 43.6841 26.9717 43.5074 26.9702C43.3307 26.9686 43.1569 27.0154 43.005 27.1054C42.853 27.1953 42.7287 27.3251 42.6455 27.4805C42.5622 27.636 42.5232 27.8112 42.5327 27.9871V42.4173H28.0633C27.8869 42.4268 27.7112 42.3879 27.5553 42.3049C27.3995 42.2218 27.2694 42.0978 27.1791 41.9463C27.0889 41.7948 27.042 41.6215 27.0436 41.4453C27.0451 41.2691 27.095 41.0966 27.1878 40.9467C27.7764 39.91 28.0817 38.7374 28.073 37.5461C28.0644 36.3548 27.7421 35.1866 27.1385 34.1586C26.5349 33.1305 25.6711 32.2786 24.6336 31.6881C23.5961 31.0976 22.4212 30.7892 21.2267 30.7939C20.0321 30.7985 18.8597 31.116 17.8268 31.7145C16.794 32.313 15.9368 33.1716 15.3413 34.2043C14.7457 35.237 14.4326 36.4076 14.4332 37.599C14.4339 38.7903 14.7483 39.9606 15.345 40.9926C15.4259 41.1415 15.4661 41.3089 15.4616 41.4782C15.457 41.6474 15.408 41.8125 15.3193 41.9568C15.2305 42.1012 15.1053 42.2197 14.9562 42.3005C14.807 42.3813 14.6391 42.4216 14.4694 42.4173H0C0 31.1675 4.48111 20.3785 12.4575 12.4237C20.434 4.46895 31.2523 0 42.5327 0V0V14.4301C42.5232 14.6061 42.5622 14.7813 42.6455 14.9368C42.7287 15.0922 42.853 15.2219 43.005 15.3119C43.1569 15.4019 43.3307 15.4486 43.5074 15.4471C43.6841 15.4456 43.857 15.3959 44.0073 15.3033C45.0371 14.6888 46.2174 14.3706 47.4173 14.3842C48.3806 14.3851 49.333 14.5881 50.2125 14.9801C51.092 15.3721 51.8789 15.9443 52.5221 16.6595C53.1654 17.3746 53.6505 18.2168 53.946 19.1312C54.2415 20.0456 54.3407 21.0118 54.2373 21.9669Z", "fill", "#0065FF"], ["d", "M85.0654 42.4173H70.596C70.4234 42.4164 70.2537 42.4615 70.1045 42.548C69.9553 42.6345 69.832 42.7592 69.7474 42.9092C69.6628 43.0592 69.6199 43.229 69.6233 43.4011C69.6267 43.5732 69.6761 43.7413 69.7665 43.8879C70.4894 45.1891 70.7798 46.6855 70.596 48.1618C70.3228 49.8415 69.4324 51.3596 68.0981 52.4203C66.7638 53.4809 65.0814 54.0081 63.3786 53.8991C61.6758 53.7901 60.0747 53.0527 58.8874 51.8306C57.7001 50.6086 57.0115 48.9894 56.956 47.2886C56.9495 46.0928 57.268 44.9176 57.8776 43.8879C57.9704 43.7379 58.0203 43.5655 58.0218 43.3893C58.0233 43.213 57.9765 43.0398 57.8862 42.8882C57.796 42.7367 57.6659 42.6127 57.5101 42.5297C57.3542 42.4467 57.1785 42.4078 57.0021 42.4173H42.5327V27.9871C42.5231 27.8112 42.5621 27.636 42.6454 27.4805C42.7286 27.3251 42.853 27.1953 43.0049 27.1054C43.1568 27.0154 43.3306 26.9686 43.5073 26.9702C43.684 26.9717 43.8569 27.0214 44.0072 27.114C45.2996 27.8696 46.8067 28.1767 48.2928 27.9871C49.9771 27.7148 51.4993 26.8267 52.5629 25.4961C53.6264 24.1654 54.155 22.4875 54.0457 20.7894C53.9364 19.0912 53.197 17.4945 51.9716 16.3104C50.7462 15.1262 49.1226 14.4396 47.4172 14.3842C46.2173 14.3706 45.037 14.6888 44.0072 15.3033C43.8569 15.3959 43.684 15.4456 43.5073 15.4471C43.3306 15.4486 43.1568 15.4019 43.0049 15.3119C42.853 15.2219 42.7286 15.0922 42.6454 14.9368C42.5621 14.7813 42.5231 14.6061 42.5327 14.4301V0C53.813 0 64.6314 4.46895 72.6078 12.4237C80.5843 20.3785 85.0654 31.1675 85.0654 42.4173Z", "fill", "#2684FF"], ["d", "M107 69.5312C105.424 74.8753 102.807 79.8574 99.3004 84.1931C95.7934 88.5287 91.4644 92.133 86.5606 94.8002C81.6568 97.4673 76.2743 99.1451 70.7203 99.7376C65.1664 100.33 59.5498 99.8259 54.1912 98.2537L58.2924 84.375C58.3264 84.2109 58.319 84.0409 58.2709 83.8804C58.2227 83.7199 58.1353 83.5738 58.0165 83.4553C57.8977 83.3368 57.7512 83.2496 57.5902 83.2016C57.4293 83.1536 57.2588 83.1462 57.0943 83.1801C55.6441 83.5211 54.1217 83.3757 52.7627 82.7665C51.0639 82.1449 49.6823 80.8758 48.9218 79.2383C48.1614 77.6008 48.0843 75.7291 48.7076 74.0349C49.3309 72.3407 50.6035 70.9629 52.2454 70.2045C53.8874 69.446 55.7642 69.3692 57.463 69.9908C58.62 70.2985 59.6613 70.9376 60.4582 71.829C60.5819 71.946 60.7332 72.0299 60.8981 72.0731C61.063 72.1162 61.2361 72.1172 61.4014 72.076C61.5668 72.0348 61.7191 71.9526 61.8442 71.8372C61.9693 71.7217 62.0631 71.5767 62.1171 71.4154L66.1723 57.5367L80.0887 61.6268C80.2599 61.6599 80.4182 61.7407 80.5452 61.8599C80.6721 61.9791 80.7626 62.1318 80.806 62.3003C80.8495 62.4687 80.8441 62.646 80.7905 62.8115C80.737 62.977 80.6374 63.1239 80.5034 63.2353C79.6486 64.08 79.0155 65.1217 78.6602 66.2684C78.3859 67.1903 78.3107 68.1597 78.4396 69.1127C78.5685 70.0658 78.8986 70.9807 79.4081 71.7971C79.9176 72.6136 80.5949 73.313 81.3953 73.8493C82.1958 74.3855 83.1011 74.7464 84.0517 74.9081C85.5591 75.1658 87.1096 74.9176 88.4605 74.2024C89.8114 73.4872 90.8862 72.3454 91.5168 70.9559C92.0935 69.5746 92.2224 68.048 91.8854 66.59C91.8436 66.4224 91.8477 66.2466 91.8972 66.0811C91.9467 65.9155 92.0399 65.7662 92.167 65.6489C92.2941 65.5315 92.4505 65.4503 92.6199 65.4138C92.7892 65.3772 92.9652 65.3867 93.1296 65.4412L107 69.5312Z", "fill", "url(#paint0_linear_486_60869)"], ["d", "M91.2401 41.8198L102.023 36.8106C102.072 36.774 102.133 36.7583 102.194 36.767C102.254 36.7756 102.309 36.8078 102.346 36.8566C102.382 36.9053 102.398 36.9666 102.389 37.0269C102.381 37.0873 102.348 37.1417 102.299 37.1783L95.4334 45.6801L97.4149 47.2885C97.4523 47.3113 97.4823 47.3443 97.5016 47.3835C97.5209 47.4227 97.5286 47.4666 97.5237 47.51C97.5189 47.5534 97.5017 47.5945 97.4743 47.6285C97.4469 47.6626 97.4103 47.6881 97.3688 47.7021L86.632 52.7113C86.3555 52.8492 86.1251 52.5275 86.3094 52.3437L93.1755 43.8419L91.194 42.2334C91.1566 42.2106 91.1266 42.1777 91.1073 42.1385C91.088 42.0993 91.0804 42.0554 91.0852 42.012C91.09 41.9686 91.1072 41.9275 91.1346 41.8934C91.162 41.8594 91.1986 41.8338 91.2401 41.8198Z", "fill", "#FFC400"], ["id", "paint0_linear_486_60869", "x1", "49.4233", "y1", "74.6404", "x2", "101.491", "y2", "89.8682", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FFAB00"], ["offset", "1", "stop-color", "#FFE380"], ["id", "clip0_486_60869"], ["width", "107", "height", "100", "fill", "white"], [1, "title", "text-2xl", "font-semibold", "text-gray-800"], [1, "font-normal"], [1, "border-2", "border-solid", "border-blue-500", "rounded-md", "py-3", "px-3"], ["width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_486_60874)"], ["width", "100", "height", "100", "fill", "white", "fill-opacity", "0.01"], ["d", "M75.4756 45.6555C76.4574 45.6555 77.3989 45.2655 78.0931 44.5713C78.7874 43.8771 79.1774 42.9355 79.1774 41.9537V37.2237C79.1774 36.2419 78.7874 35.3003 78.0931 34.6061C77.3989 33.9119 76.4574 33.5219 75.4756 33.5219C74.6613 33.5195 73.8698 33.2525 73.2206 32.7609C72.5714 32.2694 72.0997 31.5801 71.8766 30.7969C71.1542 28.0578 70.0646 25.429 68.6375 22.982C68.2411 22.2705 68.0868 21.4492 68.1981 20.6423C68.3094 19.8354 68.6802 19.0866 69.2545 18.509C69.5996 18.1651 69.8734 17.7564 70.0603 17.3065C70.2471 16.8565 70.3433 16.3741 70.3433 15.8869C70.3433 15.3997 70.2471 14.9173 70.0603 14.4673C69.8734 14.0173 69.5996 13.6087 69.2545 13.2648L65.9126 9.92288C65.5687 9.57777 65.16 9.30395 64.7101 9.11711C64.2601 8.93027 63.7777 8.8341 63.2905 8.8341C62.8033 8.8341 62.3209 8.93027 61.8709 9.11711C61.4209 9.30395 61.0123 9.57777 60.6684 9.92288C60.0907 10.4972 59.3419 10.8679 58.535 10.9792C57.7281 11.0905 56.9069 10.9363 56.1954 10.5398C53.7336 9.1427 51.1088 8.05479 48.3805 7.30077C47.6015 7.08766 46.9135 6.62563 46.4215 5.98514C45.9296 5.34465 45.6606 4.56083 45.6555 3.75321C45.6623 3.26278 45.5716 2.77588 45.3886 2.3208C45.2057 1.86573 44.9341 1.45155 44.5896 1.10235C44.2452 0.753138 43.8348 0.475859 43.3823 0.286619C42.9298 0.0973793 42.4442 -4.72926e-05 41.9537 1.72217e-08H37.2237C36.2419 1.72217e-08 35.3003 0.39001 34.6061 1.08423C33.9119 1.77845 33.5219 2.72002 33.5219 3.7018C33.5255 4.51161 33.2598 5.29964 32.7664 5.94187C32.2731 6.5841 31.5803 7.04406 30.7969 7.24936C28.0718 8.01254 25.448 9.10001 22.982 10.4884C22.2808 10.9086 21.4588 11.0813 20.6478 10.9788C19.8367 10.8762 19.0836 10.5044 18.509 9.92288C18.1651 9.57777 17.7564 9.30395 17.3065 9.11711C16.8565 8.93027 16.3741 8.8341 15.8869 8.8341C15.3997 8.8341 14.9173 8.93027 14.4673 9.11711C14.0173 9.30395 13.6087 9.57777 13.2648 9.92288L9.92288 13.2648C9.57777 13.6087 9.30395 14.0173 9.11711 14.4673C8.93027 14.9173 8.8341 15.3997 8.8341 15.8869C8.8341 16.3741 8.93027 16.8565 9.11711 17.3065C9.30395 17.7564 9.57777 18.1651 9.92288 18.509C10.4972 19.0866 10.8679 19.8354 10.9792 20.6423C11.0905 21.4492 10.9363 22.2705 10.5398 22.982C9.11274 25.429 8.02317 28.0578 7.30077 30.7969C7.08535 31.5844 6.61562 32.2786 5.96471 32.7715C5.3138 33.2643 4.51821 33.5281 3.7018 33.5219C2.72002 33.5219 1.77845 33.9119 1.08423 34.6061C0.39001 35.3003 0 36.2419 0 37.2237L0 41.9537C0 42.9355 0.39001 43.8771 1.08423 44.5713C1.77845 45.2655 2.72002 45.6555 3.7018 45.6555C4.52499 45.6523 5.32579 45.9235 5.97758 46.4263C6.62938 46.9291 7.09498 47.6348 7.30077 48.4319C8.03276 51.1514 9.12194 53.762 10.5398 56.1954C10.9363 56.9069 11.0905 57.7281 10.9792 58.535C10.8679 59.3419 10.4972 60.0907 9.92288 60.6684C9.57777 61.0123 9.30395 61.4209 9.11711 61.8709C8.93027 62.3209 8.8341 62.8033 8.8341 63.2905C8.8341 63.7777 8.93027 64.2601 9.11711 64.7101C9.30395 65.16 9.57777 65.5687 9.92288 65.9126L13.2648 69.2545C13.6087 69.5996 14.0173 69.8734 14.4673 70.0603C14.9173 70.2471 15.3997 70.3433 15.8869 70.3433C16.3741 70.3433 16.8565 70.2471 17.3065 70.0603C17.7564 69.8734 18.1651 69.5996 18.509 69.2545C19.0866 68.6802 19.8354 68.3094 20.6423 68.1981C21.4492 68.0868 22.2705 68.2411 22.982 68.6375C25.4375 70.0474 28.064 71.136 30.7969 71.8766C31.5803 72.0819 32.2731 72.5419 32.7664 73.1841C33.2598 73.8263 33.5255 74.6143 33.5219 75.4242C33.5219 76.4059 33.9119 77.3475 34.6061 78.0417C35.3003 78.736 36.2419 79.126 37.2237 79.126H41.9537C42.9355 79.126 43.8771 78.736 44.5713 78.0417C45.2655 77.3475 45.6555 76.4059 45.6555 75.4242C45.6606 74.6165 45.9296 73.8327 46.4215 73.1922C46.9135 72.5517 47.6015 72.0897 48.3805 71.8766C51.1164 71.1449 53.744 70.0558 56.1954 68.6375C56.9069 68.2411 57.7281 68.0868 58.535 68.1981C59.3419 68.3094 60.0907 68.6802 60.6684 69.2545C61.0123 69.5996 61.4209 69.8734 61.8709 70.0603C62.3209 70.2471 62.8033 70.3433 63.2905 70.3433C63.7777 70.3433 64.2601 70.2471 64.7101 70.0603C65.16 69.8734 65.5687 69.5996 65.9126 69.2545L67.6093 67.6093L69.2545 65.9126C69.5996 65.5687 69.8734 65.16 70.0603 64.7101C70.2471 64.2601 70.3433 63.7777 70.3433 63.2905C70.3433 62.8033 70.2471 62.3209 70.0603 61.8709C69.8734 61.4209 69.5996 61.0123 69.2545 60.6684C68.6802 60.0907 68.3094 59.3419 68.1981 58.535C68.0868 57.7281 68.2411 56.9069 68.6375 56.1954C70.0554 53.762 71.1446 51.1514 71.8766 48.4319C72.0903 47.6392 72.558 46.9384 73.208 46.4369C73.8581 45.9355 74.6546 45.661 75.4756 45.6555Z", "fill", "#0065FF"], ["d", "M39.5374 65.7584L37.2238 65.6556C30.3831 65.0485 24.052 61.7871 19.5863 56.5696C15.1206 51.3522 12.8754 44.5936 13.3315 37.7411C13.7876 30.8887 16.9087 24.4872 22.0264 19.9076C27.1442 15.328 33.8517 12.9344 40.7125 13.2393C47.5733 13.5442 54.042 16.5235 58.7333 21.539C63.4246 26.5546 65.9655 33.2077 65.8119 40.0736C65.6583 46.9395 62.8224 53.4723 57.9114 58.273C53.0005 63.0737 46.405 65.7606 39.5374 65.7584ZM39.6402 14.4473C33.1608 14.4227 26.922 16.9007 22.2252 21.3643C17.5284 25.8279 14.7363 31.9326 14.4312 38.4049C14.1262 44.8772 16.3318 51.2174 20.5879 56.103C24.8441 60.9886 30.8221 64.0424 37.2752 64.6273C40.9522 64.9677 44.659 64.494 48.1322 63.2398C51.6053 61.9856 54.7596 59.9817 57.3707 57.3706C59.9818 54.7595 61.9857 51.6052 63.2399 48.132C64.4941 44.6589 64.9678 40.9521 64.6274 37.2751C64.1075 31.423 61.5464 25.94 57.392 21.7856C53.2376 17.6312 47.7546 15.07 41.9025 14.5502L39.6402 14.4473Z", "fill", "#2684FF"], ["opacity", "0.2", "d", "M77.5322 43.7018C77.1605 43.0192 77.0197 42.2347 77.1309 41.4655C77.2421 40.6963 77.5993 39.9837 78.1492 39.4344C78.7798 38.7844 79.1463 37.9231 79.1774 37.018C79.1248 36.0723 78.7117 35.1827 78.0231 34.5324C77.3345 33.882 76.4228 33.5204 75.4756 33.5218C74.6613 33.5195 73.8699 33.2525 73.2207 32.7609C72.5715 32.2694 72.0998 31.58 71.8767 30.7969L71.7224 30.2828C71.0464 30.4426 70.4253 30.7798 69.9229 31.2596C69.3767 31.8164 68.6599 32.1746 67.8866 32.277C67.1134 32.3795 66.328 32.2205 65.6556 31.8252C63.3302 30.4838 60.8419 29.447 58.252 28.7403C57.4915 28.5441 56.8193 28.0976 56.3436 27.4726C55.8679 26.8477 55.6165 26.0809 55.6299 25.2956C55.6299 24.8254 55.5365 24.3598 55.355 23.926C55.1735 23.4922 54.9076 23.0989 54.5727 22.7688C54.2378 22.4387 53.8407 22.1784 53.4043 22.0032C52.9679 21.828 52.5011 21.7412 52.0309 21.7481H47.5579C46.617 21.7481 45.7147 22.1218 45.0494 22.7871C44.3841 23.4524 44.0103 24.3547 44.0103 25.2956C44.0148 26.0787 43.7599 26.8412 43.2856 27.4643C42.8113 28.0874 42.1442 28.5361 41.3882 28.7403C38.7819 29.4466 36.2766 30.4833 33.9332 31.8252C33.2608 32.2205 32.4754 32.3795 31.7022 32.277C30.9289 32.1746 30.2121 31.8164 29.6659 31.2596C29.3361 30.927 28.9436 30.6629 28.5112 30.4827C28.0788 30.3025 27.615 30.2097 27.1466 30.2097C26.6781 30.2097 26.2143 30.3025 25.7819 30.4827C25.3495 30.6629 24.9571 30.927 24.6273 31.2596L21.4911 34.3959C21.1584 34.7257 20.8943 35.1181 20.7142 35.5505C20.534 35.9829 20.4412 36.4467 20.4412 36.9152C20.4412 37.3836 20.534 37.8474 20.7142 38.2798C20.8943 38.7122 21.1584 39.1046 21.4911 39.4344C22.0479 39.9807 22.406 40.6975 22.5085 41.4707C22.611 42.244 22.4519 43.0293 22.0566 43.7018C20.736 46.0555 19.7004 48.5581 18.9718 51.1568C18.7675 51.9128 18.3189 52.5799 17.6957 53.0542C17.0726 53.5285 16.3101 53.7833 15.5271 53.7789C14.5862 53.7789 13.6838 54.1527 13.0185 54.818C12.3533 55.4833 11.9795 56.3856 11.9795 57.3265V61.7995C11.9795 62.7403 12.3533 63.6427 13.0185 64.308C13.6838 64.9733 14.5862 65.347 15.5271 65.347C16.3101 65.3426 17.0726 65.5974 17.6957 66.0717C18.3189 66.546 18.7675 67.2132 18.9718 67.9691C19.0232 68.2262 19.126 68.4833 19.1774 68.7403C19.7449 68.3856 20.3968 68.189 21.0657 68.1709C21.7347 68.1528 22.3963 68.3139 22.9821 68.6375C25.4376 70.0474 28.064 71.136 30.797 71.8766C31.5803 72.0819 32.2732 72.5418 32.7665 73.1841C33.2598 73.8263 33.5256 74.6143 33.5219 75.4241C33.5219 75.9103 33.6177 76.3916 33.8037 76.8408C33.9897 77.2899 34.2624 77.698 34.6061 78.0417C34.9499 78.3855 35.358 78.6581 35.8071 78.8442C36.2562 79.0302 36.7376 79.1259 37.2237 79.1259H41.9538C42.9356 79.1259 43.8771 78.7359 44.5714 78.0417C45.2656 77.3475 45.6556 76.4059 45.6556 75.4241C45.6606 74.6165 45.9296 73.8327 46.4216 73.1922C46.9136 72.5517 47.6015 72.0897 48.3805 71.8766L50.3857 71.2596H48.7404C46.5335 71.0549 44.4305 70.2259 42.6774 68.8697C40.9243 67.5136 39.5937 65.6862 38.8411 63.6015C38.0885 61.5168 37.9451 59.2608 38.4276 57.0976C38.9102 54.9343 39.9988 52.9532 41.566 51.386C43.1332 49.8187 45.1144 48.7302 47.2776 48.2476C49.4409 47.765 51.6968 47.9084 53.7815 48.661C55.8662 49.4136 57.6936 50.7443 59.0498 52.4974C60.4059 54.2505 61.2349 56.3535 61.4396 58.5604C61.6156 60.3483 61.3726 62.1527 60.7301 63.8304C60.0875 65.5081 59.0631 67.0132 57.7378 68.2262C58.2758 68.1782 58.8177 68.2501 59.3244 68.4368C59.8312 68.6235 60.2902 68.9203 60.6684 69.3059C61.0123 69.651 61.421 69.9248 61.871 70.1117C62.3209 70.2985 62.8033 70.3947 63.2905 70.3947C63.7778 70.3947 64.2602 70.2985 64.7101 70.1117C65.1601 69.9248 65.5687 69.651 65.9127 69.3059L67.6093 67.6607L69.2546 65.964C69.5997 65.6201 69.8735 65.2114 70.0603 64.7615C70.2472 64.3115 70.3433 63.8291 70.3433 63.3419C70.3433 62.8547 70.2472 62.3723 70.0603 61.9223C69.8735 61.4723 69.5997 61.0637 69.2546 60.7198C68.6803 60.1421 68.3095 59.3933 68.1982 58.5864C68.0869 57.7795 68.2411 56.9583 68.6376 56.2468C70.0555 53.8134 71.1447 51.2028 71.8767 48.4833C72.0903 47.6906 72.558 46.9898 73.2081 46.4883C73.8581 45.9869 74.6547 45.7124 75.4756 45.7069C76.4303 45.6942 77.3463 45.3278 78.0463 44.6786C77.8967 44.342 77.725 44.0157 77.5322 43.7018Z", "fill", "url(#paint0_linear_486_60874)"], ["d", "M99.9999 64.4217V59.9486C99.9999 59.0078 99.6262 58.1054 98.9609 57.4401C98.2956 56.7748 97.3933 56.4011 96.4524 56.4011C95.6759 56.4029 94.9209 56.1462 94.3065 55.6714C93.6921 55.1966 93.2532 54.5308 93.0591 53.779C92.335 51.1707 91.281 48.6655 89.9228 46.324C89.5511 45.6414 89.4103 44.8569 89.5215 44.0877C89.6327 43.3185 89.99 42.6059 90.5398 42.0566C90.8725 41.7268 91.1365 41.3344 91.3167 40.902C91.4969 40.4696 91.5897 40.0058 91.5897 39.5373C91.5897 39.0689 91.4969 38.6051 91.3167 38.1727C91.1365 37.7403 90.8725 37.3479 90.5398 37.0181L87.3521 33.8818C87.0223 33.5491 86.6299 33.2851 86.1975 33.1049C85.7651 32.9247 85.3013 32.8319 84.8328 32.8319C84.3644 32.8319 83.9006 32.9247 83.4682 33.1049C83.0358 33.2851 82.6434 33.5491 82.3136 33.8818C81.7673 34.4386 81.0505 34.7967 80.2773 34.8992C79.504 35.0017 78.7187 34.8426 78.0462 34.4474C75.7072 33.0966 73.2007 32.0594 70.5912 31.3625C69.8352 31.1583 69.1681 30.7096 68.6938 30.0865C68.2195 29.4634 67.9647 28.7009 67.9691 27.9178C67.9691 26.9769 67.5953 26.0746 66.93 25.4093C66.2647 24.744 65.3624 24.3702 64.4215 24.3702H59.9485C59.0077 24.3702 58.1053 24.744 57.44 25.4093C56.7747 26.0746 56.401 26.9769 56.401 27.9178C56.4054 28.7009 56.1506 29.4634 55.6763 30.0865C55.202 30.7096 54.5348 31.1583 53.7789 31.3625C51.1725 32.0688 48.6672 33.1055 46.3238 34.4474C45.6514 34.8426 44.8661 35.0017 44.0928 34.8992C43.3195 34.7967 42.6028 34.4386 42.0565 33.8818C41.7267 33.5491 41.3343 33.2851 40.9019 33.1049C40.4695 32.9247 40.0057 32.8319 39.5372 32.8319C39.0688 32.8319 38.605 32.9247 38.1726 33.1049C37.7402 33.2851 37.3477 33.5491 37.0179 33.8818L33.8817 37.0181C33.549 37.3479 33.285 37.7403 33.1048 38.1727C32.9246 38.6051 32.8318 39.0689 32.8318 39.5373C32.8318 40.0058 32.9246 40.4696 33.1048 40.902C33.285 41.3344 33.549 41.7268 33.8817 42.0566C34.4385 42.6029 34.7966 43.3197 34.8991 44.0929C35.0016 44.8662 34.8425 45.6515 34.4472 46.324C33.1053 48.6673 32.0687 51.1726 31.3624 53.779C31.1581 54.535 30.7095 55.2021 30.0864 55.6764C29.4633 56.1507 28.7007 56.4055 27.9177 56.4011C26.9768 56.4011 26.0745 56.7748 25.4092 57.4401C24.7439 58.1054 24.3701 59.0078 24.3701 59.9486V64.4217C24.3701 65.3625 24.7439 66.2649 25.4092 66.9302C26.0745 67.5955 26.9768 67.9692 27.9177 67.9692C28.7007 67.9648 29.4633 68.2196 30.0864 68.6939C30.7095 69.1682 31.1581 69.8354 31.3624 70.5913C32.0593 73.2009 33.0965 75.7074 34.4472 78.0463C34.8425 78.7188 35.0016 79.5041 34.8991 80.2774C34.7966 81.0506 34.4385 81.7674 33.8817 82.3137C33.549 82.6435 33.285 83.0359 33.1048 83.4683C32.9246 83.9007 32.8318 84.3645 32.8318 84.833C32.8318 85.3014 32.9246 85.7652 33.1048 86.1976C33.285 86.63 33.549 87.0224 33.8817 87.3522L37.0179 90.5399C37.3477 90.8726 37.7402 91.1366 38.1726 91.3168C38.605 91.497 39.0688 91.5898 39.5372 91.5898C40.0057 91.5898 40.4695 91.497 40.9019 91.3168C41.3343 91.1366 41.7267 90.8726 42.0565 90.5399C42.6058 89.9901 43.3183 89.6329 44.0876 89.5217C44.8568 89.4104 45.6413 89.5512 46.3238 89.9229C48.6654 91.2812 51.1706 92.3351 53.7789 93.0592C54.5307 93.2533 55.1965 93.6922 55.6713 94.3066C56.1461 94.921 56.4028 95.676 56.401 96.4525C56.401 97.3934 56.7747 98.2957 57.44 98.961C58.1053 99.6263 59.0077 100 59.9485 100H64.4215C65.3624 100 66.2647 99.6263 66.93 98.961C67.5953 98.2957 67.9691 97.3934 67.9691 96.4525C67.9673 95.676 68.224 94.921 68.6988 94.3066C69.1736 93.6922 69.8394 93.2533 70.5912 93.0592C73.2029 92.3449 75.7094 91.2905 78.0462 89.9229C78.7288 89.5512 79.5133 89.4104 80.2825 89.5217C81.0517 89.6329 81.7643 89.9901 82.3136 90.5399C82.6434 90.8726 83.0358 91.1366 83.4682 91.3168C83.9006 91.497 84.3644 91.5898 84.8328 91.5898C85.3013 91.5898 85.7651 91.497 86.1975 91.3168C86.6299 91.1366 87.0223 90.8726 87.3521 90.5399L90.5398 87.3522C90.8725 87.0224 91.1365 86.63 91.3167 86.1976C91.4969 85.7652 91.5897 85.3014 91.5897 84.833C91.5897 84.3645 91.4969 83.9007 91.3167 83.4683C91.1365 83.0359 90.8725 82.6435 90.5398 82.3137C89.99 81.7644 89.6327 81.0518 89.5215 80.2826C89.4103 79.5134 89.5511 78.7289 89.9228 78.0463C91.2903 75.7095 92.3448 73.203 93.0591 70.5913C93.2532 69.8395 93.6921 69.1737 94.3065 68.6989C94.9209 68.2241 95.6759 67.9674 96.4524 67.9692C97.3933 67.9692 98.2956 67.5955 98.9609 66.9302C99.6262 66.2649 99.9999 65.3625 99.9999 64.4217ZM73.8303 61.1312C74.1166 64.2197 73.1643 67.2954 71.1829 69.6818C69.2015 72.0682 66.3532 73.5698 63.2647 73.8561C60.1762 74.1425 57.1004 73.1902 54.7141 71.2088C52.3277 69.2273 50.8261 66.3791 50.5398 63.2906C50.398 61.7613 50.5588 60.219 51.013 58.7519C51.4673 57.2848 52.206 55.9215 53.1871 54.7399C55.1686 52.3535 58.0168 50.852 61.1053 50.5656C64.1939 50.2793 67.2696 51.2315 69.656 53.213C72.0424 55.1944 73.5439 58.0427 73.8303 61.1312Z", "fill", "#00C7E5"], ["d", "M62.1589 79.6915H60.6165C56.5373 79.3328 52.7146 77.5492 49.819 74.6536C46.9234 71.758 45.1398 67.9353 44.781 63.8561C44.5434 61.2986 44.8722 58.7202 45.7442 56.3042C46.6162 53.8882 48.0098 51.6941 49.826 49.8779C51.6422 48.0617 53.8364 46.6681 56.2523 45.7961C58.6683 44.9241 61.2467 44.5953 63.8042 44.8329C67.8834 45.1916 71.7061 46.9752 74.6017 49.8708C77.4973 52.7664 79.2809 56.5891 79.6397 60.6684C79.8458 63.0911 79.5473 65.5302 78.763 67.8317C77.9786 70.1332 76.7255 72.2469 75.0827 74.0395C73.4399 75.8321 71.4432 77.2644 69.2187 78.2461C66.9943 79.2278 64.5904 79.7375 62.1589 79.743V79.6915ZM62.2104 45.7584C57.9404 45.7044 53.8167 47.3127 50.7109 50.2434C47.605 53.1742 45.7604 57.1977 45.5668 61.4636C45.3732 65.7295 46.8458 69.9036 49.6734 73.1036C52.501 76.3036 56.462 78.2788 60.7193 78.6118C63.1202 78.815 65.5365 78.4916 67.7995 77.6643C70.0625 76.8369 72.1176 75.5256 73.8214 73.8219C75.5251 72.1181 76.8365 70.063 77.6638 67.8C78.4911 65.537 78.8145 63.1207 78.6114 60.7198C78.2755 56.8783 76.5967 53.2779 73.87 50.5512C71.1432 47.8245 67.5429 46.1457 63.7014 45.8098L62.2104 45.7584Z", "fill", "#00B8D9"], ["d", "M82.4161 28.7917C86.7606 28.7917 90.2825 25.2699 90.2825 20.9254C90.2825 16.581 86.7606 13.0591 82.4161 13.0591C78.0717 13.0591 74.5498 16.581 74.5498 20.9254C74.5498 25.2699 78.0717 28.7917 82.4161 28.7917Z", "fill", "#00C7E5"], ["d", "M20.9767 89.6144C25.3211 89.6144 28.843 86.0925 28.843 81.748C28.843 77.4036 25.3211 73.8817 20.9767 73.8817C16.6322 73.8817 13.1104 77.4036 13.1104 81.748C13.1104 86.0925 16.6322 89.6144 20.9767 89.6144Z", "fill", "#0065FF"], ["id", "paint0_linear_486_60874", "x1", "16.1492", "y1", "79.3933", "x2", "69.6299", "y2", "25.9126", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#091E42", "stop-opacity", "0.11"], ["offset", "0.09", "stop-color", "#091E42", "stop-opacity", "0.44"], ["offset", "0.19", "stop-color", "#091E42", "stop-opacity", "0.69"], ["offset", "0.32", "stop-color", "#091E42", "stop-opacity", "0.87"], ["offset", "0.5", "stop-color", "#091E42", "stop-opacity", "0.97"], ["offset", "1", "stop-color", "#091E42"], ["id", "clip0_486_60874"], ["width", "100", "height", "100", "fill", "white"], ["clip-path", "url(#clip0_486_60863)"], ["d", "M63.2104 70.2582L58.4746 65.5909L65.005 59.0367L69.7408 63.7041C70.9465 64.8871 72.47 65.6976 74.1276 66.0377C75.7813 66.4173 77.2987 67.2417 78.5145 68.4211L97.7568 87.3386C99.1552 88.7199 99.9501 90.595 99.9688 92.5565C99.9875 94.5181 99.2284 96.4079 97.8565 97.8153C96.4631 99.2016 94.5769 99.9843 92.6075 99.9936C90.6381 100.003 88.7445 99.238 87.338 97.8649L68.0957 78.9474C66.8872 77.7471 66.0409 76.2333 65.6531 74.578C65.2942 72.9259 64.4429 71.4202 63.2104 70.2582Z", "fill", "#CFD4DB"], ["d", "M63.2108 70.2582L61.7651 68.8183C61.3325 68.3934 60.989 67.887 60.7546 67.3287C60.5201 66.7704 60.3994 66.1713 60.3994 65.5661C60.3994 64.9609 60.5201 64.3618 60.7546 63.8035C60.989 63.2452 61.3325 62.7388 61.7651 62.3139C62.1884 61.8797 62.6942 61.5337 63.2529 61.296C63.8117 61.0582 64.4123 60.9333 65.0199 60.9287C65.6275 60.9241 66.2299 61.0398 66.7922 61.269C67.3546 61.4983 67.8655 61.8366 68.2955 62.2642L69.7412 63.7041C70.9468 64.8872 72.4703 65.6976 74.128 66.0378C75.7817 66.4174 77.2991 67.2418 78.5148 68.4211L97.7571 87.3387C99.1556 88.72 99.9505 90.595 99.9692 92.5566C99.9878 94.5182 99.2288 96.4079 97.8568 97.8153C96.4634 99.2016 94.5772 99.9844 92.6078 99.9937C90.6384 100.003 88.7449 99.238 87.3384 97.865L68.0961 78.9474C66.8876 77.7472 66.0413 76.2334 65.6534 74.578C65.2946 72.9259 64.4432 71.4203 63.2108 70.2582Z", "fill", "url(#paint0_linear_486_60863)"], [2, "mix-blend-mode", "multiply"], ["d", "M65.6036 74.4291C65.2204 72.8404 64.3904 71.3936 63.2108 70.2582L61.7651 68.8183C61.3325 68.3934 60.989 67.887 60.7546 67.3287C60.5201 66.7704 60.3994 66.1713 60.3994 65.5661C60.3994 64.9609 60.5201 64.3618 60.7546 63.8035C60.989 63.2452 61.3325 62.7388 61.7651 62.3139C62.1884 61.8797 62.6942 61.5337 63.2529 61.296C63.8117 61.0582 64.4123 60.9333 65.0199 60.9287C65.6275 60.9241 66.2299 61.0398 66.7922 61.269C67.3546 61.4983 67.8655 61.8366 68.2955 62.2642L69.7412 63.7041C70.8884 64.8494 72.3419 65.6422 73.9286 65.9881C72.7609 67.6006 71.4781 69.1272 70.0901 70.5562C68.6886 71.9514 67.1893 73.2456 65.6036 74.4291Z", "fill", "#FFE380"], ["d", "M77.5172 38.3317C77.4559 30.7007 75.1268 23.2587 70.8237 16.9447C66.5206 10.6307 60.4363 5.7276 53.3385 2.85408C46.2407 -0.0194379 38.4475 -0.734646 30.942 0.798697C23.4365 2.33204 16.5552 6.04523 11.1662 11.4698C7.58113 15.068 4.74821 19.3388 2.83147 24.0349C0.914734 28.731 -0.0477557 33.7591 -0.000278521 38.8283C0.0204902 43.8963 1.04878 48.91 3.02524 53.5802C5.00169 58.2503 7.88718 62.4843 11.5152 66.0378C16.9734 71.3938 23.902 75.0194 31.4269 76.4573C38.9518 77.8951 46.7357 77.0807 53.7963 74.1168C60.857 71.1529 66.878 66.1724 71.0996 59.8036C75.3213 53.4349 77.5544 45.9633 77.5172 38.3317Z", "fill", "#0065FF"], ["d", "M17.7463 17.9245C21.1565 14.4856 25.3656 11.9374 30.0006 10.5055C34.6357 9.07372 39.5537 8.80247 44.3191 9.71583C49.0846 10.6292 53.5503 12.699 57.3209 15.7418C61.0915 18.7847 64.0505 22.7068 65.9358 27.1607C67.8212 31.6146 68.5748 36.4628 68.1297 41.276C67.6847 46.0892 66.0549 50.7189 63.3846 54.7549C60.7142 58.7909 57.0859 62.1088 52.8208 64.4146C48.5557 66.7204 43.7855 67.943 38.9327 67.9742C33.1058 67.988 27.4048 66.2864 22.5458 63.083C17.6869 59.8796 13.8868 55.3174 11.623 49.9695C9.35916 44.6216 8.73263 38.7266 9.8221 33.0252C10.9116 27.3238 13.6684 22.0702 17.7463 17.9245Z", "fill", "#DEEBFF"], ["d", "M20.04 16.3357C17.0651 18.8081 14.6157 21.8471 12.8352 25.2746C11.0547 28.7021 9.97899 32.4491 9.67114 36.296C9.02243 44.0576 11.493 51.7585 16.5402 57.7073C21.5874 63.6561 28.7987 67.3666 36.5904 68.0239C42.4072 68.5281 48.2432 67.2994 53.3577 64.4938C58.4721 61.6882 62.6342 57.4323 65.3157 52.2662C67.9972 47.1002 69.077 41.257 68.4182 35.4786C67.7593 29.7001 65.3915 24.247 61.6153 19.8114C59.1176 16.8596 56.0597 14.4277 52.6169 12.655C49.174 10.8823 45.4139 9.80362 41.5518 9.48075C37.6897 9.15788 33.8016 9.59718 30.1102 10.7735C26.4188 11.9498 22.9968 13.8399 20.04 16.3357Z", "fill", "#B2D4FF"], ["d", "M39.232 13.0587C35.374 12.7334 31.4895 13.1714 27.8021 14.3473C24.1148 15.5233 20.6973 17.414 17.7464 19.9107C16.0125 21.362 14.4564 23.012 13.1104 24.8263C10.7828 29.1152 9.5648 33.9142 9.56641 38.7896C9.56801 43.665 10.7892 48.4632 13.1195 52.7506C15.4499 57.038 18.8161 60.6795 22.9138 63.3461C27.0116 66.0128 31.7119 67.6204 36.5899 68.0239C40.4533 68.3737 44.348 67.9523 48.0458 66.7843C51.7437 65.6162 55.1704 63.7251 58.1253 61.2215C59.8476 59.7395 61.4021 58.0746 62.7614 56.2563C65.0767 51.9619 66.2835 47.1613 66.273 42.2869C66.2625 37.4124 65.0352 32.6171 62.7014 28.3325C60.3677 24.048 57.0008 20.4088 52.9039 17.7426C48.807 15.0763 44.1087 13.4667 39.232 13.0587Z", "fill", "#DEEBFF"], ["d", "M38.7334 57.0507L60.2688 35.6008H45.9119L38.7334 57.0507Z", "fill", "#0065FF"], ["d", "M31.6045 35.6008L38.7331 57.0507L45.9116 35.6008H31.6045Z", "fill", "#2684FF"], ["d", "M17.248 35.6008L38.7336 57.0507L31.605 35.6008H17.248Z", "fill", "#B2D4FF"], ["d", "M53.0906 26.4647L45.9121 35.6008H60.269L53.0906 26.4647Z", "fill", "#2684FF"], ["d", "M38.7331 26.4647L31.6045 35.6008H45.9116L38.7331 26.4647Z", "fill", "#4C9AFF"], ["d", "M31.6052 35.6008L38.7338 26.4647H24.4268L31.6052 35.6008Z", "fill", "#B2D4FF"], ["d", "M45.9119 35.6008L53.0903 26.4647H38.7334L45.9119 35.6008Z", "fill", "#0065FF"], ["d", "M24.4265 26.4647L17.248 35.6008H31.605L24.4265 26.4647Z", "fill", "white"], ["d", "M24.4265 31.5789C24.7036 30.3356 25.3281 29.1957 26.2278 28.2908C27.1275 27.3859 28.2658 26.7528 29.5113 26.4647C28.2645 26.1971 27.1216 25.577 26.2197 24.6787C25.3178 23.7804 24.6952 22.642 24.4265 21.4001C24.1466 22.6369 23.5203 23.7691 22.6202 24.6656C21.7202 25.562 20.5834 26.1858 19.3418 26.4647C20.5847 26.7582 21.7201 27.3931 22.6189 28.2971C23.5177 29.2011 24.144 30.3381 24.4265 31.5789Z", "fill", "#4C9AFF"], ["d", "M54.5864 57.0506C54.7898 56.1535 55.2443 55.3322 55.8972 54.6819C56.5501 54.0316 57.3747 53.5789 58.2753 53.3763C57.3797 53.163 56.5609 52.7067 55.9098 52.0582C55.2586 51.4096 54.8006 50.5941 54.5864 49.702C54.383 50.5991 53.9285 51.4204 53.2756 52.0707C52.6227 52.721 51.7981 53.1737 50.8975 53.3763C51.8007 53.5734 52.6283 54.0242 53.2821 54.6754C53.9359 55.3267 54.3886 56.1509 54.5864 57.0506Z", "fill", "white"], ["id", "paint0_linear_486_60863", "x1", "99.9804", "y1", "80.4618", "x2", "60.4092", "y2", "80.4618", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FF991F"], ["offset", "1", "stop-color", "#FFC400"], ["id", "clip0_486_60863"], [1, "banner-table", "pt-[10rem]"], [1, "second-row"], [1, "buttons", "flex", "items-center", "w-full", "justify-end", "gap-8", "mb-4", "mt-7"], [1, "dots", "flex", "gap-1"], [1, "dot", "w-[10px]", "h-[10px]", "transition-all", "rounded-full", "bg-black", "[&.active]:w-[80px]", "[&.active]:bg-gray-600", 3, "ngClass"], [1, "arrows", "flex", "gap-4"], [1, "left", "bg-gray-200", "rounded-full", 3, "click"], [1, "right", "bg-gray-200", "rounded-full", 3, "click"], [1, "slider-container", "rounded-md", "shadow-2xl", "border-[1px]", "border-solid", "border-gray-200"], [1, "flex-[70%]", "overflow-hidden", "h-[400px]", "do-slider"], [1, "do-more", "pt-[10rem]"], [1, "third-row"], [1, "top", "text-center"], [1, "text-[35px]", "text-gray-800", "font-semibold"], [1, "text-gray-800", "text-xl"], [1, "bg-blue-600", "py-3", "px-4", "text-white", "rounded-md", "font-semibold", "mt-4"], [1, "middle", "flex", "md:flex-row", "flex-col", "mt-14"], [1, "box", "relative", "flex-1", "flex", "h-[500px]", "flex-col", "border-[1px]", "border-solid", "border-gray-300", "py-6", "px-5"], [1, "subtitle", "uppercase", "font-bold", "text-gray-800"], [1, "value", "text-gray-800"], [1, "text-[45px]", "mx-1"], [1, "value-info", "text-gray-600", "font-semibold"], [1, "mt-10", "font-semibold"], [1, "absolute", "bottom-10", "self-start", "border-[1px]", "border-solid", "border-blue-500", "py-3", "px-4", "transition-all", "hover:bg-blue-100", "rounded-md"], [1, "box", "flex-1", "relative", "flex", "h-[500px]", "flex-col", "border-[1px]", "border-solid", "border-gray-300", "py-6", "px-5"], [1, "text-[45px]"], [1, "underline", "text-blue-500", "absolute", "bottom-2"], [1, "box", "flex-1", "relative", "flex", "h-[500px]", "flex-col", "border-[2px]", "border-solid", "border-blue-500", "py-6", "px-5"], [1, "absolute", "bottom-10", "self-start", "border-[1px]", "border-solid", "border-blue-500", "py-3", "px-4", "bg-blue-100", "transition-all", "hover:bg-white", "rounded-md"], [1, "sponsor-section", "flex", "container", "md:px-[15em]", "mx-auto", "text-center", "flex-col", "gap-10", "pt-[10rem]"], [1, "title", "font-semibold", "text-xl", "text-gray-800"], [1, "sponsors"], ["src", "/assets/sponsor1.svg", "alt", ""], [1, "marketing-section", "mt-[5rem]", "py-20"], [1, "wrapper", "flex", "container", "md:px-[30em]", "mx-auto", "text-center", "flex-col", "gap-7"], [1, "title", "text-[35px]", "font-bold"], [1, "input-container", "flex", "gap-10"], ["type", "email", "placeholder", "Email", 1, "py-3", "px-2", "rounded-sm", "flex-[65%]", "text-black", "focus:outline", "outline-2", "outline-offset-2", "outline-white"], [1, "bg-[#0065FF]", "py-3", "px-2", "font-semibold", "tracking-wider", "text-white", "flex-[35%]"], [1, "footer-section", "bg-[#172B4D]", "pt-8"], [1, "wrapper-footer", "mb-4", "text-white", "container", "mx-auto", "md:px-[10em]", "flex", "gap-2"], [1, "item-footer", "flex-1"], [1, "logo"], ["aria-label", "Atlassian Trello", "fill", "#ffffff", "height", "40", "role", "img", "viewBox", "0 0 312 105", "width", "112", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "Logo-sc-1anfgcw-0", "gguOta"], ["id", "trello-logo-gradient-white", "x1", "49.992%", "x2", "49.992%", "y1", "100%", "y2", ".016%"], ["offset", "0%", "stop-color", "#ffffff", "stop-opacity", ".5"], ["offset", "15%", "stop-color", "#ffffff", "stop-opacity", ".65"], ["offset", "30%", "stop-color", "#ffffff", "stop-opacity", ".78"], ["offset", "46%", "stop-color", "#ffffff", "stop-opacity", ".88"], ["offset", "62%", "stop-color", "#ffffff", "stop-opacity", ".95"], ["offset", "80%", "stop-color", "#ffffff", "stop-opacity", ".99"], ["offset", "100%", "stop-color", "#ffffff"], ["d", "M42.6 5.2 42.6 17.3 28.3 17.3 28.3 63 14.5 63 14.5 17.2.2 17.2.2 5.2z", "transform", "translate(87 40)"], ["d", "M60.2,63 L47.5,63 L47.5,18 L60.2,18 L60.2,26.6 C62.6,20.5 66.5,16.9 73.4,17.4 L73.4,30.7 C64.4,30 60.2,32.2 60.2,39.4 L60.2,63 Z", "transform", "translate(87 40)"], ["d", "M143,63.4 C134.6,63.4 129.4,59.4 129.4,49.9 L129.4,0.6 L142.2,0.6 L142.2,48.1 C142.2,50.8 144,51.8 146.2,51.8 C146.8,51.8 147.5,51.8 148.1,51.7 L148.1,62.8 C146.4,63.2 144.7,63.4 143,63.4 L143,63.4 Z", "transform", "translate(87 40)"], ["d", "M169.8,63.4 C161.4,63.4 156.2,59.4 156.2,49.9 L156.2,0.6 L169,0.6 L169,48.1 C169,50.8 170.8,51.8 173,51.8 C173.6,51.8 174.3,51.8 174.9,51.7 L174.9,62.8 C173.2,63.2 171.5,63.4 169.8,63.4 L169.8,63.4 Z", "transform", "translate(87 40)"], ["d", "M181,40.5 C181,26.6 189,17.1 202.8,17.1 C216.6,17.1 224.4,26.6 224.4,40.5 C224.4,54.4 216.5,64.1 202.8,64.1 C189.1,64.1 181,54.3 181,40.5 Z M193.5,40.5 C193.5,47.3 196.3,52.6 202.8,52.6 C209.3,52.6 211.9,47.2 211.9,40.5 C211.9,33.8 209.1,28.5 202.8,28.5 C196.5,28.5 193.5,33.7 193.5,40.5 Z", "transform", "translate(87 40)"], ["d", "M90.6,44.6 C94.2,45 97.8,45.2 101.3,45.2 C111.1,45.2 119.3,42.6 119.3,33.1 C119.3,23.9 110.8,17 100.6,17 C86.9,17 78.1,27 78.1,40.8 C78.1,55.2 85.7,63.8 102.8,63.8 C107.9,63.9 112.9,63 117.7,61.2 L117.7,50.4 C113.3,51.8 108.3,53.2 103.3,53.2 C96.5,53.3 91.8,51 90.6,44.6 L90.6,44.6 Z M100.4,26.9 C104,26.9 106.9,29.3 106.9,32.7 C106.9,37 102.3,38.4 97.1,38.4 C94.9,38.4 92.6,38.2 90.4,37.9 C90.6,35.8 91.2,33.8 92.2,31.9 C93.8,28.8 97,26.9 100.4,26.9 Z", "transform", "translate(87 40)"], ["fill", "url(#trello-logo-gradient-white)", "d", "M55.3,40.6 L7.8,40.6 C3.7,40.6 0.4,43.9 0.4,48 L0.4,95.6 C0.4,99.7 3.7,103 7.8,103 L55.3,103 C59.4,103 62.7,99.7 62.7,95.6 L62.7,48 C62.7,43.9 59.4,40.6 55.3,40.6 Z M27.2,85.5 C27.2,86.9 26.1,88 24.7,88 L14.3,88 C12.9,88 11.8,86.9 11.8,85.5 L11.8,54.6 C11.8,53.2 12.9,52.1 14.3,52.1 L24.7,52.1 C26.1,52.1 27.2,53.2 27.2,54.6 L27.2,85.5 Z M51.2,71.3 C51.2,72.7 50.1,73.8 48.8,73.8 L38.3,73.8 C36.9,73.8 35.8,72.7 35.8,71.3 L35.8,54.6 C35.8,53.2 36.9,52.1 38.3,52.1 L48.7,52.1 C50.1,52.1 51.2,53.2 51.2,54.6 L51.2,71.3 Z"], ["opacity", ".7"], ["d", "M98.9,16.7 C98.9,12.7 96.3,10.9 91.5,9.7 C88.5,8.9 87.8,8.3 87.8,7.3 C87.8,6.1 88.9,5.5 90.9,5.5 C93.3,5.6 95.7,6.2 97.9,7.3 L97.9,2.3 C95.8,1.3 93.4,0.8 91.1,0.8 C85.8,0.8 82.9,3.3 82.9,7.4 C82.9,11.3 85.5,13.3 89.9,14.3 C93,15 93.9,15.5 93.9,16.8 C93.9,17.8 93.2,18.6 90.9,18.6 C88.1,18.5 85.3,17.7 82.8,16.3 L82.8,21.6 C85.3,22.8 88,23.5 90.8,23.5 C96.2,23.5 98.9,20.8 98.9,16.7 L98.9,16.7 Z", "transform", "translate(94)"], ["d", "M159.3 1.2 159.3 23.2 164 23.2 164 6.4 166 10.8 172.6 23.1 178.5 23.1 178.5 1.1 173.8 1.1 173.8 15.3 172 11.2 166.7 1.1 159.3 1.1z", "transform", "translate(94)"], ["d", "M129.6 1.2 124.5 1.2 124.5 23.2 129.6 23.2z", "transform", "translate(94)"], ["d", "M43.2 1.2 43.2 23.2 53.7 23.2 55.3 18.4 48.3 18.4 48.3 1.2z", "transform", "translate(94)"], ["d", "M22.4 1.2 22.4 6 28.1 6 28.1 23.2 33.2 23.2 33.2 6 39.3 6 39.3 1.2z", "transform", "translate(94)"], ["d", "M15,1.2 L8.3,1.2 L0.6,23.2 L6.5,23.2 L7.6,19.5 C8.9,19.9 10.3,20.1 11.7,20.1 C13.1,20.1 14.5,19.9 15.8,19.5 L16.9,23.2 L22.8,23.2 L15,1.2 Z M11.6,15.5 C10.6,15.5 9.7,15.4 8.8,15.1 L11.6,5.5 L14.4,15.1 C13.5,15.4 12.6,15.5 11.6,15.5 Z", "transform", "translate(94)"], ["d", "M71.7,1.2 L65,1.2 L57.3,23.2 L63.2,23.2 L64.3,19.5 C65.6,19.9 67,20.1 68.4,20.1 C69.8,20.1 71.2,19.9 72.5,19.5 L73.6,23.2 L79.5,23.2 L71.7,1.2 Z M68.4,15.5 C67.4,15.5 66.5,15.4 65.6,15.1 L68.4,5.5 L71.2,15.1 C70.3,15.4 69.3,15.5 68.4,15.5 Z", "transform", "translate(94)"], ["d", "M148,1.2 L141.3,1.2 L133.6,23.2 L139.5,23.2 L140.6,19.5 C141.9,19.9 143.3,20.1 144.7,20.1 C146.1,20.1 147.5,19.9 148.8,19.5 L149.9,23.2 L155.8,23.2 L148,1.2 Z M144.6,15.5 C143.6,15.5 142.7,15.4 141.8,15.1 L144.6,5.5 L147.4,15.1 C146.5,15.4 145.6,15.5 144.6,15.5 Z", "transform", "translate(94)"], ["d", "M119.2,16.7 C119.2,12.7 116.6,10.9 111.8,9.7 C108.8,8.9 108.1,8.3 108.1,7.3 C108.1,6.1 109.2,5.5 111.1,5.5 C113.5,5.6 115.9,6.2 118.1,7.3 L118.1,2.3 C115.9,1.3 113.6,0.8 111.2,0.8 C105.9,0.8 103,3.3 103,7.4 C103,11.3 105.6,13.3 110,14.3 C113.1,15 114,15.5 114,16.8 C114,17.8 113.3,18.6 111,18.6 C108.2,18.5 105.4,17.7 102.9,16.3 L102.9,21.6 C105.4,22.8 108.1,23.5 110.9,23.5 C116.6,23.5 119.2,20.8 119.2,16.7 L119.2,16.7 Z", "transform", "translate(94)"], [1, "font-semibold", "hover:underline", "cursor-pointer"], [1, "item-footer", "p-3", "flex-1", "hover:bg-white/20", "cursor-pointer"], [1, "title"], [1, "subfooter", "border-t-[1px]", "py-6", "border-solid", "border-white/20", "text-white", "mx-auto", "w-[95%]", "flex", "justify-around"], [1, "left", "flex-[65%]", "flex", "items-center", "justify-center", "gap-8"], [1, "item-footer"], [1, "right", "flex-[35%]", "flex", "gap-10"], [1, "icon", "w-[30px]", "h-[30px]", "flex", "items-center", "justify-center", "hover:scale-75", "border-white", "border-[1px]", "border-solid", "p-1", "rounded-full"], ["fill", "white", "height", "16", "viewBox", "0 0 16 16", "width", "16"], ["d", "m7.9365485 4.00948853c2.1378796 0 3.8773322 1.74591892 3.8773322 3.89174604 0 2.14582713-1.7394526 3.89174603-3.8773322 3.89174603-2.13787961 0-3.87703593-1.7459189-3.87703593-3.89174603 0-2.14582712 1.73915632-3.89174604 3.87703593-3.89174604zm0 1.39893537c-1.36946341 0-2.48357803 1.11825631-2.48357803 2.49281067 0 1.37455435 1.11411462 2.49281063 2.48357803 2.49281063 1.36975965 0 2.483578-1.11825628 2.483578-2.49281063 0-1.37455436-1.11381835-2.49281067-2.483578-2.49281067zm4.1036506-2.58676679c.5095127 0 .9227511.41477468.9227511.92618144 0 .5117041-.4132384.92647878-.9227511.92647878-.5098089 0-.9230474-.41477468-.9230474-.92647878 0-.51140676.4132385-.92618144.9230474-.92618144zm-7.31121058-1.33500953c-1.79099628 0-3.24784704 1.46226656-3.24784704 3.25992082v6.3093323c0 1.7976543 1.45685076 3.2599209 3.24784704 3.2599209h6.28566818c1.7909963 0 3.2481433-1.4622666 3.2481433-3.2599209v-6.3093323c0-1.79765426-1.457147-3.25992082-3.2481433-3.25992082zm6.28566818 14.31582152h-6.28566818c-2.60740146 0-4.72898852-2.1291766-4.72898852-4.7465684v-6.3093323c0-2.61739173 2.12158706-4.7465684 4.72898852-4.7465684h6.28566818c2.6076977 0 4.7292848 2.12917667 4.7292848 4.7465684v6.3093323c0 2.6173918-2.1215871 4.7465684-4.7292848 4.7465684z"], ["fill", "white", "height", "16", "viewBox", "0 0 8 16", "width", "8"], ["d", "m1.61157724 7.96343677v7.63998533c0 .1097869.08892957.199047.19830983.199047h2.82684468c.10938027 0 .19799997-.0892601.19799997-.199047v-7.76438973h2.04940817c.10287322 0 .1887042-.07930781.19738025-.18225245l.1970704-2.33942478c.00991549-.1160071-.08118309-.21584163-.19738026-.21584163h-2.24647856v-1.65986573c0-.38876376.31419714-.70412892.70183089-.70412892h1.57935189c.10969013 0 .19830983-.08926016.19830983-.19904704v-2.33942478c0-.11009789-.0886197-.19904704-.19830983-.19904704h-2.66850667c-1.56602795 0-2.83583059 1.27421209-2.83583059 2.8460617v2.25545181h-1.41326741c-.10938026 0-.19830983.08926015-.19830983.19904704v2.33942477c0 .10978689.08892957.19904705.19830983.19904705h1.41326741z"], ["d", "m3.36409209 14.2159091h-3.17642414v-9.59186348h3.17642414z"], ["d", "m1.77597952 3.31427557h-.0206972c-1.06590614 0-1.75528232-.7364835-1.75528232-1.65693805 0-.94122869.71047144-1.65733752 1.79707473-1.65733752 1.08660338 0 1.75528236.71610883 1.77597957 1.65733752 0 .92045455-.68937619 1.65693805-1.79707478 1.65693805z"], ["d", "m14.8176077 14.2159091h-3.1760261v-5.13141424c0-1.28959517-.4599158-2.16910068-1.6092078-2.16910068-.87744213 0-1.40004662.59326174-1.62970603 1.16594902-.08398287.20494499-.10448108.4913885-.10448108.7780318v5.3565341h-3.17622514s.04159346-8.69198329 0-9.59186348h3.17622514v1.35810992c.42210364-.65358665 1.17735263-1.58322973 2.86258281-1.58322973 2.0898209 0 3.6568382 1.37089396 3.6568382 4.31702764z"], ["fill", "white", "height", "16", "viewBox", "0 0 20 16", "width", "20"], ["d", "m19.0426025 1.89416831c-.6070809.27573601-1.2752956.44311943-1.9307418.55341384.3110854-.05242868.7695883-.61749334.9529894-.84623773.2797448-.34874781.512285-.74604069.6430647-1.17517915.0166377-.03339901.0294061-.07573031-.0042561-.10097375-.0417876-.0166995-.0688722-.00815557-.1021475.00854393-.7316699.39340928-1.4881028.67885432-2.293288.88080182-.0669375.01669951-.1164636 0-.1582512-.04194294-.0669375-.07573032-.1296189-.1468003-.2004257-.20583111-.3385569-.28894028-.7018769-.51574287-1.1112406-.68312628-.5374349-.22020046-1.1247829-.313407-1.7040054-.27534766-.5633588.03650589-1.1166575.1961221-1.616561.4582655-.5010643.26253176-.9479595.62797907-1.3039279 1.0691567-.36834997.45593533-.63996937.99459147-.77887445 1.56548154-.13426201.55108368-.12342819 1.09634195-.04140068 1.65325103.01238152.09242982.00425615.10485736-.07893213.09242982-3.15032069-.47069303-5.76165874-1.60198743-7.88121865-4.0265226-.09208749-.10524572-.14200046-.10524572-.21745029.00815558-.92745255 1.3953796-.47746201 3.63777365.68137003 4.73955264.15438196.1468003.31302007.29360061.48442661.42758501-.0626814.0128159-.83381738-.07106999-1.52099123-.42758501-.09170057-.05864245-.13813124-.02485508-.1462566.07961392-.00851229.15107227.00425614.289717.02476302.45321681.17798422 1.41479763 1.15418898 2.72318446 2.49100524 3.23349028.15863811.06718638.33391387.12582883.50532041.15534423-.3048947.06679802-.6183017.11495474-1.49158515.04621491-.10872514-.02097147-.15051274.03339901-.10872514.13825637.65622008 1.79539099 2.07274232 2.32977519 3.13368304 2.63424989.14200046.0248551.28438783.0248551.42677521.0582541-.00851229.0128159-.01702458.0128159-.02514994.0252434-.35209922.5386562-1.57206498.9394443-2.14045371 1.1386733-1.03308233.3623404-2.15825213.5254519-3.25053355.4174876-.17450193-.0256318-.21125954-.02369-.25885097 0-.04759143.0295154-.00580383.0714584.05029989.1172849.22170643.1468003.44689516.2769011.67672696.4027299.69375153.3689426 1.41690916.6629316 2.17295517.8722579 3.90481903 1.082361 8.30335081.2869985 11.23506041-2.63658 2.3025741-2.2963762 3.109307-5.46268009 3.109307-8.63286759 0-.12427538.1462566-.19301521.2329271-.25825979.5989556-.45166336 1.0752569-.99226131 1.5221521-1.59616202.1002128-.13553785.0941388-.25631799.0941388-.30563979 0-.00854393 0-.0166995 0-.0166995 0-.05087524.006074-.03534082-.0716974 0"], ["fill", "white", "height", "14", "viewBox", "0 0 20 14", "width", "20"], ["d", "m12.6695433 7.17708642-4.43152592 2.43950617c-.19286329.10469136-.36604664-.03555555-.36604664-.25520987v-5.00740741c0-.22281482.17869373-.36266667.37155701-.25244445l4.46183305 2.56790124c.1971928.11259259.163737.39901234-.0358175.50765432zm7.0103835-2.87683951c0-2.37511111-1.9180056-4.30024691-4.2839264-4.30024691h-11.11168033c-2.3659208 0-4.28432007 1.9251358-4.28432007 4.30024691v5.22666667c0 2.37511112 1.91839927 4.30024692 4.28432007 4.30024692h11.11168033c2.3659208 0 4.2839264-1.9251358 4.2839264-4.30024692z"], ["class", "slide slide-animation nonDraggableImage w-full object-cover !relative h-full", 3, "src", 4, "ngIf"], [1, "slide", "slide-animation", "nonDraggableImage", "w-full", "object-cover", "!relative", "h-full", 3, "src"], ["class", "slide slide-animation flex nonDraggableImage w-full object-cover !relative h-full", 4, "ngIf"], [1, "slide", "slide-animation", "flex", "nonDraggableImage", "w-full", "object-cover", "!relative", "h-full"], [1, "left", "flex", "flex-col", "justify-around", "p-3", "relative"], [1, "description", "text-2xl"], [1, "author-container"], [1, "author", "font-semibold", "border-t-[1px]", "border-solid", "border-black", "pt-4"], [1, "authorInfo", "font-semibold", "block"], [1, "link", "text-blue-500", "cursor-pointer", "underline", "absolute", "right-6", "bottom-4"], [1, "right", "info", "flex", "flex-col", "px-3", "py-6"], [1, "rounded-tr-md", "rounded-br-md", "h-full", "text-[34px]", "font-semibold"], [1, "!text-gray-200", "underline"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Trello helps teams work more collaboratively and get more done. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Keep everything in the same place \u2014 even if your team isn\u2019t. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Sign Up, It's free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "TRELLO 101");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Work with any team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who\u2019s doing what and what needs to get done. Learn more in our guide for getting started. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_33_listener() { return ctx.activeSlide(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "BOARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Trello boards keep tasks organized and work moving forward. In a glance, see everything from \u201Cthings to do\u201D to \u201Caww yeah, we did it!\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_38_listener() { return ctx.activeSlide(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "LISTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "The different stages of a task. Start as simple as To Do, Doing or Done\u2014or build a workflow custom fit to your team\u2019s needs. There\u2019s no wrong way to Trello.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_43_listener() { return ctx.activeSlide(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "CARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, HomeComponent_ng_template_49_Template, 1, 1, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28)(51, "div", 29)(52, "div", 30)(53, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "TRELLO IN ACTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Workflows for any project, big or small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 33)(58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_58_listener() { return ctx.scrollDiv("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "rect", 36)(61, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_62_listener() { return ctx.scrollDiv("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "rect", 39)(65, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 41)(67, "div", 42, 43)(69, "div", 44)(70, "div", 45)(71, "div", 46)(72, "div", 47)(73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 50)(76, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Project management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Keep tasks in order, deadlines on track, and team members aligned with Trello.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 45)(81, "div", 46)(82, "div", 53)(83, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 50)(86, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Meetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Empower your team meetings to be more productive, empowering, and dare we say\u2014fun.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 45)(91, "div", 46)(92, "div", 55)(93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 50)(96, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Onboarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Onboarding to a new company or project is a snap with Trello\u2019s visual layout of to-do\u2019s, resources, and progress tracking.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 45)(101, "div", 46)(102, "div", 57)(103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 50)(106, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Task management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team\u2019s projects a cohesive success every time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 45)(111, "div", 46)(112, "div", 59)(113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "svg", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "path", 61)(116, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 50)(118, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Brainstorming");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Unleash your team\u2019s creativity and keep ideas visible, collaborative, and actionable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 63)(123, "div", 46)(124, "div", 64)(125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 50)(128, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Resource Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Save time with a well-designed hub that helps teams find information easily and quickly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 66)(133, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams. Customize it to make it yours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Explore all Use Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 69)(138, "div", 70)(139, "h1", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "See work in a whole new way");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " View your team\u2019s projects from every angle and bring a fresh perspective to the task at hand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Discover all Trello views");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 74)(146, "div", 75)(147, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 78)(150, "div", 79)(151, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "svg", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Hit deadlines every time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what\u2019s coming down the pipeline and identify any gaps that might impede your team\u2019s progress.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Learn more about Timeline view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 86)(161, "div", 87)(162, "div", 79)(163, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "svg", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Stay on top of tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "Learn more about Calendar view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 90)(175, "div", 91)(176, "div", 92)(177, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "powerful ways to grow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "h1", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Do more with Trello");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Trello\u2019s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 95)(184, "div", 96)(185, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "svg", 97)(187, "g", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "path", 99)(189, "rect", 100)(190, "path", 101)(191, "path", 102)(192, "path", 103)(193, "path", 104)(194, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "defs")(196, "linearGradient", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "stop", 107)(198, "stop", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "clipPath", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "rect", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Browse Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 96)(208, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "svg", 114)(210, "g", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "rect", 116)(212, "path", 117)(213, "path", 118)(214, "path", 119)(215, "path", 120)(216, "path", 121)(217, "path", 122)(218, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "defs")(220, "linearGradient", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "stop", 125)(222, "stop", 126)(223, "stop", 127)(224, "stop", 128)(225, "stop", 129)(226, "stop", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "clipPath", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Butler Automation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "Get to know Automation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 96)(236, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "svg", 114)(238, "g", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "rect", 116)(240, "path", 134)(241, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "path", 138)(245, "path", 139)(246, "path", 140)(247, "path", 141)(248, "path", 142)(249, "path", 143)(250, "path", 144)(251, "path", 145)(252, "path", 146)(253, "path", 147)(254, "path", 148)(255, "path", 149)(256, "path", 150)(257, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "defs")(259, "linearGradient", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "stop", 153)(261, "stop", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "clipPath", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](263, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "Trello Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "The productivity tool teams love, paired with the features and security needed for scale.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "Explore Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 156)(271, "div", 91)(272, "div", 157)(273, "div", 158)(274, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "div", 160)(276, "div", 160)(277, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "div", 161)(279, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_279_listener() { return ctx.prevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "rect", 36)(282, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_283_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](285, "rect", 39)(286, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 164)(288, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](289, HomeComponent_ng_template_289_Template, 1, 1, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 166)(291, "div", 91)(292, "div", 167)(293, "div", 168)(294, "h2", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "Trello priced your way");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "p", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "Trusted by millions, Trello powers teams all around the world.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "button", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "Compare plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "div", 172)(301, "div", 173)(302, "span", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 175)(305, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "span", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "small", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "Free for your whole team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "p", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "For individuals or teams looking to organize any project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "button", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 180)(318, "span", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "div", 175)(321, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](326, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "small", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Per user/month if billed annually ($6 billed monthly)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "p", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "For small teams that need to manage work and scale collaboration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "button", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Sign up now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "span", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Learn more about Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "div", 183)(336, "span", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 175)(339, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "small", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "Per user/month if billed annually ($12.50 billed monthly)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "p", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "button", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "Try for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "span", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "Learn more about Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 180)(354, "span", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "div", 175)(357, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "17.50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](362, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "small", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Per user/month - billed annually ($210.00 annual price per user)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "p", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, "For organizations that need to connect work across teams with more security and controls.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "button", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "Contact sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "span", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "Learn more about Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "div", 185)(372, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "Join over 2,000,000 teams worldwide that are using Trello to get more done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](375, "img", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "div", 189)(377, "div", 190)(378, "h1", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](379, "Get started with Trello today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "input", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "button", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "Sign Up, It's free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "footer", 195)(385, "div", 196)(386, "div", 197)(387, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "svg", 199)(389, "defs")(390, "linearGradient", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](391, "stop", 201)(392, "stop", 202)(393, "stop", 203)(394, "stop", 204)(395, "stop", 205)(396, "stop", 206)(397, "stop", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](398, "path", 208)(399, "path", 209)(400, "path", 210)(401, "path", 211)(402, "path", 212)(403, "path", 213)(404, "path", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "g", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "path", 216)(407, "path", 217)(408, "path", 218)(409, "path", 219)(410, "path", 220)(411, "path", 221)(412, "path", 222)(413, "path", 223)(414, "path", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "span", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](416, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "div", 226)(418, "h5", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, "About Trello");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "What's behind the boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 226)(423, "h5", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "Learn about open roles on the Trello team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "div", 226)(428, "h5", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](429, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "Download the Trello App for your Desktop or Mobile devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "div", 226)(433, "h5", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](436, "Need anything? Get in touch and we can help.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "div", 228)(438, "div", 229)(439, "small", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "small", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, " Notice at Collection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "small", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, " Terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "small", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](446, " Copyright \u00A9 2023 Antonio K. Trello Mini Clone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "div", 231)(448, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "svg", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](450, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "svg", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](453, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "svg", 233)(456, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](457, "path", 237)(458, "path", 238)(459, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](461, "svg", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](462, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "svg", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](465, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.isCurrentSlideIndex(0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, ctx.isCurrentSlideIndex(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, ctx.isCurrentSlideIndex(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideAnimation", ctx.currentIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx.isCurrentSlideTestimonialIndex(0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, ctx.isCurrentSlideTestimonialIndex(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c1, ctx.isCurrentSlideTestimonialIndex(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideAnimation", ctx.currentTestimonialIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slidesTestimonial);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], encapsulation: 2, data: { animation: [_shared_animations_slide_animation__WEBPACK_IMPORTED_MODULE_0__.slideAnimation] } });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2093);
/* harmony import */ var _shared_modules_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/modules/carousel/carousel.module */ 1411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    },
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _shared_modules_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_modules_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule] }); })();


/***/ }),

/***/ 5774:
/*!******************************************************!*\
  !*** ./src/app/shared/animations/slide.animation.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideAnimation": () => (/* binding */ slideAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const slideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':increment', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(100%)',
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*')),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(-100%)',
            })),
        ]),
    ])),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':decrement', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(-100%)',
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*')),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(100%)',
            })),
        ]),
    ])),
]);


/***/ }),

/***/ 1411:
/*!************************************************************!*\
  !*** ./src/app/shared/modules/carousel/carousel.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselModule": () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _components_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/carousel.component */ 6842);
/* harmony import */ var _components_carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carousel-item.directive */ 8830);
/* harmony import */ var _components_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel-item-element.directive */ 4570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class CarouselModule {
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_components_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent,
        _components_carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__.CarouselItemDirective,
        _components_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_2__.CarouselItemElementDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_components_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent,
        _components_carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__.CarouselItemDirective,
        _components_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_2__.CarouselItemElementDirective] }); })();


/***/ }),

/***/ 4570:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/modules/carousel/components/carousel-item-element.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselItemElementDirective": () => (/* binding */ CarouselItemElementDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CarouselItemElementDirective {
}
CarouselItemElementDirective.ɵfac = function CarouselItemElementDirective_Factory(t) { return new (t || CarouselItemElementDirective)(); };
CarouselItemElementDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemElementDirective, selectors: [["", 8, "carousel-item"]] });


/***/ }),

/***/ 8830:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/modules/carousel/components/carousel-item.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselItemDirective": () => (/* binding */ CarouselItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
CarouselItemDirective.ɵfac = function CarouselItemDirective_Factory(t) { return new (t || CarouselItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
CarouselItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemDirective, selectors: [["", "carouselItem", ""]] });


/***/ }),

/***/ 6842:
/*!**************************************************************************!*\
  !*** ./src/app/shared/modules/carousel/components/carousel.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-item.directive */ 8830);
/* harmony import */ var _carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-item-element.directive */ 4570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);








const _c0 = ["carousel"];
function CarouselComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", item_r3.tpl);
} }
function CarouselComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.prev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_ng_container_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class CarouselComponent {
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
        console.log(this.items);
    }
    buildAnimation(offset) {
        return this.builder.build([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(this.timing, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: `translateX(-${offset}px)` })),
        ]);
    }
    /**
     * Progresses the carousel forward by 1 slide.
     */
    next() {
        // if (this.currentSlide + 1 === this.items.length) return;
        this.currentSlide = (this.currentSlide + 1) % this.items?.length;
        this.transitionCarousel();
    }
    /**
     * Regresses the carousel backwards by 1 slide.
     */
    prev() {
        // if (this.currentSlide === 0) return;
        this.currentSlide =
            (this.currentSlide - 1 + this.items?.length) % this.items?.length;
        this.transitionCarousel();
    }
    ngAfterViewInit() {
        this.reSizeCarousel();
    }
    /**
     * Listens for changes to the viewport size and triggers a re-sizing of the carousel.
     */
    onResize(event) {
        this.reSizeCarousel();
    }
    /**
     * Re-sizes the carousel container and triggers `this.transitionCarousel()` to reset the childrens' positions.
     *
     * For use on initial load, and when changing viewport size.
     */
    reSizeCarousel() {
        // re-size the container
        this.itemWidth =
            this.itemsElements?.first.nativeElement.getBoundingClientRect().width;
        this.carouselWrapperStyle = {
            width: `${this.itemWidth}px`,
        };
        // trigger a fresh transition to the current slide to reset the position of the children
        this.transitionCarousel();
    }
    /**
     * Animates the carousel to the currently selected slide.
     *
     * **You must set `this.currentSlide` before calling this method, or it will have no effect.**
     */
    transitionCarousel() {
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel?.nativeElement);
        this.player.play();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _carousel_item_directive__WEBPACK_IMPORTED_MODULE_0__.CarouselItemDirective, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_1__.CarouselItemElementDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.itemsElements = _t);
    } }, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { timing: "timing", showControls: "showControls" }, exportAs: ["carousel"], decls: 5, vars: 3, consts: [[1, "carousel-wrapper", 3, "ngStyle"], [1, "carousel-inner"], ["carousel", ""], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "carousel-item"], [3, "ngTemplateOutlet"], [1, "carousel__prev-button", 3, "click"], [1, "carousel__next-button", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_li_3_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CarouselComponent_ng_container_4_Template, 7, 0, "ng-container", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.carouselWrapperStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showControls);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_1__.CarouselItemElementDirective], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 6000px;\n}\n\n.carousel-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.carousel__prev-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 2;\n}\n\n.carousel__next-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 2;\n}\n\n@media (min-width: 1023px) {\n  .carousel__prev-button[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    left: unset;\n    right: 20vw;\n    bottom: 20px;\n  }\n  .carousel__prev-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n    width: unset;\n    height: unset;\n  }\n  .carousel__next-button[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    right: 16vw;\n    bottom: 20px;\n  }\n  .carousel__next-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n    width: unset;\n    height: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwiX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRkY7O0FDZkU7RUQ2QkE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQVZGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFLRjtFQVVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQVJGO0VBZEE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFnQkY7QUFDRiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2JyZWFrcG9pbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNjAwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcm91c2VsX19wcmV2LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNhcm91c2VsX19uZXh0LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZS1tZC1idXR0b24ge1xyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBicC1tZWRpdW0ge1xyXG4gIC5jYXJvdXNlbF9fcHJldi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHJpZ2h0OiAyMHZ3O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGxhcmdlLW1kLWJ1dHRvbigpO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsX19uZXh0LWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHJpZ2h0OiAxNnZ3O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGxhcmdlLW1kLWJ1dHRvbigpO1xyXG4gIH1cclxufVxyXG4iLCIvLyByZXNwb25zaXZlIGJyZWFrcG9pbnRzIHN0b2xlbiBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2xheW91dC9yZXNwb25zaXZlLWxheW91dC1ncmlkLmh0bWwjYnJlYWtwb2ludHNcclxuXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU5OXB4KVxyXG4vLyBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0ICh3ZSBhcmUgYnVpbGRpbmcgbW9iaWxlIGZpcnN0KVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFyZ2UgaGFuZHNldHMsIHRhYmxldHMpXHJcbkBtaXhpbiBicC1zbWFsbCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzIChsYXJnZSB0YWJsZXRzKVxyXG5AbWl4aW4gYnAtbWVkaXVtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzIDwgMTA4MHApXHJcbkBtaXhpbiBicC1sYXJnZSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MzlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcyA+PSAxMDgwcClcclxuQG1peGluIGJwLXhsYXJnZSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 490:
/*!******************************************************************************!*\
  !*** ./src/app/shared/modules/inlineForm/components/inlineForm.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineFormComponent": () => (/* binding */ InlineFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





function InlineFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defaultText);
} }
function InlineFormComponent_form_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.inputPlaceholder);
} }
function InlineFormComponent_form_2_textarea_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 9);
} }
function InlineFormComponent_form_2_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.buttonText, " ");
} }
function InlineFormComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InlineFormComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InlineFormComponent_form_2_input_1_Template, 1, 1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InlineFormComponent_form_2_textarea_2_Template, 1, 0, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InlineFormComponent_form_2_button_3_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.inputType === "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.inputType === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasButton);
} }
const _c0 = function (a0) { return { "inline-form-container-editing": a0 }; };
class InlineFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.title = '';
        this.defaultText = 'Not defined';
        this.hasButton = false;
        this.buttonText = 'Submit';
        this.inputPlaceholder = '';
        this.inputType = 'input';
        this.handleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isEditing = false;
        this.form = this.fb.group({
            title: [''],
        });
    }
    activeEditing() {
        if (this.title) {
            this.form.patchValue({ title: this.title });
        }
        this.isEditing = true;
    }
    onSubmit() {
        if (this.form.value.title) {
            this.handleSubmit.emit(this.form.value.title);
        }
        this.isEditing = false;
        this.form.reset();
    }
}
InlineFormComponent.ɵfac = function InlineFormComponent_Factory(t) { return new (t || InlineFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
InlineFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InlineFormComponent, selectors: [["inline-form"]], inputs: { title: "title", defaultText: "defaultText", hasButton: "hasButton", buttonText: "buttonText", inputPlaceholder: "inputPlaceholder", inputType: "inputType" }, outputs: { handleSubmit: "handleSubmit" }, decls: 3, vars: 5, consts: [[1, "inline-form-container", 3, "ngClass", "click"], ["class", "inline-form-text", 4, "ngIf"], ["class", "inline-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "inline-form-text"], [1, "inline-form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "title", "class", "input-form-input", 3, "placeholder", 4, "ngIf"], ["formControlName", "title", "class", "input-form-input", 4, "ngIf"], ["type", "submit", "class", "inline-form-button", 3, "disabled", 4, "ngIf"], ["type", "text", "formControlName", "title", 1, "input-form-input", 3, "placeholder"], ["formControlName", "title", 1, "input-form-input"], ["type", "submit", 1, "inline-form-button", 3, "disabled"]], template: function InlineFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineFormComponent_Template_div_click_0_listener() { return ctx.activeEditing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InlineFormComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InlineFormComponent_form_2_Template, 4, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditing);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 2488:
/*!****************************************************************!*\
  !*** ./src/app/shared/modules/inlineForm/inlineForm.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineFormModule": () => (/* binding */ InlineFormModule)
/* harmony export */ });
/* harmony import */ var _components_inlineForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inlineForm.component */ 490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class InlineFormModule {
}
InlineFormModule.ɵfac = function InlineFormModule_Factory(t) { return new (t || InlineFormModule)(); };
InlineFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InlineFormModule });
InlineFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InlineFormModule, { declarations: [_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_0__.InlineFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule], exports: [_components_inlineForm_component__WEBPACK_IMPORTED_MODULE_0__.InlineFormComponent] }); })();


/***/ }),

/***/ 9352:
/*!**********************************************************************!*\
  !*** ./src/app/shared/modules/topbar/components/topbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../auth/services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class TopbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 10, vars: 0, consts: [[1, "navbar-boards"], [1, "navbar-left-side"], ["routerLink", "/", 1, "navbar-icon"], ["src", "/assets/home.svg"], ["routerLink", "/boards", 1, "navbar-icon", "navbar-boards-icon"], ["src", "/assets/boards.svg"], ["src", "/assets/trello-logo-white.svg", 1, "navbar-logo"], [1, "navbar-right-side"], [1, "navbar-icon", "navbar-logout-icon", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 1708:
/*!********************************************************!*\
  !*** ./src/app/shared/modules/topbar/topbar.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarModule": () => (/* binding */ TopbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/topbar.component */ 9352);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class TopbarModule {
}
TopbarModule.ɵfac = function TopbarModule_Factory(t) { return new (t || TopbarModule)(); };
TopbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TopbarModule });
TopbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TopbarModule, { declarations: [_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent] }); })();


/***/ }),

/***/ 5693:
/*!***************************************************!*\
  !*** ./src/app/shared/services/boards.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardsService": () => (/* binding */ BoardsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ 3460);





class BoardsService {
    constructor(http, socketService) {
        this.http = http;
        this.socketService = socketService;
    }
    getBoards() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/boards`;
        return this.http.get(url);
    }
    getBoard(boardId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/boards/${boardId}`;
        return this.http.get(url);
    }
    createBoard(title) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/boards`;
        return this.http.post(url, { title });
    }
    updateBoard(boardId, fields) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.boardsUpdate, { boardId, fields });
    }
    deleteBoard(boardId) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.boardsDelete, { boardId });
    }
}
BoardsService.ɵfac = function BoardsService_Factory(t) { return new (t || BoardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService)); };
BoardsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BoardsService, factory: BoardsService.ɵfac });


/***/ }),

/***/ 2855:
/*!****************************************************!*\
  !*** ./src/app/shared/services/columns.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnsService": () => (/* binding */ ColumnsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ 3460);





class ColumnsService {
    constructor(http, socketService) {
        this.http = http;
        this.socketService = socketService;
    }
    getColumns(boardId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/boards/${boardId}/columns`;
        return this.http.get(url);
    }
    createColumn(columnInput) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.columnsCreate, columnInput);
    }
    updateColumn(boardId, columnId, fields) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.columnsUpdate, {
            boardId,
            columnId,
            fields,
        });
    }
    deleteColumn(boardId, columnId) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.columnsDelete, {
            boardId,
            columnId,
        });
    }
}
ColumnsService.ɵfac = function ColumnsService_Factory(t) { return new (t || ColumnsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService)); };
ColumnsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ColumnsService, factory: ColumnsService.ɵfac });


/***/ }),

/***/ 3460:
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 4769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class SocketService {
    constructor() { }
    setupSocketConnection(currentUser) {
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.socketUrl, {
            auth: {
                token: currentUser.token,
            },
        });
    }
    disconnect() {
        if (!this.socket) {
            throw new Error('Socket connection is not established');
        }
        this.socket.disconnect();
    }
    emit(eventName, message) {
        if (!this.socket) {
            throw new Error('Socket connection is not established');
        }
        this.socket.emit(eventName, message);
    }
    listen(eventName) {
        const socket = this.socket;
        if (!socket) {
            throw new Error('Socket connection is not established');
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((subscriber) => {
            socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac });


/***/ }),

/***/ 4973:
/*!**************************************************!*\
  !*** ./src/app/shared/services/tasks.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/socketEvents.enum */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ 3460);





class TasksService {
    constructor(http, socketService) {
        this.http = http;
        this.socketService = socketService;
    }
    getTasks(boardId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/boards/${boardId}/tasks`;
        return this.http.get(url);
    }
    createTask(taskInput) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.tasksCreate, taskInput);
    }
    updateTask(boardId, taskId, fields) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.tasksUpdate, {
            boardId,
            taskId,
            fields,
        });
    }
    deleteTask(boardId, taskId) {
        this.socketService.emit(_types_socketEvents_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEventsEnum.tasksDelete, { boardId, taskId });
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService)); };
TasksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac });


/***/ }),

/***/ 4464:
/*!***************************************************!*\
  !*** ./src/app/shared/types/socketEvents.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketEventsEnum": () => (/* binding */ SocketEventsEnum)
/* harmony export */ });
var SocketEventsEnum;
(function (SocketEventsEnum) {
    SocketEventsEnum["boardsJoin"] = "boards:join";
    SocketEventsEnum["boardsLeave"] = "boards:leave";
    SocketEventsEnum["boardsUpdate"] = "boards:update";
    SocketEventsEnum["boardsUpdateSuccess"] = "boards:updateSuccess";
    SocketEventsEnum["boardsUpdateFailure"] = "boards:updateFailure";
    SocketEventsEnum["boardsDelete"] = "boards:delete";
    SocketEventsEnum["boardsDeleteSuccess"] = "boards:deleteSuccess";
    SocketEventsEnum["boardsDeleteFailure"] = "boards:deleteFailure";
    SocketEventsEnum["columnsCreate"] = "columns:create";
    SocketEventsEnum["columnsCreateSuccess"] = "columns:createSuccess";
    SocketEventsEnum["columnsCreateFailure"] = "columns:createFailure";
    SocketEventsEnum["columnsDelete"] = "columns:delete";
    SocketEventsEnum["columnsDeleteSuccess"] = "columns:deleteSuccess";
    SocketEventsEnum["columnsDeleteFailure"] = "columns:deleteFailure";
    SocketEventsEnum["columnsUpdate"] = "columns:update";
    SocketEventsEnum["columnsUpdateSuccess"] = "columns:updateSuccess";
    SocketEventsEnum["columnsUpdateFailure"] = "columns:updateFailure";
    SocketEventsEnum["tasksCreate"] = "tasks:create";
    SocketEventsEnum["tasksCreateSuccess"] = "tasks:createSuccess";
    SocketEventsEnum["tasksCreateFailure"] = "tasks:createFailure";
    SocketEventsEnum["tasksUpdate"] = "tasks:update";
    SocketEventsEnum["tasksUpdateSuccess"] = "tasks:updateSuccess";
    SocketEventsEnum["tasksUpdateFailure"] = "tasks:updateFailure";
    SocketEventsEnum["tasksDelete"] = "tasks:delete";
    SocketEventsEnum["tasksDeleteSuccess"] = "tasks:deleteSuccess";
    SocketEventsEnum["tasksDeleteFailure"] = "tasks:deleteFailure";
})(SocketEventsEnum || (SocketEventsEnum = {}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4001/api',
    socketUrl: 'http://localhost:4001',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map