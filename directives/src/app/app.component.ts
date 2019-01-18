import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numeros = [];
  numerosPares = [];
  somentePares = false;
  value = 100;

  ngOnInit() {
    for (let i = 1; i <= 8; i++) {
      this.numeros.push(i);

      if (i % 2 == 0) {
        this.numerosPares.push(i);
      }
    }
  }
}
