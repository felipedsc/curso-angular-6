import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/materias/materia.service';
import { Materia } from 'src/app/materias/materia.model';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  novoRegistro = true;
  id: number;
  materias: Materia[] = [];
  curso: Curso;

  constructor(private cursoService: CursoService,
    private materiaService: MateriaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params["id"];
        this.curso = this.cursoService.obterCurso(this.id);
        this.novoRegistro = false;
      });

    this.materias = this.materiaService.obterMaterias();

    if (this.novoRegistro) {
      this.curso = this.cursoService.obterCurso(this.id);
    } else {
      this.curso = new Curso('', '', []);
    }
  }
}
