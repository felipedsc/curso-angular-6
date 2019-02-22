import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  @Output() cursoSelecionado: EventEmitter<Curso> = new EventEmitter<Curso>();

  cursos: Curso[] = [
    new Curso("Angular 6 & Bootstrap 4", "Introdução ao Angular 6 e Bootstrap 4"),
    new Curso("Sistemas de Informação", "Curso de Sistemas de Informação"),
    new Curso("Ciências da Computação", "Curso de Ciências da Computação")
  ];

  constructor() { }

  ngOnInit() {
  }

  selecionarCurso(curso: Curso) {
    this.cursoSelecionado.emit(curso);
  }
}
