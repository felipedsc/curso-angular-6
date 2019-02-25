import { Component, OnInit } from '@angular/core';
import { Curso } from './curso.model';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursoSelecionado: Curso;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.cursoSelecionado
      .subscribe((curso: Curso) => {
        this.cursoSelecionado = curso;
      });
  }
}
