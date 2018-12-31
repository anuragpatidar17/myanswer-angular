import { reject, longStackSupport } from "../../node_modules/@types/q";
import { LoginComponent } from "./login/login.component";
import { iif, Observable } from "../../node_modules/rxjs";

export class AuthService {
    loggedIn = false;
   
isAuth=false;
    isAuthenticated() {
     if(this.isAuth){
console.log("isAuth is",this.isAuth)
        return true;

     } 
     else
     {
       this.isAuth=false;
         return false;
     } 
}
}