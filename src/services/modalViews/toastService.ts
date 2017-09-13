import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toastCtrl : ToastController){
  }

  public getCustomToast(message : string, style? : any) : any {
    return this.toastCtrl.create({
      message: message,
      duration: 3500,
      showCloseButton: true,
      dismissOnPageChange: true,
      cssClass: (style) ? style : "",
    });
  }

  public getErrorToast(message? : string) : any {
    return this.toastCtrl.create({
      message: (message) ? message : "An error has occured",
      duration: 3500,
      showCloseButton: true,
      dismissOnPageChange: true,
      cssClass: "error-toast",
    });
  }



}
