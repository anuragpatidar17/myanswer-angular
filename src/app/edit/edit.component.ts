import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:any;
  uid:any;
  question:any;
  answer:any;
subject_code:any;
dataset:any;
changesSaved = false;
  constructor(private data: DataService,private route:Router,private active_route:ActivatedRoute) {
    this.active_route.params.subscribe(params =>{
      this.subject_code=params.id1,
      this.id=params.id2
    })

    console.log(this.subject_code,this.id);
   }

  ngOnInit() {
    this.data.getedit(this.id,this.subject_code).subscribe(res=>{console.log(res.json())
   //   this.dataset=res.json()
      this.uid=res.json()[0].uid;
      this.id=res.json()[0].id;
      this.question=res.json()[0].question;
      this.answer=res.json()[0].answer;
    })}

    

  submit(){
    this.data.postedit(this.id,this.uid,this.question,this.answer,this.subject_code).subscribe(res=>{
    console.log(res)
    if(res.json().status==200){
    alert('Data Updated!')
    this.changesSaved=true;
    this.route.navigateByUrl("subject");
    }
    else{
      alert("Unsuccessfull update")
    }
    })
}
canDeactivate(){
  if(!this.changesSaved){
  return confirm ('Do you want to discard the changes?');
}
else{
  return true;
}
}
}


  
