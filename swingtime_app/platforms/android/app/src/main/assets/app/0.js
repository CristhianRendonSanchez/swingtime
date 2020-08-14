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

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n    font-family: 'Font Awesome 5 Free', 'fa-regular-400';\n    font-weight: 400;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"SWING TIME\">\n</ActionBar>\n\n<!--\n<StackLayout>\n    <BottomNavigation>\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"Home\"></Label>\n                <Image src=\"res://home\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Settings\"></Label>\n                <Image src=\"res://settings\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Search\"></Label>\n                <Image src=\"res://search\"></Image>\n            </TabStripItem>\n        </TabStrip>\n        <TabContentItem>\n            <GridLayout >\n                <Label text=\"Home Page\" class=\"h2 text-center\">\n                </Label>\n\n                \n                  \n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Settings Page\" class=\"h2 text-center\">\n                </Label>\n                <ScrollView orientation=\"horizontal\">\n                    \n                </ScrollView>\n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Search Page\" class=\"h2 text-center\">\n                </Label>\n            </GridLayout>\n        </TabContentItem>\n    </BottomNavigation>\n</StackLayout>\n\n-->\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 1\" class=\"h1 text-center p-t-20\">\n                        dsadfsfdsfsdafsad\n                    </Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 3\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\"></Label>\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
        // Tab Contents and Properties
        this.tabContainer = {
            backgroundColor: '#fff',
            focusColor: '#fff'
        };
        this.tabList = [
            { text: String.fromCharCode(0xf080), backgroundColor: '#40E0D0', color: '#000' },
            { text: String.fromCharCode(0xf075), backgroundColor: '#48D1CC', color: '#000' },
            { text: String.fromCharCode(0xf259), backgroundColor: '#00CED1', color: '#000' },
        ];
        this.currentTabIndex = 2;
        this.defaultSelected = 2;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
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
            var tabWidth = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / this.tabList.length;
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
        this.leftTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
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
        return index * platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / this.tabList.length - (platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dragCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "dragCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('leftTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "leftTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rightTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "rightTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerPatch', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerPatch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabBGContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabBGContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tabContents', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeComponent.prototype, "tabContents", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLDJEQUEyRCx1QkFBdUIsR0FBRyxDOzs7Ozs7O0FDQTNQLGtzSUFBa3NJLDJxQjs7Ozs7Ozs7QUNBbHNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQy9FO0FBR1E7QUFTMUM7SUFrQ0k7UUFyQkEsYUFBYTtRQUNiLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHdkIsbUJBQWMsR0FBRyx1REFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RCw4QkFBOEI7UUFDOUIs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QVM7c0RBQWE7SUFWN0UsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0F5S3pCO0lBQUQsb0JBQUM7Q0FBQTtBQXpLeUI7Ozs7Ozs7OztBQ2IxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFDYTtBQUNKO0FBQ0E7QUFDTjtBQUNNO0FBQ2dCO0FBQ3RCO0FBQ0w7QUFFWDtBQUNUO0FBc0JqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBcEJ0Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlHQUE4QjtnQkFDOUIsNkZBQTRCO2dCQUM1Qiw2RkFBNEI7Z0JBQzVCLHVGQUF5QjtnQkFDekIsNkZBQTRCO2dCQUM1Qiw2R0FBd0M7Z0JBQ3hDLHVGQUF5QjtnQkFDekIsb0ZBQXdCO2dCQUN4Qix1RUFBaUI7Z0JBQ2pCLGtGQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw4REFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXJlZ3VsYXItNDAwJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiU1dJTkcgVElNRVxcXCI+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPCEtLVxcbjxTdGFja0xheW91dD5cXG4gICAgPEJvdHRvbU5hdmlnYXRpb24+XFxuICAgICAgICA8VGFiU3RyaXA+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2hvbWVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNldHRpbmdzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9zZXR0aW5nc1xcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9zZWFyY2hcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0ID5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvbWUgUGFnZVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgICAgICA8R3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNldHRpbmdzIFBhZ2VcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgICAgICA8R3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNlYXJjaCBQYWdlXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cXG48L1N0YWNrTGF5b3V0Plxcblxcbi0tPlxcbjxHcmlkTGF5b3V0PlxcbiAgICA8R3JpZExheW91dD5cXG4gICAgICAgIDxUYWJzICN0YWJzIFtzZWxlY3RlZEluZGV4XT1cXFwiZGVmYXVsdFNlbGVjdGVkXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZWQpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFswXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDFcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzYWRmc2Zkc2ZzZGFmc2FkXFxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzFdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCb3R0b20gTmF2IENvbnRlbnQgMlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsyXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDNcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgIFxcbiAgICAgICAgPC9UYWJzPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDwhLS0gYm90dG9tIHRhYnMgLS0+XFxuICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cXFwiYXV0b1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCI+XFxuXFxuICAgICAgICA8IS0tIGJhc2UgbGF5ZXIgLS0+XFxuICAgICAgICA8QWJzb2x1dGVMYXlvdXQgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCAjdGFiQkdDb250YWluZXIgY29sdW1ucz1cXFwiYXV0bywgMTAsIGF1dG8sIDEwLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2xlZnRUYWJzIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCIwIDY4IDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjY2VudGVyUGF0Y2ggY29sPVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNyaWdodFRhYnMgY29sPVxcXCIzXFxcIiBjb2xTcGFuPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjgwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBib3JkZXJSYWRpdXM9XFxcIjY4IDAgMCAwXFxcIj48L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gZm9jdXMgY2lyY2xlIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjY2VudGVyQ2lyY2xlIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cXFwiMTAwXFxcIiBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFtjdXJyZW50VGFiSW5kZXhdLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNTBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIG1hcmdpbkJvdHRvbT1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiOTBcXFwiIHdpZHRoPVxcXCI5MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmZvY3VzQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVxcXCI0NVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9BYnNvbHV0ZUxheW91dD5cXG5cXG4gICAgICAgIDwhLS0gdGFiIGNvbnRlbnRzIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkNvbnRlbnRzICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgdGFiTGlzdDsgbGV0IGkgPSBpbmRleFxcXCJcXG4gICAgICAgICAgICBbY29sXT1cXFwiaVxcXCIgbWFyZ2luVG9wPVxcXCIyMFxcXCIgKHRhcCk9XFxcIm9uQm90dG9tTmF2VGFwKGkpXFxcIlxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJtaWRkbGVcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZmEtcmVndWxhclxcXCIgW3RleHRdPVxcXCJpdGVtLnRleHRcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJtaWRkbGVcXFwiXFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW2NvbG9yXT1cXFwiaXRlbS5jb2xvclxcXCIgZm9udFNpemU9XFxcIjIwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPCEtLSBwYW4gbGF5ZXIgLS0+XFxuICAgICAgICA8R3JpZExheW91dCAjZHJhZ0NpcmNsZSBjb2x1bW49XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIChwYW4pPVxcXCJvbkNlbnRlckNpcmNsZVBhbigkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaGVpZ2h0PVxcXCI5MFxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiOTBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVN0YXRlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCd0YWJzJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHJhZ0NpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRyYWdDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnbGVmdFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsZWZ0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdyaWdodFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSByaWdodFRhYnM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY2VudGVyUGF0Y2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJQYXRjaDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCd0YWJCR0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYkJHQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZHJlbigndGFiQ29udGVudHMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXG4gICAgLy8gUGFuIEhlbHBlclxuICAgIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cblxuICAgIGFuaW1hdGlvbkN1cnZlID0gQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoLjM4LCAuNDcsIDAsIDEpO1xuXG4gICAgLy8gVGFiIENvbnRlbnRzIGFuZCBQcm9wZXJ0aWVzXG4gICAgdGFiQ29udGFpbmVyID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgZm9jdXNDb2xvcjogJyNmZmYnXG4gICAgfTtcbiAgICB0YWJMaXN0OiB7IHRleHQ6IHN0cmluZywgaWNvbj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBmYWRlQ29sb3I/OiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDgwKSwgYmFja2dyb3VuZENvbG9yOiAnIzQwRTBEMCcsIGNvbG9yOiAnIzAwMCcgfSxcbiAgICAgICAgeyB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA3NSksIGJhY2tncm91bmRDb2xvcjogJyM0OEQxQ0MnLCBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYyNTkpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBDRUQxJywgY29sb3I6ICcjMDAwJyB9LFxuXG4gICAgXTtcblxuICAgIGN1cnJlbnRUYWJJbmRleDogbnVtYmVyID0gMjtcbiAgICBkZWZhdWx0U2VsZWN0ZWQ6IG51bWJlciA9IDI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG9va3NcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFiQmFyKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBVc2VyIEludGVyYWN0aW9uXG5cbiAgICAvLyBNWTogVGFicyBzZWxlY3RlZCBpbmRleCBpcyBjaGFuZ2VkLCBlLmcuIHdoZW4gc3dpcGUgdG8gbmF2aWdhdGUuXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoYXJncy5uZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50VGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoYXJncy5uZXdJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYXAgb24gYSBvbmUgb2YgdGhlIHRhYnNcbiAgICBvbkJvdHRvbU5hdlRhcChpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB1bmZvY3VzIHRvIHByZXZpb3VzIGluZGV4XG4gICAgICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmN1cnJlbnRUYWJJbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0VW5mb2N1c0FuaW1hdGlvbih0aGlzLmN1cnJlbnRUYWJJbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICAgIHRhYkNvbnRlbnRzQXJyW2luZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRGb2N1c0FuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiB0YXAgb24gdGFiIHN0cmlwXG4gICAgICAgIGlmICh0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmRyYWdDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgaW5kZXggdG8gbmV3IGluZGV4XG4gICAgICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8gRHJhZyB0aGUgZm9jdXMgY2lyY2xlIHRvIG9uZSBvZiB0aGUgdGFic1xuICAgIG9uQ2VudGVyQ2lyY2xlUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgbGV0IGdyZExheW91dDogR3JpZExheW91dCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgbmV3WDogbnVtYmVyID0gZ3JkTGF5b3V0LnRyYW5zbGF0ZVggKyBhcmdzLmRlbHRhWCAtIHRoaXMucHJldkRlbHRhWDtcblxuICAgICAgICBpZiAoYXJncy5zdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZmluZ2VyIGRvd25cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgLy8gZmluZ2VyIG1vdmluZ1xuICAgICAgICAgICAgZ3JkTGF5b3V0LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG5cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IGFyZ3MuZGVsdGFYO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIC8vIGZpbmdlciB1cFxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHRhYldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRhYlNlbGVjdGVkOiBudW1iZXIgPSBNYXRoLnJvdW5kKE1hdGguYWJzKG5ld1ggLyB0YWJXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gdGFiU2VsZWN0ZWQgKiB0YWJXaWR0aDtcbiAgICAgICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgICAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhbiByaWdodFxuICAgICAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAgICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVGFiIGJhciBoZWxwZXJzXG5cbiAgICBpbml0aWFsaXplVGFiQmFyKCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgYmFzZSBsYXllclxuICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC53aWR0aCA9IDEwMDtcblxuICAgICAgICB0aGlzLnRhYkJHQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpIC0gKDgwIC8gMik7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgc2VsZWN0ZWQgdGFiXG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWCA9IDEuNTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVZID0gMS41O1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gLSAxNTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRTbGlkZUFuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogdGhpcy5nZXRUYWJUcmFuc2xhdGVYKGluZGV4KSwgeTogMCB9LFxuICAgICAgICAgICAgY3VydmU6IHRoaXMuYW5pbWF0aW9uQ3VydmUsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRGb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLjUsIHk6IDEuNSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0xNSB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VW5mb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VGFiVHJhbnNsYXRlWChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSArICg4MCAvIDIpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==