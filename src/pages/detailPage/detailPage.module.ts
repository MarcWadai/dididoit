import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detailPage';
import {FormsModule} from '@angular/forms';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    FormsModule,
    IonTagsInputModule
  ],
  exports: [
    DetailPage
  ]
})
export class DetailModule {}
