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
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user : any = {email :"",password:"", username : "" };
  isSubmittedWrong = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public  storage: Storage, public loading: LoadingController,
    public toast :ToastService, public afAuth: AngularFireAuth, 
    public userService : UserService, public events : Events) {          
    }

  //Authentification submitted
  onSignup(registerForm:NgForm) : void {
    let loader = this.loading.create({
      content: 'Loading',
    });
    //check if the form is valid
    if (registerForm.form.valid){
      console.log("form valid");
      //We need to make an
      loader.present().then(() => {
        this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res=>{          
          
          this.userService.addUserInDB(new User(res.email, res.refreshToke, res.uid, this.user.username)).then(()=>{
            // this.navCtrl.setRoot(HomePage);
            console.log("res signup");
            loader.dismiss();          
          }).catch(err=>{
            console.log("err register user in db", err);
          });          
        }).catch(err=>{
          loader.dismiss();
          console.log("err create user", err);
          this.toast.getErrorToast(err.toString()).present();
        })
      });
    }else{
      console.log("form invalid");
      this.isSubmittedWrong = true;
      this.toast.getErrorToast("The form is invalid").present();
    }
  }


}
