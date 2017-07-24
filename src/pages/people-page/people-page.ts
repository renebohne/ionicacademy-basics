import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-page',
  templateUrl: 'people-page.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.people = this.apiProvider.getPeople();
  }

  openDetails(person) {
    this.navCtrl.push('PeopleDetailsPage', {person: person});
  }

}
