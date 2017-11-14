import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import * as firebase from 'firebase/app';
import {environment} from '../environments/environment';



import { AuthGuard } from './auth.service.service';
import { routes } from './app.routes';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';


firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ResetpwdComponent,
    ResetpwdComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth-firebase'),
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
