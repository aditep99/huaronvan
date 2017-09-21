import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  confirmData = {
    id: "",
    phone: "",
    cardid: "",
    detail: ""
  };
  time = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.confirmData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  confrim() {
    this.navCtrl.popToRoot();
  }

}
