import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-films-page',
  templateUrl: 'films-page.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
}
