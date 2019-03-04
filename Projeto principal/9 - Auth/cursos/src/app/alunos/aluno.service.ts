import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';

@Injectable()
export class AlunoService {
  private alunos: Aluno[] = [];

  constructor() { }

  definirAlunos(alunos: Aluno[]) {
    this.alunos = alunos;
  }

  obterAlunos() {
    return this.alunos.slice();
  }

  obterAluno(index: number) {
    return { ...this.alunos[index] };
  }

  adicionarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }

  atualizarAluno(index: number, aluno: Aluno) {
    this.alunos[index] = aluno;
  }

  removerAluno(index: number) {
    this.alunos.splice(index, 1);
  }
}
