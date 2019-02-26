import { Injectable } from '@angular/core';
import { Materia } from './materia.model';
import { Subject } from 'rxjs';

@Injectable()
export class MateriaService {
  materiasMudaram = new Subject<Materia[]>();

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
    this.materiasMudaram.next(this.obterMaterias());
  }
}
