import { HomePage } from './../pages/home/home';
import {AgendaList} from "../pages/agenda/agendaList";
import {BookingList} from "../pages/booking/ListPage/bookingList";
import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreenPage } from '../pages/SplashScreenManager/splashScreen';
import {Keyboard} from '@ionic-native/keyboard';
import { Calendar} from '../pages/calendar/calendar';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../pages/loginPage/login';
@Component({
  templateUrl: 'app.html'
})
export class DididoitApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  // rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar,
    keyboard : Keyboard, events: Events, translate : TranslateService) {
    translate.setDefaultLang('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString("#ff782d");
      // splashScreen.hide();
      //  if (platform.is('ios')) {
      //    keyboard.disableScroll(true);
      //  }
    });
  }

}
