import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
showSpinner:boolean=true;
  constructor(private router: Router) { }

  ngOnInit() {
    
   setTimeout(() => {
     this.showSpinner=false;
     this.router.navigate(['main']);
  }, 3000); 

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
