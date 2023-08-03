import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { alunosDeactivateGuard } from './alunos-deactivate.guard';

describe('alunosDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alunosDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
