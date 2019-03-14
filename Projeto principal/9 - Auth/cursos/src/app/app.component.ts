import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sessaoAtual: string = '';

  constructor(private localeService: BsLocaleService) {
    this.localeService.use("pt-br");
  }

  ngOnInit() {
  }
}
