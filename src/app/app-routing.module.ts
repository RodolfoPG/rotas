import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { cursosGuard } from './guards/cursos.guard';
import { alunosGuard } from './guards/alunos.guard';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
  { path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
  canActivate: [authGuard],
  canActivateChild: [cursosGuard]
  },
  { path: 'alunos',
  loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
  canActivate: [authGuard],
  //canActivateChild: [alunosGuard]
  },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
