webpackJsonp([1,5],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(93);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(228),
        styles: [__webpack_require__(218)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewEncapsulation */].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_article_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__article_list_article_list_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__article_list_header_article_list_header_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__article_list_header_article_list_header_component__["a" /* ArticleListHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* appRoutes */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__article_service__["a" /* ArticleService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_list_article_list_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var routes = [
    {
        path: '',
        redirectTo: 'news/reddit-r-all',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'news/:sourceKey',
        component: __WEBPACK_IMPORTED_MODULE_2__article_list_article_list_component__["a" /* ArticleListComponent */]
    }
];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListHeaderComponent = (function () {
    function ArticleListHeaderComponent(articleService) {
        this.articleService = articleService;
        this.currentFilter = 'Time';
        this.sortDirection = 1;
    }
    ArticleListHeaderComponent.prototype.changeDirection = function () {
        this.sortDirection = this.sortDirection * -1;
        this._updateSort();
    };
    ArticleListHeaderComponent.prototype.changeSort = function (filter) {
        if (filter === this.currentFilter) {
            this.changeDirection();
        }
        else {
            this.currentFilter = filter;
            this._updateSort();
        }
    };
    ArticleListHeaderComponent.prototype.ngOnInit = function () {
        jQuery('.ui.dropdown').dropdown();
    };
    ArticleListHeaderComponent.prototype.liveSearch = function (evt) {
        var val = evt.target.value;
        this.articleService.filterBy(val);
    };
    ArticleListHeaderComponent.prototype._updateSort = function () {
        this.articleService.sortBy(this.currentFilter, this.sortDirection);
    };
    return ArticleListHeaderComponent;
}());
ArticleListHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-article-list-header',
        template: __webpack_require__(229),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], ArticleListHeaderComponent);

var _a;
//# sourceMappingURL=article-list-header.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.upvote = function () {
        this.article.voteUp();
    };
    ArticleComponent.prototype.downvote = function () {
        this.article.voteDown();
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */]) === "function" && _a || Object)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__(231),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);

var _a;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(articleService) {
        this.articleService = articleService;
        this.sources = this.articleService.sources;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.articleService.getSources();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(232),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/* Mobile */\n.pusher {\n  margin-left: 180px\n}\n\n/* Tablet */\n@media only screen and (min-width: 769px) and (max-width: 991px) {\n  .pusher {\n    margin-left: 200px\n  }\n}\n\n@media only screen and (min-width: 991px) {\n  .pusher {\n    margin-left: 260px\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/* Mobile */\n.sidebar-container {\n  width: 180px;\n  overflow: hidden;\n  height: 100%;\n  position: fixed;\n  margin: 0;\n  top: 0;\n  left: 0;\n}\n\n/* Tablet / iPad Portrait */\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .sidebar-container {\n    width: 200px;\n  }\n}\n\n@media only screen and (min-width: 991px) {\n  .sidebar-container {\n    width: 260px;\n  }\n}\n\na.item.news-item {\n  padding-left: 10px;\n  line-height: 1.4em !important;\n}\na.item.news-item.active {\n  background-color: #ddd !important;\n}\na span.side-news-item {\n  color: #ffffff;\n}\na.active span.side-news-item {\n  color: #222222 !important;\n}\n\n.sidebar::-webkit-scrollbar { width: 0 !important }\n.sidebar { -ms-overflow-style: none; }\n.sidebar { overflow: -moz-scrollbars-none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui bottom attached segment\">\n<app-sidebar></app-sidebar>\n<div class=\"pusher\">\n  <router-outlet>  </router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui basic\">\n  <h1 class=\"ui header\">News</h1>\n  <div class=\"ui grid\">\n    <div class=\"four column row\">\n      <div class=\"left floated column\">\n        <div class=\"ui buttons\">\n          <button\n            class=\"ui left attached icon mini blue button\"\n            (click)=\"changeDirection()\">\n            <i\n              [ngClass]=\"{\n                'up': sortDirection > 0,\n                'down': sortDirection <= 0\n              }\"\n              class=\"arrow up icon\"></i>\n          </button>\n          <div class=\"right attached ui icon top left pointing dropdown blue button\">\n            <i class=\"sort content descending icon\"></i>\n            <span class=\"text\">Sort</span>\n            <div class=\"menu\">\n              <div class=\"header\">Sort by</div>\n              <div\n                (click)=\"changeSort('Time')\"\n                class=\"item\">Time</div>\n              <div\n                (click)=\"changeSort('Votes')\"\n                class=\"item\">Votes</div>\n            </div> <!-- menu -->\n          </div>\n        </div> <!-- buttons container -->\n      </div> <!-- left column -->\n      <div class=\"right floated column\">\n        <div class=\"ui fluid icon input\">\n          <input\n            (keyup)=\"liveSearch($event)\"\n            type=\"text\"\n            placeholder=\"Search...\" />\n          <i class=\"search icon\"></i>\n        </div> <!-- input -->\n      </div> <!-- right column -->\n    </div> <!-- four column row -->\n</div>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n<app-article-list-header></app-article-list-header>\n\n<div class=\"ui divided items\">\n<app-article\n*ngFor=\"let article of articles | async\"\n[article]=\"article\"\nclass=\"item\"></app-article>\n</div>\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n  <img src=\"{{article.imageUrl}}\" />\n</div>\n<div class=\"content\">\n  <div class=\"header\">\n    {{article.title}}\n  </div>\n  <div class=\"meta\">\n    <span class=\"ui blue small label\">\n      <i class=\"heart icon\"></i>\n      <div class=\"details\">\n        {{article.votes}}\n      </div>\n    </span>\n\n    <span class=\"ui right floated\">\n      <a\n      (click)=\"upvote()\"\n      class=\"ui small label\">\n      <i class=\"arrow up icon\"></i>\n      Upvote\n    </a>\n    <a\n    (click)=\"downvote()\"\n    class=\"ui small label\">\n    <i class=\"arrow down icon\"></i>\n    Downvote\n  </a>\n</span>\n</div>\n<div class=\"meta date\">\n  {{article.publishedAt | date:'medium'}}\n</div>\n<div class=\"meta description\">\n  <p>{{article.description}}</p>\n</div>\n\n<div class=\"extra\">\n  <a\n  href=\"#\"\n  target=\"_blank\"\n  class=\"ui right floated button primary\" >\n  Read more\n  <i class=\"right chevron icon\"></i>\n</a>\n</div>\n</div>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-container\">\n  <div\n    class=\"ui container visible fixed inverted left vertical sidebar menu\">\n    <div class='item'>\n      <div class='header'>News sources</div>\n    </div> <!-- item -->\n\n    <div class='item'>\n      <div class='menu'>\n        <a\n          class='item news-item'\n          *ngFor='let source of sources | async'\n          routerLink='/news/{{ source[\"id\"] }}'\n          routerLinkActive='active'>\n          <span class='side-news-item'>\n            <img class='ui avatar image'\n              src='{{ source[\"urlsToLogos\"][\"small\"] }}' />\n            <span class='side-news-item'>\n              {{ source['name'] }}\n            </span>\n          </span>\n        </a>\n      </div> <!-- menu -->\n    </div> <!-- item -->\n  </div> <!-- sidebar menu container -->\n</div> <!-- sidebar-container -->\n"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var sortByTime = function (direction) { return function (a, b) {
    return direction * (b.publishedAt.getTime() -
        a.publishedAt.getTime());
}; };
var sortByVotes = function (direction) { return function (a, b) {
    return direction * (b.votes -
        a.votes);
}; };
var sortFns = {
    'Time': sortByTime,
    'Votes': sortByVotes
};
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this._articles = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._sources = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._sortByDirectionSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](1);
        this._sortByFilterSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](sortByTime);
        this._filterBySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('');
        this._refreshSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('reddit-r-all');
        this.articles = this._articles.asObservable();
        this.sources = this._sources.asObservable();
        this._refreshSubject.subscribe(this.getArticles.bind(this));
        this.orderedArticles = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this._articles, this._sortByFilterSubject, this._sortByDirectionSubject, this._filterBySubject)
            .map(function (_a) {
            var articles = _a[0], sorter = _a[1], direction = _a[2], filterStr = _a[3];
            var re = new RegExp(filterStr, 'gi');
            return articles
                .filter(function (article) { return re.exec(article.title); })
                .sort(sorter(direction));
        });
    }
    ArticleService.prototype.sortBy = function (filter, direction) {
        this._sortByDirectionSubject.next(direction);
        this._sortByFilterSubject.next(sortFns[filter]);
    };
    ArticleService.prototype.filterBy = function (filter) {
        this._filterBySubject.next(filter);
    };
    ArticleService.prototype.updateArticles = function (sourceKey) {
        this._refreshSubject.next(sourceKey);
    };
    ArticleService.prototype.getArticles = function (sourceKey) {
        var _this = this;
        if (sourceKey === void 0) { sourceKey = 'reddit-r-all'; }
        this._makeHttpRequest('/v1/articles', sourceKey)
            .map(function (json) { return json.articles; })
            .subscribe(function (articlesJSON) {
            var articles = articlesJSON
                .map(function (articleJSON) { return __WEBPACK_IMPORTED_MODULE_5__article__["a" /* Article */].fromJSON(articleJSON); });
            _this._articles.next(articles);
        });
    };
    ArticleService.prototype.getSources = function () {
        this._makeHttpRequest('/v1/sources')
            .map(function (json) { return json.sources; })
            .filter(function (list) { return list.length > 0; })
            .subscribe(this._sources);
    };
    ArticleService.prototype._makeHttpRequest = function (path, sourceKey) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('apiKey', __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].newsApiKey);
        if (sourceKey && sourceKey !== '') {
            params.set('source', sourceKey);
        }
        return this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + path, {
            search: params
        }).map(function (resp) { return resp.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(227),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleListComponent = (function () {
    function ArticleListComponent(articleService, activeRoute) {
        this.articleService = articleService;
        this.activeRoute = activeRoute;
        this.articles = articleService.orderedArticles;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            var sourceKey = params['sourceKey'];
            _this.articleService.updateArticles(sourceKey);
        });
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-article-list',
        template: __webpack_require__(230),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ArticleListComponent);

var _a, _b;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(title, description, imageUrl, votes) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.votes = votes;
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }
    Article.fromJSON = function (json) {
        var article = Object.create(Article.prototype);
        return Object.assign(article, json, {
            votes: json.votes ? json.votes : 0,
            imageUrl: json.urlToImage,
            publishedAt: json.publishedAt ?
                new Date(json.publishedAt) :
                new Date(),
        });
    };
    Article.prototype.voteUp = function () {
        this.votes = this.votes + 1;
    };
    Article.prototype.voteDown = function () {
        this.votes = this.votes - 1;
    };
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: "https://newsapi.org",
    newsApiKey: "522e3acb9c3b4c1685c3cc53f112430b"
};
//# sourceMappingURL=environment.js.map

/***/ })

},[500]);
//# sourceMappingURL=main.bundle.js.map