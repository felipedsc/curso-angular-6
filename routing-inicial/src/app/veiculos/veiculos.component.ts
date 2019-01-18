import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculo.model';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  private veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.veiculos = this.veiculoService.obterVeiculos();
  }

  recarregar() {
    
  }
}
