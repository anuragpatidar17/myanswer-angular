import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  dataset;
searchText;
  constructor(private data:DataService,private auth:AuthService) { }


  ngOnInit() {
    this.data.getsubjects().subscribe(res=>{console.log(res.json())
      if(res.json().status==500)
      {
        this.auth.isAuth=false;
        alert("Session Expired");

      }
      else{
      this.dataset=res.json()
    }})}

}


