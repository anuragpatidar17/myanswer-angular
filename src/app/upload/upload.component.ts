import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


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

  constructor(private data: DataService,private active_route:ActivatedRoute) {
    this.active_route.params.subscribe(params => this.subject_code=params.id)
   }

  ngOnInit() {
  }
  
  submit(){
    this.data.upload(this.uid,this.question,this.answer,this.subject_code).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('question and asnwer uploaded successfully')
    this.uid=null;
    this.question=null;
    this.answer=null;
    }
    else{
      alert("Not uploaded!")
    }
    })
  }}







  