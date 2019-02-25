import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sessaoAtual: string = '';

  constructor(private localeService: BsLocaleService) {
    this.localeService.use("pt-br");
  }
}
