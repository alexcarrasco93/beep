import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private toastProvider: ToastProvider
  ) {}

  login(event: LoginResponse) {
    if (!event.error) {
      this.toastProvider.show(`Welcome to Beep, ${event.result.email}`);
      this.navCtrl.setRoot('EditProfilePage');
    } else {
      this.toastProvider.show(event.error.message);
    }
  }

}
