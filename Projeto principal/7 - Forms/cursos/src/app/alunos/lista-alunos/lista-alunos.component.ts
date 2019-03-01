import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit() {
    this.alunos = this.alunoService.obterAlunos();
  }

  selecionarAluno(id: number) {
    this.router.navigate(['/alunos', id, 'editar']);
  }

  novoAluno() {
    this.router.navigate(['/alunos', 'novo']);
  }
}
