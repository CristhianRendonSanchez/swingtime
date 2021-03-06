import { ChallengeService } from "./home.service";

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { screen } from 'platform';
import { GridLayout } from "ui/layouts/grid-layout";
import { PanGestureEventData, GestureStateTypes, GestureEventData } from "ui/gestures";
import { AnimationCurve } from "ui/enums";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { Observable } from "tns-core-modules/data/observable";





@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    isLoading = false;


// parte grafica

    @ViewChild('tabs', { static: true }) tabs: ElementRef;
    @ViewChild('centerCircle', { static: true }) centerCircle: ElementRef;
    @ViewChild('dragCircle', { static: true }) dragCircle: ElementRef;
    @ViewChild('leftTabs', { static: true }) leftTabs: ElementRef;
    @ViewChild('rightTabs', { static: true }) rightTabs: ElementRef;
    @ViewChild('centerPatch', { static: true }) centerPatch: ElementRef;
    @ViewChild('tabBGContainer', { static: true }) tabBGContainer: ElementRef;

    @ViewChildren('tabContents', { read: ElementRef }) tabContents: QueryList<ElementRef>;


    // Pan Helper
    prevDeltaX: number = 0;


    animationCurve = AnimationCurve.cubicBezier(.38, .47, 0, 1);

    // Tab Contents and Properties
    tabContainer = {
        backgroundColor: '#fff',
        focusColor: '#fff'
    };
    tabList: { text: string, color?: string, backgroundColor: string, fadeColor?: string, icon?: string }[] = [
        { text: 'ENTRENA', backgroundColor: '#40E0D0', color: '#000', icon:'res://home'  },
        { text: 'INICIO', backgroundColor: '#48D1CC', color: '#000'  },
        { text: 'DATOS', backgroundColor: '#00CED1', color: '#000'},

    ];

    currentTabIndex: number = 2;
    defaultSelected: number = 1;

    // --------------------------------------------------------------------
    // Hooks

    ngAfterViewInit(): void {
        this.initializeTabBar();
    }

    // --------------------------------------------------------------------
    // User Interaction

    // MY: Tabs selected index is changed, e.g. when swipe to navigate.
    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        if (args.newIndex !== this.currentTabIndex) {
            this.onBottomNavTap(args.newIndex);
        }
    }

    // Tap on a one of the tabs
    onBottomNavTap(index: number, duration: number = 300): void {
        if (this.currentTabIndex !== index) {
            const tabContentsArr = this.tabContents.toArray();

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
    }

    // Drag the focus circle to one of the tabs
    onCenterCirclePan(args: PanGestureEventData): void {
        let grdLayout: GridLayout = <GridLayout>args.object;
        let newX: number = grdLayout.translateX + args.deltaX - this.prevDeltaX;

        if (args.state === 0) {
            // finger down
            this.prevDeltaX = 0;
        } else if (args.state === 2) {
            // finger moving
            grdLayout.translateX = newX;
            this.leftTabs.nativeElement.translateX = newX;
            this.rightTabs.nativeElement.translateX = newX;
            this.centerPatch.nativeElement.translateX = newX;
            this.centerCircle.nativeElement.translateX = newX;

            this.prevDeltaX = args.deltaX;
        } else if (args.state === 3) {
            // finger up
            this.prevDeltaX = 0;
            const tabWidth = screen.mainScreen.widthDIPs / this.tabList.length;
            const tabSelected: number = Math.round(Math.abs(newX / tabWidth));
            const translateX: number = tabSelected * tabWidth;
            if (newX < 0) {
                // pan left
                this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
                // MY: Change the selected index of Tabs when pan left
                this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
            } else {
                // pan right
                this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
                // MY: Change the selected index of Tabs when pan right
                this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
            }
        }
    }

    // --------------------------------------------------------------------
    // Tab bar helpers

    initializeTabBar(): void {
        // set up base layer
        this.leftTabs.nativeElement.width = screen.mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = screen.mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;

        this.tabBGContainer.nativeElement.translateX = - (screen.mainScreen.widthDIPs / 2) - (80 / 2);

        // set default selected tab
        const tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = - 15;
        this.currentTabIndex = this.defaultSelected;
    }

    getSlideAnimation(index: number, duration: number) {
        return {
            translate: { x: this.getTabTranslateX(index), y: 0 },
            curve: this.animationCurve,
            duration: duration
        };
    }

    getFocusAnimation(index: number, duration: number) {
        return {
            scale: { x: 1.5, y: 1.5 },
            translate: { x: 0, y: -15 },
            duration: duration
        };
    }

    getUnfocusAnimation(index: number, duration: number) {
        return {
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration
        };
    }

    getTabTranslateX(index: number): number {
        return index * screen.mainScreen.widthDIPs / this.tabList.length - (screen.mainScreen.widthDIPs / 2) + (80 / 2)
    }

//-----------------------------------------------------------------------------

    constructor() {}

    ngOnInit(): void {
        
  }

//-----------------------------------------------------------------------------

userList: { nombre: string, apellido: string, edad: number, peso: number, nivel: number, genero: string } =  { nombre: "Cristhian",
            apellido: "Rendon",
            edad: 23,
            peso: 64,
            nivel: 2,
            genero: "hombre" };


    trainer: { recomend: string, estilo: string, distancia: string, tiempo: string}[] = [
        { recomend: "SVM", estilo:"libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeSVM/23/50/2/64/1/0/0/0/1/0" },
        { recomend: "Ramdon Forest", estilo:"libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeRF/23/50/2/60/1/0/0/0/1/0" },
        { recomend: "KNN", estilo:"libre", distancia: "50 mts", tiempo: "http://192.168.0.11:8000/timeKNN/23/50/2/60/1/0/0/0/1/0" },

        { recomend: "SVM", estilo:"libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceSVM/23/50/2/64/1/0/0/0/1/0" },
        { recomend: "Ramdon Forest", estilo:"libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceSRF/23/50/2/60/1/0/0/0/1/0" },
        { recomend: "KNN", estilo:"libre", tiempo: "2 min", distancia: "http://192.168.0.11:8000/distanceKNN/23/2/60/60/1/0/0/0/1/0" },

        { recomend: "", estilo:"", tiempo: "", distancia: "" },

        
    ];

}