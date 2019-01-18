import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private usuarios = [{ tipo: "administrador", nome: "Felipe Carvalho", login: "fdsc" },
  { tipo: "comum", nome: "João da Silva", login: "joao_silva" }];

  private nome: string = "Maria de Souza";
  private login: string = "maria.souza";

  adicionarUsuarioComum() {
    this.usuarios.push({ tipo: "comum", nome: this.nome, login: this.login });
  }

  adicionarAdministrador() {
    this.usuarios.push({ tipo: "administrador", nome: this.nome, login: this.login });
  }
}
