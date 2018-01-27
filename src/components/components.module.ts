import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular/module';
import { RegisterFormComponent } from './register-form/register-form';
import { ToastProvider } from '../providers/toast/toast';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';

@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
    EditProfileFormComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		LoginFormComponent,
		RegisterFormComponent,
    EditProfileFormComponent
	],
	providers: [
		ToastProvider
	]
})
export class ComponentsModule {}
