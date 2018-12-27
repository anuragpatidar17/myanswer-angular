
import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import { RouterLink, RouterLinkActive, Router } from '../../node_modules/@angular/router';
import { Subject } from '../../node_modules/rxjs';
import { SubjectComponent } from './subject/subject.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'answer-key';
  email;
  password;
  department;
  name;

  constructor() { }
  
    
}
