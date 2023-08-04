import { CanActivateFn } from '@angular/router';
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
