import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoLowercase = "meu teste de pipe";
  textoUppercase = "MEU TESTE DE PIPE";
  data = Date.now();
  dados = { id: 1, nome: "João", sobrenome: "da Silva", valor: 1 };
  textoLimitar = "Exemplo de texto para ser limitado";

  filtro: string = "";
  frutas = [{
    nome: "Manga",
    quantidade: 10
  }, {
    nome: "Maçã",
    quantidade: 2
  }, {
    nome: "Banana",
    quantidade: 5
  }, {
    nome: "Uva",
    quantidade: 2
  }];

  adicionarTomate() {
    this.frutas.push({ nome: "Tomate", quantidade: 1 });
  }

  servidor = new Promise((resolve, reject) => {
    setTimeout(() => {
      //inicialmente só "online"
      resolve({ nome: "Teste", status: "online"});
    }, 2000);
  });
}
