import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../materias/materia.model';
import { Curso } from '../cursos/curso.model';
import { Aluno } from '../alunos/aluno.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DadosService {

  constructor(private httpClient: HttpClient) { }

  salvarMaterias(dados: Materia[]) {
    return this.httpClient.put("https://fdsc-itix.firebaseio.com/materias.json",
      dados);
  }

  salvarCursos(dados: Curso[]) {
    return this.httpClient.put("https://fdsc-itix.firebaseio.com/cursos.json",
      dados);
  }

  salvarAlunos(dados: Aluno[]) {
    return this.httpClient.put("https://fdsc-itix.firebaseio.com/alunos.json",
      dados);
  }

  obterMaterias() {
    return this.httpClient.get<Materia[]>("https://fdsc-itix.firebaseio.com/materias.json");
  }

  obterCursos() {
    return this.httpClient.get<Curso[]>("https://fdsc-itix.firebaseio.com/cursos.json")
      .pipe(
        map(response => {
          response.forEach(curso => {
            if (!curso.materias) {
              curso.materias = [];
            }
          });

          return response;
        })
      );
  }

  obterAlunos(cursos: Curso[]) {
    return this.httpClient.get<Aluno[]>("https://fdsc-itix.firebaseio.com/alunos.json")
      .pipe(
        map(response => {
          if (response)
            response.forEach(aluno => {
              aluno.dataNascimento = new Date(aluno.dataNascimento);

              if (aluno.curso) {
                aluno.curso = cursos.find(c => c.nome === aluno.curso.nome);
              }
            });

          return response;
        })
      );
  }
}
