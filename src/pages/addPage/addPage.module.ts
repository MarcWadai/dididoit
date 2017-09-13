import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './addPage';
import {FormsModule} from '@angular/forms';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
    FormsModule,
    IonTagsInputModule
  ],
  exports: [
    AddPage
  ]
})
export class AddModule {}
