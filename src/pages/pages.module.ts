import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler,IonicPageModule } from 'ionic-angular';

import { HomePage } from './home/home';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';
import { SetIncomePage } from './set-income/set-income';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HomePage,
    LoginPage,
    RegisterPage,
    SetIncomePage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(PagesModule),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    LoginPage,
    RegisterPage,
    SetIncomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class PagesModule {}
