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
showSpinner:boolean=true;
  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
  this.showSpinner=false;
  }
  submit(){
    this.showSpinner=true;
    this.data.signup(this.name,this.email,this.department,this.password).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
      this.showSpinner=false;
    alert('successfully signup')
    this.route.navigateByUrl("login");
    }
    else{
      this.showSpinner=false;
      alert("Unsuccessfull signup")
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
