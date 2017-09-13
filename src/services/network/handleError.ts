import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class HandleErrors {


  public static manage (error: Response | any, type? : string) {

      let errMsg: string = "";
      if (error instanceof Response) {
        let errorJson = error.json();
        //const body = error.json();
        // const err = body.error || JSON.stringify(body);
        // errMsg = `${error.status} - ${error.statusText || ''} ${err}` ;
        switch(error.status){
          case 400 :
            if(errorJson.msg && typeof errorJson.msg == "object"){
              console.log(errorJson.msg);
              Object.keys(errorJson.msg).forEach(key => {
                console.log(errorJson.msg[key]);
                errMsg +=  errorJson.msg[key];
              })
            }else{
              errMsg = (errorJson.msg) ? errorJson.msg : "Bad request";
            }
            break;
          case 401 :
            errMsg = "401 - You are not authenticated";
            break;
          case 403 :
            errMsg = "403 - Token expired or wrong password";
            break;
          case 404 :
            errMsg = "404 - Wrong request";
            break;
          case 500 :
            errMsg = "500 - Sorry something went wrong";
            break;
          default :
            errMsg = "Sorry something went wrong"
            break;
        }
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(error);
      console.error(errMsg);
      return Observable.throw(errMsg);
    }


}
