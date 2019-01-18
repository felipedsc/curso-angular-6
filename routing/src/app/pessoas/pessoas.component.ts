import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  pessoas = [new Pessoa(1, "Felipe"),
  new Pessoa(2, "João"),
  new Pessoa(3, "Maria")];
}
