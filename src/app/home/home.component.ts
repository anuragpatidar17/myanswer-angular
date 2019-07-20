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
subject(college:any){
  //console.log(college);
this.loggedin=true;
this.router.navigateByUrl('/subject/'+college);
}
setMyStyle() {
  let styles = {
    'background':'#eb01a5',
    'background-image': 'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),linear-gradient(white, 	#109EDC)',
    'background-repeat':'no-repeat',
    'background-size':'cover'
  };
  return styles;
}
}
