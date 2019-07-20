import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  setMyStyle() {
    let styles = {
      'background':'#eb01a5',
      'background-image': 'linear-gradient(white, 	#109EDC)',
      'background-repeat':'no-repeat'
    };
    return styles;
}
}
