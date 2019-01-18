
import { Veiculo } from "./veiculo.model";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { VeiculoService } from "./veiculo.service";
import { Injectable } from "@angular/core";

@Injectable()
export class VeiculoResolver implements Resolve<Veiculo> {
    constructor(private veiculoService: VeiculoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        return this.veiculoService.obterVeiculo(+route.params["id"]);
    }
}
