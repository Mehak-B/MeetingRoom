import { Injectable } from "@angular/core";
import { random_users } from "../mock-data/random-users";

@Injectable({
    providedIn :'root'
})

export class AuthService{
 isAuthenticUser = false;




    isLoggedIn(email:any,pass:any){
        console.log(email,pass)

        if(random_users.some(el => el.email === email && el.password === pass)){
            localStorage.setItem("email", email)
            this.isAuthenticUser = true;
            return true;
        }
        return false;
        
    }

    isAuthentic(){

        return this.isAuthenticUser
     }

     logout(): void {
        // localStorage.removeItem(email);
        this.isAuthenticUser = false;
      }


}
