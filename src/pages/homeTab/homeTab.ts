import { ToastService } from './../../services/modalViews/toastService';
import { LoginPage } from './../loginPage/login';
import { UserService } from './../../services/authentification/userService';
import { InvitationListPage } from './../invitationList/invitationList';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Tabs } from "ionic-angular/navigation/nav-interfaces";
import {HomePage} from '../home/home'
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-homeTab',
  templateUrl: 'homeTab.html',
})
export class HomeTabPage {

  @ViewChild('myTabs') tabRef: Tabs;  
  tabHome  = HomePage;
  tabListInvitation = InvitationListPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService : UserService, public toast : ToastService) {
  }

 
  signOut(){
    this.userService.logout().then(()=>{
      this.navCtrl.setRoot(LoginPage);
    }).catch(err => {
      console.error(err);
      this.toast.getErrorToast(err.toString());
    });
  }
}
