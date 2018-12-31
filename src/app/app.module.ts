import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AuthGuard } from '../app/auth.guard';
import { AuthService } from './auth.service';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    ErrorComponent,
    EditComponent,
    LoadingSpinnerComponent
   
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
  providers:
  [AuthGuard,AuthService,CanDeactivateGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
