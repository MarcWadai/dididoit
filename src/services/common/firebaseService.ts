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
export class FirebaseService {
  // current user of the running application
  currentUser : User;

  constructor(private http:HttpInterceptor, public db :AngularFireDatabase){
  }

  getUserInDb(){
    return this.db.list('/users');
  }

  getPostsInDb(){
    return this.db.list('/users');
  }

  
}
