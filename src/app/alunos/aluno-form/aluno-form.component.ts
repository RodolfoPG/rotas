import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { IformCandeactivate } from 'src/app/guards/iform-candeactivate';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IformCandeactivate {

  aluno: any = {}
  inscricao!: Subscription
  private formMudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']

        this.aluno = this.alunosService.getAluno(id)

        if (this.aluno === null) {
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  onInput() {
    this.formMudou = true
    console.log('mudou')
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tema certeza que deseja sair dessa página?')
    }

    return true
  }

  podeDesativar() {
    return this.podeMudarRota()
  }
}
