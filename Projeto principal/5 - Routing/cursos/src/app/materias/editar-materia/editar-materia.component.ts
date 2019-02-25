import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Materia } from '../materia.model';
import { MateriaService } from '../materia.service';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {
  @ViewChild("nomeInput") nomeInputRef: ElementRef;
  @ViewChild("horasInput") horasInputRef: ElementRef;

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
  }

  adicionar() {
    const nome = this.nomeInputRef.nativeElement.value;
    const horas = this.horasInputRef.nativeElement.value;

    const materia = new Materia(nome, horas);
    this.materiaService.adicionarMateria(materia);
  }
}
