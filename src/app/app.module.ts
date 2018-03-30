import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Services
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { BlogService } from './blog/blog.service';
import { SignupService } from './signup/signup.service';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';


// Components
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { BlogRecentComponent } from './blog/blog-recent/blog-recent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BlogDetailComponent,
    BlogListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    SignupFormComponent,
    BlogRecentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  exports: [
    AppComponent,
    BlogDetailComponent,
    BlogListComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    BlogService,
    BsModalService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
