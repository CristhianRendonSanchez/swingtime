webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"SWING TIME\">\n</ActionBar>\n\n<!--\n<StackLayout>\n    <BottomNavigation>\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"Home\"></Label>\n                <Image src=\"res://home\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Settings\"></Label>\n                <Image src=\"res://settings\"></Image>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"Search\"></Label>\n                <Image src=\"res://search\"></Image>\n            </TabStripItem>\n        </TabStrip>\n        <TabContentItem>\n            <GridLayout >\n                <Label text=\"Home Page\" class=\"h2 text-center\">\n                </Label>\n\n                \n                  \n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Settings Page\" class=\"h2 text-center\">\n                </Label>\n                <ScrollView orientation=\"horizontal\">\n                    \n                </ScrollView>\n            </GridLayout>\n        </TabContentItem>\n        <TabContentItem>\n            <GridLayout>\n                <Label text=\"Search Page\" class=\"h2 text-center\">\n                </Label>\n            </GridLayout>\n        </TabContentItem>\n    </BottomNavigation>\n</StackLayout>\n\n-->\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 1\" class=\"h1 text-center p-t-20\">\n                        dsadfsfdsfsdafsad\n                    </Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 3\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\"></Label>\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrc0lBQWtzSSwycUIiLCJmaWxlIjoiMC4xNzRjYjMxODhjODQ1N2NlMTU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNXSU5HIFRJTUVcXFwiPlxcbjwvQWN0aW9uQmFyPlxcblxcbjwhLS1cXG48U3RhY2tMYXlvdXQ+XFxuICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb21lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9ob21lXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5nc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2V0dGluZ3NcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNlYXJjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vc2VhcmNoXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPC9UYWJTdHJpcD5cXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCA+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb21lIFBhZ2VcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5ncyBQYWdlXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWFyY2ggUGFnZVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9TdGFja0xheW91dD5cXG5cXG4tLT5cXG48R3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8VGFicyAjdGFicyBbc2VsZWN0ZWRJbmRleF09XFxcImRlZmF1bHRTZWxlY3RlZFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMF0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJvdHRvbSBOYXYgQ29udGVudCAxXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBkc2FkZnNmZHNmc2RhZnNhZFxcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsxXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDJcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMl0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJvdHRvbSBOYXYgQ29udGVudCAzXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICBcXG4gICAgICAgIDwvVGFicz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8IS0tIGJvdHRvbSB0YWJzIC0tPlxcbiAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcImF1dG9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGNvbHVtbnM9XFxcIiosICosICpcXFwiPlxcblxcbiAgICAgICAgPCEtLSBiYXNlIGxheWVyIC0tPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0IGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkJHQ29udGFpbmVyIGNvbHVtbnM9XFxcImF1dG8sIDEwLCBhdXRvLCAxMCwgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNsZWZ0VGFicyBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiMCA2OCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlclBhdGNoIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjcmlnaHRUYWJzIGNvbD1cXFwiM1xcXCIgY29sU3Bhbj1cXFwiNFxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCI2OCAwIDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIGZvY3VzIGNpcmNsZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlckNpcmNsZSBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiMTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMFxcXCIgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbY3VycmVudFRhYkluZGV4XS5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjUwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5mb2N1c0NvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHRhYiBjb250ZW50cyAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICN0YWJDb250ZW50cyAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRhYkxpc3Q7IGxldCBpID0gaW5kZXhcXFwiXFxuICAgICAgICAgICAgW2NvbF09XFxcImlcXFwiIG1hcmdpblRvcD1cXFwiMjBcXFwiICh0YXApPVxcXCJvbkJvdHRvbU5hdlRhcChpKVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhLXJlZ3VsYXJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIlxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtjb2xvcl09XFxcIml0ZW0uY29sb3JcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDwhLS0gcGFuIGxheWVyIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgI2RyYWdDaXJjbGUgY29sdW1uPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiAocGFuKT1cXFwib25DZW50ZXJDaXJjbGVQYW4oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjkwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiBib3JkZXJSYWRpdXM9XFxcIjQ1XFxcIj48L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDwvR3JpZExheW91dD5cXG5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9