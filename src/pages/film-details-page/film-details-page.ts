import { FavoriteProvider } from './../../providers/favorite/favorite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-film-details-page',
  templateUrl: 'film-details-page.html',
})
export class FilmDetailsPage {
  film: any;
  isFavorite = false;

  constructor(public navCtrl: NavController, public favoriteProvider: FavoriteProvider, public navParams: NavParams, private emailComposer: EmailComposer) {
    this.film = this.navParams.get('film');
    this.favoriteProvider.isFavorite(this.film.episode_id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  favoriteFilm() {
    this.favoriteProvider.favoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    let email = {
      to: 'saimon@devdactic.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
