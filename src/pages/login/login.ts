import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SetIncomePage } from '../set-income/set-income';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  setIncome(){
    this.navCtrl.setRoot(SetIncomePage)
  }
  signup(){
    this.navCtrl.push(RegisterPage)
  }

}
