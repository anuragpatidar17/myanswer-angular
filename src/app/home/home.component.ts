import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    
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

}
