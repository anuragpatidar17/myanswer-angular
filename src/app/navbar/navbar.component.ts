import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
show:boolean=false;
name:any;
email:any;
department:any;
showSpinner: boolean = true;
loggedin:boolean=false;

  constructor(private auth:AuthService,private router:Router,private data:DataService) { 

    var userData = localStorage.getItem("user");
    if (userData) {
        console.log(JSON.parse(userData));
      var user=JSON.parse(userData)
      this.name=user.name
      this.department=user.department
      this.email=user.email
  }
}

  ngOnInit() {
  

}



}