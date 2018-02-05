import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  private authUser: User;

  private loader: Loading;
  
  userProfile: Profile;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(
    private data: DataProvider,
    private auth: AuthProvider,
    private loading: LoadingController
  ) {

    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).snapshotChanges().subscribe(profile => {
        this.userProfile = <Profile>profile.payload.val();
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      })
    })
  }

}
