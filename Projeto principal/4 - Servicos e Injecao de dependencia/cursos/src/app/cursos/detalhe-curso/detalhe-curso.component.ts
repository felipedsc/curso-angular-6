import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso.model';
import { MateriaService } from 'src/app/materias/materia.service';
import { Materia } from 'src/app/materias/materia.model';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  @Input("cursoSelecionado") curso: Curso;
  materias: Materia[] = [];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materias = this.materiaService.obterMaterias();
  }
}
