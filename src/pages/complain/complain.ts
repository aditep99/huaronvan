import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule } from 'ionic-angular';
import 'rxjs/add/operator/map'
/**
 * Generated class for the ComplainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain',
  templateUrl: 'complain.html',
})
export class ComplainPage {

  complainData = {
    id: "",
    phone: "",
    cardid: "",
    detail: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // this.complainData = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainPage');
  }

  sentData(complainData) {
    // this.http.post('http://localhost:63434/api/Complain', complainData)
    //   .map((res) => {
    //     return res.json()
    //   })
    //   .subscribe((data) => {
    //     complainData = data;
    //     this.navCtrl.push("ConfirmPage", complainData);
    //     console.log(complainData);
    //   });
      this.navCtrl.push("ConfirmPage", complainData);
  }

}
