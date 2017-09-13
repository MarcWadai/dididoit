import { Injectable } from '@angular/core';
import {Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import * as Rx from "rxjs/Rx";
import 'rxjs/add/observable/of';
import {Constants} from '../common/constants';
import {HttpInterceptor} from '../network/httpInterceptor';
import {HandleErrors} from '../network/handleError';

@Injectable()
export class AuthentificationService {
  constructor(private http: HttpInterceptor){
  }

  //login the user
  /**
   * [postLogin description]
   * @param  {string} email    [description]
   * @param  {string} password [description]
   * @return {Obersvable} throw and error or return the response
   */
  postLogin(email : string, password :string) {
    let body = {email : email, password : password};
    localStorage.getItem("");
    return this.http.post(Constants.LOGIN_URL, body)
      .map((datas : any) => {
        let resp = datas.json() || {};
        if (resp.status == "success"){
          localStorage.setItem('authorization_token', resp.token);
          return resp;
        }
        return resp;
      }).catch((err)=>{
        return HandleErrors.manage(err, "auth");
      });

  }

  //Checking if the user is already authentified or not
  checkAuth() {
        let auth_token = localStorage.getItem("authorization_token");
        if (auth_token){
          return this.http.get(Constants.CHECK_LOGIN_URL)//, {headers :header})
            .map((datas : any) => {
              let res = datas.json();
              return res.authenticated;
            }).catch((err)=>{
              return HandleErrors.manage(err, "auth");
            });
        }else{
          return Observable.of(false);
        }
  }

  //asking for a logout of the user
  postLogout(){
    return this.http.post(Constants.FORGOT_URL,{})
      .map((datas : any) => {
        let res = datas.json();
        console.log("res in post logout");
        console.log(res);
        return res;
      }).catch((err)=>{
        return HandleErrors.manage(err, "auth");
      });
  }

  //resetting the password
  postPasswordForgot(email){
    let body = {email : email};
    return this.http.post(Constants.FORGOT_URL,body)
      .map((datas : any) => {
        let res = datas.json();
        return res;
      }).catch((err)=>{
        return HandleErrors.manage(err, "auth");
      });
  }

}
