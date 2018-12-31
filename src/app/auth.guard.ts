import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
      
       console.log("routing works");
        return true;
    }
else{
    // navigate to login page
    console.log("routing not works");
    this.router.navigate(['main']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
}


  }
  }
  


