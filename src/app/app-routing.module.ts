import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
	{ path: '', redirectTo: 'home',	pathMatch: 'full'	},
	{	path: 'home',	component: HomeComponent },
	{	path: 'blog',	loadChildren: 'app/blog/blog.module#BlogListComponent' },
	{	path: 'login', loadChildren: 'app/core/core.module#LoginComponent'	},
	{	path: 'register',	loadChildren: 'app/core/core.module#RegisterComponent' },
	{	path: 'profile', loadChildren: 'app/core/core.module#ProfileComponent'	},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);