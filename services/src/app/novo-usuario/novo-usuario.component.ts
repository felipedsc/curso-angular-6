import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
  // providers: [LoggingService]
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private contaService: ContaService,
    // private loggingService: LoggingService
  ) { }

  ngOnInit() {
    // this.loggingService.origem = "Novo Usuario";
  }

  adicionarUsuario(nome: string, situacao: string) {
    this.contaService.adicionarUsuario(nome, situacao);
    // this.loggingService.novaSituacaoDetectada(situacao);    
    this.contaService.usuarioAdicionado.emit(`Usuário ${nome} foi adicionado`);
  }
}
