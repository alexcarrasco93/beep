import { Component, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  @Output() selectedProfile: EventEmitter<Profile>;

  query: string;

  profileList: Profile[];

  constructor(
    private data: DataProvider
  ) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string) {
    const trimmedQuery = query.trim();
    if (trimmedQuery === query) {
      this.data.searchUser(query).subscribe((profiles: Profile[]) => {
        this.profileList = profiles;
      });
    }
  }

}
