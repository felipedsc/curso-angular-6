import { Curso } from "../cursos/curso.model";

export class Aluno {
    nome: string;
    dataNascimento: Date;
    caminhoFoto: string;
    curso: Curso;

    constructor(nome: string, dataNascimento: Date, caminhoFoto: string, curso: Curso) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.curso = curso;
    }
}