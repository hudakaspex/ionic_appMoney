import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler,IonicPageModule } from 'ionic-angular';

import { HomePage } from './home/home';
import { LoginPage } from './login/login';
import { RegisterPage } from './register/register';

@NgModule({
  declarations: [
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(PagesModule)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class PagesModule {}
