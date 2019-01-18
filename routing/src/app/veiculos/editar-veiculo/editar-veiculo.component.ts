import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { CanComponentDeactivate } from '../can-deactivate.guard';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit, CanComponentDeactivate {
  veiculo: Veiculo;
  veiculoAtualizado: Veiculo;

  veiculoPlaca: string;
  veiculoTipo: string;
  veiculoSituacao: string;

  //inicia true, alterar para false - query
  permiteEdicao: boolean = false;
  alteracoesSalvas: boolean = false;

  constructor(private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams
      .subscribe((queryParams: Params) => {
        this.permiteEdicao = queryParams["permiteEdicao"] === '1';
      });

    this.route.fragment.subscribe();

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
    // debugger;
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
