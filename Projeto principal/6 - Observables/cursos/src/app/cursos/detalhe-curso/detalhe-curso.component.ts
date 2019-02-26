import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso.model';
import { MateriaService } from 'src/app/materias/materia.service';
import { Materia } from 'src/app/materias/materia.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  id: number;
  curso: Curso;

  constructor(private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params["id"];
        this.curso = this.cursoService.obterCurso(this.id);
      });
  }

  editar() {
    this.router.navigate(["editar"], { relativeTo: this.route });
  }
}
