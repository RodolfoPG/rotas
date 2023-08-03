import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core/testing';

export const cursosGuard: CanActivateChildFn = (childRoute, state) => {
  // const auth = inject(AuthService);
  // const router = inject(Router);

  console.log('Guarda de rota filha')
  return true;
  

};
