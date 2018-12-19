import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uid:any;
  question:any;
  answer:any;

  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
  }
  
  submit(){
    this.data.upload(this.uid,this.question,this.answer).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('question and asnwer uploaded')
    this.route.navigateByUrl("upload");
    }
    else{
      alert("Not uploaded!")
    }
    })
  }}







  