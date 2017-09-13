import { Component,Input } from '@angular/core';
import {Events, MenuController} from 'ionic-angular';
import {SideMenuService} from '../../services/common/sideMenuService';

@Component({
  selector: 'side-menu',
  template: `
    <ion-content class="side-menu">
      <div class="menu-header">
        <ion-item no-lines>
          <ion-avatar item-start>
            <img src="assets/avatar-2_img.png">
          </ion-avatar>
          <h1>{{user}}</h1>
        </ion-item>
      </div>
      <hr/>
      <ion-list no-lines>
        <button ion-item class="sidemenu-button" [ngClass]="{'active' : navSelected == 0}" (click)="bookingNav()">
          <div class="menu-item">
            <img class="menu-icon" [hidden]="navSelected != 0" item-start src="assets/icon/SideMenu_Booking-WHITE.png">
            <img class="menu-icon" [hidden]="navSelected == 0" item-start src="assets/icon/SideMenu_Booking.png">
            <h2>{{'sideMenu.bookings' | translate}}</h2>
          </div>
        </button>
        <button ion-item class="sidemenu-button" [ngClass]="{'active' : navSelected == 1}" (click)="calendarNav()">
          <div class="menu-item">
          <img class="menu-icon" [hidden]="navSelected != 1" item-start src="assets/icon/SideMenu_calendars-WHITE.png">
            <img class="menu-icon" [hidden]="navSelected == 1" item-start src="assets/icon/SideMenu_calendars.png">
            <h2>{{'sideMenu.calendar' | translate}}</h2>
          </div>
        </button>
        <button ion-item class="sidemenu-button" [ngClass]="{'active' : navSelected == 2}" (click)="agendaNav()">
          <div class="menu-item">
          <img class="menu-icon" [hidden]="navSelected != 2" item-start src="assets/icon/SideMenu_calendars-WHITE.png">
            <img class="menu-icon" [hidden]="navSelected == 2" item-start src="assets/icon/SideMenu_calendars.png">
            <h2>{{'sideMenu.agenda' | translate}}</h2>
          </div>
        </button>
        <button ion-item class="sidemenu-button" [ngClass]="{'active' : navSelected == 3}" (click)="logoutNav()">
          <div class="menu-item">
            <img class="menu-icon" [hidden]="navSelected != 3" item-start src="assets/icon/SideMenu_logout-WHITE.png">
            <img class="menu-icon" [hidden]="navSelected == 3"item-start src="assets/icon/SideMenu_logout.png">
            <h2>{{'sideMenu.logout' | translate}}</h2>
          </div>
        </button>
      </ion-list>
      <!-- <button ion-item class="sidemenu-button-logout" (click)="logoutNav()">
        <div class="menu-item">
          <img class="menu-icon" item-start src="assets/icon/SideMenu_logout.png">
          <h2>Logout</h2>
        </div>
      </button> -->
      <!-- not working yet -->
      <!-- <side-menu></side-menu> -->
    </ion-content>

  `})
export class SideMenu {
  @Input() user:string;
  navSelected : number;
  constructor(public events : Events, public sideService : SideMenuService, public menuCtrl : MenuController) {
    events.subscribe("nav:selected", selection =>{
      this.navSelected = selection;
    });
  }

  //side menu navigation, sending events back to app.component
  bookingNav(){
    this.navSelected = 0;
    // this.sideService.setNavSelected(0);
    this.menuCtrl.close();
    this.events.publish('nav:booking', "booking");
  }
  calendarNav(){
    this.navSelected = 1;
    // this.sideService.setNavSelected(1);
    this.menuCtrl.close();
    this.events.publish('nav:calendar', "calendar");
  }

  agendaNav(){
    this.navSelected = 2;
    // this.sideService.setNavSelected(1);
    this.menuCtrl.close();
    this.events.publish('nav:agenda', "agenda");
  }
  logoutNav(){
    this.navSelected = 3;
    this.menuCtrl.close();
    // this.sideService.setNavSelected(2);
    this.events.publish('nav:logout', "logout");
  }


}
