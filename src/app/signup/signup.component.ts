import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name:any;
  email:any;
  department:any;
  password:any;

  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
  }
  submit(){
    this.data.signup(this.name,this.email,this.department,this.password).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('successfully signup')
    this.route.navigateByUrl("login");
    }
    else{
      alert("Unsuccessfull signup")
    }
    })
}}
