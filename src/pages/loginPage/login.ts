import { HomeTabPage } from './../homeTab/homeTab';
import { RegisterPage } from './../registerPage/register';
import { User } from './../../models/user';
import { UserService } from './../../services/authentification/userService';
import {ToastService} from "../../services/modalViews/toastService";
import { HomePage } from "../home/home";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, Events } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/auth';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user : any = {email :"",password:"" };
  isSubmittedWrong = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public  storage: Storage, public loading: LoadingController,
    public toast :ToastService, public afAuth: AngularFireAuth, 
    public userService : UserService, public events : Events) {      
      //here we are putting this function here because otherwise our injected service are not recognize inside firebase method context
      afAuth.auth.onAuthStateChanged(function(user) {   
        
        if (user) {
          // userService.addUserInDB(user);
          console.log("user already logged", user);
          userService.getUserInDb(user.uid).once('value').then(userDatas =>{
            userDatas.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              const key = childSnapshot.key;
              // childData will be the actual contents of the child
              const childData = childSnapshot.val();
              console.log("userDatas",childData);
          });            
  
            //const newUser = new User(userDatas.email, userDatas.refreshToken, userDatas.uid, userDatas.name);        
            // userService.setCurrentUser(newUser);
          });
          navCtrl.setRoot(HomeTabPage);
          
        } else {
          console.log("not logged");
          // No user is signed in.
        }
      });       

    }

  
  //Authentification submitted
  onSubmit(loginForm:NgForm) : void {
    let loader = this.loading.create({
      content: 'Loading',
    });
    //check if the form is valid
    if (loginForm.form.valid){

      //We need to make an
      loader.present().then(() => {
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(res=>{
          loader.dismiss();
          console.log("res login", res);
          this.userService.setCurrentUser(new User(res.email, res.refreshToken, res.uid, res.name));
          // this.navCtrl.push(HomeTabPage);
        }).catch(err=>{
          loader.dismiss();
          this.toast.getErrorToast(err.toString()).present();
        })
      });
    }else{
      console.log("form invalid");
      this.isSubmittedWrong = true;
      this.toast.getErrorToast("The form is invalid").present();
    }
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }
}
