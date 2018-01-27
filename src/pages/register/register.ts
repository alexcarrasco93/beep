import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private navCtrl: NavController,
    private toastProvider: ToastProvider
  ) {}

  register(event: LoginResponse) {
    if (!event.error) {
      this.toastProvider.show(`Account created: ${event.result.email}`);
    } else {
      this.toastProvider.show(`Account not created. ${event.error.message}`)
    }
  }

}
