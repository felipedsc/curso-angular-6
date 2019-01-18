import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() usuarioComumAdicionado = new EventEmitter<{ nome: string, login: string }>();
  @Output() administradorAdicionado = new EventEmitter<{ nome: string, login: string }>();

  // private nome: string = "Maria de Souza";
  // private login: string = "maria.souza";
  @ViewChild("usuarioLoginInput") usuarioLoginInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  adicionarUsuarioComum(usuarioNomeInput: HTMLInputElement) {
    this.usuarioComumAdicionado.emit({
      nome: usuarioNomeInput.value,
      login: this.usuarioLoginInput.nativeElement.value
    });
  }

  adicionarAdministrador() {
    // this.administradorAdicionado.emit({
    //   nome: this.nome,
    //   login: this.login
    // });
  }
}
