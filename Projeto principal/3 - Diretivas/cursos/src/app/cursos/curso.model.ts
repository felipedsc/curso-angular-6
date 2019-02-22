import { Materia } from "../materias/materia.model";

export class Curso {
    public nome: string;
    public descricao: string;
    public materias: Materia[] = [];

    constructor(nome: string,
        descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }
}