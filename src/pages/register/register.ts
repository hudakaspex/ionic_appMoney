import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private labels = [
    { label:'Name', type:'text', controlName:'name', errMessage:'Name is required'},
    { label:'Username', type:'text', controlName:'username', errMessage:'Username is required'},
    { label:'Email', type:'email', controlName:'email', errMessage:'Email is required'},
    { label:'Password', type:'password', controlName:'password', errMessage:'Password is required'},
    { label:'Confirm password', type:'password', controlName:'confirm', errMessage:'Confirm password is required'},
  ]

  form : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      'name' : ['', Validators.compose([Validators.required])],
      'username':['', Validators.compose([Validators.required])],
      'email':['', Validators.compose([Validators.required, Validators.email])],
      'password':['', Validators.compose([Validators.required])],
      'confirm':['', Validators.compose([Validators.required])]
    })
  }

  signup(form){
    console.log(form)
  }

}
