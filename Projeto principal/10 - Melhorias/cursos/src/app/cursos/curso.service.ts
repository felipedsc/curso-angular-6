import { Injectable } from '@angular/core';
import { Curso } from './curso.model';
import { Subject } from 'rxjs';

@Injectable()
export class CursoService {
  cursosMudaram = new Subject<Curso[]>();

  private cursos: Curso[] = [];

  constructor() { }

  definirCursos(cursos: Curso[]) {
    this.cursos = cursos;
    this.cursosMudaram.next(this.cursos.slice());
  }

  public obterCurso(index: number) {
    let curso = this.cursos.slice()[index];
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
