import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {  

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.obterCursos();
  }
}
