import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitationListPage } from './invitationList';
import {FormsModule} from '@angular/forms';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    InvitationListPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitationListPage),
    FormsModule,
    IonTagsInputModule
  ],
  exports: [
    InvitationListPage
  ]
})
export class InvitationListModule {}
