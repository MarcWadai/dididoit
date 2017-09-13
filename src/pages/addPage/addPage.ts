import { UserService } from './../../services/authentification/userService';
import { ToastService } from './../../services/modalViews/toastService';
import { PostService } from './../../services/didi/postService';
import { Post } from './../../models/post';
import {AuthentificationService} from "../../services/authentification/authentificationService";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../../models/user';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'addPage.html',
})
export class AddPage {
  post : Post = new Post("", [],[],"", false, "", "" );    
  isSubmittedWrong = false;
  addForm : FormGroup;
  showUserLoad : boolean = false;
  //list of users displayed in the drop down
  userList : any = [];
  //to display that user has been found in the drop down  
  noUsers : boolean = false;
  selectedUserList : any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, fb : FormBuilder, 
    public postService : PostService, public toast : ToastService, public userService : UserService) {
      // Those lines are for reactive form
      this.addForm = fb.group({"didi": ["", Validators.required], "users" : ""})
      
  }


  ionViewDidEnter(){
    //detect when the user input is typing  
    this.addForm.controls['users'].valueChanges.do(()=>{
      //reset the data from the drop down list
      this.userList = [];
      this.noUsers = false;
      console.log("set showUserLoad to true");
      (this.showUserLoad) ? "" : this.showUserLoad = true;
    })
    .debounceTime(1200)
    .distinctUntilChanged()
    .subscribe(newValue =>{
          // this.showUserLoad = false;          
          this.userService.getFilteredUser(newValue).once('value',  data =>{            
            this.showUserLoad = false;            
            data.forEach((oneData)  => {
              console.log("user data filtered", oneData.val()); 
              this.userList.push(oneData.val());
              return false;
            });
            if (this.userList.length == 0) {
              this.noUsers = true;
            }
          });
          
    });
  }

  selectedUser(userSelected, index){
    const alreadyExist = this.selectedUserList.some(user =>{
      return userSelected.email == user.email;
    })
    if(alreadyExist){
      this.toast.getErrorToast("This user has already been added to the list");
    }else{
      this.selectedUserList.push(userSelected);
      this.userList.splice(index, 1);
    }        
  }

  onSubmit(){
    console.log("submit", this.post);
    if (this.addForm.valid){         
      this.post.title = this.addForm.controls['didi'].value;        
      this.post.users = this.selectedUserList;      
      this.postService.addPost(this.post);
      this.navCtrl.pop();   
    }else{
      this.toast.getErrorToast("The form is invalid, didi title is mandatory");
    }  
  }

  onCancel(){
    this.navCtrl.pop();
  }

  removeUser(i){
    this.selectedUserList.splice(i, 1);
  }

}
