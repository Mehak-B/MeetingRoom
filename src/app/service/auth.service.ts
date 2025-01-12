import { Injectable } from "@angular/core";
import { random_users } from "../mock-data/random-users";

@Injectable({
    providedIn :'root'
})

export class AuthService{



    isLoggedIn(email:any,pass:any){
        console.log(email,pass)

        if(random_users.some(el => el.email === email && el.password === pass)){
            return true;
        }else{
            return false;
        }
        
    }
}
