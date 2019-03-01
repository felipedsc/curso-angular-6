import { Injectable } from '@angular/core';
import { Materia } from './materia.model';
import { Subject } from 'rxjs';

@Injectable()
export class MateriaService {
  
  materiasMudaram = new Subject<Materia[]>();
  editarMateria = new Subject<number>();

  private materias: Materia[] = [
    new Materia('Bootstrap 4', 2),
    new Materia('Typescript', 1),
    new Materia('Angular 6', 12)
  ];

  constructor() { }

  public obterMaterias() {
    return this.materias.slice();
  }

  obterMateria(index: number): Materia {
    return { ...this.materias[index] };
  }

  public adicionarMateria(materia: Materia) {
    this.materias.push(materia);
    this.materiasMudaram.next(this.obterMaterias());
  }

  atualizarMateria(index: number, materia: Materia) {
    this.materias[index] = materia;
    this.materiasMudaram.next(this.materias.slice());
  }

  removerMateria(index: number) {
    this.materias.splice(index, 1);
    this.materiasMudaram.next(this.materias.slice());
  }
}
