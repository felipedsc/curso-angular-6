import { Component, OnInit } from '@angular/core';
import { Materia } from './materia.model';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: Materia[] = [
    new Materia('Bootstrap 4', 2),
    new Materia('Typescript', 1),
    new Materia('Angular 6', 12)
  ];

  constructor() { }

  ngOnInit() {
  }

  adicionarMateria(materia: Materia) {
    this.materias.push(materia);
  }
}
