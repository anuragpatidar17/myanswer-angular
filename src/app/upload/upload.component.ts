import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uid:any;
  question:any;
  answer:any;
  subject_code:any;
showSpinner:boolean=true;
  constructor(private data: DataService,private active_route:ActivatedRoute,private auth :AuthService) {
    this.active_route.params.subscribe(params => this.subject_code=params.id)
   }

  ngOnInit() {
    this.showSpinner=false;
  }
  
  submit(){
    this.showSpinner=true;
    this.data.upload(this.uid,this.question,this.answer,this.subject_code).subscribe(res=>{
    console.log(res)
    if(res.json().status==500)
    {
      this.auth.isAuth=false;
      alert("Session Expired");

    }
    else{
    if(res.json().status==200){
      this.showSpinner=false;
    alert('question and asnwer uploaded successfully')

    this.uid=null;
    this.question=null;
    this.answer=null;
    }
    else{
      this.showSpinner=false;
      alert("Not uploaded!")
    }
    }})
  }}







  