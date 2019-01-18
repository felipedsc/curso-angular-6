import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {
  veiculo: Veiculo;
  veiculoAtualizado: Veiculo;

  veiculoPlaca: string;
  veiculoTipo: string;
  veiculoSituacao: string;

  permiteEdicao: boolean = true;
  alteracoesSalvas: boolean = false;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.veiculo = this.veiculoService.obterVeiculo(1);

    this.veiculoAtualizado = new Veiculo(
      this.veiculo.id,
      this.veiculo.placa,
      this.veiculo.tipo,
      this.veiculo.situacao
    );
  }

  atualizar() {
    this.veiculoService.atualizarVeiculo(this.veiculoAtualizado);
    this.alteracoesSalvas = true;
  }

  canDeactivate() {
    if (!this.permiteEdicao) {
      return true;
    }
    if ((this.veiculoAtualizado.placa !== this.veiculo.placa
      || this.veiculoAtualizado.tipo !== this.veiculo.tipo
      || this.veiculoAtualizado.situacao !== this.veiculo.situacao) && !this.alteracoesSalvas) {
      return confirm('Deseja descartas as alterações?');
    } else {
      return true;
    }
  }
}
