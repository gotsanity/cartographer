import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';

import { AppComponent } from './app.component';

// Services
import { AuthGuardService } from './core/auth/auth-guard.service';
import { AuthenticationService } from './core/auth/authentication.service';
import { SignupService } from './signup/signup.service';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';


// Components
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SignupFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    CoreModule,
    BlogModule,
    ModalModule.forRoot(),
    QuillModule
  ],
  exports: [
    AppComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    BsModalService,
    SignupService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
