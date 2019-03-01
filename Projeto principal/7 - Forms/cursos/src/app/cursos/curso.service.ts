import { Injectable } from '@angular/core';
import { Curso } from './curso.model';
import { Materia } from '../materias/materia.model';
import { Subject } from 'rxjs';

@Injectable()
export class CursoService {
  cursosMudaram = new Subject<Curso[]>();

  private cursos: Curso[] = [
    new Curso("Angular 6 & Bootstrap 4", "Introdução ao Angular 6 e Bootstrap 4", [new Materia("Angular 6", 12), new Materia("Bootstrap 4", 4)]),
    new Curso("Sistemas de Informação", "Curso de Sistemas de Informação", null),
    new Curso("Ciências da Computação", "Curso de Ciências da Computação", [])
  ];

  constructor() { }

  public obterCurso(index: number) {
    let curso =  this.cursos.slice()[index];
    return curso;
  }

  public obterCursos() {
    return this.cursos.slice();
  }

  atualizarCurso(id: number, curso: Curso) {
    this.cursos[id] = curso;
    this.cursosMudaram.next(this.cursos.slice());
  }

  adicionarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.cursosMudaram.next(this.cursos.slice());
  }

  removerCurso(index: number) {
    this.cursos.splice(index, 1);
    this.cursosMudaram.next(this.cursos.slice());
  }
}
