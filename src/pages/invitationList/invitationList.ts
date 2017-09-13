import { LoginPage } from './../loginPage/login';
import { UserService } from './../../services/authentification/userService';
import { PostService } from './../../services/didi/postService';
import {ToastService} from "../../services/modalViews/toastService";
import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-invitationList',
  templateUrl: 'invitationList.html',
})
export class InvitationListPage {  

  constructor(public navCtrl: NavController, public navParams: NavParams, public postService : PostService,
    public userService : UserService, public toast : ToastService) {
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
