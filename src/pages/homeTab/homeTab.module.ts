import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTabPage } from './homeTab';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeTabPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTabPage),
    FormsModule
  ],
  exports: [
    HomeTabPage
  ]
})
export class HomeTabModule {}
