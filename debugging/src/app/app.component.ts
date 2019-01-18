import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linhas;
  linhasAdicionas: number = 0;

  adicionarLinha() {
    this.linhas.push(++this.linhasAdicionas);
  }

  removerLinha(index: number) {
    index = index + 1;
    this.linhas.splice(index, 1);
  }
}
