
export class User{
  email:string;
  refreshToken: string;
  uid : string;
  name : string;

 constructor(email:string, refreshToken: string,uid : string, name : string){
  this.email = email;
  this.refreshToken = refreshToken;
  this.uid  = uid;
  this.name  = name;
 }

}
