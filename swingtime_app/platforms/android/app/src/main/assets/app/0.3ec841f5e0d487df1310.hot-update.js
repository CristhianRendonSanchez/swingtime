webpackHotUpdate(0,{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQy9FO0FBR1E7QUFTMUM7SUFrQ0k7UUFyQkEsYUFBYTtRQUNiLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHdkIsbUJBQWMsR0FBRyx1REFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RCw4QkFBOEI7UUFDOUIsaUJBQVksR0FBRztZQUNYLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7UUFDRixZQUFPLEdBQW1HO1lBQ3RHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2hGLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2hGLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1NBRW5GLENBQUM7UUFFRixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixvQkFBZSxHQUFXLENBQUMsQ0FBQztJQUc1QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFHRCx1RUFBdUU7SUFDdkUsUUFBUTtJQUVSLHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLG1CQUFtQjtJQUVuQixtRUFBbUU7SUFDbkUsOENBQXNCLEdBQXRC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QVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBWSx3REFBVTtvREFBQztJQUNwQjtRQUEzQywrREFBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYyx3REFBVTtzREFBQztJQUNyQjtRQUE5QywrREFBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFpQix3REFBVTt5REFBQztJQUV2QjtRQUFsRCxrRUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx3REFBVSxFQUFFLENBQUM7a0NBQWMsdURBQVM7c0RBQWE7SUFWN0UsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0F5S3pCO0lBQUQsb0JBQUM7Q0FBQTtBQXpLeUIiLCJmaWxlIjoiMC4zZWM4NDFmNWUwZDQ4N2RmMTMxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlU3RhdGVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NlbnRlckNpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlckNpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdkcmFnQ2lyY2xlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhZ0NpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdsZWZ0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIGxlZnRUYWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3JpZ2h0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHJpZ2h0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJQYXRjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlclBhdGNoOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkJHQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQkdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkcmVuKCd0YWJDb250ZW50cycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG5cbiAgICAvLyBQYW4gSGVscGVyXG4gICAgcHJldkRlbHRhWDogbnVtYmVyID0gMDtcblxuXG4gICAgYW5pbWF0aW9uQ3VydmUgPSBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguMzgsIC40NywgMCwgMSk7XG5cbiAgICAvLyBUYWIgQ29udGVudHMgYW5kIFByb3BlcnRpZXNcbiAgICB0YWJDb250YWluZXIgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBmb2N1c0NvbG9yOiAnI2ZmZidcbiAgICB9O1xuICAgIHRhYkxpc3Q6IHsgdGV4dDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGZhZGVDb2xvcj86IHN0cmluZyB9W10gPSBbXG4gICAgICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwODApLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDBFMEQwJywgY29sb3I6ICcjMDAwJyB9LFxuICAgICAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDc1KSwgYmFja2dyb3VuZENvbG9yOiAnIzQ4RDFDQycsIGNvbG9yOiAnIzAwMCcgfSxcbiAgICAgICAgeyB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjI1OSksIGJhY2tncm91bmRDb2xvcjogJyMwMENFRDEnLCBjb2xvcjogJyMwMDAnIH0sXG5cbiAgICBdO1xuXG4gICAgY3VycmVudFRhYkluZGV4OiBudW1iZXIgPSAyO1xuICAgIGRlZmF1bHRTZWxlY3RlZDogbnVtYmVyID0gMjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb29rc1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJCYXIoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFVzZXIgSW50ZXJhY3Rpb25cblxuICAgIC8vIE1ZOiBUYWJzIHNlbGVjdGVkIGluZGV4IGlzIGNoYW5nZWQsIGUuZy4gd2hlbiBzd2lwZSB0byBuYXZpZ2F0ZS5cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChhcmdzLm5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRUYWJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcChhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRhcCBvbiBhIG9uZSBvZiB0aGUgdGFic1xuICAgIG9uQm90dG9tTmF2VGFwKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhYkluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgLy8gc2V0IHVuZm9jdXMgdG8gcHJldmlvdXMgaW5kZXhcbiAgICAgICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuY3VycmVudFRhYkluZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRVbmZvY3VzQW5pbWF0aW9uKHRoaXMuY3VycmVudFRhYkluZGV4LCBkdXJhdGlvbikpO1xuXG4gICAgICAgICAgICAvLyBzZXQgZm9jdXMgdG8gY3VycmVudCBpbmRleFxuICAgICAgICAgICAgdGFiQ29udGVudHNBcnJbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldEZvY3VzQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHRhcCBvbiB0YWIgc3RyaXBcbiAgICAgICAgaWYgKHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuZHJhZ0NpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAvLyBzZXQgY3VycmVudCBpbmRleCB0byBuZXcgaW5kZXhcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyBEcmFnIHRoZSBmb2N1cyBjaXJjbGUgdG8gb25lIG9mIHRoZSB0YWJzXG4gICAgb25DZW50ZXJDaXJjbGVQYW4oYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBsZXQgZ3JkTGF5b3V0OiBHcmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+YXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBuZXdYOiBudW1iZXIgPSBncmRMYXlvdXQudHJhbnNsYXRlWCArIGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYO1xuXG4gICAgICAgIGlmIChhcmdzLnN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAvLyBmaW5nZXIgZG93blxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAvLyBmaW5nZXIgbW92aW5nXG4gICAgICAgICAgICBncmRMYXlvdXQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcblxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gYXJncy5kZWx0YVg7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgLy8gZmluZ2VyIHVwXG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgICAgICAgICAgY29uc3QgdGFiV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgdGFiU2VsZWN0ZWQ6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5hYnMobmV3WCAvIHRhYldpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0YWJTZWxlY3RlZCAqIHRhYldpZHRoO1xuICAgICAgICAgICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcGFuIGxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQsIDUwKTtcbiAgICAgICAgICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIGxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcGFuIHJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgICAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiByaWdodFxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBUYWIgYmFyIGhlbHBlcnNcblxuICAgIGluaXRpYWxpemVUYWJCYXIoKTogdm9pZCB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNlIGxheWVyXG4gICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LndpZHRoID0gMTAwO1xuXG4gICAgICAgIHRoaXMudGFiQkdDb250YWluZXIubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgLSAoODAgLyAyKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBzZWxlY3RlZCB0YWJcbiAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVYID0gMS41O1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC5zY2FsZVkgPSAxLjU7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSAtIDE1O1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkO1xuICAgIH1cblxuICAgIGdldFNsaWRlQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiB0aGlzLmdldFRhYlRyYW5zbGF0ZVgoaW5kZXgpLCB5OiAwIH0sXG4gICAgICAgICAgICBjdXJ2ZTogdGhpcy5hbmltYXRpb25DdXJ2ZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuNSwgeTogMS41IH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTE1IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRVbmZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRUYWJUcmFuc2xhdGVYKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoIC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpICsgKDgwIC8gMilcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=