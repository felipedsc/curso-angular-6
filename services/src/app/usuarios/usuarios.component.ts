import { Component, OnInit, Input } from '@angular/core';
import { ContaService } from '../conta.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  // providers: [LoggingService]
})
export class UsuariosComponent implements OnInit {
  @Input() usuario: { nome: string, situacao: string };
  @Input() id: number;

  constructor(private contaService: ContaService,
    // private loggingService: LoggingService
    ) {

  }
  ngOnInit() {
    // this.loggingService.origem = "Usuarios";
  }

  atualizarSituacao(situacao: string) {
    this.contaService.atualizarSituacao(this.id, situacao);
    // this.loggingService.novaSituacaoDetectada(situacao);    
  }
}
