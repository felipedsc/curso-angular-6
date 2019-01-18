import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

//Adicionar Injectable somente com loggingService
@Injectable()
export class ContaService {
  usuarios = [
    {
      nome: "Felipe",
      situacao: "ativo"
    },
    {
      nome: "Maria",
      situacao: "inativo"
    },
    {
      nome: "João",
      situacao: "desconhecido"
    }
  ];

  usuarioAdicionado = new EventEmitter<string>();

  //injetar loggingService depois
  constructor(private loggingService: LoggingService) { }

  adicionarUsuario(nome: string, situacao: string) {
    this.usuarios.push({ nome: nome, situacao: situacao });
    //loginService depois    
    this.loggingService.novaSituacaoDetectada(situacao);    
  }

  atualizarSituacao(id: number, situacao: string) {
    this.usuarios[id].situacao = situacao;
    //loginService depois
    this.loggingService.novaSituacaoDetectada(situacao);
  }
}
