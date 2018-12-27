import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { FilterPipe } from './filter.pipe';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    FilterPipe,
    UploadComponent,
    HomeComponent,
    UpdateComponent,
    MainNavComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  FormsModule,
  BrowserAnimationsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
