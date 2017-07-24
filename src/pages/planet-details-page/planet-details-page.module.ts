import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetDetailsPage } from './planet-details-page';

@NgModule({
  declarations: [
    PlanetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetDetailsPage),
  ],
  exports: [
    PlanetDetailsPage
  ]
})
export class PlanetDetailsPageModule {}
