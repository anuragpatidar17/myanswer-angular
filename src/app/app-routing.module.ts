import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
  },
  
  
  {
    path:'subject',
    component:SubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'main',
    component:MainComponent,
   
  },
  {
    path:'upload/:id',

    component:UploadComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update/:id',
    component:UpdateComponent,
    canActivate:[AuthGuard]
  },
  // {
  //   path:'404',
  //   component:ErrorComponent
  // },
  
  // { path: '**', redirectTo: '404' },
  {

    path:'edit/:id1/:id2',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
