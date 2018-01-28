import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from 'firebase/app';
import { LoginResponse } from '../../models/login/login-response.interface';
import { ToastProvider } from '../../providers/toast/toast';
import { DataProvider } from '../../providers/data/data';

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
    private toastProvider: ToastProvider,
    private data: DataProvider
  ) {}

  login(event: LoginResponse) {
    if (!event.error) {
      this.toastProvider.show(`Welcome to Beep, ${event.result.email}`);
      this.data.getProfile(<User>event.result).snapshotChanges().subscribe(profile => {
        profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      });
    } else {
      this.toastProvider.show(event.error.message);
    }
  }

}
