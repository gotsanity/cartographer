import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuardService } from './auth/auth-guard.service';

import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
	{	path: 'login', component: LoginComponent },
	{	path: 'register',	component: RegisterComponent },
	{	path: 'profile', component: ProfileComponent	},
];

export const CoreRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);