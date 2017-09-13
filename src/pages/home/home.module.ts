import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FormsModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {}
