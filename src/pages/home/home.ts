import { LoginPage } from './../loginPage/login';
import { Post } from './../../models/post';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { PostService } from './../../services/didi/postService';
import { UserService } from './../../services/authentification/userService';
import { DetailPage } from './../detailPage/detailPage';
import {AddPage} from "../addPage/addPage";
import {ToastService} from "../../services/modalViews/toastService";
import {AuthentificationService} from "../../services/authentification/authentificationService";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  users : any;
  isSubmittedWrong = false;
  posts :FirebaseListObservable<Post[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public userService : UserService, public postService :PostService, public toast : ToastService) {

    this.posts = postService.getPostList();
    this.posts.subscribe(res=>{
      postService.setPostList(res);
      console.log("res posts", res);
    });    
  }

  addPost(){
    this.navCtrl.push(AddPage);
  }

  seeDetails(post){
    this.postService.setSelectedPost(post);
    this.navCtrl.push(DetailPage);
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
