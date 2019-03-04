import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/materias/materia.service';
import { Materia } from 'src/app/materias/materia.model';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  formCurso: FormGroup;

  constructor(private cursoService: CursoService,
    private materiaService: MateriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params["id"];
        this.novoRegistro = !(this.id >= 0);

        this.inicializarFormulario();
      });

    this.materias = this.materiaService.obterMaterias();
  }

  private inicializarFormulario() {
    this.curso = new Curso('', '', []);

    if (!this.novoRegistro) {
      this.curso = this.cursoService.obterCurso(this.id);
    }

    this.formCurso = new FormGroup({
      "nome": new FormControl(this.curso.nome, [Validators.required, Validators.minLength(5)]),
      "descricao": new FormControl(this.curso.descricao, Validators.required),
      "materiaSelecionada": new FormControl(null),
      "materias": new FormControl([...this.curso.materias], Validators.required)
    });
  }

  adicionarMateria() {
    let indexMateriaSelecionada = this.formCurso.get("materiaSelecionada").value;

    if (indexMateriaSelecionada >= 0) {
      const materiaSelecionada = this.materias[indexMateriaSelecionada];
      this.formCurso.get("materias").value.push(materiaSelecionada);
    }
  }

  removerMateria(index: number) {
    this.formCurso.get("materias").value.splice(index, 1);
  }

  salvar() {
    if (this.novoRegistro) {
      this.cursoService.adicionarCurso(this.formCurso.value);
    } else {
      this.cursoService.atualizarCurso(this.id, this.formCurso.value);
    }
  }

  cancelar() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  get materiasSelecionadas() {
    return this.formCurso.get("materias").value;
  }
}
