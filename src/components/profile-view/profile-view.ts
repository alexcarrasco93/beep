import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/app';
import { LoadingController, Loading } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;

  loader: Loading;

  constructor(
    private data: DataProvider,
    private auth: AuthProvider,
    private loading: LoadingController
  ) {
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).snapshotChanges().subscribe(profile => {
        this.userProfile = <Profile>profile.payload.val();
        this.loader.dismiss();
      })
    })
  }

}
