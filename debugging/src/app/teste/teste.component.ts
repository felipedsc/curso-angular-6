import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  titulo: string;
  constructor() { }

  ngOnInit() {
    this.titulo = "O teste foi carregado";
  }
}
