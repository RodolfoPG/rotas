import { CanActivateChildFn } from '@angular/router';

export const alunosGuard: CanActivateChildFn = (childRoute, state) => {

  // console.log(childRoute)
  // console.log(state)

  if (state.url.includes('editar')) {
    // alert('Usuário sem acesso')
    // return false
  }
  return true;
};
