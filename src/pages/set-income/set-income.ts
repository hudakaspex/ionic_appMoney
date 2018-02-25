import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-set-income',
  templateUrl: 'set-income.html',
})
export class SetIncomePage {
  income:number
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetIncomePage');
  }

  rootHome(){
    
    this.navCtrl.setRoot(HomePage)
  }
}
