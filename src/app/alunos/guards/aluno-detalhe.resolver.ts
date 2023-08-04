import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';
import { Observable } from 'rxjs';

export const alunoDetalheResolver: ResolveFn<Aluno | null> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const alunos = inject(AlunosService)

  console.log('AlunoDetalheResolver')

  let id = route.params['id']

  return alunos.getAluno(id);
};
