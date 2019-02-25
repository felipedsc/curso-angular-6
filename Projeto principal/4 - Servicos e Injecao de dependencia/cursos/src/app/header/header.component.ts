import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navegacaoSelecionada = new EventEmitter<string>();

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  aoNavegar(sessao: string) {
    this.navegacaoSelecionada.emit(sessao);
  }
}
