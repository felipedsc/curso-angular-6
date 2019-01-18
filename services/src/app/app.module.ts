import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { ContaService } from './conta.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    NovoUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContaService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
