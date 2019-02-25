import { Component, OnInit } from '@angular/core';
import { Materia } from './materia.model';
import { MateriaService } from './materia.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: Materia[] = [];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materias = this.materiaService.obterMaterias();

    this.materiaService.materiasMudaram
      .subscribe((materias: Materia[]) => {
        this.materias = materias;
      });
  }
}
