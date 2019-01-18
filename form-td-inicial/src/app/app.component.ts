import { Component } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: Usuario = new Usuario();
  
  generos = [{ valor: "M", descricao: "Masculino" },
  { valor: "F", descricao: "Feminino" },
  { valor: "N", descricao: "Não informado" }];

  enviado = false;
  tipoDefault = "comum";
}
