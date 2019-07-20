import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
showSpinner:boolean=true;
  constructor(private data: DataService,private route:Router,private auth:AuthService) { 
    this.auth.isAuth=false;
  }

  ngOnInit() {
  this.showSpinner=false;
  }

  submit(){
    this.showSpinner=true;
    this.data.login(this.email,this.password).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){

this.auth.isAuth=true;
this.showSpinner=false;
this.data.token=res.json().token;
    let form={
      name:res.json().name,
      department:res.json().department,
      email:res.json().email
    }
    localStorage.setItem('user', JSON.stringify(form))
    this.route.navigateByUrl("home");
    }
    else{
      this.showSpinner=false;
      this.auth.isAuth=false;
      alert("Unsuccessfull login")
    }
    })
  }
  setMyStyle() {
    let styles = {
      'background':'#eb01a5',
      'background-image': 'linear-gradient(white, 	#109EDC)',
      'background-repeat':'no-repeat'
    };
    return styles;
}
}