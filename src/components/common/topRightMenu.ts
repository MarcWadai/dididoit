import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
@Component({
  template: `
    <ion-list no-lines>
      <button ion-item>{{'menu.call_guest' | translate}}</button>
      <button ion-item>{{'menu.send_sms' | translate}}</button>
      <button ion-item>{{'menu.send_mail' | translate}}</button>
      <button ion-item>{{'menu.send_invoice' | translate}}</button>
      <button ion-item>{{'menu.send_contract' | translate}}</button>
      <button ion-item>{{'menu.add_payment' | translate}}</button>
    </ion-list>
  `})
export class TopRightMenu {
  constructor(public navCtrl: NavController) {}

}
