import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
show:boolean=false;
name:any;
email:any;
department:any;
showSpinner: boolean = true;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.showSpinner = false
  }
change()
{
  this.show=!this.show;
 // console.log(localStorage.getItem('user'));
  var userData = localStorage.getItem("user");
if (userData) {
    console.log(JSON.parse(userData));
  var user=JSON.parse(userData)
  this.name=user.name
  this.department=user.department
  this.email=user.email
} 
}
logout(){
  this.auth.isAuth=false;
  localStorage.removeItem("user");

}

}
