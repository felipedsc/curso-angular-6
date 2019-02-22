import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  caminhoFoto: string;

  constructor(private localeService: BsLocaleService) {
    setTheme("bs4");
    defineLocale("pt-br", ptBrLocale);
    this.localeService.use("pt-br");
  }

}
