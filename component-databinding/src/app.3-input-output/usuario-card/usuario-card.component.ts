import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {
  @Input("loginUsuario") login: string;

  constructor() { }

  ngOnInit() {    
  }
}
