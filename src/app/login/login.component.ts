import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
  }
  submit(){
    this.data.login(this.email,this.password).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('successfully logged in')
    this.route.navigateByUrl("home");
    }
    else{
      alert("Unsuccessfull login")
    }
    })
  }}