webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"test\">\n  <StackLayout orientation=\"horizontal\"\n    ios:horizontalAlignment=\"center\"\n    android:horizontalAlignment=\"center\">\n    <!--<Image src=\"res://nativescript_logo\" class=\"action-image\"></Image>-->\n    <Label text=\".:: SWING TIME ::.\" class=\"action-label\"></Label>\n  </StackLayout>\n</ActionBar>\n\n\n\n\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">7\n                <StackLayout>\n                    <Label text=\".:: TUS RETOS ::.\" class=\"h1 text-center p-t-20\"></Label>\n                    \n\n                    <RadListView [items]=\"trainer\" marginRight=\"-2\">\n                        <ListViewGridLayout tkListViewLayout \n                            itemHeight=\"300\" spanCount=\"1\">\n                        </ListViewGridLayout>\n                        <ng-template tkListItemTemplate let-item=\"item\">        \n                            <GridLayout verticalAlignment=\"center\">\n                                <StackLayout orientation=\"vertical\"  height=\"210\">\n\n                                   <Label text=\"{{ item.recomend }}\"></Label>\n\n                                    <Label text=\"{{ item.estilo }}\"></Label>\n\n                                    <label text=\"para completar este reto debes nadar\"></label>\n\n                                    <Label text=\"{{ item.distancia }}\"></Label>\n\n                                    <Label text=\"{{ item.tiempo }}\"></Label>\n\n                                    <GridLayout>\n                                        <label text=\"cumplido\"></label>\n                                        <Switch checked=\"false\"></Switch>\n                                    </GridLayout> \n\n                                   \n                         \n\n                                </StackLayout>\n                            </GridLayout>\n                             \n\n                        </ng-template>\n                    </RadListView>\n\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Image src=\"font://&#xF2b9;\" class=\"fas t-36\"></Image>\n\n                    <!-- Image with stretch property (\"none\", \"aspectFill\" and \"aspectFit\") -->\n                    <Image src=\"res://logo_white_bg\" stretch=\"aspectFill\"></Image>\n                                    \n                    <label text=\".........\"></label>\n                    <GridLayout></GridLayout>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\".::MIS DATOS::.\" class=\"h1 text-center p-t-20\"></Label>\n\n                \n\n                    <RadDataForm [source]=\"userList\">\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nombre\" displayName=\"NOMBRE\"\n                                index=\"0\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"apellido\" displayName=\"APELLIDO\"\n                                index=\"1\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"edad\" displayName=\"EDAD\"\n                                index=\"2\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"peso\" displayName=\"PESO\"\n                                index=\"3\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nivel\" displayName=\"NIVEL\"\n                                index=\"4\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"genero\" displayName=\"GENERO\"\n                                index=\"5\"></TKEntityProperty>\n                    </RadDataForm>\n\n                    <Label text=\".::RETOS CUMPLIDOS::.\" class=\"h1 text-center p-t-20\"></Label> \n\n                </StackLayout>\n                \n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n    \n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\" [icon]=\"item.icon\"> </Label>\n           \n          \n\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrd0NBQSt3QyxpQkFBaUIsbUVBQW1FLGVBQWUsd0tBQXdLLGtCQUFrQixtRUFBbUUsZUFBZSxvaENBQW9oQyxpNEhBQWk0SCw4dEIiLCJmaWxlIjoiMC4zMGU0YjRhNDA2Nzk3MjU4MDZiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcInRlc3RcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIlxcbiAgICBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBhbmRyb2lkOmhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgIDwhLS08SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9uYXRpdmVzY3JpcHRfbG9nb1xcXCIgY2xhc3M9XFxcImFjdGlvbi1pbWFnZVxcXCI+PC9JbWFnZT4tLT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIi46OiBTV0lORyBUSU1FIDo6LlxcXCIgY2xhc3M9XFxcImFjdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9BY3Rpb25CYXI+XFxuXFxuXFxuXFxuXFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgPFRhYnMgI3RhYnMgW3NlbGVjdGVkSW5kZXhdPVxcXCJkZWZhdWx0U2VsZWN0ZWRcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlZCk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzBdLmJhY2tncm91bmRDb2xvclxcXCI+N1xcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiLjo6IFRVUyBSRVRPUyA6Oi5cXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJ0cmFpbmVyXFxcIiBtYXJnaW5SaWdodD1cXFwiLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodD1cXFwiMzAwXFxcIiBzcGFuQ291bnQ9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXdHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPiAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgIGhlaWdodD1cXFwiMjEwXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnJlY29tZW5kIH19XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmVzdGlsbyB9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwicGFyYSBjb21wbGV0YXIgZXN0ZSByZXRvIGRlYmVzIG5hZGFyXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmRpc3RhbmNpYSB9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS50aWVtcG8gfX1cXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJjdW1wbGlkb1xcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCI+PC9Td2l0Y2g+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PiBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCIuLi4uLi4uLi5cXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwiLi4uLi4uLi4uXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCIuLi4uLi4uLi5cXFwiPjwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMV0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeEYyYjk7XFxcIiBjbGFzcz1cXFwiZmFzIHQtMzZcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEltYWdlIHdpdGggc3RyZXRjaCBwcm9wZXJ0eSAoXFxcIm5vbmVcXFwiLCBcXFwiYXNwZWN0RmlsbFxcXCIgYW5kIFxcXCJhc3BlY3RGaXRcXFwiKSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2xvZ29fd2hpdGVfYmdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwiLi4uLi4uLi4uXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzJdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIuOjpNSVMgREFUT1M6Oi5cXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgICAgPFJhZERhdGFGb3JtIFtzb3VyY2VdPVxcXCJ1c2VyTGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibm9tYnJlXFxcIiBkaXNwbGF5TmFtZT1cXFwiTk9NQlJFXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjBcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJhcGVsbGlkb1xcXCIgZGlzcGxheU5hbWU9XFxcIkFQRUxMSURPXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjFcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJlZGFkXFxcIiBkaXNwbGF5TmFtZT1cXFwiRURBRFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIyXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwicGVzb1xcXCIgZGlzcGxheU5hbWU9XFxcIlBFU09cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiM1xcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm5pdmVsXFxcIiBkaXNwbGF5TmFtZT1cXFwiTklWRUxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiNFxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImdlbmVyb1xcXCIgZGlzcGxheU5hbWU9XFxcIkdFTkVST1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCI1XFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICA8L1JhZERhdGFGb3JtPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIi46OlJFVE9TIENVTVBMSURPUzo6LlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD4gXFxuXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICBcXG4gICAgICAgIDwvVGFicz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgICBcXG5cXG4gICAgPCEtLSBib3R0b20gdGFicyAtLT5cXG4gICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCJhdXRvXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIj5cXG5cXG4gICAgICAgIDwhLS0gYmFzZSBsYXllciAtLT5cXG4gICAgICAgIDxBYnNvbHV0ZUxheW91dCBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0ICN0YWJCR0NvbnRhaW5lciBjb2x1bW5zPVxcXCJhdXRvLCAxMCwgYXV0bywgMTAsIGF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjbGVmdFRhYnMgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjgwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBib3JkZXJSYWRpdXM9XFxcIjAgNjggMCAwXFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNjZW50ZXJQYXRjaCBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiNDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3JpZ2h0VGFicyBjb2w9XFxcIjNcXFwiIGNvbFNwYW49XFxcIjRcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiNjggMCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBmb2N1cyBjaXJjbGUgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNjZW50ZXJDaXJjbGUgY29sPVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDBcXFwiIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0W2N1cnJlbnRUYWJJbmRleF0uYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVxcXCI1MFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgbWFyZ2luQm90dG9tPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaGVpZ2h0PVxcXCI5MFxcXCIgd2lkdGg9XFxcIjkwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuZm9jdXNDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjQ1XFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxcblxcbiAgICAgICAgPCEtLSB0YWIgY29udGVudHMgLS0+XFxuICAgICAgICA8R3JpZExheW91dCAjdGFiQ29udGVudHMgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiB0YWJMaXN0OyBsZXQgaSA9IGluZGV4XFxcIlxcbiAgICAgICAgICAgIFtjb2xdPVxcXCJpXFxcIiBtYXJnaW5Ub3A9XFxcIjIwXFxcIiAodGFwKT1cXFwib25Cb3R0b21OYXZUYXAoaSlcXFwiXFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcIm1pZGRsZVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJmYS1yZWd1bGFyXFxcIiBbdGV4dF09XFxcIml0ZW0udGV4dFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcIm1pZGRsZVxcXCJcXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbY29sb3JdPVxcXCJpdGVtLmNvbG9yXFxcIiBmb250U2l6ZT1cXFwiMjBcXFwiIFtpY29uXT1cXFwiaXRlbS5pY29uXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgIFxcbiAgICAgICAgICBcXG5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDwhLS0gcGFuIGxheWVyIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgI2RyYWdDaXJjbGUgY29sdW1uPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiAocGFuKT1cXFwib25DZW50ZXJDaXJjbGVQYW4oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjkwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiBib3JkZXJSYWRpdXM9XFxcIjQ1XFxcIj48L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDwvR3JpZExheW91dD5cXG5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiXSwic291cmNlUm9vdCI6IiJ9