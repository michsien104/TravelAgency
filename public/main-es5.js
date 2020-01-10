(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div>\n        <nav class=\"navbar shadow-lg navbar-expand-lg fixed-top justify-content-center\">\n            <div class=\"container\">\n                <button type=\"button\" class=\"navbar-toggler collapsed\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n                <div *ngIf=\"currentUser\" class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                    <ul class=\"navbar-nav nav-fill w-100\">\n                        <li routerLinkActive=\"active current\" class=\"nav-item\">\n                            <a data-scroll class=\"nav-link\" routerLink=\"\">Trips</a>\n                        </li>\n                        <li routerLinkActive=\"active current\" class=\"nav-item\">\n                            <a data-scroll class=\"nav-link\" routerLink=\"/newTrip\">Create trip</a>\n                        </li>\n                        <li routerLinkActive=\"active current\" class=\"nav-item\">\n                            <a data-scroll class=\"nav-link\" routerLink=\"/shoppingCart\">Shopping cart</a>\n                        </li>\n                    </ul>\n                </div>\n                <div *ngIf=\"currentUser\">\n                    <span>Currently logged as: {{ currentUser['email'] }} </span>\n                    <button (click)=\"logOut()\">Log out</button>\n                </div>\n            </div>\n        </nav>\n    </div>\n\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments-box/comments-box.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments-box/comments-box.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"comments\">\n    <ul>\n        <li ngFor=\"comment in comments\">\n            <header>\n                <h1 *ngIf=\"comment.author.name\">{{ comment.author.name }}</h1>\n                <div>\n                    <button (click)=\"love(comment.id)\" [ngStyle]=\"{'loved': comment.loved }\"></button>\n                    <button (click)=\"reply(comment.author.name)\"></button>\n                </div>\n            </header>\n            <p ng-bind-html=\"parseContent(comment.content)\"></p>\n        </li>\n    </ul>\n    <form name=\"form\" ng-submit=\"addNewComment()\" novalidate>\n        <input placeholder=\"First and second name\" type=\"text\" ng-model=\"newComment.author.name\" required>\n        <textarea placeholder=\"Comment\" ng-model=\"newComment.content\" required></textarea>\n        <button type=\"submit\">Add comment</button>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n    <h1>Travel agency:</h1>\n    <p>MichSien Travel</p>\n    <p>ul.Zawiła 47 48-378 Kraków</p>\n    <img src='../../assets/travelAgency.jpeg'>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Please login:</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.username.errors }\" />\n        <div *ngIf=\"submitted && form.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\" />\n        <div *ngIf=\"submitted && form.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Login\n        </button>\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trips/new-trips.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trips/new-trips.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h1>Creating new trip:</h1>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"image\">Image:</label>\n            <input id=\"image\" type=\"file\" class=\"form-control\" formControlName=\"image\" />\n            <span *ngIf=\"formErrors.image\" class=\"alert-danger\">{{ formErrors.image }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\" />\n            <span *ngIf=\"formErrors.name\" class=\"alert-danger\">{{ formErrors.name }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"country\">Country:</label>\n            <input id=\"country\" type=\"text\" class=\"form-control\" formControlName=\"country\" />\n            <span *ngIf=\"formErrors.country\" class=\"alert-danger\">{{ formErrors.country }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"since\">Since:</label>\n            <input id=\"since\" type=\"date\" class=\"form-control\" formControlName=\"since\" />\n            <span *ngIf=\"formErrors.since\" class=\"alert-danger\">{{ formErrors.since }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"untill\">Until:</label>\n            <input id=\"untill\" type=\"date\" class=\"form-control\" formControlName=\"untill\" />\n            <span *ngIf=\"formErrors.untill\" class=\"alert-danger\">{{ formErrors.untill }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"price\">Price:</label>\n            <input id=\"price\" type=\"currency\" class=\"form-control\" formControlName=\"price\" />\n            <span *ngIf=\"formErrors.price\" class=\"alert-danger\">{{ formErrors.price }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"totalPlaces\">Total places:</label>\n            <input id=\"totalPlaces\" type=\"currency\" class=\"form-control\" formControlName=\"totalPlaces\" />\n            <span *ngIf=\"formErrors.totalPlaces\" class=\"alert-danger\">{{ formErrors.totalPlaces }}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"description\">Description:</label>\n            <input id=\"description\" type=\"currency\" class=\"form-control\" formControlName=\"description\" />\n            <span *ngIf=\"formErrors.description\" class=\"alert-danger\">{{ formErrors.description }}</span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\" (click)=\"onRatingClick()\"></ngb-rating>\n<div class=\"form-text small\">\n    <div *ngIf=\"readonly\" class=\"text-success\">Thanks! Your rate is: {{selected}}.</div>\n    <div *ngIf=\"!readonly\" class=\"text-danger\">Please rate us</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.firstName.errors }\" />\n        <div *ngIf=\"submitted && form.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.lastName.errors }\" />\n        <div *ngIf=\"submitted && form.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.email.errors }\" />\n        <div *ngIf=\"submitted && form.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.email.errors.required\">Email is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\" />\n        <div *ngIf=\"submitted && form.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.password.errors.required\">Password is required</div>\n            <div *ngIf=\"form.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Register\n        </button>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!shopping\">Shopping cart is empty. We strongly recommend to reserve a trip.</div>\n<div class=\"container\" *ngIf=\"shopping\">\n    <h1 class=\"text-center\">My shopping cart:</h1>\n    <span>You have booked {{ shopping.totalPlaces }} places on all trips. The total cost is: {{ shopping.totalPrice | currency:'PLN ' }}</span>\n    <table class=\"table\">\n        <tbody>\n            <tr *ngFor=\"let product of shopping.products\" (click)=\"redirect(product)\">\n                <td *ngIf=\"product.trip\" class=\"align-middle\">\n                    <img src='{{product.trip.image}}' width=300 height=200 class=\"rounded-circle\">\n                </td>\n                <td *ngIf=\"product.trip\" class=\"align-middle\">{{product.trip.name | uppercase}}</td>\n                <td *ngIf=\"product.trip\" class=\"align-middle\">{{product.trip.country | uppercase}}</td>\n                <td *ngIf=\"product.trip\" class=\"align-middle\">{{product.trip.price * product.reservedPlaces | currency:'PLN '}} </td>\n                <td *ngIf=\"product.trip\" class=\"align-middle\">{{ product.reservedPlaces }} reserved places</td>\n            </tr>\n        </tbody>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary w-100 m-1\">Continue with payment</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-trip/single-trip.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-trip/single-trip.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<td class=\"align-middle\">\n    <a routerLink=\"/dashboard/tripDetails/{{trip._id}}\">\n        <img src='{{trip.image}}' width=250 height=150 class=\"rounded-circle\">\n    </a>\n</td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle\">{{trip.name | uppercase}}</td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle\">{{trip.country | uppercase}}</td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle\">{{trip.since | date: 'dd-MM-yyyy'}}</td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle\">{{trip.untill | date: 'dd-MM-yyyy'}}</td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle\">{{trip.price | currency:'PLN '}} </td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle text-center\">{{trip.totalPlaces}}<br><br></td>\n<td routerLink=\"/dashboard/tripDetails/{{trip._id}}\" class=\"align-middle text-center\">\n    {{trip.availablePlaces}}<br>\n    <kbd class=\"text-danger\" [ngStyle]=\"{'visibility': (trip.availablePlaces != 0) && (4 > trip.availablePlaces) ? 'visible' : 'hidden'}\">LAST PLACES!</kbd>\n</td>\n<td class=\"align-middle\">\n    <kbd class=\"text-danger align-middle\" [ngStyle]=\"{'visibility': trip.availablePlaces == 0 ? 'visible' : 'hidden'}\">NO MORE AVAILABLE PLACES!</kbd>\n    <button type=\"button\" class=\"btn btn-primary w-75 m-1\" [ngStyle]=\"{'visibility': trip.availablePlaces > 0 ? 'visible' : 'hidden'}\" (click)=\"reserveTrip(trip)\">Book</button>\n    <button type=\"button\" class=\"btn btn-primary w-75 m-1\" [ngStyle]=\"{'visibility': trip.totalPlaces > trip.availablePlaces ? 'visible' : 'hidden'}\" (click)=\"freeTrip(trip)\">Unbook</button>\n    <button type=\"button\" class=\"btn btn-primary w-75 m-1\" (click)=\"removeTrip(trip)\">delete</button>\n    <app-rating [tripRating]=\"trip.rating\"></app-rating>\n</td>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Trip details:</h1>\n<div class=\"container w-75\" *ngIf=\"trip\">\n    <div id=\"carousel\">\n        <ngb-carousel *ngIf=\"images\">\n            <ng-template ngbSlide class=\"center \">\n                <div class=\"picsum-img-wrapper\">\n                    <img src='{{ trip.image }}' alt=\"First picture\">\n                </div>\n                <div class=\"carousel-caption jumbotron w-50\">\n                    <h3>{{ trip.name }}</h3>\n                    <p>{{ trip.country }}</p>\n                </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper\">\n                    <img [src]=\"images[1]\" alt=\"Second picture\">\n                </div>\n                <div class=\"carousel-caption jumbotron w-50\">\n                    <h3>{{ trip.name }}</h3>\n                    <p>{{ trip.country }}</p>\n                </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper\">\n                    <img [src]=\"images[2]\" alt=\"Third picture\">\n                </div>\n                <div class=\"carousel-caption jumbotron w-50\">\n                    <h3>{{ trip.name }}</h3>\n                    <p>{{ trip.country }}</p>\n                </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">Since: {{ trip.since | date: 'dd-MM-yyyy'}}</div>\n        <div class=\"col\">Untill: {{ trip.untill | date: 'dd-MM-yyyy'}}</div>\n        <div class=\"col\">Price: {{ trip.price | currency:'PLN '}}</div>\n    </div>\n    <div>\n        <h1>\n            Details:\n        </h1>\n        <span class=\"w-100\">{{ trip.description }}</span>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/trips.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trips/trips.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n\n    <nav id=\"sidebar\" class=\"active\">\n        <div class=\"sidebar-header\">\n            <h3>Filter</h3>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <div [formGroup]=\"myFilter\" class=\"form-group\">\n                <input id=\"name\" type=\"text\" class=\"form-control w-75\" placeholder=\"Search by name\" formControlName=\"name\" [(ngModel)]=\"name\" />\n                <input id=\"country\" type=\"text\" class=\"form-control w-75\" placeholder=\"Search by country\" formControlName=\"country\" [(ngModel)]=\"country\" />\n                <input id=\"since\" type=\"date\" class=\"form-control w-75\" formControlName=\"since\" [(ngModel)]=\"since\" />\n                <input id=\"untill\" type=\"date\" class=\"form-control w-75\" formControlName=\"untill\" [(ngModel)]=\"untill\" />\n            </div>\n        </ul>\n    </nav>\n\n    <div id=\"trips-component\">\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\" (click)=\"toggleSideBar()\">\n            <i class=\"fas fa-align-left\"></i>\n            <span>Filter</span>\n        </button>\n        <h1 class=\"text-center\">Our trips</h1>\n        <p [ngStyle]=\"{'background-color': reservedTrips > 10 ? 'green' : 'red'}\">Total amount of reserved trips: {{reservedTrips}}</p>\n\n        <table class=\"table\">\n            <thead>\n                <th>Image</th>\n                <th>Name</th>\n                <th>Country</th>\n                <th width=100>Since</th>\n                <th width=100>Untill</th>\n                <th width=125>Price</th>\n                <th width=125>Total places</th>\n                <th width=140>Available places</th>\n                <th>Reservation</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let trip of trips | listFilter:name:country:since:untill\" app-single-trip [trip]=\"trip\" [parent]=\"self\" (deleteTrip)=\"deleteTrip($event)\">\n                </tr>\n            </tbody>\n        </table>\n\n        <app-header></app-header>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Utils/listFilter.pipe.ts": 
        /*!******************************************!*\
          !*** ./src/app/Utils/listFilter.pipe.ts ***!
          \******************************************/
        /*! exports provided: listFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFilterPipe", function () { return listFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var listFilterPipe = /** @class */ (function () {
                function listFilterPipe() {
                }
                listFilterPipe.prototype.transform = function (trips, name, country, since, untill) {
                    if (!trips) {
                        return trips;
                    }
                    var result = trips;
                    if (name != null) {
                        result = result.filter(function (trip) { return trip.name.toLowerCase().indexOf(name.toLowerCase()) != -1; });
                    }
                    if (country != null) {
                        result = result.filter(function (trip) { return trip.country.toLowerCase().indexOf(country.toLowerCase()) != -1; });
                    }
                    if (since != null) {
                        var sinceDate_1 = new Date(since);
                        result = result.filter(function (trip) { return trip.since >= sinceDate_1; });
                    }
                    if (untill != null) {
                        var untillDate_1 = new Date(untill);
                        result = result.filter(function (trip) { return trip.untill <= untillDate_1; });
                    }
                    return result;
                };
                return listFilterPipe;
            }());
            listFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'listFilter'
                })
            ], listFilterPipe);
            /***/ 
        }),
        /***/ "./src/app/_models/trip.model.ts": 
        /*!***************************************!*\
          !*** ./src/app/_models/trip.model.ts ***!
          \***************************************/
        /*! exports provided: Trip */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function () { return Trip; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Trip = /** @class */ (function () {
                function Trip(obj) {
                    this.name = obj.name;
                    this.country = obj.country;
                    this.since = obj.since;
                    this.untill = obj.untill;
                    this.price = obj.price;
                    this.totalPlaces = obj.totalPlaces;
                    this.description = obj.description;
                    this.image = obj.image;
                    this.availablePlaces = obj.totalPlaces;
                    this.rating = 0;
                }
                return Trip;
            }());
            /***/ 
        }),
        /***/ "./src/app/_services/authentication/auth-guard.service.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/_services/authentication/auth-guard.service.ts ***!
          \****************************************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/authentication/auth.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuardService.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.authService.authState$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
                        if (state !== null) {
                            return true;
                        }
                        _this.router.navigate(['/login']);
                        return false;
                    }));
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/_services/authentication/auth.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/_services/authentication/auth.service.ts ***!
          \**********************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(fireAuth) {
                    this.fireAuth = fireAuth;
                    this.authState$ = this.fireAuth.authState;
                }
                AuthService.prototype.ngOnInit = function () {
                };
                Object.defineProperty(AuthService.prototype, "user", {
                    get: function () {
                        return this.fireAuth.auth.currentUser;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.login = function (credentials) {
                    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
                };
                AuthService.prototype.register = function (credentials) {
                    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
                };
                AuthService.prototype.logout = function () {
                    return this.fireAuth.auth.signOut();
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/_services/nodeJSData/mongo-trip-repo.service.ts ***!
          \*****************************************************************/
        /*! exports provided: MongoTripRepoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongoTripRepoService", function () { return MongoTripRepoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            var MongoTripRepoService = /** @class */ (function () {
                function MongoTripRepoService(http) {
                    this.http = http;
                    this.serverApi = 'http://localhost:3000/triplist';
                }
                MongoTripRepoService.prototype.getAllLists = function () {
                    var URL = "" + this.serverApi;
                    return this.http.get(URL);
                };
                MongoTripRepoService.prototype.deleteTrip = function (tripId) {
                    var URL = this.serverApi + "/" + tripId;
                    return this.http.delete(URL, httpOptions);
                };
                MongoTripRepoService.prototype.getTrip = function (tripId) {
                    var URL = this.serverApi + "/" + tripId;
                    return this.http.get(URL);
                };
                MongoTripRepoService.prototype.addTrip = function (body) {
                    var URL = "" + this.serverApi;
                    return this.http.post(URL, body, httpOptions);
                };
                MongoTripRepoService.prototype.bookTrip = function (id) {
                    var URL = this.serverApi + "/bookTrip/" + id;
                    return this.http.post(URL, httpOptions);
                };
                MongoTripRepoService.prototype.unBookTrip = function (id) {
                    var URL = this.serverApi + "/unBookTrip/" + id;
                    return this.http.post(URL, httpOptions);
                };
                return MongoTripRepoService;
            }());
            MongoTripRepoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            MongoTripRepoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MongoTripRepoService);
            /***/ 
        }),
        /***/ "./src/app/_services/nodeJSData/shopping-repository.service.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/_services/nodeJSData/shopping-repository.service.ts ***!
          \*********************************************************************/
        /*! exports provided: ShoppingRepositoryService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingRepositoryService", function () { return ShoppingRepositoryService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/_services/authentication/auth.service.ts");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            var ShoppingRepositoryService = /** @class */ (function () {
                function ShoppingRepositoryService(http, authService) {
                    var _this = this;
                    this.http = http;
                    this.authService = authService;
                    this.serverApi = 'http://localhost:3000/shoppingcart';
                    this.authService.authState$.subscribe(function (data) { return _this.currentUser = data; });
                }
                ShoppingRepositoryService.prototype.addTripToShoppingCart = function (trip) {
                    var URL = "" + this.serverApi;
                    var body = {
                        "userId": this.currentUser.email,
                        "tripId": trip._id,
                        "reservedPlaces": 1,
                        "price": trip.price
                    };
                    return this.http.post(URL, body, httpOptions);
                };
                ShoppingRepositoryService.prototype.unbookTripFromShoppingCartById = function (trip) {
                    var URL = this.serverApi + "/" + this.currentUser.email + "/" + trip._id + "/" + trip.price;
                    return this.http.delete(URL, httpOptions);
                };
                ShoppingRepositoryService.prototype.getShoppingCartForCurrentUser = function () {
                    var URL = this.serverApi + "/" + this.currentUser.email;
                    return this.http.get(URL, httpOptions);
                };
                return ShoppingRepositoryService;
            }());
            ShoppingRepositoryService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            ShoppingRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ShoppingRepositoryService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/trips/trips.component.ts");
            /* harmony import */ var _new_trips_new_trips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-trips/new-trips.component */ "./src/app/new-trips/new-trips.component.ts");
            /* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
            /* harmony import */ var _trip_details_trip_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details/trip-details.component */ "./src/app/trip-details/trip-details.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/authentication/auth-guard.service */ "./src/app/_services/authentication/auth-guard.service.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            var routes = [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
                { path: 'dashboard', component: _trips_trips_component__WEBPACK_IMPORTED_MODULE_3__["TripsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
                { path: 'newTrip', component: _new_trips_new_trips_component__WEBPACK_IMPORTED_MODULE_4__["NewTripsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
                { path: 'shoppingCart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
                { path: 'dashboard/tripDetails/:id', component: _trip_details_trip_details_component__WEBPACK_IMPORTED_MODULE_6__["TripDetailsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    margin: 0px 0px 0px 0px;\r\n    background-color: #7386D5;\r\n}\r\n\r\n.content {\r\n    margin-top: 60px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.nav-link {\r\n    color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczODZENTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/authentication/auth.service */ "./src/app/_services/authentication/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.title = 'tripsAgency';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.authState$.subscribe(function (data) { return _this.currentUser = data; });
                };
                AppComponent.prototype.logOut = function () {
                    this.authService.logout();
                    this.router.navigate(['/login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/trips/trips.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _single_trip_single_trip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-trip/single-trip.component */ "./src/app/single-trip/single-trip.component.ts");
            /* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _new_trips_new_trips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-trips/new-trips.component */ "./src/app/new-trips/new-trips.component.ts");
            /* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
            /* harmony import */ var _Utils_listFilter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Utils/listFilter.pipe */ "./src/app/Utils/listFilter.pipe.ts");
            /* harmony import */ var _trip_details_trip_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trip-details/trip-details.component */ "./src/app/trip-details/trip-details.component.ts");
            /* harmony import */ var _comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comments-box/comments-box.component */ "./src/app/comments-box/comments-box.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/authentication/auth-guard.service */ "./src/app/_services/authentication/auth-guard.service.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _trips_trips_component__WEBPACK_IMPORTED_MODULE_5__["TripsComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _single_trip_single_trip_component__WEBPACK_IMPORTED_MODULE_7__["SingleTripComponent"],
                        _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                        _new_trips_new_trips_component__WEBPACK_IMPORTED_MODULE_11__["NewTripsComponent"],
                        _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"],
                        _Utils_listFilter_pipe__WEBPACK_IMPORTED_MODULE_13__["listFilterPipe"],
                        _trip_details_trip_details_component__WEBPACK_IMPORTED_MODULE_14__["TripDetailsComponent"],
                        _comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_15__["CommentsBoxComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"]
                    ],
                    providers: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/comments-box/comments-box.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/comments-box/comments-box.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzLWJveC9jb21tZW50cy1ib3guY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/comments-box/comments-box.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/comments-box/comments-box.component.ts ***!
          \********************************************************/
        /*! exports provided: CommentsBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsBoxComponent", function () { return CommentsBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ "./src/app/comments-box/comments.ts");
            var CommentsBoxComponent = /** @class */ (function () {
                function CommentsBoxComponent() {
                    this.comments = _comments__WEBPACK_IMPORTED_MODULE_2__["COMMENTS"];
                    this.newComment = {
                        id: '',
                        author: {
                            name: '',
                            email: '',
                            website: ''
                        },
                        content: '',
                        loved: ''
                    };
                }
                CommentsBoxComponent.prototype.ngOnInit = function () {
                    console.log(this.comments);
                };
                return CommentsBoxComponent;
            }());
            CommentsBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-comments-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments-box/comments-box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments-box.component.css */ "./src/app/comments-box/comments-box.component.css")).default]
                })
            ], CommentsBoxComponent);
            /***/ 
        }),
        /***/ "./src/app/comments-box/comments.ts": 
        /*!******************************************!*\
          !*** ./src/app/comments-box/comments.ts ***!
          \******************************************/
        /*! exports provided: COMMENTS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS", function () { return COMMENTS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var COMMENTS = [
                {
                    id: 1,
                    author: {
                        name: 'Jan-Kanty Pawelski',
                        email: 'jan.kanty.pawelski@gmail.com',
                        website: 'pawelski.io'
                    },
                    content: 'I made it! My awesome angular comment system. What do you think?',
                    loved: false
                },
                {
                    id: 2,
                    author: {
                        name: 'Tomasz Jakut',
                        email: 'comandeer@comandeer.pl',
                        website: 'comandeer.pl'
                    },
                    content: 'Nice looking. Good job dude ;)',
                    loved: true
                },
                {
                    id: 3,
                    author: {
                        name: 'Jan-Kanty Pawelski',
                        email: 'jan.kanty.pawelski@gmail.com',
                        website: 'pawelski.io'
                    },
                    content: '<span class="reply">@Tomasz Jakut</span> Thanks man. I tried hard.',
                    loved: false
                },
                {
                    id: 4,
                    author: {
                        name: 'Grzegorz Bąk',
                        email: 'szary.elf@gmail.com',
                        website: 'gregbal.com'
                    },
                    content: 'Third! Amazing system man! By the way check my new website: <a href="//gregbak.com">http://gregbak.com</a>.',
                    loved: false
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    margin-top: 100px;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication/auth.service */ "./src/app/_services/authentication/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, route, router, authenticationService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.submitted = false;
                    if (this.authenticationService.user) {
                        this.router.navigate(['/']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LoginComponent.prototype, "form", {
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    var credentials = { email: this.form.username.value, password: this.form.password.value };
                    this.authenticationService.login(credentials)
                        .then(function (result) {
                        _this.loading = false;
                        _this.router.navigate([_this.returnUrl]);
                        console.log("Result: " + result);
                    }).catch(function (error) {
                        _this.loading = false;
                        console.log("Login error: " + error);
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/new-trips/new-trips.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/new-trips/new-trips.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-group {\r\n    width: 400px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRyaXBzL25ldy10cmlwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25ldy10cmlwcy9uZXctdHJpcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIHdpZHRoOiA0MDBweFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/new-trips/new-trips.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/new-trips/new-trips.component.ts ***!
          \**************************************************/
        /*! exports provided: NewTripsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripsComponent", function () { return NewTripsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _models_trip_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/trip.model */ "./src/app/_models/trip.model.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/nodeJSData/mongo-trip-repo.service */ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts");
            var NewTripsComponent = /** @class */ (function () {
                function NewTripsComponent(formBuilder, tripRepository) {
                    this.formBuilder = formBuilder;
                    this.tripRepository = tripRepository;
                    this.formErrors = {
                        image: '',
                        name: '',
                        country: '',
                        since: '',
                        untill: '',
                        price: '',
                        totalPlaces: '',
                        description: '',
                    };
                    this.validationMessages = {
                        name: {
                            required: 'Name is required.'
                        },
                        country: {
                            required: 'Country is required.'
                        },
                        since: {
                            required: 'Since date is required.'
                        },
                        untill: {
                            required: 'Untill date is required.'
                        },
                        price: {
                            required: 'Price is required.'
                        },
                        totalPlaces: {
                            required: 'Total places number is required.'
                        }
                    };
                }
                NewTripsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.form = this.formBuilder.group({
                        image: [''],
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        since: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        untill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        totalPlaces: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        description: [''],
                        availablePlaces: [''],
                        rating: ['']
                    });
                    this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000)).subscribe(function (value) {
                        _this.onControlValueChanged();
                    });
                };
                NewTripsComponent.prototype.onControlValueChanged = function () {
                    var form = this.form;
                    for (var field in this.formErrors) {
                        this.formErrors[field] = '';
                        var control = form.get(field);
                        if (control && !control.valid) {
                            var validationMessages = this.validationMessages[field];
                            for (var key in control.errors) {
                                this.formErrors[field] += validationMessages[key] + ' ';
                            }
                        }
                    }
                };
                NewTripsComponent.prototype.onSubmit = function () {
                    if (this.form.valid) {
                        var trip = new _models_trip_model__WEBPACK_IMPORTED_MODULE_3__["Trip"](this.form.value);
                        var body = JSON.stringify(trip);
                        this.tripRepository.addTrip(body).subscribe(function (response) {
                            console.log(response);
                        });
                    }
                    else {
                        this.onControlValueChanged();
                    }
                };
                return NewTripsComponent;
            }());
            NewTripsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_5__["MongoTripRepoService"] }
            ]; };
            NewTripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-trips',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-trips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trips/new-trips.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-trips.component.css */ "./src/app/new-trips/new-trips.component.css")).default]
                })
            ], NewTripsComponent);
            /***/ 
        }),
        /***/ "./src/app/rating/rating.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/rating/rating.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/rating/rating.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/rating/rating.component.ts ***!
          \********************************************/
        /*! exports provided: RatingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function () { return RatingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RatingComponent = /** @class */ (function () {
                function RatingComponent() {
                    this.selected = 0;
                    this.hovered = 0;
                    this.readonly = false;
                }
                RatingComponent.prototype.ngOnInit = function () {
                    this.selected = this.tripRating;
                };
                RatingComponent.prototype.onRatingClick = function () {
                    this.readonly = true;
                };
                return RatingComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RatingComponent.prototype, "tripRating", void 0);
            RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-rating',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.css */ "./src/app/rating/rating.component.css")).default]
                })
            ], RatingComponent);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication/auth.service */ "./src/app/_services/authentication/auth.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, router, route, authenticationService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.route = route;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.submitted = false;
                    if (this.authenticationService.user) {
                        this.router.navigate(['/']);
                    }
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
                    });
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(RegisterComponent.prototype, "form", {
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.register(this.registerForm.value)
                        .then(function (result) {
                        _this.loading = false;
                        _this.router.navigate([_this.returnUrl]);
                    }).catch(function (error) {
                        _this.loading = false;
                        console.log("Register error: " + error);
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/shopping-cart/shopping-cart.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shopping-cart/shopping-cart.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
          \**********************************************************/
        /*! exports provided: ShoppingCartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () { return ShoppingCartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_nodeJSData_shopping_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/nodeJSData/shopping-repository.service */ "./src/app/_services/nodeJSData/shopping-repository.service.ts");
            /* harmony import */ var _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/nodeJSData/mongo-trip-repo.service */ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ShoppingCartComponent = /** @class */ (function () {
                function ShoppingCartComponent(shoppingCartRepository, tripsService, router) {
                    this.shoppingCartRepository = shoppingCartRepository;
                    this.tripsService = tripsService;
                    this.router = router;
                }
                ShoppingCartComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.shoppingCartRepository.getShoppingCartForCurrentUser().subscribe(function (response) {
                        _this.shopping = response['shoppingCart'];
                        if (_this.shopping) {
                            _this.shopping.products.forEach(function (element) {
                                _this.tripsService.getTrip(element.tripId).subscribe(function (response) {
                                    element.trip = response['trip'];
                                });
                            });
                        }
                    });
                };
                ShoppingCartComponent.prototype.redirect = function (product) {
                    this.router.navigate(["/dashboard/tripDetails/" + product.tripId]);
                };
                ShoppingCartComponent.prototype.sum = function () {
                    this.shopping.products.reduce(function (prev, cur) {
                        return prev + cur.trip.price;
                    }, 0);
                };
                return ShoppingCartComponent;
            }());
            ShoppingCartComponent.ctorParameters = function () { return [
                { type: _services_nodeJSData_shopping_repository_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingRepositoryService"] },
                { type: _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__["MongoTripRepoService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shopping-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")).default]
                })
            ], ShoppingCartComponent);
            /***/ 
        }),
        /***/ "./src/app/single-trip/single-trip.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/single-trip/single-trip.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#actionButtons {\r\n    z-index: 10;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXRyaXAvc2luZ2xlLXRyaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS10cmlwL3NpbmdsZS10cmlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWN0aW9uQnV0dG9ucyB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/single-trip/single-trip.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/single-trip/single-trip.component.ts ***!
          \******************************************************/
        /*! exports provided: SingleTripComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTripComponent", function () { return SingleTripComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_nodeJSData_shopping_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/nodeJSData/shopping-repository.service */ "./src/app/_services/nodeJSData/shopping-repository.service.ts");
            /* harmony import */ var _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/nodeJSData/mongo-trip-repo.service */ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts");
            var SingleTripComponent = /** @class */ (function () {
                function SingleTripComponent(shoppingCartRepository, tripRepository) {
                    this.shoppingCartRepository = shoppingCartRepository;
                    this.tripRepository = tripRepository;
                    this.deleteTrip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                Object.defineProperty(SingleTripComponent.prototype, "parent", {
                    set: function (value) { this._parent = value; },
                    enumerable: true,
                    configurable: true
                });
                SingleTripComponent.prototype.ngOnInit = function () {
                };
                SingleTripComponent.prototype.reserveTrip = function (trip) {
                    var _this = this;
                    this._parent.reservedTrips++;
                    this.shoppingCartRepository.addTripToShoppingCart(trip).subscribe(function (response) {
                        if (response['success'] == true) {
                            _this.tripRepository.bookTrip(trip._id).subscribe(function (response) {
                                if (response['success'] == true) {
                                    trip.availablePlaces--;
                                }
                            });
                        }
                    });
                };
                SingleTripComponent.prototype.freeTrip = function (trip) {
                    var _this = this;
                    this._parent.reservedTrips--;
                    this.shoppingCartRepository.unbookTripFromShoppingCartById(trip).subscribe(function (response) {
                        if (response['success'] == true) {
                            _this.tripRepository.unBookTrip(trip._id).subscribe(function (response) {
                                if (response['success'] == true) {
                                    trip.availablePlaces++;
                                }
                            });
                        }
                    });
                };
                SingleTripComponent.prototype.removeTrip = function (trip) {
                    this.deleteTrip.emit(trip);
                };
                return SingleTripComponent;
            }());
            SingleTripComponent.ctorParameters = function () { return [
                { type: _services_nodeJSData_shopping_repository_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingRepositoryService"] },
                { type: _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__["MongoTripRepoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SingleTripComponent.prototype, "trip", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SingleTripComponent.prototype, "parent", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SingleTripComponent.prototype, "deleteTrip", void 0);
            SingleTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: '[app-single-trip]',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-trip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-trip/single-trip.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-trip.component.css */ "./src/app/single-trip/single-trip.component.css")).default]
                })
            ], SingleTripComponent);
            /***/ 
        }),
        /***/ "./src/app/trip-details/trip-details.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/trip-details/trip-details.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 1100px;\r\n    height: 500px;\r\n}\r\n\r\n.jumbotron,\r\n.carousel-caption {\r\n    padding: auto;\r\n    margin-left: 100px;\r\n    color: black;\r\n}\r\n\r\n#carousel {\r\n    width: 900px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kZXRhaWxzL3RyaXAtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMTEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbixcclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2Nhcm91c2VsIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/trip-details/trip-details.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/trip-details/trip-details.component.ts ***!
          \********************************************************/
        /*! exports provided: TripDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsComponent", function () { return TripDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/nodeJSData/mongo-trip-repo.service */ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts");
            var TripDetailsComponent = /** @class */ (function () {
                function TripDetailsComponent(route, tripRepository, config) {
                    this.route = route;
                    this.tripRepository = tripRepository;
                    this.images = [700, 533, 807, 124].map(function (n) { return "https://picsum.photos/id/" + n + "/900/500"; });
                    this.getTrip();
                    config.interval = 10000;
                    config.wrap = false;
                    config.keyboard = false;
                    config.pauseOnHover = false;
                }
                TripDetailsComponent.prototype.ngOnInit = function () {
                };
                TripDetailsComponent.prototype.getTrip = function () {
                    var _this = this;
                    this.route.paramMap.subscribe(function (params) {
                        _this.tripRepository.getTrip(params.get('id')).subscribe(function (response) {
                            _this.trip = response.trip;
                        });
                    });
                };
                return TripDetailsComponent;
            }());
            TripDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_4__["MongoTripRepoService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
            ]; };
            TripDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trip-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trip-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.component.html")).default,
                    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trip-details.component.css */ "./src/app/trip-details/trip-details.component.css")).default]
                })
            ], TripDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/trips/trips.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/trips/trips.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#trips-component {\r\n    font-size: 1.7ch;\r\n}\r\n\r\nthead {\r\n    background-color: #7386D5;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background: #7386D5;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    margin-left: -250px;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcHMvdHJpcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFHQTs7dURBRXVEOztBQUV2RDtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90cmlwcy90cmlwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RyaXBzLWNvbXBvbmVudCB7XHJcbiAgICBmb250LXNpemU6IDEuN2NoO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM4NkQ1O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzM4NkQ1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM3Mzg2RDU7XHJcbn1cclxuXHJcbmEuYXJ0aWNsZSxcclxuYS5hcnRpY2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIE1FRElBUVVFUklFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgIH1cclxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/trips/trips.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/trips/trips.component.ts ***!
          \******************************************/
        /*! exports provided: TripsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsComponent", function () { return TripsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/nodeJSData/mongo-trip-repo.service */ "./src/app/_services/nodeJSData/mongo-trip-repo.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TripsComponent = /** @class */ (function () {
                function TripsComponent(tripRepository, router) {
                    this.tripRepository = tripRepository;
                    this.router = router;
                    this.reservedTrips = 0;
                }
                TripsComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                    this.myFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                        since: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                        untill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
                    });
                };
                Object.defineProperty(TripsComponent.prototype, "self", {
                    get: function () {
                        return this;
                    },
                    enumerable: true,
                    configurable: true
                });
                TripsComponent.prototype.deleteTrip = function (trip) {
                    var _this = this;
                    this.tripRepository.deleteTrip(trip._id).subscribe(function (response) {
                        if (response.success == true) {
                            _this.trips = _this.trips.filter(function (elem) {
                                return elem._id !== response.id;
                            });
                        }
                    });
                };
                TripsComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.tripRepository.getAllLists().subscribe(function (data) {
                        _this.trips = data.trips;
                    });
                };
                TripsComponent.prototype.toggleSideBar = function () {
                    var sideBar = document.getElementById("sidebar");
                    sideBar.classList.toggle("active");
                };
                TripsComponent.prototype.redirectToDetails = function (trip) {
                    this.router.navigate(["/dashboard/tripDetails/" + trip._id]);
                };
                return TripsComponent;
            }());
            TripsComponent.ctorParameters = function () { return [
                { type: _services_nodeJSData_mongo_trip_repo_service__WEBPACK_IMPORTED_MODULE_3__["MongoTripRepoService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            TripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trips',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/trips.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trips.component.css */ "./src/app/trips/trips.component.css")).default]
                })
            ], TripsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyDhixQgudQ_ApmPGHZ_dosjeNDXD6IBMdg",
                    authDomain: "zpw2019-336bf.firebaseapp.com",
                    databaseURL: "https://zpw2019-336bf.firebaseio.com",
                    projectId: "zpw2019-336bf",
                    storageBucket: "zpw2019-336bf.appspot.com",
                    messagingSenderId: "667365428470",
                    appId: "1:667365428470:web:6a8efd41f262078c63f0d7",
                    measurementId: "G-44GNDM74X5"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Program Files\nodejs\agency\tripsAgency\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map