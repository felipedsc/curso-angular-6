import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit, OnDestroy {
  pessoa: Pessoa;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
