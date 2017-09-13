import { UserService } from './../../services/authentification/userService';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {FormsModule} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    FormsModule
  ],
  exports: [
    RegisterPage
  ],
  providers : [AngularFireAuth, UserService]
})
export class RegisterModule {}
