import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  generos = [{ valor: "M", descricao: "Masculino" },
  { valor: "F", descricao: "Feminino" },
  { valor: "N", descricao: "Não informado" }];

  enviado = false;

  ngOnInit() {
 

  }

  enviar() {

  }
}
