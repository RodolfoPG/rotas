import { CanActivateChildFn } from '@angular/router';

export const alunosGuard: CanActivateChildFn = (childRoute, state) => {

  // console.log(childRoute)
  // console.log(state)

  console.log('alunosGuard: Guarda de rota filha')

  if (state.url.includes('editar')) {
    // alert('Usuário sem acesso')
    // return false
  }
  return true;
};
