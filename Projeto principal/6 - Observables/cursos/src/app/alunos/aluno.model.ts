import { Curso } from "../cursos/curso.model";

export class Aluno {
    nome: string;
    dataNascimento: Date;
    curso: Curso;

    constructor(nome: string, dataNascimento: Date, curso: Curso) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.curso = curso;
    }
}