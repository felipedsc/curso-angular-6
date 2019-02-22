import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Materia } from '../materia.model';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {
  @ViewChild("nomeInput") nomeInputRef: ElementRef;
  @ViewChild("horasInput") horasInputRef: ElementRef;
  @Output() materiaAdicionada: EventEmitter<Materia> = new EventEmitter<Materia>();

  constructor() { }

  ngOnInit() {
  }

  adicionar() {
    const nome = this.nomeInputRef.nativeElement.value;
    const horas = this.horasInputRef.nativeElement.value;

    const materia = new Materia(nome, horas);
    this.materiaAdicionada.emit(materia);
  }
}
