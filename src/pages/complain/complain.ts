import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule } from 'ionic-angular';

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
    cardid:"",
    detail:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.complainData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainPage');
  }

  sentData(complainData){
    this.navCtrl.push("ConfirmPage", complainData);
  }

}
