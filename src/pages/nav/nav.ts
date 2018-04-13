import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'navPage'})
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private accountData = {
    name:'',
    email:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.accountData = this.navParams.get('account');
  }

}
