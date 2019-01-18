import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private usuarios = [{ tipo: "administrador", nome: "Felipe Carvalho", login: "fdsc" }];

  adicionarUsuario(tipo: string, usuario: { nome: string, login: string }) {
    this.usuarios.push({ tipo: tipo, nome: usuario.nome, login: usuario.login });
  }

  alterarUsuario() {
    this.usuarios[0].login = "felipedsc";
  }

  removerUsuario() {
    this.usuarios.splice(0, 1);
  }
}
