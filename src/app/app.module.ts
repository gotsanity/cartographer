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
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    HomeComponent,
    PostFormComponent
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
