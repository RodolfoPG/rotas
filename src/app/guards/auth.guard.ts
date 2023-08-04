import { CanActivateFn, CanMatchFn, Route, UrlSegment } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../login/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log('AuthGuard')

  if (auth.verificaUsuarioAutenticado) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};

export const canMatchFn: CanMatchFn = (route: Route, segments: UrlSegment[]) => {

  console.log('canLoad: verificando se usuário pode carregar o cod do módulo')

  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.verificaUsuarioAutenticado) {
    return true;
  }

  router.navigate(['/login']);

  return false; 
}