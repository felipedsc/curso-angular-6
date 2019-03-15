import { Component, OnInit, OnDestroy } from '@angular/core';
import { Materia } from './materia.model';
import { MateriaService } from './materia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit, OnDestroy {
  materias: Materia[] = [];
  materiasMudaramSubscription: Subscription;

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materias = this.materiaService.obterMaterias();


  }

  editarMateria(index: number) {
    this.materiaService.editarMateria.next(index);
  }

  ngOnDestroy() {
    if (this.materiasMudaramSubscription)
      this.materiasMudaramSubscription.unsubscribe();
  }
}
