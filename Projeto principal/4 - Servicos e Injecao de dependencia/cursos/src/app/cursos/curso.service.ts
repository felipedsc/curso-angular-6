import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from './curso.model';

@Injectable()
export class CursoService {
  public cursoSelecionado: EventEmitter<Curso> = new EventEmitter<Curso>();

  private cursos: Curso[] = [
    new Curso("Angular 6 & Bootstrap 4", "Introdução ao Angular 6 e Bootstrap 4"),
    new Curso("Sistemas de Informação", "Curso de Sistemas de Informação"),
    new Curso("Ciências da Computação", "Curso de Ciências da Computação")
  ];

  constructor() { }

  public obterCursos() {
    return this.cursos.slice();
  }
}
