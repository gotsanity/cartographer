import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
	{	path: 'blog', component: BlogListComponent },
];

export const BlogRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);