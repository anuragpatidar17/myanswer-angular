import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  dataset = ['EDC -  15EE208', 'OOAD-15SE202', 'C++ - 15SE203', 'DS - 15CS202'];

  constructor() { }

  ngOnInit() {
  }

}


