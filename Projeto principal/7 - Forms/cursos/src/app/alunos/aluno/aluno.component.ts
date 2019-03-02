import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { CursoService } from 'src/app/cursos/curso.service';
import { Curso } from 'src/app/cursos/curso.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  cursos: Curso[] = [];
  id: number;
  aluno: Aluno;

  constructor(private alunoService: AlunoService,
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.cursos = this.cursoService.obterCursos();

    this.route.params
      .subscribe((params: Params) => {
        this.id = +params["id"];

        this.carregarAluno();
      });
  }

  carregarAluno() {
    if (this.id >= 0) {
      this.aluno = this.alunoService.obterAluno(this.id);
    } else {
      this.aluno = new Aluno(null, null, null, null);
    }
  }

  get estaEditando() {
    return this.id >= 0;
  }

  cancelar() {
    this.router.navigate(["/alunos"]);
  }

  salvar() {
    if (this.estaEditando) {
      this.alunoService.atualizarAluno(this.id, this.aluno);
    } else {
      this.alunoService.adicionarAluno(this.aluno);
    }
  }

  trackByIndex(index: number, curso: Curso){
    return index;
  }
}
