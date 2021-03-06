import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Http } from '.../../node_modules/@angular/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
   items=[];
  uid:any;
subject_code:any;
showSpinner:boolean=true;
  constructor(private data: DataService,private active_route:ActivatedRoute,private auth:AuthService) {
    this.active_route.params.subscribe(params => this.subject_code=params.id)
    console.log(this.subject_code);
   }

  ngOnInit() {
    // this.data.update(this.uid).subscribe(
    //   data => { this.items = data }
    // );
    this.showSpinner=false;
  }

  submit(){
    this.showSpinner=true;
    this.data.update(this.uid,this.subject_code).subscribe(res=>{
    console.log(res)
    if(res.json().status==500)
    {
      this.auth.isAuth=false;
      alert("Session Expired");

    }
    else{
    if(res.json()[0].uid!=null){
    //alert('Check question and answers')
    this.showSpinner=false;
    this.items=res.json();
    }
    else{
      this.showSpinner=false;
      alert("Not uploaded!")
    }
    }}
    )
  }}
