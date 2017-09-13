import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Constants} from '../common/constants';
import {User} from '../../models/user';
import {HttpInterceptor} from "../network/httpInterceptor";
import { AngularFireDatabase } from 'angularfire2/database';

// getting datas about the user
@Injectable()
export class UserService {
  // current user of the running application
  currentUser : User;

  constructor(private http:HttpInterceptor, public db :AngularFireDatabase, public afAuth: AngularFireAuth){
  }

  //getting the user infos
  getUserInfo() : Observable<User>{
      return this.http.get(Constants.USER_INFO)
        .map(datas => {
            let userTmp = datas.json();
            return userTmp.user;
        }).catch(this.handleError)
  }

  // we just save the current user
  public setCurrentUser(user : User){
    try{
      if(user){
        localStorage.setItem("user", JSON.stringify(user));
        this.currentUser = user;
      }else{
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      }
    }catch(e){
      console.log(e); 
    }
  }

  getCurrentUser() : User{
    if (this.currentUser){
      return this.currentUser;
    }else{
      let user = localStorage.getItem("user");
      return JSON.parse(user);
    }
  }



  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getAllUserInDb(){
    return this.db.list('/users');
  }

  getUserInDb(user : string){
     return this.db.database.ref('/users/' +user) ;
  }
    
  getFilteredUser(value){
    return this.db.database.ref('/users').orderByChild('email').startAt(value).limitToFirst(20);
  }

  /**
   * D
   * @param user user to add
   */
  addUserInDB(user : User){
    console.log("adduser in db", user);    

    return this.db.database.ref('/users/' + user.uid).set({email :user.email, uid : user.uid, refreshToken : user.refreshToken, name : user.name});
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
