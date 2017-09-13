import { UserService } from './../../services/authentification/userService';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {FormsModule} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    FormsModule
  ],
  exports: [
    LoginPage
  ],
  providers : [AngularFireAuth, UserService]
})
export class LoginModule {}
