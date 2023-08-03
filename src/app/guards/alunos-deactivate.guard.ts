import { CanDeactivateFn } from '@angular/router';

//import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IformCandeactivate } from './iform-candeactivate';

export const alunosDeactivateGuard: CanDeactivateFn<IformCandeactivate> = (component, currentRoute, currentState, nextState) => {
  
  console.log('guarda de desativação')

  //return component.podeMudarRota();
  return component.podeDesativar()
};
