import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = this.appService.getTitulo();
  hoteis: Hotel[] = [];

  constructor(private appService: AppService) {

  }

  adicionarHotel(nome: string, estrelas: number = 3) {
    this.hoteis.push({
      id: this.gerarId(),
      nome: nome,
      estrelas: estrelas
    });
  }

  salvarHoteis() {
    this.appService.salvarHoteis(this.hoteis)
      .subscribe(result => console.log(result),
        error => console.log(error));
  }

  obterHoteis() {
    this.appService.obterHoteis()
      .subscribe(hoteis => {
        this.hoteis = hoteis;
        //fazer depois
        // console.log(result);
      },
      error => console.log(error));
  }

  private gerarId() {
    return Math.round(Math.random() * 10000);
  }
}
