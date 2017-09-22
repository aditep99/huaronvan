import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.confirmData = this.navParams.data;
    // let url = 'http://localhost:51390/api/Complain/1234567891234';
    // this.http.get(url)
    //   .map((res) => {
    //     return res.json()
    //   })
    //   .subscribe((data) => {
    //     this.confirmData = data;
    //     console.log(this.confirmData);
    //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  confrim() {
    this.navCtrl.popToRoot();
  }

}
