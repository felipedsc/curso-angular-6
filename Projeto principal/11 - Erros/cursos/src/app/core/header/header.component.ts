import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/shared/dados.service';
import { MateriaService } from 'src/app/materias/materia.service';
import { CursoService } from 'src/app/cursos/curso.service';
import { AlunoService } from 'src/app/alunos/aluno.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor(private dadosService: DadosService,
    private materiaService: MateriaService,
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  salvarDados() {
    this.dadosService.salvarMaterias(this.materiaService.obterMaterias())
      .subscribe(response => {
        console.log("Matérias salvas!", response)
      });

    this.dadosService.salvarCursos(this.cursoService.obterCursos())
      .subscribe(response => {
        console.log("Cursos salvos!", response)
      });

    this.dadosService.salvarAlunos(this.alunoService.obterAlunos())
      .subscribe(response => {
        console.log("Alunos salvos!", response)
      });
  }

  carregarDados() {
    this.dadosService.obterMaterias()
      .subscribe(response => {
        console.log("Matérias obtidas!");
        this.materiaService.definirMaterias(response);
      });

    //inicialmente fazer separado...
    //necessario para corrigir problema ocasionado por falta de ID
    this.dadosService.obterCursos()
      .subscribe(cursos => {
        console.log("Cursos obtidos!");
        this.cursoService.definirCursos(cursos);

        this.dadosService.obterAlunos(this.cursoService.obterCursos())
          .subscribe(alunos => {
            console.log("Alunos obtidos!");
            this.alunoService.definirAlunos(alunos);
          });
      });
  }

  get estaAutenticado() {
    return this.authService.estaAutenticado();
  }

  logout() {
    this.authService.logout();
  }
}
