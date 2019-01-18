import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  veiculo: Veiculo;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.veiculo = this.veiculoService.obterVeiculo(1);    
  }

  editar() {

  }
}
