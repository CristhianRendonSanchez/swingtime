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

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Home\">\n</ActionBar>\n\n<StackLayout>\n    <BottomNavigation height=\"400px\">\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"Home\"></Label>\n                <Image src=\"res://home\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Settings\"></Label>\n                <Image src=\"res://settings\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Search\"></Label>\n                <Image src=\"res://search\"></Image>\n            </TabStripItem>\n        </TabStrip>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Home Page\" class=\"h2 text-center\">\n                </Label>\n                <GridLayout>\n                    <ScrollView>\n                        <StackLayout class=\"home-panel\">\n                            <!--Add your page content here-->\n                            <Label textWrap=\"true\"\n                                text=\"Play with NativeScript!\"\n                                class=\"h2 description-label\"></Label>\n                            <Label textWrap=\"true\"\n                                text=\"Write code in the editor or drag and drop components to build a NativeScript mobile application.\"\n                                class=\"h2 description-label\"></Label>\n                            <Label textWrap=\"true\"\n                                text=\"Scan the QR code with your mobile device and watch the changes sync live while you play with the code.\"\n                                class=\"h2 description-label\"></Label>\n                        </StackLayout>\n                    </ScrollView>\n                </GridLayout>\n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Settings Page\" class=\"h2 text-center\">\n                </Label>\n                <ScrollView orientation=\"horizontal\">\n                    <GridLayout class=\"m-15\"\n                        columns=\"auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto\">\n                        <StackLayout>\n                            <RadDataForm [source]=\"album\">\n                                <TKEntityProperty tkDataFormProperty\n                                    name=\"albumName\"\n                                    displayName=\"Name of Album\" index=\"0\">\n                                </TKEntityProperty>\n                                <TKEntityProperty tkDataFormProperty\n                                    name=\"bandName\" displayName=\"Name of Band\"\n                                    index=\"1\"></TKEntityProperty>\n                                <TKEntityProperty tkDataFormProperty\n                                    name=\"year\" displayName=\"Release Year\"\n                                    index=\"2\"></TKEntityProperty>\n                                <TKEntityProperty tkDataFormProperty\n                                    name=\"myRating\" displayName=\"My Rating\"\n                                    index=\"3\"></TKEntityProperty>\n                                <TKEntityProperty tkDataFormProperty\n                                    name=\"owned\" displayName=\"Do I Own This?\"\n                                    index=\"4\"></TKEntityProperty>\n                            </RadDataForm>\n                        </StackLayout>\n                    </GridLayout>\n                </ScrollView>\n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Search Page\" class=\"h2 text-center\">\n                </Label>\n            </GridLayout>\n        </TabContentItem>\n    </BottomNavigation>\n</StackLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.album = {
            bandName: "Ed Sheeran",
            albumName: "X",
            year: "2017",
            owned: true,
            myRating: "9.5"
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsQzs7Ozs7OztBQ0F0SixvMUg7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQWtEO0FBUWxEO0lBVUk7UUFUQSxVQUFLLEdBQTJGO1lBQzVGLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7SUFJRixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFkUSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BQ1csYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUE7QUFmeUI7Ozs7Ozs7OztBQ1IxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFDYTtBQUNKO0FBQ0E7QUFDTjtBQUNNO0FBQ2dCO0FBQ3RCO0FBQ0w7QUFFWDtBQUNUO0FBc0JqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBcEJ0Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlHQUE4QjtnQkFDOUIsNkZBQTRCO2dCQUM1Qiw2RkFBNEI7Z0JBQzVCLHVGQUF5QjtnQkFDekIsNkZBQTRCO2dCQUM1Qiw2R0FBd0M7Z0JBQ3hDLHVGQUF5QjtnQkFDekIsb0ZBQXdCO2dCQUN4Qix1RUFBaUI7Z0JBQ2pCLGtGQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw4REFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IFxcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuICAgIDxCb3R0b21OYXZpZ2F0aW9uIGhlaWdodD1cXFwiNDAwcHhcXFwiPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb21lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9ob21lXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5nc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2V0dGluZ3NcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNlYXJjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2VhcmNoXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPC9UYWJTdHJpcD5cXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgICAgICA8R3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvbWUgUGFnZVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiUGxheSB3aXRoIE5hdGl2ZVNjcmlwdCFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIldyaXRlIGNvZGUgaW4gdGhlIGVkaXRvciBvciBkcmFnIGFuZCBkcm9wIGNvbXBvbmVudHMgdG8gYnVpbGQgYSBOYXRpdmVTY3JpcHQgbW9iaWxlIGFwcGxpY2F0aW9uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoMiBkZXNjcmlwdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiU2NhbiB0aGUgUVIgY29kZSB3aXRoIHlvdXIgbW9iaWxlIGRldmljZSBhbmQgd2F0Y2ggdGhlIGNoYW5nZXMgc3luYyBsaXZlIHdoaWxlIHlvdSBwbGF5IHdpdGggdGhlIGNvZGUuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImgyIGRlc2NyaXB0aW9uLWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2V0dGluZ3MgUGFnZVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcIm0tMTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cXFwiYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZERhdGFGb3JtIFtzb3VyY2VdPVxcXCJhbGJ1bVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJhbGJ1bU5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9XFxcIk5hbWUgb2YgQWxidW1cXFwiIGluZGV4PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImJhbmROYW1lXFxcIiBkaXNwbGF5TmFtZT1cXFwiTmFtZSBvZiBCYW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIxXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ5ZWFyXFxcIiBkaXNwbGF5TmFtZT1cXFwiUmVsZWFzZSBZZWFyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIyXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJteVJhdGluZ1xcXCIgZGlzcGxheU5hbWU9XFxcIk15IFJhdGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiM1xcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwib3duZWRcXFwiIGRpc3BsYXlOYW1lPVxcXCJEbyBJIE93biBUaGlzP1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiNFxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZERhdGFGb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoIFBhZ2VcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWxidW06IHsgYmFuZE5hbWU6IHN0cmluZywgYWxidW1OYW1lOiBzdHJpbmcsIHllYXI6IHN0cmluZywgb3duZWQ6IGJvb2xlYW4sIG15UmF0aW5nOiBzdHJpbmd9ID0ge1xuICAgICAgICBiYW5kTmFtZTogXCJFZCBTaGVlcmFuXCIsXG4gICAgICAgIGFsYnVtTmFtZTogXCJYXCIsXG4gICAgICAgIHllYXI6IFwiMjAxN1wiLFxuICAgICAgICBvd25lZDogdHJ1ZSxcbiAgICAgICAgbXlSYXRpbmc6IFwiOS41XCJcbiAgICB9O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==