import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PessoasComponent } from "./pessoas/pessoas.component";
import { VeiculosComponent } from "./veiculos/veiculos.component";
import { PessoaComponent } from "./pessoas/pessoa/pessoa.component";
import { VeiculoComponent } from "./veiculos/veiculo/veiculo.component";
import { EditarVeiculoComponent } from "./veiculos/editar-veiculo/editar-veiculo.component";
import { VeiculoResolver } from "./veiculos/veiculo-resolver.service";
import { AuthGuard } from "./auth.guard";
import { CanDeactivateGuard } from "./veiculos/can-deactivate.guard";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'pessoas', component: PessoasComponent, children: [
            { path: ':id/:nome', component: PessoaComponent }
        ]
    },
    {
        path: 'veiculos',
        component: VeiculosComponent,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            //criar resolver depois
            { path: ':id', component: VeiculoComponent, resolve: { veiculo: VeiculoResolver } },
            { path: ':id/edit', component: EditarVeiculoComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    // { path: 'not-found', component: NotFoundComponent}
    // adicionar depois \/
    { path: 'not-found', component: ErrorPageComponent, data: { mensagemErro: "ERRO! Página não encontrada" } },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // imports: [RouterModule.forRoot(routes, {useHash: true})]
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    //criar primeiro
}