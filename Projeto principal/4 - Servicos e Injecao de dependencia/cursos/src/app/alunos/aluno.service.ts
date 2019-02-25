import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { Curso } from '../cursos/curso.model';

@Injectable()
export class AlunoService {
  private alunos: Aluno[] = [
    new Aluno("João da Silva", new Date(1990, 10, 1), new Curso("Angular", "Curso de Angular")),
    new Aluno("Maria de Souza", new Date(1990, 5, 20), new Curso("Angular", "Curso de Angular")),
    new Aluno("José da Silva", new Date(1970, 8, 30), null),
  ];

  constructor() { }

  obterAlunos() {
    return this.alunos.slice();
  }
}
