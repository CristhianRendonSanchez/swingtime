(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\n.home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n    font-family: 'Font Awesome 5 Free', 'fa-regular-400';\n    font-weight: 400;\n}\n\n.action-label {\n    color: #3C5AFD;\n    font-size: 24;\n    font-weight: bold;\n    vertical-align: center;\n}\n\n.action-image {\n    width: 40;\n    height: 40;\n    vertical-align: center;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"test\">\n  <StackLayout orientation=\"horizontal\"\n    ios:horizontalAlignment=\"center\"\n    android:horizontalAlignment=\"center\">\n    <!--<Image src=\"res://nativescript_logo\" class=\"action-image\"></Image>-->\n    <Label text=\".:: SWING TIME ::.\" class=\"action-label\"></Label>\n  </StackLayout>\n</ActionBar>\n\n\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n                <StackLayout>\n                    <Label text=\".:: TUS RETOS ::.\" class=\"h1 text-center p-t-20\"></Label>\n\n                    <Label text=\"prueba1\" class=\"h2 text-center p-t-20\"></Label>\n\n                    <FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n                    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n                    </FlexboxLayout>\n                    \n                    <Label text=\"prueba2\" class=\"h2 text-center p-t-20\"></Label>\n                    <Label text=\"prueba3\" class=\"h2 text-center p-t-20\"></Label>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\".::MIS DATOS::.\" class=\"h1 text-center p-t-20\"></Label>\n\n                \n\n                    <RadDataForm [source]=\"userList\">\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"name\" displayName=\"NOMBRE\"\n                                index=\"0\"></TKEntityProperty>\n                            \n                    </RadDataForm>\n                </StackLayout>\n                \n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\" [icon]=\"item.icon\"> </Label>\n           \n          \n\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    //-----------------------------------------------------------------------------
    function HomeComponent(challengeService) {
        this.challengeService = challengeService;
        this.isLoading = false;
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = ui_enums__WEBPACK_IMPORTED_MODULE_3__["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
        // Tab Contents and Properties
        this.tabContainer = {
            backgroundColor: '#fff',
            focusColor: '#fff'
        };
        this.tabList = [
            { text: 'ENTRENA', backgroundColor: '#40E0D0', color: '#000', icon: 'res://home' },
            { text: 'INICIO', backgroundColor: '#48D1CC', color: '#000' },
            { text: 'DATOS', backgroundColor: '#00CED1', color: '#000' },
        ];
        this.currentTabIndex = 2;
        this.defaultSelected = 1;
        //-----------------------------------------------------------------------------
        this.userList = { name: "cristhian" };
    }
    // --------------------------------------------------------------------
    // Hooks
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.initializeTabBar();
    };
    // --------------------------------------------------------------------
    // User Interaction
    // MY: Tabs selected index is changed, e.g. when swipe to navigate.
    HomeComponent.prototype.onSelectedIndexChanged = function (args) {
        if (args.newIndex !== this.currentTabIndex) {
            this.onBottomNavTap(args.newIndex);
        }
    };
    // Tap on a one of the tabs
    HomeComponent.prototype.onBottomNavTap = function (index, duration) {
        if (duration === void 0) { duration = 300; }
        if (this.currentTabIndex !== index) {
            var tabContentsArr = this.tabContents.toArray();
            // set unfocus to previous index
            tabContentsArr[this.currentTabIndex].nativeElement.animate(this.getUnfocusAnimation(this.currentTabIndex, duration));
            // set focus to current index
            tabContentsArr[index].nativeElement.animate(this.getFocusAnimation(index, duration));
        }
        // MY: Change the selected index of Tabs when tap on tab strip
        if (this.tabs.nativeElement.selectedIndex !== index) {
            this.tabs.nativeElement.selectedIndex = index;
        }
        this.centerCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.leftTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.rightTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.centerPatch.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.dragCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
        // set current index to new index
        this.currentTabIndex = index;
    };
    // Drag the focus circle to one of the tabs
    HomeComponent.prototype.onCenterCirclePan = function (args) {
        var grdLayout = args.object;
        var newX = grdLayout.translateX + args.deltaX - this.prevDeltaX;
        if (args.state === 0) {
            // finger down
            this.prevDeltaX = 0;
        }
        else if (args.state === 2) {
            // finger moving
            grdLayout.translateX = newX;
            this.leftTabs.nativeElement.translateX = newX;
            this.rightTabs.nativeElement.translateX = newX;
            this.centerPatch.nativeElement.translateX = newX;
            this.centerCircle.nativeElement.translateX = newX;
            this.prevDeltaX = args.deltaX;
        }
        else if (args.state === 3) {
            // finger up
            this.prevDeltaX = 0;
            var tabWidth = platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs / this.tabList.length;
            var tabSelected = Math.round(Math.abs(newX / tabWidth));
            var translateX = tabSelected * tabWidth;
            if (newX < 0) {
                // pan left
                this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
                // MY: Change the selected index of Tabs when pan left
                this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
            }
            else {
                // pan right
                this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
                // MY: Change the selected index of Tabs when pan right
                this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
            }
        }
    };
    // --------------------------------------------------------------------
    // Tab bar helpers
    HomeComponent.prototype.initializeTabBar = function () {
        // set up base layer
        this.leftTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
        // set default selected tab
        var tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
        this.currentTabIndex = this.defaultSelected;
    };
    HomeComponent.prototype.getSlideAnimation = function (index, duration) {
        return {
            translate: { x: this.getTabTranslateX(index), y: 0 },
            curve: this.animationCurve,
            duration: duration
        };
    };
    HomeComponent.prototype.getFocusAnimation = function (index, duration) {
        return {
            scale: { x: 1.5, y: 1.5 },
            translate: { x: 0, y: -15 },
            duration: duration
        };
    };
    HomeComponent.prototype.getUnfocusAnimation = function (index, duration) {
        return {
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration
        };
    };
    HomeComponent.prototype.getTabTranslateX = function (index) {
        return index * platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs / this.tabList.length - (platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(function (res) {
            console.log('Fetched challenge...');
            _this.isLoading = false;
            //this.loadTabRoutes();
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
            //this.loadTabRoutes();
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _home_service__WEBPACK_IMPORTED_MODULE_0__["ChallengeService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('centerCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "centerCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dragCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "dragCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "leftTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "rightTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('centerPatch', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "centerPatch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabBGContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "tabBGContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('tabContents', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], HomeComponent.prototype, "tabContents", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_0__["ChallengeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Challenge", function() { return Challenge; });
var Challenge = /** @class */ (function () {
    function Challenge(time) {
        this.time = time;
        return;
    }
    return Challenge;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _home_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home.model.ts");





var ChallengeService = /** @class */ (function () {
    function ChallengeService(http) {
        this.http = http;
        this._currentChallenge = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    Object.defineProperty(ChallengeService.prototype, "currentChallenge", {
        get: function () {
            return this._currentChallenge.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ChallengeService.prototype.fetchCurrentChallenge = function () {
        var _this = this;
        return this.http
            .get('http://192.168.0.17:8000/timeSVM/23/50/2/60/1/0/0/0/1/0')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (resData) {
                var loadedChallenge = new _home_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](resData.time);
                _this._currentChallenge.next(loadedChallenge);
            }
        }));
    };
    ChallengeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChallengeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChallengeService);
    return ChallengeService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsZ0NBQWdDLDZCQUE2QixvQkFBb0IsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQiwyREFBMkQsdUJBQXVCLEdBQUcsbUJBQW1CLHFCQUFxQixvQkFBb0Isd0JBQXdCLDZCQUE2QixHQUFHLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLEM7Ozs7Ozs7QUNBcmMsaTdIQUFpN0gsNHRCOzs7Ozs7OztBQ0FqN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUUrRDtBQUMvRTtB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T0FBTyxDQUFDLElBQUksQ0FDYixDQUFDO2dCQUNGLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Z0JBbkJ5QiwrREFBVTs7SUFIekIsZ0JBQWdCO1FBRDVCLGdFQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBSVAsK0RBQVU7T0FIekIsZ0JBQWdCLENBb0M1QjtJQUFELHVCQUFDO0NBQUE7QUFwQzRCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXJlZ3VsYXItNDAwJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmFjdGlvbi1sYWJlbCB7XFxuICAgIGNvbG9yOiAjM0M1QUZEO1xcbiAgICBmb250LXNpemU6IDI0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFjdGlvbi1pbWFnZSB7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwidGVzdFxcXCI+XFxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXFxuICAgIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgPCEtLTxJbWFnZSBzcmM9XFxcInJlczovL25hdGl2ZXNjcmlwdF9sb2dvXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWltYWdlXFxcIj48L0ltYWdlPi0tPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiLjo6IFNXSU5HIFRJTUUgOjouXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG48L0FjdGlvbkJhcj5cXG5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8VGFicyAjdGFicyBbc2VsZWN0ZWRJbmRleF09XFxcImRlZmF1bHRTZWxlY3RlZFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMF0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIi46OiBUVVMgUkVUT1MgOjouXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInBydWViYTFcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwicHJ1ZWJhMlxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJwcnVlYmEzXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzFdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCb3R0b20gTmF2IENvbnRlbnQgMlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsyXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiLjo6TUlTIERBVE9TOjouXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgIDxSYWREYXRhRm9ybSBbc291cmNlXT1cXFwidXNlckxpc3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm5hbWVcXFwiIGRpc3BsYXlOYW1lPVxcXCJOT01CUkVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiMFxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkRGF0YUZvcm0+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICBcXG4gICAgICAgIDwvVGFicz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8IS0tIGJvdHRvbSB0YWJzIC0tPlxcbiAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcImF1dG9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGNvbHVtbnM9XFxcIiosICosICpcXFwiPlxcblxcbiAgICAgICAgPCEtLSBiYXNlIGxheWVyIC0tPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0IGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkJHQ29udGFpbmVyIGNvbHVtbnM9XFxcImF1dG8sIDEwLCBhdXRvLCAxMCwgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNsZWZ0VGFicyBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiMCA2OCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlclBhdGNoIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjcmlnaHRUYWJzIGNvbD1cXFwiM1xcXCIgY29sU3Bhbj1cXFwiNFxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCI2OCAwIDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIGZvY3VzIGNpcmNsZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlckNpcmNsZSBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiMTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMFxcXCIgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbY3VycmVudFRhYkluZGV4XS5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjUwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5mb2N1c0NvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHRhYiBjb250ZW50cyAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICN0YWJDb250ZW50cyAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRhYkxpc3Q7IGxldCBpID0gaW5kZXhcXFwiXFxuICAgICAgICAgICAgW2NvbF09XFxcImlcXFwiIG1hcmdpblRvcD1cXFwiMjBcXFwiICh0YXApPVxcXCJvbkJvdHRvbU5hdlRhcChpKVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhLXJlZ3VsYXJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIlxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtjb2xvcl09XFxcIml0ZW0uY29sb3JcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCIgW2ljb25dPVxcXCJpdGVtLmljb25cXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgXFxuICAgICAgICAgIFxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPCEtLSBwYW4gbGF5ZXIgLS0+XFxuICAgICAgICA8R3JpZExheW91dCAjZHJhZ0NpcmNsZSBjb2x1bW49XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIChwYW4pPVxcXCJvbkNlbnRlckNpcmNsZVBhbigkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaGVpZ2h0PVxcXCI5MFxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiOTBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlU3RhdGVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuXG4vLyBwYXJ0ZSBncmFmaWNhXG5cbiAgICBAVmlld0NoaWxkKCd0YWJzJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHJhZ0NpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRyYWdDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnbGVmdFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsZWZ0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdyaWdodFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSByaWdodFRhYnM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY2VudGVyUGF0Y2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJQYXRjaDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCd0YWJCR0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYkJHQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZHJlbigndGFiQ29udGVudHMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXG4gICAgLy8gUGFuIEhlbHBlclxuICAgIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cblxuICAgIGFuaW1hdGlvbkN1cnZlID0gQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoLjM4LCAuNDcsIDAsIDEpO1xuXG4gICAgLy8gVGFiIENvbnRlbnRzIGFuZCBQcm9wZXJ0aWVzXG4gICAgdGFiQ29udGFpbmVyID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgZm9jdXNDb2xvcjogJyNmZmYnXG4gICAgfTtcbiAgICB0YWJMaXN0OiB7IHRleHQ6IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBmYWRlQ29sb3I/OiBzdHJpbmcsIGljb24/OiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7IHRleHQ6ICdFTlRSRU5BJywgYmFja2dyb3VuZENvbG9yOiAnIzQwRTBEMCcsIGNvbG9yOiAnIzAwMCcsIGljb246J3JlczovL2hvbWUnICB9LFxuICAgICAgICB7IHRleHQ6ICdJTklDSU8nLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDhEMUNDJywgY29sb3I6ICcjMDAwJyAgfSxcbiAgICAgICAgeyB0ZXh0OiAnREFUT1MnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBDRUQxJywgY29sb3I6ICcjMDAwJ30sXG5cbiAgICBdO1xuXG4gICAgY3VycmVudFRhYkluZGV4OiBudW1iZXIgPSAyO1xuICAgIGRlZmF1bHRTZWxlY3RlZDogbnVtYmVyID0gMTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG9va3NcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFiQmFyKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBVc2VyIEludGVyYWN0aW9uXG5cbiAgICAvLyBNWTogVGFicyBzZWxlY3RlZCBpbmRleCBpcyBjaGFuZ2VkLCBlLmcuIHdoZW4gc3dpcGUgdG8gbmF2aWdhdGUuXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoYXJncy5uZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50VGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoYXJncy5uZXdJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYXAgb24gYSBvbmUgb2YgdGhlIHRhYnNcbiAgICBvbkJvdHRvbU5hdlRhcChpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB1bmZvY3VzIHRvIHByZXZpb3VzIGluZGV4XG4gICAgICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmN1cnJlbnRUYWJJbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0VW5mb2N1c0FuaW1hdGlvbih0aGlzLmN1cnJlbnRUYWJJbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICAgIHRhYkNvbnRlbnRzQXJyW2luZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRGb2N1c0FuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiB0YXAgb24gdGFiIHN0cmlwXG4gICAgICAgIGlmICh0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmRyYWdDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgaW5kZXggdG8gbmV3IGluZGV4XG4gICAgICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8gRHJhZyB0aGUgZm9jdXMgY2lyY2xlIHRvIG9uZSBvZiB0aGUgdGFic1xuICAgIG9uQ2VudGVyQ2lyY2xlUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgbGV0IGdyZExheW91dDogR3JpZExheW91dCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgbmV3WDogbnVtYmVyID0gZ3JkTGF5b3V0LnRyYW5zbGF0ZVggKyBhcmdzLmRlbHRhWCAtIHRoaXMucHJldkRlbHRhWDtcblxuICAgICAgICBpZiAoYXJncy5zdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZmluZ2VyIGRvd25cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgLy8gZmluZ2VyIG1vdmluZ1xuICAgICAgICAgICAgZ3JkTGF5b3V0LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG5cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IGFyZ3MuZGVsdGFYO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIC8vIGZpbmdlciB1cFxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHRhYldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRhYlNlbGVjdGVkOiBudW1iZXIgPSBNYXRoLnJvdW5kKE1hdGguYWJzKG5ld1ggLyB0YWJXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gdGFiU2VsZWN0ZWQgKiB0YWJXaWR0aDtcbiAgICAgICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgICAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhbiByaWdodFxuICAgICAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAgICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVGFiIGJhciBoZWxwZXJzXG5cbiAgICBpbml0aWFsaXplVGFiQmFyKCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgYmFzZSBsYXllclxuICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC53aWR0aCA9IDEwMDtcblxuICAgICAgICB0aGlzLnRhYkJHQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpIC0gKDgwIC8gMik7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgc2VsZWN0ZWQgdGFiXG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWCA9IDEuNTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVZID0gMS41O1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gLSAxNTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRTbGlkZUFuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogdGhpcy5nZXRUYWJUcmFuc2xhdGVYKGluZGV4KSwgeTogMCB9LFxuICAgICAgICAgICAgY3VydmU6IHRoaXMuYW5pbWF0aW9uQ3VydmUsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRGb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLjUsIHk6IDEuNSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0xNSB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VW5mb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VGFiVHJhbnNsYXRlWChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSArICg4MCAvIDIpXG4gICAgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuZmV0Y2hDdXJyZW50Q2hhbGxlbmdlKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBjaGFsbGVuZ2UuLi4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkVGFiUm91dGVzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRUYWJSb3V0ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnVzZXJMaXN0OiB7IG5hbWU6IHN0cmluZ30gPSBcbiAgICAgICAgeyBuYW1lOiBcImNyaXN0aGlhblwifTtcblxuICAgIFxuXG59XG5cblxuXG4iLCJleHBvcnQgY2xhc3MgQ2hhbGxlbmdlIHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGltZTpudW1iZXIpe1xyXG5cdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlU2VydmljZSB9IGZyb20gXCIuL2hvbWUuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi9ob21lLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9jdXJyZW50Q2hhbGxlbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFsbGVuZ2U+KG51bGwpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGdldCBjdXJyZW50Q2hhbGxlbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBmZXRjaEN1cnJlbnRDaGFsbGVuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8e3RpbWU6IG51bWJlcn0+KCdodHRwOi8vMTkyLjE2OC4wLjE3OjgwMDAvdGltZVNWTS8yMy81MC8yLzYwLzEvMC8wLzAvMS8wJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKHJlc0RhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZShcclxuICAgICAgICAgICAgICByZXNEYXRhLnRpbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGxvYWRlZENoYWxsZW5nZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIFxyXG4vL1xyXG4vLyAgcHJpdmF0ZSBzYXZlVG9TZXJ2ZXIoY2hhbGxlbmdlOiBDaGFsbGVuZ2UpIHtcclxuLy8gICAgdGhpcy5odHRwXHJcbi8vICAgICAgLnB1dCgnaHR0cHM6Ly9ucy1uZy1jb3Vyc2UuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLmpzb24nLCBjaGFsbGVuZ2UpXHJcbi8vICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4vLyAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuLy9cclxuLy8gICAgICB9KTtcclxuLy8gIH1cclxuLy9cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==