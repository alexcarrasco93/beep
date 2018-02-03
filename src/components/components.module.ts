import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular/module';
import { RegisterFormComponent } from './register-form/register-form';
import { ToastProvider } from '../providers/toast/toast';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';

@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		LoginFormComponent,
		RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent
	],
	providers: [
		ToastProvider
	]
})
export class ComponentsModule {}
