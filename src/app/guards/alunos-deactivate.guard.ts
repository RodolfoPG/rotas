import { CanDeactivateFn } from '@angular/router';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

export const alunosDeactivateGuard: CanDeactivateFn<AlunoFormComponent> = (component, currentRoute, currentState, nextState) => {
  
  console.log('guarda de desativação')

  return component.podeMudarRota();
};
