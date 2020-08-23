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
            { recomend: "Ramdon Forest", estilo: "libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeSRF/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "KNN", estilo: "libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeKNN/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "SVM", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/timeSVM/23/50/2/64/1/0/0/0/1/0" },
            { recomend: "Ramdon Forest", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/timeSRF/23/50/2/60/1/0/0/0/1/0" },
            { recomend: "KNN", estilo: "libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/timeKNN/23/2/60/60/1/0/0/0/1/0" },
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQy9FO0FBR1E7QUFjMUM7SUFzS0EsK0VBQStFO0lBRTNFO1FBdktBLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFnQmxCLGFBQWE7UUFDYixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLG1CQUFjLEdBQUcsdURBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsOEJBQThCO1FBQzlCLGlCQUFZLEdBQUc7WUFDWCxlQUFlLEVBQUUsTUFBTTtZQUN2QixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO1FBQ0YsWUFBTyxHQUFtRztZQUN0RyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxZQUFZLEVBQUc7WUFDbEYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRztZQUM5RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1NBRTlELENBQUM7UUFFRixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQTBJaEMsK0VBQStFO1FBRS9FLGFBQVEsR0FBcUcsRUFBRSxNQUFNLEVBQUUsV0FBVztZQUN0SCxRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFHM0IsWUFBTyxHQUE2RTtZQUNoRixFQUFF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LENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFjLHdEQUFVO3NEQUFDO0lBQ3JCO1FBQTlDLCtEQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWlCLHdEQUFVO3lEQUFDO0lBRXZCO1FBQWxELGtFQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHdEQUFVLEVBQUUsQ0FBQztrQ0FBYyx1REFBUztzREFBYTtJQWQ3RSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BQ1csYUFBYSxDQXFNekI7SUFBRCxvQkFBQztDQUFBO0FBck15QiIsImZpbGUiOiIwLjRjYmM4NWMyYzYxMzY2ZTRjNjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFsbGVuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vaG9tZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVN0YXRlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuXG4vLyBwYXJ0ZSBncmFmaWNhXG5cbiAgICBAVmlld0NoaWxkKCd0YWJzJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHJhZ0NpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRyYWdDaXJjbGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnbGVmdFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsZWZ0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdyaWdodFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSByaWdodFRhYnM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY2VudGVyUGF0Y2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJQYXRjaDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCd0YWJCR0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYkJHQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZHJlbigndGFiQ29udGVudHMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXG4gICAgLy8gUGFuIEhlbHBlclxuICAgIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cblxuICAgIGFuaW1hdGlvbkN1cnZlID0gQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoLjM4LCAuNDcsIDAsIDEpO1xuXG4gICAgLy8gVGFiIENvbnRlbnRzIGFuZCBQcm9wZXJ0aWVzXG4gICAgdGFiQ29udGFpbmVyID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgZm9jdXNDb2xvcjogJyNmZmYnXG4gICAgfTtcbiAgICB0YWJMaXN0OiB7IHRleHQ6IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBmYWRlQ29sb3I/OiBzdHJpbmcsIGljb24/OiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7IHRleHQ6ICdFTlRSRU5BJywgYmFja2dyb3VuZENvbG9yOiAnIzQwRTBEMCcsIGNvbG9yOiAnIzAwMCcsIGljb246J3JlczovL2hvbWUnICB9LFxuICAgICAgICB7IHRleHQ6ICdJTklDSU8nLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDhEMUNDJywgY29sb3I6ICcjMDAwJyAgfSxcbiAgICAgICAgeyB0ZXh0OiAnREFUT1MnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBDRUQxJywgY29sb3I6ICcjMDAwJ30sXG5cbiAgICBdO1xuXG4gICAgY3VycmVudFRhYkluZGV4OiBudW1iZXIgPSAyO1xuICAgIGRlZmF1bHRTZWxlY3RlZDogbnVtYmVyID0gMTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG9va3NcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFiQmFyKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBVc2VyIEludGVyYWN0aW9uXG5cbiAgICAvLyBNWTogVGFicyBzZWxlY3RlZCBpbmRleCBpcyBjaGFuZ2VkLCBlLmcuIHdoZW4gc3dpcGUgdG8gbmF2aWdhdGUuXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoYXJncy5uZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50VGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoYXJncy5uZXdJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYXAgb24gYSBvbmUgb2YgdGhlIHRhYnNcbiAgICBvbkJvdHRvbU5hdlRhcChpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB1bmZvY3VzIHRvIHByZXZpb3VzIGluZGV4XG4gICAgICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmN1cnJlbnRUYWJJbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0VW5mb2N1c0FuaW1hdGlvbih0aGlzLmN1cnJlbnRUYWJJbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICAgIHRhYkNvbnRlbnRzQXJyW2luZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRGb2N1c0FuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiB0YXAgb24gdGFiIHN0cmlwXG4gICAgICAgIGlmICh0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmRyYWdDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgaW5kZXggdG8gbmV3IGluZGV4XG4gICAgICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8gRHJhZyB0aGUgZm9jdXMgY2lyY2xlIHRvIG9uZSBvZiB0aGUgdGFic1xuICAgIG9uQ2VudGVyQ2lyY2xlUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgbGV0IGdyZExheW91dDogR3JpZExheW91dCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgbmV3WDogbnVtYmVyID0gZ3JkTGF5b3V0LnRyYW5zbGF0ZVggKyBhcmdzLmRlbHRhWCAtIHRoaXMucHJldkRlbHRhWDtcblxuICAgICAgICBpZiAoYXJncy5zdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZmluZ2VyIGRvd25cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgLy8gZmluZ2VyIG1vdmluZ1xuICAgICAgICAgICAgZ3JkTGF5b3V0LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG5cbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IGFyZ3MuZGVsdGFYO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIC8vIGZpbmdlciB1cFxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHRhYldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRhYlNlbGVjdGVkOiBudW1iZXIgPSBNYXRoLnJvdW5kKE1hdGguYWJzKG5ld1ggLyB0YWJXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gdGFiU2VsZWN0ZWQgKiB0YWJXaWR0aDtcbiAgICAgICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgICAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhbiByaWdodFxuICAgICAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAgICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVGFiIGJhciBoZWxwZXJzXG5cbiAgICBpbml0aWFsaXplVGFiQmFyKCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgYmFzZSBsYXllclxuICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC53aWR0aCA9IDEwMDtcblxuICAgICAgICB0aGlzLnRhYkJHQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpIC0gKDgwIC8gMik7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgc2VsZWN0ZWQgdGFiXG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWCA9IDEuNTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVZID0gMS41O1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gLSAxNTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRTbGlkZUFuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogdGhpcy5nZXRUYWJUcmFuc2xhdGVYKGluZGV4KSwgeTogMCB9LFxuICAgICAgICAgICAgY3VydmU6IHRoaXMuYW5pbWF0aW9uQ3VydmUsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRGb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLjUsIHk6IDEuNSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0xNSB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VW5mb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0VGFiVHJhbnNsYXRlWChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSArICg4MCAvIDIpXG4gICAgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gIH1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG51c2VyTGlzdDogeyBub21icmU6IHN0cmluZywgYXBlbGxpZG86IHN0cmluZywgZWRhZDogbnVtYmVyLCBwZXNvOiBudW1iZXIsIG5pdmVsOiBudW1iZXIsIGdlbmVybzogc3RyaW5nIH0gPSAgeyBub21icmU6IFwiQ3Jpc3RoaWFuXCIsXG4gICAgICAgICAgICBhcGVsbGlkbzogXCJSZW5kb25cIixcbiAgICAgICAgICAgIGVkYWQ6IDIzLFxuICAgICAgICAgICAgcGVzbzogNjQsXG4gICAgICAgICAgICBuaXZlbDogMixcbiAgICAgICAgICAgIGdlbmVybzogXCJob21icmVcIiB9O1xuXG5cbiAgICB0cmFpbmVyOiB7IHJlY29tZW5kOiBzdHJpbmcsIGVzdGlsbzogc3RyaW5nLCBkaXN0YW5jaWE6IHN0cmluZywgdGllbXBvOiBzdHJpbmd9W10gPSBbXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiU1ZNXCIsIGVzdGlsbzpcImxpYnJlXCIsIGRpc3RhbmNpYTogXCI1MCBtdHNcIiwgdGllbXBvOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC90aW1lU1ZNLzIzLzUwLzIvNjQvMS8wLzAvMC8xLzBcIiB9LFxuICAgICAgICB7IHJlY29tZW5kOiBcIlJhbWRvbiBGb3Jlc3RcIiwgZXN0aWxvOlwibGlicmVcIiwgZGlzdGFuY2lhOiBcIjUwIG10c1wiLCB0aWVtcG86IFwiaHR0cDovLzE5Mi4xNjguMC4xMTo4MDAwL3RpbWVTUkYvMjMvNTAvMi82MC8xLzAvMC8wLzEvMFwiIH0sXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiS05OXCIsIGVzdGlsbzpcImxpYnJlXCIsIGRpc3RhbmNpYTogXCI1MCBtdHNcIiwgdGllbXBvOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC90aW1lS05OLzIzLzUwLzIvNjAvMS8wLzAvMC8xLzBcIiB9LFxuXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiU1ZNXCIsIGVzdGlsbzpcImxpYnJlXCIsIHRpZW1wbzogXCIyIG1pblwiLCBkaXN0YW5jaWE6IFwiaHR0cDovLzE5Mi4xNjguMC4xMTo4MDAwL3RpbWVTVk0vMjMvNTAvMi82NC8xLzAvMC8wLzEvMFwiIH0sXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiUmFtZG9uIEZvcmVzdFwiLCBlc3RpbG86XCJsaWJyZVwiLCB0aWVtcG86IFwiMiBtaW5cIiwgZGlzdGFuY2lhOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC90aW1lU1JGLzIzLzUwLzIvNjAvMS8wLzAvMC8xLzBcIiB9LFxuICAgICAgICB7IHJlY29tZW5kOiBcIktOTlwiLCBlc3RpbG86XCJsaWJyZVwiLCB0aWVtcG86IFwiMiBtaW5cIiwgZGlzdGFuY2lhOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTE6ODAwMC90aW1lS05OLzIzLzIvNjAvNjAvMS8wLzAvMC8xLzBcIiB9LFxuXG4gICAgICAgIHsgcmVjb21lbmQ6IFwiXCIsIGVzdGlsbzpcIlwiLCB0aWVtcG86IFwiXCIsIGRpc3RhbmNpYTogXCJcIiB9LFxuICAgICAgICBcbiAgICBdO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==