import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  dataset;
searchText;
college;
show:boolean=false;
  constructor(private data:DataService,private auth:AuthService,private active_route:ActivatedRoute) { 
    this.active_route.params.subscribe(params => this.college=params.id)
console.log(this.college);
  }


  ngOnInit() {
    this.data.getsubjects(this.college).subscribe(res=>{console.log(res.json())
      if(res.json().status==500)
      {
        this.auth.isAuth=false;
        alert("Session Expired");

      }
      else{
      this.dataset=res.json()
    }})}
    setMyStyle() {
      let styles = {
        'background':'#eb01a5',
        'background-image': 'linear-gradient(white, 	#109EDC)',
        'background-repeat':'no-repeat'
      };
      return styles;
  }
}


