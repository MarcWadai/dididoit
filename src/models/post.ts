import { User } from './user';

export class Post{
    user:string;
    tags:  Array<string>;
    users :  Array<User>;
    date : string;
    isDone : boolean;
    title : string;
    uid : string;
    constructor(user:string, tags:  Array<string>, users :  Array<string>, date : string, isDone : boolean, title : string, uid : string){
        this.user = user;        
        this.user =  user;
        this.date = date;
        this.isDone = isDone;
        this.title = title;
        this.uid = uid;
    }


   }
   