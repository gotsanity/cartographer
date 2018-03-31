import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
	{	path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogSingleComponent },
];

export const BlogRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);