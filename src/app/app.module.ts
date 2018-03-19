import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { PostDetailsComponent } from './postdetails/postdetails.component';

// const ROUTES = [
// 	{
// 		path: '',
// 		redirectTo: 'posts',
// 		pathMatch: 'full'
// 	},
// 	{
// 		path: 'posts',
// 		component: PostsComponent
// 	},
//   {
//     path: 'posts/:id',
//     component: PostsComponent,
//     outlet: 'single'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
