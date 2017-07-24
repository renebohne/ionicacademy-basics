import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleDetailsPage } from './people-details-page';

@NgModule({
  declarations: [
    PeopleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleDetailsPage),
  ],
  exports: [
    PeopleDetailsPage
  ]
})
export class PeopleDetailsPageModule {}
