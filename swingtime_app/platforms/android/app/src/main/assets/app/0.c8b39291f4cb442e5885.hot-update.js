webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"SWING TIME\">\n</ActionBar>\n\n<!--\n<StackLayout>\n    <BottomNavigation>\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"Home\"></Label>\n                <Image src=\"res://home\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Settings\"></Label>\n                <Image src=\"res://settings\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Search\"></Label>\n                <Image src=\"res://search\"></Image>\n            </TabStripItem>\n        </TabStrip>\n        <TabContentItem>\n            <GridLayout >\n                <Label text=\"Home Page\" class=\"h2 text-center\">\n                </Label>\n\n                \n                  \n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Settings Page\" class=\"h2 text-center\">\n                </Label>\n                <ScrollView orientation=\"horizontal\">\n                    \n                </ScrollView>\n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Search Page\" class=\"h2 text-center\">\n                </Label>\n            </GridLayout>\n        </TabContentItem>\n    </BottomNavigation>\n</StackLayout>\n\n-->\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n            <TabStrip>\n            <TabStripItem>\n                <Label text=\"Home\"></Label>\n                <Image src=\"res://home\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Settings\"></Label>\n                <Image src=\"res://settings\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Search\"></Label>\n                <Image src=\"res://search\"></Image>\n            </TabStripItem>\n        </TabStrip>\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 1\" class=\"h1 text-center p-t-20\"></Label>\n\n                    <Label text=\"prueba1\" ></Label>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 3\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\" > </Label>\n            <Image [src]=\"item.src\" width=\"50\" height=\"50\" horizontalAlignment=\"center\" stretch=\"aspectFill\"></Image>\n          \n\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5c0pBQXlzSiw0ekIiLCJmaWxlIjoiMC5jOGIzOTI5MWY0Y2I0NDJlNTg4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNXSU5HIFRJTUVcXFwiPlxcbjwvQWN0aW9uQmFyPlxcblxcbjwhLS1cXG48U3RhY2tMYXlvdXQ+XFxuICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb21lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9ob21lXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5nc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2V0dGluZ3NcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNlYXJjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2VhcmNoXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPC9UYWJTdHJpcD5cXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCA+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb21lIFBhZ2VcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5ncyBQYWdlXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWFyY2ggUGFnZVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9TdGFja0xheW91dD5cXG5cXG4tLT5cXG48R3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8VGFicyAjdGFicyBbc2VsZWN0ZWRJbmRleF09XFxcImRlZmF1bHRTZWxlY3RlZFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8VGFiU3RyaXA+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2hvbWVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNldHRpbmdzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9zZXR0aW5nc1xcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9zZWFyY2hcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFswXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDFcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwicHJ1ZWJhMVxcXCIgPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMV0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJvdHRvbSBOYXYgQ29udGVudCAyXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzJdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCb3R0b20gTmF2IENvbnRlbnQgM1xcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgXFxuICAgICAgICA8L1RhYnM+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgPCEtLSBib3R0b20gdGFicyAtLT5cXG4gICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCJhdXRvXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIj5cXG5cXG4gICAgICAgIDwhLS0gYmFzZSBsYXllciAtLT5cXG4gICAgICAgIDxBYnNvbHV0ZUxheW91dCBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0ICN0YWJCR0NvbnRhaW5lciBjb2x1bW5zPVxcXCJhdXRvLCAxMCwgYXV0bywgMTAsIGF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjbGVmdFRhYnMgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjgwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBib3JkZXJSYWRpdXM9XFxcIjAgNjggMCAwXFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNjZW50ZXJQYXRjaCBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiNDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3JpZ2h0VGFicyBjb2w9XFxcIjNcXFwiIGNvbFNwYW49XFxcIjRcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiNjggMCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBmb2N1cyBjaXJjbGUgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNjZW50ZXJDaXJjbGUgY29sPVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDBcXFwiIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0W2N1cnJlbnRUYWJJbmRleF0uYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVxcXCI1MFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgbWFyZ2luQm90dG9tPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaGVpZ2h0PVxcXCI5MFxcXCIgd2lkdGg9XFxcIjkwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuZm9jdXNDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjQ1XFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxcblxcbiAgICAgICAgPCEtLSB0YWIgY29udGVudHMgLS0+XFxuICAgICAgICA8R3JpZExheW91dCAjdGFiQ29udGVudHMgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiB0YWJMaXN0OyBsZXQgaSA9IGluZGV4XFxcIlxcbiAgICAgICAgICAgIFtjb2xdPVxcXCJpXFxcIiBtYXJnaW5Ub3A9XFxcIjIwXFxcIiAodGFwKT1cXFwib25Cb3R0b21OYXZUYXAoaSlcXFwiXFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcIm1pZGRsZVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJmYS1yZWd1bGFyXFxcIiBbdGV4dF09XFxcIml0ZW0udGV4dFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcIm1pZGRsZVxcXCJcXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbY29sb3JdPVxcXCJpdGVtLmNvbG9yXFxcIiBmb250U2l6ZT1cXFwiMjBcXFwiID4gPC9MYWJlbD5cXG4gICAgICAgICAgICA8SW1hZ2UgW3NyY109XFxcIml0ZW0uc3JjXFxcIiB3aWR0aD1cXFwiNTBcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgXFxuXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHBhbiBsYXllciAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICNkcmFnQ2lyY2xlIGNvbHVtbj1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgKHBhbik9XFxcIm9uQ2VudGVyQ2lyY2xlUGFuKCRldmVudClcXFwiXFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCI5MFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgYm9yZGVyUmFkaXVzPVxcXCI0NVxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==