import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculo.model';
import { VeiculoService } from './veiculo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  private veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.veiculos = this.veiculoService.obterVeiculos();
  }

  recarregar() {
    //Rota absoluta
    //alternar com pessoas
    //this.router.navigate(['veiculos', '1']);

    //relativa
    // this.router.navigate(['veiculos'], { relativeTo: this.route });
  }
}
