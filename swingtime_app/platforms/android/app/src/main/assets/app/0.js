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

module.exports = "\n.home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n    font-family: 'Font Awesome 5 Free', 'fa-regular-400';\n    font-weight: 400;\n}\n\n.action-label {\n    color: #3C5AFD;\n    font-size: 24;\n    font-weight: bold;\n    vertical-align: center;\n}\n\n.action-image {\n    width: 40;\n    height: 40;\n    vertical-align: center;\n}\n\n.stacklayoutStyle{\n    width: 100;\n    height: 100;\n    margin: 15;\n    vertical-align:center;\n    text-align: center;\n}\n.secondStacklayoutStyle label{\n    font-size: 24;\n    border-color: lightgray;\n    border-width: 1;\n    border-radius: 2;\n}\n.layoutStyle{\n    text-align: center;\n}\n.layoutStyle gridlayout{\n    horizontal-align:center;\n}\n\n.picker {\n    background-color: blanchedalmond;\n    color: red;\n    border-color: brown;\n    border-radius: 20;\n    border-width: 2;\n    width: 200;\n    height: 100;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"test\">\n  <StackLayout orientation=\"horizontal\"\n    ios:horizontalAlignment=\"center\"\n    android:horizontalAlignment=\"center\">\n    <!--<Image src=\"res://nativescript_logo\" class=\"action-image\"></Image>-->\n    <Label text=\".:: SWING TIME ::.\" class=\"action-label\"></Label>\n  </StackLayout>\n</ActionBar>\n\n\n\n\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">7\n                <StackLayout>\n                    <Label text=\".:: TUS RETOS ::.\" class=\"h1 text-center p-t-20\"></Label>\n                    \n\n                    <RadListView [items]=\"trainer\" marginRight=\"-2\">\n                        <ListViewGridLayout tkListViewLayout \n                            itemHeight=\"300\" spanCount=\"1\">\n                        </ListViewGridLayout>\n                        <ng-template tkListItemTemplate let-item=\"item\">        \n                            <GridLayout verticalAlignment=\"center\">\n                                <StackLayout orientation=\"vertical\"  height=\"210\">\n\n                                   <Label text=\"{{ item.recomend }}\"></Label>\n\n                                    <Label text=\"{{ item.estilo }}\"></Label>\n\n                                    <label text=\"para completar este reto debes nadar\"></label>\n\n                                    <Label text=\"{{ item.distancia }}\"></Label>\n\n                                    <Label text=\"{{ item.tiempo }}\"></Label>\n\n                                    <GridLayout>\n                                        <label text=\"cumplido\"></label>\n                                        <Switch checked=\"false\"></Switch>\n                                    </GridLayout> \n\n                                   \n                         \n\n                                </StackLayout>\n                            </GridLayout>\n                             \n\n                        </ng-template>\n                    </RadListView>\n\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\".::MIS DATOS::.\" class=\"h1 text-center p-t-20\"></Label>\n\n                \n\n                    <RadDataForm [source]=\"userList\">\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nombre\" displayName=\"NOMBRE\"\n                                index=\"0\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"apellido\" displayName=\"APELLIDO\"\n                                index=\"1\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"edad\" displayName=\"EDAD\"\n                                index=\"2\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"peso\" displayName=\"PESO\"\n                                index=\"3\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nivel\" displayName=\"NIVEL\"\n                                index=\"4\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"genero\" displayName=\"GENERO\"\n                                index=\"5\"></TKEntityProperty>\n                    </RadDataForm>\n\n                    <Label text=\".::RETOS CUMPLIDOS::.\" class=\"h1 text-center p-t-20\"></Label> \n\n                </StackLayout>\n                \n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n    \n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\" [icon]=\"item.icon\"> </Label>\n           \n          \n\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>\n"

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
    //-----------------------------------------------------------------------------
    function HomeComponent() {
        this.isLoading = false;
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
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
        this.userList = { nombre: "Cristhian",
            apellido: "Rendon",
            edad: 23,
            peso: 64,
            nivel: 2,
            genero: "hombre" };
        this.trainer = [
            { recomend: "SVM", estilo: "libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeSVM/23/50/2/64/1/0/0/0/1/0" },
            { recomend: "Ramdon Forest", estilo: "libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeRF/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "KNN", estilo: "libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeKNN/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "SVM", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceSVM/23/50/2/64/1/0/0/0/1/0" },
            { recomend: "Ramdon Forest", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceSRF/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "KNN", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceKNN/23/2/60/60/1/0/0/0/1/0" },
            { recomend: "", estilo: "", tiempo: "", distancia: "" },
        ];
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
    HomeComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5QixnQ0FBZ0MsNkJBQTZCLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLDJEQUEyRCx1QkFBdUIsR0FBRyxtQkFBbUIscUJBQXFCLG9CQUFvQix3QkFBd0IsNkJBQTZCLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsaUJBQWlCLDRCQUE0Qix5QkFBeUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLDhCQUE4QixzQkFBc0IsdUJBQXVCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRywwQkFBMEIsOEJBQThCLEdBQUcsYUFBYSx1Q0FBdUMsaUJBQWlCLDBCQUEwQix3QkFBd0Isc0JBQXNCLGlC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ZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG4uaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtcmVndWxhci00MDAnO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYWN0aW9uLWxhYmVsIHtcXG4gICAgY29sb3I6ICMzQzVBRkQ7XFxuICAgIGZvbnQtc2l6ZTogMjQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWN0aW9uLWltYWdlIHtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhY2tsYXlvdXRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIG1hcmdpbjogMTU7XFxuICAgIHZlcnRpY2FsLWFsaWduOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2Vjb25kU3RhY2tsYXlvdXRTdHlsZSBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAyNDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG59XFxuLmxheW91dFN0eWxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sYXlvdXRTdHlsZSBncmlkbGF5b3V0e1xcbiAgICBob3Jpem9udGFsLWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLnBpY2tlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgICB3aWR0aDogMjAwO1xcbiAgICBoZWlnaHQ6IDEwMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwidGVzdFxcXCI+XFxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXFxuICAgIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgPCEtLTxJbWFnZSBzcmM9XFxcInJlczovL25hdGl2ZXNjcmlwdF9sb2dvXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWltYWdlXFxcIj48L0ltYWdlPi0tPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiLjo6IFNXSU5HIFRJTUUgOjouXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG48L0FjdGlvbkJhcj5cXG5cXG5cXG5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8VGFicyAjdGFicyBbc2VsZWN0ZWRJbmRleF09XFxcImRlZmF1bHRTZWxlY3RlZFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMF0uYmFja2dyb3VuZENvbG9yXFxcIj43XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIuOjogVFVTIFJFVE9TIDo6LlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcInRyYWluZXJcXFwiIG1hcmdpblJpZ2h0PVxcXCItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3R3JpZExheW91dCB0a0xpc3RWaWV3TGF5b3V0IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0PVxcXCIzMDBcXFwiIHNwYW5Db3VudD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlld0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+ICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiAgaGVpZ2h0PVxcXCIyMTBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0ucmVjb21lbmQgfX1cXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0uZXN0aWxvIH19XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJwYXJhIGNvbXBsZXRhciBlc3RlIHJldG8gZGViZXMgbmFkYXJcXFwiPjwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0uZGlzdGFuY2lhIH19XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnRpZW1wbyB9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcImN1bXBsaWRvXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIj48L1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+IFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkTGlzdFZpZXc+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwiLi4uLi4uLi4uXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCIuLi4uLi4uLi5cXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwiLi4uLi4uLi4uXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsxXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDJcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMl0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIi46Ok1JUyBEQVRPUzo6LlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgICAgICA8UmFkRGF0YUZvcm0gW3NvdXJjZV09XFxcInVzZXJMaXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJub21icmVcXFwiIGRpc3BsYXlOYW1lPVxcXCJOT01CUkVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiMFxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFwZWxsaWRvXFxcIiBkaXNwbGF5TmFtZT1cXFwiQVBFTExJRE9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiMVxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImVkYWRcXFwiIGRpc3BsYXlOYW1lPVxcXCJFREFEXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjJcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJwZXNvXFxcIiBkaXNwbGF5TmFtZT1cXFwiUEVTT1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIzXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibml2ZWxcXFwiIGRpc3BsYXlOYW1lPVxcXCJOSVZFTFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCI0XFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiZ2VuZXJvXFxcIiBkaXNwbGF5TmFtZT1cXFwiR0VORVJPXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjVcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkRGF0YUZvcm0+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiLjo6UkVUT1MgQ1VNUExJRE9TOjouXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPiBcXG5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgIFxcbiAgICAgICAgPC9UYWJzPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIFxcblxcbiAgICA8IS0tIGJvdHRvbSB0YWJzIC0tPlxcbiAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcImF1dG9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGNvbHVtbnM9XFxcIiosICosICpcXFwiPlxcblxcbiAgICAgICAgPCEtLSBiYXNlIGxheWVyIC0tPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0IGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkJHQ29udGFpbmVyIGNvbHVtbnM9XFxcImF1dG8sIDEwLCBhdXRvLCAxMCwgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNsZWZ0VGFicyBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiMCA2OCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlclBhdGNoIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjcmlnaHRUYWJzIGNvbD1cXFwiM1xcXCIgY29sU3Bhbj1cXFwiNFxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCI2OCAwIDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIGZvY3VzIGNpcmNsZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlckNpcmNsZSBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiMTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMFxcXCIgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbY3VycmVudFRhYkluZGV4XS5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjUwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5mb2N1c0NvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHRhYiBjb250ZW50cyAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICN0YWJDb250ZW50cyAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRhYkxpc3Q7IGxldCBpID0gaW5kZXhcXFwiXFxuICAgICAgICAgICAgW2NvbF09XFxcImlcXFwiIG1hcmdpblRvcD1cXFwiMjBcXFwiICh0YXApPVxcXCJvbkJvdHRvbU5hdlRhcChpKVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhLXJlZ3VsYXJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIlxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtjb2xvcl09XFxcIml0ZW0uY29sb3JcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCIgW2ljb25dPVxcXCJpdGVtLmljb25cXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgXFxuICAgICAgICAgIFxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPCEtLSBwYW4gbGF5ZXIgLS0+XFxuICAgICAgICA8R3JpZExheW91dCAjZHJhZ0NpcmNsZSBjb2x1bW49XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIChwYW4pPVxcXCJvbkNlbnRlckNpcmNsZVBhbigkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaGVpZ2h0PVxcXCI5MFxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiOTBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlU3RhdGVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuXG5cbi8vIHBhcnRlIGdyYWZpY2FcblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NlbnRlckNpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlckNpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdkcmFnQ2lyY2xlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhZ0NpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdsZWZ0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIGxlZnRUYWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3JpZ2h0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHJpZ2h0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJQYXRjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlclBhdGNoOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkJHQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQkdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkcmVuKCd0YWJDb250ZW50cycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG5cbiAgICAvLyBQYW4gSGVscGVyXG4gICAgcHJldkRlbHRhWDogbnVtYmVyID0gMDtcblxuXG4gICAgYW5pbWF0aW9uQ3VydmUgPSBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguMzgsIC40NywgMCwgMSk7XG5cbiAgICAvLyBUYWIgQ29udGVudHMgYW5kIFByb3BlcnRpZXNcbiAgICB0YWJDb250YWluZXIgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBmb2N1c0NvbG9yOiAnI2ZmZidcbiAgICB9O1xuICAgIHRhYkxpc3Q6IHsgdGV4dDogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGZhZGVDb2xvcj86IHN0cmluZywgaWNvbj86IHN0cmluZyB9W10gPSBbXG4gICAgICAgIHsgdGV4dDogJ0VOVFJFTkEnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDBFMEQwJywgY29sb3I6ICcjMDAwJywgaWNvbjoncmVzOi8vaG9tZScgIH0sXG4gICAgICAgIHsgdGV4dDogJ0lOSUNJTycsIGJhY2tncm91bmRDb2xvcjogJyM0OEQxQ0MnLCBjb2xvcjogJyMwMDAnICB9LFxuICAgICAgICB7IHRleHQ6ICdEQVRPUycsIGJhY2tncm91bmRDb2xvcjogJyMwMENFRDEnLCBjb2xvcjogJyMwMDAnfSxcblxuICAgIF07XG5cbiAgICBjdXJyZW50VGFiSW5kZXg6IG51bWJlciA9IDI7XG4gICAgZGVmYXVsdFNlbGVjdGVkOiBudW1iZXIgPSAxO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb29rc1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJCYXIoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFVzZXIgSW50ZXJhY3Rpb25cblxuICAgIC8vIE1ZOiBUYWJzIHNlbGVjdGVkIGluZGV4IGlzIGNoYW5nZWQsIGUuZy4gd2hlbiBzd2lwZSB0byBuYXZpZ2F0ZS5cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChhcmdzLm5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRUYWJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcChhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRhcCBvbiBhIG9uZSBvZiB0aGUgdGFic1xuICAgIG9uQm90dG9tTmF2VGFwKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhYkluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgLy8gc2V0IHVuZm9jdXMgdG8gcHJldmlvdXMgaW5kZXhcbiAgICAgICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuY3VycmVudFRhYkluZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRVbmZvY3VzQW5pbWF0aW9uKHRoaXMuY3VycmVudFRhYkluZGV4LCBkdXJhdGlvbikpO1xuXG4gICAgICAgICAgICAvLyBzZXQgZm9jdXMgdG8gY3VycmVudCBpbmRleFxuICAgICAgICAgICAgdGFiQ29udGVudHNBcnJbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldEZvY3VzQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHRhcCBvbiB0YWIgc3RyaXBcbiAgICAgICAgaWYgKHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuZHJhZ0NpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAvLyBzZXQgY3VycmVudCBpbmRleCB0byBuZXcgaW5kZXhcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyBEcmFnIHRoZSBmb2N1cyBjaXJjbGUgdG8gb25lIG9mIHRoZSB0YWJzXG4gICAgb25DZW50ZXJDaXJjbGVQYW4oYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBsZXQgZ3JkTGF5b3V0OiBHcmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+YXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBuZXdYOiBudW1iZXIgPSBncmRMYXlvdXQudHJhbnNsYXRlWCArIGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYO1xuXG4gICAgICAgIGlmIChhcmdzLnN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAvLyBmaW5nZXIgZG93blxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAvLyBmaW5nZXIgbW92aW5nXG4gICAgICAgICAgICBncmRMYXlvdXQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcblxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gYXJncy5kZWx0YVg7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgLy8gZmluZ2VyIHVwXG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgICAgICAgICAgY29uc3QgdGFiV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgdGFiU2VsZWN0ZWQ6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5hYnMobmV3WCAvIHRhYldpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0YWJTZWxlY3RlZCAqIHRhYldpZHRoO1xuICAgICAgICAgICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcGFuIGxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQsIDUwKTtcbiAgICAgICAgICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIGxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcGFuIHJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgICAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiByaWdodFxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBUYWIgYmFyIGhlbHBlcnNcblxuICAgIGluaXRpYWxpemVUYWJCYXIoKTogdm9pZCB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNlIGxheWVyXG4gICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LndpZHRoID0gMTAwO1xuXG4gICAgICAgIHRoaXMudGFiQkdDb250YWluZXIubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgLSAoODAgLyAyKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBzZWxlY3RlZCB0YWJcbiAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVYID0gMS41O1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC5zY2FsZVkgPSAxLjU7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSAtIDE1O1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkO1xuICAgIH1cblxuICAgIGdldFNsaWRlQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiB0aGlzLmdldFRhYlRyYW5zbGF0ZVgoaW5kZXgpLCB5OiAwIH0sXG4gICAgICAgICAgICBjdXJ2ZTogdGhpcy5hbmltYXRpb25DdXJ2ZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuNSwgeTogMS41IH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTE1IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRVbmZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRUYWJUcmFuc2xhdGVYKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoIC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpICsgKDgwIC8gMilcbiAgICB9XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBcbiAgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnVzZXJMaXN0OiB7IG5vbWJyZTogc3RyaW5nLCBhcGVsbGlkbzogc3RyaW5nLCBlZGFkOiBudW1iZXIsIHBlc286IG51bWJlciwgbml2ZWw6IG51bWJlciwgZ2VuZXJvOiBzdHJpbmcgfSA9ICB7IG5vbWJyZTogXCJDcmlzdGhpYW5cIixcbiAgICAgICAgICAgIGFwZWxsaWRvOiBcIlJlbmRvblwiLFxuICAgICAgICAgICAgZWRhZDogMjMsXG4gICAgICAgICAgICBwZXNvOiA2NCxcbiAgICAgICAgICAgIG5pdmVsOiAyLFxuICAgICAgICAgICAgZ2VuZXJvOiBcImhvbWJyZVwiIH07XG5cblxuICAgIHRyYWluZXI6IHsgcmVjb21lbmQ6IHN0cmluZywgZXN0aWxvOiBzdHJpbmcsIGRpc3RhbmNpYTogc3RyaW5nLCB0aWVtcG86IHN0cmluZ31bXSA9IFtcbiAgICAgICAgeyByZWNvbWVuZDogXCJTVk1cIiwgZXN0aWxvOlwibGlicmVcIiwgZGlzdGFuY2lhOiBcIjUwIG10c1wiLCB0aWVtcG86IFwiaHR0cDovLzE5Mi4xNjguMC4xMTo4MDAwL3RpbWVTVk0vMjMvNTAvMi82NC8xLzAvMC8wLzEvMFwiIH0sXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiUmFtZG9uIEZvcmVzdFwiLCBlc3RpbG86XCJsaWJyZVwiLCBkaXN0YW5jaWE6IFwiNTAgbXRzXCIsIHRpZW1wbzogXCJodHRwOi8vMTkyLjE2OC4wLjExOjgwMDAvdGltZVJGLzIzLzUwLzIvNjAvMS8wLzAvMC8xLzBcIiB9LFxuICAgICAgICB7IHJlY29tZW5kOiBcIktOTlwiLCBlc3RpbG86XCJsaWJyZVwiLCBkaXN0YW5jaWE6IFwiNTAgbXRzXCIsIHRpZW1wbzogXCJodHRwOi8vMTkyLjE2OC4wLjExOjgwMDAvdGltZUtOTi8yMy81MC8yLzYwLzEvMC8wLzAvMS8wXCIgfSxcblxuICAgICAgICB7IHJlY29tZW5kOiBcIlNWTVwiLCBlc3RpbG86XCJsaWJyZVwiLCB0aWVtcG86IFwiMiBtaW5cIiwgZGlzdGFuY2lhOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC9kaXN0YW5jZVNWTS8yMy81MC8yLzY0LzEvMC8wLzAvMS8wXCIgfSxcbiAgICAgICAgeyByZWNvbWVuZDogXCJSYW1kb24gRm9yZXN0XCIsIGVzdGlsbzpcImxpYnJlXCIsIHRpZW1wbzogXCIyIG1pblwiLCBkaXN0YW5jaWE6IFwiaHR0cDovLzE5Mi4xNjguMC4xMTo4MDAwL2Rpc3RhbmNlU1JGLzIzLzUwLzIvNjAvMS8wLzAvMC8xLzBcIiB9LFxuICAgICAgICB7IHJlY29tZW5kOiBcIktOTlwiLCBlc3RpbG86XCJsaWJyZVwiLCB0aWVtcG86IFwiMiBtaW5cIiwgZGlzdGFuY2lhOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC9kaXN0YW5jZUtOTi8yMy8yLzYwLzYwLzEvMC8wLzAvMS8wXCIgfSxcblxuICAgICAgICB7IHJlY29tZW5kOiBcIlwiLCBlc3RpbG86XCJcIiwgdGllbXBvOiBcIlwiLCBkaXN0YW5jaWE6IFwiXCIgfSxcbiAgICAgICAgXG4gICAgXTtcblxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9