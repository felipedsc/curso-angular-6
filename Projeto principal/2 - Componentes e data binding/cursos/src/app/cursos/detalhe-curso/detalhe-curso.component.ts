import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  @Input("cursoSelecionado") curso: Curso;

  constructor() { }

  ngOnInit() {
  }
}
