import { PostService } from './../../services/didi/postService';
import {ToastService} from "../../services/modalViews/toastService";
import {AuthentificationService} from "../../services/authentification/authentificationService";
import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../../models/user';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import * as moment from 'moment' ;


/**
 * Generated class for the Login page.
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detailPage.html',
  animations: [    
        trigger('focusDone', [
            state('inactive', style({
                // transform: 'scale(1)',                                          
            })),
            state('active', style({
                // transform: 'scale(1.1)',                    
            })),
            transition('inactive => active',   animate(300, keyframes([
              style({transform: 'scale(1.5)'}),
              style({transform: 'scale(2)'}),
              style({transform: 'scale(1)'})
            ]))),
            transition('active => inactive',  animate(300, keyframes([
              style({transform: 'scale(1.5)'}),
              style({transform: 'scale(2)'}),
              style({transform: 'scale(1)'})
            ])))
        ]),

    ]
})
export class DetailPage {  

  isSubmittedWrong = false;
  addForm : FormGroup;
  selectedPost : any = {};
  state: string = 'inactive';
  constructor(public navCtrl: NavController, public navParams: NavParams, public postService : PostService) {
  }

    ionViewWillEnter(){
      this.selectedPost = this.postService.getSelectedPost();
    }

    doneClick(){                
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      setTimeout(()=>{
        this.selectedPost.isDone = (this.selectedPost.isDone ? false : true);
        this.selectedPost.date = moment().format('YYYY-MM-DD HH:mm:ss');
        this.postService.updatePost(this.selectedPost)
      },400);
    }
}
