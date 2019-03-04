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

    this.materiasMudaramSubscription = this.materiaService.materiasMudaram
      .subscribe((materias: Materia[]) => {
        this.materias = materias;
      });
  }

  editarMateria(index: number) {
    this.materiaService.editarMateria.next(index);
  }
  
  ngOnDestroy() {
    this.materiasMudaramSubscription.unsubscribe();
  }
}
