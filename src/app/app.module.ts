import { HomeTabModule } from './../pages/homeTab/homeTab.module';
import { InvitationListModule } from './../pages/invitationList/invitationList.module';
import { RegisterModule } from './../pages/registerPage/register.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { PostService } from './../services/didi/postService';
import { DetailModule } from './../pages/detailPage/detailPage.module';
import {AddModule} from "../pages/addPage/addPage.module";
import {HomeModule} from "../pages/home/home.module";


//Ionic and angular module
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule,  Http, XHRBackend, RequestOptions} from '@angular/http';
import {Keyboard} from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Diditdoit modules
import { DididoitApp } from './app.component';
import {SharedModule} from './shared.module';
import {LoginModule} from "../pages/loginPage/login.module";
//dididoit  Services
import {SplashScreenModule} from '../pages/SplashScreenManager/splashScreen.module';
import { ToastService} from '../services/modalViews/toastService';
import {AuthentificationService} from '../services/authentification/authentificationService';
import {HttpInterceptor} from '../services/network/httpInterceptor';
import {UserService} from "../services/authentification/userService";
import {HttpFactory} from "../services/network/httpFactory";
import {createTranslateLoader} from "../services/translate/translateLoader";
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
declare const ENV;

// AF2 Settings
export const firebaseConfig = {
    apiKey: ENV.firebase.apiKey,
    authDomain: ENV.firebase.authDomain,
    databaseURL: ENV.firebase.databaseURL,
    projectId: ENV.firebase.projectId,
    storageBucket: ENV.firebase.storageBucket,
    messagingSenderId: ENV.firebase.messagingSenderId
  };

@NgModule({
  declarations: [
    DididoitApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DididoitApp,  {platforms: { ios: { scrollAssist: false, autoFocusAssist: false }, android : {scrollAssist: false, autoFocusAssist: false} }}),
    LoginModule,
    HomeModule,
    AddModule,
    RegisterModule,
    InvitationListModule,
    HomeTabModule,
    DetailModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DididoitApp
  ],
  providers: [
    StatusBar,
    //SplashScreen,
    Keyboard,
    AngularFireDatabase,
    AuthentificationService,
    UserService,
    PostService,
    ToastService,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler},
    {
      provide: HttpInterceptor,
      useFactory: HttpFactory,
      deps: [ XHRBackend, RequestOptions]
    }
  ],
  exports : [SharedModule]
})
export class AppModule {}
