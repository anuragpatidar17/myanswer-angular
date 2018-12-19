import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { Http } from '.../../node_modules/@angular/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
   items:any;
  uid:any;

  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
    this.data.update(this.uid).subscribe(
      data => { this.items = data }
    );
  }

  submit(){
    this.data.update(this.uid).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('Check question and answers')
    }
    else{
      alert("Not uploaded!")
    }
    })
  }}
