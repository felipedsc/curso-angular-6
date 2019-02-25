import { Injectable, EventEmitter } from '@angular/core';
import { Materia } from './materia.model';

@Injectable()
export class MateriaService {
  materiasMudaram = new EventEmitter<Materia[]>();

  private materias: Materia[] = [
    new Materia('Bootstrap 4', 2),
    new Materia('Typescript', 1),
    new Materia('Angular 6', 12)
  ];

  constructor() { }

  public obterMaterias() {
    return this.materias.slice();
  }

  public adicionarMateria(materia: Materia) {
    this.materias.push(materia);
    this.materiasMudaram.emit(this.obterMaterias());
  }
}
