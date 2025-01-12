import { CanActivateFn } from '@angular/router';

export const auth: CanActivateFn = (route, state) => {
  return true;
};
