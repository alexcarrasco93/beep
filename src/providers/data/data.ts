import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';

import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;

  constructor(private database: AngularFireDatabase) {}

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
