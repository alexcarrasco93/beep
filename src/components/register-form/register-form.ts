import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  @Output() registerStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(
    private auth: AuthProvider
  ) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
    } catch(e) {
      console.error(e);
    }
  }

}
