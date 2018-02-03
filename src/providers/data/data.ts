import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';

import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;

  profileList: AngularFireList<Profile>;

  constructor(private database: AngularFireDatabase) {}

  searchUser(firstName: string) {
    const query = this.database.list('/profiles', query => 
      query
        .orderByChild('firstName')
        .equalTo(firstName)
    )

    return query.valueChanges().take(1);
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    return this.profileObject;
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
