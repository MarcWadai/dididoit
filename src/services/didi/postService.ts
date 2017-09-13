import { DetailModule } from './../../pages/detailPage/detailPage.module';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './../../models/post';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Constants} from '../common/constants';
import {User} from '../../models/user';
import {HttpInterceptor} from "../network/httpInterceptor";
import * as moment from 'moment';

// getting datas about the user
@Injectable()
export class PostService {
  // current user of the running application
    postList : Post[];
    postSelected : Post;
    constructor(private http:HttpInterceptor,  public db :AngularFireDatabase){
    }

    getSelectedPost() : Post{
        return Object.assign({}, this.postSelected);
    }

    setSelectedPost(post :Post){        
        this.postSelected = Object.assign({}, post);
    }
    
    // we just save the current user
    addPost(postToAdd : Post){
        const newPostKey = this.db.database.ref().child('posts').push().key;
        postToAdd.uid = newPostKey;
        postToAdd.date = moment().format("YYYY-MM-DD HH:mm:ss");
        let updates = {};
        updates['/posts/' + newPostKey] = postToAdd;
        return this.db.database.ref().update(updates);
    //   this.postList.push(postToAdd);
    }

    getPostList() : FirebaseListObservable<any[]> {
        return this.db.list('/posts');        
    }

    setPostList(list){
        this.postList = list.splice();
    }

    updatePost(post :Post){
        return this.db.database.ref('/posts/' + post.uid).update(post);
    }

    
    

}
