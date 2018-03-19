import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './postdetails/postdetails.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full'
	},
	{
		path: 'posts',
		component: PostsComponent
	},
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }