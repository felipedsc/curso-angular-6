import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo.model';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  veiculo: Veiculo;

  constructor(private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //colocar debugger e explicar motivo do +
    // const id = +this.route.snapshot.params["id"];
    // this.veiculo = this.veiculoService.obterVeiculo(id);

    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.veiculo = this.veiculoService.obterVeiculo(+params["id"]);
    //   });

    //depois -> com resolver
    this.route.data
      .subscribe((data: Data) => {
        this.veiculo = data["veiculo"];
      })
  }

  editar() {
    //receber parametros no editar-veiculo!
    // this.router.navigate(['edit'], { relativeTo: this.route });
    //depois
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve', preserveFragment: true });
  }
}
