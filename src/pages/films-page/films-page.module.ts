import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsPage } from './films-page';

@NgModule({
  declarations: [
    FilmsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsPage),
  ],
  exports: [
    FilmsPage
  ]
})
export class FilmsPageModule {}
