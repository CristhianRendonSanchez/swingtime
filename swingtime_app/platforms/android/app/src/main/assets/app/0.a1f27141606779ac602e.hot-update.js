webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"test\">\n  <StackLayout orientation=\"horizontal\"\n    ios:horizontalAlignment=\"center\"\n    android:horizontalAlignment=\"center\">\n    <!--<Image src=\"res://nativescript_logo\" class=\"action-image\"></Image>-->\n    <Label text=\".:: SWING TIME ::.\" class=\"action-label\"></Label>\n  </StackLayout>\n</ActionBar>\n\n\n\n\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">7\n                <StackLayout>\n                    <Label text=\".:: TUS RETOS ::.\" class=\"h1 text-center p-t-20\"></Label>\n                    \n\n                    <RadListView [items]=\"trainer\" marginRight=\"-2\">\n                        <ListViewGridLayout tkListViewLayout \n                            itemHeight=\"300\" spanCount=\"1\">\n                        </ListViewGridLayout>\n                        <ng-template tkListItemTemplate let-item=\"item\">        \n                            <GridLayout verticalAlignment=\"center\">\n                                <StackLayout orientation=\"vertical\"  height=\"210\">\n\n                                   <Label text=\"{{ item.recomend }}\"></Label>\n\n                                    <Label text=\"{{ item.estilo }}\"></Label>\n\n                                    <label text=\"para completar este reto debes nadar\"></label>\n\n                                    <Label text=\"{{ item.distancia }}\"></Label>\n\n                                    <Label text=\"{{ item.tiempo }}\"></Label>\n\n                                    <GridLayout>\n                                        <label text=\"cumplido\"></label>\n                                        <Switch checked=\"false\"></Switch>\n                                    </GridLayout> \n\n                                   \n                         \n\n                                </StackLayout>\n                            </GridLayout>\n                             \n\n                        </ng-template>\n                    </RadListView>\n\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n                    <label text=\".........\"></label>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <GridLayout>\n                    <Label text=\"Label 1\" row=\"0\" col=\"0\" backgroundColor=\"red\"/>\n                    <Label text=\"Label 2\" row=\"0\" col=\"1\" colSpan=\"2\" backgroundColor=\"green\"/>\n                    <Label text=\"Label 3\" row=\"1\" col=\"0\" rowSpan=\"2\" backgroundColor=\"blue\"/>\n                    <Label text=\"Label 4\" row=\"1\" col=\"1\" backgroundColor=\"yellow\"/>\n                    <Label text=\"Label 5\" row=\"1\" col=\"2\" backgroundColor=\"orange\"/>\n                    <Label text=\"Label 6\" row=\"2\" col=\"1\" backgroundColor=\"pink\"/>\n                    <Label text=\"Label 7\" row=\"2\" col=\"2\" backgroundColor=\"purple\"/>\n                  </GridLayout>\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\".::MIS DATOS::.\" class=\"h1 text-center p-t-20\"></Label>\n\n                \n\n                    <RadDataForm [source]=\"userList\">\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nombre\" displayName=\"NOMBRE\"\n                                index=\"0\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"apellido\" displayName=\"APELLIDO\"\n                                index=\"1\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"edad\" displayName=\"EDAD\"\n                                index=\"2\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"peso\" displayName=\"PESO\"\n                                index=\"3\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"nivel\" displayName=\"NIVEL\"\n                                index=\"4\"></TKEntityProperty>\n                            <TKEntityProperty tkDataFormProperty\n                                name=\"genero\" displayName=\"GENERO\"\n                                index=\"5\"></TKEntityProperty>\n                    </RadDataForm>\n\n                    <Label text=\".::RETOS CUMPLIDOS::.\" class=\"h1 text-center p-t-20\"></Label> \n\n                </StackLayout>\n                \n            </TabContentItem>\n\n           \n        </Tabs>\n    </GridLayout>\n    \n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\" [icon]=\"item.icon\"> </Label>\n           \n          \n\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrd0NBQSt3QyxpQkFBaUIsbUVBQW1FLGVBQWUsd0tBQXdLLGtCQUFrQixtRUFBbUUsZUFBZSxrdUtBQWt1Syw4dEIiLCJmaWxlIjoiMC5hMWYyNzE0MTYwNjc3OWFjNjAyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcInRlc3RcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIlxcbiAgICBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBhbmRyb2lkOmhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgIDwhLS08SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9uYXRpdmVzY3JpcHRfbG9nb1xcXCIgY2xhc3M9XFxcImFjdGlvbi1pbWFnZVxcXCI+PC9JbWFnZT4tLT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIi46OiBTV0lORyBUSU1FIDo6LlxcXCIgY2xhc3M9XFxcImFjdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9BY3Rpb25CYXI+XFxuXFxuXFxuXFxuXFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgPFRhYnMgI3RhYnMgW3NlbGVjdGVkSW5kZXhdPVxcXCJkZWZhdWx0U2VsZWN0ZWRcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlZCk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzBdLmJhY2tncm91bmRDb2xvclxcXCI+N1xcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiLjo6IFRVUyBSRVRPUyA6Oi5cXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJ0cmFpbmVyXFxcIiBtYXJnaW5SaWdodD1cXFwiLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodD1cXFwiMzAwXFxcIiBzcGFuQ291bnQ9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXdHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPiAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgIGhlaWdodD1cXFwiMjEwXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnJlY29tZW5kIH19XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmVzdGlsbyB9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwicGFyYSBjb21wbGV0YXIgZXN0ZSByZXRvIGRlYmVzIG5hZGFyXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmRpc3RhbmNpYSB9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS50aWVtcG8gfX1cXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJjdW1wbGlkb1xcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCI+PC9Td2l0Y2g+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PiBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCIuLi4uLi4uLi5cXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cXFwiLi4uLi4uLi4uXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIi4uLi4uLi4uLlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCIuLi4uLi4uLi5cXFwiPjwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMV0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGFiZWwgMVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwicmVkXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGFiZWwgMlxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMYWJlbCAzXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJibHVlXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGFiZWwgNFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwieWVsbG93XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGFiZWwgNVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwib3JhbmdlXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGFiZWwgNlxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwicGlua1xcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxhYmVsIDdcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIyXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInB1cnBsZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsyXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiLjo6TUlTIERBVE9TOjouXFxcIiBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgcC10LTIwXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgICAgIDxSYWREYXRhRm9ybSBbc291cmNlXT1cXFwidXNlckxpc3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm5vbWJyZVxcXCIgZGlzcGxheU5hbWU9XFxcIk5PTUJSRVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIwXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiYXBlbGxpZG9cXFwiIGRpc3BsYXlOYW1lPVxcXCJBUEVMTElET1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVxcXCIxXFxcIj48L1RLRW50aXR5UHJvcGVydHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUS0VudGl0eVByb3BlcnR5IHRrRGF0YUZvcm1Qcm9wZXJ0eVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiZWRhZFxcXCIgZGlzcGxheU5hbWU9XFxcIkVEQURcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiMlxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VEtFbnRpdHlQcm9wZXJ0eSB0a0RhdGFGb3JtUHJvcGVydHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInBlc29cXFwiIGRpc3BsYXlOYW1lPVxcXCJQRVNPXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjNcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJuaXZlbFxcXCIgZGlzcGxheU5hbWU9XFxcIk5JVkVMXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9XFxcIjRcXFwiPjwvVEtFbnRpdHlQcm9wZXJ0eT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRLRW50aXR5UHJvcGVydHkgdGtEYXRhRm9ybVByb3BlcnR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJnZW5lcm9cXFwiIGRpc3BsYXlOYW1lPVxcXCJHRU5FUk9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD1cXFwiNVxcXCI+PC9US0VudGl0eVByb3BlcnR5PlxcbiAgICAgICAgICAgICAgICAgICAgPC9SYWREYXRhRm9ybT5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIuOjpSRVRPUyBDVU1QTElET1M6Oi5cXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+IFxcblxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgXFxuICAgICAgICA8L1RhYnM+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgXFxuXFxuICAgIDwhLS0gYm90dG9tIHRhYnMgLS0+XFxuICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cXFwiYXV0b1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCI+XFxuXFxuICAgICAgICA8IS0tIGJhc2UgbGF5ZXIgLS0+XFxuICAgICAgICA8QWJzb2x1dGVMYXlvdXQgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCAjdGFiQkdDb250YWluZXIgY29sdW1ucz1cXFwiYXV0bywgMTAsIGF1dG8sIDEwLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2xlZnRUYWJzIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCIwIDY4IDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjY2VudGVyUGF0Y2ggY29sPVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj48L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNyaWdodFRhYnMgY29sPVxcXCIzXFxcIiBjb2xTcGFuPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjgwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBib3JkZXJSYWRpdXM9XFxcIjY4IDAgMCAwXFxcIj48L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gZm9jdXMgY2lyY2xlIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjY2VudGVyQ2lyY2xlIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cXFwiMTAwXFxcIiBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFtjdXJyZW50VGFiSW5kZXhdLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNTBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIG1hcmdpbkJvdHRvbT1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiOTBcXFwiIHdpZHRoPVxcXCI5MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmZvY3VzQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVxcXCI0NVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9BYnNvbHV0ZUxheW91dD5cXG5cXG4gICAgICAgIDwhLS0gdGFiIGNvbnRlbnRzIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkNvbnRlbnRzICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgdGFiTGlzdDsgbGV0IGkgPSBpbmRleFxcXCJcXG4gICAgICAgICAgICBbY29sXT1cXFwiaVxcXCIgbWFyZ2luVG9wPVxcXCIyMFxcXCIgKHRhcCk9XFxcIm9uQm90dG9tTmF2VGFwKGkpXFxcIlxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJtaWRkbGVcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZmEtcmVndWxhclxcXCIgW3RleHRdPVxcXCJpdGVtLnRleHRcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJtaWRkbGVcXFwiXFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW2NvbG9yXT1cXFwiaXRlbS5jb2xvclxcXCIgZm9udFNpemU9XFxcIjIwXFxcIiBbaWNvbl09XFxcIml0ZW0uaWNvblxcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgXFxuXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHBhbiBsYXllciAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICNkcmFnQ2lyY2xlIGNvbHVtbj1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgKHBhbik9XFxcIm9uQ2VudGVyQ2lyY2xlUGFuKCRldmVudClcXFwiXFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCI5MFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ0cmFuc3BhcmVudFxcXCIgYm9yZGVyUmFkaXVzPVxcXCI0NVxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuPC9HcmlkTGF5b3V0PlxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==