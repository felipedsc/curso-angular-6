import { Component, OnInit } from '@angular/core';
import { ContaService } from './conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: { nome: string, situacao: string }[] = [];
  novoUsuarioAdicionado: boolean = false;
  novoUsuarioAdicionadoMensagem: string = "";

  constructor(private contaService: ContaService) {}
  
  ngOnInit() {
    this.usuarios = this.contaService.usuarios;
    
    // inserir por ultimo
    this.contaService.usuarioAdicionado.subscribe(mensagem => {
      this.novoUsuarioAdicionado = true;
      this.novoUsuarioAdicionadoMensagem = mensagem;
      
      setTimeout(() => {
        this.novoUsuarioAdicionado = false;  
      }, 2000);
    });
  }
}
