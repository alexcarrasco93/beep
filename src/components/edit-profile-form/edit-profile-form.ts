import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {

  @Output() saveProfileResult: EventEmitter<Boolean>;

  profile = {} as Profile;

  private authenticatedUser$: Subscription;

  private authenticatedUser: User;


  constructor(
    private data: DataProvider,
    private auth: AuthProvider
  ) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
