import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

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
loggedin:boolean=false;
  constructor(private auth:AuthService,private router:Router,private data:DataService) { }

  ngOnInit() {
    this.showSpinner = false;
this.loggedin=false;
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
this.data.logout();
//  this.loggedin=true;

}
canDeactivate(){
  if(!this.loggedin){
  return confirm ('Do you want to logout?');
}
else{
  return true;
}
}
subject(){
this.loggedin=true;
this.router.navigateByUrl('/subject');
}

}
