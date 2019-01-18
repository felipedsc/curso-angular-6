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

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    HomeComponent,
    VeiculosComponent,
    PessoaComponent,
    VeiculoComponent,
    EditarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
