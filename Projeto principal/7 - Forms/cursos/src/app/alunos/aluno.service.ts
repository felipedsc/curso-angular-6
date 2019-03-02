import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { Curso } from '../cursos/curso.model';

@Injectable()
export class AlunoService {
  private alunos: Aluno[] = [
    new Aluno("João da Silva", new Date(1990, 10, 1), null, new Curso("Angular", "Curso de Angular", [])),
    new Aluno("Maria de Souza", new Date(1990, 5, 20), null, new Curso("Angular", "Curso de Angular", [])),
    new Aluno("José da Silva", new Date(1970, 8, 30), null, null),
  ];

  constructor() { }

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
