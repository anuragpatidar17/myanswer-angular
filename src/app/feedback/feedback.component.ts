import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  subjectfeed:any;
  booksuggest:any;
  subject_code:any;
  showSpinner:boolean=true;
  constructor(private data: DataService,private active_route:ActivatedRoute,private auth :AuthService) {
    this.active_route.params.subscribe(params => this.subject_code=params.id)
   }

  ngOnInit() {
    this.showSpinner=false;
    // this.data.getedit1(this.subject_code).subscribe(res=>{console.log(res.json())
    //   //   this.dataset=res.json()
    //   if(res.json().status==500)
    //   {
    //     this.auth.isAuth=false;
    //     alert("Session Expired");
   
    //   }
    //   else{
   
    //      this.subjectfeed=res.json()[0].subjectfeed;
    //      this.booksuggest=res.json()[0].booksuggest;
    //    }})
      }
  
 
  submit(){
    this.showSpinner=true;
    this.data.feed(this.subjectfeed,this.booksuggest,this.subject_code).subscribe(res=>{
    console.log(res)
    if(res.json().status==500)
    {
      this.auth.isAuth=false;
      alert("Session Expired");

    }
    else{
    if(res.json().status==200){
      this.showSpinner=false;
    alert('feedback uploaded successfully')
    this.subjectfeed=null;
    this.booksuggest=null;


    }
    else{
      this.showSpinner=false;
      alert("Not uploaded feedback!")
    }
    }})
  }
  setMyStyle() {
    let styles = {
      'background':'#eb01a5',
      'background-image': 'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),linear-gradient(white, 	#109EDC)',
      'background-repeat':'no-repeat',
      'background-size':'cover'
    };
    return styles;
  }
}