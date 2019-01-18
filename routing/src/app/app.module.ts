import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { PessoaComponent } from './pessoas/pessoa/pessoa.component';
import { VeiculoComponent } from './veiculos/veiculo/veiculo.component';
import { EditarVeiculoComponent } from './veiculos/editar-veiculo/editar-veiculo.component';
import { VeiculoService } from './veiculos/veiculo.service';
import { AppRoutingModule } from './app-routing.module';
import { VeiculoResolver } from './veiculos/veiculo-resolver.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './veiculos/can-deactivate.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    HomeComponent,
    VeiculosComponent,
    PessoaComponent,
    VeiculoComponent,
    EditarVeiculoComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    VeiculoService,
    VeiculoResolver,
    AuthService,
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
