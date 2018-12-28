import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  dataset;
searchText;
  constructor(private data:DataService) { }


  ngOnInit() {
    this.data.getsubjects().subscribe(res=>{console.log(res.json())
      this.dataset=res.json()
    })}

}


