import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunos = this.alunoService.obterAlunos();
  }

  selecionarAluno(id: number, aluno: Aluno) {
    console.log(`Aluno (${id}) ${aluno.nome} selecionado.`)
  }
}
