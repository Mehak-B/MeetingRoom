import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { inject } from '@angular/core';

export const auth: CanActivateFn = (route, state) => {

  
  const authSer = inject(AuthService) 
  const route1 = inject(Router)

  if(authSer.isAuthentic()){
    return true;

  }else{
   route1.navigate([''])
  return false;
  }
};
