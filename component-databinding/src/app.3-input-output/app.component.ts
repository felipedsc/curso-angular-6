import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private usuarios = [{ tipo: "administrador", nome: "Felipe Carvalho", login: "fdsc" },
  { tipo: "comum", nome: "João da Silva", login: "joao_silva" }];

  adicionarUsuario(tipo: string, usuario: { nome: string, login: string }) {
    this.usuarios.push({ tipo: tipo, nome: usuario.nome, login: usuario.login });
  }
}
