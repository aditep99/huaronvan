import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoComplain() {
    this.navCtrl.push('ComplainPage');
  }
  gotoTelephone(){
    this.navCtrl.push('TelephonePage');    
  }
}
