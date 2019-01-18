import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo.model';

export class VeiculoService {
  private veiculos: Veiculo[] = [
    new Veiculo(1, 'ABC1234', 'Carro', 'Nada consta'),
    new Veiculo(2, 'MBX3324', 'Moto', 'Multa'),
    new Veiculo(3, 'LRU9863', 'Caminhão', 'Nada consta')
  ];

  constructor() { }

  obterVeiculos() {
    return this.veiculos;
  }

  obterVeiculo(id: number) {
    const veiculo = this.veiculos.find(v => v.id === id);
    return veiculo;
  }

  atualizarVeiculo(veiculoAtualizado: Veiculo) {
    const veiculo = this.veiculos.find(v => v.id === veiculoAtualizado.id);

    if (veiculo) {
      veiculo.placa = veiculoAtualizado.placa;
      veiculo.situacao = veiculoAtualizado.situacao;
      veiculo.tipo = veiculoAtualizado.tipo;
    }
  }
}
